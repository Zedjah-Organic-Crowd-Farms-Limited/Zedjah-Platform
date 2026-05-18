import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./services.module.css";
import ServiceCard from "./ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zedjah's agricultural services — farm consultancy, soil & nutrition analysis, market linkage, and more.",
};

const SERVICES = [
  {
    image: "/images/farm_system_management_1779118365872.png",
    alt: "Farm system management and organization",
    title: "Farm System Management",
    link: "/services/subscribe",
    description: "Comprehensive management of farm systems, ensuring efficient workflow and productivity.",
    extendedDescription: "Our Farm System Management service ensures that every aspect of your farming operation is streamlined for maximum yield and sustainability.",
    features: ["Workflow optimization", "Resource management", "Sustainability tracking", "Yield forecasting"],
  },
  {
    image: "/images/production_consultancy_1779118393249.png",
    alt: "Consultancy",
    title: "Organic food Production Consultancy",
    link: "/services/subscribe",
    description: "Expert advice and consultancy on organic food production to meet high-quality standards.",
    extendedDescription: "We provide expert advice to help you navigate the complexities of organic food production and ensure your crops meet all required organic standards.",
    features: ["Crop selection", "Organic certification guidance", "Pest control strategies", "Yield optimization"],
  },
  {
    image: "/images/input_tools_distribution_1779118551203.png",
    alt: "Tools and Inputs",
    title: "Organic input and farm tools distribution",
    link: "/services/subscribe",
    description: "Access to high-quality organic inputs and reliable farm tools.",
    extendedDescription: "Equip your farm with the best tools and organic inputs available. We distribute top-tier organic seeds and eco-friendly farming equipment.",
    features: ["Organic seeds", "Natural fertilizers", "Quality farming equipment", "Timely delivery"],
  },
  {
    image: "/images/soil_management_1779118410388.png",
    alt: "Soil Management",
    title: "Soil Management",
    link: "/services/subscribe",
    description: "Enhance and maintain soil health for sustainable organic farming.",
    extendedDescription: "Healthy soil is the foundation of a healthy farm. We provide comprehensive soil management services to ensure your land is fertile and robust.",
    features: ["Soil testing", "Nutrient balancing", "Erosion control", "Organic amendments"],
  },
  {
    image: "/images/financial_literacy_1779118571197.png",
    alt: "Financial Literacy",
    title: "Financial literacy",
    link: "/services/subscribe",
    description: "Equip yourself with the financial knowledge necessary for a successful farming business.",
    extendedDescription: "Farming is a business. We provide financial literacy training so that you can make informed investment decisions and manage your budget effectively.",
    features: ["Budgeting", "Risk management", "Investment planning", "Record keeping"],
  },
  {
    image: "/images/farm_trainings_1779118593151.png",
    alt: "Farm Trainings",
    title: "Farm trainings",
    link: "/services/subscribe",
    description: "Comprehensive training programs covering modern organic farming techniques.",
    extendedDescription: "We empower our farmers through education. Our training programs are designed to enhance your agricultural knowledge and practical skills.",
    features: ["Hands-on workshops", "Expert-led seminars", "Best practices", "Community learning"],
  },
  {
    image: "/images/agro_ecology_1779118707372.png",
    alt: "Agro ecology",
    title: "Agro ecology",
    link: "/services/subscribe",
    description: "Integrate ecological principles into agricultural systems for a sustainable future.",
    extendedDescription: "We prioritize agroecology to create farming systems that work in harmony with nature. Our methods promote biodiversity and climate resilience.",
    features: ["Biodiversity promotion", "Ecosystem services", "Climate resilience", "Sustainable practices"],
  },
  {
    image: "/images/machinery_operations_1779118784139.png",
    alt: "Machinery",
    title: "Farm machinery operations",
    link: "/services/subscribe",
    description: "Professional machinery operation services to ensure efficient farm tasks.",
    extendedDescription: "Increase your farm's efficiency with our machinery operations support. We provide the equipment and expertise needed for large-scale organic farming.",
    features: ["Equipment leasing", "Operator training", "Maintenance support", "Operational efficiency"],
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
          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
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
