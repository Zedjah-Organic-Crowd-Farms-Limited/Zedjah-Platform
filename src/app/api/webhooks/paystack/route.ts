import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import { rateLimit, getIP } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // Rate limit: max 30 webhook calls per IP per minute
  // (Paystack fires once per event; this blocks bots hammering the endpoint)
  const ip = getIP(req);
  const { allowed } = rateLimit(ip, { limit: 30, windowMs: 60_000 });

  if (!allowed) {
    return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-paystack-signature");
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is missing");
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    // Validate signature
    const hash = crypto.createHmac("sha512", secretKey).update(rawBody).digest("hex");
    if (hash !== signature) {
      console.error("Invalid Paystack signature");
      return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(rawBody);

    // Handle successful payment
    if (event.event === "charge.success") {
      const data = event.data;
      const email = data.customer.email;
      const amount = data.amount / 100; // Convert from kobo/cents
      const reference = data.reference;
      
      // Usually, the plan name might be passed in the metadata from the frontend
      // For this implementation, we can extract it if we pass it when initializing the payment
      const planName = data.metadata?.custom_fields?.find((f: any) => f.variable_name === "plan_name")?.value || "Subscription Plan";

      console.log(`Payment successful for ${email}, Amount: ${amount}`);

      const merchantEmail = process.env.MERCHANT_EMAIL || "zedjahorganiccrowdfarms@gmail.com";
      
      // 1. Send Email to Customer
      try {
        await resend.emails.send({
          from: "Zedjah Platform <info@zedjahorganiccrowdfarms.com>",
          to: email,
          subject: "Payment Successful - Welcome to Zedjah!",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #10b981; padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0;">Payment Successful</h1>
              </div>
              <div style="padding: 20px;">
                <p>Hello,</p>
                <p>Thank you for your payment of <strong>KES ${amount}</strong> for the <strong>${planName}</strong>.</p>
                <p>Your transaction reference is: <strong>${reference}</strong>.</p>
                <p>Our team will process your request and get back to you with the next steps shortly.</p>
                <br/>
                <p>Best Regards,</p>
                <p><strong>The Zedjah Team</strong></p>
              </div>
            </div>
          `,
        });
        
        // 2. Send Email to Merchant
        await resend.emails.send({
          from: "Zedjah System Alert <info@zedjahorganiccrowdfarms.com>",
          to: merchantEmail,
          subject: "New Subscription Payment Received",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>New Subscription Received</h2>
              <p><strong>Plan/Item:</strong> ${planName}</p>
              <p><strong>Customer Email:</strong> ${email}</p>
              <p><strong>Transaction Ref:</strong> ${reference}</p>
              <p><strong>Amount Paid:</strong> KES ${amount}</p>
              <hr />
              <p>Please log in to your Paystack dashboard to view more details.</p>
            </div>
          `,
        });
        
        console.log("Resend emails sent successfully.");
      } catch (emailError) {
        console.error("Resend Email Error:", emailError);
        // We don't fail the webhook if email fails, to avoid Paystack retrying infinitely just for emails
      }
    }

    return NextResponse.json({ message: "Webhook processed" }, { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
