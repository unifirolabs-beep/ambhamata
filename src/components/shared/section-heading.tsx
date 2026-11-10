import React from "react";
import { cn } from "@/lib/utils";
import type { SectionHeadingProps } from "@/types";

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  decorative: _decorative = true,
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-2xl mb-10 md:mb-14", alignClasses[align], className)}>
      {subtitle && (
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-red bg-brand-red-light px-3 py-1 rounded-md mb-3 inline-block">
          {subtitle}
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-red leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
}

