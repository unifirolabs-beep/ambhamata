"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Compass,
  ExternalLink,
  Landmark,
  MapPin,
  Mountain,
} from "lucide-react";
import { PLACES_COPY, STARTING_LOCATION } from "@/data/places-to-visit";
import {
  PLACES_CONTAINER,
  PLACES_EASE,
} from "@/components/places/places-primitives";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

const HIGHLIGHT_ICONS = [Compass, Landmark, Mountain] as const;

export function PlacesHeroAndIntro() {
  const { locale, fontClass } = useContentTranslation();
  const copy = PLACES_COPY[locale];
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="w-full bg-white pt-4 sm:pt-6 pb-3 sm:pb-4">
        <div className={PLACES_CONTAINER}>
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#EAEAEA] shadow-md min-h-[260px] xs:min-h-[280px] sm:min-h-[300px] md:min-h-[340px] lg:aspect-[16/5] lg:min-h-[330px] xl:min-h-[380px] 2xl:min-h-[420px] flex items-center">
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 1.06, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: PLACES_EASE }}
              className="absolute inset-0"
            >
              <Image
                src="/places/hero-hampi.jpg"
                alt="Hampi Vittala Temple Stone Chariot and Vijayanagara heritage landscape"
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />
            </motion.div>

            {/* Scrim placed behind text on the left so heritage chariot on the right remains bright */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#1A1014]/92 via-[#241218]/80 to-[#241218]/40 md:via-[#241218]/70 md:to-[#241218]/15"
              aria-hidden="true"
            />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: PLACES_EASE }}
              className="relative z-10 w-full max-w-2xl xl:max-w-3xl px-5 xs:px-6 sm:px-10 md:px-12 py-7 sm:py-10"
            >
              <p
                className={cn(
                  "mb-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#FFF4D6]",
                  fontClass
                )}
              >
                {copy.heroEyebrow}
              </p>

              <h1
                className={cn(
                  "font-heritage-serif text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-5xl xl:text-[54px] font-bold text-white tracking-tight leading-tight",
                  locale !== "en" && fontClass
                )}
              >
                {copy.heroTitle}
              </h1>

              <p
                className={cn(
                  "mt-3 text-sm sm:text-base xl:text-lg text-white/90 leading-relaxed max-w-xl",
                  fontClass
                )}
              >
                {copy.heroSubtitle}
              </p>

              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection("top-destinations")}
                  className={cn(
                    "group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B1729] hover:bg-[#6F1020] text-white border border-white/15 px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer",
                    fontClass
                  )}
                >
                  <span>{copy.exploreBtn}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("all-places")}
                  className={cn(
                    "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/95 hover:bg-white text-[#8B1729] px-5 py-2.5 text-sm font-semibold transition-all duration-200 shadow-xs active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer",
                    fontClass
                  )}
                >
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{copy.viewAllBtn}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12">
        <div className={PLACES_CONTAINER}>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, ease: PLACES_EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start"
          >
            <div className="lg:col-span-5">
              <h2
                className={cn(
                  "font-heritage-serif text-xl xs:text-2xl sm:text-3xl xl:text-[34px] font-bold text-[#8B1729] leading-snug",
                  locale !== "en" && fontClass
                )}
              >
                {copy.introHeading}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <p
                className={cn(
                  "text-sm sm:text-base text-[#242424] leading-relaxed",
                  fontClass
                )}
              >
                {copy.introDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                {copy.highlights.map((item, idx) => {
                  const Icon = HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length];
                  return (
                    <motion.div
                      key={item.title}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.45,
                        delay: idx * 0.08,
                        ease: PLACES_EASE,
                      }}
                      className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon
                          className="h-4 w-4 text-[#8B1729] shrink-0"
                          aria-hidden="true"
                        />
                        <h3
                          className={cn(
                            "text-sm font-bold text-[#242424]",
                            fontClass
                          )}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p
                        className={cn(
                          "text-xs text-[#6B6B6B] leading-relaxed",
                          fontClass
                        )}
                      >
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FIXED TEMPLE STARTING LOCATION STRIP */}
      <section className="w-full bg-white pb-8 sm:pb-10 md:pb-12">
        <div className={PLACES_CONTAINER}>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PLACES_EASE }}
            className="rounded-xl sm:rounded-2xl bg-[#FFF9F0] border border-[#EDE0CA] px-5 sm:px-8 py-5 sm:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-5"
          >
            <div className="space-y-1 min-w-0">
              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]",
                  fontClass
                )}
              >
                {copy.startEyebrow}
              </p>
              <h2
                className={cn(
                  "font-heritage-serif text-lg xs:text-xl sm:text-2xl font-bold text-[#8B1729]",
                  locale !== "en" && fontClass
                )}
              >
                {copy.startTemple}
              </h2>
              <p className={cn("text-sm text-[#242424]", fontClass)}>
                {copy.startAddress}
              </p>
            </div>

            <a
              href={STARTING_LOCATION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B1729] hover:bg-[#6F1020] text-white px-5 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1729]",
                fontClass
              )}
            >
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{copy.startBtn}</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-85 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

