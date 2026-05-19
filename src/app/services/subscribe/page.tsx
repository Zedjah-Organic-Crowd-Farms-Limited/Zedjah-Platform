import type { Metadata } from "next";
import SubscriptionCards from "@/components/payments/SubscriptionCards";

export const metadata: Metadata = {
  title: "Subscribe | Services",
  description: "Subscribe to Zedjah's comprehensive organic farming services.",
};

export default function SubscribePage() {
  return (
    <>
      <section className="section" style={{ background: "var(--color-surface-warm)", padding: "var(--space-4xl) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Subscriptions</span>
          <h1 style={{ fontSize: "var(--text-5xl)", marginTop: "var(--space-sm)", marginBottom: "var(--space-md)" }}>Choose Your Plan</h1>
          <p style={{ fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto", color: "var(--color-text-secondary)" }}>
            Unlock continuous support, expert consultancy, and premium organic inputs with our flexible service subscriptions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
            <SubscriptionCards />
        </div>
      </section>
    </>
  );
}
