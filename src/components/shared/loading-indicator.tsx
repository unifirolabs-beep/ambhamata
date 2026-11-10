import React from "react";
import { cn } from "@/lib/utils";

interface LoadingIndicatorProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

export function LoadingIndicator({
  className,
  size = "md",
  text,
}: LoadingIndicatorProps) {
  const sizeMap = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("flex flex-col items-center justify-center gap-3 p-4", className)}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-brand-yellow/30 border-t-brand-red",
          sizeMap[size]
        )}
      />
      {text && (
        <p className="text-xs font-medium text-brand-red animate-pulse">
          {text}
        </p>
      )}
      <span className="sr-only">Loading sacred content...</span>
    </div>
  );
}

