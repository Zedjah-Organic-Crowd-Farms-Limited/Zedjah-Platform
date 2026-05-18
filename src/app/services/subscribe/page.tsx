import type { Metadata } from "next";

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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-xl)" }}>
            <div className="card" style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>Basic</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)" }}>Essential support for emerging organic farmers.</p>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-xl)" }}>KES 15,000<span style={{ fontSize: "var(--text-lg)", color: "var(--color-text-secondary)" }}>/mo</span></h2>
              <ul style={{ listStyleType: "none", padding: "0", marginBottom: "var(--space-xl)", textAlign: "left" }}>
                <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ Initial farm assessment</li>
                <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ Basic organic tools discount</li>
                <li style={{ padding: "var(--space-sm) 0" }}>✓ Monthly newsletter access</li>
              </ul>
              <button className="btn btn-outline" style={{ width: "100%" }}>Select Plan</button>
            </div>
            <div className="card" style={{ textAlign: "center", border: "2px solid var(--color-primary)", transform: "scale(1.05)", zIndex: 1 }}>
              <span style={{ display: "inline-block", background: "var(--color-primary)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "var(--text-sm)", fontWeight: "600", marginBottom: "var(--space-md)" }}>Most Popular</span>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>Pro</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)" }}>Comprehensive management & consultancy.</p>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-xl)" }}>KES 25,000<span style={{ fontSize: "var(--text-lg)", color: "var(--color-text-secondary)" }}>/mo</span></h2>
              <ul style={{ listStyleType: "none", padding: "0", marginBottom: "var(--space-xl)", textAlign: "left" }}>
                <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ Dedicated expert consultant</li>
                <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ Comprehensive soil testing</li>
                <li style={{ padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>✓ Market linkage priority</li>
                <li style={{ padding: "var(--space-sm) 0" }}>✓ Farm machinery discounts</li>
              </ul>
              <button className="btn btn-primary" style={{ width: "100%" }}>Select Plan</button>
            </div>
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
              <a href="/contact" className="btn btn-outline" style={{ width: "100%" }}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
