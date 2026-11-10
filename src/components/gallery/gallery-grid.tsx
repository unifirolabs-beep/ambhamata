"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GALLERY_ITEMS, type GalleryItem, type GalleryCategory } from "@/constants/gallery";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const { t, locale, fontClass, isKannada } = useContentTranslation();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: t.galleryPage.categories.all },
    { id: "deity", label: t.galleryPage.categories.deity },
    { id: "architecture", label: t.galleryPage.categories.architecture },
    { id: "festivals", label: t.galleryPage.categories.festivals },
    { id: "poojas", label: t.galleryPage.categories.poojas },
  ];

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedItem: GalleryItem | null = selectedItemIndex !== null ? filteredItems[selectedItemIndex] || null : null;

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [selectedItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedItemIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedItemIndex(null);
  }, []);

  // Keyboard navigation for full-screen modal
  useEffect(() => {
    if (selectedItemIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedItemIndex, handleClose, handleNext, handlePrev]);

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-[#FFFDF8]" aria-label="Temple Photo Gallery">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ========================================================
            CATEGORY FILTER TABS (RECTANGULAR CONSISTENT BUTTONS)
           ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = cat.id === "all"
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id as GalleryCategory);
                  setSelectedItemIndex(null);
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 select-none active:scale-95",
                  fontClass,
                  isActive
                    ? "bg-[#8B1538] text-white shadow-md border border-[#620A20] scale-105"
                    : "bg-[#FFF7E2] text-[#74132A] border border-[#E8B947]/50 hover:bg-[#FFF1B5] hover:border-[#D49812]"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-md text-[11px]",
                    isActive ? "bg-white/20 text-white" : "bg-[#8B1538]/10 text-[#8B1538]"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            PHOTO GALLERY GRID (MASONRY-LIKE RESPONSIVE LAYOUT)
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const title =
                locale === "kn" ? item.kannadaTitle :
                locale === "hi" && item.hindiTitle ? item.hindiTitle :
                locale === "te" && item.teluguTitle ? item.teluguTitle : item.title;
              const tag =
                locale === "kn" ? item.kannadaTag :
                locale === "hi" && item.hindiTag ? item.hindiTag :
                locale === "te" && item.teluguTag ? item.teluguTag : item.tag;
              const description =
                locale === "kn" ? item.kannadaDescription :
                locale === "hi" && item.hindiDescription ? item.hindiDescription :
                locale === "te" && item.teluguDescription ? item.teluguDescription : item.description;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  onClick={() => setSelectedItemIndex(idx)}
                  className={cn(
                    "group relative flex flex-col justify-between overflow-hidden cursor-pointer",
                    "rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/35 shadow-xs",
                    "transition-all duration-300 ease-out select-none",
                    "hover:border-[#D49812] hover:shadow-md hover:-translate-y-1.5 hover:bg-[#FFFCF3]"
                  )}
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/10">
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Top Badges */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                    {/* Top Tag & Expand Indicator */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#8B1538]/90 text-white text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-xs">
                        <Sparkles className="h-3 w-3 text-[#FFE6A0]" />
                        <span className={fontClass}>{tag}</span>
                      </span>

                      <div className="h-8 w-8 rounded-lg bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                        <Maximize2 className="h-4 w-4 text-[#FFE6A0]" />
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className={cn(
                          "text-[#74132A] text-base sm:text-lg font-bold leading-snug mb-2 group-hover:text-[#8B1538] transition-colors",
                          fontClass
                        )}
                      >
                        {title}
                      </h3>
                      <p
                        className={cn(
                          "text-xs sm:text-[13px] text-[#4A4A4A] leading-relaxed line-clamp-3",
                          fontClass
                        )}
                      >
                        {description}
                      </p>
                    </div>

                    <div className={cn("mt-4 pt-3 border-t border-[#E8B947]/25 flex items-center justify-between text-xs text-[#8B1538] font-bold", fontClass)}>
                      <span>
                        {locale === "kn"
                          ? "ದೊಡ್ಡದಾಗಿ ವೀಕ್ಷಿಸಿ"
                          : locale === "hi"
                          ? "बड़ा देखने के लिए क्लिक करें"
                          : locale === "te"
                          ? "పూర్తి చిత్రం చూడటానికి క్లిక్ చేయండి"
                          : "Click to view full photo"}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* ========================================================
          FULL-SCREEN LIGHTBOX MODAL (FOR DEEP DEVOTIONAL IMMERSION)
         ======================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6 md:p-8 select-none"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 h-11 w-11 rounded-lg bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/20 active:scale-95"
              aria-label="Close photo preview"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Left Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-black/60 hover:bg-[#8B1538] text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-lg"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Navigation Right Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-black/60 hover:bg-[#8B1538] text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-lg"
              aria-label="Next photo"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Main Modal Image & Caption Card */}
            <motion.div
              key={selectedItem.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Display */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] rounded-2xl overflow-hidden bg-black/50 border border-white/20 shadow-2xl">
                <Image
                  src={selectedItem.image}
                  alt={isKannada ? selectedItem.kannadaTitle : selectedItem.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain object-center"
                />
              </div>

              {/* Caption Card Below Image */}
              <div className="mt-3.5 w-full p-4 sm:p-5 rounded-xl bg-[#FFF7E2] border border-[#E8B947]/60 shadow-lg text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#8B1538] text-white text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  <span className={fontClass}>
                    {locale === "kn" ? selectedItem.kannadaTag :
                     locale === "hi" && selectedItem.hindiTag ? selectedItem.hindiTag :
                     locale === "te" && selectedItem.teluguTag ? selectedItem.teluguTag : selectedItem.tag}
                  </span>
                </div>
                <h4
                  className={cn(
                    "text-lg sm:text-xl font-bold text-[#74132A] mb-1 leading-snug",
                    fontClass
                  )}
                >
                  {locale === "kn" ? selectedItem.kannadaTitle :
                   locale === "hi" && selectedItem.hindiTitle ? selectedItem.hindiTitle :
                   locale === "te" && selectedItem.teluguTitle ? selectedItem.teluguTitle : selectedItem.title}
                </h4>
                <p
                  className={cn(
                    "text-xs sm:text-sm text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed",
                    fontClass
                  )}
                >
                  {locale === "kn" ? selectedItem.kannadaDescription :
                   locale === "hi" && selectedItem.hindiDescription ? selectedItem.hindiDescription :
                   locale === "te" && selectedItem.teluguDescription ? selectedItem.teluguDescription : selectedItem.description}
                </p>
                <div className="text-[11px] text-gray-500 mt-2 font-medium">
                  {selectedItemIndex! + 1} / {filteredItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

