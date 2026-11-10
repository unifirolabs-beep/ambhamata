"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

// Authentic temple images from public folder
const FESTIVAL_IMAGES = [
  "/sevas/special-poojas-hq.jpg", // 1. Sri Ambadevi Belli Rathotsava
  "/sevas/abhishekam-hq.jpg",     // 2. Sri Ambadevi Kumbhotsava
  "/sevas/homam-hq.jpg",          // 3. Special Religious Celebrations
];

export function EventsAndFestivalsSection() {
  const { t, fontClass } = useContentTranslation();
  const festivals = t.festivalsHome;

  return (
    <section
      id="events-and-festivals"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FFFFFF] text-[#292929] overflow-hidden"
      aria-label="Temple Events and Festivals"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ========================================================
            1. SECTION HEADER (SACRED SRI & DEVOTIONAL EYEBROW)
           ======================================================== */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-12 max-w-3xl">
          {/* Section Eyebrow Name with Sacred Sri (श्री) in Background (Medium Size) */}
          <div className="relative inline-flex items-center justify-center mb-3 select-none">
            <span
              className="absolute inset-0 flex items-center justify-center font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#D99A00]/35 select-none pointer-events-none -translate-y-0.5 tracking-normal"
              aria-hidden="true"
            >
              श्री
            </span>
            <span
              className={cn(
                "relative z-10 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#D99A00]",
                fontClass
              )}
            >
              {festivals.eyebrow}
            </span>
          </div>

          {/* Main Section Heading */}
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-sans font-bold text-[#8B1538] leading-[1.18] tracking-tight mb-3 text-balance",
              fontClass
            )}
          >
            {festivals.heading}
          </h2>

          {/* Lead Context Paragraph */}
          <p
            className={cn(
              "text-sm sm:text-base md:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl",
              fontClass
            )}
          >
            {festivals.lead}
          </p>
        </div>

        {/* ========================================================
            2. MAIN 2-COLUMN FESTIVAL LAYOUT (IMAGE 2 REFERENCE WAY)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* ---------------------------------------------------- */}
          {/* LEFT COLUMN: LARGE FEATURED FESTIVAL CARD            */}
          {/* ---------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* The Big Temple Mandapa Featured Card */}
            <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[460px] lg:h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden shadow-xs border border-[#E8B947]/40 transition-all duration-500 hover:shadow-md hover:border-[#D49812]">
              {/* Full Temple Image */}
              <Image
                src="/festival-hero-desktop.png"
                alt={festivals.featuredTitle}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Gradient Vignette for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-45% to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
                {/* Yellow Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4C542] text-[#74132A] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-2.5 w-fit shadow-xs">
                  <span>{festivals.featuredTag}</span>
                </div>

                {/* Big Festival Title */}
                <h3
                  className={cn(
                    "text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white leading-tight drop-shadow-md mb-2",
                    fontClass
                  )}
                >
                  {festivals.featuredTitle}
                </h3>

                {/* Location / Context Note */}
                <p className={cn("text-xs sm:text-sm text-white/80 font-medium", fontClass)}>
                  {festivals.featuredLocation}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ---------------------------------------------------- */}
          {/* RIGHT COLUMN: 3 STACKED FLOATING CARDS & CTA         */}
          {/* ---------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-4"
          >
            {/* 3 Stacked Festival Cards (Matching Image 2 Reference) */}
            <div className="space-y-3.5 sm:space-y-4">
              {festivals.items.map((item, idx) => {
                const imgSrc = FESTIVAL_IMAGES[idx % FESTIVAL_IMAGES.length];

                return (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 sm:gap-4.5 p-3 sm:p-4.5 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/30 shadow-xs transition-all duration-300 hover:shadow-sm hover:border-[#D49812] hover:bg-[#FFFDF8]"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-20 w-20 sm:h-24 sm:w-28 rounded-xl overflow-hidden shrink-0 border border-[#E8B947]/30 shadow-xs">
                      <Image
                        src={imgSrc}
                        alt={item.title}
                        fill
                        unoptimized
                        sizes="120px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                      />
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      {/* Uppercase Tag */}
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#D49812] mb-1 block">
                        {item.tag}
                      </span>

                      {/* Title */}
                      <h4
                        className={cn(
                          "text-base sm:text-lg font-sans font-bold text-[#8B1538] leading-tight mb-1.5 group-hover:text-[#74132A] transition-colors truncate",
                          fontClass
                        )}
                      >
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p
                        className={cn(
                          "text-xs sm:text-[13px] text-[#4A4A4A] leading-relaxed line-clamp-2",
                          fontClass
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Outline Button: Explore All Events & Festivals */}
            <div className="pt-2">
              <Link
                href="/festivals"
                className={cn(
                  "group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg",
                  "border border-[#8B1538] text-[#8B1538] font-sans font-bold text-sm sm:text-base tracking-wide",
                  "shadow-xs hover:bg-[#F4C542] hover:text-[#74132A] hover:border-[#D49812] hover:shadow-[0_4px_18px_rgba(244,197,66,0.35)] transition-all duration-300 active:scale-[0.98]",
                  fontClass
                )}
              >
                <span>{festivals.exploreBtn}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
