"use client";

import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/navigation";

interface PaystackCheckoutButtonProps {
  /** Amount in KES (NOT in lowest currency unit — the component handles conversion) */
  amount: number;
  /** Display label for the button, e.g. "Fund Tools" */
  label: string;
  /** Human-readable item/plan name sent to Paystack metadata and verify-payment API */
  itemName: string;
  /** Optional button className */
  className?: string;
  /** Optional inline style */
  style?: React.CSSProperties;
}

export default function PaystackCheckoutButton({
  amount,
  label,
  itemName,
  className = "btn btn-outline",
  style,
}: PaystackCheckoutButtonProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  if (!paystackPublicKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY. Configure the Paystack public key before rendering PaystackCheckoutButton."
    );
  }

  const priceDisplay = `KES ${amount.toLocaleString()}`;

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, // Paystack uses lowest currency unit (cents)
    publicKey: paystackPublicKey,
    currency: "KES",
    metadata: {
      custom_fields: [
        {
          display_name: "Item Name",
          variable_name: "plan_name",
          value: itemName,
        },
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = async (reference: any) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: reference.reference,
          plan: itemName,
          email: email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push(
          `/services/subscribe/success?plan=${encodeURIComponent(itemName)}&reference=${reference.reference}`
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

  const onClose = () => {
    console.log("Payment closed.");
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    initializePayment({ onSuccess, onClose });
  };

  return (
    <>
      <button
        className={className}
        style={style}
        onClick={() => setShowModal(true)}
      >
        {label}
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            className="card"
            style={{
              background: "var(--color-surface, #ffffff)",
              padding: "var(--space-xl)",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "420px",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "var(--color-surface-warm, #f3f4f6)",
                border: "none",
                fontSize: "20px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-text)",
              }}
            >
              ×
            </button>
            <h3
              style={{
                marginBottom: "var(--space-md)",
                fontSize: "var(--text-xl)",
              }}
            >
              {itemName}
            </h3>
            <p
              style={{
                marginBottom: "var(--space-lg)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.5,
              }}
            >
              Please enter your email to proceed with the{" "}
              <strong>{priceDisplay}</strong> payment. Your receipt will be sent
              here.
            </p>
            <form onSubmit={handlePay}>
              <div style={{ marginBottom: "var(--space-md)" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "var(--space-xs)",
                    fontSize: "var(--text-sm)",
                    fontWeight: "600",
                    color: "var(--color-text)",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "2px solid var(--color-border)",
                    borderRadius: "10px",
                    fontSize: "var(--text-base)",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "var(--text-md)",
                  fontWeight: "600",
                  borderRadius: "10px",
                  marginTop: "8px",
                }}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Pay ${priceDisplay}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
