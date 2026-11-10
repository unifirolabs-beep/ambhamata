"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Heart, CheckCircle2, Sun } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function AboutDeviAndPuranaSection() {
  const { t, locale, fontClass } = useContentTranslation();
  const s4 = t.aboutPage.section4;
  const s5 = t.aboutPage.section5;

  const blessings = [s4.b1, s4.b2, s4.b3, s4.b4, s4.b5];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#292929] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ========================================================
            SECTION 4: SRI AMBADEVI – THE DIVINE MOTHER
           ======================================================== */}
        <div className="mb-20">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto mb-12 sm:mb-16"
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
                {s4.eyebrow}
              </span>
            </div>

            <h2
              className={cn(
                "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] text-[#8B1538] tracking-tight leading-tight mb-2.5 text-center text-balance max-w-4xl",
                fontClass
              )}
            >
              {s4.heading}
            </h2>

            <p
              className={cn(
                "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
                fontClass
              )}
            >
              {s4.subtitle}
            </p>
          </motion.div>

          {/* 2-Column Showcase: Authentic Photo + Sacred Blessings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Authentic Temple Photograph of Goddess Ambamata */}
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-md p-3.5 rounded-3xl bg-gradient-to-b from-[#FFFDF8] via-[#FFF6DC] to-[#FCEEC8] border-2 border-[#E8B947] shadow-[0_14px_36px_rgba(139,21,56,0.15)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(232,185,71,0.3)] hover:-translate-y-1">
                
                {/* Photo Container */}
                <div className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-inner border border-[#E8B947]/50 bg-white">
                  <Image
                    src="/devi-1.png"
                    alt="Authentic Deity of Goddess Sri Ambadevi Ambamata"
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Ring & Label */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white text-center">
                    <span className={cn("block font-bold text-lg text-[#FFE6A0]", fontClass)}>
                      {locale === "kn" ? "ಶ್ರೀ ಅಂಬಾದೇವಿ" : locale === "hi" ? "श्री अम्बादेवी" : locale === "te" ? "శ్రీ అంబాదేవి" : "Sri Ambadevi"}
                    </span>
                    <span className={cn("text-xs text-white/90 italic", fontClass)}>
                      {locale === "kn" ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ" : locale === "hi" ? "सुक्षेत्र सिद्ध पर्वत शक्तिपीठ" : locale === "te" ? "సుక్షేత్ర సిద్ధ పర్వత శక్తిపీఠం" : "Sukṣhetra Siddha Parvatha Shaktipeeth"}
                    </span>
                  </div>
                </div>

                {/* Sacred Chakra Tag */}
                <div className="mt-3 text-center">
                  <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#8B1538] text-white text-xs font-bold tracking-wide shadow-xs", fontClass)}>
                    <Sun className="h-3.5 w-3.5 text-[#F4C542]" />
                    {locale === "kn" ? "ಶ್ರೀ ಬಗಳಾ ಚಕ್ರ ಶಕ್ತಿಪೀಠ" : locale === "hi" ? "श्री बगलामुखी चक्र शक्तिपीठ" : locale === "te" ? "శ్రీ బగలాముఖి చక్ర శక్తిపీఠం" : "Shree Bagala Chakra Shaktipeeth"}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Divine Descriptions & Blessings */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn("lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#292929]", fontClass)}
            >
              <p>{s4.p1}</p>
              <p>{s4.p2}</p>

              {/* Devotee Blessings Card */}
              <div className="p-6 rounded-2xl bg-[#FFF9EB] border-2 border-[#E8B947]/60 shadow-xs">
                <h4 className={cn("font-bold text-[#8B1538] text-base sm:text-lg mb-4 flex items-center gap-2", fontClass)}>
                  <Heart className="h-5 w-5 text-[#D99A00]" />
                  <span>{s4.bulletsTitle}</span>
                </h4>

                <ul className="space-y-3">
                  {blessings.map((blessing, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-800"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#8B1538] shrink-0 mt-0.5" />
                      <span>{blessing}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className={cn("text-sm sm:text-base text-gray-700 italic border-l-3 border-[#D99A00] pl-4", fontClass)}>
                {s4.quote}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ========================================================
            SECTION 5: DEVI PURANA AND SACRED TRADITIONS
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-10 md:p-12 rounded-3xl bg-[#FFF7E2] border-2 border-[#E8B947]/70 shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <div className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto mb-8">
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
                {s5.eyebrow}
              </span>
            </div>

            <h2
              className={cn(
                "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] text-[#8B1538] tracking-tight leading-tight mb-2.5 text-center text-balance max-w-4xl",
                fontClass
              )}
            >
              {s5.heading}
            </h2>

            <p
              className={cn(
                "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
                fontClass
              )}
            >
              {s5.subtitle}
            </p>
          </div>

          <div className={cn("max-w-4xl mx-auto space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed text-center", fontClass)}>
            <p>{s5.p1}</p>
            <p>{s5.p2}</p>
            <p className={cn("text-sm sm:text-base italic text-[#8B1538] pt-2", fontClass)}>
              {s5.p3}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
