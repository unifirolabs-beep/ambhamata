"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bus,
  Train,
  Plane,
  Car,
  UtensilsCrossed,
  Building2,
  Droplets,
  HelpCircle,
  ChevronDown,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { useContentTranslation } from "@/messages/content-translations";
import { JsonLd, createFaqSchema } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

export function ContactPilgrimGuide() {
  const { locale, fontClass } = useContentTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isKn = locale === "kn";
  const isHi = locale === "hi";
  const isTe = locale === "te";

  const travelModes = [
    {
      icon: Bus,
      title: isKn
        ? "ರಸ್ತೆ ಮಾರ್ಗ ಮತ್ತು ಬಸ್ಸು ಸಂಪರ್ಕ"
        : isHi
        ? "सड़क मार्ग एवं बस सेवा"
        : isTe
        ? "రోడ్డు మార్గం & బస్సు రవాణా"
        : "By Road & Bus Connectivity",
      distance: isKn
        ? "ಸಿಂಧನೂರಿನಿಂದ 18 ಕಿ.ಮೀ | ರಾಯಚೂರಿನಿಂದ 75 ಕಿ.ಮೀ"
        : isHi
        ? "सिंधनूर से 18 किमी | रायचूर से 75 किमी"
        : isTe
        ? "సింధనూరు నుండి 18 కి.మీ | రాయచూరు నుండి 75 కి.మీ"
        : "18 km from Sindhanur | 75 km from Raichur",
      desc: isKn
        ? "ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ಸಂಸ್ಥೆ (KSRTC) ಮತ್ತು ಖಾಸಗಿ ಬಸ್ಸುಗಳು ಸಿಂಧನೂರನ್ನು ಬೆಂಗಳೂರು, ಹುಬ್ಬಳ್ಳಿ, ಹೈದರಾಬಾದ್, ಬಳ್ಳಾರಿ ಮತ್ತು ಕಲಬುರಗಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತವೆ. ಸಿಂಧನೂರು ಬಸ್ ನಿಲ್ದಾಣದಿಂದ ಸೋಮಲಾಪುರ ದೇವಸ್ಥಾನಕ್ಕೆ ನಿರಂತರ ಸ್ಥಳೀಯ ಬಸ್ಸುಗಳು, ಟ್ಯಾಕ್ಸಿ ಹಾಗೂ ಆಟೋರಿಕ್ಷಾಗಳು ಲಭ್ಯವಿವೆ."
        : isHi
        ? "केएसआरटीसी एवं निजी बसें सिंधनूर को बेंगलुरु, हुबली, हैदराबाद, बल्लारी और कलबुर्गी से जोड़ती हैं। सिंधनूर बस स्टैंड से सोमलापुर मंदिर के लिए नियमित स्थानीय बसें, ऑटो एवं टैक्सी सेवा उपलब्ध हैं।"
        : isTe
        ? "కేఎస్‌ఆర్‌టీసీ మరియు ప్రైవేట్ బస్సులు సింధనూరును బెంగళూరు, హుబ్బళ్ళి, హైదరాబాద్, బళ్ళారి మరియు కలబురగికి కలుపుతాయి. సింధనూరు బస్ స్టాండ్ నుండి సోమలాపుర దేవాలయానికి స్థానిక బస్సులు మరియు ఆటోలు అందుబాటులో ఉన్నాయి."
        : "KSRTC and private express buses regularly connect Sindhanur with Bengaluru (390 km), Hubballi (200 km), Hyderabad (260 km), Ballari (90 km), and Kalaburagi. From Sindhanur bus stand, frequent local buses, taxis, and auto-rickshaws reach Somalapura temple hill.",
    },
    {
      icon: Train,
      title: isKn
        ? "ರೈಲು ಮಾರ್ಗ ಸಂಪರ್ಕ"
        : isHi
        ? "रेलवे संपर्क"
        : isTe
        ? "రైలు మార్గ అనుసంధానం"
        : "By Railway Network",
      distance: isKn
        ? "ರಾಯಚೂರು ಜಂಕ್ಷನ್ (75 ಕಿ.ಮೀ) | ಗಂಗಾವತಿ (45 ಕಿ.ಮೀ)"
        : isHi
        ? "रायचूर जंक्शन (75 किमी) | गंगावती (45 किमी)"
        : isTe
        ? "రాయచూరు జంక్షన్ (75 కి.మీ) | గంగావతి (45 కి.మీ)"
        : "Raichur Junction (75 km) | Gangavathi (45 km)",
      desc: isKn
        ? "ಪ್ರಮುಖ ರೈಲ್ವೆ ನಿಲ್ದಾಣವೆಂದರೆ ರಾಯಚೂರು ಜಂಕ್ಷನ್ (RC). ಇದು ಮುಂಬೈ, ಬೆಂಗಳೂರು, ಚೆನ್ನೈ, ಹೈದರಾಬಾದ್ ಮತ್ತು ಪುಣೆ ಮಾರ್ಗದ ಪ್ರಮುಖ ನಿಲ್ದಾಣವಾಗಿದೆ. ಗಂಗಾವತಿ ಮತ್ತು ಮಾನ್ವಿ ರೈಲ್ವೆ ನಿಲ್ದಾಣಗಳೂ ಸಹ ಹತ್ತಿರದಲ್ಲಿವೆ."
        : isHi
        ? "निकटतम प्रमुख रेलवे जंक्शन रायचूर (RC) है, जो मुंबई, बेंगलुरु, चेन्नई, हैदराबाद और पुणे से सीधी रेल सेवाओं से जुड़ा है। गंगावती और मानवी स्टेशन भी निकट स्थित हैं।"
        : isTe
        ? "సమీప ప్రధాన రైల్వే స్టేషన్ రాయచూరు జంక్షన్ (RC). ఇది బెంగళూరు, ముంబై, చెన్నై, హైదరాబాద్ నగరాలతో చక్కగా అనుసంధానించబడి ఉంది. గంగావతి స్టేషన్ కూడా సమీపంలో ఉంది."
        : "The nearest major railhead is Raichur Railway Junction (RC - 75 km) on the Guntakal-Wadi line with direct superfast trains to Bengaluru, Mumbai, Hyderabad, Chennai, and Pune. Gangavathi and Manvi stations are also accessible.",
    },
    {
      icon: Plane,
      title: isKn
        ? "ವಿಮಾನಯಾನ ಸಂಪರ್ಕ"
        : isHi
        ? "हवाई मार्ग"
        : isTe
        ? "విమాన మార్గం"
        : "By Air Travel",
      distance: isKn
        ? "ಬಳ್ಳಾರಿ ಜಿಂದಾಲ್ ವಿಮಾನ ನಿಲ್ದಾಣ (110 ಕಿ.ಮೀ)"
        : isHi
        ? "जिंदल विजयनगर एयरपोर्ट तोरणगल्लु (110 किमी)"
        : isTe
        ? "బళ్ళారి జిందాల్ విమానాశ్రయం (110 కి.మీ)"
        : "Jindal Vidyanagar Airport (110 km) | Hyderabad (260 km)",
      desc: isKn
        ? "ಸಮೀಪದ ದೇಶೀಯ ವಿಮಾನ ನಿಲ್ದಾಣವೆಂದರೆ ಬಳ್ಳಾರಿ ಸಮೀಪದ ಜಿಂದಾಲ್ ವಿಜಯನಗರ ವಿಮಾನ ನಿಲ್ದಾಣ (VDY). ಹುಬ್ಬಳ್ಳಿ ವಿಮಾನ ನಿಲ್ದಾಣ (200 ಕಿ.ಮೀ) ಮತ್ತು ಹೈದರಾಬಾದ್ ರಾಜೀವ್ ಗಾಂಧಿ ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ (260 ಕಿ.ಮೀ) ಪ್ರಮುಖ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುತ್ತವೆ."
        : isHi
        ? "निकटतम घरेलू हवाई अड्डा जिंदल विजयनगर (VDY - 110 किमी) तोरणगल्लु में है। हुबली (200 किमी) तथा हैदराबाद का राजीव गांधी अंतर्राष्ट्रीय हवाई अड्डा (260 किमी) अन्य प्रमुख विकल्प हैं।"
        : isTe
        ? "సమీప డొమెస్టిక్ ఎయిర్‌పోర్ట్ బళ్ళారి తోరణగల్లు వద్ద ఉన్న జిందాల్ విజయనగర్ ఎయిర్‌పోర్ట్ (110 కి.మీ). హుబ్బళ్ళి మరియు హైదరాబాద్ అంతర్జాతీయ విమానాశ్రయాలు కూడా అందుబాటులో ఉన్నాయి."
        : "The nearest operational domestic airport is Jindal Vijayanagar Airport (VDY - 110 km) at Toranagallu/Ballari. Hubballi Airport (HBX - 200 km) and Rajiv Gandhi International Airport Hyderabad (HYD - 260 km) provide pan-India flights.",
    },
    {
      icon: Car,
      title: isKn
        ? "ಖಾಸಗಿ ವಾಹನ ಹಾಗೂ ಪಾರ್ಕಿಂಗ್"
        : isHi
        ? "निजी वाहन एवं पार्किंग व्यवस्था"
        : isTe
        ? "వ్యక్తిగత వాహనాలు & పార్కింగ్"
        : "Private Vehicle & Parking",
      distance: isKn
        ? "ರಾಜ್ಯ ಹೆದ್ದಾರಿ 29 & 23 ಸಂಪರ್ಕ"
        : isHi
        ? "राज्य राजमार्ग 29 एवं 23 मार्ग"
        : isTe
        ? "స్టేట్ హైవే 29 & 23 ద్వారా"
        : "State Highway 29 & 23 Route",
      desc: isKn
        ? "ಸುಗಮ ಡಾಂಬರು ರಸ್ತೆಗಳು ಸೋಮಲಾಪುರ ಬೆಟ್ಟದ ತಪ್ಪಲಿನವರೆಗೆ ಇವೆ. ಯಾತ್ರಿಕರ ಬಸ್ಸುಗಳು, ಕಾರುಗಳು ಮತ್ತು ದ್ವಿಚಕ್ರ ವಾಹನಗಳಿಗೆ ಪ್ರತ್ಯೇಕವಾದ ವಿಶಾಲವಾದ ಸುರಕ್ಷಿತ ಪಾರ್ಕಿಂಗ್ ಸೌಲಭ್ಯವಿದೆ."
        : isHi
        ? "सोमलापुर पहाड़ी की तलहटी तक पक्की डामर सड़क उपलब्ध है। तीर्थयात्रियों की कारों, बसों एवं दोपहिया वाहनों के लिए विशाल सुरक्षित पार्किंग स्थल मौजूद है।"
        : isTe
        ? "సోమలాపుర కొండ పాదాల వరకు రోడ్డు సదుపాయం బాగుంది. భక్తుల బస్సులు, కార్లు మరియు బైకుల కోసం విశాలమైన ఉచిత పార్కింగ్ సదుపాయం కల్పించబడింది."
        : "Well-paved asphalt roads lead directly to the Siddha Parvatha foothill. Ample, secure parking spaces are available for pilgrim buses, private cars, and two-wheelers close to the main entrance arch.",
    },
  ];

  const pilgrimAmenities = [
    {
      icon: UtensilsCrossed,
      title: isKn
        ? "ನಿತ್ಯ ಉಚಿತ ಅನ್ನದಾಸೋಹ ಪ್ರಸಾದ"
        : isHi
        ? "दैनिक निःशुल्क महाप्रसाद (अन्नदान)"
        : isTe
        ? "నిత్య ఉచిత అన్నదాన ప్రసాదం"
        : "Daily Free Annadana Prasadam",
      timing: isKn
        ? "ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ 2:30 ರವರೆಗೆ"
        : isHi
        ? "प्रतिदिन दोपहर 12:30 से 2:30 बजे तक"
        : isTe
        ? "ప్రతిరోజు మధ్యాహ్నం 12:30 నుండి 2:30 వరకు"
        : "Daily 12:30 PM to 2:30 PM",
      desc: isKn
        ? "ದರ್ಶನಕ್ಕೆ ಆಗಮಿಸುವ ಪ್ರತಿಯೊಬ್ಬ ಭಕ್ತಾದಿಗಳಿಗೂ ಶ್ರೀ ಅಂಬಾದೇವಿ ದಾಸೋಹ ಭವನದಲ್ಲಿ ಪವಿತ್ರ ಸಾತ್ವಿಕ ಭೋಜನ ಪ್ರಸಾದವನ್ನು ಪ್ರೀತಿಯಿಂದ ಉಚಿತವಾಗಿ ಬಡಿಸಲಾಗುತ್ತದೆ."
        : isHi
        ? "मंदिर आने वाले सभी भक्तों के लिए अन्नपूर्णा दासोह भवन में शुद्ध सात्विक महाप्रसाद निःशुल्क परोसा जाता है।"
        : isTe
        ? "ఆలయానికి విచ్చేసే ప్రతి భక్తునికి శ్రీ అంబాదేవి అన్నదాన భవనంలో పవిత్ర సాత్విక భోజన ప్రసాదం ఉచితంగా అందించబడుతుంది."
        : "Pure, delicious Satvik meals are lovingly served free of cost to all visiting devotees and pilgrims daily at the Sri Ambadevi Dasoha Bhavana.",
    },
    {
      icon: Building2,
      title: isKn
        ? "ಯಾತ್ರಿ ನಿವಾಸ ಮತ್ತು ವಿಶ್ರಾಂತಿ ಸೌಲಭ್ಯ"
        : isHi
        ? "तीर्थयात्री निवास एवं विश्राम गृह"
        : isTe
        ? "యాత్రికుల వసతి గృహం"
        : "Pilgrim Dharmashala & Rest Halls",
      timing: isKn
        ? "24 ಗಂಟೆ ಯಾತ್ರಿಕರ ಸೇವೆ"
        : isHi
        ? "24 घंटे तीर्थयात्री सेवा"
        : isTe
        ? "24 గంటల భక్తుల సేవ"
        : "24-Hour Devotee Assistance",
      desc: isKn
        ? "ದೂರದ ಊರುಗಳಿಂದ ವಿಶೇಷ ಸೇವೆಗಳು ಹಾಗೂ ಉತ್ಸವಗಳಿಗೆ ಬರುವ ಭಕ್ತಾದಿಗಳಿಗಾಗಿ ಸ್ವಚ್ಛವಾದ ಕೊಠಡಿಗಳು ಮತ್ತು ವಿಶ್ರಾಂತಿ ಧರ್ಮಶಾಲಾ ಸೌಲಭ್ಯ ಒದಗಿಸಲಾಗಿದೆ."
        : isHi
        ? "दूर-दराज से आने वाले श्रद्धालुओं एवं परिवारों के लिए स्वच्छ कमरे एवं विश्राम धर्मशाला सुविधा उपलब्ध है।"
        : isTe
        ? "దూర ప్రాంతాల నుండి వచ్చే భక్తులు మరియు కుటుంబాల కోసం పరిశుభ్రమైన వసతి గదులు మరియు ధర్మశాల ఏర్పాటు చేయబడింది."
        : "Clean lodging rooms and pilgrim rest shelters are available for families and devotees arriving for special sevas, homams, and festival celebrations.",
    },
    {
      icon: Droplets,
      title: isKn
        ? "ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು & ಶುಚಿತ್ವ"
        : isHi
        ? "शुद्ध पेयजल एवं स्वच्छता"
        : isTe
        ? "పరిశుభ్ర తాగునీరు & పారిశుధ్యం"
        : "RO Filtered Water & Sanitation",
      timing: isKn
        ? "ನಿರಂತರ ಸೌಲಭ್ಯ"
        : isHi
        ? "सतत सुविधा"
        : isTe
        ? "నిరంతర సదుపాయం"
        : "Continuous Facility",
      desc: isKn
        ? "ಆವರಣದಲ್ಲಿ ಆರ್.ಒ. ಶುದ್ಧೀಕರಿಸಿದ ತಂಪು ಕುಡಿಯುವ ನೀರಿನ ಕೇಂದ್ರಗಳು ಮತ್ತು ಮಹಿಳೆಯರು ಹಾಗೂ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಪ್ರತ್ಯೇಕ ಸುಸಜ್ಜಿತ ಶೌಚಾಲಯಗಳಿವೆ."
        : isHi
        ? "परिसर में आरओ प्यूरीफाइड ठंडा पेयजल केंद्र तथा महिलाओं व वरिष्ठ नागरिकों के लिए पृथक स्वच्छ शौचालय उपलब्ध हैं।"
        : isTe
        ? "ఆలయ ప్రాంగణంలో ఆర్.ఓ. శుద్ధి చేసిన తాగునీరు మరియు మహిళలు, వయోవృద్ధులకు ప్రత్యేక పరిశుభ్ర శౌచాలయాలు ఉన్నాయి."
        : "RO purified drinking water stations and separate hygienic restroom facilities for ladies and senior citizens are maintained across the premises.",
    },
  ];

  const faqs = [
    {
      question: isKn
        ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ದೈನಂದಿನ ದರ್ಶನ ಸಮಯ ಯಾವುದು?"
        : isHi
        ? "श्री अम्बादेवी मंदिर में दैनिक दर्शन का समय क्या है?"
        : isTe
        ? "శ్రీ అంబాదేవి దేవాలయం దర్శన సమయాలు ఏమిటి?"
        : "What are the daily darshan timings at Sri Ambadevi Devasthana?",
      answer: isKn
        ? "ದೇವಸ್ಥಾನವು ಪ್ರತಿದಿನ ಮುಂಜಾನೆ 6:00 ರಿಂದ ಮಧ್ಯಾಹ್ನ 1:30 ರವರೆಗೆ ಹಾಗೂ ಸಂಜೆ 4:30 ರಿಂದ ರಾತ್ರಿ 8:30 ರವರೆಗೆ ದರ್ಶನಕ್ಕೆ ತೆರೆದಿರುತ್ತದೆ. ಶುಕ್ರವಾರ, ಮಂಗಳವಾರ ಮತ್ತು ಹುಣ್ಣಿಮೆಯ ದಿನಗಳಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆಗಳು ನೆರವೇರುತ್ತವೆ."
        : isHi
        ? "मंदिर प्रतिदिन प्रातः 6:00 बजे से दोपहर 1:30 बजे तक एवं सायं 4:30 बजे से रात्रि 8:30 बजे तक खुला रहता है। शुक्रवार, मंगलवार और पूर्णिमा को विशेष अनुष्ठान होते हैं।"
        : isTe
        ? "దేవాలయం ప్రతిరోజు ఉదయం 6:00 నుండి మధ్యాహ్నం 1:30 వరకు, మరియు సాయంత్రం 4:30 నుండి రాత్రి 8:30 వరకు తెరిచి ఉంటుంది. శుక్ర, మంగళవారాల్లో ప్రత్యేక పూజలు ఉంటాయి."
        : "The temple is open daily from 6:00 AM to 1:30 PM in the morning and 4:30 PM to 8:30 PM in the evening. Special pujas and alankaras are conducted on Tuesdays, Fridays, and Purnima.",
    },
    {
      question: isKn
        ? "ಸಿಂಧನೂರು ಪಟ್ಟಣದಿಂದ ಸೋಮಲಾಪುರ ಕ್ಷೇತ್ರ ಎಷ್ಟು ದೂರದಲ್ಲಿದೆ?"
        : isHi
        ? "सिंधनूर शहर से सोमलापुर क्षेत्र कितनी दूरी पर है?"
        : isTe
        ? "సింధనూరు పట్టణం నుండి సోమలాపుర ఎంత దూరం?"
        : "How far is Somalapura Kshetra from Sindhanur town?",
      answer: isKn
        ? "ಸುಕ್ಷೇತ್ರ ಸೋಮಲಾಪುರ ಸಿದ್ಧ ಪರ್ವತವು ಸಿಂಧನೂರು ಬಸ್ ನಿಲ್ದಾಣದಿಂದ ಸುಮಾರು 18 ಕಿಲೋಮೀಟರ್ ದೂರದಲ್ಲಿದೆ. ಪ್ರಯಾಣಕ್ಕೆ ಸುಮಾರು 25 ರಿಂದ 30 ನಿಮಿಷಗಳ ಕಾಲಾವಕಾಶ ಬೇಕಾಗುತ್ತದೆ."
        : isHi
        ? "सुक़्षेत्र सोमलापुर सिद्ध पर्वत सिंधनूर बस स्टैंड से लगभग 18 किलोमीटर दूर है, जहाँ पहुँचने में 25-30 मिनट का समय लगता है।"
        : isTe
        ? "సోమలాపుర సిద్ధ పర్వతం సింధనూరు బస్ స్టాండ్ నుండి దాదాపు 18 కిలోమీటర్ల దూరంలో ఉంది. ప్రయాణానికి 25-30 నిమిషాలు పడుతుంది."
        : "Sukṣhetra Siddha Parvatha Somalapura is located approximately 18 km from Sindhanur town center and bus stand, reachable in about 25 to 30 minutes by road.",
    },
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನದಲ್ಲಿ ಭಕ್ತಾದಿಗಳಿಗೆ ಉಚಿತ ಅನ್ನದಾನ ಸೇವೆ ಲಭ್ಯವಿದೆಯೇ?"
        : isHi
        ? "क्या मंदिर में भक्तों के लिए निःशुल्क अन्नदान सेवा उपलब्ध है?"
        : isTe
        ? "ఆలయంలో భక్తులకు ఉచిత అన్నదాన సదుపాయం ఉందా?"
        : "Is free Annadana meal served to devotees at the temple?",
      answer: isKn
        ? "ಹೌದು, ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ 2:30 ರವರೆಗೆ ಶ್ರೀ ಅಂಬಾದೇವಿ ಅನ್ನದಾಸೋಹ ಭವನದಲ್ಲಿ ಸಕಲ ಭಕ್ತಾದಿಗಳಿಗೆ ಶುದ್ಧ ಸಾತ್ವಿಕ ಪ್ರಸಾದ ಭೋಜನವನ್ನು ಉಚಿತವಾಗಿ ನೀಡಲಾಗುತ್ತದೆ."
        : isHi
        ? "हाँ, प्रतिदिन दोपहर 12:30 से 2:30 बजे तक अन्नपूर्णा दासोह भवन में सभी श्रद्धालुओं को निःशुल्क शुद्ध सात्विक महाप्रसाद प्रदान किया जाता है।"
        : isTe
        ? "అవును, ప్రతిరోజు మధ్యాహ్నం 12:30 నుండి 2:30 వరకు విచ్చేసే భక్తులందరికీ ఉచిత సాత్విక అన్నప్రసాదం వడ్డించబడుతుంది."
        : "Yes, wholesome Satvik Annadana Prasadam is served free of cost to all visiting pilgrims daily from 12:30 PM to 2:30 PM at the temple Annadana hall.",
    },
    {
      question: isKn
        ? "ವಿಶೇಷ ಸೇವೆಗಳು ಮತ್ತು ಪೂಜೆಗಳನ್ನು ಹೇಗೆ ಕಾಯ್ದಿರಿಸಬಹುದು?"
        : isHi
        ? "विशेष सेवाएँ एवं पूजाएँ किस प्रकार बुक की जा सकती हैं?"
        : isTe
        ? "ప్రత్యేక పూజలు మరియు సేవలను ఎలా బుక్ చేసుకోవచ్చు?"
        : "How can devotees register or book special sevas and poojas?",
      answer: isKn
        ? "ಭಕ್ತಾದಿಗಳು ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಕಚೇರಿಗೆ ಖುದ್ದಾಗಿ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಅಧಿಕೃತ ದೂರವಾಣಿ ಸಂಖ್ಯೆ (+91 94486 42322) ಗೆ ಕರೆ ಮಾಡಿ ಸಂಕಲ್ಪ ವಿವರಗಳೊಂದಿಗೆ ಸೇವೆಗಳನ್ನು ಕಾಯ್ದಿರಿಸಬಹುದು."
        : isHi
        ? "श्रद्धालु मंदिर के प्रशासनिक कार्यालय में व्यक्तिगत रूप से आकर या आधिकारिक दूरभाष (+91 94486 42322) पर संपर्क कर सेवाएँ आरक्षित कर सकते हैं।"
        : isTe
        ? "భక్తులు ఆలయ కార్యాలయానికి స్వయంగా వచ్చి లేదా అధికారిక ఫోన్ నంబర్ (+91 94486 42322) ద్వారా తమ గోత్ర నామాలతో పూజా సేవలను బుక్ చేసుకోవచ్చు."
        : "Devotees can register for sacred sevas in person at the temple administrative counter or by calling the official temple helpline (+91 94486 42322) with their gotra and nakshatra details.",
    },
    {
      question: isKn
        ? "ದೇವಸ್ಥಾನಕ್ಕೆ ಬರುವಾಗ ಪಾಲಿಸಬೇಕಾದ ವಸ್ತ್ರಸಂಹಿತೆ (Dress Code) ಇದೆಯೇ?"
        : isHi
        ? "मंदिर दर्शन हेतु कोई विशेष पोशाक नियम (Dress Code) है?"
        : isTe
        ? "ఆలయ దర్శనానికి డ్రెస్ కోడ్ నిబంధనలు ఉన్నాయా?"
        : "Is there a recommended dress code for temple darshan?",
      answer: isKn
        ? "ಹೌದು, ಪವಿತ್ರ ಸನ್ನಿಧಿಗೆ ಆಗಮಿಸುವಾಗ ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಉಡುಪುಗಳಾದ ಧೋತಿ, ಕುರ್ತಾ, ಸೀರೆ ಅಥವಾ ಚೂಡಿದಾರ್ ಧರಿಸುವುದು ಶ್ರೇಷ್ಠ. ಗರ್ಭಗುಡಿಯ ಸಂಕಲ್ಪ ಪೂಜೆಗಳಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ವಸ್ತ್ರ ಕಡ್ಡಾಯವಾಗಿದೆ."
        : isHi
        ? "हाँ, गर्भगृह एवं आंतरिक मंडप में दर्शन हेतु पारंपरिक भारतीय वस्त्र (धोती-कुर्ता, साड़ी या सलवार-सूट) धारण करना मर्यादित और अनुशंसित है।"
        : isTe
        ? "అవును, పవిత్ర గర్భాలయ దర్శనానికి భారతీయ సంప్రదాయ దుస్తులు (ధోతీ, కుర్తా, చీర లేదా చుడీదార్) ధరించడం శ్రేయస్కరం."
        : "Yes, modest traditional Indian attire (dhoti, kurta, saree, or salwar suit) is recommended for pilgrims, especially while participating in inner sanctum Vedic poojas.",
    },
  ];

  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />

      {/* 1. Travel & How to Reach Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#E8B947]/30" aria-label="How to Reach Somalapura">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7E2] border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#D49812]" />
              <span className={fontClass}>
                {isKn
                  ? "ಯಾತ್ರಾ ಮಾರ್ಗದರ್ಶಿ"
                  : isHi
                  ? "तीर्थयात्रा मार्गदर्शिका"
                  : isTe
                  ? "యాత్ర మార్గదర్శిని"
                  : "Pilgrim Travel Guide"}
              </span>
            </div>
            <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B1538] mb-3", fontClass)}>
              {isKn
                ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ಕ್ಷೇತ್ರ ತಲುಪುವುದು ಹೇಗೆ?"
                : isHi
                ? "श्री अम्बादेवी क्षेत्र सोमलापुर कैसे पहुँचें?"
                : isTe
                ? "శ్రీ అంబాదేవి క్షేత్రానికి చేరుకోవడం ఎలా?"
                : "How to Reach Sri Ambadevi Temple, Somalapura"}
            </h2>
            <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed", fontClass)}>
              {isKn
                ? "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಸೋಮಲಾಪುರವು ರಾಯಚೂರು ಜಿಲ್ಲೆಯ ಸಿಂಧನೂರು ತಾಲೂಕಿನಲ್ಲಿದ್ದು, ರಾಜ್ಯದ ಎಲ್ಲ ಪ್ರಮುಖ ನಗರಗಳಿಂದ ಉತ್ತಮ ರಸ್ತೆ ಹಾಗೂ ಸಾರಿಗೆ ಸಂಪರ್ಕವನ್ನು ಹೊಂದಿದೆ."
                : isHi
                ? "सुक़्षेत्र सिद्ध पर्वत सोमलापुर रायचूर ज़िले के सिंधनूर में स्थित है, जो सड़क एवं रेल नेटवर्क से भली-भाँति जुड़ा हुआ है।"
                : isTe
                ? "రాయచూరు జిల్లా సింధనూరు తాలూకాలోని సోమలాపుర సిద్ధ పర్వతం అన్ని ప్రధాన పట్టణాల నుండి చక్కటి రోడ్డు కనెక్టివిటీ కలిగి ఉంది."
                : "Sukṣhetra Siddha Parvatha Somalapura in Sindhanur Taluk, Raichur District is conveniently accessible by road, rail, and nearby airports across Karnataka, Telangana, and Andhra Pradesh."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {travelModes.map((mode, idx) => {
              const Icon = mode.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF8] border border-[#E8B947]/50 shadow-xs hover:border-[#D49812] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="h-5 w-5 text-[#FFE6A0]" />
                      </div>
                      <div>
                        <h3 className={cn("text-lg font-bold text-[#8B1538]", fontClass)}>
                          {mode.title}
                        </h3>
                        <span className="text-xs font-semibold text-[#D99A00]">
                          {mode.distance}
                        </span>
                      </div>
                    </div>
                    <p className={cn("text-xs sm:text-sm text-gray-700 leading-relaxed", fontClass)}>
                      {mode.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Pilgrim Amenities & Facilities */}
      <section className="py-12 sm:py-16 bg-[#FFF9ED] border-t border-[#E8B947]/40" aria-label="Devotee Amenities">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D49812]" />
              <span className={fontClass}>
                {isKn
                  ? "ಭಕ್ತಾದಿಗಳ ಸೌಲಭ್ಯಗಳು"
                  : isHi
                  ? "श्रद्धालु सेवा सुविधाएँ"
                  : isTe
                  ? "భక్తుల సదుపాయాలు"
                  : "Devotee Amenities & Facilities"}
              </span>
            </div>
            <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B1538] mb-3", fontClass)}>
              {isKn
                ? "ಕ್ಷೇತ್ರದಲ್ಲಿ ಯಾತ್ರಿಕರಿಗೆ ಕಲ್ಪಿಸಲಾದ ಸೌಲಭ್ಯಗಳು"
                : isHi
                ? "सोमलापुर धाम में तीर्थयात्रियों हेतु उपलब्ध सुविधाएँ"
                : isTe
                ? "సోమలాపుర క్షేత్రంలో యాత్రికులకు కల్పించిన వసతులు"
                : "Pilgrim Comfort & Sacred Facilities at Somalapura"}
            </h2>
            <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed", fontClass)}>
              {isKn
                ? "ದೂರದ ಊರುಗಳಿಂದ ಬರುವ ಭಕ್ತರ ಸುಖಕರ ದರ್ಶನ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಅನುಭವಕ್ಕಾಗಿ ದೇವಸ್ಥಾನ ಸಮಿತಿಯು ಅಗತ್ಯ ಸಕಲ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳನ್ನು ಕಲ್ಪಿಸಿದೆ."
                : isHi
                ? "दूर-दराज से पधारने वाले श्रद्धालुओं के सुखद दर्शन एवं आध्यात्मिक अनुभव हेतु मंदिर प्रशासन द्वारा समुचित सुविधाएँ उपलब्ध कराई गई हैं।"
                : isTe
                ? "దూరప్రాంతాల నుండి వచ్చే భక్తులకు ఆధ్యాత్మిక అనుభూతిని కలిగించేందుకు దేవస్థానం అన్ని మౌలిక వసతులను కల్పించింది."
                : "To ensure a peaceful and spiritually enriching pilgrimage, Sri Ambadevi Devasthana provides dedicated amenities for families, elders, and groups."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {pilgrimAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8B947]/60 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FFF7E2] border border-[#E8B947]/70 text-[#8B1538] flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <h3 className={cn("text-base sm:text-lg font-bold text-[#8B1538] mb-1.5", fontClass)}>
                      {amenity.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D49812] mb-3">
                      <Clock className="w-3 h-3" />
                      <span>{amenity.timing}</span>
                    </div>
                    <p className={cn("text-xs sm:text-sm text-gray-700 leading-relaxed", fontClass)}>
                      {amenity.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#E8B947]/30" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7E2] border border-[#E8B947]/60 text-xs font-bold text-[#8B1538] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#D49812]" />
              <span className={fontClass}>
                {isKn
                  ? "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೋತ್ತರಗಳು"
                  : isHi
                  ? "अक्सर पूछे जाने वाले प्रश्न"
                  : isTe
                  ? "తరచూ అడిగే ప్రశ్నలు"
                  : "Frequently Asked Questions"}
              </span>
            </div>
            <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B1538] mb-3", fontClass)}>
              {isKn
                ? "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಭಕ್ತರ ಪ್ರಶ್ನೋತ್ತರಗಳು"
                : isHi
                ? "श्री अम्बादेवी धाम दर्शन संबंधी प्रश्नोत्तर"
                : isTe
                ? "శ్రీ అంబాదేవి దర్శన సంబంధిత సందేహాలు"
                : "Common Questions for Visitors & Devotees"}
            </h2>
            <p className={cn("text-sm sm:text-base text-gray-700 leading-relaxed", fontClass)}>
              {isKn
                ? "ದರ್ಶನ, ಸೇವೆಗಳು, ಸಮಯ ಮತ್ತು ಯಾತ್ರೆಗೆ ಸಂಬಂಧಿಸಿದ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಅಧಿಕೃತ ಮಾಹಿತಿ."
                : isHi
                ? "दर्शन, सेवा, समय एवं यात्रा से संबंधित प्रमुख प्रश्नों के आधिकारिक उत्तर।"
                : isTe
                ? "దర్శనం, పూజా సేవలు, సమయాలు మరియు ప్రయాణానికి సంబంధించిన ప్రశ్నలకు సమాధానాలు."
                : "Essential information regarding darshan timings, seva booking, prasadam, and pilgrimage planning."}
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E8B947]/50 bg-[#FFFDF8] overflow-hidden transition-all duration-200"
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
                    <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-[#E8B947]/30 bg-white">
                      <p className={fontClass}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Helpline CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-[#FFF7E2] border border-[#E8B947]/60 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className={cn("text-base font-bold text-[#8B1538]", fontClass)}>
                {isKn
                  ? "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಅಥವಾ ವಿಚಾರಣೆ ಬೇಕೇ?"
                  : isHi
                  ? "अधिक जानकारी या सहायता चाहिए?"
                  : isTe
                  ? "మరింత సమాచారం లేదా సహాయం కావాలా?"
                  : "Need Further Assistance or Information?"}
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                {isKn
                  ? "ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಕಚೇರಿಗೆ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ: +91 94486 42322"
                  : isHi
                  ? "मंदिर कार्यालय हेल्पलाइन पर सीधे संपर्क करें: +91 94486 42322"
                  : isTe
                  ? "ఆలయ కార్యాలయం హెల్ప్‌లైన్‌ను నేరుగా సంప్రదించండి: +91 94486 42322"
                  : "Call our official temple office helpline directly: +91 94486 42322"}
              </p>
            </div>
            <Link
              href="tel:+919448642322"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8B1538] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#74132A] transition-colors shrink-0"
            >
              <span>{isKn ? "ಕರೆ ಮಾಡಿ" : isHi ? "कॉल करें" : isTe ? "కాల్ చేయండి" : "Call Helpline"}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
