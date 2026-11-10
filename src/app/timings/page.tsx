import React from "react";
import type { Metadata } from "next";
import { TimingsHeroBanner } from "@/components/timings/timings-hero-banner";
import { TimingsIntroSection } from "@/components/timings/timings-intro-section";
import { TimingsScheduleSection } from "@/components/timings/timings-schedule-section";
import { TimingsInfoSection } from "@/components/timings/timings-info-section";

export const metadata: Metadata = {
  title: "Darshan & Daily Pooja Timings | Sri Ambamata Devasthana",
  description:
    "Experience the divine grace of Goddess Sri Ambadevi at Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath. View general darshan hours, 7 daily pooja ceremonies, Kakada Aarti, Rudrabhisheka, and devotee guidelines.",
  keywords: [
    "Sri Ambamata Temple Timings",
    "Darshan Timings Somalapura",
    "Kakada Aarti Raichur",
    "Daily Pooja Schedule",
    "Sri Ambadevi Darshan",
    "Siddha Parvatha Timings",
    "ದರ್ಶನ ಮತ್ತು ಪೂಜಾ ಸಮಯ",
  ],
};

export default function TimingsPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
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

