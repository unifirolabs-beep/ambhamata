import React from "react";
import { cn } from "@/lib/utils";
import type { FeatureCardProps } from "@/types";

export function FeatureCard({
  title,
  description,
  icon,
  badge,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-brand-red/15 bg-[#FFF7E2] p-6 md:p-8 shadow-temple-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-temple-md",
        "focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-md bg-brand-red-light px-2.5 py-0.5 text-xs font-semibold text-brand-red">
          {badge}
        </span>
      )}

      {icon && (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-red border border-brand-yellow/50 group-hover:bg-brand-yellow group-hover:text-brand-red-deep transition-colors">
          {icon}
        </div>
      )}

      <h3 className="text-lg md:text-xl font-bold tracking-tight text-brand-red mb-2 group-hover:text-brand-red-dark transition-colors">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

