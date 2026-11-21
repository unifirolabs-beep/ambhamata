"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  Clock,
} from "lucide-react";
import {
  getLocalizedNavDescription,
  getLocalizedNavShortTitle,
  getLocalizedNavTitle,
  getNavLocaleFontClass,
  siteConfig,
} from "@/config/site";
import { useLocale } from "@/context/locale-context";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  className?: string;
}

function getServiceIcon(href: string) {
  switch (href) {
    case "/sevas":
      return Bell;
    case "/timings":
      return Clock;
    case "/festivals":
      return CalendarCheck;
    default:
      return Bell;
  }
}

export function DesktopNav({ className }: DesktopNavProps) {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const fontClass = getNavLocaleFontClass(locale);

  const isRouteActive = useCallback(
    (href: string) =>
      pathname === href || (href !== "/" && Boolean(pathname?.startsWith(href))),
    [pathname]
  );

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(
    (title: string) => {
      clearCloseTimer();
      setOpenDropdown(title);
    },
    [clearCloseTimer]
  );

  const handleMouseLeave = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  }, [clearCloseTimer]);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on Escape or click outside
  useEffect(() => {
    if (!openDropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Cleanup timer on unmount
  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  const itemBaseClass = cn(
    "px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs lg:text-[13px] xl:text-sm font-bold transition-all duration-200 rounded-lg select-none whitespace-nowrap shrink-0",
    fontClass,
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep"
  );

  return (
    <nav
      ref={navRef}
      aria-label="Primary Navigation"
      className={cn("hidden lg:flex items-center gap-1 xl:gap-2 shrink-0", className)}
    >
      {siteConfig.headerNavItems.map((item) => {
        const fullTitle = getLocalizedNavTitle(item, locale);
        const shortTitle = getLocalizedNavShortTitle(item, locale);

        if (item.children && item.children.length > 0) {
          const isActive = item.children.some((child) => isRouteActive(child.href));
          const isDropdownOpen = openDropdown === item.title;

          return (
            <div
              key={item.title}
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="menu"
                onClick={() =>
                  setOpenDropdown((prev) => (prev === item.title ? null : item.title))
                }
                className={cn(
                  itemBaseClass,
                  "inline-flex items-center gap-1 cursor-pointer",
                  isActive
                    ? "bg-brand-red text-white shadow-temple-kumkum"
                    : isDropdownOpen
                    ? "bg-white/70 text-brand-red-deep"
                    : "text-brand-red-deep/90 hover:text-brand-red-deep hover:bg-white/50 active:scale-[0.98]"
                )}
              >
                <span className="hidden xl:inline">{fullTitle}</span>
                <span className="inline xl:hidden">{shortTitle}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 transition-transform duration-200",
                    isDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* pt-2 bridge prevents hover dead-zone between trigger and menu */}
              <div
                className={cn(
                  "absolute left-0 top-full pt-2 z-50 w-72 transition-all duration-150 origin-top-left",
                  isDropdownOpen
                    ? "opacity-100 visible scale-100 pointer-events-auto"
                    : "opacity-0 invisible scale-95 pointer-events-none"
                )}
              >
                <div
                  role="menu"
                  aria-label={fullTitle}
                  className="rounded-xl bg-[#FFF7E2] border border-[#E8B947]/55 shadow-xl p-1.5 space-y-1"
                >
                  {item.children.map((child) => {
                    const isChildActive = isRouteActive(child.href);
                    const ChildIcon = getServiceIcon(child.href);
                    const childTitle = getLocalizedNavTitle(child, locale);
                    const childDescription = getLocalizedNavDescription(child, locale);

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                        className={cn(
                          "group flex items-start justify-between gap-2.5 rounded-lg px-3 py-2.5 transition-colors duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep",
                          isChildActive
                            ? "bg-[#8B1538] text-white shadow-sm"
                            : "text-[#460511] hover:bg-[#FFF1B5] hover:text-[#74132A]"
                        )}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                              isChildActive
                                ? "bg-white/20 text-[#FFE6A0]"
                                : "bg-[#8B1538]/10 text-[#8B1538] group-hover:bg-[#8B1538] group-hover:text-white"
                            )}
                          >
                            <ChildIcon className="h-4 w-4" />
                          </div>

                          <div className="flex flex-col min-w-0">
                            <span
                              className={cn(
                                "text-sm font-bold leading-snug",
                                fontClass
                              )}
                            >
                              {childTitle}
                            </span>
                            {childDescription && (
                              <span
                                className={cn(
                                  "text-xs leading-snug mt-0.5",
                                  fontClass,
                                  isChildActive ? "text-[#FFE6A0]" : "text-[#460511]/70"
                                )}
                              >
                                {childDescription}
                              </span>
                            )}
                          </div>
                        </div>

                        <ChevronRight
                          className={cn(
                            "h-4 w-4 shrink-0 mt-1 transition-transform group-hover:translate-x-0.5",
                            isChildActive ? "text-[#FFE6A0]" : "text-[#8B1538]/40"
                          )}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

        if (!item.href) return null;
        const isActive = isRouteActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              itemBaseClass,
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
