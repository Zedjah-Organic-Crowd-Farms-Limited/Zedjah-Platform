import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Globe } from "lucide-react";
import styles from "../store.module.css";
import { PRODUCTS, findProduct, relatedProducts } from "../products";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return { title: "Shop" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product.id, 3);

  return (
    <>
      {/* Breadcrumbs + the product */}
      <section className={styles.productTop} id="product-top">
        <div className="container">
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/store">Shop</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href={`/store?category=${product.category}`}>{product.categoryLabel}</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className={styles.productGrid}>
            <figure
              className={styles.productFigure}
              data-tone={product.tone}
              aria-hidden="true"
            >
              <span className={styles.productMark}>{product.name}</span>
            </figure>

            <div className={styles.productInfo}>
              <h1 className={styles.productName}>{product.name}</h1>
              <p className={styles.productSubtitle}>{product.subtitle}</p>
              <p className={styles.productTagline}>{product.tagline}</p>

              <div className={styles.productMeta}>
                <div>
                  <span className={styles.metaKey}>Grown by</span>
                  <span className={styles.metaValue}>{product.growerLabel}</span>
                </div>
                <div>
                  <span className={styles.metaKey}>From</span>
                  <span className={styles.metaValue}>{product.origin}</span>
                </div>
              </div>

              <div className={styles.sizeBlock}>
                <span className={styles.sizeLabel}>Select size</span>
                <div className={styles.sizeOptions}>
                  <button
                    type="button"
                    className={`${styles.sizeChip} ${styles.sizeChipActive}`}
                    aria-pressed="true"
                  >
                    {product.size}
                  </button>
                </div>
                <p className={styles.sizeNote}>
                  Only this size is in stock this week.
                </p>
              </div>

              <div className={styles.basketNote}>
                <span className={styles.basketKicker}>Best value</span>
                <p>
                  Save on a six-harvest basket — mix this product with any five
                  others.
                </p>
                <Link href="/contact" className={styles.basketLink}>
                  See basket deals <ArrowRight size={14} />
                </Link>
              </div>

              <div className={styles.priceRow}>
                <span className={`${styles.productPrice} num`}>{product.price}</span>
                <span className={styles.priceUnit}>for one {product.size.toLowerCase()}</span>
              </div>

              <div className={styles.availability}>
                <Globe size={16} aria-hidden="true" />
                <p>
                  Delivery in Nairobi within 24 hours. Nationwide within three
                  days. Pay on delivery or by M-Pesa.
                </p>
              </div>

              <div className={styles.productCtas}>
                <Link href="/contact" className="btn btn-primary">
                  Order now
                </Link>
                <Link href="/contact" className={`btn btn-ghost ${styles.closeGhost}`}>
                  Ask a question <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + story */}
      <section className={styles.productStory} id="product-story">
        <div className={`container ${styles.productStoryGrid}`}>
          <div>
            <h2 className={styles.productStoryTitle}>About this harvest</h2>
            <p className={styles.productStoryBody}>{product.description}</p>
          </div>
          <dl className={styles.productDetails}>
            {product.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Origin story */}
      <section className={styles.productOriginStory} id="product-origin">
        <div className={`container ${styles.productOriginInner}`}>
          <h2 className={styles.productOriginTitle}>From the grower</h2>
          <p className={styles.productOriginBody}>{product.story}</p>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className={styles.related} id="related">
          <div className="container">
            <div className={styles.relatedHead}>
              <h2 className={styles.relatedTitle}>You might also carry home</h2>
              <Link href="/store" className={styles.relatedBack}>
                Back to the shelf <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/store/${r.id}`}
                  className={styles.relatedCard}
                  id={`related-${r.id}`}
                >
                  <div className={styles.cardMedia} data-tone={r.tone} aria-hidden="true">
                    <span className={styles.cardMark}>{r.name}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{r.name}</h3>
                    <p className={styles.cardSubtitle}>{r.subtitle}</p>
                    <div className={styles.cardFoot}>
                      <span className={`${styles.cardPrice} num`}>{r.price}</span>
                      <span className={styles.cardLink}>
                        More details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
