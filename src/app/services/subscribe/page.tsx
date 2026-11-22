import type { Metadata } from "next";
import { Suspense } from "react";
import SubscribeView from "./SubscribeView";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Pay for Zedjah's consultancy, subscribe to a plan, or book a service by card or M-Pesa.",
};

export default function SubscribePage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "60svh", background: "var(--color-surface-light)" }} />
      }
    >
      <SubscribeView />
    </Suspense>
  );
}
