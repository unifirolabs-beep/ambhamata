"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/context/locale-context";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  className?: string;
}

export function DesktopNav({ className }: DesktopNavProps) {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <nav
      aria-label="Primary Navigation"
      className={cn("hidden lg:flex items-center gap-1 xl:gap-2 shrink-0", className)}
    >
      {siteConfig.navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href));

        const fullTitle =
          locale === "kn" && item.kannadaTitle ? item.kannadaTitle :
          locale === "hi" && item.hindiTitle ? item.hindiTitle :
          locale === "te" && item.teluguTitle ? item.teluguTitle : item.title;

        const shortTitle =
          locale === "kn"
            ? (item.kannadaShortTitle || item.kannadaTitle || item.title)
            : locale === "hi"
            ? (item.hindiShortTitle || item.hindiTitle || item.title)
            : locale === "te"
            ? (item.teluguShortTitle || item.teluguTitle || item.title)
            : (item.shortTitle || item.title);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs lg:text-[13px] xl:text-sm font-bold transition-all duration-200 rounded-lg select-none whitespace-nowrap shrink-0",
              locale === "kn" && "font-kannada",
              locale === "hi" && "font-hindi",
              locale === "te" && "font-telugu",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep",
              isActive
                ? "bg-brand-red text-white shadow-temple-kumkum"
                : "text-brand-red-deep/90 hover:text-brand-red-deep hover:bg-white/50 active:scale-[0.98]"
            )}
          >
            <span className="hidden xl:inline">{fullTitle}</span>
            <span className="inline xl:hidden">{shortTitle}</span>
          </Link>
        );
      })}
    </nav>
  );
}
