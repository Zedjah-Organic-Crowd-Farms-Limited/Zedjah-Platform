import type { Metadata } from "next";
import { inter, outfit } from "./fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zedjahorganiccrowdfarms.com"),
  title: {
    default: "Zedjah — Organic Crowd Farming Platform",
    template: "%s | Zedjah",
  },
  description:
    "Zedjah Organic Crowd Farms connects communities to sustainable agriculture through expert consultancy, soil nutrition, and market linkage support.",
  keywords: [
    "organic farming",
    "crowd farming",
    "agriculture",
    "farm consultancy",
    "soil nutrition",
    "market linkage",
    "sustainable agriculture",
  ],
  icons: {
    icon: "/images/zedjahLogo.svg",
    apple: "/images/zedjahLogo.svg",
  },
  openGraph: {
    title: "Zedjah — Organic Crowd Farming Platform",
    description:
      "Zedjah Organic Crowd Farms connects communities to sustainable agriculture through expert consultancy, soil nutrition, and market linkage support.",
    images: ["https://www.zedjahorganiccrowdfarms.com/images/zedjahlogo.jpeg"],
    type: "website",
    siteName: "Zedjah Organic Crowd Farms",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QMPP4FDRXB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMPP4FDRXB');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ paddingTop: "var(--nav-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
