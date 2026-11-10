"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Sun,
  Moon,
  CheckCircle2,
  Clock,
  ArrowDown,
  ShieldCheck,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function TimingsIntroSection() {
  const { t, locale, fontClass } = useContentTranslation();
  const intro = t.timingsPage.intro;

  const scrollToSchedule = () => {
    const el = document.getElementById("daily-pooja-schedule");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#FCFBF8] to-white text-[#292929] overflow-hidden">
      
      {/* Ambient Decorative Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#F4C542]/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ========================================================
            1. SACRED SECTION HEADER
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-12"
        >
          {/* Section Eyebrow Name with Sacred Sri (श्री) in Background (Medium Size) */}
          <div className="relative inline-flex items-center justify-center mb-3 select-none">
            <span
              className="absolute inset-0 flex items-center justify-center font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#D99A00]/35 select-none pointer-events-none -translate-y-0.5 tracking-normal"
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
              {intro.eyebrow}
            </span>
          </div>

          {/* Main Section Heading */}
          <h2
            className={cn(
              "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl text-[#8B1538] tracking-tight leading-tight mb-3 text-center text-balance",
              fontClass
            )}
          >
            {intro.heading}
          </h2>

          {/* Subtitle */}
          <p
            className={cn(
              "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
              fontClass
            )}
          >
            {intro.subtitle}
          </p>
        </motion.div>

        {/* ========================================================
            2. THE SACRED NARRATIVE CONTENT (CLEAN, NO ENCLOSING CARD BOX)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-14"
        >
          <p className={cn("text-base sm:text-lg md:text-xl text-[#74132A] font-sans font-bold leading-relaxed", fontClass)}>
            {intro.p1}
          </p>
          <p className={cn("text-sm sm:text-base md:text-[17px] text-[#4A4A4A] leading-relaxed", fontClass)}>
            {intro.p2}
          </p>
        </motion.div>

        {/* ========================================================
            3. THE TWIN SACRED DARSHAN PAVILIONS (#FFF7E2 Code)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8">
          
          {/* ---------------------------------------------------- */}
          {/* PAVILION 1: MORNING DARSHAN                          */}
          {/* ---------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl bg-[#FFF7E2] text-[#292929] p-5 sm:p-7 md:p-9 shadow-xs border border-[#E8B947]/60 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#D49812]"
          >
            <div>
              {/* Card Top: Sun Emblem + Title */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E8B947]/40">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-white border border-[#E8B947]/50 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Sun className="h-6 w-6 text-[#D99A00]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D99A00] block">
                      {locale === "kn"
                        ? "ಪ್ರಥಮ ದರ್ಶನ"
                        : locale === "hi"
                        ? "प्रथम दर्शन"
                        : locale === "te"
                        ? "ప్రథమ దర్శనం"
                        : "SURYA PRATHAMA DARSHANA"}
                    </span>
                    <h3 className={cn("text-xl sm:text-2xl font-sans font-extrabold text-[#8B1538]", fontClass)}>
                      {locale === "kn"
                        ? "ಬೆಳಗಿನ ದರ್ಶನ"
                        : locale === "hi"
                        ? "प्रातः दर्शन"
                        : locale === "te"
                        ? "ఉదయపు దర్శనం"
                        : "Morning Darshan"}
                    </h3>
                  </div>
                </div>

                <span className={cn("text-[11px] font-bold px-3 py-1 rounded-md bg-[#FFF3D6] text-[#8B1538] border border-[#E8B947]/60", fontClass)}>
                  {locale === "kn"
                    ? "ಬೆಳಿಗ್ಗೆ"
                    : locale === "hi"
                    ? "प्रातः"
                    : locale === "te"
                    ? "ఉదయం"
                    : "Morning"}
                </span>
              </div>

              {/* Prominent Timings Display */}
              <div className="mb-6 p-5 rounded-2xl bg-white border border-[#E8B947]/50 text-center shadow-xs">
                <span className={cn("text-xs uppercase tracking-widest text-[#8B1538] block mb-1 font-bold", fontClass)}>
                  {intro.morningLabel}
                </span>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-[#74132A] tracking-tight drop-shadow-2xs">
                  {intro.morningTime}
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF3D6] text-[#8B1538] text-xs font-bold border border-[#E8B947]/40">
                  <Clock className="h-3 w-3 text-[#D99A00]" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "7½ ಗಂಟೆಗಳ ನಿರಂತರ ದರ್ಶನ"
                      : locale === "hi"
                      ? "7.5 घंटे निरंतर दर्शन"
                      : locale === "te"
                      ? "7.5 గంటల నిరంతర దర్శనం"
                      : "7.5 Hours Continuous Darshan"}
                  </span>
                </div>
              </div>

              {/* Rituals in this Slot */}
              <div className="space-y-2.5 mb-6 text-sm">
                <div className="flex items-start gap-2.5 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-[#D99A00] shrink-0 mt-0.5" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "ಕಾಕಡ ಆರತಿ & ಮುಂಜಾನೆ ದೀಪಾರಾಧನೆ (6:00 AM)"
                      : locale === "hi"
                      ? "काकड़ आरती एवं प्रातः दीपाराधना (6:00 AM)"
                      : locale === "te"
                      ? "కాకడ హారతి & ఉదయపు దీపారాధన (6:00 AM)"
                      : "Kakada Aarti & Morning Light Offering (6:00 AM)"}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-[#D99A00] shrink-0 mt-0.5" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "ರುದ್ರಾಭಿಷೇಕ & ಪಂಚಾಮೃತಾಭಿಷೇಕ ಪೂಜೆ (7:00 AM – 9:00 AM)"
                      : locale === "hi"
                      ? "रुद्राभिषेक एवं पंचामृताभिषेक पूजा (7:00 AM – 9:00 AM)"
                      : locale === "te"
                      ? "రుద్రాభిషేకం & పంచామృతాభిషేక పూజ (7:00 AM – 9:00 AM)"
                      : "Rudrabhisheka & Panchamrutha Abhisheka (7:00 AM – 9:00 AM)"}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-[#D99A00] shrink-0 mt-0.5" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "ಶ್ರೀ ದೇವಿ ಅಲಂಕಾರ & ಸಾರ್ವಜನಿಕ ಅರ್ಚನೆ (9:00 AM – 10:00 AM)"
                      : locale === "hi"
                      ? "श्री देवी श्रृंगार एवं सार्वजनिक अर्चना (9:00 AM – 10:00 AM)"
                      : locale === "te"
                      ? "శ్రీ దేవీ అలంకారం & సార్వజనిక అర్చన (9:00 AM – 10:00 AM)"
                      : "Sri Devi Alankara & Public Archana (9:00 AM – 10:00 AM)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status Indicator */}
            <div className="pt-3 border-t border-[#E8B947]/40 flex items-center justify-between text-xs text-gray-600">
              <span className={fontClass}>
                {locale === "kn"
                  ? "ಸಾರ್ವಜನಿಕ ಭಕ್ತರಿಗೆ ಮುಕ್ತ ಪ್ರವೇಶ"
                  : locale === "hi"
                  ? "सभी भक्तों का सप्रेम स्वागत"
                  : locale === "te"
                  ? "భక్తులందరికీ సాదర స్వాగతం"
                  : "All Devotees Welcome"}
              </span>
              <span className={cn("font-bold text-[#8B1538]", fontClass)}>
                {locale === "kn"
                  ? "ಮುಂಜಾನೆ 6:00 ರಿಂದ"
                  : locale === "hi"
                  ? "प्रातः 6:00 से"
                  : locale === "te"
                  ? "ఉదయం 6:00 నుండి"
                  : "From 6:00 AM"}
              </span>
            </div>
          </motion.div>

          {/* ---------------------------------------------------- */}
          {/* PAVILION 2: EVENING DARSHAN                          */}
          {/* ---------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl bg-[#FFF7E2] text-[#292929] p-5 sm:p-7 md:p-9 shadow-xs border border-[#E8B947]/60 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#D49812]"
          >
            <div>
              {/* Card Top: Moon Emblem + Title */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E8B947]/40">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-white border border-[#E8B947]/50 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Moon className="h-6 w-6 text-[#8B1538]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D99A00] block">
                      {locale === "kn"
                        ? "ಸಾಯಂ ಸಂಧ್ಯಾ ದರ್ಶನ"
                        : locale === "hi"
                        ? "सायं संध्या दर्शन"
                        : locale === "te"
                        ? "సాయం సంధ్యా దర్శనం"
                        : "SANDHYA PRADOSHA DARSHANA"}
                    </span>
                    <h3 className={cn("text-xl sm:text-2xl font-sans font-extrabold text-[#8B1538]", fontClass)}>
                      {locale === "kn"
                        ? "ಸಂಜೆಯ ದರ್ಶನ"
                        : locale === "hi"
                        ? "सायंकालीन दर्शन"
                        : locale === "te"
                        ? "సాయంత్రపు దర్శనం"
                        : "Evening Darshan"}
                    </h3>
                  </div>
                </div>

                <span className={cn("text-[11px] font-bold px-3 py-1 rounded-md bg-[#FFF3D6] text-[#8B1538] border border-[#E8B947]/60", fontClass)}>
                  {locale === "kn"
                    ? "ಸಂಜೆ"
                    : locale === "hi"
                    ? "सायं"
                    : locale === "te"
                    ? "సాయంత్రం"
                    : "Evening"}
                </span>
              </div>

              {/* Prominent Timings Display */}
              <div className="mb-6 p-5 rounded-2xl bg-white border border-[#E8B947]/50 text-center shadow-xs">
                <span className={cn("text-xs uppercase tracking-widest text-[#8B1538] block mb-1 font-bold", fontClass)}>
                  {intro.eveningLabel}
                </span>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-[#74132A] tracking-tight drop-shadow-2xs">
                  {intro.eveningTime}
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF3D6] text-[#8B1538] text-xs font-bold border border-[#E8B947]/40">
                  <Clock className="h-3 w-3 text-[#D99A00]" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "4½ ಗಂಟೆಗಳ ಸಂಜೆಯ ದರ್ಶನ"
                      : locale === "hi"
                      ? "4.5 घंटे सायंकालीन दर्शन"
                      : locale === "te"
                      ? "4.5 గంటల సాయంత్రపు దర్శనం"
                      : "4.5 Hours Evening Darshan"}
                  </span>
                </div>
              </div>

              {/* Rituals in this Slot */}
              <div className="space-y-2.5 mb-6 text-sm">
                <div className="flex items-start gap-2.5 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-[#D99A00] shrink-0 mt-0.5" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "ಸಂಧ್ಯಾ ದೀಪಾರಾಧನೆ & ಪವಿತ್ರ ಪ್ರದಕ್ಷಿಣೆ (4:00 PM)"
                      : locale === "hi"
                      ? "संध्या दीपाराधना एवं पवित्र प्रदक्षिणा (4:00 PM)"
                      : locale === "te"
                      ? "సంధ్యా దీపారాధన & పవిత్ర ప్రదక్షిణ (4:00 PM)"
                      : "Sandhya Deeparadhana & Sanctum Pradakshina"}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-[#D99A00] shrink-0 mt-0.5" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "ಭಕ್ತರ ಕುಂಕುಮಾರ್ಚನೆ & ವಿಶೇಷ ಪ್ರಾರ್ಥನೆಗಳು"
                      : locale === "hi"
                      ? "भक्त कुंकुमार्चना एवं विशेष प्रार्थनाएँ"
                      : locale === "te"
                      ? "భక్తుల కుంకుమార్చన & విశేష ప్రార్థనలు"
                      : "Devotee Kumkumarchana & Special Prayers"}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-[#D99A00] shrink-0 mt-0.5" />
                  <span className={fontClass}>
                    {locale === "kn"
                      ? "ಮಹಾ ಮಂಗಳಾರತಿ ಮಹೋತ್ಸವ (8:00 PM – 8:30 PM)"
                      : locale === "hi"
                      ? "महा मंगलारती महोत्सव (8:00 PM – 8:30 PM)"
                      : locale === "te"
                      ? "మహా మంగళహారతి మహోత్సవం (8:00 PM – 8:30 PM)"
                      : "Grand Maha Mangalarati (8:00 PM – 8:30 PM)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status Indicator */}
            <div className="pt-3 border-t border-[#E8B947]/40 flex items-center justify-between text-xs text-gray-600">
              <span className={fontClass}>
                {locale === "kn"
                  ? "ದಿನದ ಅಂತಿಮ ದೀಪಾರಾಧನೆ"
                  : locale === "hi"
                  ? "दिवस की अंतिम दीपाराधना"
                  : locale === "te"
                  ? "రోజు చివరి పవిత్ర దీపారాధన"
                  : "Sacred Final Offering"}
              </span>
              <span className={cn("font-bold text-[#8B1538]", fontClass)}>
                {locale === "kn"
                  ? "ರಾತ್ರಿ 8:30 ರವರೆಗೆ"
                  : locale === "hi"
                  ? "रात्रि 8:30 तक"
                  : locale === "te"
                  ? "రాత్రి 8:30 వరకు"
                  : "Till 8:30 PM"}
              </span>
            </div>
          </motion.div>

        </div>

        {/* ========================================================
            4. CONNECTING DEVOTEE ASSURANCE STRIP & SCHEDULE JUMP
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="p-5 sm:p-6 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/60 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="h-11 w-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-[#FFE6A0]" />
            </div>
            <div>
              <span className={cn("block text-sm sm:text-base font-bold text-[#8B1538]", fontClass)}>
                {intro.note}
              </span>
              <span className={cn("text-xs text-[#666]", fontClass)}>
                {locale === "kn"
                  ? "ವಿಶೇಷ ಹಬ್ಬ ಹಾಗೂ ಜಾತ್ರಾ ದಿನಗಳಲ್ಲಿ ದರ್ಶನ ಸಮಯದಲ್ಲಿ ಬದಲಾವಣೆಗಳಿರಬಹುದು"
                  : locale === "hi"
                  ? "विशेष उत्सव एवं पर्व के दिनों में दर्शन समय में परिवर्तन हो सकता है"
                  : locale === "te"
                  ? "ప్రత్యేక పండుగలు మరియు ఉత్సవ దినాలలో దర్శన సమయాల్లో మార్పులు ఉండవచ్చు"
                  : "Festival and special utsav occasions may observe extended schedules"}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToSchedule}
            className={cn(
              "group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg shrink-0",
              "bg-[#8B1538] text-white text-xs sm:text-sm font-bold font-sans",
              "hover:bg-[#74132A] hover:scale-105 active:scale-95 transition-all shadow-md",
              fontClass
            )}
          >
            <span>
              {locale === "kn"
                ? "ದೈನಂದಿನ ಪೂಜಾ ವೇಳಾಪಟ್ಟಿ ನೋಡಿ"
                : locale === "hi"
                ? "दैनिक पूजा समय सारणी देखें"
                : locale === "te"
                ? "దైనందిన పూజా సమయ పట్టిక చూడండి"
                : "View Daily Pooja Schedule"}
            </span>
            <ArrowDown className="h-4 w-4 text-[#FFE6A0] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
