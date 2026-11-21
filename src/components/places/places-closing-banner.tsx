"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PLACES_COPY } from "@/data/places-to-visit";
import {
  PLACES_CONTAINER,
  PLACES_EASE,
} from "@/components/places/places-primitives";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

/**
 * Closing editorial landscape banner displayed at the bottom of `/places-to-visit`.
 */
export function PlacesClosingBanner() {
  const { locale, fontClass } = useContentTranslation();
  const copy = PLACES_COPY[locale];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-white pb-12 sm:pb-16">
      <div className={PLACES_CONTAINER}>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: PLACES_EASE }}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#EAEAEA] shadow-sm min-h-[200px] sm:min-h-[230px] lg:min-h-[250px] flex items-center justify-center"
        >
          <Image
            src="/places/closing-hampi.jpg"
            alt="Historic temple tower and boulder hills surrounding the Sri Ambamata pilgrimage region"
            fill
            unoptimized
            loading="lazy"
            className="object-cover object-center"
          />

          {/* Soft cream/white horizontal center overlay framing scenic landscape cleanly across all screen widths */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#FFF9F0]/90 via-[#FFF9F0]/96 to-[#FFF9F0]/90 md:from-[#FFF9F0]/45 md:via-[#FFF9F0]/94 md:to-[#FFF9F0]/45"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 md:px-10 py-8 sm:py-10 text-center">
            <h2
              className={cn(
                "font-heritage-serif text-xl xs:text-2xl sm:text-3xl xl:text-[34px] font-bold text-[#8B1729] leading-snug",
                locale !== "en" && fontClass
              )}
            >
              {copy.closingHeading}
            </h2>

            <p
              className={cn(
                "mt-3 text-sm sm:text-base text-[#242424] leading-relaxed",
                fontClass
              )}
            >
              {copy.closingDescription}
            </p>

            <p
              className={cn(
                "mt-2.5 text-sm font-semibold text-[#6F1020]",
                fontClass
              )}
            >
              {copy.closingLine}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
