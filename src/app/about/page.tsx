import React from "react";
import type { Metadata } from "next";
import { AboutHeroBanner } from "@/components/about/about-hero-banner";
import { AboutHistorySection } from "@/components/about/about-history-section";
import { AboutSaintAndHillSection } from "@/components/about/about-saint-and-hill-section";
import { AboutDeviAndPuranaSection } from "@/components/about/about-devi-and-purana-section";
import { AboutTempleVideoSection } from "@/components/about/about-temple-video-section";
import { GovernmentListingSection } from "@/components/shared/government-listing-section";
import { AboutVisionSection } from "@/components/about/about-vision-section";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About History, Sacred Tapobhoomi & Heritage | Sri Ambadevi Devasthana",
  description:
    "Documented 343+ year sacred history of Sri Ambamata Devasthana. Discover the spiritual tapasya of Param Poojya Sri Chidananda Avadhoota, sacred Siddha Parvatha hill, divine mother Sri Ambadevi, and Karnataka HR&CE governance in Somalapura, Sindhanur.",
  keywords: [
    "Sri Ambamata Temple History",
    "Sri Ambadevi Devasthana Somalapura",
    "Param Poojya Sri Chidananda Avadhoota",
    "Siddha Parvatha Tapobhoomi",
    "Sindhanur Heritage Temples",
    "Devi Purana Karnataka",
    "Raichur Spiritual Heritage",
    "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ ಇತಿಹಾಸ",
    "ಚಿದಾನಂದ ಅವಧೂತರು ಸಿದ್ಧ ಪರ್ವತ",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About History & Heritage | Sri Ambadevi Devasthana Somalapura",
    description:
      "Documented 343+ year sacred history of Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath and Param Poojya Sri Chidananda Avadhoota.",
    url: "https://www.sriambadevidevasthanambamath.com/about",
    type: "website",
    images: [
      {
        url: "/devi-idol.jpeg",
        width: 1200,
        height: 630,
        alt: "Sacred Moola Vigraha Idol of Goddess Sri Ambadevi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Temple History & Heritage | Sri Ambadevi Devasthana",
    description:
      "343+ year sacred history of Sri Ambadevi Temple and Param Poojya Sri Chidananda Avadhoota.",
    images: ["/devi-idol.jpeg"],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Temple & History", url: "/about" },
  ]);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Dedicated Top Hero Banner with public/hero-banner.png */}
      <AboutHeroBanner />

      {/* 2. Section 1: History of Sri Ambamata Devasthana */}
      <AboutHistorySection />

      {/* 3. Section 2: Param Poojya Sri Chidananda Avadhoota & Section 3: Siddha Parvatha Sacred Hill */}
      <AboutSaintAndHillSection />

      {/* 4. Section 4: Sri Ambadevi – The Divine Mother & Section 5: Devi Purana and Sacred Traditions */}
      <AboutDeviAndPuranaSection />

      {/* 5. Documentary Video: History & New Construction of Sri Ambadevi Temple */}
      <AboutTempleVideoSection />

      {/* 6. Official Government of Karnataka HR&CE Listing */}
      <GovernmentListingSection />

      {/* 6. Section 6: Our Vision & Spiritual Heritage and Sacred Blessing Banner */}
      <AboutVisionSection />
    </main>
  );
}
