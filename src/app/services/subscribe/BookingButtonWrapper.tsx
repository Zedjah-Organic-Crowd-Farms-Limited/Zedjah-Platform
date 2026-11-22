"use client";

import dynamic from "next/dynamic";

const BookingButton = dynamic(() => import("./BookingButton"), {
  ssr: false,
});

export default function BookingButtonWrapper(props: {
  serviceSlug: string;
  serviceTitle: string;
  amount: number;
}) {
  return <BookingButton {...props} />;
}
