import Image from "next/image";
import {
  Sprout,
  FlaskConical,
  Handshake,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Growing Together,
            <br />
            <span className={styles.heroAccent}>Harvesting the Future</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Zedjah connects communities to organic agriculture through expert
            consultancy, crowd farming, and sustainable market solutions.
          </p>
          <div className={styles.heroCtas}>
            <a href="/services" className="btn btn-accent" id="hero-cta-primary">
              Explore Services
            </a>
            <a href="/about" className="btn btn-outline" id="hero-cta-secondary" style={{ borderColor: "white", color: "white" }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={styles.heroDecor1} />
        <div className={styles.heroDecor2} />
      </section>

      {/* ─── Stats Strip ─── */}
      <section className={styles.stats} id="stats">
        <div className={`container ${styles.statsGrid}`}>
          {[
            { value: "500+", label: "Farmers Empowered" },
            { value: "12", label: "Counties Reached" },
            { value: "95%", label: "Client Satisfaction" },
            { value: "10K+", label: "Acres Managed" },
          ].map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── About Snippet ─── */}
      <section className={`section ${styles.aboutSnippet}`} id="about-snippet">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <div className={styles.aboutImagePlaceholder}>
                <Image
                  src="/images/about-farmers.png"
                  alt="Zedjah farmers working together in organic fields"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div className={styles.aboutText}>
              <span className={styles.sectionTag}>Who We Are</span>
              <h2 className={styles.sectionTitle}>
                Rooted in the soil,
                <br />
                driven by innovation
              </h2>
              <p>
                Zedjah Organic Crowd Farms is on a mission to transform
                agriculture in East Africa. We combine traditional farming
                wisdom with modern techniques to help farmers thrive.
              </p>
              <p>
                From soil nutrition planning to market access, we provide
                end-to-end support that empowers communities and builds
                sustainable food systems.
              </p>
              <a href="/about" className="btn btn-primary" id="about-cta">
                About Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Cards ─── */}
      <section className={`section ${styles.servicesSection}`} id="services-overview">
        <div className="container">
          <span className={styles.sectionTag} style={{ textAlign: "center", display: "block" }}>What We Do</span>
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive agricultural solutions tailored to your needs
          </p>
          <div className={`${styles.servicesGrid} stagger`}>
            {[
              {
                icon: <Sprout size={28} />,
                title: "Farm System Management",
                description:
                  "Comprehensive management of your farm operations, ensuring efficient workflows and maximized organic yields.",
                href: "/services",
              },
              {
                icon: <FlaskConical size={28} />,
                title: "Soil Management",
                description:
                  "Advanced soil testing and nutrient balancing programs to build a resilient foundation for your crops.",
                href: "/services",
              },
              {
                icon: <Handshake size={28} />,
                title: "Production Consultancy",
                description:
                  "Expert guidance to navigate organic certification, pest control, and sustainable farming best practices.",
                href: "/services",
              },
            ].map((service) => (
              <a
                key={service.title}
                href={service.href}
                className={styles.serviceCard}
                id={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
                <span className={styles.serviceArrow}>
                  <ArrowRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Marketplace Promotion Section ─── */}
      <section className={`section ${styles.marketplaceSection}`} id="marketplace-preview">
        <div className="container">
          <div className={styles.marketplaceGrid}>
            <div className={styles.marketplaceText}>
              <span className={styles.sectionTag}>Digital Store</span>
              <h2 className={styles.sectionTitle}>
                The Zedjah Marketplace
                <br />
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
              <a href="/store" className="btn btn-primary" id="landing-store-cta">
                Explore Marketplace <ArrowRight size={16} />
              </a>
            </div>
            <div className={styles.marketplaceImageContainer}>
              <div className={styles.imageBackingBlob} />
              <div className={styles.marketplaceImageWrapper}>
                <Image
                  src="/images/marketplace-box.png"
                  alt="Fresh organic farm box with vegetables and fruits"
                  width={600}
                  height={500}
                  className={styles.marketImg}
                  style={{ height: "auto" }}
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
              <a href="/contact" className="btn btn-accent" id="cta-contact">
                Get in Touch
              </a>
              <a href="/services" className="btn btn-ghost" id="cta-services" style={{ color: "white" }}>
                View Services <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
