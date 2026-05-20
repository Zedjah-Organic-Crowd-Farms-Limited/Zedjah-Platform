import { NextResponse } from "next/server";
import { rateLimit, getIP } from "@/lib/rateLimit";

const PLAN_REQUIREMENTS = {
  Basic: { amount: 1_500_000, currency: "KES" },
  Pro: { amount: 2_500_000, currency: "KES" },
} as const;

export async function POST(req: Request) {
  // Rate limit: max 10 verification attempts per IP per minute
  const ip = getIP(req);
  let remaining: number | null = null;

  if (ip) {
    const rateLimitResult = rateLimit(ip, { limit: 10, windowMs: 60_000 });
    remaining = rateLimitResult.remaining;

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }
  }

  try {
    const { reference, plan, email } = await req.json();

    if (
      typeof reference !== "string" ||
      typeof email !== "string" ||
      typeof plan !== "string" ||
      !reference ||
      !email ||
      !plan
    ) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    if (!/^[A-Za-z0-9_-]+$/.test(reference)) {
      return NextResponse.json({ success: false, message: "Invalid reference format" }, { status: 400 });
    }

    const expectedPlan = PLAN_REQUIREMENTS[plan as keyof typeof PLAN_REQUIREMENTS];
    if (!expectedPlan) {
      return NextResponse.json({ success: false, message: "Invalid plan" }, { status: 400 });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    
    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is not defined");
      return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
    }

    // 1. Verify transaction with Paystack
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.status || verifyData.data.status !== "success") {
      return NextResponse.json({ success: false, message: "Transaction verification failed" }, { status: 400 });
    }

    const amountMatches = verifyData.data.amount === expectedPlan.amount;
    const currencyMatches = verifyData.data.currency === expectedPlan.currency;
    const customerEmail = verifyData.data.customer?.email;
    const emailMatches = typeof customerEmail === "string" && customerEmail.toLowerCase() === email.toLowerCase();

    if (!amountMatches || !currencyMatches || !emailMatches) {
      return NextResponse.json({ success: false, message: "Transaction details do not match request" }, { status: 400 });
    }

    // Emails are handled by the Paystack Webhook using Resend
    const responseHeaders = remaining !== null
      ? { "X-RateLimit-Remaining": String(remaining) }
      : undefined;

    return NextResponse.json(
      { success: true, message: "Payment verified successfully" },
      responseHeaders ? { headers: responseHeaders } : undefined
    );
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
