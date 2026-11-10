"use client";

import React from "react";
import { useContentTranslation } from "@/messages/content-translations";
import { FestivalEventRow } from "@/components/festivals/festival-event-row";

export function FestivalsListingSection() {
  const { t, fontClass, isKannada } = useContentTranslation();
  const events = t.festivalsPage.events;

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16 sm:space-y-20 md:space-y-24">
        {events.map((event, index) => {
          const isReverse = index % 2 === 1;

          return (
            <FestivalEventRow
              key={index}
              event={event}
              isReverse={isReverse}
              isKannada={isKannada}
              fontClass={fontClass}
            />
          );
        })}
      </div>
    </section>
  );
}

