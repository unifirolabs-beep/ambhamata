import React from "react";
import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";
import { ContactPilgrimGuide } from "@/components/contact/contact-pilgrim-guide";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Contact, Route Directions & Pilgrim Services | Sri Ambamata Devasthana",
  description:
    "Official contact numbers, how to reach Somalapura by bus, train & car, free Annadana timings, pilgrim dharmashala lodging, hundi donation guidelines, and temple office helpline for Sri Ambadevi Devasthana, Sindhanur, Raichur District.",
  keywords: [
    "Sri Ambadevi Temple Contact Number",
    "How to reach Somalapura Sindhanur",
    "Siddha Parvatha Temple Route",
    "Ambamata Temple Helpline",
    "Somalapura Annadana Timings",
    "Raichur to Somalapura Distance",
    "Sindhanur Temple Contact",
    "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ ಸಂಪರ್ಕ",
    "ಸೋಮಲಾಪುರ ಮಾರ್ಗ",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Pilgrim Services | Sri Ambadevi Devasthana Somalapura",
    description:
      "Official helpline, route directions from Sindhanur & Raichur, Annadana timings, and devotee facilities at Sukṣhetra Siddha Parvatha.",
    url: "https://ambhamata.surge.sh/contact",
    type: "website",
    images: [
      {
        url: "/devi.jpeg",
        width: 1200,
        height: 630,
        alt: "Sri Ambadevi Devasthana Contact and Location at Somalapura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Pilgrim Services | Sri Ambadevi Devasthana",
    description:
      "Official helpline, road route directions, and devotee facilities at Sri Ambadevi Temple, Somalapura, Sindhanur.",
    images: ["/devi.jpeg"],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact & Services", url: "/contact" },
  ]);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <JsonLd data={breadcrumbSchema} />
      <ContactContent />
      <ContactPilgrimGuide />
    </main>
  );
}
