import type { Metadata } from "next";
import styles from "./services.module.css";
import ServicesDeck from "./ServicesDeck";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zedjah's agricultural services: farm management, soil health, organic consultation, agribusiness, market linkage, crop management, and organic farming inputs.",
};

/* Services as supplied by the owner; typos fixed, nothing added.
   Each rate comes from the consultancy rate card the owner supplied, matched to the nearest line. */
const SERVICES = [
  {
    tone: "cream",
    title: "Farm management services",
    slug: "farm-management",
    includes: ["Farm assessments", "Customized action plan", "Agribusiness consulting", "Farm designing"],
    image: "/images/farm_system_management_1779118365872.png",
    alt: "Farm system management and organization",
    description:
      "We help you run your farm like a thriving business. From planning and daily operations to record-keeping and productivity, we walk with you to make every acre more efficient, profitable, and sustainable.",
    rateLabel: "Farm assessment and planning",
    rateAmount: "KES 2,000 – 4,000",
    rateUnit: "per day",
  },
  {
    tone: "olive",
    title: "Soil health management services",
    slug: "soil-health",
    includes: ["Soil Testing", "Soil Analysis", "Plan and Soil Nutrition", "Soil Sampling", "Soil Liming"],
    image: "/images/soil_management_1779118410388.png",
    alt: "Soil health testing and management",
    description:
      "Healthy soil, healthy harvest. We test, restore, and enrich your soil so it feeds your crops naturally. Say goodbye to guesswork and hello to stronger roots, better yields, and a farm that gets better every season.",
    rateLabel: "Crop management and production, with soil fertility and nutrition",
    rateAmount: "KES 2,000 – 6,500",
    rateUnit: "per session",
  },
  {
    tone: "warm",
    title: "Organic agriculture consultation services",
    slug: "organic-consultation",
    includes: ["Sustainable agriculture and organic farming", "Agri-ecology and agroforestry"],
    image: "/images/production_consultancy_1779118393249.png",
    alt: "Organic agriculture consultation in the field",
    description:
      "Thinking of going organic or improving what you already do? We guide you step-by-step from certification to natural practices that work in your local conditions, so you can grow clean, chemical-free food with confidence.",
    rateLabel: "Sustainable farming practices",
    rateAmount: "KES 4,000 – 6,000",
    rateUnit: "starting at",
  },
  {
    tone: "deep",
    title: "Agribusiness consultation services",
    slug: "agribusiness",
    includes: ["Digital Farm Produce Marketing", "Agritech Solutions"],
    image: "/images/financial_literacy_1779118571197.png",
    alt: "Agribusiness planning and budgeting",
    description:
      "Farming is business, and we help you treat it like one. We help you plan, budget, add value, and scale, turning your hard work in the field into real income and long-term growth.",
    rateLabel: "Agronomic and technical support, with a business plan and market research",
    rateAmount: "KES 4,000 – 7,000",
    rateUnit: "per engagement",
  },
  {
    tone: "mint",
    title: "Market linkage",
    slug: "market-linkage",
    image: "/images/service-market.png",
    alt: "Farm produce ready for market",
    description:
      "You grow it, we help you sell it. We connect you to reliable buyers, fair prices, and markets that value your produce, so your harvest never goes to waste and your effort always pays.",
    rateLabel: "Custom packages and retainers",
  },
  {
    tone: "olive",
    title: "Crop management services",
    slug: "crop-disease",
    includes: ["Pruning", "Spraying", "Farm Designing", "Compost Manure"],
    image: "/images/agro_ecology_1779118707372.png",
    alt: "Healthy crops managed against pests and disease",
    description:
      "Don't let pests and diseases steal your harvest. We help you spot problems early, prevent outbreaks, and treat them safely, keeping your crops healthy from seed to storage without harming your soil or health.",
    rateLabel: "Crop management and production",
    rateAmount: "KES 2,000 – 6,500",
    rateUnit: "per session",
  },
  {
    tone: "cream",
    title: "Organic farming inputs",
    slug: "organic-inputs",
    includes: ["Bio Stimulants", "Bio Fertilizers", "Bio Pesticides"],
    image: "/images/input_tools_distribution_1779118551203.png",
    alt: "Bio stimulants, bio fertilizers and bio pesticides",
    description:
      "Get the right inputs you can trust. We supply genuine, eco-friendly bio stimulants, bio fertilizers, and bio pesticides that nourish your farm and protect your customers. No harmful chemicals, just pure growth.",
    rateLabel: "Custom packages and retainers",
  },
];

const CLOSE = {
  title: "Where every farm starts",
  description:
    "A first conversation to assess your farm and outline a strategy, then training that puts the knowledge in your hands.",
  rows: [
    { name: "Initial consultation, 1 to 2 hours", amount: "KES 1,000 – 2,500", unit: "per hour" },
    { name: "Training and extension services", amount: "KES 2,500 – 5,000", unit: "per workshop or training" },
  ],
  deposit: { amount: "50%", text: "Deposit upfront, with the balance on completion" },
  terms: "Travel and external costs are billed separately.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero} id="services-hero">
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.pageTitle}>
            End-to-end agricultural support for every farmer
          </h1>
          <p className={styles.pageSubtitle}>
            From soil to market, we provide comprehensive solutions to help you
            grow, sustain, and profit.
          </p>
          <a href="#services-list" className="btn btn-accent" id="services-hero-cta">
            See the services
          </a>
        </div>
      </section>

      {/* Services: a deck of cards that pile up sideways */}
      <section className={styles.reel} id="services-list">
        <div className={`container ${styles.reelHead}`}>
          <h2 className={styles.reelTitle}>Our services</h2>
        </div>
        <ServicesDeck services={SERVICES} close={CLOSE} />
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner} id="services-cta">
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Need a custom solution?</h2>
          <p className={styles.ctaSubtitle}>
            Every farm is unique. Custom packages and retainers give you tailored
            solutions for long-term success.
          </p>
          <a href="/contact" className="btn btn-primary" id="services-contact-cta">
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
