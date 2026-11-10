"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ChevronRight, Camera } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

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

export function GalleryHeroBanner() {
  const { t, locale, fontClass, isKannada } = useContentTranslation();
  const hero = t.galleryPage.hero;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#240409]"
      aria-label="Gallery Hero Banner"
    >
      {/* Background Photograph Container */}
      <div className="absolute inset-0 select-none">
        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/darshana-hero-desktop.png"
            alt="Sri Ambamata Devasthana Sacred Architecture"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/darshana-hero-mobile.png"
            alt="Sri Ambamata Devasthana Temple Gopuram"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Desktop Ambient Gradients */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#240409]/92 via-[#3A050E]/80 to-[#240409]/90" />

        {/* Mobile Gradient Overlay */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#240409]/92 via-[#3A050E]/80 via-50% to-[#240409]/90" />

        {/* Ambient Top & Bottom Gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#240409] to-transparent" />
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
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-[#FFE6A0]/25 text-xs sm:text-sm text-[#FFE6A0] mb-6 transition-all hover:bg-black/55",
            isKannada && "font-kannada"
          )}
        >
          <Link href="/" className="hover:text-white transition-colors">
            {isKannada ? "ಮುಖಪುಟ" : "Home"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-white/90 font-medium">
            {isKannada ? "ಭಾವಚಿತ್ರ ಗ್ಯಾಲರಿ" : "Temple Gallery"}
          </span>
        </motion.nav>

        {/* Sacred Sri (श्री) Glyph */}
        <motion.div variants={itemVariants} className="relative mb-2 select-none flex items-center justify-center" aria-hidden="true">
          <span className="font-sans text-3xl sm:text-4xl font-black text-[#FFE6A0]/60 leading-none tracking-wide">
            श्री
          </span>
        </motion.div>

        {/* Sacred Invocation Mantra */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-3">
          <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-[#FFE6A0] tracking-wide drop-shadow-sm">
            {hero.mantra}
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div variants={itemVariants}>
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#FFE6A0]/90 mb-3 inline-block">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* Main Sacred Kshetra Title */}
        <motion.h1
          variants={itemVariants}
          className={cn(
            "font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-4",
            fontClass,
            isKannada && "leading-[1.25]"
          )}
        >
          {hero.heading}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-base sm:text-lg md:text-xl font-semibold text-[#FFE6A0] max-w-2xl drop-shadow-sm mb-6",
            fontClass,
            locale === "en" ? "font-sans italic" : "not-italic"
          )}
        >
          {hero.subtitle}
        </motion.p>

        {/* Lead Narrative Description */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-sm sm:text-base md:text-[17px] text-white/90 max-w-3xl leading-relaxed font-light drop-shadow-xs",
            fontClass
          )}
        >
          {hero.intro}
        </motion.p>

        {/* Quick Photo Count Badge */}
        <motion.div
          variants={itemVariants}
          className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#FFE6A0]/15 border border-[#FFE6A0]/30 text-xs sm:text-sm text-[#FFE6A0] font-bold"
        >
          <Camera className="h-4 w-4" />
          <span className={fontClass}>
            {locale === "kn"
              ? "೨೦+ ನೈಜ ದೇವಾಲಯದ ಭಾವಚಿತ್ರಗಳು"
              : locale === "hi"
              ? "२०+ पावन मंदिर छायाचित्र"
              : locale === "te"
              ? "20+ పవిత్ర ఆలయ చిత్రాలు"
              : "20+ Authentic Sacred Photographs"}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
