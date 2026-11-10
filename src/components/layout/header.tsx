"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TopMantraBar } from "@/components/layout/top-mantra-bar";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { siteConfig } from "@/config/site";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { t, fontClass } = useContentTranslation();

  return (
    <header className={cn("sticky top-0 z-30 w-full transition-all", className)}>
      {/* 1. Continuous Sacred Mantra Ticker Ribbon in Kumkum Red */}
      <TopMantraBar />

      {/* 2. Main Medium Divine Yellow Navbar */}
      <div className="w-full bg-brand-yellow/95 backdrop-blur-md border-b-[3px] border-brand-red/30 shadow-[0_4px_20px_rgba(166,25,50,0.12)]">
        <div className="mx-auto flex min-h-[72px] sm:min-h-[80px] lg:min-h-[86px] max-w-[1800px] items-center justify-between px-3 sm:px-5 lg:px-6 xl:px-10 py-2 sm:py-2.5 lg:py-2.5 gap-2 lg:gap-3 xl:gap-4">
          {/* Brand Logo & Temple Name */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded-xl p-1 transition-transform min-w-0"
            aria-label={`${siteConfig.name} - Home`}
          >
            {/* Prominently Sized Temple Official Circular Logo */}
            <div className="relative h-11 w-11 sm:h-14 sm:w-14 lg:h-14 lg:w-14 xl:h-16 xl:w-16 shrink-0 rounded-full bg-white p-0.5 shadow-sm ring-2 ring-brand-red/40 transition-all duration-300 group-hover:scale-105 group-hover:ring-brand-red group-hover:shadow-temple-gold">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} Emblem`}
                width={72}
                height={72}
                priority
                unoptimized
                className="h-full w-full rounded-full object-contain"
              />
            </div>

            {/* Prominent Temple Title & Subtitle */}
            <div className="flex flex-col min-w-0">
              <span
                className={cn(
                  "text-xs sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-extrabold tracking-tight text-brand-red-deep group-hover:text-brand-red transition-colors leading-tight truncate sm:whitespace-nowrap",
                  fontClass
                )}
              >
                {t.header.templeName}
              </span>
              <span
                className={cn(
                  "text-[10px] sm:text-xs lg:text-[11px] xl:text-xs font-bold text-brand-red-dark leading-snug mt-0.5 truncate sm:whitespace-nowrap",
                  fontClass
                )}
              >
                {t.header.templeSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Controls: CTA and Mobile Nav Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Book Seva CTA */}
            <Link
              href="/sevas"
              className={cn(
                "hidden sm:inline-flex items-center justify-center rounded-lg bg-brand-red px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs lg:text-sm font-bold text-white shadow-temple-kumkum hover:bg-brand-red-dark hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-brand-red-deep whitespace-nowrap shrink-0",
                fontClass
              )}
            >
              {t.header.bookSeva}
            </Link>

            {/* Mobile Nav Toggle */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
