"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Award, Landmark, Sparkles, UserCheck } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function ShilaMantapaSection() {
  const { t, isKannada } = useContentTranslation();
  const event = t.shilaMantapaInauguration;

  return (
    <section
      id="shila-mantapa-lokarpana"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9ED] to-[#FFF7E2] text-[#292929] overflow-hidden"
      aria-label="Inauguration of New Shila Mantapa"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ========================================================
            SECTION HEADER WITH CENTERED MEDIUM SRI WATERMARK
           ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow Header with Centered Medium Sri Watermark */}
          <div className="relative inline-flex items-center justify-center mb-4 select-none">
            <span
              className="absolute inset-0 flex items-center justify-center font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#D99A00]/30 select-none pointer-events-none -translate-y-0.5 tracking-normal"
              aria-hidden="true"
            >
              श्री
            </span>
            <span
              className={cn(
                "relative z-10 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#D99A00]",
                isKannada && "font-kannada tracking-wide text-sm sm:text-base font-extrabold"
              )}
            >
              {event.eyebrow}
            </span>
          </div>

          {/* Main Title */}
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-sans font-black text-[#8B1538] leading-[1.2] tracking-tight mb-3",
              isKannada && "font-kannada leading-tight"
            )}
          >
            {event.title}
          </h2>

          {/* Subtitle */}
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl font-medium text-[#74132A]/85 max-w-2xl",
              isKannada && "font-kannada"
            )}
          >
            {event.subtitle}
          </p>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-white border border-[#E8B947]/70 text-[#8B1538] text-xs sm:text-[13px] font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D49812]" />
              <span className={isKannada ? "font-kannada" : "font-sans"}>
                {event.venueBadge}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-[#8B1538] text-[#FFF7E2] text-xs sm:text-[13px] font-semibold shadow-xs">
              <Landmark className="w-3.5 h-3.5 text-[#FFE6A0]" />
              <span className={isKannada ? "font-kannada" : "font-sans"}>
                {event.eventDate}
              </span>
            </span>
          </div>
        </div>

        {/* ========================================================
            PART 1: CABINET MINISTERS & CHIEF GUESTS (3 CARDS)
           ======================================================== */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-[#E8B947]/60 text-[#8B1538] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs">
              <Award className="w-4 h-4 text-[#D49812]" />
              <span className={isKannada ? "font-kannada tracking-normal" : "font-sans"}>
                {event.sections.ministers}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {event.ministers.map((minister, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="relative flex flex-col bg-[#FFF7E2] rounded-xl border border-[#E8B947]/50 shadow-sm hover:shadow-md hover:border-[#E8B947]/90 transition-all duration-300 p-6 sm:p-7 text-center group"
              >
                {/* Order Badge at Top Left */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-[#8B1538] text-[#FFE6A0] font-sans font-black text-sm flex items-center justify-center shadow-xs">
                  {minister.orderNum}
                </div>

                {/* Minister Tag at Top Right */}
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-white border border-[#E8B947]/70 text-[#74132A] text-[11px] font-bold">
                  <span className={isKannada ? "font-kannada" : "font-sans"}>
                    {minister.badge}
                  </span>
                </div>

                {/* Portrait Photo with Golden Frame */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mt-4 mb-5 rounded-xl overflow-hidden border-2 border-[#E8B947] shadow-sm bg-white shrink-0">
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 144px, 160px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3
                  className={cn(
                    "text-xl sm:text-[22px] font-sans font-black text-[#8B1538] mb-2 leading-snug",
                    isKannada && "font-kannada font-bold text-[21px]"
                  )}
                >
                  {minister.name}
                </h3>

                {/* Designation */}
                <p
                  className={cn(
                    "text-sm sm:text-[15px] font-bold text-[#292929] leading-relaxed mb-1.5",
                    isKannada && "font-kannada text-base font-semibold"
                  )}
                >
                  {minister.designation}
                </p>

                {/* Department / SubDesignation */}
                <p
                  className={cn(
                    "text-xs sm:text-[13px] font-medium text-[#74132A] mt-auto pt-2 border-t border-[#E8B947]/30",
                    isKannada && "font-kannada text-sm"
                  )}
                >
                  {minister.subDesignation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: PRESIDENCY (ಅಧ್ಯಕ್ಷತೆ - EVENT PRESIDENCY)
           ======================================================== */}
        <div className="mb-14 sm:mb-18">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="relative bg-gradient-to-br from-[#FFF7E2] via-[#FFF3D6] to-[#FFEEC4] rounded-xl border-2 border-[#E8B947] shadow-md p-6 sm:p-8 text-center group"
            >
              {/* Presidency Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#8B1538] text-[#FFE6A0] text-xs sm:text-sm font-bold shadow-xs mb-5">
                <UserCheck className="w-4 h-4 text-[#FFE6A0]" />
                <span className={isKannada ? "font-kannada text-sm" : "font-sans uppercase tracking-wider"}>
                  {event.president.roleTitle}
                </span>
              </div>

              {/* President Portrait Photo */}
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-5 rounded-xl overflow-hidden border-3 border-[#8B1538] shadow-md bg-white">
                <Image
                  src={event.president.image}
                  alt={event.president.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 160px, 176px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* President Name */}
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-sans font-black text-[#8B1538] mb-2 leading-tight",
                  isKannada && "font-kannada font-bold text-2xl sm:text-[26px]"
                )}
              >
                {event.president.name}
              </h3>

              {/* Designation */}
              <p
                className={cn(
                  "text-base sm:text-lg font-bold text-[#292929] leading-snug mb-1",
                  isKannada && "font-kannada font-semibold"
                )}
              >
                {event.president.designation}
              </p>

              {/* Constituency */}
              <p
                className={cn(
                  "text-sm sm:text-base font-semibold text-[#8B1538]",
                  isKannada && "font-kannada"
                )}
              >
                {event.president.constituency}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            PART 3: DISTINGUISHED GUESTS (ಗೌರವಾನ್ವಿತ ಅತಿಥಿಗಳು)
           ======================================================== */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-[#E8B947]/60 text-[#8B1538] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs">
              <Landmark className="w-4 h-4 text-[#D49812]" />
              <span className={isKannada ? "font-kannada tracking-normal" : "font-sans"}>
                {event.sections.guests}
              </span>
            </div>
          </div>

          {/* 5-Card Grid for Dignitaries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
            {event.guests.map((guest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col bg-[#FFF7E2] rounded-xl border border-[#E8B947]/45 shadow-xs hover:shadow-md hover:border-[#E8B947]/80 transition-all duration-300 p-5 text-center group"
              >
                {/* Guest Portrait Photo */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-[#E8B947] shadow-xs bg-white shrink-0">
                  <Image
                    src={guest.image}
                    alt={guest.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Badge */}
                {guest.badge && (
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-white border border-[#E8B947]/60 text-[#74132A] text-[10px] sm:text-[11px] font-bold">
                      <span className={isKannada ? "font-kannada" : "font-sans"}>
                        {guest.badge}
                      </span>
                    </span>
                  </div>
                )}

                {/* Name */}
                <h4
                  className={cn(
                    "text-base sm:text-[17px] font-sans font-bold text-[#8B1538] mb-1.5 leading-snug",
                    isKannada && "font-kannada font-bold text-base"
                  )}
                >
                  {guest.name}
                </h4>

                {/* Designation */}
                <p
                  className={cn(
                    "text-xs sm:text-[13px] font-medium text-[#4A4A4A] leading-relaxed mt-auto",
                    isKannada && "font-kannada text-xs font-medium"
                  )}
                >
                  {guest.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

