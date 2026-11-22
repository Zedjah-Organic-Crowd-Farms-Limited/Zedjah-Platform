import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sprout } from "lucide-react";
import { PRODUCTS } from "./store/products";
import styles from "./page.module.css";

const SHELF_PICKS = PRODUCTS.filter((p) =>
  ["macadamia-kernels", "hass-avocado", "sweet-potato", "honey"].includes(p.id)
);

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Growing Together,{" "}
            <span className={styles.heroAccent}>Harvesting the Future</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Zedjah connects communities to organic agriculture through expert
            consultancy, crowd farming, and sustainable market solutions.
          </p>
          <div className={styles.heroCtas}>
            <a href="/services" className="btn btn-accent" id="hero-cta-primary">
              Explore our services <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Pullquote band ─── */}
      <section className={styles.pullquote} id="pullquote">
        <div className={`container ${styles.pullquoteInner}`}>
          <p className={styles.pullquoteText}>
            Good food begins at the source.<span className={styles.pullquoteBreak}> </span>
            <span className={styles.pullquoteDim}>We stay close to it.</span>
          </p>
          <div className={styles.pullquoteMeta}>
            <span className={styles.pullquoteKey}>From the farms of</span>
            <span className={styles.pullquoteValue}>Zedjah Organic Crowd Farms</span>
          </div>
        </div>
      </section>

      {/* ─── From our shelf ─── */}
      <section className={styles.shelf} id="shelf-preview">
        <div className="container">
          <div className={styles.shelfHead}>
            <h2 className={styles.sectionTitle}>From our shelf</h2>
            <p className={styles.shelfSub}>
              A short pick from this week&apos;s harvests. Grown on our farms
              and by partner growers across Kenya.
            </p>
            <Link href="/store" className={styles.shelfLink}>
              See the full shelf <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.shelfGrid}>
            {SHELF_PICKS.map((p) => (
              <Link
                key={p.id}
                href={`/store/${p.id}`}
                className={styles.shelfCard}
                id={`shelf-${p.id}`}
                data-tone={p.tone}
              >
                <div className={styles.shelfCardMark} aria-hidden="true">
                  <span>{p.name}</span>
                </div>
                <div className={styles.shelfCardBody}>
                  <h3 className={styles.shelfCardTitle}>{p.name}</h3>
                  <p className={styles.shelfCardSub}>{p.subtitle}</p>
                  <div className={styles.shelfCardFoot}>
                    <span className={`${styles.shelfCardPrice} num`}>{p.price}</span>
                    <span className={styles.shelfCardCta}>
                      More details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Marketplace Promotion Section ─── */}
      <section className={`section ${styles.marketplaceSection}`} id="marketplace-preview">
        <div className="container">
          <div className={styles.marketplaceGrid}>
            <div className={styles.marketplaceText}>
              <h2 className={styles.sectionTitle}>
                Zedjah Marketplace{" "}
                <span className={styles.titleAccent}>Harvests Delivered Direct</span>
              </h2>
              <p>
                We are cultivating an innovative direct-to-consumer e-commerce platform. Soon, you will be able to purchase certified organic farm produce, premium agricultural tools, and specialized soil nutrients directly from our crowd-funded farms.
              </p>
              <div className={styles.marketFeatures}>
                <div className={styles.marketFeature}>
                  <div className={styles.featureIcon}>
                    <Sprout size={20} />
                  </div>
                  <div>
                    <strong>100% Organic Certified</strong>
                    <p>Verified organic crops grown under expert agricultural supervision.</p>
                  </div>
                </div>
                <div className={styles.marketFeature}>
                  <div className={styles.featureIcon}>
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <strong>Direct Farm Link</strong>
                    <p>No middlemen. Better prices for consumers, fairer compensation for farmers.</p>
                  </div>
                </div>
              </div>
              <Link href="/store" className="btn btn-accent" id="landing-store-cta">
                Explore Marketplace <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.marketplaceImageContainer}>
              <div className={styles.marketplaceImageWrapper}>
                <Image
                  src="/images/marketplace-box.png"
                  alt="Fresh organic farm box with vegetables and fruits"
                  width={600}
                  height={500}
                  className={styles.marketImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className={styles.ctaBanner} id="cta-banner">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready to grow with us?</h2>
            <p className={styles.ctaSubtitle}>
              Join hundreds of farmers building sustainable futures with Zedjah.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className="btn btn-primary" id="cta-contact">
                Get in Touch
              </a>
              <a href="/services" className={`btn btn-ghost ${styles.ctaGhost}`} id="cta-services">
                View Services <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
