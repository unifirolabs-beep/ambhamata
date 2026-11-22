import React from "react";
import type { Metadata } from "next";
import { GalleryHeroBanner } from "@/components/gallery/gallery-hero-banner";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { GalleryHighlights } from "@/components/gallery/gallery-highlights";
import { GallerySeoGuide } from "@/components/gallery/gallery-seo-guide";
import { GalleryClosingSection } from "@/components/gallery/gallery-closing-section";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Photo Gallery, Sanctum Architecture & Visual Darshan | Sri Ambadevi Devasthana",
  description:
    "Explore authentic sacred photographs of Goddess Sri Ambadevi, Moola Vigraha deity in betel leaf alankara, newly sculpted granite Shila Mantapa, Belli Rathotsava silver chariot festival, and Siddha Parvatha at Somalapura, Sindhanur.",
  keywords: [
    "Sri Ambadevi Temple Photos",
    "Ambamata Photo Gallery Somalapura",
    "Belli Rathotsava Chariot Photos",
    "Goddess Ambadevi Deity Idol Images",
    "Sindhanur Temple Architecture",
    "Granite Shila Mantapa Carvings",
    "Siddha Parvatha Raichur Photos",
    "ಶ್ರೀ ಅಂಬಾದೇವಿ ಫೋಟೋಗಳು",
    "ರಥೋತ್ಸವ ಭಾವಚಿತ್ರಗಳು",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery & Sacred Architecture | Sri Ambadevi Devasthana Somalapura",
    description:
      "Authentic sacred photos of Goddess Sri Ambadevi, newly sculpted granite Shila Mantapa, and annual Belli Rathotsava chariot festival.",
    url: "https://ambhamata.surge.sh/gallery",
    type: "website",
    images: [
      {
        url: "/devi.jpeg",
        width: 1200,
        height: 630,
        alt: "Goddess Sri Ambadevi Sacred Darshan Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Sri Ambadevi Devasthana Somalapura",
    description:
      "Visual darshan of Goddess Sri Ambadevi, granite stone mantapa, and chariot festival.",
    images: ["/devi.jpeg"],
  },
};

export default function GalleryPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Photo Gallery", url: "/gallery" },
  ]);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Dedicated Gallery Hero Banner */}
      <GalleryHeroBanner />

      {/* 2. Interactive Photo Gallery Grid with Category Filters & Lightbox (Clean images without card content) */}
      <GalleryGrid />

      {/* 3. Devotional Kshetra Highlights */}
      <GalleryHighlights />

      {/* 4. Sacred Iconography, Architectural Guide & Devotee Photography Rules (SEO Guide) */}
      <GallerySeoGuide />

      {/* 5. Concluding Darshan Invitation & Blessings */}
      <GalleryClosingSection />
    </main>
  );
}
