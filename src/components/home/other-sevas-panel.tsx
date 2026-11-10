"use client";

import React from "react";
import Link from "next/link";
import { OTHER_SEVAS } from "@/constants/sevas";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

interface OtherSevasPanelProps {
  className?: string;
}

export function OtherSevasPanel({ className }: OtherSevasPanelProps) {
  const { t, locale, fontClass } = useContentTranslation();

  const tulaabharaLabel =
    locale === "kn"
      ? (OTHER_SEVAS[0].kannadaName || OTHER_SEVAS[0].name)
      : locale === "hi"
      ? (OTHER_SEVAS[0].hindiName || OTHER_SEVAS[0].name)
      : locale === "te"
      ? (OTHER_SEVAS[0].teluguName || OTHER_SEVAS[0].name)
      : OTHER_SEVAS[0].name;

  const kanikeLabel =
    locale === "kn"
      ? (OTHER_SEVAS[1].kannadaName || OTHER_SEVAS[1].name)
      : locale === "hi"
      ? (OTHER_SEVAS[1].hindiName || OTHER_SEVAS[1].name)
      : locale === "te"
      ? (OTHER_SEVAS[1].teluguName || OTHER_SEVAS[1].name)
      : OTHER_SEVAS[1].name;

  return (
    <div className={cn("w-full flex justify-center mt-8 sm:mt-12", className)}>
      <div
        className={cn(
          "relative w-full max-w-4xl px-8 sm:px-12 py-3.5 sm:py-4",
          "rounded-xl",
          "bg-[#FFF7E2]",
          "border border-[#E8B947]/60",
          "shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
          "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 md:gap-10",
          "text-center select-none"
        )}
      >
        {/* Left Sacred Sri (Desktop) */}
        <div className="hidden sm:block absolute left-5 text-[#8B1538]/50 font-sans font-black text-sm pointer-events-none select-none" aria-hidden="true">
          श्री
        </div>

        {/* Panel Heading */}
        <span
          className={cn(
            "text-[#74132A] text-base sm:text-lg drop-shadow-sm font-extrabold",
            locale === "en" ? "font-sans tracking-wide uppercase" : cn(fontClass, "font-bold")
          )}
        >
          {t.sevasHome.otherSevasTitle}
        </span>

        {/* Divider */}
        <span className="hidden sm:inline-block text-[#8B1538]/50 text-lg font-light" aria-hidden="true">
          |
        </span>

        {/* Tulaabhara Seva */}
        <Link
          href="/sevas#tulaabhara"
          className="group transition-transform duration-200 hover:scale-105"
        >
          <span
            className={cn(
              "font-bold text-[#74132A] text-sm sm:text-base group-hover:underline decoration-[#74132A]",
              fontClass
            )}
          >
            {tulaabharaLabel}
          </span>
        </Link>

        {/* Divider */}
        <span className="hidden sm:inline-block text-[#8B1538]/50 text-lg font-light" aria-hidden="true">
          |
        </span>

        {/* Kanike (Offering) */}
        <Link
          href="/contact#donation"
          className="group transition-transform duration-200 hover:scale-105"
        >
          <span
            className={cn(
              "font-bold text-[#74132A] text-sm sm:text-base group-hover:underline decoration-[#74132A]",
              fontClass
            )}
          >
            {kanikeLabel}
          </span>
        </Link>

        {/* Right Sacred Sri (Desktop) */}
        <div className="hidden sm:block absolute right-5 text-[#8B1538]/50 font-sans font-black text-sm pointer-events-none select-none" aria-hidden="true">
          श्री
        </div>
      </div>
    </div>
  );
}
