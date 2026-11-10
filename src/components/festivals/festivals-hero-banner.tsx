"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ChevronRight, Calendar, Sparkles, Moon, Flame } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function FestivalsHeroBanner() {
  const { t, locale, fontClass, isKannada } = useContentTranslation();
  const hero = t.festivalsPage.hero;

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
        {/* Desktop Festival / Rathotsava Chariot Banner (1440x591) */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="hidden md:block relative w-full h-full"
        >
          <Image
            src="/festival-hero-desktop.png"
            alt="Sri Ambamata Devasthana Sacred Events & Rathotsava Chariot Festival"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-right brightness-[1.02]"
          />
        </motion.div>

        {/* Mobile Festival / Rathotsava Chariot Banner (402x874) */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="block md:hidden relative w-full h-full"
        >
          <Image
            src="/festival-hero-mobile.png"
            alt="Sri Ambamata Devasthana Rathotsava Chariot Mobile Banner"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-bottom brightness-[1.02]"
          />
        </motion.div>

        {/* Desktop Gradient Overlay (Text contrast on left, vibrant Chariot on right) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#2B040B]/95 via-[#3D0611]/82 via-55% to-[#2B040B]/35" />

        {/* Mobile Gradient Overlay (Top text contrast, visible bottom chariot) */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#2B040B]/90 via-[#3D0611]/72 via-50% to-[#2B040B]/85" />

        {/* Ambient Top & Bottom Gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#460511] to-transparent" />
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
            {isKannada ? "ಉತ್ಸವಗಳು ಮತ್ತು ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು" : "Events & Festivals"}
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

        {/* Subtitle / Tagline */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-base sm:text-lg md:text-xl text-[#FCE48C] max-w-2xl leading-relaxed mb-6",
            fontClass,
            locale === "en" ? "font-sans italic" : "not-italic"
          )}
        >
          {hero.subtitle}
        </motion.p>

        {/* Lead Narrative */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-xs sm:text-sm md:text-base text-white/90 max-w-3xl leading-relaxed font-light mb-10",
            fontClass
          )}
        >
          {hero.intro}
        </motion.p>

        {/* 4 Quick Festival Highlight Badges */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <Calendar className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "ವಾರ್ಷಿಕ ಜಾತ್ರೆ" : locale === "hi" ? "वार्षिक जात्रा" : locale === "te" ? "వార్షిక జాతర" : "Annual Jatra"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "೨೦,೦೦೦+ ಭಕ್ತರು" : locale === "hi" ? "२०,०००+ श्रद्धालु" : locale === "te" ? "20,000+ భక్తులు" : "20,000+ Devotees"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <Sparkles className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "ಬೆಳ್ಳಿ ರಥೋತ್ಸವ" : locale === "hi" ? "रजत रथोत्सव" : locale === "te" ? "వెండి రథోత్సవం" : "Belli Rathotsava"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "ಬೆಳ್ಳಿ ರಥ ಮೆರವಣಿಗೆ" : locale === "hi" ? "भव्य चांदी का रथ" : locale === "te" ? "వెండి రథ ఊరేగింపు" : "Silver Chariot"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <Flame className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "ಶರನ್ನವರಾತ್ರಿ" : locale === "hi" ? "शरण्नवरात्रि" : locale === "te" ? "శరన్నవరాత్రులు" : "Sharannavaratri"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "೯ ಪವಿತ್ರ ರಾತ್ರಿಗಳು" : locale === "hi" ? "९ पावन रात्रियां" : locale === "te" ? "9 పవిత్ర రాత్రులు" : "9 Sacred Nights"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <Moon className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "ಹುಣ್ಣಿಮೆ ಪೂಜೆ" : locale === "hi" ? "पूर्णिमा पूजा" : locale === "te" ? "పౌర్ణమి పూజ" : "Full Moon"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "ವಿಶೇಷ ಅಭಿಷೇಕ" : locale === "hi" ? "विशेष अभिषेक" : locale === "te" ? "విశేష అభిషేకం" : "Pournami Seva"}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

