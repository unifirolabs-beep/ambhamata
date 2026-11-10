"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface FestivalEventData {
  tag: string;
  title: string;
  p1: string;
  p2: string;
  image: string;
  alt: string;
}

interface FestivalEventRowProps {
  event: FestivalEventData;
  isReverse: boolean; // false = Text Left, Image Right; true = Image Left, Text Right on desktop
  isKannada: boolean;
  fontClass?: string;
}

export function FestivalEventRow({
  event,
  isReverse,
  isKannada,
  fontClass,
}: FestivalEventRowProps) {
  return (
    <div className="w-full">
      {/* Main 2-Column Row with Alternating Layout on Desktop, Clean Stacked on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center"
      >
        {/* ========================================================
            TEXT CONTENT CONTAINER
            Desktop: Col-span-6 (Left if !isReverse, Right if isReverse)
            Mobile: order-2 (Placed below image on mobile for clear visual hierarchy)
           ======================================================== */}
        <div
          className={cn(
            "lg:col-span-6 flex flex-col justify-center order-2",
            isReverse ? "lg:order-2" : "lg:order-1"
          )}
        >
          {/* Gold Category Label */}
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#C98600] mb-2 inline-block">
            {event.tag}
          </span>

          {/* Event Title */}
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] font-sans font-bold text-[#8B1538] leading-[1.22] tracking-tight mb-4",
              fontClass,
              isKannada && "leading-tight"
            )}
          >
            {event.title}
          </h2>

          {/* Description Paragraphs */}
          <div
            className={cn(
              "space-y-3.5 text-sm sm:text-base md:text-[16px] text-[#4A4A4A] leading-relaxed",
              fontClass
            )}
          >
            <p>{event.p1}</p>
            {event.p2 && <p>{event.p2}</p>}
          </div>
        </div>

        {/* ========================================================
            PHOTOGRAPH CONTAINER
            Desktop: Col-span-6 (Right if !isReverse, Left if isReverse)
            Mobile: order-1 (Placed above text on mobile)
           ======================================================== */}
        <div
          className={cn(
            "lg:col-span-6 flex justify-center order-1",
            isReverse ? "lg:order-1" : "lg:order-2"
          )}
        >
          <div className="group relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#E8B947]/40 bg-[#FFFDF8] transition-all duration-500 hover:shadow-md hover:border-[#D49812]">
            <Image
              src={event.image}
              alt={event.alt}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
            />
            {/* Subtle Divine Corner Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
