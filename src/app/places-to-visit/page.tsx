import React from "react";
import type { Metadata } from "next";
import { PlacesToVisitContent } from "@/components/places/places-to-visit-content";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Places to Visit Near Sri Ambadevi Temple | Sindhanur & Raichur Tourism",
  description:
    "Discover historical monuments, heritage temples, and tourist attractions near Sri Ambadevi Devasthana Somalapura, Sindhanur, Raichur District, Karnataka. Explore Hampi, Anegundi, Maski Ashoka Edict, and Tungabhadra river circuit.",
  keywords: [
    "Places to visit near Sindhanur",
    "Raichur tourism attractions",
    "Tourist places near Somalapura",
    "Hampi from Sindhanur",
    "Anegundi heritage circuit",
    "Maski Ashokan edict Raichur",
    "Karnataka pilgrimage destinations",
    "ಸಿಂಧನೂರು ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳು",
    "ರಾಯಚೂರು ಪ್ರವಾಸೋದ್ಯಮ",
  ],
  alternates: {
    canonical: "/places-to-visit",
  },
  openGraph: {
    title: "Places to Visit Near Sri Ambadevi Temple | Sindhanur Tourism",
    description:
      "Explore historic temples, heritage monuments, and pilgrim spots surrounding Somalapura in Raichur District.",
    url: "https://www.sriambadevidevasthanambamath.com/places-to-visit",
    type: "website",
    images: [
      {
        url: "/places/hero-hampi.jpg",
        width: 1200,
        height: 630,
        alt: "Tourist attractions and heritage sites near Sri Ambadevi Temple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Places to Visit Near Sri Ambadevi Temple",
    description:
      "Historical monuments and tourist attractions near Somalapura, Sindhanur, Raichur District.",
    images: ["/places/hero-hampi.jpg"],
  },
};

export default function PlacesToVisitPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Places to Visit", url: "/places-to-visit" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PlacesToVisitContent />
    </>
  );
}
