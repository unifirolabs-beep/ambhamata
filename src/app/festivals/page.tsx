import React from "react";
import type { Metadata } from "next";
import { FestivalsHeroBanner } from "@/components/festivals/festivals-hero-banner";
import { FestivalsListingSection } from "@/components/festivals/festivals-listing-section";
import { FestivalsClosingSection } from "@/components/festivals/festivals-closing-section";

export const metadata: Metadata = {
  title: "Events & Festivals | Sri Ambamata Devasthana",
  description:
    "Explore the sacred celebrations, annual Jatra Mahotsava, Belli Rathotsava, Sharannavaratri, and religious observances at Sukṣhetra Siddha Parvatha Ambamata.",
};

export default function FestivalsPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* 1. Dedicated Top Hero Banner with public/hero-banner.png */}
      <FestivalsHeroBanner />

      {/* 2. Six Alternating Image & Text Festival Sections */}
      <FestivalsListingSection />

      {/* 3. Refined Concluding Section: The Spirit of Celebration with Sreee */}
      <FestivalsClosingSection />
    </main>
  );
}

