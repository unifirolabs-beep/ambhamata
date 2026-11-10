"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SevaCard } from "@/components/home/seva-card";
import type { SevaItem } from "@/constants/sevas";
import { cn } from "@/lib/utils";

interface SevaCarouselRowProps {
  sevas: SevaItem[];
  rowId?: string;
  autoplayIntervalMs?: number;
}

export function SevaCarouselRow({
  sevas,
  rowId = "Temple Sevas",
  autoplayIntervalMs = 4500,
}: SevaCarouselRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Measure card scroll step dynamically based on first child card + gap
  const getScrollStep = useCallback(() => {
    if (!scrollRef.current) return 340;
    const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
    if (firstChild) {
      return firstChild.offsetWidth + 24; // width + gap
    }
    return 340;
  }, []);

  // Check scroll boundary status and compute active slide index
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const step = getScrollStep();
    const index = Math.round(scrollLeft / step);
    setActiveIndex(Math.min(Math.max(index, 0), sevas.length - 1));
  }, [getScrollStep, sevas.length]);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState, { passive: true });
      return () => {
        el.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, [updateScrollState]);

  // Scroll handler for Previous button
  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const step = getScrollStep();
    scrollRef.current.scrollBy({ left: -step, behavior: "smooth" });
  };

  // Scroll handler for Next button
  const scrollRight = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const step = getScrollStep();
    
    // If reached the end, loop back smoothly to start
    if (scrollLeft >= scrollWidth - clientWidth - 20) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  // Scroll directly to target card index via pagination dots
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const step = getScrollStep();
    scrollRef.current.scrollTo({ left: index * step, behavior: "smooth" });
  };

  // Autoplay with interaction and hover awareness
  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const step = getScrollStep();
        if (scrollLeft >= scrollWidth - clientWidth - 25) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: step, behavior: "smooth" });
        }
      }
    }, autoplayIntervalMs);

    return () => clearInterval(timer);
  }, [isInteracting, autoplayIntervalMs, getScrollStep]);

  return (
    <div
      className="relative w-full my-6 sm:my-8"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsInteracting(false), 3000);
      }}
    >
      <div className="relative flex items-center">
        {/* Left Circular Navigation Arrow */}
        <button
          type="button"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={cn(
            "absolute -left-2 sm:-left-4 lg:-left-7 z-30",
            "h-12 w-12 sm:h-14 sm:w-14 rounded-full",
            "bg-gradient-to-b from-[#FFF7D1] to-[#F7D36A] text-[#74132A]",
            "border-2 border-[#E5B53D]",
            "shadow-[0_6px_20px_rgba(0,0,0,0.4)] flex items-center justify-center",
            "transition-all duration-200 active:scale-95",
            "hover:scale-110 hover:shadow-[0_8px_24px_rgba(229,181,61,0.6)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE6A0]",
            !canScrollLeft && "opacity-40 cursor-not-allowed hover:scale-100 hover:shadow-none"
          )}
          aria-label={`Previous sevas in ${rowId}`}
        >
          <ChevronLeft className="h-7 w-7 stroke-[2.5]" />
        </button>

        {/* Single Horizontal Scrolling Card Track */}
        <div
          ref={scrollRef}
          className={cn(
            "flex items-stretch gap-5 sm:gap-6 md:gap-7",
            "overflow-x-auto no-scrollbar scroll-smooth",
            "px-6 sm:px-10 py-5",
            "snap-x snap-mandatory w-full"
          )}
          tabIndex={0}
          role="region"
          aria-label={`${rowId} carousel`}
        >
          {sevas.map((seva) => (
            <div key={seva.id} className="snap-start shrink-0 flex items-stretch">
              <SevaCard seva={seva} />
            </div>
          ))}
        </div>

        {/* Right Circular Navigation Arrow */}
        <button
          type="button"
          onClick={scrollRight}
          className={cn(
            "absolute -right-2 sm:-right-4 lg:-right-7 z-30",
            "h-12 w-12 sm:h-14 sm:w-14 rounded-full",
            "bg-gradient-to-b from-[#FFF7D1] to-[#F7D36A] text-[#74132A]",
            "border-2 border-[#E5B53D]",
            "shadow-[0_6px_20px_rgba(0,0,0,0.4)] flex items-center justify-center",
            "transition-all duration-200 active:scale-95",
            "hover:scale-110 hover:shadow-[0_8px_24px_rgba(229,181,61,0.6)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE6A0]",
            !canScrollRight && "opacity-60"
          )}
          aria-label={`Next sevas in ${rowId}`}
        >
          <ChevronRight className="h-7 w-7 stroke-[2.5]" />
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
        {sevas.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToIndex(idx)}
            className={cn(
              "transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE6A0]",
              activeIndex === idx
                ? "h-2.5 w-6 bg-[#FFE6A0] shadow-[0_0_10px_#FFE6A0]"
                : "h-2 w-2 bg-[#FFF1B5]/40 hover:bg-[#FFF1B5]/80"
            )}
            aria-label={`Go to slide ${idx + 1} of ${rowId}`}
            aria-current={activeIndex === idx ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
