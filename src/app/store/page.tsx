import Link from "next/link";
import { ArrowLeft, ShoppingBag, Mail, Compass } from "lucide-react";
import styles from "./store.module.css";

export const metadata = {
  title: "E-commerce Store | Zedjah",
  description: "The Zedjah Organic Crowd Farming marketplace is coming soon. Subscribe or contact us to learn more.",
};

export default function StoreComingSoon() {
  return (
    <div className={styles.container}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrapper}>
          <ShoppingBag className={styles.icon} size={48} />
        </div>
        
        <span className={styles.badge}>Coming Soon</span>
        
        <h1 className={styles.title}>
          The Zedjah <span className={styles.accent}>Marketplace</span>
        </h1>
        
        <p className={styles.description}>
          We are cultivating a direct-to-consumer digital store connecting our sustainable organic farms directly to your table. Soon, you will be able to purchase fresh produce, farm products, and consult packages directly from this platform.
        </p>

        <div className={styles.progressContainer}>
          <div className={styles.progressLabel}>
            <span>Cultivating Platform</span>
            <span>75% Complete</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/" className="btn btn-primary" id="store-home-btn">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn btn-outline" id="store-contact-btn">
            <Mail size={16} /> Get Notified
          </Link>
        </div>
      </div>

      <div className={styles.backgroundBlob1} />
      <div className={styles.backgroundBlob2} />
    </div>
  );
}
