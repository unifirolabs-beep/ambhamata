"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Car,
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
} from "lucide-react";
import {
  DESTINATION_PLACES,
  PLACES_COPY,
  buildGoogleDirectionsUrl,
  getPlaceText,
} from "@/data/places-to-visit";
import {
  PLACES_CONTAINER,
  PLACES_EASE,
  PlacesSectionHeader,
} from "@/components/places/places-primitives";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

interface AllPlacesGridProps {
  selectedPlaceId: string | null;
}

export function AllPlacesGrid({ selectedPlaceId }: AllPlacesGridProps) {
  const { locale, fontClass } = useContentTranslation();
  const copy = PLACES_COPY[locale];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="all-places"
      className="w-full bg-[#FFFDF9] border-t border-b border-[#EAEAEA] py-10 sm:py-12 md:py-16 scroll-mt-24"
    >
      <div className={PLACES_CONTAINER}>
        <PlacesSectionHeader
          heading={copy.allHeading}
          subtitle={copy.allSubtitle}
          locale={locale}
          fontClass={fontClass}
          className="mb-8 sm:mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 xl:gap-7">
          {DESTINATION_PLACES.map((place, idx) => {
            const text = getPlaceText(place, locale);
            const isSelected = selectedPlaceId === place.id;
            const directionsHref = buildGoogleDirectionsUrl(
              place.directionsDestination
            );

            return (
              <motion.article
                id={`place-${place.id}`}
                key={place.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.48,
                  delay: Math.min((idx % 3) * 0.06, 0.18),
                  ease: PLACES_EASE,
                }}
                className={cn(
                  "group rounded-2xl bg-white border shadow-xs hover:shadow-md transition-all duration-300 ease-out overflow-hidden flex flex-col",
                  isSelected
                    ? "border-[#8B1729] ring-1 ring-[#8B1729]/25"
                    : "border-[#EAEAEA] hover:-translate-y-1"
                )}
              >
                {/* Destination Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5]">
                  <Image
                    src={place.image}
                    alt={place.imageAlt}
                    fill
                    unoptimized
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="inline-flex items-center justify-center h-6 min-w-6 px-2 rounded-md bg-[#8B1729] text-white text-xs font-bold shadow-xs">
                      {place.order}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/95 text-[#242424] border border-[#EAEAEA] text-xs font-semibold shadow-xs",
                        fontClass
                      )}
                    >
                      {text.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2.5">
                    <div>
                      <h3
                        className={cn(
                          "font-heritage-serif text-lg sm:text-xl font-bold text-[#8B1729] leading-snug",
                          locale !== "en" && fontClass
                        )}
                      >
                        {text.name}
                      </h3>
                      <p
                        className={cn(
                          "mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B6B]",
                          fontClass
                        )}
                      >
                        <MapPin
                          className="h-3.5 w-3.5 text-[#8B1729] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{text.location}</span>
                      </p>
                    </div>

                    <p
                      className={cn(
                        "text-sm text-[#242424] leading-relaxed",
                        fontClass
                      )}
                    >
                      {text.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    {/* Approximate Distance & Travel Time */}
                    <div className="rounded-lg bg-[#FFF9F0] border border-[#EDE0CA] px-3 py-2.5 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#242424]">
                        <span className="inline-flex items-center gap-1.5">
                          <Car
                            className="h-3.5 w-3.5 text-[#8B1729] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{place.distance}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[#6B6B6B]">
                          <Clock
                            className="h-3.5 w-3.5 text-[#8B1729] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{place.duration}</span>
                        </span>
                      </div>
                      <p
                        className={cn(
                          "text-[11px] text-[#6B6B6B]",
                          fontClass
                        )}
                      >
                        {copy.approxLabel}
                      </p>
                    </div>

                    {/* Action Button: Fixed-Origin Directions */}
                    <a
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B1729] hover:bg-[#6F1020] text-white px-4 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1729]",
                        fontClass
                      )}
                    >
                      <Navigation className="h-4 w-4 shrink-0" />
                      <span>{copy.directionsBtn}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-85" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

