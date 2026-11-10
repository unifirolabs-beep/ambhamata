"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

// Map suitable temple public icons to the 7 ceremonies
const CEREMONY_ICONS = [
  "/dharshanam icon.png", // 1. Kakada Aarti
  "/vedic icon.png",      // 2. Rudrabhisheka
  "/seva icon.png",       // 3. Panchamrutha Abhisheka
  "/vedic icon.png",      // 4. Sahasranama Kumkumarchana
  "/dharshanam icon.png", // 5. Sri Devi Pooja & Alankara
  "/seva icon.png",       // 6. Devotee Darshan, Pooja & Archana
  "/homam icon .png",     // 7. Maha Mangalarati
];

export function TimingsScheduleSection() {
  const { t, fontClass } = useContentTranslation();
  const schedule = t.timingsPage.schedule;

  return (
    <section id="daily-pooja-schedule" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EC] to-[#FFF3D6] text-[#292929]">
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
              {schedule.eyebrow}
            </span>
          </div>

          <h2
            className={cn(
              "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl text-[#8B1538] tracking-tight leading-tight mb-3 text-center text-balance",
              fontClass
            )}
          >
            {schedule.heading}
          </h2>

          <p
            className={cn(
              "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
              fontClass
            )}
          >
            {schedule.subtitle}
          </p>
        </motion.div>

        {/* 7 Daily Ceremonies Grid (Responsive across PC, Laptop, Tablet, Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-7">
          {schedule.items.map((item, index) => {
            const iconSrc = CEREMONY_ICONS[index % CEREMONY_ICONS.length];
            const isLast = index === schedule.items.length - 1;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "group relative p-6 sm:p-7 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/30 shadow-xs",
                  "transition-all duration-300 ease-out hover:border-[#E8B947]/60 hover:-translate-y-0.5 hover:shadow-sm hover:bg-[#FFFCF3]",
                  isLast && "md:col-span-2 lg:col-span-2 xl:col-span-2"
                )}
              >
                {/* Top Bar: Ceremony Number Pill, Ceremony Tag & Time Indicator */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  {/* Left Pill: Number & Tag */}
                  <div className="flex items-center gap-2.5">
                    {/* English Number Badge in Kumkum Red */}
                    <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#8B1538] text-white font-sans font-black text-sm shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                      {item.num}
                    </span>

                    {/* Vedic Tag */}
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#FFF3D6] text-[#8B1538] border border-[#E8B947]/60">
                      {item.tag}
                    </span>
                  </div>

                  {/* Time Badge with Clock Icon */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#E8B947]/40 text-xs font-semibold text-[#74132A]">
                    <Clock className="h-3.5 w-3.5 text-[#D49812] shrink-0" />
                    <span>{item.time}</span>
                  </div>
                </div>

                {/* Main Body: Icon + Title & Description */}
                <div className="flex items-start gap-4">
                  {/* Temple Symbol Icon */}
                  <div className="h-11 w-11 rounded-xl bg-[#FFF9EC] border border-[#E8B947]/40 p-1.5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={iconSrc}
                      alt={item.title}
                      width={36}
                      height={36}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "text-lg sm:text-xl font-sans font-bold text-[#8B1538] leading-tight mb-2 group-hover:text-[#74132A] transition-colors",
                        fontClass
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm sm:text-[15px] text-[#4A4A4A] leading-relaxed",
                        fontClass
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

