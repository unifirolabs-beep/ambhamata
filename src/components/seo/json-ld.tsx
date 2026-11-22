import React from "react";

export interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const TEMPLE_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": ["HinduTemple", "PlaceOfWorship", "LocalBusiness"],
  "@id": "https://ambhamata.surge.sh/#temple",
  name: "Sri Ambadevi Devasthana",
  alternateName: [
    "Sri Ambamata Devasthana",
    "Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath",
    "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ",
    "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನ ಸೋಮಲಾಪುರ",
    "श्री अम्बादेवी देवस्थान",
    "శ్రీ అంబాదేవి దేవస్థానము",
  ],
  description:
    "Official website of Sri Ambadevi Devasthana (Ambamath). Documented 343+ year sacred history, spiritual traditions of Param Poojya Sri Chidananda Avadhoota, divine blessings of Goddess Sri Ambadevi, darshan timings, pooja booking, and Belli Rathotsava festival at Somalapura, Sindhanur Taluk, Raichur District, Karnataka.",
  url: "https://ambhamata.surge.sh",
  telephone: "+91-9448642322",
  priceRange: "Free",
  image: [
    "https://ambhamata.surge.sh/devi.jpeg",
    "https://ambhamata.surge.sh/devi-idol.jpeg",
    "https://ambhamata.surge.sh/new%20temple.jpg",
    "https://ambhamata.surge.sh/home-hero-desktop.png",
  ],
  logo: "https://ambhamata.surge.sh/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Siddha Parvatha, Somalapura Village",
    addressLocality: "Sindhanur Taluk",
    addressRegion: "Karnataka",
    postalCode: "584128",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.782,
    longitude: 76.7622,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "16:30",
      closes: "20:30",
    },
  ],
  hasMap: "https://maps.google.com/?q=Somalapura+Sindhanur+Raichur",
  parentOrganization: {
    "@type": "GovernmentOrganization",
    name: "Hindu Religious Institutions & Charitable Endowments Department (HR&CE), Government of Karnataka",
    url: "https://ambhamata.surge.sh",
  },
  sameAs: [
    "https://maps.google.com/?q=Somalapura+Sindhanur+Raichur",
  ],
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://ambhamata.surge.sh${item.url}`,
    })),
  };
}

export function createFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
