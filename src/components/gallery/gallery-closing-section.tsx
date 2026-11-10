"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Clock, Bell } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function GalleryClosingSection() {
  const { t, isKannada } = useContentTranslation();
  const closing = t.galleryPage.closing;

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-[#FFFDF8] overflow-hidden" aria-label="Visit Temple">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Enclosing Card in #FFF7E2 Devotional Theme */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-[#FFF7E2] p-8 sm:p-12 md:p-14 text-center border border-[#E8B947]/50 shadow-xs relative"
        >
          {/* Sacred Sri (श्री) */}
          <div className="flex justify-center mb-3 select-none" aria-hidden="true">
            <span className="font-sans text-3xl sm:text-4xl font-black text-[#D99A00]/40 leading-none tracking-wide">
              श्री
            </span>
          </div>

          {/* Heading */}
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#8B1538] leading-tight mb-3",
              isKannada && "font-kannada"
            )}
          >
            {closing.heading}
          </h2>

          {/* Subtitle */}
          <p
            className={cn(
              "text-sm sm:text-base md:text-lg font-sans italic font-semibold text-[#D99A00] mb-4",
              isKannada && "font-kannada not-italic"
            )}
          >
            {closing.subtitle}
          </p>

          {/* Description */}
          <p
            className={cn(
              "text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto mb-8",
              isKannada && "font-kannada"
            )}
          >
            {closing.description}
          </p>

          {/* Action Navigation Buttons (Rectangular Consistent Style) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/timings"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg",
                "bg-[#8B1538] text-white font-sans font-bold text-sm sm:text-base shadow-md",
                "hover:bg-[#74132A] hover:scale-105 active:scale-95 transition-all duration-300",
                isKannada && "font-kannada"
              )}
            >
              <Clock className="h-4 w-4 text-[#FFE6A0]" />
              <span>{closing.timingsBtn}</span>
            </Link>

            <Link
              href="/sevas"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg",
                "bg-white text-[#74132A] font-sans font-bold text-sm sm:text-base",
                "border border-[#E8B947]/70 shadow-xs hover:bg-[#FFF3D6] hover:border-[#D49812] hover:scale-105 active:scale-95 transition-all duration-300",
                isKannada && "font-kannada"
              )}
            >
              <Bell className="h-4 w-4 text-[#8B1538]" />
              <span>{closing.sevasBtn}</span>
            </Link>
          </div>

          {/* Devotional Blessing Note */}
          <p
            className={cn(
              "text-xs sm:text-sm text-[#74132A] font-semibold italic max-w-xl mx-auto mb-3",
              isKannada && "font-kannada not-italic"
            )}
          >
            {closing.blessing}
          </p>

          {/* Sacred Mantra */}
          <div className="text-base sm:text-lg md:text-xl font-bold font-kannada text-[#8B1538] tracking-wider select-none">
            {closing.mantra}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

