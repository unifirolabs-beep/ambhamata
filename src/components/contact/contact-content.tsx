"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Landmark, ChevronRight, ExternalLink } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function ContactContent() {
  const { t, locale, fontClass } = useContentTranslation();
  const contact = t.contactPage;

  return (
    <div className="w-full bg-[#FFFDF8] text-[#292929]">
      {/* 1. Header Banner */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#240409] to-[#3A050E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-[#FFE6A0]/25 text-xs sm:text-sm text-[#FFE6A0] mb-6",
              fontClass
            )}
          >
            <Link href="/" className="hover:text-white transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            <span className="text-white/90 font-medium">
              {t.nav.contact}
            </span>
          </nav>

          <div className="flex justify-center mb-2 select-none" aria-hidden="true">
            <span className="font-sans text-3xl sm:text-4xl font-black text-[#FFE6A0]/60 leading-none">
              श्री
            </span>
          </div>

          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#FFE6A0]/90 mb-3 block">
            {contact.hero.eyebrow}
          </span>

          <h1
            className={cn(
              "font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4",
              fontClass
            )}
          >
            {contact.hero.heading}
          </h1>

          <p
            className={cn(
              "text-base sm:text-lg text-[#FFE6A0] max-w-2xl mx-auto",
              fontClass,
              locale === "en" ? "font-sans italic" : "not-italic"
            )}
          >
            {contact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Contact Cards */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            
            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B947]/60 text-[#8B1538] flex items-center justify-center mb-4 shadow-xs">
                  <Phone className="h-6 w-6 text-[#8B1538]" />
                </div>
                <h3 className={cn("text-lg font-bold text-[#8B1538] mb-2", fontClass)}>
                  {contact.info.phoneTitle}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-semibold">
                  {contact.info.phone}
                </p>
              </div>
              <div className={cn("mt-4 pt-3 border-t border-[#E8B947]/30 text-xs text-gray-600", fontClass)}>
                {locale === "kn"
                  ? "ದೈನಂದಿನ ಸೇವಾ ವಿಚಾರಣೆಗಾಗಿ ಕರೆ ಮಾಡಿ"
                  : locale === "hi"
                  ? "दैनिक सेवा एवं दर्शन जानकारी के लिए संपर्क करें"
                  : locale === "te"
                  ? "దైనందిన సేవలు మరియు దర్శన వివరాల కోసం సంప్రదించండి"
                  : "Call for daily seva & darshan queries"}
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B947]/60 text-[#8B1538] flex items-center justify-center mb-4 shadow-xs">
                  <MapPin className="h-6 w-6 text-[#8B1538]" />
                </div>
                <h3 className={cn("text-lg font-bold text-[#8B1538] mb-2", fontClass)}>
                  {contact.info.addressTitle}
                </h3>
                <p className={cn("text-sm text-gray-700 leading-relaxed", fontClass)}>
                  {contact.info.address}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8B947]/30">
                <Link
                  href="https://maps.google.com/?q=Somalapura+Sindhanur+Raichur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1538] hover:text-[#74132A]", fontClass)}
                >
                  <span>
                    {locale === "kn"
                      ? "ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ನೋಡಿ"
                      : locale === "hi"
                      ? "गूगल मैप पर देखें"
                      : locale === "te"
                      ? "గూగుల్ మ్యాప్‌లో చూడండి"
                      : "Open in Google Maps"}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B947]/60 text-[#8B1538] flex items-center justify-center mb-4 shadow-xs">
                  <Clock className="h-6 w-6 text-[#8B1538]" />
                </div>
                <h3 className={cn("text-lg font-bold text-[#8B1538] mb-2", fontClass)}>
                  {contact.info.timingsTitle}
                </h3>
                <p className={cn("text-sm text-gray-700 leading-relaxed", fontClass)}>
                  {contact.info.timings}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8B947]/30">
                <Link
                  href="/timings"
                  className={cn("inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1538] hover:text-[#74132A]", fontClass)}
                >
                  <span>
                    {locale === "kn"
                      ? "ಪೂರ್ಣ ವೇಳಾಪಟ್ಟಿ ವೀಕ್ಷಿಸಿ"
                      : locale === "hi"
                      ? "संपूर्ण समय सारणी देखें"
                      : locale === "te"
                      ? "పూర్తి సమయ పట్టిక చూడండి"
                      : "View Full Daily Schedule"}
                  </span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>

          {/* 3. Donation & Devotional Offerings (#donation anchor) */}
          <div id="donation" className="p-8 sm:p-10 md:p-12 rounded-3xl bg-[#FFF7E2] border border-[#E8B947]/60 shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Landmark className="h-6 w-6 text-[#FFE6A0]" />
                </div>
                <div>
                  <h2 className={cn("text-2xl sm:text-3xl font-bold text-[#8B1538]", fontClass)}>
                    {contact.donation.heading}
                  </h2>
                  <p className={cn("text-xs sm:text-sm text-[#D99A00] font-semibold italic", fontClass)}>
                    {contact.donation.subtitle}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] shadow-xs">
                <ShieldCheck className="h-4 w-4 text-[#D99A00]" />
                <span className={fontClass}>
                  {locale === "kn"
                    ? "ಅಧಿಕೃತ ದೇವಸ್ಥಾನ ರಸೀದಿ"
                    : locale === "hi"
                    ? "आधिकारिक मंदिर रसीद"
                    : locale === "te"
                    ? "అధికారిక ఆలయ రసీదు"
                    : "Official Temple Receipt"}
                </span>
              </div>
            </div>

            <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed mb-6", fontClass)}>
              {contact.donation.description}
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E8B947]/40 text-xs sm:text-sm text-[#74132A] font-medium leading-relaxed mb-6">
              <p className={fontClass}>{contact.donation.hundiNote}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/sevas"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#8B1538] text-white font-bold text-sm shadow-md hover:bg-[#74132A] transition-all active:scale-95",
                  fontClass
                )}
              >
                <span>
                  {locale === "kn"
                    ? "ಸೇವೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ"
                    : locale === "hi"
                    ? "सेवाएँ एवं पूजा देखें"
                    : locale === "te"
                    ? "పూజా సేవలను పరిశీలించండి"
                    : "Explore Sevas & Poojas"}
                </span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
