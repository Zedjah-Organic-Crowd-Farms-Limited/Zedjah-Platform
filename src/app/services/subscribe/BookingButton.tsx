"use client";

import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import cardStyles from "@/components/payments/SubscriptionCards.module.css";
import styles from "./subscribe.module.css";

interface PaystackReference {
  reference: string;
}

export default function BookingButton({
  serviceSlug,
  serviceTitle,
  amount,
}: {
  serviceSlug: string;
  serviceTitle: string;
  amount: number;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100,
    publicKey: paystackPublicKey || "",
    currency: "KES",
    metadata: {
      custom_fields: [
        {
          display_name: "Service",
          variable_name: "service_slug",
          value: serviceSlug,
        },
        {
          display_name: "Plan",
          variable_name: "plan_name",
          value: `Initial consultation: ${serviceTitle}`,
        },
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  if (!paystackPublicKey) {
    return null;
  }

  const onSuccess = async (reference: PaystackReference) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: reference.reference,
          serviceSlug,
          email,
        }),
      });
      const data = await response.json();
      if (data.success) {
        router.push(
          `/services/subscribe/success?plan=${encodeURIComponent(
            `Initial consultation — ${serviceTitle}`
          )}&reference=${reference.reference}`
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

  const amountDisplay = `KES ${amount.toLocaleString()}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={`btn btn-primary ${styles.bookBtn}`}
      >
        Book this service — {amountDisplay}
      </button>

      {showModal && (
        <div
          className={cardStyles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <div className={cardStyles.modalCard}>
            <button
              type="button"
              className={cardStyles.modalClose}
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <h3 id="booking-modal-title" className={cardStyles.modalTitle}>
              Book: {serviceTitle}
            </h3>
            <p className={cardStyles.modalBody}>
              Initial consultation and first-session fee for this service. Pay{" "}
              <strong>{amountDisplay}</strong> by card or M-Pesa;
              we&apos;ll call to set the date within a working day.
            </p>
            <form onSubmit={handlePay}>
              <label
                className={cardStyles.modalLabel}
                htmlFor="booking-email"
              >
                Email address
              </label>
              <input
                id="booking-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className={cardStyles.modalInput}
              />
              <button
                type="submit"
                className={`btn btn-primary ${cardStyles.modalBtn}`}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing…" : `Pay ${amountDisplay}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
