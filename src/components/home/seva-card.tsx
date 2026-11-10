"use client";

import React from "react";
import type { SevaItem } from "@/constants/sevas";
import { cn } from "@/lib/utils";

interface SevaCardProps {
  seva: SevaItem;
  className?: string;
}

export function SevaCard({ seva, className }: SevaCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between items-center text-center",
        "w-[280px] sm:w-[310px] md:w-[330px]",
        "min-h-[220px] sm:min-h-[240px]",
        "shrink-0 p-6 sm:p-7 rounded-2xl",
        "bg-[#FFF7E2]",
        "border border-[#E5B53D]/50",
        "shadow-[0_6px_20px_rgba(0,0,0,0.14)]",
        "transition-all duration-300 ease-out select-none",
        "hover:-translate-y-1 hover:shadow-md hover:border-[#D49812]",
        "hover:bg-gradient-to-b hover:from-[#FFFCF3] hover:via-[#FFF7E2] hover:to-[#FFF0D4]",
        className
      )}
    >

      {/* Top Section: Seva Title, Flourish & 2-Line Description */}
      <div className="w-full flex flex-col items-center flex-1 justify-start">
        {/* Seva Title */}
        <h3 className="font-sans font-bold text-[#74132A] text-lg sm:text-xl md:text-[21px] leading-snug tracking-tight mb-2 flex items-center justify-center text-center px-1">
          {seva.name}
        </h3>

        {/* 2-line Devotional Description with generous breathing room */}
        <p className="text-xs sm:text-[13px] md:text-sm text-[#74132A]/90 font-medium leading-relaxed text-center px-1 mt-1">
          {seva.description}
        </p>
      </div>
    </div>
  );
}
