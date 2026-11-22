"use client";

import React from "react";
import { motion } from "motion/react";
import { Film, ExternalLink } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function TempleTransitionVideoSection() {
  const { locale, fontClass } = useContentTranslation();

  const isKn = locale === "kn";
  const isHi = locale === "hi";
  const isTe = locale === "te";

  // Video URL: https://youtu.be/5YJexkm9UoQ?si=6wku370k24QdSIbE
  const videoId = "5YJexkm9UoQ";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1`;

  return (
    <section
      id="temple-transition-video"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EC] to-[#FFFDF8] text-[#292929] overflow-hidden border-t border-[#E8B947]/35"
      aria-label="Temple Transition from Old to New Stone Temple"
    >
      {/* Background Soft Glow */}
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
                ? "ಕ್ಷೇತ್ರ ಜೀರ್ಣೋದ್ಧಾರ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ ರೂಪಾಂತರ"
                : isHi
                ? "मंदिर जीर्णोद्धार एवं वास्तुकला रूपांतरण"
                : isTe
                ? "ఆలయ జీర్ణోద్ధరణ & వాస్తుశిల్ప పరివర్తన"
                : "Temple Transformation: Old to New Stone Mantapa"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-[#8B1538] leading-tight mb-4 tracking-tight text-balance",
              fontClass
            )}
          >
            {isKn
              ? "ಪುರಾತನ ದೇವಾಲಯದಿಂದ ನೂತನ ಶಿಲಾ ಮಂಟಪ: ಶ್ರೀ ಅಂಬಾದೇವಿ ಸನ್ನಿಧಿಯ ಭವ್ಯ ರೂಪಾಂತರ"
              : isHi
              ? "पुरातन मंदिर से नूतन प्रस्तर मंडप: श्री अम्बादेवी धाम का पावन कायाकल्प"
              : isTe
              ? "పురాతన ఆలయం నుండి నూతన రాతి మండపం: శ్రీ అంబాదేవి క్షేత్ర మహా పరివర్తన"
              : "Temple Transition: From Heritage Shrine to the Newly Sculpted Granite Mantapa"}
          </h2>

          <p
            className={cn(
              "text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl",
              fontClass
            )}
          >
            {isKn
              ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಸೋಮಲಾಪುರದ ಶತಮಾನಗಳ ಪುರಾತನ ಐತಿಹಾಸಿಕ ದೇವಾಲಯವು ನೂತನ ಏಕಶಿಲಾ ಗ್ರಾನೈಟ್ ಶಿಲಾ ಮಂಟಪವಾಗಿ ಪುನರುತ್ಥಾನಗೊಂಡ ಅದ್ಭುತ ಧಾರ್ಮಿಕ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ ಪ್ರಯಾಣವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ."
              : isHi
              ? "सुक़्षेत्र सिद्ध पर्वत सोमलापुर के सदियों प्राचीन ऐतिहासिक मंदिर का नवनिर्मित भव्य प्रस्तर शिला मंडप में पावन रूपांतरण की अलौकिक दृश्यगाथा।"
              : isTe
              ? "సిద్ధ పర్వత సోమలాపురంలోని శతాబ్దాల పురాతన ఆలయం నూతన గ్రానైట్ రాతి మండపంగా పునర్నిర్మితమైన అద్భుత ఆధ్యాత్మిక ప్రయాణం."
              : "Experience the inspiring architectural transformation of Sri Ambadevi Devasthana, transitioning from its historic ancient sanctum into a magnificent hand-sculpted granite Shila Mantapa atop Siddha Parvatha."}
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
          {/* Decorative Gold Outer Border Frame with Soft Shadow */}
          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-br from-[#E8B947] via-[#FFF3D6] to-[#E8B947] shadow-[0_16px_48px_rgba(139,21,56,0.18)] border border-[#D49812]/50">
            {/* Inner Video Frame */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={embedUrl}
                title={
                  isKn
                    ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಜೀರ್ಣೋದ್ಧಾರ ಮತ್ತು ನೂತನ ಶಿಲಾ ಮಂಟಪ ರೂಪಾಂತರ"
                    : "Sri Ambadevi Temple Transition: Old Temple to New Granite Stone Mantapa"
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
              href="https://youtu.be/5YJexkm9UoQ?si=6wku370k24QdSIbE"
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
                  ? "ಯುಟ್ಯೂಬ್‌ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ"
                  : isHi
                  ? "यूट्यूब पर देखें"
                  : isTe
                  ? "యూట్యూబ్‌లో చూడండి"
                  : "Watch on YouTube"}
              </span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
