import type { Metadata } from "next";
import Image from "next/image";
import styles from "../about.module.css";

export const metadata: Metadata = {
  title: "Our Team | About Us",
  description: "Meet the dedicated team behind Zedjah Organic Crowd Farms.",
};

const TEAM_MEMBERS = [
  { name: "Zachariah Mwangi", role: "Founder", desc: "Visionary behind Zedjah, dedicated to empowering communities through sustainable agriculture." },
  { name: "Charles Edward", role: "CEO and Lead", desc: "Strategic leader driving Zedjah's mission to transform the organic food industry in East Africa." },
  { name: "Daniel Okinda", role: "IT Lead", desc: "Tech innovator building the digital infrastructure that connects farmers to essential resources." },
  { name: "Vincent", role: "Operations", desc: "Ensures seamless day-to-day agricultural operations and maintains the highest standards of organic farming." },
];

export default function TeamPage() {
  return (
    <>
      <section className={styles.pageHero} id="team-hero">
        <div className="container">
          <span className={styles.tag}>Our Team</span>
          <h1 className={styles.pageTitle}>Meet the experts</h1>
          <p className={styles.pageSubtitle}>
            Our dedicated team brings together years of experience in agronomy, organic farming, and community empowerment.
          </p>
        </div>
      </section>

      <section className="section" id="team-content">
        <div className="container">
          <div className={styles.valuesGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className={styles.valueCard} style={{ textAlign: "center" }}>
                <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--color-surface-warm)", margin: "0 auto var(--space-md)" }}></div>
                <h4>{member.name}</h4>
                <p style={{ color: "var(--color-primary)", fontWeight: "600", marginBottom: "var(--space-sm)" }}>{member.role}</p>
                <p style={{ fontSize: "var(--text-sm)" }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
