import { NextResponse } from "next/server";
import { rateLimit, getIP } from "@/lib/rateLimit";

export async function POST(req: Request) {
  // Rate limit: max 10 verification attempts per IP per minute
  const ip = getIP(req);
  const { allowed, remaining } = rateLimit(ip, { limit: 10, windowMs: 60_000 });

  if (!allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  try {
    const { reference, plan, email } = await req.json();

    if (!reference || !email || !plan) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    
    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is not defined");
      return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
    }

    // 1. Verify transaction with Paystack
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.status || verifyData.data.status !== "success") {
      return NextResponse.json({ success: false, message: "Transaction verification failed" }, { status: 400 });
    }

    // Emails are handled by the Paystack Webhook using Resend
    return NextResponse.json(
      { success: true, message: "Payment verified successfully" },
      { headers: { "X-RateLimit-Remaining": String(remaining) } }
    );
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
