import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zedjah Organic Crowd Farms. Reach out for consultancy, partnerships, or general inquiries.",
};

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
                    <p>info@zedjah.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <Phone size={20} />
                  </span>
                  <div>
                    <h4>Phone</h4>
                    <p>+254 719 267 962</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Nairobi, Kenya</p>
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
    </>
  );
}
