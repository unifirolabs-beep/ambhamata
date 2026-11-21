"use client";

import React, { useCallback, useState } from "react";
import { useReducedMotion } from "motion/react";
import type { DestinationPlace } from "@/data/places-to-visit";
import { PlacesHeroAndIntro } from "@/components/places/places-hero-and-intro";
import { PlacesCarousel } from "@/components/places/places-carousel";
import { AllPlacesGrid } from "@/components/places/all-places-grid";
import { TransportationFacilities } from "@/components/places/transportation-facilities";
import { PlacesClosingBanner } from "@/components/places/places-closing-banner";

export function PlacesToVisitContent() {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleSelectPlace = useCallback(
    (place: DestinationPlace) => {
      setSelectedPlaceId(place.id);
      const cardEl = document.getElementById(`place-${place.id}`);
      const targetEl = cardEl ?? document.getElementById("all-places");
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
          block: "center",
        });
      }
    },
    [shouldReduceMotion]
  );

  return (
    <main className="flex-1 flex flex-col bg-white overflow-x-hidden">
      <PlacesHeroAndIntro />
      <PlacesCarousel onSelectPlace={handleSelectPlace} />
      <AllPlacesGrid selectedPlaceId={selectedPlaceId} />
      <TransportationFacilities />
      <PlacesClosingBanner />
    </main>
  );
}
