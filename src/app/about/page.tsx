import type { Metadata } from "next";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Zedjah Organic Crowd Farms: how we began, who leads us, and the values behind our work in sustainable agriculture.",
};

const VALUES = [
  {
    title: "Accountability",
    desc: "Being transparent in every value chain through the engagement level.",
  },
  {
    title: "Innovation",
    desc: "To remain steadfast at intuitive solution thinking to remain sustainable.",
  },
  {
    title: "Integrity",
    desc: "To accommodate humanity and orders of human rights in the peace of freedom and democracy.",
  },
  {
    title: "Value for money",
    desc: "To assure and credit return on investment (ROI) reducing and sustaining risks for prospective Agri business.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} id="story-hero">
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>A story rooted in Kenya.</h1>
        </div>
      </section>

      {/* Origins: one big paragraph */}
      <section className={styles.origins} id="origins">
        <div className={`container ${styles.originsInner}`}>
          <h2 className={styles.sectionTitle}>Where it all begins</h2>
          <p className={styles.originsText}>
            At Zedjah Organic Crowd Farms, good food begins at the source. Born
            from a history of poverty and food insecurity, we started as a relief
            and community empowerment project and grew into a farm system
            management company and organic food producer. We walk with farmers
            through soil health, organic practices and market linkage, so every
            harvest carries a story of people and place. The result is Zedjah: a
            celebration of agroecology, built for the farmers who feed us.
          </p>
          <a href="/contact" className="btn btn-primary" id="story-contact">
            Contact us
          </a>
        </div>
      </section>

      {/* Founder */}
      <section className={styles.founder} id="founder">
        <div className={`container ${styles.founderGrid}`}>
          <div className={styles.founderText}>
            <h2 className={styles.founderTitle}>
              Youth-led. Organic-first. Proudly Kenyan.
            </h2>
            <div className={styles.founderCopy}>
              <p>
                Zedjah is brought to you by Zachariah Mwangi, the founder behind
                our work, who is dedicated to empowering communities through
                sustainable agriculture.
              </p>
              <p>
                Driven by accountability, innovation, integrity and value for
                money, we put people and agroecology at the heart of farming.
              </p>
              <p>
                Together, we are creating greater value for farmers: guiding them
                on the land, connecting them to markets, and sharing organic
                produce with the communities we serve.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary" id="story-founder-cta">
              Work with us
            </a>
          </div>
          <figure className={styles.founderFigure}>
            <div className={styles.founderPhoto}>
              <Image
                src="/images/zachariah-mwangi.jpg"
                alt="Zachariah Mwangi, founder of Zedjah, holding daisies in front of a maize field"
                fill
                sizes="(max-width: 960px) 90vw, 520px"
                style={{ objectFit: "cover", objectPosition: "50% 20%" }}
              />
            </div>
            <figcaption className={styles.caption}>Zachariah Mwangi, Founder</figcaption>
          </figure>
        </div>
      </section>

      {/* Community partnerships, then a wide photograph */}
      <section className={styles.community} id="community">
        <div className={`container ${styles.communityHead}`}>
          <h2 className={styles.sectionTitle}>Rooted in community partnerships</h2>
          <p className={styles.communityText}>
            We work directly with farmers and their communities, offering hands-on
            organic training, financial literacy and reliable market linkage, so
            that every harvest strengthens the community that grew it.
          </p>
        </div>
        <div className={styles.wide} id="homestead">
          <Image
            src="/images/story-homestead.png"
            alt="An organic farm homestead surrounded by lush crops"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Sustaining the soil, with mission and vision */}
      <section className={styles.purpose} id="mission">
        <div className="container">
          <div className={styles.sustainHead}>
            <h2 className={styles.sustainTitle}>Sustaining our soil and farms</h2>
            <p className={styles.sustainText}>
              Healthy soil is the foundation of a healthy farm. We champion
              agroecology, organic inputs and sustainable practices that work in
              harmony with nature, with no synthetic chemicals.
            </p>
          </div>
          <div className={styles.purposeGrid}>
            <div className={styles.purposeItem}>
              <h3 className={styles.purposeTitle}>Our mission</h3>
              <p className={styles.purposeText}>
                To be an agricultural organisation service provider with accountability,
                innovation, integrity and value for money attached to social economic
                values at the heart of agroecology.
              </p>
            </div>
            <div className={styles.purposeItem}>
              <h3 className={styles.purposeTitle}>Our vision</h3>
              <p className={styles.purposeText}>
                To be the leading farm management and organic food industry in the
                sustainable agriculture prioritising agroecology of the world we need
                to create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values} id="values">
        <div className="container">
          <div className={styles.valuesHead}>
            <h2 className={styles.sectionTitle}>Core values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.value}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className={styles.close} id="story-cta">
        <div className={`container ${styles.closeInner}`}>
          <h2 className={styles.closeTitle}>Ready to grow with us?</h2>
          <div className={styles.closeButtons}>
            <a href="/contact" className="btn btn-primary" id="story-close-contact">
              Get in touch
            </a>
            <a href="/services" className={`btn btn-ghost ${styles.closeGhost}`} id="story-close-services">
              View services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
