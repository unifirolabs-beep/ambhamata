import React from "react";
import type { Metadata } from "next";
import { SevasHeroBanner } from "@/components/sevas/sevas-hero-banner";
import { SevasListing } from "@/components/sevas/sevas-listing";
import { SevasGuideSection } from "@/components/sevas/sevas-guide-section";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Pooja & Temple Sevas Booking | Sri Ambadevi Devasthana",
  description:
    "Participate in daily, special, and perpetual Vedic sevas at Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath. Book Rudrabhisheka, Kumkumarchana, Chandi Homam, Annadana, and Belli Rathotsava with traditional Vedic sankalpa.",
  keywords: [
    "Sri Ambadevi Pooja Booking",
    "Ambamata Sevas Somalapura",
    "Rudrabhisheka Sindhanur",
    "Kumkumarchana Seva Raichur",
    "Chandi Homam Booking",
    "Annadana Seva Donation",
    "Shashwatha Seva Ambamata",
    "ಶ್ರೀ ಅಂಬಾದೇವಿ ಸೇವೆಗಳು",
    "ರುದ್ರಾಭಿಷೇಕ ಕುಂಕುಮಾರ್ಚನೆ",
  ],
  alternates: {
    canonical: "/sevas",
  },
  openGraph: {
    title: "Pooja & Temple Sevas | Sri Ambadevi Devasthana Somalapura",
    description:
      "Vedic sevas, Rudrabhisheka, Kumkumarchana, and Annadana booking at Sri Ambadevi Temple, Somalapura.",
    url: "https://ambhamata.surge.sh/sevas",
    type: "website",
    images: [
      {
        url: "/devi.jpeg",
        width: 1200,
        height: 630,
        alt: "Sri Ambadevi Devasthana Sacred Sevas and Poojas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja & Temple Sevas | Sri Ambadevi Devasthana",
    description:
      "Participate in sacred Vedic sevas and poojas with sankalpa at Sri Ambadevi Temple, Somalapura.",
    images: ["/devi.jpeg"],
  },
};

export default function SevasPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sevas & Poojas", url: "/sevas" },
  ]);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Official Hero Banner with public/hero-banner.png */}
      <SevasHeroBanner />

      {/* 2. Interactive Sevas Listing with Category Filters */}
      <SevasListing />

      {/* 3. Seva Significance, Benefits, Attire & FAQ (SEO Guide Section) */}
      <SevasGuideSection />
    </main>
  );
}
