import type { Metadata } from "next";
import { Handshake, Sprout, Building, Users, Heart, Sun, Droplets, Leaf } from "lucide-react";
import PaystackCheckoutButton from "@/components/payments/PaystackCheckoutButtonWrapper";

export const metadata: Metadata = {
  title: "Partner With Us | Zedjah",
  description: "Join hands with Zedjah to create a sustainable agricultural ecosystem.",
};

export default function PartnersPage() {
  return (
    <>
      <section style={{ 
        position: "relative",
        backgroundImage: "url('/images/partner_hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
        color: "var(--color-text-inverse)", 
        padding: "calc(var(--space-5xl) + 2rem) 0 var(--space-4xl)",
        minHeight: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(13, 59, 19, 0.75) 0%, rgba(27, 94, 32, 0.6) 50%, rgba(13, 59, 19, 0.8) 100%)",
        }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ 
            display: "inline-block",
            fontFamily: "var(--font-heading)", 
            fontWeight: "600", 
            fontSize: "var(--text-sm)",
            color: "var(--color-accent)", 
            textTransform: "uppercase", 
            letterSpacing: "0.1em",
            marginBottom: "var(--space-md)",
          }}>Partnerships</span>
          <h1 style={{ 
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)", 
            fontWeight: 700,
            color: "var(--color-text-inverse)",
            lineHeight: "var(--leading-tight)",
            marginBottom: "var(--space-lg)",
          }}>Let&apos;s Grow a Forest Together</h1>
          <p style={{ 
            fontSize: "var(--text-lg)", 
            maxWidth: "700px", 
            margin: "0 auto", 
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: "var(--leading-relaxed)",
          }}>
            A single seed can grow a tree, but it takes a community to grow a forest. 
            Whether you&apos;re an NGO, a corporate entity, or a research institution, your partnership is the sunlight we need to scale agroecology across the region.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-xl)", marginBottom: "var(--space-4xl)" }}>
            <div className="card" style={{ textAlign: "center", padding: "var(--space-2xl) var(--space-xl)" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--color-surface-accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-md)", color: "var(--color-primary)" }}>
                <Sprout size={32} />
              </div>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>NGOs &amp; Non-Profits</h3>
              <p>Collaborate with us on community resilience projects and food security programs.</p>
            </div>
            <div className="card" style={{ textAlign: "center", padding: "var(--space-2xl) var(--space-xl)" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--color-surface-accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-md)", color: "var(--color-primary)" }}>
                <Building size={32} />
              </div>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>Corporate &amp; Retail</h3>
              <p>Source high-quality organic produce directly from our network of trained farmers.</p>
            </div>
            <div className="card" style={{ textAlign: "center", padding: "var(--space-2xl) var(--space-xl)" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--color-surface-accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-md)", color: "var(--color-primary)" }}>
                <Users size={32} />
              </div>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>Investors</h3>
              <p>Invest in scalable agroecology systems with a strong socio-economic ROI.</p>
            </div>
          </div>

          {/* Support a Farmer Section */}
          <div style={{ marginBottom: "var(--space-4xl)" }}>
            <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
              <h2 style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--space-sm)" }}>Support a Farmer</h2>
              <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
                You can also partner with us directly by funding tools, education, and resources for our local farmers in Kenya.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-xl)" }}>
              
              <div className="card" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.1, color: "var(--color-primary)" }}>
                  <Droplets size={120} />
                </div>
                <h3 style={{ marginBottom: "var(--space-xs)" }}>Buy Farm Tools</h3>
                <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-md)", fontSize: "var(--text-sm)" }}>Provides organic seeds and basic hand tools.</p>
                <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-xl)" }}>KES 2,500</h2>
                <PaystackCheckoutButton
                  amount={2500}
                  label="Fund Tools"
                  itemName="FundTools"
                  className="btn btn-outline"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="card" style={{ textAlign: "center", position: "relative", overflow: "hidden", border: "2px solid var(--color-accent)" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.1, color: "var(--color-accent)" }}>
                  <Sun size={120} />
                </div>
                <span style={{ display: "inline-block", background: "var(--color-accent)", color: "var(--color-surface-dark)", padding: "4px 12px", borderRadius: "20px", fontSize: "var(--text-xs)", fontWeight: "700", marginBottom: "var(--space-sm)" }}>Most Popular</span>
                <h3 style={{ marginBottom: "var(--space-xs)" }}>Pay for Training</h3>
                <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-md)", fontSize: "var(--text-sm)" }}>Funds a full month of farming education.</p>
                <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-xl)" }}>KES 10,000</h2>
                <PaystackCheckoutButton
                  amount={10000}
                  label="Fund Training"
                  itemName="FundTraining"
                  className="btn btn-accent"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="card" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.1, color: "var(--color-success)" }}>
                  <Leaf size={120} />
                </div>
                <h3 style={{ marginBottom: "var(--space-xs)" }}>Support a Farm</h3>
                <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-md)", fontSize: "var(--text-sm)" }}>Provides machinery access and market support.</p>
                <h2 style={{ fontSize: "var(--text-4xl)", color: "var(--color-primary)", marginBottom: "var(--space-xl)" }}>KES 25,000</h2>
                <PaystackCheckoutButton
                  amount={25000}
                  label="Support Now"
                  itemName="SupportFarm"
                  className="btn btn-outline"
                  style={{ width: "100%" }}
                />
              </div>

            </div>
          </div>
          <div style={{ background: "var(--color-surface-warm)", borderRadius: "var(--radius-xl)", padding: "var(--space-3xl)", textAlign: "center" }}>
            <Handshake size={48} color="var(--color-primary)" style={{ margin: "0 auto var(--space-md)" }} />
            <h2 style={{ marginBottom: "var(--space-md)" }}>Ready to plant the seed?</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto var(--space-xl)", color: "var(--color-text-secondary)" }}>
              Reach out to our partnership team. We are always open to innovative ways to collaborate and expand our impact.
            </p>
            <a href="/contact" className="btn btn-primary">Start a Conversation</a>
          </div>
        </div>
      </section>
    </>
  );
}
