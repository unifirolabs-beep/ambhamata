"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Bell,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";
import { SEVAS_ROW_1, SEVAS_ROW_2, OTHER_SEVAS, type SevaItem } from "@/constants/sevas";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

type SevaCategory = "all" | "archana" | "abhishekam" | "special";

export function SevasListing() {
  const [activeCategory, setActiveCategory] = useState<SevaCategory>("all");
  const { t, locale, fontClass } = useContentTranslation();

  const allSevas: (SevaItem & { category: SevaCategory })[] = [
    // Row 1
    { ...SEVAS_ROW_1[0], category: "archana" }, // Madhuve Seva
    { ...SEVAS_ROW_1[1], category: "archana" }, // Javal Seva
    { ...SEVAS_ROW_1[2], category: "archana" }, // Kunkuma Archana
    { ...SEVAS_ROW_1[3], category: "archana" }, // Bilva Archana
    { ...SEVAS_ROW_1[4], category: "archana" }, // Ale Pooja

    // Row 2
    { ...SEVAS_ROW_2[0], category: "special" }, // Thottilu Seva
    { ...SEVAS_ROW_2[1], category: "special" }, // Pallakki Seva
    { ...SEVAS_ROW_2[2], category: "abhishekam" }, // Rudhrabhisheka Seva
    { ...SEVAS_ROW_2[3], category: "abhishekam" }, // Panchabhisheka Seva
    { ...SEVAS_ROW_2[4], category: "special" }, // Belli Rathosthava Seva
    { ...SEVAS_ROW_2[5], category: "abhishekam" }, // Shashwatha Rudhrabhisheka
  ];

  const filteredSevas = activeCategory === "all"
    ? allSevas
    : allSevas.filter((s) => s.category === activeCategory);

  const categories = [
    { id: "all", label: t.sevasPage.tabs.all, count: allSevas.length },
    { id: "archana", label: t.sevasPage.tabs.archana, count: 5 },
    { id: "abhishekam", label: t.sevasPage.tabs.abhishekam, count: 3 },
    { id: "special", label: t.sevasPage.tabs.special, count: 3 },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white text-[#292929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as SevaCategory)}
              className={cn(
                "min-h-[44px] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 select-none active:scale-95",
                fontClass,
                activeCategory === cat.id
                  ? "bg-[#8B1538] text-white shadow-md border-2 border-[#620A20] scale-105"
                  : "bg-[#FFF7E2] text-[#74132A] border border-[#E8B947]/60 hover:bg-[#FFF1B5] hover:border-[#D49812]"
              )}
            >
              <span>{cat.label}</span>
              <span className={cn(
                "ml-2 px-2 py-0.5 rounded-md text-[11px]",
                activeCategory === cat.id ? "bg-white/20 text-white" : "bg-[#8B1538]/10 text-[#8B1538]"
              )}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Sevas Cards Grid with Devotion Yellow Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredSevas.map((seva, idx) => {
              const primaryName =
                locale === "kn" && seva.kannadaName ? seva.kannadaName :
                locale === "hi" && seva.hindiName ? seva.hindiName :
                locale === "te" && seva.teluguName ? seva.teluguName : seva.name;

              const secondaryName =
                locale === "kn" ? seva.name :
                locale === "hi" ? seva.name :
                locale === "te" ? seva.name : seva.kannadaName;

              const description =
                locale === "kn" && seva.kannadaDescription ? seva.kannadaDescription :
                locale === "hi" && seva.hindiDescription ? seva.hindiDescription :
                locale === "te" && seva.teluguDescription ? seva.teluguDescription : seva.description;

              const prasadamLabel =
                locale === "kn" ? "ಪವಿತ್ರ ಪ್ರಸಾದ ಲಭ್ಯ" :
                locale === "hi" ? "पवित्र प्रसाद उपलब्ध" :
                locale === "te" ? "పవిత్ర ప్రసాదం లభ్యం" : "Prasadam included";

              const bookSevaBtn = t.sevasPage.ctaBook;

              return (
                <motion.div
                  key={seva.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={cn(
                    "group p-6 sm:p-7 rounded-2xl flex flex-col justify-between cursor-pointer",
                    "bg-[#FFF7E2] border border-[#E8B947]/40 shadow-xs",
                    "transition-all duration-300 ease-out select-none",
                    "hover:bg-gradient-to-b hover:from-[#FFFCF3] hover:via-[#FFF7E2] hover:to-[#FFF0D4]",
                    "hover:border-[#D49812] hover:shadow-md hover:-translate-y-1.5"
                  )}
                >
                  <div>
                    {/* Top Row: Title */}
                    <div className="mb-2">
                      <h3
                        className={cn(
                          "font-bold text-[#74132A] text-lg sm:text-xl leading-snug transition-colors duration-300 group-hover:text-[#5A0718]",
                          fontClass
                        )}
                      >
                        {primaryName}
                      </h3>
                    </div>

                    {/* Secondary Subtitle */}
                    {secondaryName && (
                      <p className={cn(
                        "text-xs font-semibold mb-3 transition-colors group-hover:text-[#620A20]",
                        locale === "en" ? "font-kannada text-[#8B1538]/80" : "font-sans opacity-70 text-[#8B1538]"
                      )}>
                        {secondaryName}
                      </p>
                    )}

                    {/* 2-line Description */}
                    <p className={cn(
                      "text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-[#460511] group-hover:font-medium",
                      fontClass
                    )}>
                      {description}
                    </p>
                  </div>

                  {/* Bottom Row: Prasadam & Book Button */}
                  <div className="pt-4 border-t border-[#E8B947]/30 flex items-center justify-between transition-colors group-hover:border-[#8B1538]/20">
                    <span className={cn("text-xs text-[#8B1538] font-medium flex items-center gap-1.5 transition-colors group-hover:text-[#5A0718]", fontClass)}>
                      <CheckCircle2 className="h-4 w-4 text-[#D99A00] transition-colors group-hover:text-[#8B1538]" />
                      <span>{prasadamLabel}</span>
                    </span>

                    <Link
                      href={`/contact?seva=${encodeURIComponent(seva.name)}`}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg",
                        "bg-[#8B1538] text-white text-xs font-bold tracking-wide shadow-xs",
                        "transition-all duration-300",
                        "group-hover:bg-[#5A0718] group-hover:shadow-sm",
                        fontClass
                      )}
                    >
                      <span>{bookSevaBtn}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Sacred Vedic Sankalpa Information Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF7E2] border-2 border-[#E8B947]/60 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-md">
                <Bell className="h-6 w-6 text-[#FFE6A0]" />
              </div>
              <div>
                <h4 className={cn("font-bold text-[#8B1538] text-lg sm:text-xl mb-1.5", fontClass)}>
                  {locale === "kn"
                    ? "ವೈದಿಕ ಸಂಕಲ್ಪ ವಿವರಗಳ ಅಗತ್ಯತೆ"
                    : locale === "hi"
                    ? "वैदिक संकल्प विवरण आवश्यकता"
                    : locale === "te"
                    ? "వైదిక సంకల్ప వివరాల ఆవశ్యకత"
                    : "Vedic Sankalpa Details Required"}
                </h4>
                <p className={cn("text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl", fontClass)}>
                  {locale === "kn" ? (
                    <>
                      ಸೇವೆ ಕಾಯ್ದಿರಿಸುವಾಗ ಭಕ್ತಾದಿಗಳು ತಮ್ಮ <strong className="text-[#8B1538]">ಪೂರ್ಣ ಹೆಸರು, ಗೋತ್ರ, ರಾಶಿ ಹಾಗೂ ನಕ್ಷತ್ರ</strong> ವಿವರಗಳನ್ನು ಒದಗಿಸಬೇಕಾಗಿ ವಿನಂತಿ. ದೇವಾಲಯದ ಪುರೋಹಿತರು ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ವೈದಿಕ ಸಂಕಲ್ಪ ಪೂಜೆ ನೆರವೇರಿಸಿ, ಪವಿತ್ರ ಪ್ರಸಾದವನ್ನು ಸಮರ್ಪಿಸುತ್ತಾರೆ.
                    </>
                  ) : locale === "hi" ? (
                    <>
                      सेवा बुक करते समय श्रद्धालु कृपया अपना <strong className="text-[#8B1538]">पूरा नाम, गोत्र, राशि एवं नक्षत्र</strong> विवरण प्रदान करें। मंदिर के पुरोहित आपके नाम से वैदिक संकल्प पूजा संपन्न कर पवित्र प्रसाद अर्पित करेंगे।
                    </>
                  ) : locale === "te" ? (
                    <>
                      సేవ బుక్ చేసే సమయంలో భక్తులు తమ <strong className="text-[#8B1538]">పూర్తి పేరు, గోత్రం, రాశి మరియు నక్షత్రం</strong> వివరాలను తెలియజేయాలని మనవి. ఆలయ పురోహితులు మీ పేరిట వైదిక సంకల్ప పూజను నిర్వహించి, పవిత్ర ప్రసాదాన్ని సమర్పిస్తారు.
                    </>
                  ) : (
                    <>
                      While booking sevas, devotees are requested to provide their <strong className="text-[#8B1538]">Full Name, Gothra, Rashi, and Nakshatra</strong>. The temple purohits perform the archana and sankalpa in your name, and sacred prasadam is offered directly at the sanctum sanctorum.
                    </>
                  )}
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className={cn(
                "shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#8B1538] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#F4C542] hover:text-[#74132A] transition-all hover:scale-105",
                fontClass
              )}
            >
              <Phone className="h-4 w-4" />
              <span>
                {locale === "kn"
                  ? "ದೇವಾಲಯ ಕಚೇರಿ ಸಂಪರ್ಕಿಸಿ"
                  : locale === "hi"
                  ? "मंदिर कार्यालय से संपर्क करें"
                  : locale === "te"
                  ? "ఆలయ కార్యాలయాన్ని సంప్రదించండి"
                  : "Contact Temple Office"}
              </span>
            </Link>
          </div>
        </div>

        {/* Other Special Sevas Panel (Tulaabhara & Kanike) */}
        <div className="rounded-2xl border-2 border-[#E8B947]/60 bg-[#FFF7E2] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF1B5] border border-[#E8B947] p-1.5 flex items-center justify-center shrink-0">
              <Image
                src="/vedic icon.png"
                alt="Offerings"
                width={28}
                height={28}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h2 className={cn("font-bold text-[#8B1538] text-xl sm:text-2xl", fontClass)}>
                {locale === "kn"
                  ? "ಇತರ ವಿಶೇಷ ಸೇವೆಗಳು ಮತ್ತು ಭಕ್ತಿ ಸಮರ್ಪಣೆ"
                  : locale === "hi"
                  ? "अन्य विशेष सेवाएँ एवं भक्ति अर्पण"
                  : locale === "te"
                  ? "ఇతర విశేష సేవలు మరియు భక్తి సమర్పణ"
                  : "Other Special Sevas & Devotional Offerings"}
              </h2>
            </div>
          </div>

          <p className={cn("text-xs sm:text-sm text-gray-700 mb-6 leading-relaxed", fontClass)}>
            {locale === "kn"
              ? "ತುಲಾಭಾರ ಸೇವೆ ಅಥವಾ ಇಚ್ಛಾನುಸಾರ ಭಕ್ತಿ ಕಾಣಿಕೆ (ಹುಂಡಿ ಸಮರ್ಪಣೆ) ಗಾಗಿ ಭಕ್ತರು ನೇರವಾಗಿ ದೇವಾಲಯದ ಆಡಳಿತ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು ಅಥವಾ ಫೋನ್ ಮೂಲಕ ಮಾಹಿತಿ ಪಡೆಯಬಹುದು."
              : locale === "hi"
              ? "तुलाभार सेवा अथवा इच्छानुसार भक्ति अर्पण (हुंडी दान) हेतु श्रद्धालु सीधे मंदिर प्रशासनिक कार्यालय से संपर्क कर सकते हैं अथवा फोन द्वारा विवरण प्राप्त कर सकते हैं।"
              : locale === "te"
              ? "తులాభార సేవ లేదా ఇష్టానుసార భక్తి కానుకల (హుండీ సమర్పణ) కోసం భక్తులు నేరుగా ఆలయ పరిపాలనా కార్యాలయాన్ని సంప్రదించవచ్చు లేదా ఫోన్ ద్వారా వివరాలు తెలుసుకోవచ్చు."
              : "For specific ceremonies such as Tulaabhara Seva or voluntary devotional offerings (Kanike), devotees can contact the temple administration counter directly or coordinate via phone."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OTHER_SEVAS.map((other) => {
              const name =
                locale === "kn" ? (other.kannadaName || other.name) :
                locale === "hi" ? (other.hindiName || other.name) :
                locale === "te" ? (other.teluguName || other.name) : other.name;

              const subName = locale === "en" ? other.kannadaName : other.name;

              const enquireBtn =
                locale === "kn" ? "ವಿವರ ಪಡೆಯಿರಿ" :
                locale === "hi" ? "जानकारी प्राप्त करें" :
                locale === "te" ? "వివరాలు తెలుసుకోండి" : "Enquire Seva";

              return (
                <div
                  key={other.name}
                  className="p-5 rounded-xl bg-white border border-[#E8B947]/50 shadow-xs flex items-center justify-between transition-all hover:border-[#D49812] hover:shadow-sm"
                >
                  <div>
                    <h4 className={cn("font-bold text-[#74132A] text-base sm:text-lg", fontClass)}>
                      {name}
                    </h4>
                    {subName && (
                      <p className={cn("text-xs font-semibold", locale === "en" ? "font-kannada text-[#8B1538]/80" : "font-sans opacity-70 text-[#8B1538]")}>
                        {subName}
                      </p>
                    )}
                  </div>
                  <Link
                    href="/contact#donation"
                    className={cn(
                      "px-4 py-1.5 rounded-lg bg-[#8B1538] text-white text-xs font-bold hover:bg-[#F4C542] hover:text-[#74132A] transition-colors",
                      fontClass
                    )}
                  >
                    {enquireBtn}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
