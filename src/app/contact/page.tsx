import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zedjah Organic Crowd Farms. Reach out for consultancy, partnerships, or general inquiries.",
};

const WHATSAPP_NUMBER = "254790344724";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Zedjah! I'm interested in learning more about your organic farming services."
);

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero} id="contact-hero">
        <div className="container">
          <span className={styles.tag}>Get in Touch</span>
          <h1 className={styles.pageTitle}>
            Let&apos;s grow something
            <br />
            great together
          </h1>
          <p className={styles.pageSubtitle}>
            Whether you&apos;re a farmer, investor, or partner — we&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" id="contact-form-section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <p className={styles.infoSubtitle}>
                Reach out through any of these channels and we&apos;ll get back to
                you within 24 hours.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <Mail size={20} />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p>zedjahorganiccrowdfarms@gmail.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <Phone size={20} />
                  </span>
                  <div>
                    <h4>Phone</h4>
                    <p>+254 790 344 724</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoItem}
                  id="whatsapp-contact-link"
                >
                  <span className={`${styles.infoIcon} ${styles.whatsappIcon}`}>
                    <WhatsAppIcon size={20} />
                  </span>
                  <div>
                    <h4>WhatsApp</h4>
                    <p className={styles.whatsappText}>Chat with us instantly</p>
                  </div>
                </a>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Po. Box 3105-10300 Kerugoya</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <Clock size={20} />
                  </span>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon – Fri, 8:00 AM – 5:00 PM EAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send us a message</h3>
              <form className={styles.form} id="contact-form">
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      placeholder="Doe"
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
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="consultancy">Farm Consultancy</option>
                    <option value="partnership">Partnership</option>
                    <option value="investment">Investment</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" id="contact-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection} id="location-map">
        <div className="container">
          <h2 className="section-heading">Find Us</h2>
          <p className="section-subtitle">
            Visit our farm in the heart of Kirinyaga County
          </p>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.78580832792!2d37.2833!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18287c4d5bcf7a5b%3A0x1a1a3f1e2e3c4d5e!2sKirinyaga%20County!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zedjah Organic Crowd Farms - Kirinyaga County Location"
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
