"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Bell } from "lucide-react";
import { motion } from "motion/react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { t, fontClass } = useContentTranslation();

  const quickServices = [
    {
      title: t.hero.quickServices.darshanam.title,
      subtitle: t.hero.quickServices.darshanam.subtitle,
      href: "/timings",
      imageSrc: "/dharshanam icon.png",
    },
    {
      title: t.hero.quickServices.sevas.title,
      subtitle: t.hero.quickServices.sevas.subtitle,
      href: "/sevas",
      imageSrc: "/seva icon.png",
    },
    {
      title: t.hero.quickServices.poojas.title,
      subtitle: t.hero.quickServices.poojas.subtitle,
      href: "/sevas#poojas",
      imageSrc: "/vedic icon.png",
    },
    {
      title: t.hero.quickServices.hundi.title,
      subtitle: t.hero.quickServices.hundi.subtitle,
      href: "/contact#donation",
      imageSrc: "",
      isHundi: true,
    },
    {
      title: t.hero.quickServices.homam.title,
      subtitle: t.hero.quickServices.homam.subtitle,
      href: "/sevas",
      imageSrc: "/homam icon .png",
    },
    {
      title: t.hero.quickServices.info.title,
      subtitle: t.hero.quickServices.info.subtitle,
      href: "/about",
      imageSrc: "/logo.png",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#180306] text-white">
      {/* 1. Hero Background Banner Image - Responsive Desktop & Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Hero Banner (1440x591) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/home-hero-desktop.png"
            alt="Sri Bagalamukhi Ambadevi Devasthana Sanctum & Temple Architecture"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-right lg:object-[right_center] brightness-[0.98]"
          />
        </div>

        {/* Mobile Hero Banner (402x874) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/home-hero-mobile.png"
            alt="Sri Bagalamukhi Ambadevi Devasthana Mobile Banner"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-bottom brightness-[0.98]"
          />
        </div>

        {/* Left Side Rich Temple Shadow Overlay (Desktop) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#150205] via-[#1D0408]/90 via-50% to-transparent" />

        {/* Top-to-Bottom Shadow Overlay (Mobile) */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#180306]/90 via-[#1F0409]/70 via-55% to-[#180306]/90" />

        {/* Ambient bottom vignette for smooth docking with the quick services bar */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#150205] via-[#150205]/60 to-transparent" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-14 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 flex flex-col justify-between min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-[780px]">
        {/* Left Side Text Content */}
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Sacred Mantra Header */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-[11px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4"
          >
            <span className="text-sm sm:text-base leading-none">ॐ</span>
            <span>श्री अम्बादेव्यै नमः</span>
            <span className="text-white/40">•</span>
            <span className={fontClass}>{t.hero.mantraText}</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "text-xs sm:text-base md:text-lg font-medium text-brand-yellow-light/90 italic tracking-wide mb-1.5 sm:mb-2",
              fontClass
            )}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Primary Main Heading (H1) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={cn(
              "text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15] drop-shadow-lg mb-3 sm:mb-4",
              fontClass
            )}
          >
            {t.hero.title}
          </motion.h1>

          {/* Location Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="my-2 sm:my-3 inline-flex items-center"
          >
            <span
              className={cn(
                "text-xs sm:text-sm md:text-base font-bold tracking-wider sm:tracking-widest uppercase text-brand-yellow",
                fontClass
              )}
            >
              {t.hero.location}
            </span>
          </motion.div>

          {/* Devotional Callout */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={cn(
              "text-base sm:text-xl md:text-2xl font-bold text-brand-yellow-light mb-5 sm:mb-8",
              fontClass
            )}
          >
            {t.hero.callout}
          </motion.h2>

          {/* CTA Action Buttons: Timings & Online Sevas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 w-full sm:w-auto"
          >
            {/* 1. Timings Button (Kumkum Red Pill) */}
            <Link
              href="/timings"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg px-6 sm:px-7 py-3 sm:py-3.5",
                "bg-brand-red text-white text-sm sm:text-base font-bold tracking-wide",
                "border border-brand-red-light/30 shadow-temple-kumkum",
                "hover:bg-brand-red-dark hover:scale-[1.03] active:scale-[0.98] transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                fontClass
              )}
            >
              <Clock className="h-5 w-5 text-brand-yellow shrink-0" />
              <span>{t.hero.timingsBtn}</span>
            </Link>

            {/* 2. Online Sevas Button (Translucent Sacred Gold Border) */}
            <Link
              href="/sevas"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg px-6 sm:px-7 py-3 sm:py-3.5",
                "bg-black/35 backdrop-blur-md text-brand-yellow text-sm sm:text-base font-bold tracking-wide",
                "border border-brand-yellow/70 shadow-lg",
                "hover:bg-brand-yellow hover:text-brand-red-deep hover:scale-[1.03] active:scale-[0.98] transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                fontClass
              )}
            >
              <Bell className="h-5 w-5 shrink-0" />
              <span>{t.hero.sevasBtn}</span>
            </Link>
          </motion.div>
        </div>

        {/* 3. Docked Quick Temple Services Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 sm:mt-12 md:mt-16 w-full"
        >
          <div className="rounded-2xl border border-brand-yellow/35 bg-[#4D0711]/90 backdrop-blur-md shadow-2xl p-2.5 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-0 lg:divide-x lg:divide-white/15">
              {quickServices.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl lg:rounded-none lg:px-4 transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  {/* Real Temple Authentic Icon from Public or Sacred Hundi Kalasha */}
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-brand-yellow/20 border border-brand-yellow/50 p-1.5 flex items-center justify-center shrink-0 shadow-md transition-all group-hover:bg-brand-yellow group-hover:scale-110">
                    {item.isHundi ? (
                      <svg viewBox="0 0 36 36" fill="none" className="h-7 w-7 text-brand-yellow group-hover:text-brand-red-deep transition-colors" xmlns="http://www.w3.org/2000/svg" aria-label="Sacred Temple Hundi and Kanike Offering">
                        <ellipse cx="18" cy="8" rx="4" ry="4" fill="currentColor" opacity="0.9" />
                        <path d="M14 9 L12 13 L24 13 L22 9 Z" fill="currentColor" />
                        <path d="M10 14 C8 18 7 23 9 27 C10 29 14 31 18 31 C22 31 26 29 27 27 C29 23 28 18 26 14 Z" fill="currentColor" opacity="0.85" />
                        <circle cx="18" cy="22" r="2.5" fill="#FFE6A0" />
                        <rect x="13" y="30.5" width="10" height="2" rx="1" fill="currentColor" />
                      </svg>
                    ) : (
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={36}
                        height={36}
                        unoptimized
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>

                  {/* Service Label and Subtitle */}
                  <div className="flex flex-col min-w-0">
                    <span
                      className={cn(
                        "text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-yellow group-hover:text-white transition-colors truncate",
                        fontClass
                      )}
                    >
                      {item.title}
                    </span>
                    <span
                      className={cn(
                        "text-[11px] sm:text-xs text-white/75 group-hover:text-white/95 transition-colors truncate",
                        fontClass
                      )}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
