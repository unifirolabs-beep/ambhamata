import React from "react";
import type { Metadata } from "next";
import { GalleryHeroBanner } from "@/components/gallery/gallery-hero-banner";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { GalleryHighlights } from "@/components/gallery/gallery-highlights";
import { GalleryClosingSection } from "@/components/gallery/gallery-closing-section";

export const metadata: Metadata = {
  title: "Photo Gallery | Sri Ambamata Devasthana",
  description:
    "Explore authentic sacred photographs of Goddess Sri Ambadevi, the divine sanctum, Belli Rathotsava festival, temple architecture, and the sacred Siddha Parvatha at Somalapura.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* 1. Dedicated Gallery Hero Banner */}
      <GalleryHeroBanner />

      {/* 2. Interactive Photo Gallery Grid with Category Filters & Lightbox */}
      <GalleryGrid />

      {/* 3. Devotional Kshetra Highlights */}
      <GalleryHighlights />

      {/* 4. Concluding Darshan Invitation & Blessings */}
      <GalleryClosingSection />
    </main>
  );
}

