import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zedjah's agricultural services — farm consultancy, soil & nutrition analysis, market linkage, and more.",
};

const SERVICES = [
  {
    image: "/images/service-consultancy.png",
    alt: "Farm consultant discussing crop planning with a farmer in the field",
    title: "Farm Management & Consultancy",
    description:
      "Our expert consultants work alongside you to develop tailored farm management plans. From crop selection and rotation planning to resource optimization and risk management — we help you make informed decisions that boost productivity and profitability.",
    features: [
      "Customized farm management plans",
      "Crop selection & rotation advisory",
      "Resource & budget optimization",
      "Risk assessment & mitigation",
    ],
  },
  {
    image: "/images/service-soil.png",
    alt: "Hands holding rich fertile soil with a seedling growing from it",
    title: "Soil & Plant Nutrition",
    description:
      "Healthy soil means healthy crops. Our soil scientists conduct thorough analyses and design nutrition programs that restore and maintain soil vitality, ensuring your land produces its best yield season after season.",
    features: [
      "Comprehensive soil testing & analysis",
      "Custom fertilization programs",
      "Organic amendment recommendations",
      "Long-term soil health planning",
    ],
  },
  {
    image: "/images/service-market.png",
    alt: "Vibrant African produce market with farmers and buyers exchanging fresh vegetables",
    title: "Market Linkage & Access",
    description:
      "We bridge the gap between farmers and markets. Our network connects you with reliable buyers, cooperatives, and export channels, ensuring you get fair prices and consistent demand for your organic produce.",
    features: [
      "Buyer & cooperative connections",
      "Price negotiation support",
      "Export market access",
      "Supply chain coordination",
    ],
  },
  {
    image: "/images/service-design.png",
    alt: "Aerial view of a beautifully designed organic farm layout with geometric crop rows",
    title: "Farm System Design",
    description:
      "Whether you're starting fresh or optimizing an existing farm, we design efficient farm layouts and systems that maximize space, improve workflow, and integrate sustainable practices from the ground up.",
    features: [
      "Farm layout & infrastructure design",
      "Irrigation system planning",
      "Sustainable integration strategies",
      "Workflow optimization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero} id="services-hero">
        <div className="container">
          <span className={styles.tag}>Our Services</span>
          <h1 className={styles.pageTitle}>
            End-to-end agricultural
            <br />
            support for every farmer
          </h1>
          <p className={styles.pageSubtitle}>
            From soil to market — we provide comprehensive solutions to help you
            grow, sustain, and profit.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section" id="services-list">
        <div className="container">
          <div className={styles.servicesList}>
            {SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className={`${styles.serviceRow} ${idx % 2 !== 0 ? styles.serviceRowReverse : ""}`}
                id={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={styles.serviceImagePlaceholder}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={800}
                    height={600}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <ul className={styles.featureList}>
                    {service.features.map((f) => (
                      <li key={f}>
                        <Check size={16} className={styles.featureCheck} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner} id="services-cta">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaTitle}>
            Need a custom solution?
          </h2>
          <p className={styles.ctaSubtitle}>
            Every farm is unique. Let&apos;s discuss what works best for you.
          </p>
          <a href="/contact" className="btn btn-accent" id="services-contact-cta">
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
