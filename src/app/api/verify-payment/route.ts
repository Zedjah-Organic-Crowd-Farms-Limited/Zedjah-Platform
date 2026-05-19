import { NextResponse } from "next/server";

export async function POST(req: Request) {
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

    // Emails are now securely handled by the Paystack Webhook using Resend

    return NextResponse.json({ success: true, message: "Payment verified successfully" });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
