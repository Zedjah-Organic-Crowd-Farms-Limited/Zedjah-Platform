"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./services.module.css";

interface ServiceProps {
  service: {
    title: string;
    description: string;
    extendedDescription: string;
    image: string;
    alt: string;
    link: string;
    features: string[];
  };
}

export default function ServiceCard({ service }: ServiceProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.flipCard}>
      <div className={`${styles.flipCardInner} ${isFlipped ? styles.isFlipped : ""}`}>
        
        {/* Front of Card */}
        <div className={styles.flipCardFront}>
          <div className={styles.cardImageWrapper}>
            <Image src={service.image} alt={service.alt} fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.cardFrontContent}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
            <button 
              className={styles.flipButton} 
              onClick={() => setIsFlipped(true)}
              aria-label="Explain more"
            >
              <span style={{ fontSize: "var(--text-sm)", fontWeight: "500" }}>Explain More</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>

        {/* Back of Card */}
        <div className={styles.flipCardBack}>
          <div className={styles.cardBackContent}>
            <h3 className={styles.cardTitleBack}>{service.title}</h3>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)", lineHeight: 1.5 }}>
              {service.extendedDescription}
            </p>
            <ul className={styles.featureList}>
              {service.features.map((f) => (
                <li key={f}>
                  <Check size={16} className={styles.featureCheck} />
                  {f}
                </li>
              ))}
            </ul>
            
            <div className={styles.cardBackActions}>
              <a href={service.link} className="btn btn-primary" style={{ width: "100%", marginBottom: "var(--space-sm)" }}>
                Get Service
              </a>
              <button 
                className={styles.flipButtonBack} 
                onClick={() => setIsFlipped(false)}
              >
                <ChevronUp size={20} />
                <span style={{ fontSize: "var(--text-sm)", fontWeight: "500" }}>Go Back</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
