"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ChevronRight, MapPin, Calendar, Compass, ShieldCheck } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function AboutHeroBanner() {
  const { locale, fontClass, isKannada } = useContentTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#460511] text-white">
      {/* Background Banner Image - Responsive Desktop & Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Temple Architecture Banner (1440x591) */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="hidden md:block relative w-full h-full"
        >
          <Image
            src="/home-hero-desktop.png"
            alt="Sri Ambamata Devasthana Sacred Temple Architecture"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-right brightness-[1.02]"
          />
        </motion.div>

        {/* Mobile Temple Architecture Banner (402x874) */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="block md:hidden relative w-full h-full"
        >
          <Image
            src="/home-hero-mobile.png"
            alt="Sri Ambamata Devasthana Temple Architecture Mobile Banner"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-bottom brightness-[1.02]"
          />
        </motion.div>

        {/* Desktop Gradient Overlay (Text contrast on left, vibrant temple architecture on right) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#2B040B]/95 via-[#3D0611]/82 via-55% to-[#2B040B]/35" />

        {/* Mobile Gradient Overlay (Top text contrast, visible bottom architecture) */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#2B040B]/90 via-[#3D0611]/72 via-50% to-[#2B040B]/85" />
        
        {/* Ambient Top & Bottom Glows */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#460511] to-transparent" />
      </div>

      {/* Content Container with Staggered Entrance */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 flex flex-col items-center text-center"
      >
        {/* Breadcrumb Navigation */}
        <motion.nav
          variants={itemVariants}
          aria-label="Breadcrumb"
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-[#FFE6A0]/25 text-xs sm:text-sm text-[#FFE6A0] mb-6 transition-all hover:bg-black/50",
            isKannada && "font-kannada"
          )}
        >
          <Link href="/" className="hover:text-white transition-colors">
            {isKannada ? "ಮುಖಪುಟ" : "Home"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-white/90 font-medium">
            {isKannada ? "ದೇವಾಲಯದ ಬಗ್ಗೆ" : "About Kshetra"}
          </span>
        </motion.nav>

        {/* Sacred Invocation Mantra */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-3">
          <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-[#FFE6A0] tracking-wide drop-shadow-sm">
            || ॐ श्री अम्बादेव्यै नमಃ ||
          </span>
        </motion.div>

        {/* Main Sacred Kshetra Title */}
        <motion.h1
          variants={itemVariants}
          className={cn(
            "font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-4",
            fontClass,
            isKannada && "leading-[1.25]"
          )}
        >
          {locale === "kn" ? (
            <>
              ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ <br className="hidden sm:block" />
              <span className="text-[#FFE6A0]">ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠ</span>
            </>
          ) : locale === "hi" ? (
            <>
              सुक्षेत्र सिद्ध पर्वत <br className="hidden sm:block" />
              <span className="text-[#FFE6A0]">शक्तिपीठ अम्बामाता</span>
            </>
          ) : locale === "te" ? (
            <>
              సుక్షేత్ర సిద్ధ పర్వత <br className="hidden sm:block" />
              <span className="text-[#FFE6A0]">శక్తిపీఠం అంబామాత</span>
            </>
          ) : (
            <>
              Sukṣhetra Siddha Parvatha <br className="hidden sm:block" />
              <span className="text-[#FFE6A0]">Shaktipeeth Ambamath</span>
            </>
          )}
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-base sm:text-lg md:text-xl text-[#FCE48C] max-w-2xl leading-relaxed mb-6",
            fontClass,
            locale === "en" ? "font-sans italic" : "not-italic"
          )}
        >
          {locale === "kn"
            ? "ದಿವ್ಯ ಮಾತೃಶಕ್ತಿ, ಆಧ್ಯಾತ್ಮಿಕ ಜ್ಞಾನ ಮತ್ತು ಶಾಶ್ವತ ಭಕ್ತಿಯ ಪವಿತ್ರ ಸನ್ನಿಧಿ"
            : locale === "hi"
            ? "दिव्य मातृशक्ति, आध्यात्मिक ज्ञान एवं शाश्वत भक्ति का पावन सानिध्य"
            : locale === "te"
            ? "దివ్య మాతృశక్తి, ఆధ్యాత్మిక జ్ఞానం మరియు శాశ్వత భక్తికి పవిత్ర నిలయం"
            : "A Divine Centre of Shakti, Spiritual Enlightenment and Eternal Devotion"}
        </motion.p>

        {/* Geographical Context & Location Note */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-xs sm:text-sm md:text-base text-white/90 max-w-3xl leading-relaxed font-light mb-10",
            fontClass
          )}
        >
          {locale === "kn" ? (
            <>
              ಕರ್ನಾಟಕದ ರಾಯಚೂರು ಜಿಲ್ಲೆ ಸಿಂಧನೂರು ತಾಲೂಕಿನ ಸೋಮಲಾಪುರದ ಸಿದ್ಧ ಪರ್ವತದ ಪ್ರಶಾಂತ ಗಿರಿ ಪರಿಸರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಈ ಪವಿತ್ರ ಕ್ಷೇತ್ರವು, <strong className="text-[#FFE6A0] font-semibold">ಶ್ರೀ ಅಂಬಾದೇವಿಯ</strong> ದಿವ್ಯ ಸನ್ನಿಧಾನವಾಗಿದ್ದು, ೩೪೩+ ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚಿನ ನಿರಂತರ ವೈದಿಕ ಶ್ರದ್ಧೆ ಹಾಗೂ ತಪಸ್ಸಿನ ಪವಿತ್ರ ತಾಣವಾಗಿದೆ.
            </>
          ) : locale === "hi" ? (
            <>
              कर्नाटक के रायचूर जिले के सिंधनूर तालुक अंतर्गत सोमलापुर के सिद्ध पर्वत की शांत गिरिश्रृंखला में स्थित यह पावन क्षेत्र, <strong className="text-[#FFE6A0] font-semibold">श्री अम्बादेवी</strong> का दिव्य सानिध्य है, जो ३४३+ से अधिक वर्षों की अनवरत वैदिक आस्था और तपस्या का पावन धाम है।
            </>
          ) : locale === "te" ? (
            <>
              కర్ణాటకలోని రాయచూరు జిల్లా సింధనూరు తాలూకా సోమలాపుర సిద్ధ పర్వత ప్రశాంత గిరి పరిసరాలలో వెలసిన ఈ పవిత్ర క్షేత్రం, <strong className="text-[#FFE6A0] font-semibold">శ్రీ అంబాదేవి</strong> దివ్య సన్నిధానమై, 343+ సంవత్సరాల నిరంతర వైదిక భక్తి మరియు తపస్సులకు నిలయమైన పుణ్యక్షేత్రం.
            </>
          ) : (
            <>
              Located amidst the sacred and tranquil surroundings of Siddha Parvatha at Somalapura, Sindhanur Taluk, Raichur District, Karnataka — a revered spiritual centre dedicated to <strong className="text-[#FFE6A0] font-semibold">Sri Ambadevi</strong>, embodying over three centuries of unbroken Vedic faith and saintly penance.
            </>
          )}
        </motion.p>

        {/* 4 Quick Kshetra Highlight Badges */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <Calendar className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "೩೪೩+ ವರ್ಷಗಳು" : locale === "hi" ? "३४३+ वर्ष" : locale === "te" ? "343+ సంవత్సరాలు" : "343+ Years"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "ದಾಖಲಿತ ಇತಿಹಾಸ" : locale === "hi" ? "प्रमाणित इतिहास" : locale === "te" ? "చారిత్రక వారసత్వం" : "Documented History"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <ShieldCheck className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "ಶಕ್ತಿಪೀಠ" : locale === "hi" ? "शक्तिपीठ" : locale === "te" ? "శక్తిపీఠం" : "Shaktipeeth"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "ಶ್ರೀ ಬಗಳಾ ಚಕ್ರ" : locale === "hi" ? "श्री बगलामुखी चक्र" : locale === "te" ? "శ్రీ బగలాముఖి చక్రం" : "Shree Bagala Chakra"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <Compass className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "ತಪೋಭೂಮಿ" : locale === "hi" ? "तपोभूमि" : locale === "te" ? "తపోభూమి" : "Tapobhoomi"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರು" : locale === "hi" ? "श्री चिदानंद अवधूत" : locale === "te" ? "శ్రీ చిదానంద అవధూత" : "Sri Chidananda Avadhoota"}
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-[#E8B947]/30 text-left transition-all duration-300 hover:bg-black/50 hover:border-[#F4C542] hover:-translate-y-1">
            <MapPin className="h-6 w-6 text-[#F4C542] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className={cn("block font-bold text-sm sm:text-base text-[#FFE6A0]", fontClass)}>
                {locale === "kn" ? "ಸಿದ್ಧ ಪರ್ವತ" : locale === "hi" ? "सिद्ध पर्वत" : locale === "te" ? "సిద్ధ పర్వతం" : "Siddha Parvatha"}
              </span>
              <span className={cn("text-[11px] sm:text-xs text-white/80", fontClass)}>
                {locale === "kn" ? "ರಾಯಚೂರು, ಕರ್ನಾಟಕ" : locale === "hi" ? "रायचूर, कर्नाटक" : locale === "te" ? "రాయచూరు, కర్ణాటక" : "Raichur, Karnataka"}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
