import React from "react";
import type { Metadata } from "next";
import { FestivalsHeroBanner } from "@/components/festivals/festivals-hero-banner";
import { FestivalsListingSection } from "@/components/festivals/festivals-listing-section";
import { FestivalsGuideSection } from "@/components/festivals/festivals-guide-section";
import { FestivalsClosingSection } from "@/components/festivals/festivals-closing-section";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Events, Festivals & Belli Rathotsava | Sri Ambadevi Devasthana",
  description:
    "Explore sacred religious festivals at Sukṣhetra Siddha Parvatha Somalapura. Annual Belli Rathotsava (Silver Chariot Festival), Jatra Mahotsava, Sharannavaratri Dasara celebrations, and Karthika Deepotsava schedule.",
  keywords: [
    "Sri Ambadevi Belli Rathotsava",
    "Somalapura Jatra Mahotsava",
    "Ambamata Festivals Sindhanur",
    "Silver Chariot Procession Raichur",
    "Sharannavaratri Ambadevi Temple",
    "Karthika Deepotsava Siddha Parvatha",
    "ಬೆಳ್ಳಿ ರಥೋತ್ಸವ ಸೋಮಲಾಪುರ",
    "ಜಾತ್ರಾ ಮಹೋತ್ಸವ ಸಿಂಧನೂರು",
  ],
  alternates: {
    canonical: "/festivals",
  },
  openGraph: {
    title: "Events, Festivals & Belli Rathotsava | Sri Ambadevi Devasthana",
    description:
      "Sacred annual Jatra Mahotsava, Belli Rathotsava silver chariot festival, and Sharannavaratri celebrations at Somalapura.",
    url: "https://ambhamata.surge.sh/festivals",
    type: "website",
    images: [
      {
        url: "/devi.jpeg",
        width: 1200,
        height: 630,
        alt: "Sri Ambadevi Annual Belli Rathotsava and Festivals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Festivals | Sri Ambadevi Devasthana",
    description:
      "Sacred religious celebrations and Belli Rathotsava silver chariot festival at Somalapura.",
    images: ["/devi.jpeg"],
  },
};

export default function FestivalsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events & Festivals", url: "/festivals" },
  ]);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Dedicated Top Hero Banner with public/hero-banner.png */}
      <FestivalsHeroBanner />

      {/* 2. Six Alternating Image & Text Festival Sections */}
      <FestivalsListingSection />

      {/* 3. Sacred Festival Calendar, Auspicious Tithis & FAQs (SEO Guide Section) */}
      <FestivalsGuideSection />

      {/* 4. Refined Concluding Section: The Spirit of Celebration with Sreee */}
      <FestivalsClosingSection />
    </main>
  );
}
