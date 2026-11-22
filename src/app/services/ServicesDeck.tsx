"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./services.module.css";

export interface DeckService {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tone: string;
  includes?: string[];
  rateLabel: string;
  rateAmount?: string;
  rateUnit?: string;
}

export interface DeckClose {
  title: string;
  description: string;
  rows: { name: string; amount: string; unit: string }[];
  deposit: { amount: string; text: string };
  terms: string;
}

/* Full-screen cards: each one slides up over the last as you scroll. */
export default function ServicesDeck({
  services,
  close,
}: {
  services: DeckService[];
  close: DeckClose;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [deck, setDeck] = useState(false);
  const count = services.length + 1;

  /* The deck only runs on wide screens with motion allowed; otherwise it is a plain list. */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 961px) and (prefers-reduced-motion: no-preference)");
    const update = () => setDeck(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!deck) {
      cards.forEach((el) => {
        if (!el) return;
        el.style.transform = "";
        el.style.visibility = "";
        el.style.removeProperty("--dim");
        el.removeAttribute("inert");
      });
      return;
    }
    let raf = 0;
    const clamp01 = (x: number) => Math.min(Math.max(x, 0), 1);
    const smooth = (x: number) => x * x * (3 - 2 * x);
    const paint = () => {
      raf = 0;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage) return;

      const rect = section.getBoundingClientRect();
      const total = rect.height - stage.offsetHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const t = clamp01(raw / 0.985) * (count - 1);

      /* card i slides up over card i-1 while t runs from i-1 to i */
      const rise = (i: number) => (i === 0 ? 1 : smooth(clamp01((t - (i - 1) - 0.1) / 0.9)));

      cards.forEach((el, i) => {
        if (!el) return;
        const r = rise(i);
        const nextRise = i < count - 1 ? rise(i + 1) : 0;
        /* The card translates in viewport units so it clears its own inset */
        el.style.transform = `translate3d(0,${(1 - r) * 110}vh,0)`;
        el.style.setProperty("--dim", String(nextRise * 0.5));
        el.style.visibility = nextRise >= 1 ? "hidden" : "visible";
        /* Interactive whenever this card is the one on top. The old window
           (fully risen and next card untouched) was only ~8svh of scroll,
           so the CTA looked dead most of the time. */
        el.toggleAttribute("inert", !(r >= 0.6 && nextRise <= 0.1));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [deck, count]);

  return (
    <div
      ref={sectionRef}
      className={`${styles.deckSection} ${deck ? styles.deckOn : ""}`}
      style={{ ["--cards" as string]: count - 1 }}
    >
      <div ref={stageRef} className={styles.stage}>
        <div className={styles.deck}>
          {services.map((s, i) => (
            <article
              key={s.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={styles.card}
              data-tone={s.tone}
              style={{ zIndex: i + 1 }}
            >
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={`${styles.cardDesc} ${s.includes ? "" : styles.cardDescLead}`}>
                  {s.description}
                </p>
                {s.includes && (
                  <div className={styles.covers}>
                    <span className={styles.coversLabel}>What the rate covers</span>
                    <ul className={`${styles.coversList} ${s.includes.length > 4 ? styles.coversListWide : ""}`}>
                      {s.includes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className={styles.rate}>
                  <span className={styles.rateLabel}>{s.rateLabel}</span>
                  {s.rateAmount ? (
                    <span className={`${styles.rateAmount} num`}>
                      {s.rateAmount}
                      <span className={styles.rateUnit}>{s.rateUnit}</span>
                    </span>
                  ) : (
                    <span className={styles.rateAmount}>Tailored to your farm</span>
                  )}
                </div>
                <a href={`/services/subscribe?service=${s.slug}`} className={styles.cardLink}>
                  Get this service <ArrowRight size={16} />
                </a>
              </div>
              <div className={styles.cardImage}>
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 960px) 90vw, 480px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </article>
          ))}

          <article
            ref={(el) => {
              cardRefs.current[services.length] = el;
            }}
            className={`${styles.card} ${styles.cardClose}`}
            data-tone="cream"
            style={{ zIndex: services.length + 1 }}
          >
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{close.title}</h3>
              <p className={`${styles.cardDesc} ${styles.cardDescLead}`}>{close.description}</p>
              <p className={styles.terms}>{close.terms}</p>
            </div>
            <ul className={styles.closeRates}>
              {close.rows.map((r) => (
                <li key={r.name} className={styles.closeRow}>
                  <span className={styles.closeName}>{r.name}</span>
                  <span className={`${styles.closeAmount} num`}>
                    {r.amount}
                    <span className={styles.rateUnit}>{r.unit}</span>
                  </span>
                </li>
              ))}
              <li className={styles.closeRow}>
                <span className={styles.closeName}>{close.deposit.text}</span>
                <span className={`${styles.closeAmount} num`}>{close.deposit.amount}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
