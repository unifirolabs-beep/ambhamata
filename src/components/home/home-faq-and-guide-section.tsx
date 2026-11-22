"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Clock,
  UtensilsCrossed,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { JsonLd, createFaqSchema } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

export function HomeFaqAndGuideSection() {
  const { locale, fontClass } = useContentTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isKn = locale === "kn";
  const isHi = locale === "hi";
  const isTe = locale === "te";

  const faqs = [
    {
      question: isKn
        ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ ಮತ್ತು ಮಹತ್ವವೇನು?"
        : isHi
        ? "श्री अम्बादेवी मंदिर का ऐतिहासिक एवं आध्यात्मिक महत्व क्या है?"
        : isTe
        ? "శ్రీ అంబాదేవి దేవాలయ చరిత్ర మరియు ఆధ్యాత్మిక ప్రాముఖ్యత ఏమిటి?"
        : "What is the historical and spiritual significance of Sri Ambadevi Devasthana?",
      answer: isKn
        ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನವು 343+ ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚಿನ ದಾಖಲಿತ ಇತಿಹಾಸವನ್ನು ಹೊಂದಿರುವ ಸುಕ್ಷೇತ್ರವಾಗಿದೆ. ಸಿದ್ಧ ಪುರುಷರಾದ ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರು ಸಿದ್ಧ ಪರ್ವತ ಬೆಟ್ಟದ ಕಠಿಣ ತಪಸ್ಸಿನಿಂದ ಜಗನ್ಮಾತೆಯ ಸಾಕ್ಷಾತ್ಕಾರ ಪಡೆದು ಈ ಪವಿತ್ರ ಕ್ಷೇತ್ರವನ್ನು ಶಕ್ತಿಪೀಠವನ್ನಾಗಿ ಸ್ಥಾಪಿಸಿದರು."
        : isHi
        ? "श्री अम्बादेवी मंदिर 343+ वर्षों के प्रमाणित ऐतिहासिक गौरव से संपन्न सिद्ध शक्तिपीठ है। परम पूज्य श्री चिदानंद अवधूत जी ने सिद्ध पर्वत पर कठोर तपस्या कर जगदम्बा का साक्षात्कार प्राप्त किया और इस तपोभूमि की स्थापना की।"
        : isTe
        ? "శ్రీ అంబాదేవి దేవాలయం 343+ సంవత్సరాల చరిత్ర కలిగిన పుణ్యక్షేత్రం. పరమ పూజ్య శ్రీ చిదానంద అవధూత సిద్ధ పర్వతంపై తపస్సు ఆచరించి అమ్మవారి అనుగ్రహం పొంది ఈ శక్తిపీఠాన్ని నెలకొల్పారు."
        : "Sri Ambadevi Devasthana holds a documented 343+ year sacred history. Revered saint Param Poojya Sri Chidananda Avadhoota performed rigorous penance atop Siddha Parvatha hill, receiving the divine grace of Goddess Ambadevi and consecrating this sacred Shaktipeetha.",
    },
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನದಲ್ಲಿ ದರ್ಶನ ಮತ್ತು ಪೂಜಾ ಸಮಯಗಳು ಯಾವುವು?"
        : isHi
        ? "मंदिर में नित्य दर्शन एवं आरती का समय क्या है?"
        : isTe
        ? "ఆలయంలో నిత్య దర్శనం మరియు ఆర్తి సమయాలు ఏమిటి?"
        : "What are the daily darshan and pooja timings at the temple?",
      answer: isKn
        ? "ದೇವಸ್ಥಾನವು ಪ್ರತಿದಿನ ಮುಂಜಾನೆ 6:00 ರಿಂದ ಮಧ್ಯಾಹ್ನ 1:30 ರವರೆಗೆ ಹಾಗೂ ಸಂಜೆ 4:30 ರಿಂದ ರಾತ್ರಿ 8:30 ರವರೆಗೆ ತೆರೆದಿರುತ್ತದೆ. ಮುಂಜಾನೆ 6:00 ಕ್ಕೆ ಕಾಕಡಾರತಿ, 8:00 ಕ್ಕೆ ರುದ್ರಾಭಿಷೇಕ ಮತ್ತು ರಾತ್ರಿ 8:00 ಕ್ಕೆ ಮಹಾಮಂಗಳಾರತಿ ನೆರವೇರುತ್ತದೆ."
        : isHi
        ? "मंदिर प्रतिदिन प्रातः 6:00 से दोपहर 1:30 बजे तथा सायं 4:30 से रात्रि 8:30 बजे तक खुला रहता है। प्रातः 6:00 बजे काकड़ आरती, 8:00 बजे रुद्राभिषेक एवं रात्रि 8:00 बजे महामंगल आरती संपन्न होती है।"
        : isTe
        ? "ఆలయం ప్రతిరోజు ఉదయం 6:00 నుండి మధ్యాహ్నం 1:30 వరకు, మరియు సాయంత్రం 4:30 నుండి రాత్రి 8:30 వరకు తెరిచి ఉంటుంది. ఉదయం 6:00 గంటలకు కాకడారతి, రాత్రి 8:00 గంటలకు మహామంగళారతి జరుగుతాయి."
        : "The temple is open daily from 6:00 AM to 1:30 PM and 4:30 PM to 8:30 PM. Key rituals include 6:00 AM Kakada Aarti, 8:00 AM Rudrabhisheka, and 8:00 PM Maha Mangalarathi.",
    },
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನಕ್ಕೆ ಬರುವ ಭಕ್ತರಿಗೆ ಉಚಿತ ಅನ್ನದಾನ ಸೇವೆ ಲಭ್ಯವಿದೆಯೇ?"
        : isHi
        ? "क्या मंदिर में श्रद्धालुओं के लिए निःशुल्क भोजन प्रसाद उपलब्ध है?"
        : isTe
        ? "ఆలయానికి వచ్చే భక్తులకు ఉచిత అన్నప్రసాద వితరణ ఉందా?"
        : "Is free Annadana (food offering) provided to pilgrims?",
      answer: isKn
        ? "ಹೌದು, ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ 2:30 ರವರೆಗೆ ಶ್ರೀ ಅಂಬಾದೇವಿ ಅನ್ನದಾಸೋಹ ಭವನದಲ್ಲಿ ಸಕಲ ಭಕ್ತಾದಿಗಳಿಗೆ ಶುದ್ಧ ಸಾತ್ವಿಕ ಪ್ರಸಾದ ಭೋಜನವನ್ನು ಉಚಿತವಾಗಿ ಬಡಿಸಲಾಗುತ್ತದೆ."
        : isHi
        ? "हाँ, प्रतिदिन दोपहर 12:30 से 2:30 बजे तक श्री अम्बादेवी दासोह भवन में सभी भक्तों के लिए सात्विक महाप्रसाद निःशुल्क परोसा जाता है।"
        : isTe
        ? "అవును, ప్రతిరోజు మధ్యాహ్నం 12:30 నుండి 2:30 వరకు శ్రీ అంబాదేవి దాసోహ భవనంలో భక్తులందరికీ ఉచిత సాత్విక భోజన ప్రసాదం వడ్డించబడుతుంది."
        : "Yes, sacred Satvik meals are lovingly served free of charge to all pilgrims daily between 12:30 PM and 2:30 PM at the Sri Ambadevi Annadana Hall.",
    },
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನದಲ್ಲಿ ನಡೆಯುವ ಅತ್ಯಂತ ಪ್ರಮುಖ ವಾರ್ಷಿಕ ಉತ್ಸವಗಳು ಯಾವುವು?"
        : isHi
        ? "मंदिर के प्रमुख वार्षिक पर्व एवं उत्सव कौन-से हैं?"
        : isTe
        ? "ఆలయంలో జరిగే ముఖ్యమైన వార్షిక ఉత్సవాలు ఏవి?"
        : "What are the major annual festivals celebrated at the temple?",
      answer: isKn
        ? "ಚೈತ್ರ ಮಾಸದಲ್ಲಿ ನಡೆಯುವ ಅದ್ಧೂರಿ ವಾರ್ಷಿಕ ಜಾತ್ರಾ ಮಹೋತ್ಸವ ಮತ್ತು ಬೆಳ್ಳಿ ರಥೋತ್ಸವ (Belli Rathotsava), ಆಶ್ವಯುಜ ಮಾಸದ ಶರನ್ನವರಾತ್ರಿ ದಸರಾ ಮಹೋತ್ಸವ, ಹಾಗೂ ಕಾರ್ತಿಕ ದೀಪೋತ್ಸವಗಳು ಪ್ರಮುಖವಾಗಿವೆ."
        : isHi
        ? "चैत्र मास का भव्य वार्षिक जात्रा महोत्सव एवं चाँदी का रथोत्सव (बेळ्ळि रथोत्सव), आश्विन मास की शारदीय नवरात्र एवं कार्तिक दीपोत्सव प्रमुख उत्सव हैं।"
        : isTe
        ? "చైత్ర మాసంలో జరిగే వార్షిక జాతర మహోత్సవం, వెండి రథోత్సవం (బెళ్ళి రథోత్సవం), శరన్నవరాత్రులు మరియు కార్తీక దీపోత్సవాలు అత్యంత వైభవంగా జరుగుతాయి."
        : "The most prominent celebrations are the grand annual Jatra Mahotsava & Belli Rathotsava (Silver Chariot Procession) in Chaitra month, 9-day Sharannavaratri festival, and Karthika Deepotsava.",
    },
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನವು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಯಾವ ಇಲಾಖೆಯ ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ?"
        : isHi
        ? "मंदिर किस सरकारी विभाग के अंतर्गत सूचीबद्ध है?"
        : isTe
        ? "ఈ దేవాలయం ఏ ప్రభుత్వ విభాగం పరిధిలోకి వస్తుంది?"
        : "Under which government department is the temple listed?",
      answer: isKn
        ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನವು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಧಾರ್ಮಿಕ ದತ್ತಿ ಇಲಾಖೆ (Hindu Religious Institutions & Charitable Endowments - HR&CE Department) ಯಲ್ಲಿ ಅಧಿಕೃತವಾಗಿ ನೊಂದಾಯಿತ ಧಾರ್ಮಿಕ ಸಂಸ್ಥೆಯಾಗಿದೆ."
        : isHi
        ? "श्री अम्बादेवी देवस्थान कर्नाटक सरकार के धर्मार्थ संस्था एवं धार्मिक बंदोबस्ती (HR&CE) विभाग के अंतर्गत पंजीकृत एवं मान्यता प्राप्त धर्मस्थल है।"
        : isTe
        ? "శ్రీ అంబాదేవి దేవస్థానం కర్ణాటక ప్రభుత్వ దేవాదాయ శాఖ (HR&CE Department) పరిధిలో అధికారికంగా నమోదైన ధార్మిక సంస్థ."
        : "Sri Ambadevi Devasthana is an officially registered institution under the Hindu Religious Institutions & Charitable Endowments (HR&CE) Department, Government of Karnataka.",
    },
  ];

  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />

      <section
        className="py-16 sm:py-20 md:py-24 bg-[#FFFDF8] border-t border-[#E8B947]/30"
        aria-label="Pilgrim Guide and Frequently Asked Questions"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
                  ? "ಕ್ಷೇತ್ರ ದರ್ಶನ ಮತ್ತು ಮಾರ್ಗದರ್ಶಿ"
                  : isHi
                  ? "क्षेत्र दर्शन एवं मार्गदर्शिका"
                  : isTe
                  ? "క్షేత్ర దర్శనం & మార్గదర్శిని"
                  : "Kshetra Darshan & Pilgrim Guide"}
              </span>
            </div>

            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1538] leading-tight mb-3 text-balance",
                fontClass
              )}
            >
              {isKn
                ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಠದ ಯಾತ್ರಾ ಕೈಪಿಡಿ"
                : isHi
                ? "सुक़्षेत्र सिद्ध पर्वत अम्बामाथा तीर्थयात्रा निर्देशिका"
                : isTe
                ? "సిద్ధ పర్వత అంబామఠం యాత్ర సమగ్ర సమాచారం"
                : "Pilgrimage Guide to Sukṣhetra Siddha Parvatha"}
            </h2>

            <p
              className={cn(
                "text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl",
                fontClass
              )}
            >
              {isKn
                ? "ಕರ್ನಾಟಕದ ರಾಯಚೂರು ಜಿಲ್ಲೆಯ ಸಿಂಧನೂರಿನ ಸೋಮಲಾಪುರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಸಮಗ್ರ ದರ್ಶನ, ಸೇವೆಗಳು ಮತ್ತು ಯಾತ್ರಿಕರ ಅಗತ್ಯ ಮಾಹಿತಿ."
                : isHi
                ? "कर्नाटक के रायचूर ज़िले में स्थित सोमलापुर धाम के दर्शन, पूजा अनुष्ठान एवं तीर्थयात्री सेवाओं का सम्पूर्ण विवरण।"
                : isTe
                ? "రాయచూరు జిల్లా సింధనూరు సమీపంలోని సోమలాపుర పుణ్యక్షేత్ర దర్శనం మరియు భక్తుల సమాచారం."
                : "Comprehensive guidance on darshan timings, sacred sevas, free Annadana prasadam, and pilgrimage facilities at Somalapura."}
            </p>
          </div>

          {/* 4 Feature Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-16">
            
            {/* 1. Timings */}
            <div className="p-6 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center mb-3.5 shadow-xs">
                  <Clock className="w-5 h-5 text-[#FFE6A0]" />
                </div>
                <h3 className={cn("text-base sm:text-lg font-bold text-[#8B1538] mb-1.5", fontClass)}>
                  {isKn ? "ದರ್ಶನ ಸಮಯ" : isHi ? "दर्शन समय" : isTe ? "దర్శనం సమయాలు" : "Darshan Hours"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {isKn
                    ? "ಬೆಳಿಗ್ಗೆ 6:00 - 1:30 | ಸಂಜೆ 4:30 - 8:30. ಪ್ರತಿದಿನ ಕಾಕಡಾರತಿ ಮತ್ತು ಮಹಾಮಂಗಳಾರತಿ."
                    : isHi
                    ? "प्रातः 6:00 - 1:30 | सायं 4:30 - 8:30. नित्य काकड़ आरती एवं मंगला आरती।"
                    : isTe
                    ? "ఉదయం 6:00 - 1:30 | సాయంత్రం 4:30 - 8:30. నిత్య కాకడారతి మరియు మంగళారతి."
                    : "Morning 6:00 AM - 1:30 PM & Evening 4:30 PM - 8:30 PM daily."}
                </p>
              </div>
              <Link
                href="/timings"
                className={cn(
                  "mt-4 pt-3 border-t border-[#E8B947]/30 inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1538] hover:text-[#74132A]",
                  fontClass
                )}
              >
                <span>{isKn ? "ಪೂರ್ಣ ವೇಳಾಪಟ್ಟಿ" : isHi ? "समय सारणी देखें" : isTe ? "పూర్తి వివరాలు" : "View Schedule"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 2. Annadana */}
            <div className="p-6 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center mb-3.5 shadow-xs">
                  <UtensilsCrossed className="w-5 h-5 text-[#FFE6A0]" />
                </div>
                <h3 className={cn("text-base sm:text-lg font-bold text-[#8B1538] mb-1.5", fontClass)}>
                  {isKn ? "ನಿತ್ಯ ಅನ್ನದಾನ" : isHi ? "दैनिक महाप्रसाद" : isTe ? "నిత్య అన్నదానం" : "Free Annadana"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {isKn
                    ? "ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ 2:30 ರವರೆಗೆ ಸಕಲ ಭಕ್ತಾದಿಗಳಿಗೆ ಉಚಿತ ಸಾತ್ವಿಕ ಪ್ರಸಾದ ಭೋಜನ."
                    : isHi
                    ? "प्रतिदिन दोपहर 12:30 से 2:30 बजे तक समस्त श्रद्धालुओं हेतु निःशुल्क महाप्रसाद।"
                    : isTe
                    ? "ప్రతిరోజు మధ్యాహ్నం 12:30 నుండి 2:30 వరకు భక్తులకు ఉచిత సాత్విక భోజన ప్రసాదం."
                    : "Daily free Satvik meals served to all devotees from 12:30 PM to 2:30 PM."}
                </p>
              </div>
              <Link
                href="/contact#donation"
                className={cn(
                  "mt-4 pt-3 border-t border-[#E8B947]/30 inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1538] hover:text-[#74132A]",
                  fontClass
                )}
              >
                <span>{isKn ? "ದಾಸೋಹ ಸೇವೆ" : isHi ? "दासोह सेवा" : isTe ? "అన్నదాన సేవ" : "Annadana Seva"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3. Sevas */}
            <div className="p-6 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center mb-3.5 shadow-xs">
                  <Sparkles className="w-5 h-5 text-[#FFE6A0]" />
                </div>
                <h3 className={cn("text-base sm:text-lg font-bold text-[#8B1538] mb-1.5", fontClass)}>
                  {isKn ? "ಪವಿತ್ರ ಸೇವೆಗಳು" : isHi ? "वैदिक पूजाएँ" : isTe ? "పూజా సేవలు" : "Sacred Sevas"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {isKn
                    ? "ರುದ್ರಾಭಿಷೇಕ, ಕುಂಕುಮಾರ್ಚನೆ, ಚಂಡಿಕಾ ಹೋಮ ಹಾಗೂ ಶಾಶ್ವತ ಸೇವೆಗಳನ್ನು ಸಂಕಲ್ಪದೊಂದಿಗೆ ನೆರವೇರಿಸಿ."
                    : isHi
                    ? "रुद्राभिषेक, कुंकुमार्चन, चंडी होम एवं शाश्वत सेवाओं में वैदिक संकल्प सहित भाग लें।"
                    : isTe
                    ? "రుద్రాభిషేకం, కుంకుమార్చన, చండీ హోమం మరియు శాశ్వత పూజలలో పాల్గొనండి."
                    : "Abhisheka, Kumkumarchana, Chandi Homam, and perpetual sevas with Vedic sankalpa."}
                </p>
              </div>
              <Link
                href="/sevas"
                className={cn(
                  "mt-4 pt-3 border-t border-[#E8B947]/30 inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1538] hover:text-[#74132A]",
                  fontClass
                )}
              >
                <span>{isKn ? "ಸೇವೆಗಳು ವೀಕ್ಷಿಸಿ" : isHi ? "सेवा सूची देखें" : isTe ? "సేవలు చూడండి" : "Explore Sevas"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4. Festivals */}
            <div className="p-6 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center mb-3.5 shadow-xs">
                  <Calendar className="w-5 h-5 text-[#FFE6A0]" />
                </div>
                <h3 className={cn("text-base sm:text-lg font-bold text-[#8B1538] mb-1.5", fontClass)}>
                  {isKn ? "ಬೆಳ್ಳಿ ರಥೋತ್ಸವ" : isHi ? "बेळ्ळि रथोत्सव" : isTe ? "వెండి రథోత్సవం" : "Belli Rathotsava"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {isKn
                    ? "ಚೈತ್ರ ಮಾಸದ ವಾರ್ಷಿಕ ಜಾತ್ರೆ, ಶರನ್ನವರಾತ್ರಿ ದಸರಾ ಉತ್ಸವ ಮತ್ತು ಕಾರ್ತಿಕ ದೀಪೋತ್ಸವಗಳ ವೈಭವ."
                    : isHi
                    ? "चैत्र मास की वार्षिक जात्रा, नवरात्र महोत्सव एवं दीपोत्सव का अलौकिक उत्सव।"
                    : isTe
                    ? "చైత్ర మాసపు వార్షిక జాతర, నవరాత్రి మరియు దీపోత్సవాల వైభవం."
                    : "Annual Chaitra silver chariot procession, Sharannavaratri, and Deepotsava."}
                </p>
              </div>
              <Link
                href="/festivals"
                className={cn(
                  "mt-4 pt-3 border-t border-[#E8B947]/30 inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1538] hover:text-[#74132A]",
                  fontClass
                )}
              >
                <span>{isKn ? "ಉತ್ಸವಗಳ ವಿವರ" : isHi ? "उत्सव विवरण" : isTe ? "ఉత్సవ వివరాలు" : "All Festivals"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7E2] border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] mb-2.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#D49812]" />
                <span className={fontClass}>
                  {isKn ? "ಭಕ್ತರ ಪ್ರಶ್ನೋತ್ತರಗಳು" : isHi ? "सामान्य प्रश्नोत्तर" : isTe ? "సాధారణ ప్రశ్నలు" : "Devotee FAQ"}
                </span>
              </div>
              <h3 className={cn("text-2xl sm:text-3xl font-bold text-[#8B1538]", fontClass)}>
                {isKn
                  ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಬಗ್ಗೆ ಭಕ್ತರು ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು"
                  : isHi
                  ? "श्री अम्बादेवी धाम के विषय में अक्सर पूछे जाने वाले प्रश्न"
                  : isTe
                  ? "శ్రీ అంబాదేవి దేవస్థానం గురించి తరచుగా అడిగే ప్రశ్నలు"
                  : "Frequently Asked Questions About Sri Ambadevi Devasthana"}
              </h3>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E8B947]/50 bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-[#8B1538] hover:bg-[#FFF7E2]/50 transition-colors"
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
                      <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-[#E8B947]/30 bg-[#FFFDF8]">
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
