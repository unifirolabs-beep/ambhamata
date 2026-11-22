import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { AboutAmbamata } from "@/components/home/about-ambamata";
import { TempleSevasSection } from "@/components/home/temple-sevas-section";
import { EventsAndFestivalsSection } from "@/components/home/events-and-festivals-section";
import { StoneMantapInaugurationSection } from "@/components/home/stone-mantap-inauguration-section";
import { HomeFaqAndGuideSection } from "@/components/home/home-faq-and-guide-section";
import { TempleTransitionVideoSection } from "@/components/home/temple-transition-video-section";
import { GovernmentListingSection } from "@/components/shared/government-listing-section";

export const metadata: Metadata = {
  title: "Sri Ambadevi Devasthana | Sukṣhetra Siddha Parvatha Somalapura Sindhanur",
  description:
    "Official website of Sri Ambadevi Devasthana (Ambamath). Documented 343+ year sacred history, spiritual traditions of Param Poojya Sri Chidananda Avadhoota, daily darshan timings, pooja booking, free Annadana, and Belli Rathotsava at Somalapura, Sindhanur, Raichur District, Karnataka.",
  keywords: [
    "Sri Ambadevi Devasthana",
    "Sri Ambamata Devasthana",
    "Siddha Parvatha Shaktipeeth",
    "Ambamath Somalapura",
    "Sindhanur Temple",
    "Raichur Temples Karnataka",
    "Param Poojya Sri Chidananda Avadhoota",
    "Belli Rathotsava Somalapura",
    "Darshan Timings Ambamata",
    "Pooja Booking Ambadevi",
    "Free Annadana Sindhanur",
    "New Stone Mantap Somalapura",
    "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ",
    "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನ ಸೋಮಲಾಪುರ",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sri Ambadevi Devasthana | Sukṣhetra Siddha Parvatha Somalapura",
    description:
      "Documented 343+ year sacred history, darshan timings, pooja booking, Belli Rathotsava festival, and Siddha Parvatha pilgrimage in Sindhanur, Karnataka.",
    url: "https://ambhamata.surge.sh/",
    type: "website",
    images: [
      {
        url: "/devi.jpeg",
        width: 1200,
        height: 630,
        alt: "Goddess Sri Ambadevi Moola Vigraha Deity at Sukshethra Siddha Parvatha Somalapura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Ambadevi Devasthana | Sukṣhetra Siddha Parvatha Somalapura",
    description:
      "Documented 343+ year sacred history, darshan timings, pooja booking, and Belli Rathotsava festival.",
    images: ["/devi.jpeg"],
  },
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <AboutAmbamata />
      <TempleSevasSection />
      <EventsAndFestivalsSection />
      <StoneMantapInaugurationSection />
      <HomeFaqAndGuideSection />
      <TempleTransitionVideoSection />
      <GovernmentListingSection />
    </main>
  );
}
