"use client";

import React from "react";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { cn } from "@/lib/utils";

interface TopMantraBarProps {
  className?: string;
}

export function TopMantraBar({ className }: TopMantraBarProps) {
  // Sacred mantra block (repeated seamlessly for continuous right-to-left loop)
  const mantraBlock = (
    <div className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 text-xs sm:text-sm font-semibold tracking-wide text-brand-yellow select-none">
      <span className="flex items-center gap-2">
        <span className="text-white/80">ॐ</span>
        <span className="font-kannada">ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ನಮಃ</span>
      </span>
      <span className="text-white/50 text-xs" aria-hidden="true">✦</span>

      <span>Om Sri Bagalamukhi Ambadevi Namah</span>
      <span className="text-white/50 text-xs" aria-hidden="true">✦</span>

      <span className="flex items-center gap-2">
        <span className="text-white/80">ॐ</span>
        <span className="font-kannada">ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ನಮಃ</span>
      </span>
      <span className="text-white/50 text-xs" aria-hidden="true">✦</span>

      <span>Om Sri Bagalamukhi Ambadevi Namah</span>
      <span className="text-white/50 text-xs" aria-hidden="true">✦</span>

      <span className="font-kannada">ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು</span>
      <span className="text-white/50 text-xs" aria-hidden="true">✦</span>
    </div>
  );

  return (
    <div
      className={cn(
        "relative z-40 w-full overflow-hidden bg-brand-red-dark text-white border-b border-brand-yellow/30 h-9 sm:h-10 flex items-center shadow-inner",
        className
      )}
      role="region"
      aria-label="Sacred Temple Chant and Language Selection"
    >
      <div className="mx-auto flex h-full w-full max-w-[1800px] items-center justify-between px-3 sm:px-6 md:px-8 lg:px-12">
        {/* Continuously Scrolling Sacred Mantra: Right to Left */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center mr-3 sm:mr-4">
          <div className="animate-marquee-continuous py-1">
            {mantraBlock}
            {mantraBlock}
            {mantraBlock}
            {mantraBlock}
          </div>

          {/* Edge gradient fades for smooth visual entry/exit */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-brand-red-dark to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-brand-red-dark to-transparent z-10"
            aria-hidden="true"
          />
        </div>

        {/* Top-Right Language Switcher */}
        <div className="shrink-0 pl-3 border-l border-white/20 h-5 flex items-center z-20">
          <LanguageSwitcher variant="ribbon" />
        </div>
      </div>
    </div>
  );
}
