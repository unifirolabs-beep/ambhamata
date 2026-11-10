"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function GalleryHighlights() {
  const { t, isKannada } = useContentTranslation();
  const highlights = t.galleryPage.highlights;

  const featureCards = [
    {
      title: isKannada ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ಮೂಲ ಸನ್ನಿಧಿ" : "Sri Ambadevi Moola Sannidhi",
      desc: isKannada
        ? "ವಿಳ್ಯೇದೆಲೆ ತೋರಣ, ಸುವರ್ಣ ಕಿರೀಟ ಮತ್ತು ದಿವ್ಯ ಪುಷ್ಪಾಲಂಕಾರಗಳಿಂದ ಕಂಗೊಳಿಸುವ ಜಗನ್ಮಾತೆಯ ಮೂಲ ರೂಪದ ಪಾವನ ದರ್ಶನ."
        : "The sacred sanctum where Goddess Sri Ambadevi manifests divine protective grace, adorned with betel leaves and holy silks.",
      tag: isKannada ? "ಮೂಲ ಗರ್ಭಗುಡಿ" : "Sanctum Sanctorum",
      image: "/devi-1.png",
      href: "/about#devi",
    },
    {
      title: isKannada ? "ವಾರ್ಷಿಕ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ" : "Grand Belli Rathotsava",
      desc: isKannada
        ? "ಲಕ್ಷಾಂತರ ಭಕ್ತಾದಿಗಳು ಪಾಲ್ಗೊಳ್ಳುವ ಸುಕ್ಷೇತ್ರದ ಅತ್ಯಂತ ವಿಜೃಂಭಣೆಯ ಧಾರ್ಮಿಕ ಉತ್ಸವ ಮತ್ತು ಪವಿತ್ರ ರಥ ಮೆರವಣಿಗೆ."
        : "The grand annual silver chariot festival drawing hundreds of thousands of devout pilgrims in celebratory devotion.",
      tag: isKannada ? "ವಾರ್ಷಿಕ ಜಾತ್ರೆ" : "Annual Jatra",
      image: "/gallery/temple-belli-rathotsava.jpg",
      href: "/festivals",
    },
    {
      title: isKannada ? "ಸಿದ್ಧ ಪರ್ವತ ತಪೋಭೂಮಿ" : "Siddha Parvatha Tapobhoomi",
      desc: isKannada
        ? "ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರು ಕಠಿಣ ತಪಸ್ಸನ್ನಾಚರಿಸಿ ಅಂಬಾದೇವಿಯ ಸಾಕ್ಷಾತ್ಕಾರ ಪಡೆದ ಪವಿತ್ರ ಶಿಲಾ ಗಿರಿಶ್ರೇಣಿ."
        : "The serene hill landscape sanctified by centuries of saintly penance, cave meditation, and divine spiritual energy.",
      tag: isKannada ? "ಆಧ್ಯಾತ್ಮಿಕ ನೆಲೆ" : "Sacred Terrain",
      image: "/darshana-hero-desktop.png",
      href: "/about#siddha-parvatha",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white" aria-label="Gallery Highlights">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header with Centered Medium Sri Watermark */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
              {highlights.eyebrow}
            </span>
          </div>

          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#8B1538] leading-tight mb-3 text-balance",
              isKannada && "font-kannada"
            )}
          >
            {highlights.heading}
          </h2>

          <p
            className={cn(
              "text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic max-w-2xl",
              isKannada && "font-kannada not-italic"
            )}
          >
            {highlights.subtitle}
          </p>
        </div>

        {/* 3-Column Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {featureCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/40 shadow-xs overflow-hidden transition-all duration-300 hover:border-[#D49812] hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/10">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#8B1538] text-white text-xs font-bold tracking-wide shadow-xs">
                    <Sparkles className="h-3 w-3 text-[#FFE6A0]" />
                    <span>{card.tag}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={cn(
                      "text-[#74132A] text-lg sm:text-xl font-bold mb-2 group-hover:text-[#8B1538] transition-colors",
                      isKannada ? "font-kannada" : "font-sans"
                    )}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={cn(
                      "text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mb-4",
                      isKannada && "font-kannada"
                    )}
                  >
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8B947]/30">
                  <Link
                    href={card.href}
                    className={cn(
                      "inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8B1538] hover:text-[#74132A] transition-colors group/link",
                      isKannada && "font-kannada"
                    )}
                  >
                    <span>{isKannada ? "ವಿವರಗಳನ್ನು ತಿಳಿಯಿರಿ" : "Explore Details"}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

