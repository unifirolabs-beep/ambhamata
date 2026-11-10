"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Landmark, ExternalLink } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function GovernmentListingSection() {
  const { t, fontClass } = useContentTranslation();
  const info = t.governmentListing;

  return (
    <section
      id="government-listing"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF5] via-[#FFF9E6] to-[#FFF3D6] text-[#292929] overflow-hidden"
      aria-label="Government of Karnataka HR&CE Official Listing"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* 2-Column Responsive Layout: Left Logos, Right Content — No Divider Lines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-18 items-center">
          
          {/* ========================================================
              LEFT COLUMN: OFFICIAL EMBLEMS (NO CARD, NO WHITE BG)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center select-none"
          >
            {/* Direct Official Emblems without Card or White Background */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[19/12] flex items-center justify-center">
              <Image
                src="/karnataka-govt-hrce-logo-transparent.png"
                alt="Government of Karnataka & Hindu Religious Institutions and Charitable Endowments Department"
                fill
                unoptimized
                sizes="(max-width: 768px) 340px, 420px"
                className="object-contain object-center drop-shadow-sm transition-transform duration-500 hover:scale-102"
              />
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: TEMPLE ACCREDITATION CONTENT & TEMPLE ID
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-4.5"
          >
            {/* Pill Badge: Official HR&CE Portal Listing */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-[#E8B947]/60 text-[#8B1538] text-xs sm:text-[13px] font-extrabold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D49812] animate-pulse" />
              <span className={fontClass}>
                {info.badge}
              </span>
            </div>

            {/* Temple Name */}
            <h2
              className={cn(
                "text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-sans font-black text-[#8B1538] leading-[1.18] tracking-tight",
                fontClass
              )}
            >
              {info.templeName}
            </h2>

            {/* Location Subtitle */}
            <p
              className={cn(
                "text-sm sm:text-base md:text-lg font-sans italic text-[#C98600] font-semibold",
                fontClass
              )}
            >
              {info.location}
            </p>

            {/* Temple ID Badge with Sacred Temple Icon */}
            <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-lg bg-white border border-[#E8B947]/70 shadow-xs">
              <div className="w-7 h-7 rounded-md bg-[#FFF9EB] border border-[#E8B947] flex items-center justify-center text-[#D49812] shrink-0">
                <Landmark className="h-4 w-4" />
              </div>
              <span
                className={cn(
                  "text-sm sm:text-base font-bold text-[#74132A]",
                  fontClass
                )}
              >
                {info.templeIdLabel}:{" "}
                <strong className="text-[#8B1538] font-black tracking-wider text-base sm:text-lg">
                  {info.templeId}
                </strong>
              </span>
            </div>

            {/* Body Description */}
            <p
              className={cn(
                "text-sm sm:text-base md:text-[16px] text-[#4A4A4A] leading-relaxed max-w-2xl pt-1",
                fontClass
              )}
            >
              {info.description}
            </p>

            {/* CTA Button: View Official Government Record (Rectangular Style) */}
            <div className="pt-3 sm:pt-4 w-full sm:w-auto">
              <Link
                href="https://itms.kar.nic.in/hrcehome/index_temple.php?tid=155"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg",
                  "bg-[#8B1538] text-white font-sans font-bold text-sm sm:text-base tracking-wide",
                  "shadow-md border-2 border-transparent",
                  "hover:bg-[#F4C542] hover:text-[#74132A] hover:border-[#D49812] hover:shadow-[0_6px_20px_rgba(244,197,66,0.35)]",
                  "transition-all duration-300 active:scale-[0.98]",
                  fontClass
                )}
              >
                <span>{info.buttonText}</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

