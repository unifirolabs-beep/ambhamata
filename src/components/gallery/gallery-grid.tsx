"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { GALLERY_ITEMS, type GalleryItem, type GalleryCategory } from "@/constants/gallery";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const { t, locale, fontClass, isKannada } = useContentTranslation();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const categories = [
    { id: "all", label: t.galleryPage.categories.all },
    { id: "devi", label: t.galleryPage.categories.devi },
    { id: "construction", label: t.galleryPage.categories.construction },
    { id: "jathara", label: t.galleryPage.categories.jathara },
  ];

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Reset pagination when active category changes
  useEffect(() => {
    setVisibleCount(24);
    setSelectedItemIndex(null);
  }, [activeCategory]);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const selectedItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] || null : null;

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
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-[#FFFDF8]" aria-label="Temple Photo Gallery">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* ========================================================
            CATEGORY FILTER TABS (RECTANGULAR CONSISTENT BUTTONS)
           ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
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
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 select-none active:scale-95 cursor-pointer",
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
            PHOTO GALLERY GRID (CLEAN PURE PHOTO GRID, NO CARDS/ICONS)
           ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => {
              const title =
                locale === "kn" ? item.kannadaTitle :
                locale === "hi" && item.hindiTitle ? item.hindiTitle :
                locale === "te" && item.teluguTitle ? item.teluguTitle : item.title;

              // Find full index in filtered items for seamless lightbox navigation
              const fullIndex = filteredItems.findIndex((i) => i.id === item.id);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: Math.min((idx % 12) * 0.02, 0.2) }}
                  onClick={() => setSelectedItemIndex(fullIndex >= 0 ? fullIndex : idx)}
                  className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-black/5 shadow-xs hover:shadow-lg transition-all duration-300 ease-out cursor-pointer select-none border border-[#EAEAEA]"
                >
                  <Image
                    src={item.image}
                    alt={`${title} - Sri Ambadevi Devasthana Somalapura Gallery`}
                    title={`${title} - Sri Ambadevi Temple`}
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================================
            LOAD MORE PHOTOS BUTTON
           ======================================================== */}
        {filteredItems.length > visibleCount && (
          <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className={cn(
                "inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold tracking-wide select-none transition-all duration-300 active:scale-95 shadow-sm cursor-pointer",
                "bg-[#8B1538] text-white hover:bg-[#620A20] hover:shadow-md",
                fontClass
              )}
            >
              <Layers className="h-4 w-4" />
              <span>
                {locale === "kn"
                  ? "ಹೆಚ್ಚಿನ ಚಿತ್ರಗಳನ್ನು ವೀಕ್ಷಿಸಿ"
                  : locale === "hi"
                  ? "और छायाचित्र देखें"
                  : locale === "te"
                  ? "మరిన్ని చిత్రాలు చూడండి"
                  : "Load More Photos"}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/20 text-xs">
                {displayedItems.length} / {filteredItems.length}
              </span>
            </button>
            <p className="text-xs text-[#6B6B6B]">
              {locale === "kn"
                ? `ಒಟ್ಟು ${filteredItems.length} ಚಿತ್ರಗಳಲ್ಲಿ ${displayedItems.length} ತೋರಿಸಲಾಗುತ್ತಿದೆ`
                : `Showing ${displayedItems.length} of ${filteredItems.length} photos`}
            </p>
          </div>
        )}

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
              className="absolute top-4 right-4 z-50 h-11 w-11 rounded-lg bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 cursor-pointer"
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
              className="absolute left-3 sm:left-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-black/60 hover:bg-[#8B1538] text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-lg cursor-pointer"
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
              className="absolute right-3 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-black/60 hover:bg-[#8B1538] text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-lg cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Main Modal Image */}
            <motion.div
              key={selectedItem.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Display */}
              <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[84vh] rounded-2xl overflow-hidden bg-black/50 border border-white/20 shadow-2xl">
                <Image
                  src={selectedItem.image}
                  alt={isKannada ? selectedItem.kannadaTitle : selectedItem.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-contain object-center"
                />
              </div>

              {/* Counter Indicator */}
              <div className="mt-3 text-xs sm:text-sm text-white/80 font-medium">
                {selectedItemIndex! + 1} / {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
