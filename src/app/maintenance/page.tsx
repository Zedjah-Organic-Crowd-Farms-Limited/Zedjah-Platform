import React from "react";

export default function MaintenancePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "3rem",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #eaeaea",
          boxShadow: "0 4px 14px 0 rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            color: "#1f2937",
            fontWeight: 700,
          }}
        >
          We'll be right back!
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.7",
            color: "#4b5563",
            marginBottom: "2rem",
          }}
        >
          We are currently performing some scheduled maintenance to improve the
          Zedjah platform. We apologize for any inconvenience.
        </p>
        <p style={{ fontSize: "1rem", color: "#6b7280", fontStyle: "italic" }}>
          &mdash; The Zedjah Team
        </p>
      </div>
    </div>
  );
}
