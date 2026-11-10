import React from "react";
import type { Metadata } from "next";
import { AboutHeroBanner } from "@/components/about/about-hero-banner";
import { AboutHistorySection } from "@/components/about/about-history-section";
import { AboutSaintAndHillSection } from "@/components/about/about-saint-and-hill-section";
import { AboutDeviAndPuranaSection } from "@/components/about/about-devi-and-purana-section";
import { GovernmentListingSection } from "@/components/shared/government-listing-section";
import { AboutVisionSection } from "@/components/about/about-vision-section";

export const metadata: Metadata = {
  title: "About Us | Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath",
  description:
    "Explore the documented 343+ year sacred history, spiritual traditions of Param Poojya Sri Chidananda Avadhoota, Siddha Parvatha hill, divine blessings of Goddess Sri Ambadevi, and our vision for preserving this sacred heritage.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* 1. Dedicated Top Hero Banner with public/hero-banner.png */}
      <AboutHeroBanner />

      {/* 2. Section 1: History of Sri Ambamata Devasthana */}
      <AboutHistorySection />

      {/* 3. Section 2: Param Poojya Sri Chidananda Avadhoota & Section 3: Siddha Parvatha Sacred Hill */}
      <AboutSaintAndHillSection />

      {/* 4. Section 4: Sri Ambadevi – The Divine Mother & Section 5: Devi Purana and Sacred Traditions */}
      <AboutDeviAndPuranaSection />

      {/* 5. Official Government of Karnataka HR&CE Listing */}
      <GovernmentListingSection />

      {/* 6. Section 6: Our Vision & Spiritual Heritage and Sacred Blessing Banner */}
      <AboutVisionSection />
    </main>
  );
}
