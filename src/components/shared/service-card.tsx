import React from "react";
import { cn } from "@/lib/utils";
import type { ServiceCardProps } from "@/types";

export function ServiceCard({
  title,
  timing,
  amount,
  description,
  badge,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-brand-red/20 bg-[#FFF7E2] p-6 md:p-7 shadow-temple-sm transition-all duration-300",
        "hover:border-brand-red hover:shadow-temple-kumkum hover:bg-[#FFFDF8]",
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-brand-red leading-snug">
            {title}
          </h3>
          {badge && (
            <span className="shrink-0 rounded-md bg-brand-yellow/30 px-2.5 py-0.5 text-xs font-semibold text-brand-red-deep border border-brand-yellow/60">
              {badge}
            </span>
          )}
        </div>

        {timing && (
          <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            <span>{timing}</span>
          </p>
        )}

        <p className="text-sm text-foreground/80 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-brand-red/10 flex items-center justify-between">
        {amount ? (
          <div>
            <span className="text-xs text-muted-foreground block">Offering</span>
            <span className="text-base font-bold text-brand-red">{amount}</span>
          </div>
        ) : (
          <div />
        )}

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-2 text-xs font-semibold text-white shadow-temple-sm hover:bg-brand-red-dark transition-colors focus-visible:ring-2 focus-visible:ring-brand-yellow min-h-[38px]"
        >
          Seva Details
        </button>
      </div>
    </div>
  );
}

