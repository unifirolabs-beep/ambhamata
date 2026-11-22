"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { FeaturedSevaCard } from "@/constants/sevas";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

interface FeaturedSevaCardProps {
  seva: FeaturedSevaCard;
  className?: string;
}

export function FeaturedSevaCardItem({ seva, className }: FeaturedSevaCardProps) {
  const { locale, fontClass } = useContentTranslation();

  const title =
    locale === "kn" && seva.kannadaTitle ? seva.kannadaTitle :
    locale === "hi" && seva.hindiTitle ? seva.hindiTitle :
    locale === "te" && seva.teluguTitle ? seva.teluguTitle : seva.title;

  const description =
    locale === "kn" && seva.kannadaDescription ? seva.kannadaDescription :
    locale === "hi" && seva.hindiDescription ? seva.hindiDescription :
    locale === "te" && seva.teluguDescription ? seva.teluguDescription : seva.description;

  return (
    <Link
      href={seva.href}
      className={cn(
        "group flex flex-col justify-between overflow-hidden text-center",
        "w-full max-w-[320px] lg:max-w-none mx-auto",
        "rounded-2xl",
        "bg-[#FFF7E2]",
        "border border-[#E5B53D]/50",
        "shadow-[0_8px_24px_rgba(0,0,0,0.20)]",
        "transition-all duration-300 ease-out select-none",
        "hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] hover:border-[#D49812]",
        "hover:bg-gradient-to-b hover:from-[#FFFCF3] hover:via-[#FFF7E2] hover:to-[#FFF0D4]",
        className
      )}
    >
      {/* Top Image Container with Increased Height so Deity Head, Kalasha & Crown are Fully Visible */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#790D27]/15">
        <Image
          src={seva.image}
          alt={`${title} - Sacred Seva ritual at Sri Ambadevi Devasthana Somalapura`}
          title={`${title} - Sacred Seva offering to Goddess Sri Ambadevi`}
          fill
          unoptimized
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 280px, 300px"
          className={cn(
            "object-cover transition-transform duration-500 ease-out group-hover:scale-105",
            seva.imagePosition || "object-[center_top]"
          )}
        />
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-between p-4 sm:p-5">
        <div>
          {/* Seva Title */}
          <h3
            className={cn(
              "text-[#74132A] text-sm sm:text-base md:text-[17px] mb-1.5 transition-colors group-hover:text-[#8B1538]",
              locale === "en"
                ? "font-sans font-extrabold tracking-wider uppercase"
                : cn(fontClass, "font-bold leading-snug")
            )}
          >
            {title}
          </h3>

          {/* 2-Line Devotional Description */}
          <p
            className={cn(
              "text-[11px] sm:text-xs text-[#5C1826]/85 font-medium leading-relaxed line-clamp-2 px-1",
              fontClass
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
