"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { PageContainer } from "@/components/layout/page-container";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t, locale, fontClass } = useContentTranslation();

  return (
    <footer
      className={cn(
        "mt-auto border-t border-border/20 bg-brand-cream/60 text-foreground",
        className
      )}
    >
      <PageContainer size="wide" className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Temple Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 rounded-full bg-white p-0.5 shadow-sm ring-1 ring-brand-red/30">
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.name} Emblem`}
                  width={44}
                  height={44}
                  unoptimized
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
              <div>
                <h3 className={cn("font-bold text-brand-red text-base", fontClass)}>
                  {t.header.templeName}
                </h3>
                <p className={cn("text-xs text-muted-foreground", fontClass)}>
                  {t.header.templeSubtitle}
                </p>
              </div>
            </div>
            <p className={cn("text-sm text-muted-foreground leading-relaxed", fontClass)}>
              {t.footer.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className={cn("text-sm font-bold uppercase tracking-wider text-brand-red", fontClass)}>
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navItems.slice(0, 4).map((item) => {
                const label =
                  locale === "kn" ? (item.kannadaTitle || item.title) :
                  locale === "hi" ? (item.hindiTitle || item.title) :
                  locale === "te" ? (item.teluguTitle || item.title) : item.title;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-foreground/80 hover:text-brand-red transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red rounded",
                        fontClass
                      )}
                    >
                      <span>•</span>
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Devotional Services */}
          <div className="space-y-3">
            <h4 className={cn("text-sm font-bold uppercase tracking-wider text-brand-red", fontClass)}>
              {t.footer.sevasTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navItems.slice(4).map((item) => {
                const label =
                  locale === "kn" ? (item.kannadaTitle || item.title) :
                  locale === "hi" ? (item.hindiTitle || item.title) :
                  locale === "te" ? (item.teluguTitle || item.title) : item.title;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-foreground/80 hover:text-brand-red transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red rounded",
                        fontClass
                      )}
                    >
                      <span>•</span>
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Darshan Timings & Sacred Note */}
          <div className="space-y-3 rounded-lg border border-brand-red/15 bg-[#FFF7E2] p-5 shadow-temple-sm">
            <h4 className={cn("text-sm font-bold text-brand-red", fontClass)}>
              {t.footer.darshanTitle}
            </h4>
            <div className="text-xs space-y-1.5 text-muted-foreground">
              <p className="flex justify-between">
                <span>{t.footer.morningLabel}</span>
                <span className="font-semibold text-foreground">{t.footer.morningTime}</span>
              </p>
              <p className="flex justify-between">
                <span>{t.footer.eveningLabel}</span>
                <span className="font-semibold text-foreground">{t.footer.eveningTime}</span>
              </p>
            </div>
            <p className={cn("text-xs text-brand-red-dark pt-2 border-t border-border/20", fontClass)}>
              {locale === "kn"
                ? "ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು"
                : locale === "hi"
                ? "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
                : locale === "te"
                ? "సర్వే జనాః సుఖినో భవంతు"
                : "May all beings everywhere be happy and free"}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-brand-red/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p className={fontClass}>
            &copy; {currentYear} {t.footer.copyright}
          </p>
          <p className={fontClass}>{t.footer.trustTitle}</p>
        </div>
      </PageContainer>
    </footer>
  );
}
