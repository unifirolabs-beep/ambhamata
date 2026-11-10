"use client";

import React from "react";
import { useLocale } from "@/context/locale-context";
import { type Locale } from "@/constants";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "ribbon" | "navbar" | "mobile";
  className?: string;
}

const LANGUAGES: Array<{
  code: Locale;
  label: string;
  short: string;
  fontClass: string;
  ariaLabel: string;
}> = [
  { code: "kn", label: "ಕನ್ನಡ", short: "ಕನ್ನಡ", fontClass: "font-kannada", ariaLabel: "Switch to Kannada" },
  { code: "hi", label: "हिन्दी", short: "हिन्दी", fontClass: "font-hindi", ariaLabel: "Switch to Hindi" },
  { code: "te", label: "తెలుగు", short: "తెలుగు", fontClass: "font-telugu", ariaLabel: "Switch to Telugu" },
  { code: "en", label: "English", short: "EN", fontClass: "font-sans", ariaLabel: "Switch to English" },
];

export function LanguageSwitcher({
  variant = "ribbon",
  className,
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  if (variant === "ribbon") {
    return (
      <div
        className={cn(
          "flex items-center gap-1 sm:gap-1.5 text-xs font-semibold select-none",
          className
        )}
      >
        <Globe className="h-3.5 w-3.5 text-brand-yellow shrink-0" aria-hidden="true" />
        {LANGUAGES.map((lang, idx) => (
          <React.Fragment key={lang.code}>
            {idx > 0 && (
              <span className="text-white/40 text-[10px]" aria-hidden="true">
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => setLocale(lang.code)}
              className={cn(
                "transition-colors px-1 py-0.5 rounded text-[11px] sm:text-xs",
                lang.fontClass,
                locale === lang.code
                  ? "text-brand-yellow font-bold underline underline-offset-4 decoration-brand-yellow"
                  : "text-white/80 hover:text-white"
              )}
              aria-label={lang.ariaLabel}
              aria-pressed={locale === lang.code}
            >
              {lang.label}
            </button>
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (variant === "navbar") {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-lg bg-white/60 p-0.5 border border-brand-red/25 shadow-xs text-xs font-semibold",
          className
        )}
      >
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            className={cn(
              "px-2 py-1 rounded-md transition-all text-[11px] sm:text-xs",
              lang.fontClass,
              locale === lang.code
                ? "bg-brand-red text-white shadow-xs font-bold"
                : "text-brand-red-deep hover:bg-white/80"
            )}
            aria-label={lang.ariaLabel}
            aria-pressed={locale === lang.code}
          >
            {lang.short}
          </button>
        ))}
      </div>
    );
  }

  // Mobile drawer variant: 4-button responsive grid
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 p-3 rounded-lg bg-brand-yellow-light/60 border border-brand-red/20",
        className
      )}
    >
      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-red-deep">
        <Globe className="h-4 w-4 text-brand-red shrink-0" />
        <span>Language / ಭಾಷೆ / भाषा / భాష</span>
      </div>
      <div className="grid grid-cols-4 gap-1 rounded-lg bg-white p-1 border border-brand-red/20 text-xs font-semibold">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            className={cn(
              "py-1.5 px-1 rounded-md text-center transition-all text-xs",
              lang.fontClass,
              locale === lang.code
                ? "bg-brand-red text-white font-bold shadow-xs"
                : "text-brand-red-deep hover:bg-brand-red/5"
            )}
            aria-label={lang.ariaLabel}
            aria-pressed={locale === lang.code}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
