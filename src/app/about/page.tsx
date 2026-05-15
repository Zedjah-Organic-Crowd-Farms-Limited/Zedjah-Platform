import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Globe,
  Leaf,
  Users,
  Lightbulb,
  Eye,
} from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zedjah Organic Crowd Farms — our mission, story, and the team transforming agriculture in East Africa.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero} id="about-hero">
        <div className="container">
          <span className={styles.tag}>About Zedjah</span>
          <h1 className={styles.pageTitle}>
            Cultivating change,
            <br />
            one farm at a time
          </h1>
          <p className={styles.pageSubtitle}>
            We&apos;re building a future where sustainable farming empowers communities
            and nourishes the world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.missionSection}`} id="mission">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <span className={styles.missionIcon}>
                <Target size={32} />
              </span>
              <h3>Our Mission</h3>
              <p>
                To empower smallholder farmers with the knowledge, resources,
                and market access they need to build sustainable livelihoods
                through organic agriculture.
              </p>
            </div>
            <div className={styles.missionCard}>
              <span className={styles.missionIcon}>
                <Globe size={32} />
              </span>
              <h3>Our Vision</h3>
              <p>
                A world where every farmer can thrive — producing healthy food,
                building resilient communities, and protecting the environment
                for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.storySection}`} id="story">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImagePlaceholder}>
              <Image
                src="/images/story-homestead.png"
                alt="A beautiful organic farm homestead surrounded by lush crops"
                width={800}
                height={600}
              />
            </div>
            <div className={styles.storyText}>
              <span className={styles.tag}>Our Story</span>
              <h2>From a small farm to a growing movement</h2>
              <p>
                Zedjah was born from a simple belief — that the future of
                agriculture lies in community, sustainability, and shared
                prosperity. What started as a local consultancy has grown into a
                platform connecting farmers, investors, and consumers across East
                Africa.
              </p>
              <p>
                Today, we work with hundreds of farmers across multiple counties,
                providing hands-on support from soil analysis to market access.
                We&apos;re not just growing crops — we&apos;re growing futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section`} id="values">
        <div className="container">
          <h2 className="section-heading">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: <Leaf size={28} />,
                title: "Sustainability",
                desc: "We champion practices that protect and regenerate the land.",
              },
              {
                icon: <Users size={28} />,
                title: "Community",
                desc: "We believe in the power of collective action and shared success.",
              },
              {
                icon: <Lightbulb size={28} />,
                title: "Innovation",
                desc: "We blend traditional wisdom with modern agricultural science.",
              },
              {
                icon: <Eye size={28} />,
                title: "Transparency",
                desc: "We operate with honesty, accountability, and open communication.",
              },
            ].map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
