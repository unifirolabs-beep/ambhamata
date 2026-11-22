"use client";

import React, { useState } from "react";
import {
  Camera,
  Sparkles,
  Landmark,
  ShieldAlert,
  ChevronDown,
  Eye,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { JsonLd, createFaqSchema } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

export function GallerySeoGuide() {
  const { locale, fontClass } = useContentTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isKn = locale === "kn";
  const isHi = locale === "hi";
  const isTe = locale === "te";

  const faqs = [
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನದ ಗರ್ಭಗುಡಿಯಲ್ಲಿ ಫೋಟೋ ಅಥವಾ ವಿಡಿಯೋ ತೆಗೆಯಲು ಅನುಮತಿ ಇದೆಯೇ?"
        : isHi
        ? "क्या मंदिर के गर्भगृह के भीतर फोटोग्राफी अथवा वीडियोग्राफी की अनुमति है?"
        : isTe
        ? "ఆలయ గర్భగుడిలో ఫోటోలు లేదా వీడియోలు తీయడానికి అనుమతి ఉందా?"
        : "Is photography or videography permitted inside the Garbhagriha (Inner Sanctum)?",
      answer: isKn
        ? "ದೇವತೆಯ ಪಾವಿತ್ರ್ಯತೆ ಮತ್ತು ಏಕಾಗ್ರತೆಯ ಪೂಜಾ ವಾತಾವರಣವನ್ನು ಕಾಪಾಡಲು ಗರ್ಭಗುಡಿಯ ಒಳಗೆ ಮೊಬೈಲ್ ಹಾಗೂ ಕ್ಯಾಮೆರಾ ಬಳಕೆ ನಿಷೇಧಿಸಲಾಗಿದೆ. ಆದರೆ ಹೊರಗಿನ ಪ್ರದಕ್ಷಿಣಾ ಪಥ, ಸಭಾ ಮಂಟಪ, ಶಿಲಾ ಗೋಪುರ ಮತ್ತು ಬೆಟ್ಟದ ಪರಿಸರದಲ್ಲಿ ಫೋಟೋಗಳನ್ನು ತೆಗೆಯಬಹುದು."
        : isHi
        ? "गर्भगृह की दिव्यता एवं वैदिक मर्यादा बनाए रखने हेतु मूल विग्रह के सीधे छायांकन पर रोक है। बाहरी प्रांगण, प्रदक्षिणा पथ, नव शिला मंडप एवं पहाड़ी परिदृश्य में फोटोग्राफी की जा सकती है।"
        : isTe
        ? "గర్భగుడి పవిత్రత మరియు భక్తుల ఏకాగ్రతను దృష్టిలో ఉంచుకుని లోపల కెమెరాలు నిషేధించబడ్డాయి. ఆలయ ప్రాంగణం, ప్రదక్షిణ మార్గం మరియు కొండ పరిసరాలలో ఫోటోలు తీసుకోవచ్చు."
        : "To preserve spiritual sanctity and ritual silence, photography inside the immediate Garbhagriha is restricted. However, devotees may freely photograph the outer courtyards, stone mantapa architecture, gopuram, and scenic hill vistas.",
    },
    {
      question: isKn
        ? "ಬೆಳ್ಳಿ ರಥೋತ್ಸವ ಮತ್ತು ಜಾತ್ರೆಯ ಛಾಯಾಗ್ರಹಣಕ್ಕೆ ಡ್ರೋನ್ (Drone) ಬಳಸಬಹುದೇ?"
        : isHi
        ? "क्या रथोत्सव एवं वार्षिक मेले के दौरान ड्रोन फोटोग्राफी की अनुमति है?"
        : isTe
        ? "రథోత్సవం మరియు జాతర సమయంలో డ్రోన్ కెమెరా ఉపయోగించవచ్చా?"
        : "Is drone photography permitted during the annual Belli Rathotsava festival?",
      answer: isKn
        ? "ಲಕ್ಷಾಂತರ ಭಕ್ತಾದಿಗಳು ಸೇರುವ ಜಾತ್ರಾ ಮಹೋತ್ಸವದಲ್ಲಿ ಭದ್ರತಾ ದೃಷ್ಟಿಯಿಂದ ಡ್ರೋನ್ ಕ್ಯಾಮೆರಾ ಹಾರಿಸಲು ದೇವಸ್ಥಾನ ಆಡಳಿತ ಮತ್ತು ಸ್ಥಳೀಯ ಪೊಲೀಸ್ ಇಲಾಖೆಯಿಂದ ಮುಂಚಿತವಾಗಿ ಲಿಖಿತ ಅನುಮತಿ ಪಡೆಯುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ."
        : isHi
        ? "विशाल जनसमूह की सुरक्षा एवं व्यवस्था हेतु रथोत्सव एवं जात्रा के दौरान ड्रोन संचालन के लिए मंदिर ट्रस्ट एवं पुलिस प्रशासन से पूर्व लिखित अनुमति आवश्यक है।"
        : isTe
        ? "జాతర మహోత్సవంలో భద్రతా కారణాల దృష్ట్యా డ్రోన్ కెమెరాల వినియోగానికి ఆలయ ట్రస్ట్ మరియు స్థానిక పోలీసుల నుండి ముందస్తు అనుమతి తప్పనిసరి."
        : "Due to large pilgrim gatherings during the annual Belli Rathotsava, drone photography and professional documentary filming require prior written clearance from temple administration and local authorities.",
    },
    {
      question: isKn
        ? "ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿರುವ ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಿಯ ಫೋಟೋಗಳನ್ನು ಪೂಜೆಗಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದೇ?"
        : isHi
        ? "क्या वेबसाइट पर उपलब्ध श्री अम्बादेवी के पावन चित्रों को गृह पूजा हेतु डाउनलोड किया जा सकता है?"
        : isTe
        ? "వెబ్‌సైట్‌లోని శ్రీ అంబాదేవి చిత్రాలను పూజ కోసం డౌన్‌లోడ్ చేసుకోవచ్చా?"
        : "May devotees download these sanctum photos for personal prayer and home shrines?",
      answer: isKn
        ? "ಹೌದು, ಭಕ್ತಾದಿಗಳು ತಮ್ಮ ವೈಯಕ್ತಿಕ ಭಕ್ತಿ, ಧ್ಯಾನ, ಮನೆ ಪೂಜೆ ಮತ್ತು ಮೊಬೈಲ್ ವಾಲ್‌ಪೇಪರ್‌ಗಾಗಿ ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾದ ಪವಿತ್ರ ಚಿತ್ರಗಳನ್ನು ಸದ್ಭಾವನೆಯಿಂದ ಬಳಸಿಕೊಳ್ಳಬಹುದು."
        : isHi
        ? "हाँ, श्रद्धालु अपने व्यक्तिगत ध्यान, गृह-मंदिर में नित्य दर्शन, एवं शुभ वॉलपेपर के रूप में इन पवित्र चित्रों को आदरपूर्वक उपयोग कर सकते हैं।"
        : isTe
        ? "అవును, భక్తులు వ్యక్తిగత భక్తి, ధ్యానం మరియు గృహ పూజల కోసం ఈ పవిత్ర చిత్రాలను గౌరవప్రదంగా ఉపయోగించుకోవచ్చు."
        : "Yes, devotees are welcome to save and use these high-resolution sacred images for personal prayer, meditation, home altars, and devotional wallpaper purposes.",
    },
  ];

  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />

      {/* 1. Divine Iconography & Architectural Documentation */}
      <section
        className="py-14 sm:py-20 bg-[#FFFDF8] border-t border-[#E8B947]/30"
        aria-label="Sanctum Iconography and Architectural Heritage"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7E2] border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] mb-3">
              <Eye className="w-3.5 h-3.5 text-[#D49812]" />
              <span className={fontClass}>
                {isKn
                  ? "ಮೂರ್ತಿಶಿಲ್ಪ ಮತ್ತು ವಾಸ್ತು ವೈಭವ"
                  : isHi
                  ? "मूर्तिशिल्प एवं स्थापत्य कला"
                  : isTe
                  ? "మూర్తిశిల్పం & వాస్తు వైభవం"
                  : "Sacred Iconography & Architecture"}
              </span>
            </div>
            <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B1538] mb-3", fontClass)}>
              {isKn
                ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ಸನ್ನಿಧಿಯ ಪವಿತ್ರ ರೂಪ ಮತ್ತು ಶಿಲಾ ವಾಸ್ತುಶಿಲ್ಪ"
                : isHi
                ? "श्री अम्बादेवी का दिव्य स्वरूप एवं नवनिर्मित पाषाण मंडप"
                : isTe
                ? "శ్రీ అంబాదేవి పవిత్ర రూపం & నూతన శిలా వాస్తుశిల్పం"
                : "Divine Form of Sri Ambadevi & The Sculpted Stone Mantapa"}
            </h2>
            <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed", fontClass)}>
              {isKn
                ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಸೋಮಲಾಪುರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಪವಿತ್ರ ವಿಗ್ರಹ, ಭಕ್ತರ ಕೋರಿಕೆ ಈಡೇರಿಸುವ ವಿಳ್ಯೇದೆಲೆ ಅಲಂಕಾರ ಮತ್ತು ಪಾರಂಪರಿಕ ಕಲ್ಲಿನ ಕೆತ್ತನೆಗಳ ಸಮಗ್ರ ವಿವರಣೆ."
                : isHi
                ? "सुक़्षेत्र सिद्ध पर्वत सोमलापुर में अधिष्ठित जगन्माता श्री अम्बादेवी का पाषाण विग्रह, प्रसिद्ध विळ्ळेदेले (पान) पुष्प शृंगार और पारंपरिक द्रविड़-होयसळ शैली का प्रस्तर मंडप।"
                : isTe
                ? "సిద్ధ పర్వతంపై కొలువైన జగన్మాత శ్రీ అంబాదేవి పవిత్ర శ్యామల శిలా విగ్రహం, విశేష తమలపాకుల అలంకరణ మరియు సాంప్రదాయ గ్రానైట్ శిలా మండపం."
                : "A detailed visual documentation of the sacred stone Moola Vigraha, traditional betel-leaf floral adornment, and the intricately hand-sculpted granite Shila Mantapa atop Siddha Parvatha."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Left: Iconography Detail */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FFF7E2] border border-[#E8B947]/60 shadow-xs">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-5 h-5 text-[#FFE6A0]" />
                </div>
                <h3 className={cn("text-xl sm:text-2xl font-bold text-[#8B1538]", fontClass)}>
                  {isKn
                    ? "ಮೂಲ ವಿಗ್ರಹದ ವೈಶಿಷ್ಟ್ಯ ಮತ್ತು ವಿಳ್ಯೇದೆಲೆ ತೋರಣ"
                    : isHi
                    ? "मूल विग्रह की दिव्यता एवं विळ्ळेदेले शृंगार"
                    : isTe
                    ? "మూల విగ్రహ విశిష్టత & తమలపాకుల తోరణం"
                    : "Sacred Moola Vigraha & Betel Leaf Alankara"}
                </h3>
              </div>
              <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed mb-4", fontClass)}>
                {isKn
                  ? "ಗರ್ಭಗುಡಿಯಲ್ಲಿ ವಿರಾಜಮಾನಳಾಗಿರುವ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಮೂಲ ವಿಗ್ರಹವು ಶಕ್ತಿಶಾಲಿ ಕೃಷ್ಣ ಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಲ್ಪಟ್ಟಿದ್ದು, ದುಷ್ಟ ನಿಗ್ರಹ ಹಾಗೂ ಶಿಷ್ಟ ರಕ್ಷಣೆಯ ಸಂಕೇತವಾದ ತ್ರಿಶೂಲ, ಖಡ್ಗ ಮತ್ತು ಅಭಯ ಮುದ್ರೆಯನ್ನು ಧರಿಸಿದೆ. ಭಕ್ತಾದಿಗಳು ತಮ್ಮ ಇಷ್ಟಾರ್ಥ ಸಿದ್ಧಿಗಾಗಿ ದೇವಿಗೆ ಹಸಿರು ವಿಳ್ಯೇದೆಲೆಗಳಿಂದ ಮಾಡಿದ ಬೃಹತ್ ಪುಷ್ಪ ತೋರಣವನ್ನು ಸಮರ್ಪಿಸುತ್ತಾರೆ. ಈ ಅದ್ಭುತ ಅಲಂಕಾರವು ಮನಸ್ಸಿಗೆ ಶಾಂತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಚೈತನ್ಯವನ್ನು ತುಂಬುತ್ತದೆ."
                  : isHi
                  ? "गर्भगृह में प्रतिष्ठित माँ अम्बादेवी का दिव्य मूल विग्रह पवित्र कृष्ण शिला से निर्मित है, जो त्रिशूल, खड्ग एवं वरद-अभय मुद्रा से सुशोभित है। मनोकामना पूर्ति हेतु भक्त माता को हरे ताजे विळ्ळेदेले (नागवल्ली पत्तों) का विशाल अलौकिक तोरण व पुष्पमालाएँ अर्पित करते हैं, जो अद्भुत तेज एवं शांति प्रदान करता है।"
                  : isTe
                  ? "గర్భాలయంలో కొలువైన శ్రీ అంబాదేవి మూల విగ్రహం పవిత్ర కృష్ణ శిలలో చెక్కబడి, త్రిశూలం మరియు అభయ హస్తంతో భక్తులను కటాక్షిస్తుంది. భక్తులు తమ కోరికలు నెరవేరాలని అమ్మవారికి పచ్చి తమలపాకుల భారీ తోరణం మరియు పూలమాలలను సమర్పిస్తారు."
                  : "Carved from revered black granite stone (Krishna Shila), the Moola Vigraha of Goddess Sri Ambadevi radiates divine motherly grace, holding the sacred Trishula, sword, and blessing Abhaya mudra. Devotees regularly sponsor the majestic Vilyadele (betel leaf) arch alankara, layered with fresh fragrant marigolds, roses, and gold jewelry."}
              </p>
              <div className="pt-3 border-t border-[#E8B947]/40 text-xs sm:text-sm font-semibold text-[#8B1538]">
                {isKn
                  ? "✦ 343+ ವರ್ಷಗಳ ನಿರಂತರ ಪೂಜಾ ಸಂಪ್ರದಾಯ ಮತ್ತು ಅವಧೂತರ ಅನುಗ್ರಹ"
                  : isHi
                  ? "✦ 343+ वर्षों की अविच्छिन्न पूजन परंपरा एवं अवधूत कृपा"
                  : isTe
                  ? "✦ 343+ సంవత్సరాల నిరంతర పూజా సంప్రదాయం"
                  : "✦ Documented 343+ Years of Continuous Agama Puja & Avadhoota Blessings"}
              </div>
            </div>

            {/* Right: Granite Shila Mantapa Architecture */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E8B947]/60 shadow-xs">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Landmark className="w-5 h-5 text-[#FFE6A0]" />
                </div>
                <h3 className={cn("text-xl sm:text-2xl font-bold text-[#8B1538]", fontClass)}>
                  {isKn
                    ? "ನೂತನ ಕಲ್ಲಿನ ಶಿಲಾ ಮಂಟಪ ಮತ್ತು ಗೋಪುರ"
                    : isHi
                    ? "नूतन प्रस्तर शिला मंडप एवं स्थापत्य"
                    : isTe
                    ? "నూతన రాతి శిలా మండపం & గోపురం"
                    : "Newly Sculpted Granite Shila Mantapa"}
                </h3>
              </div>
              <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed mb-4", fontClass)}>
                {isKn
                  ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಜೀರ್ಣೋದ್ಧಾರ ಮತ್ತು ನೂತನ ಕಲ್ಲಿನ ಮಂಟಪ ನಿರ್ಮಾಣವು ಸಿಂಧನೂರಿನ ಜನಪ್ರಿಯ ಶಾಸಕರಾದ ಶ್ರೀ ಹಂಪನಗೌಡ ಬಾದರ್ಲಿ ಹಾಗೂ ತಹಶೀಲ್ದಾರ್ ಶ್ರೀ ಅರುಣ್ ಕುಮಾರ್ ಅವರ ನಾಯಕತ್ವ ಮತ್ತು ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಸಂಪೂರ್ಣಗೊಂಡಿದೆ. ದಕ್ಷಿಣ ಭಾರತದ ಶ್ರೇಷ್ಠ ಶಿಲ್ಪಿಗಳಿಂದ ಕೆತ್ತಲ್ಪಟ್ಟ ನೂರಾರು ಗ್ರಾನೈಟ್ ಕಂಬಗಳು, ಗರ್ಭಗೃಹದ ಪ್ರವೇಶ ದ್ವಾರ ಮತ್ತು ಕಳಶವು ಕರ್ನಾಟಕದ ಭವ್ಯ ಧಾರ್ಮಿಕ ಶಿಲ್ಪಕಲೆಗೆ ಸಾಕ್ಷಿಯಾಗಿದೆ."
                  : isHi
                  ? "सिंधनूर के विधायक श्री हंपनगौड़ा बादर्लि एवं तहसीलदार श्री अरुण कुमार के नेतृत्व एवं मार्गदर्शन में नवीन पाषाण मंडप का निर्माण सफलतापूर्वक संपन्न हुआ। कर्नाटक की पारंपरिक पाषाण स्थापत्य कला के अनुरूप तराशे गए नक्काशीदार खंभे एवं शिखर मंदिर को अद्वितीय भव्यता प्रदान करते हैं।"
                  : isTe
                  ? "సింధనూరు శాసనసభ్యులు శ్రీ హంపనగౌడ బాదర్లి మరియు తహశీల్దార్ శ్రీ అరుణ్ కుమార్ గారి నాయకత్వంలో నూతన రాతి మండప నిర్మాణం విజయవంతంగా పూర్తయింది. దక్షిణ భారతీయ శైలిలో చెక్కబడిన గ్రానైట్ స్తంభాలు ఆలయానికి విశేష శోభను తెచ్చాయి."
                  : "Successfully completed under the visionary leadership and guidance of Sri Hampanagouda Badarli (MLA, Sindhanur) and Sri Arun Kumar (Tahsildar), the new monolithic granite Shila Mantapa features hand-chiseled pillars, lotus lintels, and Dravidian gopuram spires built to endure for centuries."}
              </p>
              <div className="pt-3 border-t border-[#E8B947]/40 text-xs sm:text-sm font-semibold text-[#8B1538]">
                {isKn
                  ? "✦ ಕರ್ನಾಟಕ ಧಾರ್ಮಿಕ ದತ್ತಿ ಇಲಾಖೆ (HR&CE) ಮಾನ್ಯತೆ ಪಡೆದ ಪವಿತ್ರ ಕ್ಷೇತ್ರ"
                  : isHi
                  ? "✦ कर्नाटक धर्मार्थ संस्था (HR&CE) विभाग द्वारा सूचीबद्ध"
                  : isTe
                  ? "✦ కర్ణాటక దేవాదాయ శాఖ గుర్తింపు పొందిన పుణ్యక్షేత్రం"
                  : "✦ Recognized by Karnataka HR&CE Department for Heritage Conservation"}
              </div>
            </div>
          </div>

          {/* 2. Photography Guidelines Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFF7E2] to-[#FFF1CD] border border-[#E8B947]/70 shadow-xs mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Camera className="w-6 h-6 text-[#FFE6A0]" />
                </div>
                <div>
                  <h4 className={cn("text-lg sm:text-xl font-bold text-[#8B1538] mb-1.5", fontClass)}>
                    {isKn
                      ? "ದೇವಸ್ಥಾನ ಆವರಣದಲ್ಲಿ ಛಾಯಾಗ್ರಹಣ ನಿಯಮಗಳು"
                      : isHi
                      ? "मंदिर परिसर में फोटोग्राफी एवं शिष्टाचार नियम"
                      : isTe
                      ? "ఆలయ ప్రాంగణంలో ఫోటోగ్రఫీ నిబంధనలు"
                      : "Devotee Photography Guidelines & Etiquette"}
                  </h4>
                  <p className={cn("text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl", fontClass)}>
                    {isKn
                      ? "ಬೆಟ್ಟದ ಪ್ರಾಕೃತಿಕ ಸೌಂದರ್ಯ, ರಥೋತ್ಸವ ಮತ್ತು ಕಲ್ಲಿನ ವಾಸ್ತುಶಿಲ್ಪದ ಚಿತ್ರಗಳನ್ನು ಸ್ಮಾರಕವಾಗಿ ಸೆರೆಹಿಡಿಯಿರಿ. ಗರ್ಭಗುಡಿಯ ಒಳಗೆ ಮೊಬೈಲ್ ಫೋನ್‌ಗಳನ್ನು ಸೈಲೆಂಟ್ ಮೋಡ್‌ನಲ್ಲಿ ಇರಿಸಿ ಧಾರ್ಮಿಕ ಗೌರವವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಸಹಕರಿಸಿ."
                      : isHi
                      ? "पहाड़ी की मनोरम प्राकृतिक सुंदरता, भव्य रथोत्सव एवं प्रस्तर नक्काशी के चित्र अवश्य संजोएं। गर्भगृह के समक्ष मौन रखकर तथा फोन शांत रखकर मंदिर की गरिमा का सम्मान करें।"
                      : isTe
                      ? "కొండ ప్రకృతి అందాలు, రథోత్సవం మరియు శిల్పకళను ఫోటోలు తీయవచ్చు. గర్భగుడి వద్ద భక్తిశ్రద్ధలతో మౌనం పాటించి ఆలయ పవిత్రతను కాపాడండి."
                      : "Devotees are encouraged to photograph outer monuments, chariot ceremonies, and scenic hills while maintaining silence and turning off flashlights near worship areas."}
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E8B947]/70 text-xs font-bold text-[#8B1538]">
                <ShieldAlert className="w-4 h-4 text-[#D99A00]" />
                <span>{isKn ? "ಪಾವಿತ್ರ್ಯತೆ ರಕ್ಷಿಸಿ" : isHi ? "पवित्रता बनाए रखें" : isTe ? "పవిత్రతను కాపాడండి" : "Maintain Sanctity"}</span>
              </div>
            </div>
          </div>

          {/* 3. Photography & Visual Darshan FAQs */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className={cn("text-xl sm:text-2xl md:text-3xl font-bold text-[#8B1538] mb-2", fontClass)}>
                {isKn
                  ? "ಭಾವಚಿತ್ರ ಮತ್ತು ದರ್ಶನ ಸಂಬಂಧಿತ ಪ್ರಶ್ನೋತ್ತರಗಳು"
                  : isHi
                  ? "चित्र दीर्घा एवं दर्शन संबंधी सामान्य प्रश्न"
                  : isTe
                  ? "చిత్రశాల మరియు దర్శన సంబంధిత ప్రశ్నలు"
                  : "Frequently Asked Questions About Gallery & Darshan"}
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
