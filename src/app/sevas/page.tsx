import React from "react";
import type { Metadata } from "next";
import { SevasHeroBanner } from "@/components/sevas/sevas-hero-banner";
import { SevasListing } from "@/components/sevas/sevas-listing";

export const metadata: Metadata = {
  title: "Pooja & Temple Sevas | Sri Ambamata Devasthana",
  description:
    "Participate in the sacred daily, special, and perpetual sevas at Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath. Book archana, abhisheka, and rathotsava with Vedic sankalpa.",
};

export default function SevasPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* 1. Official Hero Banner with public/hero-banner.png */}
      <SevasHeroBanner />

      {/* 2. Interactive Sevas Listing with Category Filters & Devotion Yellow Hover */}
      <SevasListing />
    </main>
  );
}
