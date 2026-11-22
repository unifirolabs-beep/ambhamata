"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Award, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function StoneMantapInaugurationSection() {
  const { t, fontClass, isKannada } = useContentTranslation();
  const info = t.mantapInauguration;

  return (
    <section
      id="stone-mantap-inauguration"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF8] to-[#FFF9F0] text-[#292929] overflow-hidden"
      aria-label="New Stone Mantap Inauguration Ceremony"
    >
      {/* Background Decorative Gold Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8B947]/40 to-transparent" />
      <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-[#D49812]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ========================================================
            1. SECTION HEADER (SACRED SRI & DEVOTIONAL EYEBROW)
           ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Header with Centered Medium Sri Watermark */}
          <div className="relative inline-flex items-center justify-center mb-3 select-none">
            <span
              className="absolute inset-0 flex items-center justify-center font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#D99A00]/30 select-none pointer-events-none -translate-y-0.5 tracking-normal"
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

          {/* Main Title: New Stone Mantap Inauguration Ceremony */}
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-sans font-extrabold text-[#8B1538] leading-[1.2] tracking-tight mb-3 text-balance",
              fontClass
            )}
          >
            {info.heading}
          </h2>

          {/* Subtitle: Inauguration of the New Stone Mantap at Sri Ambadevi Temple and Consecration of the Idol */}
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl font-semibold text-[#74132A]/90 max-w-3xl leading-relaxed text-balance",
              fontClass
            )}
          >
            {info.subtitle}
          </p>

          {/* Gold Decorative Center Divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D49812]" />
            <div className="w-2 h-2 rounded-full bg-[#D49812]" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D49812]" />
          </div>
        </div>

        {/* ========================================================
            2. DIGNITARIES OF THE INAUGURATION CEREMONY (2 CARDS)
           ======================================================== */}
        <div className="mb-14 sm:mb-16 max-w-5xl mx-auto">
          {/* Subheading Badge */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7E2] border border-[#E8B947]/70 text-[#8B1538] text-xs sm:text-sm font-bold tracking-wider shadow-xs mb-2">
              <Award className="w-4 h-4 text-[#D49812]" />
              <span className={fontClass}>{info.dignitariesTitle}</span>
            </div>
            <p className={cn("text-xs sm:text-sm text-gray-600 max-w-lg", fontClass)}>
              {info.dignitariesSubtitle}
            </p>
          </div>

          {/* 2 Dignitary Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-3xl mx-auto items-stretch">
            {info.dignitaries.map((dignitary, idx) => (
              <motion.div
                key={dignitary.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative flex flex-col items-center text-center",
                  "p-6 sm:p-7 rounded-3xl",
                  "bg-gradient-to-b from-[#FFFDF8] via-[#FFF9ED] to-[#FFF5E0]",
                  "border-2 border-[#E8B947]/60",
                  "shadow-[0_8px_28px_rgba(139,21,56,0.08)]",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(139,21,56,0.14)] hover:border-[#D49812]"
                )}
              >
                {/* Dignitary Portrait Image Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden mb-5 border-3 border-[#E8B947] shadow-md bg-white shrink-0 group-hover:scale-102 transition-transform duration-500">
                  <Image
                    src={dignitary.image}
                    alt={`${dignitary.name} - ${dignitary.role} at Sri Ambadevi Devasthana Mantap Inauguration`}
                    title={`${dignitary.name} - ${dignitary.role}`}
                    fill
                    unoptimized
                    sizes="220px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  {/* Subtle inner gold frame highlight */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50 pointer-events-none" />
                </div>

                {/* Dignitary Name */}
                <h3
                  className={cn(
                    "text-xl sm:text-2xl font-sans font-bold text-[#74132A] mb-1.5 tracking-tight group-hover:text-[#8B1538] transition-colors",
                    fontClass
                  )}
                >
                  {dignitary.name}
                </h3>

                {/* Designation / Role */}
                <p
                  className={cn(
                    "text-sm sm:text-[15px] font-semibold text-[#8B1538] leading-snug mb-3 max-w-xs",
                    fontClass
                  )}
                >
                  {dignitary.role}
                </p>

                {/* Official Distinction Badge */}
                <div className="mt-auto pt-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full",
                      "bg-white border border-[#E8B947]/80 text-[#74132A] text-xs font-bold shadow-2xs",
                      fontClass
                    )}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D49812]" />
                    <span>{dignitary.badge}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            3. "UNDER THEIR LEADERSHIP" RECOGNITION PANEL
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative rounded-3xl overflow-hidden max-w-4xl mx-auto",
            "p-6 sm:p-8 md:p-10",
            "bg-gradient-to-br from-[#FFF9EC] via-[#FFF3D6] to-[#FFEEC2]",
            "border-2 border-[#E5B53D]/80",
            "shadow-[0_12px_36px_rgba(212,152,18,0.15)]"
          )}
        >


          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Left: New Temple Mantapa Photo Preview */}
            <div className="relative w-full md:w-56 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border-2 border-[#E8B947] shadow-md bg-white">
              <Image
                src="/new temple.jpg"
                alt="Newly Sculpted Granite Shila Mantapa at Sri Ambadevi Temple Somalapura"
                title="Sri Ambadevi Temple Granite Shila Mantapa"
                fill
                unoptimized
                sizes="250px"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 py-1 px-2 bg-gradient-to-t from-black/80 to-transparent text-white text-[10px] text-center font-bold">
                {isKannada ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ನೂತನ ಶಿಲಾ ಮಂಟಪ" : "Sri Ambadevi Stone Mantap"}
              </div>
            </div>

            {/* Right: Leadership Tribute Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Heading: Under Their Leadership */}
              <div className="inline-flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#D49812]" />
                <h3
                  className={cn(
                    "text-xl sm:text-2xl font-sans font-extrabold text-[#8B1538] tracking-tight",
                    fontClass
                  )}
                >
                  {info.leadershipTitle}
                </h3>
              </div>

              {/* Exact paragraph as requested */}
              <p
                className={cn(
                  "text-sm sm:text-base text-gray-800 leading-relaxed font-medium mb-4",
                  fontClass
                )}
              >
                {info.leadershipText}
              </p>

              {/* 3 Devotional Milestone Chips */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#E8B947]/70 text-[#8B1538] text-xs font-bold shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D49812]" />
                  <span className={fontClass}>{info.badgeText1}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#E8B947]/70 text-[#8B1538] text-xs font-bold shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D49812]" />
                  <span className={fontClass}>{info.badgeText2}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#E8B947]/70 text-[#8B1538] text-xs font-bold shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D49812]" />
                  <span className={fontClass}>{info.badgeText3}</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
