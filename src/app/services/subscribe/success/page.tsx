import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SuccessPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const planParam = searchParams?.plan;
  const planName = Array.isArray(planParam) ? planParam[0] : planParam;
  const reference = searchParams?.reference || "N/A";

  return (
    <div className="container" style={{ maxWidth: "600px", margin: "100px auto", textAlign: "center" }}>
      <div className="card" style={{ padding: "var(--space-2xl)" }}>
        <CheckCircle size={64} color="var(--color-primary)" style={{ margin: "0 auto var(--space-md)" }} />
        <h1 style={{ marginBottom: "var(--space-sm)", color: "var(--color-primary)" }}>Payment Successful!</h1>
        <p style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-lg)" }}>
          Thank you for subscribing to <strong>{planName || "your subscription"}</strong>.
        </p>
        <div style={{ background: "var(--color-surface-warm)", padding: "var(--space-md)", borderRadius: "8px", marginBottom: "var(--space-xl)", textAlign: "left" }}>
          <p style={{ margin: "0 0 var(--space-xs) 0", fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>Transaction Reference:</p>
          <p style={{ margin: "0", fontFamily: "monospace", fontSize: "var(--text-base)" }}>{reference}</p>
        </div>
        <p style={{ marginBottom: "var(--space-xl)", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          We have received your payment. Our team will process your subscription and get back to you shortly with the next steps and access details.
        </p>
        <Link href="/" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <span>Return Home</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
