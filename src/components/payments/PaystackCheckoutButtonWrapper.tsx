"use client";

import dynamic from "next/dynamic";

const PaystackCheckoutButton = dynamic(
  () => import("./PaystackCheckoutButton"),
  { ssr: false }
);

export default PaystackCheckoutButton;
