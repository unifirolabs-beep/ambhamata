"use client";

import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Flame,
  Moon,
  Sun,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { JsonLd, createFaqSchema } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

export function FestivalsGuideSection() {
  const { locale, fontClass } = useContentTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isKn = locale === "kn";
  const isHi = locale === "hi";
  const isTe = locale === "te";

  const festivalCalendar = [
    {
      icon: Moon,
      month: isKn ? "ಚೈತ್ರ ಶುದ್ಧ ಹುಣ್ಣಿಮೆ" : isHi ? "चैत्र शुक्ल पूर्णिमा" : isTe ? "చైత్ర శుద్ధ పౌర్ణమి" : "Chaitra Purnima (March/April)",
      title: isKn ? "ವಾರ್ಷಿಕ ಮಹಾ ಜಾತ್ರೆ & ಬೆಳ್ಳಿ ರಥೋತ್ಸವ" : isHi ? "महा जात्रा एवं रजत रथोत्सव" : isTe ? "వార్షిక జాతర & వెండి రథోత్సవం" : "Grand Jatra & Belli Rathotsava",
      desc: isKn
        ? "ವರ್ಷದ ಅತ್ಯಂತ ಭವ್ಯ ಧಾರ್ಮಿಕ ಜಾತ್ರೆ. ಬೆಳ್ಳಿ ರಥದಲ್ಲಿ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಉತ್ಸವ ಮೂರ್ತಿಯ ಪವಿತ್ರ ಮೆರವಣಿಗೆ ಮತ್ತು ಲಕ್ಷಾಂತರ ಭಕ್ತರ ಸಮ್ಮಿಲನ."
        : isHi
        ? "वर्ष का सर्वाधिक भव्य धार्मिक अनुष्ठान। रजत रथ में माँ अम्बादेवी की उत्सव मूर्ति की शोभायात्रा एवं विशाल जन-समागम।"
        : isTe
        ? "సంవత్సరంలోనే అత్యంత వైభవంగా జరిగే ఉత్సవం. వెండి రథంలో అమ్మవారి ఊరేగింపు మరియు లక్షలాది భక్తుల సమాహారం."
        : "The premier annual festival featuring the grand procession of Goddess Ambadevi in the majestic silver chariot drawn by hundreds of thousands of pilgrims.",
    },
    {
      icon: Sun,
      month: isKn ? "ಆಶ್ವಯುಜ ಶುಕ್ಲ ಪಾಡ್ಯ - ದಶಮಿ" : isHi ? "आश्विन शुक्ल प्रतिपदा - दशमी" : isTe ? "ఆశ్వయుజ నవరాత్రులు" : "Ashwina Month (September/October)",
      title: isKn ? "ಶರನ್ನವರಾತ್ರಿ ದಸರಾ ಮಹೋತ್ಸವ" : isHi ? "शारदीय नवरात्र महोत्सव" : isTe ? "శరన్నవరాత్రి దసరా ఉత్సవాలు" : "Sharannavaratri Dasara Festival",
      desc: isKn
        ? "ಒಂಬತ್ತು ದಿನಗಳ ಕಾಲ ದೇವಿಗೆ ನವದುರ್ಗೆಯರ ದಿವ್ಯ ಅಲಂಕಾರ, ನಿತ್ಯ ಚಂಡಿಕಾ ಹವನ, ಆಯುಧ ಪೂಜೆ ಮತ್ತು ವಿಜಯದಶಮಿಯ ಪವಿತ್ರ ಬನ್ನಿ ಪೂಜೆ."
        : isHi
        ? "नौ दिनों तक नवदुर्गा स्वरूपों का दिव्य शृंगार, नित्य चंडी हवन, आयुध पूजा एवं विजयादशमी का पावन विजयोत्सव।"
        : isTe
        ? "తొమ్మిది రోజుల పాటు నవదుర్గల అలంకరణలు, నిత్య చండీ హోమం, ఆయుధ పూజ మరియు విజయదశమి జంబూ సవారీ."
        : "Nine days of Navadurga alankaras, daily Chandi Havana, Ayudha Pooja, and grand Vijayadashami Shobha Yatra.",
    },
    {
      icon: Flame,
      month: isKn ? "ಕಾರ್ತಿಕ ಮಾಸ" : isHi ? "कार्तिक मास" : isTe ? "కార్తీక మాసం" : "Karthika Month (November/December)",
      title: isKn ? "ಲಕ್ಷ ದೀಪೋತ್ಸವ & ಜ್ಯೋತಿ ಪೂಜೆ" : isHi ? "कार्तिक दीपोत्सव एवं ज्योति पर्व" : isTe ? "కార్తీక దీపోత్సవం" : "Laksha Deepotsava & Festival of Lights",
      desc: isKn
        ? "ಸಿದ್ಧ ಪರ್ವತದ ಶಿಖರ ಮತ್ತು ಇಡೀ ದೇವಾಲಯ ಪ್ರಾಂಗಣದಲ್ಲಿ ಸಾವಿರಾರು ಹಣತೆಗಳ ದೀಪಾಲಂಕಾರ, ಮಹಾರತಿ ಮತ್ತು ಶಾಂತಿಯ ಬೆಳಕು."
        : isHi
        ? "सिद्ध पर्वत की चोटी एवं संपूर्ण मंदिर प्रांगण में सहस्रों दीपों का प्रज्ज्वलन, महाआरती एवं प्रकाशोत्सव।"
        : isTe
        ? "సిద్ధ పర్వత శిఖరం మరియు ఆలయ ప్రాంగణమంతా వేలాది దీపాల కాంతులతో వెలిగిపోయే దివ్య దీపోత్సవం."
        : "Illumination of Siddha Parvatha hill with thousands of traditional oil lamps (Deepas) creating a celestial spectacle.",
    },
  ];

  const faqs = [
    {
      question: isKn
        ? "ಬೆಳ್ಳಿ ರಥೋತ್ಸವ (Belli Rathotsava) ಯಾವಾಗ ನಡೆಯುತ್ತದೆ?"
        : isHi
        ? "चाँदी का रथोत्सव (बेळ्ळि रथोत्सव) किस समय आयोजित होता है?"
        : isTe
        ? "వెండి రథోత్సవం (Belli Rathotsava) ఎప్పుడు జరుగుతుంది?"
        : "When is the annual Belli Rathotsava (Silver Chariot Festival) held?",
      answer: isKn
        ? "ಬೆಳ್ಳಿ ರಥೋತ್ಸವವು ಪ್ರತಿವರ್ಷ ಚೈತ್ರ ಮಾಸದ ಶುಕ್ಲ ಪಕ್ಷದ ಹುಣ್ಣಿಮೆಯ ಪವಿತ್ರ ಮುಹೂರ್ತದಲ್ಲಿ ಅತ್ಯಂತ ವಿಜೃಂಭಣೆಯಿಂದ ನೆರವೇರುತ್ತದೆ."
        : isHi
        ? "वार्षिक रजत रथोत्सव प्रतिवर्ष चैत्र शुक्ल पूर्णिमा के पावन शुभ मुहूर्त में भव्य रूप से आयोजित किया जाता है।"
        : isTe
        ? "వార్షిక వెండి రథోత్సవం ప్రతి సంవత్సరం చైత్ర శుద్ధ పౌర్ణమి పర్వదినాన అత్యంత వైభవంగా జరుగుతుంది."
        : "The annual Belli Rathotsava is celebrated on the auspicious occasion of Chaitra Shukla Purnima (typically in March or April).",
    },
    {
      question: isKn
        ? "ಜಾತ್ರಾ ಮಹೋತ್ಸವದ ಸಮಯದಲ್ಲಿ ವಿಶೇಷ ಬಸ್ಸು ಸೌಲಭ್ಯ ಇರುತ್ತದೆಯೇ?"
        : isHi
        ? "क्या वार्षिक मेले के दौरान विशेष बस सेवाएँ उपलब्ध रहती हैं?"
        : isTe
        ? "జాతర సమయంలో ప్రత్యేక బస్సు సర్వీసులు ఉంటాయా?"
        : "Are special transport buses arranged during the annual Jatra?",
      answer: isKn
        ? "ಹೌದು, ವಾರ್ಷಿಕ ಜಾತ್ರೆ ಹಾಗೂ ನವರಾತ್ರಿಯ ಸಂದರ್ಭದಲ್ಲಿ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಸಿಂಧನೂರು, ರಾಯಚೂರು, ಗಂಗಾವತಿ ಮತ್ತು ಬಳ್ಳಾರಿಯಿಂದ ಸೋಮಲಾಪುರ ಕ್ಷೇತ್ರಕ್ಕೆ ವಿಶೇಷ ಬಸ್ಸುಗಳನ್ನು ಓಡಿಸುತ್ತದೆ."
        : isHi
        ? "हाँ, जात्रा एवं नवरात्र के समय केएसआरटीसी द्वारा सिंधनूर, रायचूर, गंगावती एवं बल्लारी से सोमलापुर हेतु विशेष बसें संचालित की जाती हैं।"
        : isTe
        ? "అవును, జాతర మరియు నవరాత్రుల వేళ కేఎస్‌ఆర్‌టీసీ సింధనూరు మరియు రాయచూరు నుండి ప్రత్యేక బస్సులను నడుపుతుంది."
        : "Yes, Karnataka State Road Transport Corporation (KSRTC) operates special feeder buses connecting Sindhanur, Raichur, Gangavathi, and Ballari directly to Somalapura.",
    },
    {
      question: isKn
        ? "ಉತ್ಸವಗಳಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುವ ಭಕ್ತರಿಗೆ ಪ್ರಸಾದ ಮತ್ತು ವಸತಿ ವ್ಯವಸ್ಥೆ ಹೇಗಿರುತ್ತದೆ?"
        : isHi
        ? "पर्वों के दौरान श्रद्धालुओं के लिए आवास एवं भोजन प्रसादम की व्यवस्था कैसी है?"
        : isTe
        ? "ఉత్సవాల సమయంలో భక్తులకు వసతి మరియు భోజన సౌకర్యాలు ఎలా ఉంటాయి?"
        : "What food and accommodation arrangements exist for festival pilgrims?",
      answer: isKn
        ? "ಉತ್ಸವಗಳ ಎಲ್ಲಾ ದಿನಗಳಲ್ಲಿ ಶ್ರೀ ಅಂಬಾದೇವಿ ದಾಸೋಹ ಭವನದಲ್ಲಿ ನಿರಂತರವಾಗಿ ಭಕ್ತರಿಗೆ ಉಚಿತ ಅನ್ನದಾನ ನೀಡಲಾಗುತ್ತದೆ ಮತ್ತು ವಿಶಾಲವಾದ ಯಾತ್ರಿ ನಿವಾಸಗಳಲ್ಲಿ ತಾತ್ಕಾಲಿಕ ತಂಗುವ ವ್ಯವಸ್ಥೆ ಮಾಡಲಾಗುತ್ತದೆ."
        : isHi
        ? "उत्सव के दिनों में मंदिर के दासोह भवन में अनवरत निःशुल्क महाप्रसाद वितरित होता है तथा धर्मशाला एवं पंडालों में आवास की उत्तम व्यवस्था रहती है।"
        : isTe
        ? "ఉత్సవాల రోజులలో ఆలయ అన్నదాన భవనంలో నిరంతర అన్నవితరణ మరియు విశాలమైన యాత్రికుల నివాసాలలో వసతి కల్పించబడుతుంది."
        : "Continuous free Annadana meals are served throughout festival days, alongside organized pilgrim resting halls and volunteer assistance.",
    },
  ];

  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />

      <section className="py-14 sm:py-20 bg-[#FFFDF8] border-t border-[#E8B947]/30" aria-label="Festival Calendar and Pilgrim Guidelines">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7E2] border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#D49812]" />
              <span className={fontClass}>
                {isKn ? "ಧಾರ್ಮಿಕ ಉತ್ಸವ ಪಂಚಾಂಗ" : isHi ? "वार्षिक उत्सव पंचांग" : isTe ? "వార్షిక ఉత్సవ పంచాంగం" : "Festival Calendar"}
              </span>
            </div>
            <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B1538] mb-3", fontClass)}>
              {isKn
                ? "ಸುಕ್ಷೇತ್ರ ಸೋಮಲಾಪುರದ ಪ್ರಮುಖ ವಾರ್ಷಿಕ ಉತ್ಸವಗಳು ಮತ್ತು ತಿಥಿಗಳು"
                : isHi
                ? "सोमलापुर धाम के पावन वार्षिक पर्व एवं शुभ तिथियाँ"
                : isTe
                ? "సోమలాపుర క్షేత్రం ముఖ్యమైన వార్షిక ఉత్సవాలు & తిథులు"
                : "Sacred Festival Calendar & Auspicious Tithis at Somalapura"}
            </h2>
            <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed", fontClass)}>
              {isKn
                ? "ವರ್ಷವಿಡೀ ಭಕ್ತಿ, ಶ್ರದ್ಧೆ ಹಾಗೂ ಸಂಸ್ಕೃತಿಯ ವೈಭವದಿಂದ ಆಚರಿಸಲಾಗುವ ಸಿದ್ಧ ಪರ್ವತದ ಪ್ರಮುಖ ಧಾರ್ಮಿಕ ಪರ್ವದಿನಗಳು."
                : isHi
                ? "वर्षभर भक्ति, श्रद्धा एवं सांस्कृतिक उल्लास से मनाए जाने वाले सिद्ध पर्वत के प्रमुख पावन पर्व।"
                : isTe
                ? "సంవత్సరమంతా భక్తిశ్రద్ధలతో సిద్ధ పర్వతంపై జరుపుకునే పవిత్ర పండుగల సమగ్ర సమాచారం."
                : "Celebrated according to traditional Vedic calendars, drawing devotees from across Karnataka, Telangana, and Maharashtra."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-16">
            {festivalCalendar.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5 text-[#FFE6A0]" />
                      </div>
                      <span className="text-xs font-bold text-[#D99A00] px-2.5 py-1 rounded-md bg-white border border-[#E8B947]/60">
                        {item.month}
                      </span>
                    </div>
                    <h3 className={cn("text-lg font-bold text-[#8B1538] mb-2", fontClass)}>
                      {item.title}
                    </h3>
                    <p className={cn("text-xs sm:text-sm text-gray-700 leading-relaxed", fontClass)}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Festival FAQs */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className={cn("text-xl sm:text-2xl md:text-3xl font-bold text-[#8B1538] mb-2", fontClass)}>
                {isKn
                  ? "ಉತ್ಸವಗಳು ಮತ್ತು ಜಾತ್ರೆಯ ಭಕ್ತರ ಪ್ರಶ್ನೋತ್ತರಗಳು"
                  : isHi
                  ? "उत्सव एवं जात्रा संबंधी सामान्य प्रश्नोत्तर"
                  : isTe
                  ? "ఉత్సవాలు మరియు జాతర సంబంధిత ప్రశ్నలు"
                  : "Frequently Asked Questions About Festivals"}
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E8B947]/50 bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 font-bold text-[#8B1538] hover:bg-[#FFF7E2]/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className={cn("text-sm sm:text-base leading-snug", fontClass)}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 shrink-0 text-[#D49812] transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-[#E8B947]/30 bg-[#FFFDF8]">
                        <p className={fontClass}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
