"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Info,
  CheckCircle2,
  Phone,
  MapPin,
  Bell,
  ArrowRight,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function TimingsInfoSection() {
  const { t, fontClass } = useContentTranslation();
  const info = t.timingsPage.info;
  const benediction = t.timingsPage.benediction;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#292929] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
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
              {info.eyebrow}
            </span>
          </div>

          <h2
            className={cn(
              "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl text-[#8B1538] tracking-tight leading-tight mb-3 text-center text-balance",
              fontClass
            )}
          >
            {info.heading}
          </h2>

          <p
            className={cn(
              "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
              fontClass
            )}
          >
            {info.subtitle}
          </p>
        </motion.div>

        {/* 2-Column Responsive Layout: Devotee Guidelines + Temple Administration Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16 sm:mb-20">
          
          {/* Left Column: 4 Essential Devotee Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-4"
          >
            {info.points.map((point, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/40 shadow-xs transition-all duration-300 hover:border-[#D49812] hover:bg-[#FFFCF3] hover:shadow-sm"
              >
                <div className="h-9 w-9 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-[#FFE6A0]" />
                </div>
                <p
                  className={cn(
                    "text-sm sm:text-base text-[#333] leading-relaxed font-medium pt-1",
                    fontClass
                  )}
                >
                  {point}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Temple Administration & Helpdesk Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#8B1538]">
                <div className="h-10 w-10 rounded-xl bg-[#8B1538]/10 border border-[#8B1538]/20 flex items-center justify-center shrink-0">
                  <Info className="h-5 w-5 text-[#8B1538]" />
                </div>
                <h3 className={cn("text-lg sm:text-xl font-sans font-bold text-[#8B1538]", fontClass)}>
                  {info.adminTitle}
                </h3>
              </div>

              <p className={cn("text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mb-6", fontClass)}>
                {info.adminDesc}
              </p>

              {/* Contact Info Items */}
              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8B947]/40">
                  <Phone className="h-4 w-4 text-[#8B1538] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#292929]">
                    {info.adminPhone}
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8B947]/40">
                  <MapPin className="h-4 w-4 text-[#8B1538] shrink-0 mt-0.5" />
                  <span className={cn("text-xs sm:text-sm text-[#4A4A4A]", fontClass)}>
                    {info.adminLocation}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct CTA to Contact Page */}
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-lg",
                "bg-[#8B1538] text-white text-sm font-bold font-sans tracking-wide",
                "shadow-md hover:bg-[#74132A] hover:scale-[1.02] active:scale-[0.98] transition-all",
                fontClass
              )}
            >
              <span>{info.contactBtn}</span>
              <ArrowRight className="h-4 w-4 text-[#FFE6A0]" />
            </Link>
          </motion.div>
        </div>

        {/* Sacred Benediction Banner (The User's Highlighted Blessing) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-[#FFF7E2] text-[#292929] p-8 sm:p-10 md:p-12 shadow-xs border border-[#E8B947]/60 text-center overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-28 h-28 opacity-20 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none" className="stroke-[#D99A00]">
              <circle cx="0" cy="0" r="80" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-28 h-28 opacity-20 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none" className="stroke-[#D99A00]">
              <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Sacred Glyph */}
            <span className="font-sans text-3xl font-black text-[#D99A00]/40 mb-2 block" aria-hidden="true">
              श्री
            </span>

            {/* User's Exact Benediction Line */}
            <blockquote
              className={cn(
                "text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-extrabold text-[#8B1538] leading-snug tracking-tight mb-4 text-balance drop-shadow-2xs",
                fontClass
              )}
            >
              “{benediction.quote}”
            </blockquote>

            {/* Sacred Chanting Mantra */}
            <p className={cn("text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-700 mb-8", fontClass)}>
              {benediction.mantra}
            </p>

            {/* Responsive Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              {/* Button 1: Book Seva Online */}
              <Link
                href="/sevas"
                className={cn(
                  "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg",
                  "bg-[#8B1538] text-white font-sans font-bold text-sm sm:text-base",
                  "shadow-md hover:bg-[#74132A] hover:scale-105 active:scale-95 transition-all duration-300",
                  fontClass
                )}
              >
                <Bell className="h-4 w-4 text-[#FFE6A0]" />
                <span>{benediction.bookSevaBtn}</span>
              </Link>

              {/* Button 2: Temple Contact & Donation */}
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg",
                  "bg-white text-[#74132A] font-sans font-bold text-sm sm:text-base",
                  "border border-[#E8B947]/70 shadow-xs hover:bg-[#FFF3D6] hover:border-[#D49812] hover:scale-105 active:scale-95 transition-all duration-300",
                  fontClass
                )}
              >
                <Phone className="h-4 w-4 text-[#8B1538]" />
                <span>{benediction.contactBtn}</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

