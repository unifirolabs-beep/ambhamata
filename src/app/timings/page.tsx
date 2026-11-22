import React from "react";
import type { Metadata } from "next";
import { TimingsHeroBanner } from "@/components/timings/timings-hero-banner";
import { TimingsIntroSection } from "@/components/timings/timings-intro-section";
import { TimingsScheduleSection } from "@/components/timings/timings-schedule-section";
import { TimingsInfoSection } from "@/components/timings/timings-info-section";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Darshan, Aarti & Daily Pooja Timings | Sri Ambadevi Devasthana",
  description:
    "Daily darshan hours, 7 sacred Vedic pooja ceremonies, Kakada Aarti (6:00 AM), Rudrabhisheka (8:00 AM), Maha Mangalarathi (8:00 PM), and devotee visiting guidelines at Sukṣhetra Siddha Parvatha Somalapura, Sindhanur.",
  keywords: [
    "Sri Ambadevi Temple Timings",
    "Darshan Timings Somalapura",
    "Kakada Aarti Sindhanur",
    "Daily Pooja Schedule Raichur",
    "Rudrabhisheka Timings",
    "Siddha Parvatha Visiting Hours",
    "Free Annadana Lunch Timings",
    "ದರ್ಶನ ಮತ್ತು ಪೂಜಾ ಸಮಯ",
    "ಸೋಮಲಾಪುರ ದೇವಸ್ಥಾನ ಸಮಯ",
  ],
  alternates: {
    canonical: "/timings",
  },
  openGraph: {
    title: "Darshan & Daily Pooja Timings | Sri Ambadevi Devasthana",
    description:
      "General darshan hours, 7 daily pooja ceremonies, Kakada Aarti, and devotee guidelines at Somalapura.",
    url: "https://www.sriambadevidevasthanambamath.com/timings",
    type: "website",
    images: [
      {
        url: "/devi.jpeg",
        width: 1200,
        height: 630,
        alt: "Sri Ambadevi Daily Darshan and Pooja Timings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan & Daily Pooja Timings | Sri Ambadevi Devasthana",
    description:
      "Daily darshan hours (6:00 AM - 1:30 PM & 4:30 PM - 8:30 PM) and pooja ceremonies.",
    images: ["/devi.jpeg"],
  },
};

export default function TimingsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Darshan & Timings", url: "/timings" },
  ]);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Dedicated Top Hero Banner with public/hero-banner.png */}
      <TimingsHeroBanner />

      {/* 2. Devotional Experience & General Darshan Hours */}
      <TimingsIntroSection />

      {/* 3. 7 Daily Vedic Pooja Ceremonies Schedule */}
      <TimingsScheduleSection />

      {/* 4. Devotee Information, Helpdesk & Sacred Benediction */}
      <TimingsInfoSection />
    </main>
  );
}
