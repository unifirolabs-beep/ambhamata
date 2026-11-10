"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function AboutHistorySection() {
  const { t, locale, fontClass, isKannada } = useContentTranslation();
  const s1 = t.aboutPage.section1;

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white text-[#292929] overflow-hidden">
      {/* Background Subtle Mandala */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" className="stroke-[#8B1538]">
          <circle cx="50" cy="50" r="45" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="25" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
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
                isKannada && "font-kannada tracking-wide"
              )}
            >
              {s1.eyebrow}
            </span>
          </div>

          <h2
            className={cn(
              "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] text-[#8B1538] tracking-tight leading-tight mb-2.5 text-center text-balance max-w-4xl",
              isKannada && "font-kannada"
            )}
          >
            {s1.heading}
          </h2>

          <p
            className={cn(
              "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
              isKannada && "font-kannada not-italic"
            )}
          >
            {s1.subtitle}
          </p>
          
          <p
            className={cn(
              "text-sm sm:text-base text-gray-700 leading-relaxed italic max-w-2xl text-center",
              isKannada && "font-kannada not-italic"
            )}
          >
            {s1.lead}
          </p>
        </motion.div>

        {/* 2-Column Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Historical Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-[#292929]",
              isKannada && "font-kannada text-base"
            )}
          >
            <p>{s1.p1}</p>
            <p>{s1.p2}</p>
            <p>{s1.p3}</p>

            <div className={cn("text-sm sm:text-base text-gray-700 bg-[#FAF8F5] p-4 rounded-xl border-l-4 border-[#8B1538] transition-transform hover:translate-x-1 duration-200", fontClass)}>
              {locale === "kn"
                ? "ಇಂದು ಅಂಬಾಮಠವು ತನ್ನ ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳನ್ನು ರಕ್ಷಿಸುತ್ತಾ, ಪ್ರಮುಖ ಯಾತ್ರಾ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಕ್ಷೇತ್ರವನ್ನಾಗಿ ಅಭಿವೃದ್ಧಿಪಡಿಸುವ ಸಂಕಲ್ಪದೊಂದಿಗೆ ಮುನ್ನಡೆಯುತ್ತಿದೆ."
                : locale === "hi"
                ? "आज अम्बामाता मंदिर अपनी पावन परंपराओं को संजोते हुए एक प्रमुख तीर्थ एवं आध्यात्मिक धाम के रूप में विकसित होने के संकल्प के साथ आगे बढ़ रहा है।"
                : locale === "te"
                ? "నేడు అంబామఠం తన పవిత్ర సాంప్రదాయాలను పరిరక్షిస్తూ, ప్రముఖ పుణ్యక్షేత్రంగా మరియు ఆధ్యాత్మిక కేంద్రంగా అభివృద్ధి చెందే సంకల్పంతో ముందుకు సాగుతోంది."
                : "Today, Ambamath continues to preserve its sacred traditions while working towards the development of a prominent spiritual and pilgrimage destination."}
            </div>
          </motion.div>

          {/* Right Column: Architectural Temple Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md p-3.5 sm:p-4 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/60 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/80 border border-[#E8B947]/40 group">
                <Image
                  src="/temple-image.png"
                  alt="Historic Siddha Parvatha Sri Ambamata Temple Architecture"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Vintage Badge */}
                <div className={cn("absolute top-3 left-3 px-3 py-1 rounded-md bg-[#8B1538] text-white text-xs font-bold tracking-wide shadow-md", fontClass)}>
                  {locale === "kn" ? "೩೪೩+ ವರ್ಷಗಳ ಪರಂಪರೆ" : locale === "hi" ? "३४३+ वर्षों की परंपरा" : locale === "te" ? "343+ సంవత్సరాల వారసత్వం" : "343+ Years Heritage"}
                </div>
              </div>

              {/* Caption & Temple Details */}
              <div className="p-4 text-center">
                <h3 className={cn("font-bold text-[#8B1538] text-lg mb-1", fontClass)}>
                  {locale === "kn" ? "ಸಿದ್ಧ ಪರ್ವತ ದೇವಸ್ಥಾನ" : locale === "hi" ? "सिद्ध पर्वत देवस्थान" : locale === "te" ? "సిద్ధ పర్వత దేవస్థానం" : "Siddha Parvatha Devasthana"}
                </h3>
                <p className={cn("text-xs text-gray-600 leading-normal mb-3", fontClass)}>
                  {locale === "kn" ? "ಸೋಮಲಾಪುರ, ಸಿಂಧನೂರು ತಾಲೂಕು, ರಾಯಚೂರು ಜಿಲ್ಲೆ" : locale === "hi" ? "सोमलापुर, सिंधनूर तालुक, रायचूर जिला" : locale === "te" ? "సోమలాపుర, సింధనూరు తాలూకా, రాయచూరు జిల్లా" : "Somalapura, Sindhanur Taluk, Raichur District"}
                </p>

                {/* Micro Keypoints */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8B947]/30 text-left text-xs">
                  <div className="flex items-center gap-1.5 text-gray-700">
                    <ShieldCheck className="h-4 w-4 text-[#D99A00] shrink-0" />
                    <span className={fontClass}>
                      {locale === "kn" ? "ಶಕ್ತಿಪೀಠ ಸನ್ನಿಧಿ" : locale === "hi" ? "शक्तिपीठ सानिध्य" : locale === "te" ? "శక్తిపీఠ సన్నిధి" : "Shaktipeeth Sanctuary"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700">
                    <Image
                      src="/vedic icon.png"
                      alt="Vedic Tapobhoomi"
                      width={16}
                      height={16}
                      unoptimized
                      className="h-4 w-4 object-contain shrink-0"
                    />
                    <span className={fontClass}>
                      {locale === "kn" ? "ವೈದಿಕ ತಪೋಭೂಮಿ" : locale === "hi" ? "वैदिक तपोभूमि" : locale === "te" ? "వైదిక తపోభూమి" : "Vedic Tapobhoomi"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
