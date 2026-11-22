"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Flame,
  Droplet,
  UtensilsCrossed,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { JsonLd, createFaqSchema } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

export function SevasGuideSection() {
  const { locale, fontClass } = useContentTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isKn = locale === "kn";
  const isHi = locale === "hi";
  const isTe = locale === "te";

  const faqs = [
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನದಲ್ಲಿ ಸೇವೆಗಳನ್ನು ಮುಂಚಿತವಾಗಿ ಕಾಯ್ದಿರಿಸುವುದು ಹೇಗೆ?"
        : isHi
        ? "मंदिर में पूजा एवं सेवाएँ पूर्व में कैसे आरक्षित की जा सकती हैं?"
        : isTe
        ? "ఆలయంలో పూజా సేవలను ముందుగా ఎలా బుక్ చేసుకోవాలి?"
        : "How can devotees book or register for sacred sevas in advance?",
      answer: isKn
        ? "ಭಕ್ತಾದಿಗಳು ದೇವಸ್ಥಾನದ ಸೇವಾ ಕೌಂಟರ್‌ಗೆ ನೇರವಾಗಿ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ (+91 94486 42322) ಗೆ ಕರೆ ಮಾಡಿ ತಮ್ಮ ಹೆಸರು, ಗೋತ್ರ ಹಾಗೂ ನಕ್ಷತ್ರಗಳನ್ನು ನೀಡಿ ಸಂಕಲ್ಪ ಸೇವೆಗಳನ್ನು ಮುಂಚಿತವಾಗಿ ಕಾಯ್ದಿರಿಸಬಹುದು."
        : isHi
        ? "श्रद्धालु मंदिर के सेवा काउंटर पर व्यक्तिगत रूप से अथवा आधिकारिक हेल्पलाइन (+91 94486 42322) पर संपर्क कर अपने नाम, गोत्र एवं नक्षत्र के साथ संकल्प पूजा अग्रिम बुक कर सकते हैं।"
        : isTe
        ? "భక్తులు ఆలయ సేవా కౌంటర్‌ను స్వయంగా సందర్శించి లేదా అధికారిక హెల్ప్‌లైన్ (+91 94486 42322) కు కాల్ చేసి తమ గోత్ర నామాలతో సంకల్ప సేవలను బుక్ చేసుకోవచ్చు."
        : "Devotees may register at the temple seva counter or call the official administration helpline (+91 94486 42322) to provide their gotra and nakshatra for Vedic sankalpa.",
    },
    {
      question: isKn
        ? "ಸೇವಾಕರ್ತರಿಗೆ ಪ್ರಸಾದ ಮತ್ತು ಆಶೀರ್ವಾದ ಹೇಗೆ ದೊರೆಯುತ್ತದೆ?"
        : isHi
        ? "सेवा कराने वाले भक्तों को प्रसाद किस प्रकार प्राप्त होता है?"
        : isTe
        ? "సేవాకర్తలకు ప్రసాదం ఎలా అందజేయబడుతుంది?"
        : "How do devotees receive prasadam following their booked seva?",
      answer: isKn
        ? "ಸೇವೆ ಮುಗಿದ ತಕ್ಷಣ ಪೂಜಾ ಮಂಟಪದಲ್ಲಿ ಅರ್ಚಕರಿಂದ ಪವಿತ್ರ ತೀರ್ಥ, ಕುಂಕುಮ, ಸೀರೆ/ವಸ್ತ್ರ ಮತ್ತು ಲಡ್ಡು ಪ್ರಸಾದವನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ದಾಸೋಹ ಸಮಯದಲ್ಲಿ ಅನ್ನದಾನ ಪ್ರಸಾದವನ್ನು ಸ್ವೀಕರಿಸಬಹುದು."
        : isHi
        ? "अनुष्ठान पूर्ण होने के उपरांत पुजारियों द्वारा पवित्र तीर्थ, कुंकुम, वस्त्र एवं लड्डू महाप्रसाद प्रदान किया जाता है। दोपहर में अन्नदान दासोह में भोजन प्रसाद प्राप्त कर सकते हैं।"
        : isTe
        ? "పూజ ముగిసిన వెంటనే వేద పండితుల చేతుల మీదుగా పవిత్ర తీర్థం, కుంకుమ, వస్త్రం మరియు లడ్డు ప్రసాదం అందజేయబడుతుంది."
        : "Immediately following the pooja ceremony, priests distribute energized theertha, kumkuma, blessed vastra, and laddu prasadam at the inner mantapa.",
    },
    {
      question: isKn
        ? "ಹುಟ್ಟುಹಬ್ಬ ಅಥವಾ ವಿವಾಹ ವಾರ್ಷಿಕೋತ್ಸವದಂದು ಶಾಶ್ವತ ಸೇವೆ ಸಲ್ಲಿಸಬಹುದೇ?"
        : isHi
        ? "क्या जन्मदिवस अथवा वैवाहिक वर्षगांठ पर शाश्वत सेवा कराई जा सकती है?"
        : isTe
        ? "పుట్టినరోజు లేదా పెళ్లి రోజున శాశ్వత పూజ జరిపించవచ్చా?"
        : "Can devotees institute perpetual (Shashwata) sevas for birthdays and anniversaries?",
      answer: isKn
        ? "ಖಂಡಿತವಾಗಿ, ಭಕ್ತರು ತಮ್ಮ ಅಥವಾ ತಮ್ಮ ಕುಟುಂಬದ ಸದಸ್ಯರ ಜನ್ಮದಿನ, ವಿವಾಹ ವಾರ್ಷಿಕೋತ್ಸವ ಅಥವಾ ಪುಣ್ಯತಿಥಿಯ ದಿನದಂದು ಪ್ರತಿ ವರ್ಷ ನಿಗದಿತ ಪೂಜೆ ನೆರವೇರಿಸುವಂತೆ ಶಾಶ್ವತ ಸೇವಾ ನಿಧಿಯನ್ನು ಸಮರ್ಪಿಸಬಹುದು."
        : isHi
        ? "अवश्य, श्रद्धालु अपने अथवा परिजनों के जन्मदिवस, वैवाहिक वर्षगांठ या स्मृति दिवस पर प्रतिवर्ष उसी तिथि को पूजा हेतु शाश्वत सेवा कोष स्थापित कर सकते हैं।"
        : isTe
        ? "తప్పకుండా, భక్తులు తమ జన్మదినం లేదా వివాహ వార్షికోత్సవం సందర్భంగా ప్రతి సంవత్సరం అదే రోజున పూజ జరిగేలా శాశ్వత సేవా నిధిని సమర్పించవచ్చు."
        : "Yes, devotees can institute annual perpetual sevas where Vedic archana and abhishekam are performed every year on their chosen birthday, anniversary, or auspicious tithi.",
    },
  ];

  const sevaBenefits = [
    {
      icon: Droplet,
      title: isKn ? "ರುದ್ರಾಭಿಷೇಕ ಮತ್ತು ಪಂಚಾಮೃತ ಸ್ನಾನ" : isHi ? "रुद्राभिषेक एवं पंचामृत" : isTe ? "రుద్రాభిషేకం" : "Rudrabhisheka",
      desc: isKn
        ? "ಆರೋಗ್ಯ, ಆಯುಷ್ಯ ವೃದ್ಧಿ ಮತ್ತು ಗ್ರಹದೋಷಗಳ ನಿವಾರಣೆಗಾಗಿ ಪವಿತ್ರ ಪಂಚಾಮೃತ ಮತ್ತು ವೇದ ಮಂತ್ರಗಳಿಂದ ನೆರವೇರಿಸಲಾಗುವ ಪುಣ್ಯ ಸ್ನಾನ."
        : isHi
        ? "आरोग्य, दीर्घायु एवं ग्रह दोष निवारण हेतु पवित्र पंचामृत एवं वैदिक रुद्राध्याय से संपन्न पावन अभिषेक।"
        : isTe
        ? "ఆరోగ్యం, ఆయుష్షు మరియు గ్రహదోష నివారణ కోసం పవిత్ర పంచామృతాలతో నిర్వహించే అభిషేకం."
        : "Performed with Vedic Rudra hymns and fresh panchamrita for health, longevity, and spiritual purification.",
    },
    {
      icon: Sparkles,
      title: isKn ? "ಕುಂಕುಮಾರ್ಚನೆ ಮತ್ತು ಲಲಿತಾ ಸಹಸ್ರನಾಮ" : isHi ? "कुंकुमार्चन एवं ललिता सहस्रनाम" : isTe ? "కుంకుమార్చన" : "Kumkumarchana",
      desc: isKn
        ? "ಕುಟುಂಬ ಸೌಭಾಗ್ಯ, ಸಂತಾನ ಪ್ರಾಪ್ತಿ ಮತ್ತು ಇಷ್ಟಾರ್ಥ ಸಿದ್ಧಿಗಾಗಿ ಜಗನ್ಮಾತೆಗೆ ಶುದ್ಧ ಕುಂಕುಮದಿಂದ ಸಲ್ಲಿಸುವ ಅತ್ಯಂತ ಪ್ರಿಯವಾದ ಅರ್ಚನೆ."
        : isHi
        ? "पारिवारिक सुख, सौभाग्य, संतान प्राप्ति एवं मनोकामना सिद्धि हेतु माता को शुद्ध कुंकुम से अर्चित पावन सेवा।"
        : isTe
        ? "సౌభాగ్యం, సకల కార్యసిద్ధి మరియు కుటుంబ శాంతి కోసం పవిత్ర కుంకుమతో నిర్వహించే అర్చన."
        : "Sacred vermilion worship accompanied by Lalitha Sahasranama for family prosperity, peace, and wish fulfillment.",
    },
    {
      icon: Flame,
      title: isKn ? "ಚಂಡಿಕಾ ಹೋಮ & ನವಗ್ರಹ ಹವನ" : isHi ? "चंडी होम एवं नवग्रह हवि" : isTe ? "చండీ హోమం" : "Chandi & Navagraha Homam",
      desc: isKn
        ? "ಸಕಲ ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ನಿವಾರಣೆ, ವ್ಯವಹಾರ ಅಭಿವೃದ್ಧಿ ಹಾಗೂ ದೇವಿಯ ಸರ್ವತೋಮುಖ ರಕ್ಷಣೆಗಾಗಿ ನೆರವೇರಿಸಲಾಗುವ ಮಹಾಯಜ್ಞ."
        : isHi
        ? "समस्त नकारात्मक बाधाओं की शांति, व्यापारिक प्रगति एवं जगदम्बा की दिव्य रक्षा हेतु आयोजित महायज्ञ।"
        : isTe
        ? "సకల విఘ్న నివారణ, వ్యాపార అభివృద్ధి మరియు అమ్మవారి రక్షణ కోసం నిర్వహించే పవిత్ర యజ్ఞం."
        : "Vedic fire rituals for spiritual protection, removal of obstacles, and universal well-being.",
    },
    {
      icon: UtensilsCrossed,
      title: isKn ? "ನಿತ್ಯ ದಾಸೋಹ ಅನ್ನದಾನ ಸಮರ್ಪಣೆ" : isHi ? "महाप्रसाद अन्नदान समर्पण" : isTe ? "అన్నదాన సేవ" : "Annadana Sponsorship",
      desc: isKn
        ? "ಅನ್ನದಾನವೇ ಮಹಾದಾನ. ಕ್ಷೇತ್ರಕ್ಕೆ ಬರುವ ನೂರಾರು ಭಕ್ತರಿಗೆ ಪ್ರಸಾದ ಉಣಬಡಿಸುವ ಮೂಲಕ ಅಪಾರ ಪುಣ್ಯ ಸಂಪಾದನೆ."
        : isHi
        ? "अन्नदान ही महादान है। तीर्थ में पधारने वाले श्रद्धालुओं को सात्विक भोजन कराकर अगाध पुण्य प्राप्त करें।"
        : isTe
        ? "అన్నదానం పరమ పవిత్రం. ఆలయానికి వచ్చే భక్తులకు భోజన ప్రసాదం సమర్పించడం ద్వారా విశేష పుణ్యఫలం లభిస్తుంది."
        : "Sponsoring daily satvik meals for visiting pilgrims, revered as the highest spiritual charitable act (Mahadana).",
    },
  ];

  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />

      <section className="py-14 sm:py-20 bg-[#FFFDF8] border-t border-[#E8B947]/30" aria-label="Seva Significance and Guidelines">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7E2] border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D49812]" />
              <span className={fontClass}>
                {isKn ? "ವೇದೋಕ್ತ ಸೇವಾ ಮಹಿಮೆ" : isHi ? "वैदिक पूजा महिमा" : isTe ? "వేదోక్త సేవా వైభవం" : "Vedic Seva Significance"}
              </span>
            </div>
            <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B1538] mb-3", fontClass)}>
              {isKn
                ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ಸನ್ನಿಧಿಯಲ್ಲಿ ಸೇವೆಗಳ ಪಾವಿತ್ರ್ಯ ಮತ್ತು ಫಲಶೃತಿ"
                : isHi
                ? "श्री अम्बादेवी धाम में अनुष्ठान एवं सेवाओं का पुण्यफल"
                : isTe
                ? "శ్రీ అంబాదేవి సన్నిధిలో సేవల పవిత్రత & పుణ్యఫలం"
                : "Spiritual Merits of Vedic Sevas at Siddha Parvatha"}
            </h2>
            <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed", fontClass)}>
              {isKn
                ? "ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರ ತಪಃಶಕ್ತಿಯಿಂದ ಪಾವನವಾದ ಸಿದ್ಧ ಪರ್ವತದಲ್ಲಿ ಅರ್ಪಿಸುವ ಪ್ರತಿಯೊಂದು ಸೇವೆಯೂ ಭಕ್ತರ ಸಂಕಲ್ಪವನ್ನು ಈಡೇರಿಸುವ ಮಹಾ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿದೆ."
                : isHi
                ? "परम पूज्य श्री चिदानंद अवधूत जी की तपस्या से अनुप्राणित इस सिद्ध पीठ में अर्पित प्रत्येक सेवा भक्तों के मनोरथ सिद्ध करती है।"
                : isTe
                ? "పరమ పూజ్య శ్రీ చిదానంద అవధూతల తపోశక్తితో పునీతమైన ఈ క్షేత్రంలో చేసే ప్రతి పూజ భక్తుల సంకల్పాలను నెరవేరుస్తుంది."
                : "Every sacred ritual performed atop the sanctified terrain of Siddha Parvatha follows authentic Agama Shastra traditions to invoke divine motherly blessings."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-16">
            {sevaBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center mb-3.5 shadow-xs">
                      <Icon className="w-5 h-5 text-[#FFE6A0]" />
                    </div>
                    <h3 className={cn("text-base sm:text-lg font-bold text-[#8B1538] mb-2", fontClass)}>
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

          {/* Devotee Guidelines Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8B947]/60 shadow-xs mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/70 text-[#8B1538] flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <h4 className={cn("text-lg sm:text-xl font-bold text-[#8B1538] mb-1.5", fontClass)}>
                    {isKn
                      ? "ಸೇವಾಕರ್ತರಿಗೆ ಅಗತ್ಯ ಸೂಚನೆಗಳು ಮತ್ತು ವಸ್ತ್ರಸಂಹಿತೆ"
                      : isHi
                      ? "सेवा संकल्प हेतु आवश्यक निर्देश एवं वेशभूषा"
                      : isTe
                      ? "సేవాకర్తలకు ముఖ్యమైన సూచనలు & వస్త్రధారణ"
                      : "Devotee Seva Participation Guidelines & Attire"}
                  </h4>
                  <p className={cn("text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl", fontClass)}>
                    {isKn
                      ? "ವಿಶೇಷ ಪೂಜೆಗಳು ಮತ್ತು ಹೋಮಗಳಿಗೆ ಭಾಗವಹಿಸುವ ಭಕ್ತರು ನಿಗದಿತ ಸಮಯಕ್ಕಿಂತ 20 ನಿಮಿಷ ಮುಂಚಿತವಾಗಿ ಸೇವಾ ಕೌಂಟರ್‌ನಲ್ಲಿ ಉಪಸ್ಥಿತರಿರಬೇಕು. ಗರ್ಭಗುಡಿ ಸಂಕಲ್ಪಕ್ಕೆ ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಉಡುಪು ಧರಿಸುವುದು ಕಡ್ಡಾಯ."
                      : isHi
                      ? "विशेष अभिषेक एवं हवन में सम्मिलित होने वाले यजमान निर्धारित समय से 20 मिनट पूर्व सेवा काउंटर पर उपस्थित हों। गर्भगृह में संकल्प हेतु पारंपरिक पोशाक अनिवार्य है।"
                      : isTe
                      ? "ప్రత్యేక అభిషేకాలు మరియు హోమాలలో పాల్గొనే భక్తులు నిర్ణీత సమయానికి 20 నిమిషాల ముందుగా సేవా కౌంటర్ వద్దకు చేరుకోవాలి. సంప్రదాయ దుస్తులు తప్పనిసరి."
                      : "Devotees participating in inner sanctum sankalpa are requested to arrive 20 minutes prior to the ritual in modest traditional attire (dhoti, kurta, or saree)."}
                  </p>
                </div>
              </div>
              <Link
                href="/timings"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8B1538] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#74132A] transition-colors"
              >
                <span>{isKn ? "ಪೂಜಾ ಸಮಯ ವೀಕ್ಷಿಸಿ" : isHi ? "पूजा समय देखें" : isTe ? "పూజా సమయాలు" : "Check Pooja Timings"}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Sevas FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className={cn("text-xl sm:text-2xl md:text-3xl font-bold text-[#8B1538] mb-2", fontClass)}>
                {isKn
                  ? "ಸೇವೆಗಳು ಮತ್ತು ಪೂಜೆಗಳ ಬಗ್ಗೆ ಭಕ್ತರ ಪ್ರಶ್ನೆಗಳು"
                  : isHi
                  ? "पूजा एवं सेवा संबंधी अक्सर पूछे जाने वाले प्रश्न"
                  : isTe
                  ? "పూజా సేవలకు సంబంధించిన సాధారణ ప్రశ్నలు"
                  : "Frequently Asked Questions About Sevas"}
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
