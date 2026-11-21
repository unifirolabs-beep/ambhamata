import React from "react";
import type { Metadata } from "next";
import { PlacesToVisitContent } from "@/components/places/places-to-visit-content";

export const metadata: Metadata = {
  title: {
    absolute: "Places to Visit Near Sri Ambadevi Temple | Sindhanur Tourism",
  },
  description:
    "Discover temples, historical monuments and tourist attractions near Sri Ambadevi Devasthana, Sindhanur, Raichur District, Karnataka.",
};

export default function PlacesToVisitPage() {
  return <PlacesToVisitContent />;
}

