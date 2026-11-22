"use client";

import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check, X } from "lucide-react";
import styles from "./SubscriptionCards.module.css";

interface Plan {
  name: string;
  description: string;
  priceDisplay: string;
  amount: number;
  features: string[];
  isPopular: boolean;
}

interface PaystackReference {
  reference: string;
}

export default function SubscriptionCards() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const plans: Plan[] = [
    {
      name: "Basic",
      description: "Essential support for emerging organic farmers.",
      priceDisplay: "KES 15,000",
      amount: 15000 * 100,
      features: [
        "Initial farm assessment",
        "Basic organic tools discount",
        "Monthly newsletter access",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Comprehensive management and consultancy.",
      priceDisplay: "KES 25,000",
      amount: 25000 * 100,
      features: [
        "Dedicated expert consultant",
        "Comprehensive soil testing",
        "Market linkage priority",
        "Farm machinery discounts",
      ],
      isPopular: true,
    },
  ];

  const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  if (!paystackPublicKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY. Configure the Paystack public key before rendering SubscriptionCards."
    );
  }

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: selectedPlan?.amount || 0,
    publicKey: paystackPublicKey,
    currency: "KES",
    metadata: {
      custom_fields: [
        {
          display_name: "Plan Name",
          variable_name: "plan_name",
          value: selectedPlan?.name || "Subscription",
        },
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = async (reference: PaystackReference) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: reference.reference,
          plan: selectedPlan?.name,
          email,
        }),
      });
      const data = await response.json();
      if (data.success) {
        router.push(
          `/services/subscribe/success?plan=${selectedPlan?.name}&reference=${reference.reference}`
        );
      } else {
        alert("Payment verification failed. Please contact support.");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      alert("An error occurred. Please contact support.");
      setIsProcessing(false);
    }
  };

  const onClose = () => {};

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    initializePayment({ onSuccess, onClose });
  };

  return (
    <>
      <div className={styles.plans}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.plan} ${plan.isPopular ? styles.planPopular : ""}`}
          >
            {plan.isPopular && (
              <span className={styles.planBadge}>Most popular</span>
            )}
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.planDesc}>{plan.description}</p>
            <div className={styles.planPriceBlock}>
              <span className={`${styles.planPrice} num`}>
                {plan.priceDisplay}
              </span>
              <span className={styles.planPer}>per month</span>
            </div>
            <ul className={styles.features}>
              {plan.features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  <Check size={16} className={styles.featureIcon} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setSelectedPlan(plan);
                setShowModal(true);
              }}
              className={`btn ${plan.isPopular ? "btn-primary" : "btn-outline"} ${styles.planAction}`}
            >
              Select plan
            </button>
          </div>
        ))}

        <div className={styles.plan}>
          <h3 className={styles.planName}>Enterprise</h3>
          <p className={styles.planDesc}>Full-scale operations for large farms.</p>
          <div className={styles.planPriceBlock}>
            <span className={styles.planPrice}>Custom</span>
          </div>
          <ul className={styles.features}>
            <li className={styles.feature}>
              <Check size={16} className={styles.featureIcon} aria-hidden="true" />
              <span>End-to-end system management</span>
            </li>
            <li className={styles.feature}>
              <Check size={16} className={styles.featureIcon} aria-hidden="true" />
              <span>Full machinery operations</span>
            </li>
            <li className={styles.feature}>
              <Check size={16} className={styles.featureIcon} aria-hidden="true" />
              <span>Dedicated agroecology team</span>
            </li>
            <li className={styles.feature}>
              <Check size={16} className={styles.featureIcon} aria-hidden="true" />
              <span>Export market integration</span>
            </li>
          </ul>
          <Link
            href="/contact"
            className={`btn btn-outline ${styles.planAction}`}
          >
            Contact us
          </Link>
        </div>
      </div>

      {showModal && selectedPlan && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="plan-modal-title"
        >
          <div className={styles.modalCard}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <h3 id="plan-modal-title" className={styles.modalTitle}>
              Subscribe to {selectedPlan.name}
            </h3>
            <p className={styles.modalBody}>
              Enter your email and we&apos;ll take the{" "}
              <strong>{selectedPlan.priceDisplay}</strong> payment. Your receipt
              lands in your inbox.
            </p>
            <form onSubmit={handlePay}>
              <label className={styles.modalLabel} htmlFor="paystack-email">
                Email address
              </label>
              <input
                id="paystack-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className={styles.modalInput}
              />
              <button
                type="submit"
                className={`btn btn-primary ${styles.modalBtn}`}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing…" : `Pay ${selectedPlan.priceDisplay}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
