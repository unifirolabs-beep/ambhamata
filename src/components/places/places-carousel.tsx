"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Car, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import {
  DESTINATION_PLACES,
  PLACES_COPY,
  getPlaceText,
  type DestinationPlace,
} from "@/data/places-to-visit";
import {
  PLACES_CONTAINER,
  PLACES_EASE,
  PlacesSectionHeader,
} from "@/components/places/places-primitives";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

interface PlacesCarouselProps {
  onSelectPlace?: (place: DestinationPlace) => void;
}

export function PlacesCarousel({ onSelectPlace }: PlacesCarouselProps) {
  const { locale, fontClass } = useContentTranslation();
  const copy = PLACES_COPY[locale];
  const shouldReduceMotion = useReducedMotion();

  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(4);
      else if (w >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = Math.max(0, DESTINATION_PLACES.length - visibleCount);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const pauseAfterInteraction = useCallback(() => {
    setInteractionPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setInteractionPaused(false);
    }, 6000);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const goNext = useCallback(
    (userTriggered = false) => {
      if (userTriggered) pauseAfterInteraction();
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    },
    [maxIndex, pauseAfterInteraction]
  );

  const goPrev = useCallback(
    (userTriggered = false) => {
      if (userTriggered) pauseAfterInteraction();
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    },
    [maxIndex, pauseAfterInteraction]
  );

  // Autoplay every 4 seconds, pausing on hover/interaction or reduced motion
  useEffect(() => {
    if (shouldReduceMotion || isHovered || interactionPaused || maxIndex === 0) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion, isHovered, interactionPaused, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    pauseAfterInteraction();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    const touch = e.changedTouches[0];
    touchStartRef.current = null;
    if (!start || !touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) goNext(true);
      else goPrev(true);
    }
  };

  const handleCardKeyDown = (
    e: React.KeyboardEvent,
    place: DestinationPlace
  ) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext(true);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev(true);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelectPlace?.(place);
    }
  };

  const scrollToAllDestinations = () => {
    const el = document.getElementById("all-places");
    if (el) {
      el.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="top-destinations"
      className="w-full bg-white py-10 sm:py-12 md:py-14 scroll-mt-24"
    >
      <div className={PLACES_CONTAINER}>
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
          <PlacesSectionHeader
            heading={copy.carouselHeading}
            subtitle={copy.carouselSubtitle}
            locale={locale}
            fontClass={fontClass}
            className="max-w-2xl"
          />

          <div className="flex items-center gap-2 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => goPrev(true)}
              aria-label="Previous destination"
              className="h-10 w-10 rounded-lg border border-[#EAEAEA] bg-white hover:bg-[#FFF9F0] hover:border-[#8B1729]/45 text-[#8B1729] inline-flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1729]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goNext(true)}
              aria-label="Next destination"
              className="h-10 w-10 rounded-lg border border-[#EAEAEA] bg-white hover:bg-[#FFF9F0] hover:border-[#8B1729]/45 text-[#8B1729] inline-flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1729]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: PLACES_EASE }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden touch-pan-y">
            <div className="-mx-2.5">
              <motion.div
                className="flex w-full"
                animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.01 }
                    : { duration: 0.52, ease: PLACES_EASE }
                }
              >
                {DESTINATION_PLACES.map((place) => {
                  const text = getPlaceText(place, locale);
                  return (
                    <div
                      key={place.id}
                      className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2.5 py-1.5"
                    >
                      <article
                        tabIndex={0}
                        onKeyDown={(e) => handleCardKeyDown(e, place)}
                        onClick={() => onSelectPlace?.(place)}
                        className="group h-full rounded-xl bg-white border border-[#EAEAEA] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1729]"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5]">
                          <Image
                            src={place.image}
                            alt={place.imageAlt}
                            fill
                            unoptimized
                            loading="lazy"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>

                        <div className="p-4 flex flex-col flex-1 justify-between">
                          <div>
                            <h3
                              className={cn(
                                "font-heritage-serif text-base font-bold text-[#8B1729] leading-snug line-clamp-2",
                                locale !== "en" && fontClass
                              )}
                            >
                              {text.name}
                            </h3>
                            <p
                              className={cn(
                                "mt-1.5 inline-flex items-center gap-1 text-xs text-[#6B6B6B]",
                                fontClass
                              )}
                            >
                              <MapPin
                                className="h-3.5 w-3.5 text-[#8B1729] shrink-0"
                                aria-hidden="true"
                              />
                              <span>{text.location}</span>
                            </p>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-[#EAEAEA] flex items-center justify-between gap-2 text-xs text-[#242424]">
                            <span className="inline-flex items-center gap-1.5 font-medium truncate">
                              <Car
                                className="h-3.5 w-3.5 text-[#6B6B6B] shrink-0"
                                aria-hidden="true"
                              />
                              <span>{place.distance}</span>
                              <span className="text-[#EAEAEA]">|</span>
                              <span className="text-[#6B6B6B]">{place.durationShort}</span>
                            </span>
                            <span
                              className={cn(
                                "text-[10px] font-medium text-[#6B6B6B] shrink-0",
                                fontClass
                              )}
                            >
                              {copy.approxBadge}
                            </span>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Pagination Dots + View All Destinations Action */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Destination carousel pages"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => {
                    pauseAfterInteraction();
                    setCurrentIndex(idx);
                  }}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1729]",
                    isActive
                      ? "w-6 bg-[#8B1729]"
                      : "w-2.5 bg-[#D9D9D9] hover:bg-[#B0B0B0]"
                  )}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={scrollToAllDestinations}
            className={cn(
              "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#8B1729] bg-white hover:bg-[#FFF9F0] text-[#8B1729] px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1729]",
              fontClass
            )}
          >
            <span>{copy.viewAllBtn}</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

