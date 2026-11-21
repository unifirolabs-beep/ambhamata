"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/** Shared horizontal container sizing across mobile, tablet, desktop, and wide PC screens. */
export const PLACES_CONTAINER =
  "w-full max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10";

/** Smooth cubic-bezier curve shared across scroll reveals and interactive transitions. */
export const PLACES_EASE = [0.22, 1, 0.36, 1] as const;

interface PlacesSectionHeaderProps {
  heading: string;
  subtitle: string;
  locale: string;
  fontClass?: string;
  className?: string;
}

/**
 * Shared animated section title and description for `/places-to-visit`.
 */
export function PlacesSectionHeader({
  heading,
  subtitle,
  locale,
  fontClass,
  className,
}: PlacesSectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: PLACES_EASE }}
      className={cn("max-w-3xl", className)}
    >
      <h2
        className={cn(
          "font-heritage-serif text-xl xs:text-2xl sm:text-3xl xl:text-[34px] font-bold text-[#8B1729] leading-snug",
          locale !== "en" && fontClass
        )}
      >
        {heading}
      </h2>
      <p
        className={cn(
          "mt-2 text-sm sm:text-base text-[#6B6B6B] leading-relaxed",
          fontClass
        )}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}

