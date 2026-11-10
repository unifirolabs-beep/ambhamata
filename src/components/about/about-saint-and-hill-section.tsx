"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { HeartHandshake } from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function AboutSaintAndHillSection() {
  const { t, locale, fontClass, isKannada } = useContentTranslation();
  const s2 = t.aboutPage.section2;
  const s3 = t.aboutPage.section3;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9E6] to-[#FFF3D6] text-[#292929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ========================================================
            SECTION 2: PARAM POOJYA SRI CHIDANANDA AVADHOOTA
           ======================================================== */}
        <div className="mb-20">
          {/* Header with Smooth Viewport Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12"
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
                  isKannada && "font-kannada tracking-wide"
                )}
              >
                {s2.eyebrow}
              </span>
            </div>

            <h2
              className={cn(
                "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] text-[#8B1538] tracking-tight leading-tight mb-2.5 text-center text-balance max-w-4xl",
                isKannada && "font-kannada"
              )}
            >
              {s2.heading}
            </h2>

            <p
              className={cn(
                "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
                isKannada && "font-kannada not-italic"
              )}
            >
              {s2.subtitle}
            </p>
          </motion.div>

          {/* Saint Story Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs transition-all duration-300 hover:shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div
                className={cn(
                  "lg:col-span-8 space-y-4 text-base sm:text-lg leading-relaxed text-[#292929]",
                  isKannada && "font-kannada text-base"
                )}
              >
                <p>{s2.p1}</p>
                <p>{s2.p2}</p>
                <p>{s2.p3}</p>

                {/* The Universal Compassionate Prayer Quote Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-[#8B1538] shadow-xs my-4 transition-all duration-300 hover:shadow-md"
                >
                  <h4 className={cn("font-bold text-[#8B1538] text-base sm:text-lg mb-2 flex items-center gap-2", fontClass)}>
                    <HeartHandshake className="h-5 w-5 text-[#D99A00]" />
                    <span>{s2.prayerEyebrow}</span>
                  </h4>
                  <p className={cn("text-sm sm:text-base text-[#460511] leading-relaxed", fontClass, locale === "en" && "italic")}>
                    {s2.prayerText}
                  </p>
                </motion.div>

                <p className={fontClass}>
                  {locale === "kn"
                    ? "ಜಗನ್ಮಾತೆಯು ಅವರ ಪ್ರಾರ್ಥನೆಯನ್ನು ಸ್ವೀಕರಿಸಿ, ಪವಿತ್ರ ಶ್ರೀ ಬಗಳಾ ಚಕ್ರ ಶಕ್ತಿಪೀಠದ ಮೂಲಕ ಈ ಕ್ಷೇತ್ರದಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ನೆಲೆಸಿದಳು. ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರ ಆದರ್ಶ ಜೀವನ ಹಾಗೂ ತಪಸ್ಸು ಭಕ್ತರಿಗೆ ಸದಾ ಭಕ್ತಿ ಮತ್ತು ಸದಾಚಾರದ ದಾರಿದೀಪವಾಗಿದೆ."
                    : locale === "hi"
                    ? "जगन्माता ने उनकी प्रार्थना स्वीकार कर, पवित्र श्री बगलामुखी चक्र शक्तिपीठ के माध्यम से इस पावन धाम में सदा के लिए निवास किया। श्री चिदानंद अवधूत का आदर्श जीवन और तपस्या भक्तों के लिए सदैव भक्ति और सदाचार का प्रकाशस्तंभ है।"
                    : locale === "te"
                    ? "జగన్మాత వారి ప్రార్థనను అంగీకరించి, పవిత్ర శ్రీ బగలాముఖి చక్ర శక్తిపీఠం ద్వారా ఈ క్షేత్రంలో శాశ్వతంగా కొలువుదీరింది. శ్రీ చిదానంద అవధూత ఆదర్శవంతమైన జీవితం మరియు తపస్సు భక్తులకు ఎల్లప్పుడూ భక్తి మరియు సదాచారానికి మార్గదర్శకం."
                    : "The Divine Mother is believed to have accepted his prayers and established her divine presence at this sacred place through the Shree Bagala Chakra Shaktipeeth. The life and spiritual legacy of Sri Chidananda Avadhoota continue to inspire devotees to follow the path of faith, selflessness, devotion and spiritual discipline."}
                </p>
              </div>

              {/* Saint Legacy Summary Box (#FFF7E2 Code) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-4 p-6 rounded-2xl bg-[#FFF7E2] text-[#292929] border border-[#E8B947]/70 shadow-xs flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D49812]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B947]/50 p-2 flex items-center justify-center mb-4 shadow-xs">
                    <Image
                      src="/vedic icon.png"
                      alt="Spiritual Legacy"
                      width={32}
                      height={32}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className={cn("font-bold text-xl text-[#8B1538] mb-3 leading-snug", fontClass)}>
                    {s2.legacyEyebrow}
                  </h3>
                  <p className={cn("text-sm text-[#4A4A4A] leading-relaxed mb-6 font-normal", fontClass)}>
                    {s2.legacyText}
                  </p>
                </div>

                <div className={cn("pt-4 border-t border-[#E8B947]/40 text-xs text-[#8B1538] font-bold text-center", fontClass, locale === "en" && "font-sans italic")}>
                  {locale === "kn"
                    ? "ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರು • ಸಿದ್ಧ ಪರ್ವತ"
                    : locale === "hi"
                    ? "परम पूज्य श्री चिदानंद अवधूत • सिद्ध पर्वत"
                    : locale === "te"
                    ? "పరమ పూజ్య శ్రీ చిదానంద అవధూత • సిద్ధ పర్వతం"
                    : "Param Poojya Sri Chidananda Avadhoota • Siddha Parvatha"}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* ========================================================
            SECTION 3: SIDDHA PARVATHA – THE SACRED HILL
           ======================================================== */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12"
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
                  isKannada && "font-kannada tracking-wide"
                )}
              >
                {s3.eyebrow}
              </span>
            </div>

            <h2
              className={cn(
                "font-sans font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] text-[#8B1538] tracking-tight leading-tight mb-2.5 text-center text-balance max-w-4xl",
                isKannada && "font-kannada"
              )}
            >
              {s3.heading}
            </h2>

            <p
              className={cn(
                "font-sans italic text-base sm:text-lg text-[#D99A00] font-semibold max-w-2xl mb-4 text-center",
                isKannada && "font-kannada not-italic"
              )}
            >
              {s3.subtitle}
            </p>
          </motion.div>

          {/* Meaning Cards Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Siddha Meaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-6 sm:p-7 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs transition-all duration-300 ease-out cursor-pointer hover:bg-[#FFFCF3] hover:border-[#D49812] hover:shadow-md hover:-translate-y-1.5 select-none"
            >
              <span className={cn("text-xs font-bold uppercase tracking-wider text-[#D99A00] block mb-2 transition-colors duration-300 group-hover:text-[#8B1538]", fontClass)}>
                {locale === "kn" ? "ಆಧ್ಯಾತ್ಮಿಕ ಅರ್ಥ" : locale === "hi" ? "आध्यात्मिक अर्थ" : locale === "te" ? "ఆధ్యాత్మిక అర్థం" : "Spiritual Meaning"}
              </span>
              <h3 className={cn("font-bold text-2xl text-[#8B1538] mb-3 transition-colors duration-300 group-hover:text-[#5A0718]", fontClass)}>
                {locale === "kn" ? "‘Siddha’ (ಸಿದ್ಧ)" : locale === "hi" ? "‘सिद्ध’ (Siddha)" : locale === "te" ? "‘సిద్ధ’ (Siddha)" : "‘Siddha’ (Accomplished)"}
              </h3>
              <p className={cn("text-base text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-[#460511] group-hover:font-medium", fontClass)}>
                {locale === "kn"
                  ? "ತೀವ್ರ ಭಕ್ತಿ, ಧ್ಯಾನ ಹಾಗೂ ತಪಸ್ಸಿನ ಮೂಲಕ ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರ ಹಾಗೂ ಸಿದ್ಧಿಗಳನ್ನು ಪಡೆದ ಮಹಾ ತಪಸ್ವಿಗಳು, ಸಿದ್ಧ ಪುರುಷರು ಮತ್ತು ಯೋಗಿಗಳು ನೆಲೆಸಿ ಪಾವನಗೊಳಿಸಿದ ಪುಣ್ಯ ಕ್ಷೇತ್ರ."
                  : locale === "hi"
                  ? "तीव्र भक्ति, ध्यान और तपस्या के माध्यम से आत्मसाक्षात्कार तथा सिद्धियां प्राप्त करने वाले सिद्ध पुरुषों, योगियों और संतों द्वारा पावन की गई पुण्यभूमि।"
                  : locale === "te"
                  ? "తీవ్ర భక్తి, ధ్యానం మరియు తపస్సు ద్వారా ఆత్మసాక్షాత్కారాన్ని పొందిన సిద్ధ పురుషులు, యోగులు నివసించి పవిత్రం చేసిన పుణ్యభూమి."
                  : "Refers to a spiritually accomplished being who has attained higher realisation through intense devotion, meditation, and penance. It signifies the presence of enlightened masters and yogis who sanctified this terrain."}
              </p>
            </motion.div>

            {/* Parvatha Meaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-6 sm:p-7 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs transition-all duration-300 ease-out cursor-pointer hover:bg-[#FFFCF3] hover:border-[#D49812] hover:shadow-md hover:-translate-y-1.5 select-none"
            >
              <span className={cn("text-xs font-bold uppercase tracking-wider text-[#D99A00] block mb-2 transition-colors duration-300 group-hover:text-[#8B1538]", fontClass)}>
                {locale === "kn" ? "ಪವಿತ್ರ ಪ್ರಾಕೃತಿಕ ನೆಲೆ" : locale === "hi" ? "पावन प्राकृतिक धाम" : locale === "te" ? "పవిత్ర ప్రకృతి నిలయం" : "Sacred Topography"}
              </span>
              <h3 className={cn("font-bold text-2xl text-[#8B1538] mb-3 transition-colors duration-300 group-hover:text-[#5A0718]", fontClass)}>
                {locale === "kn" ? "‘Parvatha’ (ಪರ್ವತ)" : locale === "hi" ? "‘पर्वत’ (Parvatha)" : locale === "te" ? "‘పర్వతం’ (Parvatha)" : "‘Parvatha’ (Sacred Mountain)"}
              </h3>
              <p className={cn("text-base text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-[#460511] group-hover:font-medium", fontClass)}>
                {locale === "kn"
                  ? "ಪ್ರಾಕೃತಿಕ ಎತ್ತರದ ಗಿರಿಶ್ರೇಣಿ, ಲೌಕಿಕ ಗೊಂದಲಗಳಿಂದ ದೂರವಿರುವ ಪ್ರಶಾಂತ ಪರಿಸರ. ಶತಮಾನಗಳಿಂದ ಸಾಧಕರು ಮತ್ತು ಸಂತರ ತಪಸ್ಸಿಗೆ ಯೋಗ್ಯವಾದ ಪವಿತ್ರ ನೆಲೆ."
                  : locale === "hi"
                  ? "प्राकृतिक ऊंची पर्वतश्रृंखला, सांसारिक कोलाहल से दूर शांत वातावरण। सदियों से साधकों एवं संतों की तपस्या के लिए परम पावन धाम।"
                  : locale === "te"
                  ? "ప్రాకృతిక ఎత్తైన పర్వత శ్రేణి, లౌకిక ఆందోళనలకు దూరంగా ఉండే ప్రశాంత వాతావరణం. శతాబ్దాలుగా సాధకులు మరియు సన్యాసుల తపస్సుకు అనువైన పవిత్ర నిలయం."
                  : "Represents a sacred mountain or elevated hill, symbolizing an abode elevated from mundane distractions — a serene haven associated with saints, sages, and spiritual seekers through centuries."}
              </p>
            </motion.div>
          </div>

          {/* Synthesis Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={cn(
              "p-6 sm:p-8 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 text-base sm:text-lg leading-relaxed text-[#292929] space-y-4 shadow-xs",
              fontClass
            )}
          >
            <p>
              {locale === "kn"
                ? "ಸಿದ್ಧ ಪರ್ವತವು ಕೇವಲ ಒಂದು ಬೆಟ್ಟವಲ್ಲ; ಇದು ಅಂಬಾಮಠದ ಇತಿಹಾಸದೊಂದಿಗೆ ಗಾಢವಾಗಿ ಹೆಣೆದುಕೊಂಡಿರುವ ಪವಿತ್ರ ಆಧ್ಯಾತ್ಮಿಕ ಪುಣ್ಯಭೂಮಿಯಾಗಿದೆ. ಕ್ಷೇತ್ರದ ಸಾಂಪ್ರದಾಯಿಕ ನಂಬಿಕೆಗಳ ಪ್ರಕಾರ, ಇಲ್ಲಿನ ನೈಸರ್ಗಿಕ ಗುಹೆಗಳು ಹಾಗೂ ಪ್ರಶಾಂತ ಪರಿಸರವು ತಲೆಮಾರುಗಳಿಂದ ಸಾಧು-ಸಂತರ ತಪೋಸ್ಥಾನವಾಗಿದೆ."
                : locale === "hi"
                ? "सिद्ध पर्वत मात्र एक पहाड़ी नहीं है; यह अम्बामाता के इतिहास से गहराई से जुड़ी एक पावन आध्यात्मिक पुण्यभूमि है। क्षेत्र की पारंपरिक मान्यताओं के अनुसार, यहां की प्राकृतिक गुफाएं और शांत वातावरण पीढ़ियों से साधु-संतों की तपोभूमि रही हैं।"
                : locale === "te"
                ? "సిద్ధ పర్వతం కేవలం ఒక కొండ మాత్రమే కాదు; ఇది అంబామఠం చరిత్రతో లోతుగా ముడిపడి ఉన్న పవిత్ర ఆధ్యాత్మిక పుణ్యభూమి. క్షేత్ర సాంప్రదాయ నమ్మకాల ప్రకారం, ఇక్కడి సహజ గుహలు మరియు ప్రశాంత వాతావరణం తరతరాలుగా సాధు-సంతుల తపోభూమిగా సేవలందించాయి."
                : "Siddha Parvatha is not merely a geographical landmark; it is regarded as a sacred spiritual landscape deeply connected with the history of Ambamath. According to the traditional beliefs of the Kshetra, the hills, natural caves and peaceful surroundings have served as places of meditation and spiritual practices for generations."}
            </p>
            <p>
              {locale === "kn"
                ? "ಇಂತಹ ಪಾವನ ಪರಿಸರದಲ್ಲಿಯೇ ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರು ಕಠಿಣ ತಪಸ್ಸನ್ನಾಚರಿಸಿ, ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಸಾಕ್ಷಾತ್ಕಾರ ಪಡೆದರು. ಆದ್ದರಿಂದ ಈ ಪವಿತ್ರ ಬೆಟ್ಟವು ಆಧ್ಯಾತ್ಮಿಕ ಜ್ಞಾನ, ಭಕ್ತಿ ಮತ್ತು ದೈವಿಕ ಶಕ್ತಿಯ ಸಂಕೇತವಾಗಿದೆ."
                : locale === "hi"
                ? "इसी पावन परिवेश में परम पूज्य श्री चिदानंद अवधूत ने कठोर तपस्या करके श्री अम्बादेवी का दिव्य साक्षात्कार प्राप्त किया। अतः यह पावन पर्वत आध्यात्मिक ज्ञान, भक्ति और ईश्वरीय शक्ति का पावन प्रतीक है।"
                : locale === "te"
                ? "ఇటువంటి పవిత్ర వాతావరణంలోనే పరమ పూజ్య శ్రీ చిదానంద అవధూత కఠిన తపస్సు ఆచరించి, శ్రీ అంబాదేవి దివ్య సాక్షాత్కారాన్ని పొందారు. అందుకే ఈ పవిత్ర పర్వతం ఆధ్యాత్మిక జ్ఞానం, భక్తి మరియు దైవ శక్తుల చిహ్నంగా భాసిల్లుతోంది."
                : "It was in this spiritually significant environment that Param Poojya Sri Chidananda Avadhoota is traditionally believed to have performed intense penance and received the divine blessings of Sri Ambadevi. The sacred hill is therefore deeply associated with spiritual enlightenment, devotion, divine manifestation and the pursuit of truth."}
            </p>
            <div className={cn("text-sm sm:text-base text-[#8B1538] font-medium bg-[#FFF9EB] p-4 rounded-xl border border-[#E8B947]/40 transition-colors hover:bg-[#FFF7DF]", fontClass)}>
              {locale === "kn"
                ? "ಭಕ್ತರಿಗೆ ಸಿದ್ಧ ಪರ್ವತಕ್ಕೆ ಭೇಟಿ ನೀಡುವುದು ಪ್ರಶಾಂತ ವಾತಾವರಣವನ್ನು ಅನುಭವಿಸುವ, ಜಗನ್ಮಾತೆಯ ದಿವ್ಯ ಕೃಪೆಗೆ ಪಾತ್ರರಾಗುವ ಹಾಗೂ ಕ್ಷೇತ್ರದ ಪುರಾತನ ಪರಂಪರೆಯೊಂದಿಗೆ ಬೆರೆಯುವ ಅಪೂರ್ವ ಅವಕಾಶವಾಗಿದೆ."
                : locale === "hi"
                ? "भक्तों के लिए सिद्ध पर्वत की यात्रा शांत वातावरण का अनुभव करने, जगन्माता की दिव्य कृपा प्राप्त करने और इस पावन क्षेत्र की प्राचीन परंपरा से जुड़ने का अनुपम अवसर है।"
                : locale === "te"
                ? "భక్తులకు సిద్ధ పర్వతాన్ని దర్శించడం ప్రశాంత వాతావరణాన్ని అనుభవించేందుకు, జగన్మాత దివ్య కృపను పొందేందుకు మరియు క్షేత్ర పురాతన వారసత్వంతో మమేకమయ్యేందుకు లభించిన అద్భుత అవకాశం."
                : "For devotees, a visit to Siddha Parvatha is an opportunity to experience the peaceful atmosphere of the sacred landscape, seek the blessings of the Divine Mother and connect with the spiritual heritage of this ancient Kshetra."}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
