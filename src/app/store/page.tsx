import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import styles from "./store.module.css";
import ShopCatalog from "./ShopCatalog";
import { PRODUCTS } from "./products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The Zedjah Shop: organic produce grown on our farms and by partner farmers across Kenya.",
};

const CATEGORIES = [
  { key: "fresh", label: "Fresh produce", count: PRODUCTS.filter((p) => p.category === "fresh").length },
  { key: "nuts-oils", label: "Nuts and oils", count: PRODUCTS.filter((p) => p.category === "nuts-oils").length },
  { key: "pantry", label: "Pantry", count: PRODUCTS.filter((p) => p.category === "pantry").length },
];

const GROWERS = [
  { key: "zedjah", label: "Zedjah farms", count: PRODUCTS.filter((p) => p.grower === "zedjah").length },
  { key: "partner", label: "Partner growers", count: PRODUCTS.filter((p) => p.grower === "partner").length },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} id="shop-hero">
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>A shop rooted in Kenya.</h1>
          <p className={styles.heroSubtitle}>
            Harvests from our farms and a growing network of youth-led farmers,
            packed the week they ripen and shipped the day you order.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className={styles.catalogSection} id="shop-shelf">
        <div className="container">
          <ShopCatalog
            products={PRODUCTS}
            categories={CATEGORIES}
            growers={GROWERS}
          />
        </div>
      </section>

      {/* Close */}
      <section className={styles.close} id="shop-close">
        <div className={`container ${styles.closeInner}`}>
          <h2 className={styles.closeTitle}>Order a basket, or list one.</h2>
          <div className={styles.closeButtons}>
            <a href="/contact" className="btn btn-primary">Order from the shop</a>
            <a href="/contact" className={`btn btn-ghost ${styles.closeGhost}`}>
              List your harvest <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
