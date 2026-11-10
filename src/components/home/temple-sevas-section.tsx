"use client";

import React from "react";
import Link from "next/link";
import { FEATURED_SEVAS } from "@/constants/sevas";
import { FeaturedSevaCardItem } from "@/components/home/featured-seva-card";
import { OtherSevasPanel } from "@/components/home/other-sevas-panel";
import { useContentTranslation } from "@/messages/content-translations";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TempleSevasSection() {
  const { t, locale, fontClass } = useContentTranslation();

  return (
    <section
      id="temple-sevas"
      className={cn(
        "relative w-full overflow-hidden text-white",
        "bg-gradient-to-b from-[#620A20] via-[#790D27] to-[#5A0718]",
        "py-16 sm:py-20 md:py-24"
      )}
      aria-label="Temple Sevas and Poojas"
    >
      {/* 1. Section Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-8 sm:mb-12">
          
          {/* Temple Subtitle Eyebrow with Sacred Sri (श्री) in Background (Medium Size) */}
          <div className="relative inline-flex items-center justify-center mb-3 select-none">
            <span
              className="absolute inset-0 flex items-center justify-center font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#FFE6A0]/40 select-none pointer-events-none -translate-y-0.5 tracking-normal drop-shadow-xs"
              aria-hidden="true"
            >
              श्री
            </span>
            <span
              className={cn(
                "relative z-10 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#FFE6A0]",
                fontClass
              )}
            >
              {t.sevasHome.eyebrow}
            </span>
          </div>

          {/* Centered — SEVAS — */}
          <div className="flex items-center justify-center w-full mb-3">
            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-[#FFE6A0] tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]",
                fontClass
              )}
            >
              {t.sevasHome.title}
            </h2>
          </div>

          {/* Subtitle */}
          <p
            className={cn(
              "text-xs sm:text-sm md:text-base text-white/90 font-medium leading-relaxed italic text-balance max-w-xl",
              fontClass
            )}
          >
            {t.sevasHome.subtitle}
          </p>
        </div>

        {/* 3. Cards in 2nd Image Format */}
        <div className="w-full max-w-[1360px]">
          <div className="flex lg:grid lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-5 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory scroll-smooth px-2 py-4">
            {FEATURED_SEVAS.map((seva) => (
              <div
                key={seva.id}
                className="snap-start shrink-0 w-[260px] sm:w-[280px] lg:w-auto flex items-stretch"
              >
                <FeaturedSevaCardItem seva={seva} />
              </div>
            ))}
          </div>
          {/* Mobile Swipe Hint */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 text-xs text-[#FFE6A0]/70 mt-1 select-none">
            <span>
              {locale === "kn"
                ? "← ಎಡಕ್ಕೆ ಅಥವಾ ಬಲಕ್ಕೆ ಸ್ವೈಪ್ ಮಾಡಿ →"
                : locale === "hi"
                ? "← सभी सेवाओं को देखने के लिए स्वाइप करें →"
                : locale === "te"
                ? "← అన్ని సేవలను చూడటానికి స్వైప్ చేయండి →"
                : "← Swipe left or right to explore all sevas →"}
            </span>
          </div>
        </div>

        {/* 4. "View All Sevas" Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/sevas"
            className={cn(
              "group inline-flex items-center justify-center gap-2.5",
              "px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg",
              "bg-[#8B1538] text-white font-sans font-bold text-sm sm:text-base tracking-wide",
              "border border-[#E5B53D]/70 shadow-[0_6px_20px_rgba(0,0,0,0.35)]",
              "transition-all duration-300 ease-out",
              "hover:bg-[#F4C542] hover:text-[#74132A] hover:border-[#D49812] hover:shadow-[0_8px_24px_rgba(244,197,66,0.45)] hover:scale-105",
              fontClass
            )}
          >
            <span>{t.sevasHome.viewAllBtn}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5. Other Sevas Banner Panel */}
        <OtherSevasPanel />

      </div>
    </section>
  );
}
