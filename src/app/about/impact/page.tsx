import type { Metadata } from "next";
import styles from "../about.module.css";

export const metadata: Metadata = {
  title: "Our Impact | About Us",
  description: "See the positive impact Zedjah is making in sustainable agriculture and community resilience.",
};

export default function ImpactPage() {
  return (
    <>
      <section className={styles.pageHero} id="impact-hero">
        <div className="container">
          <span className={styles.tag}>Our Impact</span>
          <h1 className={styles.pageTitle}>Empowering communities</h1>
          <p className={styles.pageSubtitle}>
            Our projects have improved community resilience and overcome the effects of conventional agriculture.
          </p>
        </div>
      </section>

      <section className="section" id="impact-content">
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-sm)" }}>500+</h2>
              <h4>Farmers Supported</h4>
              <p>Providing hands-on organic training and financial literacy.</p>
            </div>
            <div className={styles.valueCard}>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-sm)" }}>1000+</h2>
              <h4>Acres Transitioned</h4>
              <p>Acres of conventional land successfully transitioned to sustainable agroecology.</p>
            </div>
            <div className={styles.valueCard}>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-sm)" }}>100%</h2>
              <h4>Organic Input</h4>
              <p>Ensuring healthy soils and robust crops without synthetic chemicals.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
