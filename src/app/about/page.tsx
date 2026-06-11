import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Globe,
  Leaf,
  Users,
  Lightbulb,
  Eye,
  Shield,
  Coins,
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
            Zedjah organic crowd farms is a farm system Management company and organic food producing entity.
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
                To be an agricultural organisation service provider with accountability, innovation, integrity and value for money attached to social economic values at the heart of agroecology.
              </p>
            </div>
            <div className={styles.missionCard}>
              <span className={styles.missionIcon}>
                <Globe size={32} />
              </span>
              <h3>Our Vision</h3>
              <p>
                To be the leading farm management and organic food industry in the sustainable agriculture prioritising agroecology of the world we need to create.
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
              <span className={styles.tag}>History</span>
              <h2>Our Origins</h2>
              <p>
                Zedjah organic crowd farms was invented from a historic background of poverty and food insecurity - it was more of a relief and community empowerment project to improve community resilience. It thrives in the principles of Humanity, food security and sustainability having overcome the effects of conventional agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Values */}
      <section className={`section`} id="values">
        <div className="container">
          <h2 className="section-heading">ZOC Core Values</h2>
          <p className="section-subtitle">
            These are the core values that govern Zedjah Organic Crowd Farms globally
          </p>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: <Eye size={28} />,
                title: "Accountability",
                desc: "Being transparent in every value chain through the engagement level.",
              },
              {
                icon: <Lightbulb size={28} />,
                title: "Innovation",
                desc: "To remain steadfast at intuitive solution thinking to remain sustainable.",
              },
              {
                icon: <Shield size={28} />,
                title: "Integrity",
                desc: "To accommodate humanity and orders of human rights in the peace of freedom and democracy.",
              },
              {
                icon: <Coins size={28} />,
                title: "Value For Money",
                desc: "To assure and credit return on investment (ROI) reducing and sustaining risks for prospective Agri business.",
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
