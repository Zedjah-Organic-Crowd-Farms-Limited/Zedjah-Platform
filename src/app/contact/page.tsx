import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Zedjah Organic Crowd Farms: general enquiries, partnerships, farmers wanting to list their harvest, or a message to our founder Zachariah Mwangi.",
};

const WHATSAPP_NUMBER = "254790344724";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Zedjah, I would like to learn more about your work."
);

const CHANNELS = [
  { name: "General", label: "info@zedjahorganiccrowdfarms.com", href: "mailto:info@zedjahorganiccrowdfarms.com" },
  { name: "Partnerships", label: "partners@zedjahorganiccrowdfarms.com", href: "mailto:partners@zedjahorganiccrowdfarms.com" },
  { name: "The founder", label: "zachariah@zedjahorganiccrowdfarms.com", href: "mailto:zachariah@zedjahorganiccrowdfarms.com" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} id="contact-hero">
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>Let&apos;s talk.</h1>
          <p className={styles.heroSubtitle}>
            Reach the farm, the team or the founder — whichever gets you a useful reply.
          </p>
        </div>
      </section>

      {/* Direct lines + form */}
      <section className={styles.main} id="contact-main">
        <div className={`container ${styles.mainGrid}`}>
          <aside className={styles.direct}>
            <h2 className={styles.directTitle}>Direct lines</h2>
            <ul className={styles.directList}>
              <li className={styles.directItem}>
                <span className={styles.directIcon} aria-hidden="true">
                  <Phone size={18} />
                </span>
                <div>
                  <span className={styles.directKey}>Phone</span>
                  <a className={styles.directValue} href="tel:+254790344724">
                    +254 790 344 724
                  </a>
                </div>
              </li>
              <li className={styles.directItem}>
                <span className={styles.directIcon} aria-hidden="true">
                  <WhatsAppIcon size={18} />
                </span>
                <div>
                  <span className={styles.directKey}>WhatsApp</span>
                  <a
                    className={styles.directValue}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                  </a>
                </div>
              </li>
              <li className={styles.directItem}>
                <span className={styles.directIcon} aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <div>
                  <span className={styles.directKey}>Post</span>
                  <span className={styles.directValue}>
                    P.O. Box 3105-10300, Kerugoya, Kenya
                  </span>
                </div>
              </li>
            </ul>

            <div className={styles.inboxes}>
              <h3 className={styles.inboxesTitle}>Email the right desk</h3>
              <ul className={styles.inboxList}>
                {CHANNELS.map((c) => (
                  <li key={c.name} className={styles.inboxItem}>
                    <span className={styles.inboxKey}>{c.name}</span>
                    <a className={styles.inboxValue} href={c.href}>{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={styles.formBlock}>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <p className={styles.formSub}>
              Tell us a bit about what you need.
            </p>
            <form className={styles.form} id="contact-form">
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="first-name">First name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="last-name">Last name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Wanjiku"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">What is this about</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="" disabled>
                    Pick a topic
                  </option>
                  <option value="general">General enquiry</option>
                  <option value="shop">A shop order</option>
                  <option value="services">Farm or consultancy services</option>
                  <option value="partnership">Partnership</option>
                    <option value="founder">A note for the founder</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about what you need."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="contact-submit"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection} id="location-map">
        <div className={`container ${styles.mapHead}`}>
          <h2 className={styles.sectionTitle}>Find the farm</h2>
          <p className={styles.mapSub}>
            We sit in Kirinyaga County, on the south-west slope of Mount Kenya.
            Drop by on a Thursday or Friday for the farm tour.
          </p>
        </div>
        <div className="container">
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.78580832792!2d37.2833!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18287c4d5bcf7a5b%3A0x1a1a3f1e2e3c4d5e!2sKirinyaga%20County!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zedjah Organic Crowd Farms — Kirinyaga County"
              id="google-map-embed"
            />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFab}
        aria-label="Chat with us on WhatsApp"
        id="whatsapp-fab"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
