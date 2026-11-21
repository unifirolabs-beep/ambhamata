"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Bus, MapPin, Plane, TrainFront, type LucideIcon } from "lucide-react";
import {
  TRANSPORT_COPY,
  TRANSPORT_FACILITIES,
  getTransportCategoryTitle,
  getTransportItemText,
  type TransportCategoryId,
} from "@/data/places-to-visit";
import {
  PLACES_CONTAINER,
  PLACES_EASE,
  PlacesSectionHeader,
} from "@/components/places/places-primitives";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<TransportCategoryId, LucideIcon> = {
  bus: Bus,
  railway: TrainFront,
  airport: Plane,
};

/**
 * Displays nearby bus stands, railway stations, and airports to help devotees
 * plan travel to Sri Ambadevi Temple (Somalapura).
 */
export function TransportationFacilities() {
  const { locale, fontClass } = useContentTranslation();
  const copy = TRANSPORT_COPY[locale];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="transportation-facilities"
      className="w-full bg-white py-10 sm:py-12 md:py-16 scroll-mt-24"
    >
      <div className={PLACES_CONTAINER}>
        <PlacesSectionHeader
          heading={copy.heading}
          subtitle={copy.subtitle}
          locale={locale}
          fontClass={fontClass}
          className="mb-8 sm:mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 xl:gap-7 items-stretch">
          {TRANSPORT_FACILITIES.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id];
            const categoryTitle = getTransportCategoryTitle(category, locale);

            return (
              <motion.article
                key={category.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.48,
                  delay: idx * 0.08,
                  ease: PLACES_EASE,
                }}
                className={cn(
                  "rounded-2xl bg-white border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex flex-col",
                  idx === 2 && "md:col-span-2 lg:col-span-1"
                )}
              >
                {/* Soft Cream Header Strip */}
                <div className="bg-[#FFF9F0] border-b border-[#EDE0CA] px-5 py-4 flex items-center gap-3">
                  <Icon
                    className="h-6 w-6 text-[#8B1729] shrink-0"
                    strokeWidth={1.85}
                    aria-hidden="true"
                  />
                  <h3
                    className={cn(
                      "font-heritage-serif text-lg sm:text-xl font-bold text-[#8B1729] leading-snug",
                      locale !== "en" && fontClass
                    )}
                  >
                    {categoryTitle}
                  </h3>
                </div>

                {/* Facilities List */}
                <ul className="px-5 py-1.5 flex-1 divide-y divide-[#F0EBE1]">
                  {category.items.map((item) => {
                    const text = getTransportItemText(item, locale);
                    return (
                      <li
                        key={item.id}
                        className="py-3.5 px-2 -mx-2 rounded-lg hover:bg-[#FFFDF9] transition-colors flex items-start justify-between gap-3 sm:gap-4"
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <MapPin
                            className="h-4 w-4 text-[#8B1729] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            <p
                              className={cn(
                                "text-sm font-medium text-[#242424] leading-snug",
                                fontClass
                              )}
                            >
                              {text.name}
                            </p>
                            {text.sublabel && (
                              <p
                                className={cn(
                                  "mt-0.5 text-xs text-[#6B6B6B] leading-snug",
                                  fontClass
                                )}
                              >
                                {text.sublabel}
                              </p>
                            )}
                          </div>
                        </div>

                        <span className="text-sm font-semibold text-[#242424] whitespace-nowrap shrink-0 tabular-nums">
                          {item.distance}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
