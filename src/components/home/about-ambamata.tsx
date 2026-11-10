"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

const DEVI_PHOTOS = [
  {
    src: "/devi-1.png",
    alt: "Goddess Sri Ambamata in Divine Alankara with Sacred Betel Leaves and Floral Garlands",
    title: "Goddess Sri Ambadevi Darshan",
  },
  {
    src: "/devi-2.png",
    alt: "Sacred Sanctum Murti of Goddess Sri Ambamata at Sukṣhetra Siddha Parvatha",
    title: "Sanctum Sanctorum Sri Ambamata",
  },
];

export function AboutAmbamata() {
  const { t, fontClass } = useContentTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  }, []);

  // 4-second automatic rotation, pauses on hover
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Touch gesture handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 md:py-24 lg:py-28 text-[#292929] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Clean Goddess Ambamata Image Carousel       */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              className="relative w-full max-w-[430px] mx-auto select-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Main Image Viewport (Clean, Frameless, Rounded Corners, Natural Soft Shadow) */}
              <div className="relative w-full aspect-[3/4] max-h-[440px] sm:max-h-none sm:h-[500px] md:h-[530px] lg:h-[540px] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-xl touch-pan-y">
                {DEVI_PHOTOS.map((photo, idx) => (
                  <div
                    key={photo.src}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out",
                      currentIndex === idx
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      unoptimized
                      priority={idx === 0}
                      className="object-cover object-center"
                    />
                  </div>
                ))}

                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className={cn(
                    "absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-30",
                    "h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/95 text-[#8B1538]",
                    "shadow-md border border-gray-100 flex items-center justify-center",
                    "hover:bg-[#8B1538] hover:text-white hover:scale-105 active:scale-90 transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538]"
                  )}
                  aria-label="Previous Goddess Ambamata photograph"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  onClick={nextSlide}
                  className={cn(
                    "absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-30",
                    "h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/95 text-[#8B1538]",
                    "shadow-md border border-gray-100 flex items-center justify-center",
                    "hover:bg-[#8B1538] hover:text-white hover:scale-105 active:scale-90 transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538]"
                  )}
                  aria-label="Next Goddess Ambamata photograph"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Two Pagination Dots */}
              <div className="relative z-20 flex items-center justify-center gap-2 pt-3.5 pb-1">
                {DEVI_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538]",
                      currentIndex === idx
                        ? "h-2.5 w-6 bg-[#8B1538]"
                        : "h-2.5 w-2.5 bg-[#8B1538]/30 hover:bg-[#8B1538]/60"
                    )}
                    aria-label={`View photograph ${idx + 1}`}
                    aria-current={currentIndex === idx ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: About Sukṣhetra Siddha Parvatha Content    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Sacred Sri (श्री) Eyebrow Header with Sri in the Exact Middle Background (Medium Size) */}
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
                {t.aboutHome.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#8B1538] leading-[1.18] tracking-tight mb-3 text-balance",
                fontClass
              )}
            >
              {t.aboutHome.headingPart1}
              <br />
              {t.aboutHome.headingPart2}
            </h2>

            {/* Subtitle (Clean, Borderless, No Container or Lines) */}
            <p
              className={cn(
                "text-sm sm:text-base md:text-lg font-medium text-[#8B1538] italic mb-6 leading-relaxed",
                fontClass
              )}
            >
              {t.aboutHome.subtitlePill}
            </p>

            {/* Description Paragraph 1 */}
            <p className={cn("text-sm sm:text-base text-[#292929] leading-relaxed mb-4", fontClass)}>
              {t.aboutHome.para1.prefix}
              <strong className="text-[#D99A00] font-bold">
                {t.aboutHome.para1.bold1}
              </strong>
              {t.aboutHome.para1.middle}
              <strong className="text-[#D99A00] font-bold">
                {t.aboutHome.para1.bold2}
              </strong>
              {t.aboutHome.para1.suffix}
            </p>

            {/* Description Paragraph 2 */}
            <p className={cn("text-sm sm:text-base text-[#292929] leading-relaxed mb-4", fontClass)}>
              {t.aboutHome.para2.prefix}
              <strong className="text-[#D99A00] font-bold">
                {t.aboutHome.para2.bold1}
              </strong>
              {t.aboutHome.para2.middle}
              <strong className="text-[#D99A00] font-bold">
                {t.aboutHome.para2.bold2}
              </strong>
              {t.aboutHome.para2.middle2}
              <strong className="text-[#D99A00] font-bold">
                {t.aboutHome.para2.bold3}
              </strong>
              {t.aboutHome.para2.suffix}
            </p>

            {/* Description Paragraph 3 */}
            <p className={cn("text-sm sm:text-base text-[#292929] leading-relaxed mb-5", fontClass)}>
              {t.aboutHome.para3}
            </p>

            {/* Closing Highlight */}
            <p
              className={cn(
                "text-sm sm:text-base md:text-lg font-bold italic text-[#D99A00] mb-8 leading-snug",
                fontClass
              )}
            >
              {t.aboutHome.highlight}
            </p>

            {/* Explore Our History CTA Button (Rectangular Style) */}
            <Link
              href="/about"
              className={cn(
                "inline-flex items-center justify-center gap-2.5",
                "px-8 py-3.5 sm:px-9 sm:py-4 rounded-lg",
                "bg-[#8B1538] text-white text-sm sm:text-base font-bold tracking-wide",
                "shadow-md transition-all duration-300 select-none",
                "hover:bg-[#F2C14E] hover:text-[#7A102D] hover:-translate-y-0.5 hover:shadow-lg",
                "active:translate-y-0 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] focus-visible:ring-offset-2",
                fontClass
              )}
            >
              <span>{t.aboutHome.cta}</span>
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export const AboutAmbhamata = AboutAmbamata;
