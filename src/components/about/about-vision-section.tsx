"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Compass,
  Building,
  Users,
  Briefcase,
  Car,
  Map,
  ArrowRight,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

const PILLAR_ICONS = [Building, Users, Briefcase, Car, Compass, Map];

export function AboutVisionSection() {
  const { t, fontClass } = useContentTranslation();
  const s6 = t.aboutPage.section6;
  const s8 = t.aboutPage.section8;

  const visionPillars = s6.pillars.map((pillar, idx) => ({
    ...pillar,
    icon: PILLAR_ICONS[idx % PILLAR_ICONS.length],
  }));

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9E6] to-[#FFF3D6] text-[#292929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ========================================================
            SECTION 6: OUR VISION & SPIRITUAL HERITAGE
           ======================================================== */}
        <div className="mb-20">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12"
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
                {s6.eyebrow}
              </span>
            </div>

            <h2
              className={cn(
                "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] text-[#8B1538] tracking-tight leading-tight mb-2.5 text-center text-balance max-w-4xl",
                fontClass
              )}
            >
              {s6.heading}
            </h2>

            <p
              className={cn(
                "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
                fontClass
              )}
            >
              {s6.subtitle}
            </p>
          </motion.div>

          {/* Vision Statement Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "p-6 sm:p-8 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs text-base sm:text-lg leading-relaxed text-gray-800 mb-8 text-center max-w-4xl mx-auto",
              fontClass
            )}
          >
            <p>{s6.visionStatement}</p>
          </motion.div>

          {/* 6 Strategic Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "group p-6 rounded-2xl flex flex-col justify-between cursor-pointer",
                    "bg-[#FFF7E2] border border-[#E8B947]/40 shadow-xs",
                    "transition-all duration-300 ease-out select-none",
                    "hover:bg-[#FFFCF3] hover:border-[#D49812] hover:shadow-md hover:-translate-y-1.5"
                  )}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B947]/50 flex items-center justify-center text-[#8B1538] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8B1538] group-hover:text-white group-hover:border-[#620A20]">
                      <IconComp className="h-6 w-6 text-[#D99A00] transition-colors duration-300 group-hover:text-[#FFE6A0]" />
                    </div>
                    <h3
                      className={cn(
                        "font-bold text-lg text-[#74132A] mb-2 leading-snug transition-colors duration-300 group-hover:text-[#5A0718]",
                        fontClass
                      )}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={cn(
                        "text-xs sm:text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-[#460511] group-hover:font-medium",
                        fontClass
                      )}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            SACRED BLESSING BANNER: OUR ETERNAL BELIEF (#FFF7E2 Code)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl overflow-hidden bg-[#FFF7E2] text-[#292929] p-8 sm:p-12 md:p-16 text-center shadow-md border border-[#E8B947]/60 relative"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-4 left-5 text-[#D99A00]/30 font-sans font-black text-2xl pointer-events-none select-none" aria-hidden="true">
            श्री
          </div>
          <div className="absolute bottom-4 right-5 text-[#D99A00]/30 font-sans font-black text-2xl pointer-events-none select-none" aria-hidden="true">
            श्री
          </div>

          {/* Eyebrow with Sacred Sri (श्री) in Background (Medium Size) */}
          <div className="relative inline-flex items-center justify-center mb-3 select-none">
            <span
              className="absolute inset-0 flex items-center justify-center font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#D99A00]/35 select-none pointer-events-none -translate-y-0.5 tracking-normal"
              aria-hidden="true"
            >
              श्री
            </span>
            <span
              className={cn(
                "relative z-10 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#D99A00]",
                fontClass
              )}
            >
              {s8.eyebrow}
            </span>
          </div>

          <h2
            className={cn(
              "font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#8B1538] max-w-3xl mx-auto leading-tight mb-6",
              fontClass
            )}
          >
            {s8.heading}
          </h2>

          <p
            className={cn(
              "text-sm sm:text-base md:text-lg text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed mb-6 font-normal",
              fontClass
            )}
          >
            {s8.p1}
          </p>

          <p
            className={cn(
              "text-sm sm:text-base md:text-lg text-[#8B1538] font-sans italic max-w-2xl mx-auto leading-relaxed mb-8",
              fontClass
            )}
          >
            {s8.quote}
          </p>

          {/* Sacred Maha-Mantra Banner */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-6 sm:px-10 py-3 sm:py-4 rounded-xl bg-white border-2 border-[#E8B947] shadow-sm mb-10 cursor-default"
          >
            <span className={cn("font-bold text-xl sm:text-2xl md:text-3xl text-[#8B1538] tracking-wide drop-shadow-xs", fontClass)}>
              {s8.mantra}
            </span>
          </motion.div>

          {/* Action Navigation Buttons (Rectangular Consistent Style) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sevas"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-8 py-3.5 rounded-lg",
                "bg-[#8B1538] text-white font-bold text-sm sm:text-base shadow-md",
                "hover:bg-[#74132A] transition-all hover:scale-105 active:scale-95",
                fontClass
              )}
            >
              <span>{s8.btnSevas}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/timings"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-8 py-3.5 rounded-lg",
                "bg-white text-[#74132A] font-semibold text-sm sm:text-base",
                "border border-[#E8B947]/70 shadow-xs",
                "hover:bg-[#FFF3D6] hover:border-[#D49812] transition-all hover:scale-105 active:scale-95",
                fontClass
              )}
            >
              <span>{s8.btnTimings}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

