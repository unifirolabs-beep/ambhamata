import type { Locale } from "@/constants";

export interface DestinationPlace {
  id: string;
  order: number;
  name: string;
  shortMapLabel: string;
  location: string;
  category: string;
  distance: string;
  duration: string;
  durationShort: string;
  description: string;
  image: string;
  imageAlt: string;
  lat: number;
  lng: number;
  directionsDestination: string;
  localizedName?: Partial<Record<Locale, string>>;
  localizedLocation?: Partial<Record<Locale, string>>;
  localizedDescription?: Partial<Record<Locale, string>>;
  localizedCategory?: Partial<Record<Locale, string>>;
}

export const STARTING_LOCATION = {
  eyebrow: "Your Journey Starts At",
  name: "Sri Ambadevi Temple (Amba Matha)",
  shortMapLabel: "Sri Ambadevi Temple, Sindhanur",
  address: "Somalapura, Sindhanur Taluk, Raichur District, Karnataka, India.",
  originQuery: "Sri Ambadevi Temple, Somalapura, Sindhanur, Karnataka, India",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sri+Ambadevi+Temple+Somalapura+Sindhanur+Karnataka",
  lat: 15.653144,
  lng: 76.799169,
} as const;

export function buildGoogleDirectionsUrl(destinationAddress: string): string {
  const params = new URLSearchParams({
    api: "1",
    origin: STARTING_LOCATION.originQuery,
    destination: destinationAddress,
    travelmode: "driving",
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export const DESTINATION_PLACES: DestinationPlace[] = [
  {
    id: "roudkunda-ranganatha-swamy-temple",
    order: 1,
    name: "Roudkunda Shree Laxmi Bande Ranganatha Swamy Temple",
    shortMapLabel: "Roudkunda Ranganatha",
    location: "Roudkunda (Sindhanur Rural), Raichur District",
    category: "Temple / Hill",
    distance: "10.2 km",
    duration: "18 minutes",
    durationShort: "18 mins",
    description:
      "Revered ancient hilltop cave temple dedicated to Lord Sri Laxmi Ranganatha Swamy carved on natural granite boulders, surrounded by historical fort ruins and panoramic landscape.",
    image: "/places/roudkunda.jpg",
    imageAlt: "Roudkunda Shree Laxmi Bande Ranganatha Swamy Temple hill and ancient shrine in Sindhanur Rural",
    lat: 15.677425,
    lng: 76.775358,
    directionsDestination:
      "Shree Laxmi Bande Ranganatha Swamy Temple, Roudkunda, Sindhanur, Raichur District, Karnataka 584128, India",
    localizedName: {
      kn: "ರೌಡಕುಂದ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ಬಂಡೆ ರಂಗನಾಥ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ",
      hi: "रौडकुंदा श्री लक्ष्मी बंडे रंगनाथ स्वामी मंदिर",
      te: "రౌడకుండ శ్రీ లక్ష్మీ బండే రంగనాథ స్వామి ఆలయం",
    },
    localizedLocation: {
      kn: "ರೌಡಕುಂದ (ಸಿಂಧನೂರು ಗ್ರಾಮೀಣ), ರಾಯಚೂರು ಜಿಲ್ಲೆ",
      hi: "रौडकुंदा (सिंधनूर ग्रामीण), रायचूर ज़िला",
      te: "రౌడకుండ (సింధనూరు గ్రామీణ), రాయచూరు జిల్లా",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ / ಬೆಟ್ಟ",
      hi: "मंदिर / पर्वत",
      te: "ఆలయం / కొండ",
    },
    localizedDescription: {
      kn: "ನೈಸರ್ಗಿಕ ಬೃಹತ್ ಬಂಡೆಯ ಮೇಲೆ ನೆಲೆಸಿರುವ ಪುರಾತನ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ರಂಗನಾಥ ಸ್ವಾಮಿಯ ದಿವ್ಯ ಗುಹಾ ದೇವಾಲಯ ಹಾಗೂ ಐತಿಹಾಸಿಕ ಕೋಟೆಯ ರಮಣೀಯ ಪರಿಸರವನ್ನು ದರ್ಶಿಸಿ.",
      hi: "प्राकृतिक विशाल शिला पर उत्कीर्ण भगवान श्री लक्ष्मी रंगनाथ स्वामी का प्राचीन पावन मंदिर एवं ऐतिहासिक पहाड़ी का दर्शन करें।",
      te: "సహజసిద్ధమైన భారీ బండపై కొలువైన శ్రీ లక్ష్మీ రంగనాథ స్వామి వారి పురాతన గుహాలయం మరియు చారిత్రక కొండ పరిసరాలను దర్శించండి.",
    },
  },
  {
    id: "mukkunda-murahari-swamy-temple",
    order: 2,
    name: "Mukkunda Murahari Swamy Temple",
    shortMapLabel: "Mukkunda Murahari",
    location: "Mukkunda Village, Sindhanur Taluk, Raichur District",
    category: "Temple / River Heritage",
    distance: "12.4 km",
    duration: "22 minutes",
    durationShort: "22 mins",
    description:
      "Centuries-old historic shrine of Lord Shri Murahari (Sri Krishna) and Somalingeshwara nestled on the scenic banks of the sacred Tungabhadra River, celebrating timeless cultural heritage.",
    image: "/places/mukkunda.jpg",
    imageAlt: "Ancient Shri Murahari and Somalingeshwara Temple on Tungabhadra river banks at Mukkunda village",
    lat: 15.60583,
    lng: 76.81722,
    directionsDestination:
      "Ancient Shri Murahari and Somalingeshwara Temple, Mukkunda Village, Sindhanur Taluk, Raichur District, Karnataka 584128, India",
    localizedName: {
      kn: "ಮುಕ್ಕುಂದ ಮುರಹರಿ ಸ್ವಾಮಿ ಮತ್ತು ಸೋಮಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನ",
      hi: "मुक्कुंदा मुरहरि स्वामी एवं सोमलिंगेश्वर मंदिर",
      te: "ముక్కుంద మురహరి స్వామి & సోమలింగేశ్వర ఆలయం",
    },
    localizedLocation: {
      kn: "ಮುಕ್ಕುಂದ ಗ್ರಾಮ, ಸಿಂಧನೂರು ತಾಲೂಕು, ರಾಯಚೂರು ಜಿಲ್ಲೆ",
      hi: "मुक्कुंदा ग्राम, सिंधनूर तालुक, रायचूर ज़िला",
      te: "ముక్కుంద గ్రామం, సింధనూరు తాలూకా, రాయచూరు జిల్లా",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ / ನದಿ ಪರಂಪರೆ",
      hi: "मंदिर / नदीय विरासत",
      te: "ఆలయం / నదీ తీరం",
    },
    localizedDescription: {
      kn: "ಪವಿತ್ರ ತುಂಗಭದ್ರಾ ನದಿಯ ತೀರದಲ್ಲಿ ನೆಲೆಸಿರುವ 600ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳ ಇತಿಹಾಸವಿರುವ ಶ್ರೀ ಮುರಹರಿ (ಕೃಷ್ಣ) ಹಾಗೂ ಸೋಮಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನದ ಪಾವನ ಸನ್ನಿಧಿಗೆ ಭೇಟಿ ನೀಡಿ.",
      hi: "पवित्र तुंगभद्रा नदी के तट पर स्थित 600 वर्षों से अधिक प्राचीन श्री मुरहरि (कृष्ण) एवं सोमलिंगेश्वर मंदिर के दर्शन करें।",
      te: "పవిత్ర తుంగభద్ర నదీ తీరాన ఉన్న 600 ఏళ్లకు పైగా పురాతన చరిత్ర కలిగిన శ్రీ మురహరి (కృష్ణ) మరియు సోమలింగేశ్వర దివ్య క్షేత్రాన్ని దర్శించండి.",
    },
  },
  {
    id: "lakshalinga-maha-giri",
    order: 3,
    name: "Lakshalinga Maha Giri Temple",
    shortMapLabel: "Lakshalinga",
    location: "Hanumapur",
    category: "Temple",
    distance: "15.4 km",
    duration: "25 minutes",
    durationShort: "25 mins",
    description:
      "Discover the magnificent Shiva Linga, representations of the twelve Jyotirlingas and the sacred Spatika Linga.",
    image: "/places/lakshalinga.jpg",
    imageAlt: "Lakshalinga Maha Giri Shiva Temple sanctum near Hanumapur, Sindhanur",
    lat: 15.694688,
    lng: 76.671563,
    directionsDestination:
      "Lakshalinga Maha Giri Temple, Hanumapur, Sindhanur, Karnataka, India",
    localizedName: {
      kn: "ಲಕ್ಷಲಿಂಗ ಮಹಾಗಿರಿ ದೇವಸ್ಥಾನ",
      hi: "लक्षलिंग महागिरि मंदिर",
      te: "లక్షలింగ మహాగిరి ఆలయం",
    },
    localizedLocation: {
      kn: "ಹನುಮಾಪುರ",
      hi: "हनुमापुर",
      te: "హనుమాపురం",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ",
      hi: "मंदिर",
      te: "ఆలయం",
    },
    localizedDescription: {
      kn: "ಭವ್ಯ ಶಿವಲಿಂಗ, ದ್ವಾದಶ ಜ್ಯೋತಿರ್ಲಿಂಗಗಳ ದರ್ಶನ ಹಾಗೂ ಪವಿತ್ರ ಸ್ಫಟಿಕ ಲಿಂಗದ ದರ್ಶನ ಪಡೆಯಿರಿ.",
      hi: "भव्य शिवलिंग, द्वादश ज्योतिर्लिंगों के स्वरूप और पवित्र स्फटिक लिंग के दर्शन करें।",
      te: "భవ్యమైన శివలింగం, ద్వాదశ జ్యోతిర్లింగాల రూపాలు మరియు పవిత్ర స్ఫటిక లింగాన్ని దర్శించండి.",
    },
  },
  {
    id: "maski-archaeological-site",
    order: 4,
    name: "Maski Archaeological Site",
    shortMapLabel: "Maski",
    location: "Maski",
    category: "Heritage",
    distance: "Approximately 32 km",
    duration: "40 minutes",
    durationShort: "40 mins",
    description:
      "Explore the historic archaeological site known for the Minor Rock Edict of Emperor Ashoka.",
    image: "/places/maski.jpg",
    imageAlt: "Ashoka Minor Rock Edict stone inscription at Maski Archaeological Site",
    lat: 15.96,
    lng: 76.65,
    directionsDestination:
      "Maski Ashoka Rock Edict, Maski, Raichur District, Karnataka, India",
    localizedName: {
      kn: "ಮಸ್ಕಿ ಪುರಾತತ್ವ ಕ್ಷೇತ್ರ",
      hi: "मस्की पुरातात्विक स्थल",
      te: "మస్కి పురావస్తు క్షేత్రం",
    },
    localizedLocation: {
      kn: "ಮಸ್ಕಿ",
      hi: "मस्की",
      te: "మస్కి",
    },
    localizedCategory: {
      kn: "ಪಾರಂಪರಿಕ ತಾಣ",
      hi: "विरासत स्थल",
      te: "చారిత్రక క్షేత్రం",
    },
    localizedDescription: {
      kn: "ಸಾಮ್ರಾಟ್ ಅಶೋಕನ ಶಿಲಾಶಾಸನಕ್ಕೆ ಪ್ರಸಿದ್ಧವಾದ ಐತಿಹಾಸಿಕ ಪುರಾತತ್ವ ಸ್ಥಳವನ್ನು ವೀಕ್ಷಿಸಿ.",
      hi: "सम्राट अशोक के लघु शिलालेख के लिए प्रसिद्ध ऐतिहासिक पुरातात्विक स्थल का अन्वेषण करें।",
      te: "చక్రవర్తి అశోకుని శిలాశాసనానికి ప్రసిద్ధి చెందిన చారిత్రక పురావస్తు స్థలాన్ని చూడండి.",
    },
  },
  {
    id: "mudgal-fort",
    order: 5,
    name: "Mudgal Fort",
    shortMapLabel: "Mudgal",
    location: "Mudgal",
    category: "Fort",
    distance: "55.6 km",
    duration: "1 hour 23 minutes",
    durationShort: "1 hr 23 mins",
    description:
      "Discover the historic fort and its impressive fortifications and architectural remains.",
    image: "/places/mudgal.jpg",
    imageAlt: "Historic stone bastion and walls of Mudgal Fort in Raichur district",
    lat: 16.014167,
    lng: 76.434977,
    directionsDestination: "Mudgal Fort, Mudgal, Karnataka, India",
    localizedName: {
      kn: "ಮುದ್ಗಲ್ ಕೋಟೆ",
      hi: "मुद्गल किला",
      te: "ముద్గల్ కోట",
    },
    localizedLocation: {
      kn: "ಮುದ್ಗಲ್",
      hi: "मुद्गल",
      te: "ముద్గల్",
    },
    localizedCategory: {
      kn: "ಕೋಟೆ",
      hi: "किला",
      te: "కోట",
    },
    localizedDescription: {
      kn: "ಭವ್ಯ ಕೋಟೆ ಗೋಡೆಗಳು ಹಾಗೂ ಪ್ರಾಚೀನ ವಾಸ್ತುಶಿಲ್ಪ ಅವಶೇಷಗಳಿರುವ ಐತಿಹಾಸಿಕ ಮುದ್ಗಲ್ ಕೋಟೆಯನ್ನು ನೋಡಿ.",
      hi: "ऐतिहासिक किले, उसकी सुदृढ़ प्राचीरों और प्राचीन वास्तुशिल्प अवशेषों का अवलोकन करें।",
      te: "చారిత్రక కోట మరియు దాని ప్రాకారాలు, పురాతన నిర్మాణ విశేషాలను తిలకించండి.",
    },
  },
  {
    id: "anjanadri-betta",
    order: 6,
    name: "Anjanadri Betta",
    shortMapLabel: "Anjanadri Betta",
    location: "Anegundi",
    category: "Temple / Hill",
    distance: "63.6 km",
    duration: "1 hour 40 minutes",
    durationShort: "1 hr 40 mins",
    description:
      "Visit the revered hill associated with Lord Hanuman, known for its temple, steps and panoramic views.",
    image: "/places/anjanadri.jpg",
    imageAlt: "Anjanadri Betta hilltop Hanuman Temple among granite boulders at Anegundi",
    lat: 15.352104,
    lng: 76.470478,
    directionsDestination: "Anjanadri Betta, Anegundi, Karnataka, India",
    localizedName: {
      kn: "ಅಂಜನಾದ್ರಿ ಬೆಟ್ಟ",
      hi: "अंजनाद्रि पर्वत",
      te: "అంజనాద్రి కొండ",
    },
    localizedLocation: {
      kn: "ಆನೆಗೊಂದಿ",
      hi: "आनेगुंडी",
      te: "ఆనెగొంది",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ / ಬೆಟ್ಟ",
      hi: "मंदिर / पर्वत",
      te: "ఆలయం / కొండ",
    },
    localizedDescription: {
      kn: "ಶ್ರೀ ಆಂಜನೇಯ ಸ್ವಾಮಿಯ ಪವಿತ್ರ ಜನ್ಮಸ್ಥಳ, ಮೆಟ್ಟಿಲುಗಳು ಹಾಗೂ ವಿಹಂಗಮ ನೋಟಕ್ಕೆ ಹೆಸರಾದ ಬೆಟ್ಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
      hi: "भगवान हनुमान से जुड़े इस पावन पर्वत, मंदिर, सीढ़ियों और विहंगम दृश्यों का दर्शन करें।",
      te: "శ్రీ ఆంజనేయ స్వామి జన్మస్థలంగా ప్రసిద్ధి చెందిన పవిత్ర కొండ, ఆలయం మరియు సుందర దృశ్యాలను దర్శించండి.",
    },
  },
  {
    id: "pampa-sarovar-anegundi",
    order: 7,
    name: "Pampa Sarovar & Anegundi",
    shortMapLabel: "Pampa Sarovar",
    location: "Anegundi",
    category: "Temple / Heritage",
    distance: "Approximately 66 km",
    duration: "1 hour 45 minutes",
    durationShort: "1 hr 45 mins",
    description:
      "Experience the sacred Pampa Sarovar and explore the historic village of Anegundi.",
    image: "/places/pampa.jpg",
    imageAlt: "Sacred Pampa Sarovar temple tank surrounded by rocky hills at Anegundi",
    lat: 15.353764,
    lng: 76.477375,
    directionsDestination: "Pampa Sarovar, Anegundi, Karnataka, India",
    localizedName: {
      kn: "ಪಂಪಾ ಸರೋವರ ಮತ್ತು ಆನೆಗೊಂದಿ",
      hi: "पंपा सरोवर एवं आनेगुंडी",
      te: "పంపా సరోవరం & ఆనెగొంది",
    },
    localizedLocation: {
      kn: "ಆನೆಗೊಂದಿ",
      hi: "आनेगुंडी",
      te: "ఆనెగొంది",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ / ಪರಂಪರೆ",
      hi: "मंदिर / विरासत",
      te: "ఆలయం / వారసత్వం",
    },
    localizedDescription: {
      kn: "ಪವಿತ್ರ ಪಂಪಾ ಸರೋವರದ ದರ್ಶನ ಪಡೆದು ಐತಿಹಾಸಿಕ ಆನೆಗೊಂದಿ ಗ್ರಾಮವನ್ನು ಅನ್ವೇಷಿಸಿ.",
      hi: "पवित्र पंपा सरोवर का अनुभव करें और ऐतिहासिक आनेगुंडी ग्राम का भ्रमण करें।",
      te: "పవిత్ర పంపా సరోవరాన్ని దర్శించి చారిత్రక ఆనెగొంది గ్రామాన్ని చూడండి.",
    },
  },
  {
    id: "hampi-temples",
    order: 8,
    name: "Hampi – Virupaksha & Vittala Temples",
    shortMapLabel: "Hampi",
    location: "Hampi",
    category: "Temple / UNESCO Heritage",
    distance: "75.3 km",
    duration: "2 hours 1 minute",
    durationShort: "2 hrs 1 min",
    description:
      "Discover the iconic Stone Chariot, ancient temple complexes and remarkable Vijayanagara heritage.",
    image: "/places/hampi.jpg",
    imageAlt: "Virupaksha Temple gopuram at UNESCO World Heritage Site Hampi",
    lat: 15.334444,
    lng: 76.462222,
    directionsDestination:
      "Vittala Temple and Virupaksha Temple, Hampi, Karnataka, India",
    localizedName: {
      kn: "ಹಂಪಿ – ವಿರೂಪಾಕ್ಷ ಮತ್ತು ವಿಠಲ ದೇವಸ್ಥಾನಗಳು",
      hi: "हम्पी – विरुपाक्ष एवं विट्ठल मंदिर",
      te: "హంపి – విరూపాక్ష & విఠల ఆలయాలు",
    },
    localizedLocation: {
      kn: "ಹಂಪಿ",
      hi: "हम्पी",
      te: "హంపి",
    },
    localizedCategory: {
      kn: "ಯುನೆಸ್ಕೋ ಪರಂಪರೆ",
      hi: "मंदिर / यूनेस्को विरासत",
      te: "ఆలయం / యునెస్కో వారసత్వం",
    },
    localizedDescription: {
      kn: "ಪ್ರಸಿದ್ಧ ಕಲ್ಲಿನ ರಥ, ಪ್ರಾಚೀನ ದೇವಸ್ಥಾನ ಸಂಕೀರ್ಣಗಳು ಹಾಗೂ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಭವ್ಯ ಪರಂಪರೆಯನ್ನು ಕಾಣಿರಿ.",
      hi: "प्रसिद्ध पत्थर के रथ, प्राचीन मंदिर परिसरों और विजयनगर साम्राज्य की अद्भुत विरासत को देखें।",
      te: "ప్రసిద్ధ రాతి రథం, ప్రాచీన ఆలయ సముదాయాలు మరియు విజయనగర వారసత్వాన్ని వీక్షించండి.",
    },
  },
  {
    id: "raichur-fort",
    order: 9,
    name: "Raichur Fort",
    shortMapLabel: "Raichur Fort",
    location: "Raichur",
    category: "Fort",
    distance: "91.2 km",
    duration: "1 hour 45 minutes",
    durationShort: "1 hr 45 mins",
    description:
      "Explore the historic hilltop fortress and its remarkable architectural heritage.",
    image: "/places/raichur.jpg",
    imageAlt: "Raichur Fort stone walls and hilltop citadel in Raichur, Karnataka",
    lat: 16.199149,
    lng: 77.349131,
    directionsDestination: "Raichur Fort, Raichur, Karnataka, India",
    localizedName: {
      kn: "ರಾಯಚೂರು ಕೋಟೆ",
      hi: "रायचूर किला",
      te: "రాయచూరు కోట",
    },
    localizedLocation: {
      kn: "ರಾಯಚೂರು",
      hi: "रायचूर",
      te: "రాయచూరు",
    },
    localizedCategory: {
      kn: "ಕೋಟೆ",
      hi: "किला",
      te: "కోట",
    },
    localizedDescription: {
      kn: "ಬೆಟ್ಟದ ಮೇಲಿರುವ ಐತಿಹಾಸಿಕ ರಾಯಚೂರು ಕೋಟೆ ಮತ್ತು ಅದರ ಗಮನಾರ್ಹ ವಾಸ್ತುಶಿಲ್ಪ ಪರಂಪರೆಯನ್ನು ವೀಕ್ಷಿಸಿ.",
      hi: "पहाड़ी पर स्थित ऐतिहासिक रायचूर किले और उसकी अद्भुत स्थापत्य विरासत का भ्रमण करें।",
      te: "కొండపై ఉన్న చారిత్రక రాయచూరు కోట మరియు దాని అద్భుత నిర్మాణ వారసత్వాన్ని చూడండి.",
    },
  },
  {
    id: "gavisiddheshwara-matha",
    order: 10,
    name: "Sri Gavisiddheshwara Matha",
    shortMapLabel: "Gavi Matha",
    location: "Koppal",
    category: "Temple / Matha",
    distance: "94.3 km",
    duration: "2 hours 13 minutes",
    durationShort: "2 hrs 13 mins",
    description:
      "Visit the revered spiritual centre of Koppal, known for its religious traditions and temple heritage.",
    image: "/places/gavi.jpg",
    imageAlt: "Historic Sri Gavisiddheshwara Matha temple courtyard in Koppal",
    lat: 15.344337,
    lng: 76.159036,
    directionsDestination:
      "Sri Gavisiddheshwara Matha, Koppal, Karnataka, India",
    localizedName: {
      kn: "ಶ್ರೀ ಗವಿಸಿದ್ದೇಶ್ವರ ಮಠ",
      hi: "श्री गविसिद्धेश्वर मठ",
      te: "శ్రీ గవిసిద్ధేశ్వర మఠం",
    },
    localizedLocation: {
      kn: "ಕೊಪ್ಪಳ",
      hi: "कोप्पल",
      te: "కొప్పల్",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ / ಮಠ",
      hi: "मंदिर / मठ",
      te: "ఆలయం / మఠం",
    },
    localizedDescription: {
      kn: "ಧಾರ್ಮಿಕ ಸಂಪ್ರದಾಯಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಗೆ ಪ್ರಸಿದ್ಧವಾದ ಕೊಪ್ಪಳದ ಪವಿತ್ರ ಗವಿಮಠಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
      hi: "धार्मिक परंपराओं और मंदिर विरासत के लिए प्रसिद्ध कोप्पल के इस पावन आध्यात्मिक केंद्र के दर्शन करें।",
      te: "ధార్మిక సంప్రదాయాలు మరియు ఆలయ వారసత్వానికి ప్రసిద్ధి చెందిన కొప్పల్ ఆధ్యాత్మిక క్షేత్రాన్ని దర్శించండి.",
    },
  },
  {
    id: "mantralayam-raghavendra-mutt",
    order: 11,
    name: "Mantralayam – Sri Raghavendra Swamy Mutt",
    shortMapLabel: "Mantralayam",
    location: "Mantralayam",
    category: "Temple",
    distance: "104 km",
    duration: "2 hours 21 minutes",
    durationShort: "2 hrs 21 mins",
    description:
      "Visit the important pilgrimage destination dedicated to Sri Raghavendra Swamy, situated beside the Tungabhadra River.",
    image: "/places/mantralayam.jpg",
    imageAlt: "Grand entrance gopuram of Sri Raghavendra Swamy Mutt at Mantralayam",
    lat: 15.942595,
    lng: 77.422208,
    directionsDestination:
      "Sri Raghavendra Swamy Mutt, Mantralayam, Andhra Pradesh, India",
    localizedName: {
      kn: "ಮಂತ್ರಾಲಯ – ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠ",
      hi: "मंत्रालयम – श्री राघवेंद्र स्वामी मठ",
      te: "మంత్రాలయం – శ్రీ రాఘవేంద్ర స్వామి మఠం",
    },
    localizedLocation: {
      kn: "ಮಂತ್ರಾಲಯ",
      hi: "मंत्रालयम",
      te: "మంత్రాలయం",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ / ಮಠ",
      hi: "मंदिर / तीर्थ",
      te: "ఆలయం",
    },
    localizedDescription: {
      kn: "ತುಂಗಭದ್ರಾ ನದಿಯ ತೀರದಲ್ಲಿರುವ ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳ ಪವಿತ್ರ ಪುಣ್ಯಕ್ಷೇತ್ರ ಮಂತ್ರಾಲಯದ ದರ್ಶನ ಪಡೆಯಿರಿ.",
      hi: "तुंगभद्रा नदी के तट पर स्थित श्री राघवेंद्र स्वामी को समर्पित इस प्रमुख तीर्थ धाम के दर्शन करें।",
      te: "తుంగభద్ర నది ఒడ్డున ఉన్న శ్రీ రాఘవేంద్ర స్వామి వారి పవిత్ర పుణ్యక్షేత్రం మంత్రాలయాన్ని దర్శించండి.",
    },
  },
  {
    id: "panchamukhi-anjaneya-temple",
    order: 12,
    name: "Panchamukhi Anjaneya Temple",
    shortMapLabel: "Panchamukhi",
    location: "Ganadhal",
    category: "Temple",
    distance: "Approximately 110 km",
    duration: "2 hours 30 minutes",
    durationShort: "2 hrs 30 mins",
    description:
      "Discover the sacred cave shrine associated with five-faced Lord Hanuman and the spiritual traditions of Guru Raghavendra.",
    image: "/places/panchamukhi.jpg",
    imageAlt: "Panchamukhi Anjaneya Cave Temple nestled among sacred rocks at Ganadhal",
    lat: 15.978333,
    lng: 77.424722,
    directionsDestination:
      "Panchamukhi Anjaneya Temple, Ganadhal, Raichur, Karnataka, India",
    localizedName: {
      kn: "ಪಂಚಮುಖಿ ಆಂಜನೇಯ ದೇವಸ್ಥಾನ",
      hi: "पंचमुखी आंजनेय मंदिर",
      te: "పంచముఖి ఆంజనేయ ఆలయం",
    },
    localizedLocation: {
      kn: "ಗಾಣದಾಳ",
      hi: "गानाधाल",
      te: "గాణదాల్",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ",
      hi: "मंदिर",
      te: "ఆలయం",
    },
    localizedDescription: {
      kn: "ಪಂಚಮುಖಿ ಹನುಮಂತ ಹಾಗೂ ಶ್ರೀ ಗುರು ರಾಘವೇಂದ್ರರ ತಪೋಭೂಮಿಯಾದ ಪವಿತ್ರ ಗುಹಾ ದೇವಸ್ಥಾನವನ್ನು ದರ್ಶಿಸಿ.",
      hi: "पंचमुखी हनुमान जी और गुरु राघवेंद्र की आध्यात्मिक परंपरा से जुड़े इस पावन गुफा मंदिर के दर्शन करें।",
      te: "పంచముఖి ఆంజనేయ స్వామి మరియు గురు రాఘవేంద్రుల తపోభూమి అయిన పవిత్ర గుహాలయాన్ని దర్శించండి.",
    },
  },
  {
    id: "shri-kshetra-kuruvapur",
    order: 13,
    name: "Shri Kshetra Kuruvapur",
    shortMapLabel: "Kuruvapur",
    location: "Kuruvapur",
    category: "Temple / Island",
    distance: "Approximately 125 km",
    duration: "2 hours 50 minutes",
    durationShort: "2 hrs 50 mins",
    description:
      "Explore the sacred river-island pilgrimage destination associated with Lord Dattatreya.",
    image: "/places/kuruvapur.jpg",
    imageAlt: "Shri Kshetra Kuruvapur river-island temple of Sri Sripada Srivallabha",
    lat: 16.358444,
    lng: 77.541833,
    directionsDestination:
      "Shri Kshetra Kuruvapur, Kuruvapur, Raichur District, Karnataka, India",
    localizedName: {
      kn: "ಶ್ರೀ ಕ್ಷೇತ್ರ ಕುರುವಪುರ",
      hi: "श्री क्षेत्र कुरुवपुर",
      te: "శ్రీ క్షేత్ర కురువపురం",
    },
    localizedLocation: {
      kn: "ಕುರುವಪುರ",
      hi: "कुरुवपुर",
      te: "కురువపురం",
    },
    localizedCategory: {
      kn: "ದೇವಸ್ಥಾನ / ದ್ವೀಪ",
      hi: "मंदिर / द्वीप तीर्थ",
      te: "ఆలయం / నదీ ద్వీపం",
    },
    localizedDescription: {
      kn: "ಭಗವಾನ್ ದತ್ತಾತ್ರೇಯ ಹಾಗೂ ಶ್ರೀಪಾದ ಶ್ರೀವಲ್ಲಭರಿಗೆ ಸಂಬಂಧಿಸಿದ ಪವಿತ್ರ ನದಿ ದ್ವೀಪ ಕ್ಷೇತ್ರವನ್ನು ಸಂದರ್ಶಿಸಿ.",
      hi: "भगवान दत्तात्रेय से जुड़े इस पावन नदी-द्वीप तीर्थ स्थल कुरुवपुर की यात्रा करें।",
      te: "భగవాన్ దత్తాత్రేయునితో అనుబంధం ఉన్న పవిత్ర నదీ-ద్వీప పుణ్యక్షేత్రమైన కురువపురాన్ని దర్శించండి.",
    },
  },
];

export const PLACES_COPY: Record<
  Locale,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    exploreBtn: string;
    mapBtn: string;
    introHeading: string;
    introDescription: string;
    highlights: { title: string; desc: string }[];
    startEyebrow: string;
    startTemple: string;
    startAddress: string;
    startBtn: string;
    carouselHeading: string;
    carouselSubtitle: string;
    viewAllBtn: string;
    approxBadge: string;
    allHeading: string;
    allSubtitle: string;
    directionsBtn: string;
    showOnMapLabel: string;
    approxLabel: string;
    mapHeading: string;
    mapSubtitle: string;
    closingHeading: string;
    closingDescription: string;
    closingLine: string;
  }
> = {
  en: {
    heroEyebrow: "EXPLORE NEARBY",
    heroTitle: "Places to Visit",
    heroSubtitle:
      "Discover the Spiritual, Historical & Cultural Heritage around Sri Ambamata Devasthana.",
    exploreBtn: "Explore Destinations",
    mapBtn: "View on Map",
    introHeading: "Why Visit Places Around Sri Ambamata?",
    introDescription:
      "Make your visit to Sri Ambadevi Devasthana even more memorable by exploring the sacred temples, historic monuments and cultural destinations surrounding Sindhanur.",
    highlights: [
      {
        title: "Spiritual Journeys",
        desc: "Visit revered temples and ancient pilgrimage centres.",
      },
      {
        title: "Historical Heritage",
        desc: "Explore forts, archaeological sites and Vijayanagara heritage.",
      },
      {
        title: "Scenic Experiences",
        desc: "Discover hills, riverbanks and beautiful cultural landscapes.",
      },
    ],
    startEyebrow: "Your Journey Starts At",
    startTemple: STARTING_LOCATION.name,
    startAddress: STARTING_LOCATION.address,
    startBtn: "View Starting Location",
    carouselHeading: "Top Destinations to Explore",
    carouselSubtitle:
      "From ancient temples to majestic forts, discover the most popular places to visit around Sri Ambamata Devasthana.",
    viewAllBtn: "View All Destinations",
    approxBadge: "Approx.",
    allHeading: "All Places to Visit",
    allSubtitle:
      "All driving distances and travel times from Sri Ambadevi Temple (Somalapura) are approximate reference figures. Verify driving routes before travel.",
    directionsBtn: "Get Directions",
    showOnMapLabel: "Show on Map",
    approxLabel: "Approx. from Sri Ambadevi Temple",
    mapHeading: "Explore Destinations on the Map",
    mapSubtitle:
      "Click any destination marker to view approximate distance, driving time, and directions from Sri Ambadevi Temple.",
    closingHeading: "Discover More. Experience More.",
    closingDescription:
      "From sacred pilgrimage destinations to remarkable historical monuments, explore the cultural richness surrounding Sri Ambamata Devasthana and make your journey memorable.",
    closingLine: "Begin your journey from the sacred land of Sri Ambamata.",
  },
  kn: {
    heroEyebrow: "ಸುತ್ತಮುತ್ತಲಿನ ದರ್ಶನ",
    heroTitle: "ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳು",
    heroSubtitle:
      "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದ ಸುತ್ತಮುತ್ತಲಿನ ಆಧ್ಯಾತ್ಮಿಕ, ಐತಿಹಾಸಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.",
    exploreBtn: "ಸ್ಥಳಗಳನ್ನು ನೋಡಿ",
    mapBtn: "ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
    introHeading: "ಶ್ರೀ ಅಂಬಾಮಾತಾ ಕ್ಷೇತ್ರದ ಸುತ್ತಮುತ್ತ ಏಕೆ ಭೇಟಿ ನೀಡಬೇಕು?",
    introDescription:
      "ಸಿಂಧನೂರು ಸುತ್ತಮುತ್ತಲಿನ ಪವಿತ್ರ ದೇವಸ್ಥಾನಗಳು, ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ತಾಣಗಳನ್ನು ಸಂದರ್ಶಿಸಿ ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದ ಯಾತ್ರೆಯನ್ನು ಇನ್ನಷ್ಟು ಸ್ಮರಣೀಯವಾಗಿಸಿ.",
    highlights: [
      {
        title: "ಆಧ್ಯಾತ್ಮಿಕ ಯಾತ್ರೆಗಳು",
        desc: "ಪವಿತ್ರ ದೇವಾಲಯಗಳು ಹಾಗೂ ಪುರಾತನ ತೀರ್ಥಕ್ಷೇತ್ರಗಳ ದರ್ಶನ.",
      },
      {
        title: "ಐತಿಹಾಸಿಕ ಪರಂಪರೆ",
        desc: "ಕೋಟೆಗಳು, ಪುರಾತತ್ವ ತಾಣಗಳು ಮತ್ತು ವಿಜಯನಗರ ಪರಂಪರೆಯ ಅನ್ವೇಷಣೆ.",
      },
      {
        title: "ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ",
        desc: "ಬೆಟ್ಟಗಳು, ನದೀ ತೀರಗಳು ಮತ್ತು ಸುಂದರ ಸಾಂಸ್ಕೃತಿಕ ತಾಣಗಳ ಅನುಭವ.",
      },
    ],
    startEyebrow: "ನಿಮ್ಮ ಯಾತ್ರೆ ಆರಂಭವಾಗುವ ಸ್ಥಳ",
    startTemple: "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ (ಅಂಬಾ ಮಠ)",
    startAddress: "ಸೋಮಲಾಪುರ, ಸಿಂಧನೂರು ತಾಲೂಕು, ರಾಯಚೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ, ಭಾರತ.",
    startBtn: "ಆರಂಭಿಕ ಸ್ಥಳವನ್ನು ನೋಡಿ",
    carouselHeading: "ಪ್ರಮುಖ ಪ್ರವಾಸಿ ಮತ್ತು ಧಾರ್ಮಿಕ ತಾಣಗಳು",
    carouselSubtitle:
      "ಪ್ರಾಚೀನ ದೇವಸ್ಥಾನಗಳಿಂದ ಭವ್ಯ ಕೋಟೆಗಳವರೆಗೆ, ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದ ಸುತ್ತಮುತ್ತಲಿನ ಜನಪ್ರಿಯ ಸ್ಥಳಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    viewAllBtn: "ಎಲ್ಲಾ ಸ್ಥಳಗಳನ್ನು ನೋಡಿ",
    approxBadge: "ಅಂದಾಜು",
    allHeading: "ಸುತ್ತಮುತ್ತಲಿನ ಎಲ್ಲಾ ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳು",
    allSubtitle:
      "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದಿಂದ (ಸೋಮಲಾಪುರ) ತೋರಿಸಿರುವ ದೂರ ಮತ್ತು ಪ್ರಯಾಣದ ಅವಧಿಯು ಅಂದಾಜು ಮಾಹಿತಿಯಾಗಿದೆ. ಪ್ರಯಾಣಕ್ಕೂ ಮುನ್ನ ರಸ್ತೆ ಮಾರ್ಗವನ್ನು ಪರಿಶೀಲಿಸಿ.",
    directionsBtn: "ಮಾರ್ಗಸೂಚಿ ಪಡೆಯಿರಿ",
    showOnMapLabel: "ನಕ್ಷೆಯಲ್ಲಿ ತೋರಿಸಿ",
    approxLabel: "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದಿಂದ ಅಂದಾಜು",
    mapHeading: "ನಕ್ಷೆಯಲ್ಲಿ ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    mapSubtitle:
      "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನದಿಂದ ಅಂದಾಜು ದೂರ, ಸಮಯ ಮತ್ತು ದಿಕ್ಕನ್ನು ನೋಡಲು ನಕ್ಷೆಯ ಯಾವುದೇ ಗುರುತನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
    closingHeading: "ಹೆಚ್ಚು ಅನ್ವೇಷಿಸಿ. ದಿವ್ಯ ಅನುಭವ ಪಡೆಯಿರಿ.",
    closingDescription:
      "ಪವಿತ್ರ ತೀರ್ಥಕ್ಷೇತ್ರಗಳಿಂದ ಗಮನಾರ್ಹ ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳವರೆಗೆ, ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದ ಸುತ್ತಮುತ್ತಲಿನ ಸಾಂಸ್ಕೃತಿಕ ಶ್ರೀಮಂತಿಕೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.",
    closingLine: "ಶ್ರೀ ಅಂಬಾಮಾತಾ ಪವಿತ್ರ ನೆಲದಿಂದ ನಿಮ್ಮ ಯಾತ್ರೆಯನ್ನು ಆರಂಭಿಸಿ.",
  },
  hi: {
    heroEyebrow: "आसपास के दर्शन",
    heroTitle: "दर्शनीय एवं पर्यटन स्थल",
    heroSubtitle:
      "श्री अम्बामाता देवस्थान के आसपास स्थित आध्यात्मिक, ऐतिहासिक और सांस्कृतिक धरोहरों की खोज करें।",
    exploreBtn: "प्रमुख स्थल देखें",
    mapBtn: "मानचित्र पर देखें",
    introHeading: "श्री अम्बामाता के आसपास के स्थलों की यात्रा क्यों करें?",
    introDescription:
      "सिंधनूर के आसपास स्थित पावन मंदिरों, ऐतिहासिक स्मारकों और सांस्कृतिक धरोहरों का भ्रमण कर श्री अम्बादेवी देवस्थान की अपनी यात्रा को और भी अविस्मरणीय बनाएँ।",
    highlights: [
      {
        title: "आध्यात्मिक यात्राएँ",
        desc: "प्रसिद्ध मंदिरों और प्राचीन तीर्थ केंद्रों के दर्शन करें।",
      },
      {
        title: "ऐतिहासिक विरासत",
        desc: "किले, पुरातात्विक स्थल और विजयनगर विरासत का अन्वेषण करें।",
      },
      {
        title: "प्राकृतिक सौंदर्य",
        desc: "पर्वत, नदी तट और सुंदर सांस्कृतिक परिदृश्यों का आनंद लें।",
      },
    ],
    startEyebrow: "आपकी यात्रा का प्रारंभिक स्थल",
    startTemple: "श्री अम्बादेवी मंदिर (अम्बा मठ)",
    startAddress: "सोमलापुर, सिंधनूर तालुका, रायचूर जिला, कर्नाटक, भारत।",
    startBtn: "प्रारंभिक स्थान देखें",
    carouselHeading: "अन्वेषण करने हेतु प्रमुख गंतव्य",
    carouselSubtitle:
      "प्राचीन मंदिरों से लेकर भव्य किलों तक, श्री अम्बामाता देवस्थान के आसपास के सबसे लोकप्रिय स्थलों की खोज करें।",
    viewAllBtn: "सभी स्थल देखें",
    approxBadge: "लगभग",
    allHeading: "सभी दर्शनीय स्थल",
    allSubtitle:
      "श्री अम्बादेवी मंदिर (सोमलापुर) से दी गई सभी दूरियाँ और यात्रा समय अनुमानित संदर्भ मान हैं। यात्रा से पूर्व मार्ग की पुष्टि अवश्य करें।",
    directionsBtn: "दिशा-निर्देश प्राप्त करें",
    showOnMapLabel: "मानचित्र पर दिखाएँ",
    approxLabel: "श्री अम्बादेवी मंदिर से अनुमानित",
    mapHeading: "मानचित्र पर स्थलों को देखें",
    mapSubtitle:
      "श्री अम्बादेवी मंदिर से अनुमानित दूरी, समय और दिशा देखने के लिए मानचित्र पर किसी भी चिह्न पर क्लिक करें।",
    closingHeading: "अधिक जानें। दिव्य अनुभव पाएं।",
    closingDescription:
      "पवित्र तीर्थ स्थलों से लेकर ऐतिहासिक स्मारकों तक, श्री अम्बामाता देवस्थान के आसपास की सांस्कृतिक समृद्धि को देखें और अपनी यात्रा को यादगार बनाएँ।",
    closingLine: "श्री अम्बामाता की पावन भूमि से अपनी यात्रा प्रारंभ करें।",
  },
  te: {
    heroEyebrow: "సమీప దర్శనీయ స్థలాలు",
    heroTitle: "దర్శనీయ ప్రాంతాలు",
    heroSubtitle:
      "శ్రీ అంబామాత దేవస్థానం చుట్టుపక్కల ఉన్న ఆధ్యాత్మిక, చారిత్రక మరియు సాంస్కృతిక వారసత్వాన్ని అన్వేషించండి.",
    exploreBtn: "ప్రదేశాలను చూడండి",
    mapBtn: "మ్యాప్‌లో చూడండి",
    introHeading: "శ్రీ అంబామాత పరిసర ప్రదేశాలను ఎందుకు సందర్శించాలి?",
    introDescription:
      "సింధనూరు చుట్టుపక్కల ఉన్న పవిత్ర ఆలయాలు, చారిత్రక కట్టడాలు మరియు సాంస్కృతిక ప్రదేశాలను దర్శించి శ్రీ అంబాదేవి దేవస్థాన యాత్రను మరింత మధురంగా మార్చుకోండి.",
    highlights: [
      {
        title: "ఆధ్యాత్మిక యాత్రలు",
        desc: "ప్రసిద్ధ ఆలయాలు మరియు ప్రాచీన పుణ్యక్షేత్రాలను దర్శించండి.",
      },
      {
        title: "చారిత్రక వారసత్వం",
        desc: "కోటలు, పురావస్తు ప్రదేశాలు మరియు విజయనగర వైభవాన్ని చూడండి.",
      },
      {
        title: "ప్రకృతి సౌందర్యం",
        desc: "కొండలు, నదీ తీరాలు మరియు రమణీయ సాంస్కృతిక దృశ్యాలను ఆస్వాదించండి.",
      },
    ],
    startEyebrow: "మీ యాత్ర ప్రారంభమయ్యే స్థలం",
    startTemple: "శ్రీ అంబాదేవి ఆలయం (అంబా మఠం)",
    startAddress: "సోమలాపురం, సింధనూరు తాలూకా, రాయచూరు జిల్లా, కర్ణాటక, భారతదేశం.",
    startBtn: "ప్రారంభ స్థానాన్ని చూడండి",
    carouselHeading: "సందర్శించదగిన ప్రముఖ ప్రదేశాలు",
    carouselSubtitle:
      "ప్రాచీన ఆలయాల నుండి భవ్యమైన కోటల వరకు, శ్రీ అంబామాత దేవస్థానం చుట్టుపక్కల ఉన్న ప్రసిద్ధ ప్రదేశాలను తెలుసుకోండి.",
    viewAllBtn: "అన్ని ప్రదేశాలను చూడండి",
    approxBadge: "సుమారు",
    allHeading: "అన్ని దర్శనీయ స్థలాలు",
    allSubtitle:
      "శ్రీ అంబాదేవి ఆలయం (సోమలాపురం) నుండి దూరం మరియు ప్రయాణ సమయం సుమారుగా ఇవ్వబడిన సమాచారం. ప్రయాణానికి ముందు రూట్‌ను నిర్ధారించుకోండి.",
    directionsBtn: "దిశలు పొందండి",
    showOnMapLabel: "మ్యాప్‌లో చూపించు",
    approxLabel: "శ్రీ అంబాదేవి ఆలయం నుండి సుమారు",
    mapHeading: "మ్యాప్‌లో ప్రదేశాలను అన్వేషించండి",
    mapSubtitle:
      "శ్రీ అంబాదేవి ఆలయం నుండి సుమారు దూరం, ప్రయాణ సమయం మరియు దిశలను చూడటానికి మ్యాప్‌లోని ఏదైనా గుర్తుపై క్లిక్ చేయండి.",
    closingHeading: "మరింత అన్వేషించండి. దివ్య అనుభూతిని పొందండి.",
    closingDescription:
      "పవిత్ర పుణ్యక్షేత్రాల నుండి చారిత్రక కట్టడాల వరకు, శ్రీ అంబామాత దేవస్థానం చుట్టుపక్కల ఉన్న సాంస్కృతిక వైభవాన్ని ఆస్వాదించండి.",
    closingLine: "శ్రీ అంబామాత పవిత్ర నేల నుండి మీ యాత్రను ప్రారంభించండి.",
  },
};

export function getPlaceText(place: DestinationPlace, locale: Locale) {
  return {
    name: place.localizedName?.[locale] || place.name,
    location: place.localizedLocation?.[locale] || place.location,
    category: place.localizedCategory?.[locale] || place.category,
    description: place.localizedDescription?.[locale] || place.description,
  };
}

export type TransportCategoryId = "bus" | "railway" | "airport";

export interface TransportItem {
  id: string;
  name: string;
  sublabel?: string;
  distance: string;
  localizedName?: Partial<Record<Locale, string>>;
  localizedSublabel?: Partial<Record<Locale, string>>;
}

export interface TransportCategory {
  id: TransportCategoryId;
  title: string;
  localizedTitle?: Partial<Record<Locale, string>>;
  items: TransportItem[];
}

export const TRANSPORT_COPY: Record<
  Locale,
  { heading: string; subtitle: string }
> = {
  en: {
    heading: "Nearby Transportation Facilities",
    subtitle:
      "Plan your journey to Sri Ambadevi Temple with ease. Here are the nearest bus stands, railway stations and airports.",
  },
  kn: {
    heading: "ಹತ್ತಿರದ ಸಾರಿಗೆ ಸೌಲಭ್ಯಗಳು",
    subtitle:
      "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನಕ್ಕೆ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಸುಲಭವಾಗಿ ಯೋಜಿಸಿ. ಹತ್ತಿರದ ಬಸ್ ನಿಲ್ದಾಣಗಳು, ರೈಲು ನಿಲ್ದಾಣಗಳು ಮತ್ತು ವಿಮಾನ ನಿಲ್ದಾಣಗಳ ವಿವರಗಳು ಇಲ್ಲಿವೆ.",
  },
  hi: {
    heading: "निकटतम परिवहन सुविधाएँ",
    subtitle:
      "श्री अम्बादेवी मंदिर की अपनी यात्रा की योजना आसानी से बनाएँ। यहाँ निकटतम बस स्टैंड, रेलवे स्टेशन और हवाई अड्डों का विवरण दिया गया है।",
  },
  te: {
    heading: "సమీప రవాణా సౌకర్యాలు",
    subtitle:
      "శ్రీ అంబాదేవి ఆలయానికి మీ ప్రయాణాన్ని సులభంగా ప్లాన్ చేసుకోండి. సమీపంలోని బస్ స్టేషన్లు, రైల్వే స్టేషన్లు మరియు విమానాశ్రయాల వివరాలు ఇక్కడ ఉన్నాయి.",
  },
};

export const TRANSPORT_FACILITIES: TransportCategory[] = [
  {
    id: "bus",
    title: "Nearby Bus Stands",
    localizedTitle: {
      kn: "ಹತ್ತಿರದ ಬಸ್ ನಿಲ್ದಾಣಗಳು",
      hi: "निकटतम बस स्टैंड",
      te: "సమీప బస్ స్టేషన్లు",
    },
    items: [
      {
        id: "sindhanur-bus",
        name: "Sindhanur Bus Stand",
        distance: "~ 22 km",
        localizedName: {
          kn: "ಸಿಂಧನೂರು ಬಸ್ ನಿಲ್ದಾಣ",
          hi: "सिंधनूर बस स्टैंड",
          te: "సింధనూరు బస్ స్టేషన్",
        },
      },
      {
        id: "siruguppa-bus",
        name: "Siruguppa Bus Stand",
        distance: "~ 32 km",
        localizedName: {
          kn: "ಸಿರುಗುಪ್ಪ ಬಸ್ ನಿಲ್ದಾಣ",
          hi: "सिरुगुप्पा बस स्टैंड",
          te: "సిరుగుప్ప బస్ స్టేషన్",
        },
      },
      {
        id: "karatagi-bus",
        name: "Karatagi Bus Stand",
        distance: "~ 26 km",
        localizedName: {
          kn: "ಕಾರಟಗಿ ಬಸ್ ನಿಲ್ದಾಣ",
          hi: "कारटगी बस स्टैंड",
          te: "కారటగి బస్ స్టేషన్",
        },
      },
    ],
  },
  {
    id: "railway",
    title: "Nearby Railway Stations",
    localizedTitle: {
      kn: "ಹತ್ತಿರದ ರೈಲು ನಿಲ್ದಾಣಗಳು",
      hi: "निकटतम रेलवे स्टेशन",
      te: "సమీప రైల్వే స్టేషన్లు",
    },
    items: [
      {
        id: "sindhanur-rail",
        name: "Sindhanur Railway Station (SNNR)",
        distance: "~ 24 km",
        localizedName: {
          kn: "ಸಿಂಧನೂರು ರೈಲು ನಿಲ್ದಾಣ (SNNR)",
          hi: "सिंधनूर रेलवे स्टेशन (SNNR)",
          te: "సింధనూరు రైల్వే స్టేషన్ (SNNR)",
        },
      },
      {
        id: "karatagi-rail",
        name: "Karatagi Railway Station (KTGG)",
        distance: "~ 26 km",
        localizedName: {
          kn: "ಕಾರಟಗಿ ರೈಲು ನಿಲ್ದಾಣ (KTGG)",
          hi: "कारटगी रेलवे स्टेशन (KTGG)",
          te: "కారటగి రైల్వే స్టేషన్ (KTGG)",
        },
      },
      {
        id: "ballari-rail",
        name: "Ballari Junction (BAY)",
        distance: "~ 82 km",
        localizedName: {
          kn: "ಬಳ್ಳಾರಿ ಜಂಕ್ಷನ್ (BAY)",
          hi: "बल्लारी जंक्शन (BAY)",
          te: "బళ్లారి జంక్షన్ (BAY)",
        },
      },
    ],
  },
  {
    id: "airport",
    title: "Nearby Airports",
    localizedTitle: {
      kn: "ಹತ್ತಿರದ ವಿಮಾನ ನಿಲ್ದಾಣಗಳು",
      hi: "निकटतम हवाई अड्डे",
      te: "సమీప విಮಾನాశ్రయాలు",
    },
    items: [
      {
        id: "jindal-vijaynagar-airport",
        name: "Jindal Vijaynagar Airport (VDY)",
        sublabel: "Toranagallu, Ballari",
        distance: "~ 95 km",
        localizedName: {
          kn: "ಜಿಂದಾಲ್ ವಿಜಯನಗರ ವಿಮಾನ ನಿಲ್ದಾಣ (VDY)",
          hi: "जिंदल विजयनगर हवाई अड्डा (VDY)",
          te: "జిందాల్ విజయనగర్ విಮಾನాశ్రయం (VDY)",
        },
        localizedSublabel: {
          kn: "ತೋರಣಗಲ್ಲು, ಬಳ್ಳಾರಿ",
          hi: "तोरणगल्लु, बल्लारी",
          te: "తోరణగల్లు, బళ్లారి",
        },
      },
      {
        id: "kurnool-airport",
        name: "Kurnool Airport (KJB)",
        sublabel: "Orvakal, Andhra Pradesh",
        distance: "~ 165 km",
        localizedName: {
          kn: "ಕರ್ನೂಲ್ ವಿಮಾನ ನಿಲ್ದಾಣ (KJB)",
          hi: "कुरनूल हवाई अड्डा (KJB)",
          te: "కర్నూలు విಮಾನాశ్రయం (KJB)",
        },
        localizedSublabel: {
          kn: "ಓರ್ವಕಲ್, ಆಂಧ್ರಪ್ರದೇಶ",
          hi: "ओर्वकल, आंध्र प्रदेश",
          te: "ఓర్వకల్లు, ఆంధ్రప్రదేశ్",
        },
      },
    ],
  },
];

export function getTransportCategoryTitle(
  category: TransportCategory,
  locale: Locale
): string {
  return category.localizedTitle?.[locale] || category.title;
}

export function getTransportItemText(item: TransportItem, locale: Locale) {
  return {
    name: item.localizedName?.[locale] || item.name,
    sublabel: item.sublabel
      ? item.localizedSublabel?.[locale] || item.sublabel
      : undefined,
  };
}

