"use client";

import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/navigation";

export default function SubscriptionCards() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; amount: number; description: string; priceDisplay: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Essential support for emerging organic farmers.",
      priceDisplay: "KES 15,000",
      amount: 15000 * 100, // Paystack uses the lowest currency unit (Kobo/Cents), so multiply by 100 if KES is standard, wait Paystack uses kobo for NGN. For KES, it's also cents.
      features: [
        "Initial farm assessment",
        "Basic organic tools discount",
        "Monthly newsletter access",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Comprehensive management & consultancy.",
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

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: selectedPlan?.amount || 0,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_513b9d6a3b34d439dcfc79df672d70025e1518b5",
    currency: "KES", // Setting currency to Kenyan Shillings
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

  const onSuccess = async (reference: any) => {
    setIsProcessing(true);
    // Call our backend to verify the transaction
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          reference: reference.reference,
          plan: selectedPlan?.name,
          email: email
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Redirect to success page
        router.push(`/services/subscribe/success?plan=${selectedPlan?.name}&reference=${reference.reference}`);
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-xl)" }}>
        {plans.map((plan) => (
          <div key={plan.name} className="card" style={{ textAlign: "center", border: plan.isPopular ? "2px solid var(--color-primary)" : "none", transform: plan.isPopular ? "scale(1.05)" : "none", zIndex: plan.isPopular ? 1 : 0 }}>
            {plan.isPopular && (
              <span style={{ display: "inline-block", background: "var(--color-primary)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "var(--text-sm)", fontWeight: "600", marginBottom: "var(--space-md)" }}>
                Most Popular
              </span>
            )}
            <h3 style={{ marginBottom: "var(--space-sm)" }}>{plan.name}</h3>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)" }}>{plan.description}</p>
            <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-xl)" }}>
              {plan.priceDisplay}<span style={{ fontSize: "var(--text-lg)", color: "var(--color-text-secondary)" }}>/mo</span>
            </h2>
            <ul style={{ listStyleType: "none", padding: "0", marginBottom: "var(--space-xl)", textAlign: "left" }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={{ padding: "var(--space-sm) 0", borderBottom: idx < plan.features.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => handleSelectPlan(plan)} className={plan.isPopular ? "btn btn-primary" : "btn btn-outline"} style={{ width: "100%" }}>
              Select Plan
            </button>
          </div>
        ))}

        <div className="card" style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: "var(--space-sm)" }}>Enterprise</h3>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)" }}>Full-scale operations for large farms.</p>
          <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-xl)" }}>Custom</h2>
          <ul style={{ listStyleType: "none", padding: "0", marginBottom: "var(--space-xl)", textAlign: "left" }}>
            <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ End-to-end system management</li>
            <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ Full machinery operations</li>
            <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ Dedicated agroecology team</li>
            <li style={{ padding: "var(--space-sm) 0" }}>✓ Export market integration</li>
          </ul>
          <a href="/contact" className="btn btn-outline" style={{ width: "100%", display: "inline-block" }}>Contact Us</a>
        </div>
      </div>

      {showModal && selectedPlan && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.65)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div className="card" style={{ 
            background: "var(--color-surface, #ffffff)", 
            padding: "var(--space-xl)", 
            borderRadius: "16px", 
            width: "100%", 
            maxWidth: "420px", 
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <button 
              onClick={() => setShowModal(false)}
              style={{ position: "absolute", top: "16px", right: "16px", background: "var(--color-surface-warm, #f3f4f6)", border: "none", fontSize: "20px", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text)" }}
            >
              ×
            </button>
            <h3 style={{ marginBottom: "var(--space-md)", fontSize: "var(--text-xl)" }}>Subscribe to {selectedPlan.name}</h3>
            <p style={{ marginBottom: "var(--space-lg)", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              Please enter your email to proceed with the <strong>{selectedPlan.priceDisplay}</strong> payment. Your receipt will be sent here.
            </p>
            <form onSubmit={handlePay}>
              <div style={{ marginBottom: "var(--space-md)" }}>
                <label style={{ display: "block", marginBottom: "var(--space-xs)", fontSize: "var(--text-sm)", fontWeight: "600", color: "var(--color-text)" }}>Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{ width: "100%", padding: "14px", border: "2px solid var(--color-border)", borderRadius: "10px", fontSize: "var(--text-base)", outline: "none", transition: "border-color 0.2s ease" }}
                  onFocus={(e) => e.target.style.borderColor = "var(--color-primary)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--color-border)"}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: "100%", padding: "14px", fontSize: "var(--text-md)", fontWeight: "600", borderRadius: "10px", marginTop: "8px" }}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Pay ${selectedPlan.priceDisplay}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
