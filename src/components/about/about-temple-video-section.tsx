"use client";

import React from "react";
import { motion } from "motion/react";
import { Film, ExternalLink } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function AboutTempleVideoSection() {
  const { locale, fontClass } = useContentTranslation();

  const isKn = locale === "kn";
  const isHi = locale === "hi";
  const isTe = locale === "te";

  // Video URL: https://youtu.be/C0eaSUaSj9c?si=XfpYbkPx-YUT_y4z
  const videoId = "C0eaSUaSj9c";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1`;

  return (
    <section
      id="temple-history-video"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9ED] to-[#FFFDF8] text-[#292929] overflow-hidden border-t border-[#E8B947]/30"
      aria-label="History and New Construction Video of Sri Ambadevi Temple"
    >
      {/* Background Subtle Devotional Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D49812]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ========================================================
            1. SECTION HEADER WITH SACRED SRI (श्री)
           ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow Header with Centered Sri Watermark */}
          <div className="relative inline-flex items-center justify-center mb-3 select-none">
            <span
              className="absolute inset-0 flex items-center justify-center font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#D99A00]/30 select-none pointer-events-none -translate-y-0.5 tracking-normal"
              aria-hidden="true"
            >
              श्री
            </span>
            <span
              className={cn(
                "relative z-10 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#D99A00]",
                fontClass
              )}
            >
              {isKn
                ? "ಕ್ಷೇತ್ರ ಸಾಕ್ಷ್ಯಚಿತ್ರ ಮತ್ತು ದರ್ಶನ"
                : isHi
                ? "पावन क्षेत्र वृत्तचित्र एवं दर्शन"
                : isTe
                ? "క్షేత్ర డాక్యుమెంటరీ & దివ్య దర్శనం"
                : "Temple Documentary & Sacred Video Tour"}
            </span>
          </div>

          {/* User Requested Exact Title: ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ ಮತ್ತು ನೂತನ ನಿರ್ಮಾಣದ ಕುರಿತು. */}
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-[#8B1538] leading-tight mb-4 tracking-tight text-balance",
              fontClass
            )}
          >
            {isKn
              ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ ಮತ್ತು ನೂತನ ನಿರ್ಮಾಣದ ಕುರಿತು."
              : isHi
              ? "श्री अम्बादेवी मंदिर का पावन इतिहास एवं नूतन प्रस्तर निर्माण"
              : isTe
              ? "శ్రీ అంబాదేవి దేవాలయ చరిత్ర మరియు నూతన రాతి నిర్మాణం"
              : "History and New Construction of Sri Ambadevi Temple"}
          </h2>

          <p
            className={cn(
              "text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl",
              fontClass
            )}
          >
            {isKn
              ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಸೋಮಲಾಪುರದಲ್ಲಿ 343+ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿ ಸನ್ನಿಧಿಯ ಧಾರ್ಮಿಕ ಹಿನ್ನೆಲೆ, ಅವಧೂತರ ತಪಸ್ಸು ಮತ್ತು ನೂತನ ಶಿಲಾ ಮಂಟಪದ ಭವ್ಯ ನಿರ್ಮಾಣದ ದೃಶ್ಯಾವಳಿ."
              : isHi
              ? "सुक्षेत्र सिद्ध पर्वत सोमलापुर में 343+ वर्षों के ऐतिहासिक महत्व, पूज्य अवधूत जी की तपोभूमि एवं नवनिर्मित भव्य पाषाण मंडप की पावन गाथा।"
              : isTe
              ? "సిద్ధ పర్వత సోమలాపురంలో 343+ సంవత్సరాల చరిత్ర కలిగిన శ్రీ అంబాదేవి క్షేత్రం, అవధూతల తపోమహిమ మరియు నూతన శిలా మండప నిర్మాణ విశేషాలు."
              : "Watch the comprehensive documentary on the 343+ year sacred history, spiritual tapasya of Param Poojya Sri Chidananda Avadhoota, and the majestic newly sculpted granite Shila Mantapa atop Siddha Parvatha."}
          </p>
        </div>

        {/* ========================================================
            2. VIDEO EMBED PLAYER CONTAINER (16:9 RESPONSIVE)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorative Gold Outer Border Frame with Soft Glow */}
          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-br from-[#E8B947] via-[#FFF3D6] to-[#E8B947] shadow-[0_16px_48px_rgba(139,21,56,0.18)] border border-[#D49812]/50">
            {/* Inner Video Frame */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={embedUrl}
                title={
                  isKn
                    ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ ಮತ್ತು ನೂತನ ನಿರ್ಮಾಣದ ಕುರಿತು"
                    : "History and New Construction of Sri Ambadevi Temple Somalapura"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom Info Bar with Audio Hint & YouTube Direct Link */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-xs text-gray-600">
            <div className="inline-flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className={fontClass}>
                {isKn
                  ? "ಧ್ವನಿಯನ್ನು ಆಲಿಸಲು ವಿಡಿಯೋ ಪ್ಲೇಯರ್‌ನಲ್ಲಿ ಸ್ಪೀಕರ್ ಐಕಾನ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ (Unmute)"
                  : isHi
                  ? "ध्वनि सुनने के लिए वीडियो प्लेयर में स्पीकर आइकन पर क्लिक करें (Unmute)"
                  : isTe
                  ? "శబ్దం వినడానికి వీడియో ప్లేయర్‌లో స్పీకర్ ఐకాన్‌పై క్లిక్ చేయండి (Unmute)"
                  : "Click the speaker icon on the player to unmute audio"}
              </span>
            </div>

            <a
              href="https://youtu.be/C0eaSUaSj9c?si=XfpYbkPx-YUT_y4z"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 font-bold text-[#8B1538] hover:text-[#74132A] transition-colors",
                fontClass
              )}
            >
              <Film className="w-3.5 h-3.5 text-[#D49812]" />
              <span>
                {isKn
                  ? "ಯುಟ್ಯೂಬ್‌ನಲ್ಲಿ ಪೂರ್ಣ ವಿಡಿಯೋ ನೋಡಿ"
                  : isHi
                  ? "यूट्यूब पर संपूर्ण वीडियो देखें"
                  : isTe
                  ? "యూట్యూబ్‌లో పూర్తి వీడియో చూడండి"
                  : "Watch Full Video on YouTube"}
              </span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
