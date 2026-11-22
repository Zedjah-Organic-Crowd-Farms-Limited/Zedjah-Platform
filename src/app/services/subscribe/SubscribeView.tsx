"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CONSULTATION_FEE, findService, getPayAmount } from "../service-list";
import SubscriptionCardsWrapper from "@/components/payments/SubscriptionCardsWrapper";
import BookingButton from "./BookingButtonWrapper";
import styles from "./subscribe.module.css";

export default function SubscribeView() {
  const params = useSearchParams();
  const service = findService(params.get("service"));

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} id="checkout-hero">
        <div className={`container ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Checkout</span>
          </nav>

          {service ? (
            <>
              <h1 className={styles.heroTitle}>
                Checkout — {service.title}
              </h1>
              <p className={styles.heroSubtitle}>{service.short}</p>
            </>
          ) : (
            <>
              <h1 className={styles.heroTitle}>Pick a plan and pay</h1>
              <p className={styles.heroSubtitle}>
                Pick the plan that fits your farm. Pay by card or M-Pesa. We
                follow up within one working day.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Service brief (only when a service is selected) */}
      {service && (
        <section className={styles.brief} id="service-brief">
          <div className={`container ${styles.briefGrid}`}>
            <div>
              <h2 className={styles.briefTitle}>{service.title}</h2>
              <p className={styles.briefNote}>
                {service.short} You pay the lower end of the rate plus the
                initial consultation today; the final amount is confirmed after
                your farm assessment.
              </p>
            </div>
            <div className={styles.briefCard}>
              <span className={styles.briefKey}>{service.rateLabel}</span>
              {service.rateAmount ? (
                <>
                  <span className={`${styles.briefAmount} num`}>
                    {service.rateAmount}
                  </span>
                  <span className={styles.briefUnit}>{service.rateUnit}</span>
                </>
              ) : (
                <span className={styles.briefAmount}>Tailored to your farm</span>
              )}
              <dl className={styles.briefUnit}>
                {service.minRate ? (
                  <div>Service rate (from): KES {service.minRate.toLocaleString()}</div>
                ) : null}
                <div>Initial consultation: KES {CONSULTATION_FEE.toLocaleString()}</div>
                <div>
                  <strong>Total due now: KES {getPayAmount(service).toLocaleString()}</strong>
                </div>
              </dl>
              <BookingButton
                serviceSlug={service.slug}
                serviceTitle={service.title}
                amount={getPayAmount(service)}
              />
              <Link href="/contact" className={styles.briefLink}>
                Prefer to talk first? Contact us →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Plans + Paystack */}
      <section className={styles.plans} id="plans">
        <div className={`container ${styles.plansHead}`}>
          <h2 className={styles.plansTitle}>Or subscribe to ongoing support</h2>
          <p className={styles.plansSub}>
            A rolling monthly plan with us. Pay by card or M-Pesa; cancel from
            your dashboard any month.
          </p>
        </div>
        <div className="container">
          <SubscriptionCardsWrapper />
        </div>
      </section>
    </>
  );
}
