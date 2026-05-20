"use client";

import dynamic from "next/dynamic";

const SubscriptionCards = dynamic(() => import("./SubscriptionCards"), {
  ssr: false,
});

export default function SubscriptionCardsWrapper() {
  return <SubscriptionCards />;
}
