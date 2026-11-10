"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function SevasHeroBanner() {
  const { isKannada } = useContentTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#460511] text-white">
      {/* Background Banner Image - Responsive Desktop & Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Sevas Banner (1440x591) */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="hidden md:block relative w-full h-full"
        >
          <Image
            src="/darshana-hero-desktop.png"
            alt="Sri Ambamata Devasthana Sacred Sevas & Poojas"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-right brightness-[1.02]"
          />
        </motion.div>

        {/* Mobile Sevas Banner (402x874) */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="block md:hidden relative w-full h-full"
        >
          <Image
            src="/darshana-hero-mobile.png"
            alt="Sri Ambamata Devasthana Sevas Mobile Banner"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-bottom brightness-[1.02]"
          />
        </motion.div>

        {/* Desktop Gradient Overlay (Text contrast on left, vibrant imagery on right) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#2B040B]/95 via-[#3D0611]/82 via-55% to-[#2B040B]/35" />

        {/* Mobile Gradient Overlay (Top text contrast, visible bottom imagery) */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#2B040B]/90 via-[#3D0611]/72 via-50% to-[#2B040B]/85" />
        
        {/* Ambient Top & Bottom Gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#460511] to-transparent" />
      </div>

      {/* Decorative Corner Ornaments */}
      <div className="absolute top-0 left-0 w-32 sm:w-44 h-32 sm:h-44 opacity-30 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" className="stroke-[#FFE6A0]">
          <circle cx="0" cy="0" r="80" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="60" strokeWidth="1" />
          <path d="M0 0 L60 60 M0 40 C20 30 30 20 40 0" strokeWidth="0.8" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 sm:w-44 h-32 sm:h-44 opacity-30 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" className="stroke-[#FFE6A0]">
          <circle cx="100" cy="0" r="80" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="100" cy="0" r="60" strokeWidth="1" />
          <path d="M100 0 L40 60 M100 40 C80 30 70 20 60 0" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 flex flex-col items-center text-center"
      >
        {/* Breadcrumb Navigation */}
        <motion.nav
          variants={itemVariants}
          aria-label="Breadcrumb"
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-[#FFE6A0]/25 text-xs sm:text-sm text-[#FFE6A0] mb-6 transition-all hover:bg-black/50",
            isKannada && "font-kannada"
          )}
        >
          <Link href="/" className="hover:text-white transition-colors">
            {isKannada ? "ಮುಖಪುಟ" : "Home"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-white/90 font-medium">
            {isKannada ? "ಪೂಜೆ ಮತ್ತು ಸೇವೆಗಳು" : "Pooja & Temple Sevas"}
          </span>
        </motion.nav>

        {/* Sacred Invocation Mantra */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-3">
          <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-[#FFE6A0] tracking-wide drop-shadow-sm">
            || ॐ श्री अम्बादेव्यै नमಃ ||
          </span>
        </motion.div>

        {/* Temple Subtitle Eyebrow */}
        <motion.span
          variants={itemVariants}
          className={cn(
            "text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/90 mb-2 block",
            isKannada && "font-kannada tracking-wide"
          )}
        >
          {isKannada ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠ" : "Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath"}
        </motion.span>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className={cn(
            "font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-4",
            isKannada && "font-kannada"
          )}
        >
          {isKannada ? "ಪೂಜೆ ಮತ್ತು ದೇವಾಲಯ ಸೇವೆಗಳು" : "Pooja & Temple Sevas"}
        </motion.h1>

        {/* Devotional Subtitle */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "font-sans italic text-base sm:text-lg md:text-xl text-[#FCE48C] max-w-2xl leading-relaxed mb-6",
            isKannada && "font-kannada not-italic"
          )}
        >
          {isKannada
            ? "ಪವಿತ್ರ ಸೇವೆಗಳಲ್ಲಿ ಪಾಲ್ಗೊಂಡು ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪೆ ಮತ್ತು ಆಶೀರ್ವಾದ ಪಡೆಯಿರಿ"
            : "Participate in the Sacred Sevas and Receive the Divine Blessings of Sri Ambadevi"}
        </motion.p>

        {/* Description Context */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-xs sm:text-sm md:text-base text-white/90 max-w-3xl leading-relaxed font-light mb-10",
            isKannada && "font-kannada"
          )}
        >
          {isKannada
            ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಠದಲ್ಲಿ ನಡೆಯುವ ಎಲ್ಲಾ ಪೂಜೆಗಳು ಮತ್ತು ಸೇವೆಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತ ವೈದಿಕ ಪರಂಪರೆಯಂತೆ ದೇವಾಲಯದ ಅರ್ಚಕರು ಭಕ್ತಿಪೂರ್ವಕವಾಗಿ ನೆರವೇರಿಸುತ್ತಾರೆ."
            : "All poojas and sevas at Sukṣhetra Siddha Parvatha Ambamath are performed strictly according to sacred Vedic Agama traditions by ordained temple priests, invoking the supreme grace of Goddess Sri Ambadevi for your family's peace, prosperity, and longevity."}
        </motion.p>

        {/* 4 Quick Seva Highlight Badges */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/seva icon.png"
                alt="Sevas"
                width={32}
                height={32}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", isKannada ? "font-kannada" : "font-sans")}>
                {isKannada ? "೧೧+ ಪವಿತ್ರ ಸೇವೆಗಳು" : "11+ Sacred Sevas"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", isKannada && "font-kannada")}>
                {isKannada ? "ನಿತ್ಯ ಹಾಗೂ ವಿಶೇಷ ಸೇವೆಗಳು" : "Daily & Special Rites"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/vedic icon.png"
                alt="Vedic Sankalpa"
                width={32}
                height={32}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", isKannada ? "font-kannada" : "font-sans")}>
                {isKannada ? "ಹೆಸರು ಮತ್ತು ಗೋತ್ರ" : "Name & Gothra"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", isKannada && "font-kannada")}>
                {isKannada ? "ವೈದಿಕ ಸಂಕಲ್ಪ ಪೂಜೆ" : "Personal Vedic Sankalpa"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/dharshanam icon.png"
                alt="Prasadam & Darshan"
                width={32}
                height={32}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", isKannada ? "font-kannada" : "font-sans")}>
                {isKannada ? "ಪವಿತ್ರ ಪ್ರಸಾದ" : "Prasadam Delivery"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", isKannada && "font-kannada")}>
                {isKannada ? "ಭಕ್ತರಿಗೆ ನೇರ ವಿತರಣೆ" : "Direct to Devotees"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/homam icon .png"
                alt="Agama Shastra"
                width={32}
                height={32}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", isKannada ? "font-kannada" : "font-sans")}>
                {isKannada ? "ಆಗಮ ಶಾಸ್ತ್ರ" : "Agama Shastra"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", isKannada && "font-kannada")}>
                {isKannada ? "ವೈದಿಕ ಸಾಂಪ್ರದಾಯಿಕ ಪೂಜೆ" : "Vedic Tradition"}
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
