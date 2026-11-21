"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Landmark,
  Bell,
  Clock,
  CalendarCheck,
  ImageIcon,
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  getLocalizedNavTitle,
  getNavLocaleFontClass,
  siteConfig,
} from "@/config/site";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { useLocale } from "@/context/locale-context";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "Online Services": true,
  });
  const pathname = usePathname();
  const { locale } = useLocale();
  const fontClass = getNavLocaleFontClass(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Map icons for nav items
  const getNavIcon = (href: string) => {
    switch (href) {
      case "/":
        return Home;
      case "/about":
        return Landmark;
      case "/sevas":
        return Bell;
      case "/timings":
        return Clock;
      case "/festivals":
        return CalendarCheck;
      case "/gallery":
        return ImageIcon;
      case "/places-to-visit":
        return MapPin;
      case "/contact":
        return Phone;
      default:
        return Bell;
    }
  };

  const drawerContent = (
    <div
      className={cn(
        "fixed inset-0 z-[9999] lg:hidden transition-all duration-300",
        isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
      )}
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation Menu"
    >
      {/* Dark Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#3B030D]/70 backdrop-blur-sm transition-opacity duration-300 ease-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 z-50 h-[100dvh] w-[88%] max-w-[360px]",
          "bg-gradient-to-b from-[#FFFDF8] via-[#FAF8F5] to-[#FFF6DC]",
          "border-l-[3px] border-[#E8B947] shadow-[0_0_50px_rgba(0,0,0,0.5)]",
          "flex flex-col transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header with Sacred Branding & Close Button */}
        <div className="flex items-center justify-between border-b-2 border-[#8B1538]/15 px-5 py-4 bg-gradient-to-r from-[#FFF1B5] to-[#FCE48C]">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 rounded-full bg-white p-0.5 shadow-md ring-2 ring-[#8B1538]/30">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} Emblem`}
                width={48}
                height={48}
                unoptimized
                className="h-full w-full rounded-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-sm font-sans font-extrabold text-[#74132A] leading-tight">
                {locale === "kn" ? siteConfig.nameKannada : locale === "hi" ? siteConfig.nameHindi : locale === "te" ? siteConfig.nameTelugu : siteConfig.name}
              </h2>
              <p className="text-[11px] font-bold text-[#8B1538] leading-tight mt-0.5">
                {locale === "kn" ? siteConfig.altNameKannada : locale === "hi" ? siteConfig.altNameHindi : locale === "te" ? siteConfig.altNameTelugu : siteConfig.altName}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#74132A] border border-[#8B1538]/20 shadow-xs hover:bg-[#8B1538] hover:text-white transition-all active:scale-95"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Page Links List */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-5 space-y-2 no-scrollbar"
          aria-label="Mobile Navigation Pages"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#8B1538]/70 px-3 block mb-2">
            {locale === "kn"
              ? "ದೇವಾಲಯದ ಪುಟಗಳು"
              : locale === "hi"
              ? "मंदिर के मुख्य पृष्ठ"
              : locale === "te"
              ? "దేవాలయ ముఖ్య పుటలు"
              : "Temple Pages"}
          </span>

          {siteConfig.headerNavItems.map((item) => {
            const isRouteActive = (href: string) =>
              pathname === href ||
              (href !== "/" && Boolean(pathname?.startsWith(href)));

            const primaryTitle = getLocalizedNavTitle(item, locale);
            const secondaryTitle =
              locale === "en" ? item.kannadaTitle : item.title;

            if (item.children && item.children.length > 0) {
              const isGroupActive = item.children.some((child) =>
                isRouteActive(child.href)
              );
              const isExpanded = openGroups[item.title] ?? isGroupActive;

              return (
                <div key={item.title} className="space-y-1.5">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setOpenGroups((prev) => ({
                        ...prev,
                        [item.title]: !isExpanded,
                      }))
                    }
                    className={cn(
                      "w-full group flex items-center justify-between rounded-xl px-3.5 py-3 text-base transition-all duration-200 select-none min-h-[52px] cursor-pointer text-left",
                      isGroupActive
                        ? "bg-[#8B1538] text-white shadow-md font-semibold"
                        : "bg-white/80 border border-[#E8B947]/40 text-[#460511] hover:bg-[#FFF1B5] hover:border-[#D49812] hover:text-[#74132A]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                          isGroupActive
                            ? "bg-white/20 text-[#FFE6A0]"
                            : "bg-[#FFF9EB] text-[#8B1538] group-hover:bg-[#8B1538] group-hover:text-white"
                        )}
                      >
                        <Sparkles className="h-4 w-4" />
                      </div>

                      <div className="flex flex-col">
                        <span
                          className={cn(
                            "text-sm sm:text-base leading-tight font-bold",
                            fontClass
                          )}
                        >
                          {primaryTitle}
                        </span>
                        {secondaryTitle && (
                          <span
                            className={cn(
                              "text-xs leading-tight mt-0.5 font-sans opacity-70",
                              isGroupActive ? "text-[#FFE6A0]" : "text-[#8B1538]/70"
                            )}
                          >
                            {secondaryTitle}
                          </span>
                        )}
                      </div>
                    </div>

                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isExpanded && "rotate-180",
                        isGroupActive ? "text-[#FFE6A0]" : "text-[#8B1538]/60"
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="ml-3 pl-2.5 border-l border-[#E8B947]/55 space-y-1.5 py-0.5">
                      {item.children.map((child) => {
                        const isChildActive = isRouteActive(child.href);
                        const ChildIcon = getNavIcon(child.href);
                        const childPrimary = getLocalizedNavTitle(child, locale);
                        const childSecondary =
                          locale === "en" ? child.kannadaTitle : child.title;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all duration-200 select-none min-h-[46px]",
                              isChildActive
                                ? "bg-[#8B1538] text-white shadow-sm font-semibold"
                                : "bg-[#FFF7E2] border border-[#E8B947]/45 text-[#460511] hover:bg-[#FFF1B5] hover:border-[#D49812] hover:text-[#74132A]"
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={cn(
                                  "w-7 h-7 rounded-lg flex items-center justify-center transition-colors",
                                  isChildActive
                                    ? "bg-white/20 text-[#FFE6A0]"
                                    : "bg-white/80 text-[#8B1538] group-hover:bg-[#8B1538] group-hover:text-white"
                                )}
                              >
                                <ChildIcon className="h-3.5 w-3.5" />
                              </div>

                              <div className="flex flex-col">
                                <span
                                  className={cn(
                                    "text-sm leading-tight font-bold",
                                    fontClass
                                  )}
                                >
                                  {childPrimary}
                                </span>
                                {childSecondary && (
                                  <span
                                    className={cn(
                                      "text-[11px] leading-tight mt-0.5 font-sans opacity-70",
                                      isChildActive
                                        ? "text-[#FFE6A0]"
                                        : "text-[#8B1538]/70"
                                    )}
                                  >
                                    {childSecondary}
                                  </span>
                                )}
                              </div>
                            </div>

                            <ChevronRight
                              className={cn(
                                "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                                isChildActive
                                  ? "text-[#FFE6A0]"
                                  : "text-[#8B1538]/40"
                              )}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            if (!item.href) return null;
            const isActive = isRouteActive(item.href);
            const IconComponent = getNavIcon(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center justify-between rounded-xl px-3.5 py-3 text-base transition-all duration-200 select-none min-h-[52px]",
                  isActive
                    ? "bg-[#8B1538] text-white shadow-md font-semibold"
                    : "bg-white/80 border border-[#E8B947]/40 text-[#460511] hover:bg-[#FFF1B5] hover:border-[#D49812] hover:text-[#74132A]"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                      isActive
                        ? "bg-white/20 text-[#FFE6A0]"
                        : "bg-[#FFF9EB] text-[#8B1538] group-hover:bg-[#8B1538] group-hover:text-white"
                    )}
                  >
                    <IconComponent className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-sm sm:text-base leading-tight font-bold",
                        fontClass
                      )}
                    >
                      {primaryTitle}
                    </span>
                    {secondaryTitle && (
                      <span
                        className={cn(
                          "text-xs leading-tight mt-0.5 font-sans opacity-70",
                          isActive ? "text-[#FFE6A0]" : "text-[#8B1538]/70"
                        )}
                      >
                        {secondaryTitle}
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform group-hover:translate-x-1",
                    isActive ? "text-[#FFE6A0]" : "text-[#8B1538]/40"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Drawer Bottom Controls: Language Selection & Direct CTA */}
        <div className="p-4 border-t border-[#8B1538]/15 bg-white/95 space-y-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {/* Language Switcher */}
          <LanguageSwitcher variant="mobile" />

          {/* Book Seva CTA Button */}
          <Link
            href="/sevas"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full min-h-[48px] rounded-lg bg-[#8B1538] font-sans font-bold text-white text-sm sm:text-base shadow-md hover:bg-[#74132A] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Bell className="h-4 w-4 text-[#FFE6A0]" />
            <span>{locale === "kn" ? "ಸೇವೆ ಕಾಯ್ದಿರಿಸಿ" : "Book Seva"}</span>
          </Link>

          {/* Temple Helpline Footer */}
          <div className="pt-2 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#74132A]/80">
              <Phone className="h-3 w-3 text-[#8B1538]" />
              <span>Siddha Parvatha, Somalapura, Raichur</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Mobile Hamburger Toggle Button in Navbar */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 border-2 border-[#8B1538]/40 text-[#74132A] shadow-xs hover:bg-[#8B1538] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] active:scale-95 transition-all"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="h-6 w-6 stroke-[2.5]" /> : <Menu className="h-6 w-6 stroke-[2.5]" />}
      </button>

      {/* Render Portal directly into document.body to avoid parent container stacking / overflow clipping */}
      {mounted && createPortal(drawerContent, document.body)}
    </div>
  );
}
