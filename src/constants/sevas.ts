export interface SevaItem {
  id: string;
  name: string;
  kannadaName?: string;
  hindiName?: string;
  teluguName?: string;
  price: string;
  kannadaPrice?: string;
  hindiPrice?: string;
  teluguPrice?: string;
  description: string;
  kannadaDescription?: string;
  hindiDescription?: string;
  teluguDescription?: string;
}

export interface FeaturedSevaCard {
  id: string;
  title: string;
  kannadaTitle?: string;
  hindiTitle?: string;
  teluguTitle?: string;
  image: string;
  description: string;
  kannadaDescription?: string;
  hindiDescription?: string;
  teluguDescription?: string;
  price?: string;
  kannadaPrice?: string;
  hindiPrice?: string;
  teluguPrice?: string;
  href: string;
}

export const FEATURED_SEVAS: FeaturedSevaCard[] = [
  {
    id: "abhishekam",
    title: "ABHISHEKAM",
    kannadaTitle: "ಅಭಿಷೇಕ ಸೇವೆ",
    hindiTitle: "अभिषेक सेवा",
    teluguTitle: "అభిషేక సేవ",
    image: "/sevas/abhishekam-hq.jpg",
    description: "A sacred ritual bathing of the deity with devotion and traditional offerings.",
    kannadaDescription: "ದೇವಿಗೆ ಪಂಚಾಮೃತ ಹಾಗೂ ಪವಿತ್ರ ಜಲದಿಂದ ಭಕ್ತಿಪೂರ್ವಕವಾಗಿ ನೆರವೇರಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಅಭಿಷೇಕ.",
    hindiDescription: "देवी को पंचामृत एवं पावन जल से भक्तिपूर्वक अर्पित पारंपरिक अभिषेक अनुष्ठान।",
    teluguDescription: "అమ్మవారికి పంచామృతాలు మరియు పవిత్ర జలాలతో భక్తితో నిర్వహించే సాంప్రదాయ అభిషేకము.",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    hindiPrice: "₹ 101",
    teluguPrice: "₹ 101",
    href: "/sevas#abhishekam",
  },
  {
    id: "archana",
    title: "ARCHANA",
    kannadaTitle: "ಅರ್ಚನೆ ಸೇವೆ",
    hindiTitle: "अर्चना सेवा",
    teluguTitle: "అర్చన సేవ",
    image: "/sevas/archana-hq.jpg",
    description: "Offer prayers and sacred names to the deity, seeking divine blessings.",
    kannadaDescription: "ದೇವಿಯ ಸಹಸ್ರನಾಮ ಸ್ಮರಣೆಯೊಂದಿಗೆ ಕುಂಕುಮ ಮತ್ತು ಪುಷ್ಪಗಳಿಂದ ನೆರವೇರಿಸುವ ದಿವ್ಯ ಅರ್ಚನೆ.",
    hindiDescription: "देवी के सहस्रनाम पाठ के साथ कुंकुम एवं दिव्य पुष्पों से संपन्न होने वाली पावन अर्चना।",
    teluguDescription: "అమ్మవారి సహస్రనామ స్మరణతో కుంకుమ మరియు పుష్పాలతో నిర్వహించే దివ్యార్చన.",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    hindiPrice: "₹ 101",
    teluguPrice: "₹ 101",
    href: "/sevas#archana",
  },
  {
    id: "homam",
    title: "HOMAM",
    kannadaTitle: "ಹೋಮ ಹವನ",
    hindiTitle: "हवन एवं यज्ञ",
    teluguTitle: "హోమం & యజ్ఞం",
    image: "/sevas/homam-hq.jpg",
    description: "A sacred fire ritual performed with Vedic hymns and offerings for divine blessings.",
    kannadaDescription: "ವೈದಿಕ ಮಂತ್ರಘೋಷಗಳೊಂದಿಗೆ ಲೋಕಕಲ್ಯಾಣ ಹಾಗೂ ಇಷ್ಟಾರ್ಥ ಸಿದ್ಧಿಗಾಗಿ ನೆರವೇರಿಸುವ ಪವಿತ್ರ ಯಜ್ಞ.",
    hindiDescription: "वैदिक मंत्रोच्चार के साथ विश्वकल्याण एवं मनोकामना सिद्धि हेतु पावन यज्ञ अनुष्ठान।",
    teluguDescription: "వేద మంత్రోచ్ఛారణలతో లోకకల్యాణం మరియు సంకల్ప సిద్ధి కొరకు నిర్వహించే పవిత్ర యజ్ఞము.",
    price: "₹ 201",
    kannadaPrice: "₹ 201",
    hindiPrice: "₹ 201",
    teluguPrice: "₹ 201",
    href: "/sevas#homam",
  },
  {
    id: "annadanam",
    title: "ANNADANAM",
    kannadaTitle: "ಅನ್ನದಾನ ಸೇವೆ",
    hindiTitle: "अन्नदान सेवा",
    teluguTitle: "అన్నదాన సేవ",
    image: "/sevas/annadanam-hq.jpg",
    description: "A sacred service of offering food to devotees as an expression of devotion and charity.",
    kannadaDescription: "ಕ್ಷೇತ್ರಕ್ಕೆ ಬರುವ ಸಕಲ ಭಕ್ತಾದಿಗಳಿಗೆ ನಿತ್ಯ ದಾಸೋಹ ಸಮರ್ಪಿಸುವ ಪರಮ ಪವಿತ್ರ ಕೈಂಕರ್ಯ.",
    hindiDescription: "धाम में पधारने वाले समस्त श्रद्धालुओं के लिए नित्य महाप्रसाद अन्नदान सेवा।",
    teluguDescription: "పుణ్యక్షేత్రానికి వచ్చే సకల భక్తులకు నిత్య అన్నప్రసాదం సమర్పించే పరమ పవిత్ర సేవ.",
    price: "Offering",
    kannadaPrice: "ಕಾಣಿಕೆ",
    hindiPrice: "दान अर्पण",
    teluguPrice: "కానుక",
    href: "/contact#donation",
  },
  {
    id: "special-poojas",
    title: "SPECIAL POOJAS",
    kannadaTitle: "ವಿಶೇಷ ಪೂಜೆಗಳು",
    hindiTitle: "विशेष पूजाएँ",
    teluguTitle: "విశేష పూజలు",
    image: "/sevas/special-poojas-hq.jpg",
    description: "Specially conducted poojas and rituals performed for the spiritual well-being of devotees.",
    kannadaDescription: "ಭಕ್ತರ ಸಂಕಲ್ಪ ಮತ್ತು ವಿಶೇಷ ಸಂದರ್ಭಗಳಲ್ಲಿ ನೆರವೇರಿಸುವ ವಿಶಿಷ್ಟ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು.",
    hindiDescription: "भक्तों के विशेष संकल्प एवं पावन अवसरों पर संपन्न होने वाले विशिष्ट अनुष्ठान।",
    teluguDescription: "భక్తుల విశేష సంకల్పాలు మరియు పర్వదినాలలో నిర్వహించే విశిష్ట పూజా కైంకర్యాలు.",
    price: "From ₹ 501",
    kannadaPrice: "₹ 501 ರಿಂದ",
    hindiPrice: "₹ 501 से",
    teluguPrice: "₹ 501 నుండి",
    href: "/sevas#special",
  },
];

export const SEVAS_ROW_1: SevaItem[] = [
  {
    id: "madhuve-seva",
    name: "Madhuve Seva (Marriage)",
    kannadaName: "ಮದುವೆ ಸೇವೆ (ವಿವಾಹ ಸಂಕಲ್ಪ)",
    hindiName: "विवाह सेवा (कल्याण संकल्प)",
    teluguName: "కల్యాణ సేవ (వివాహ సంకల్పం)",
    price: "₹ 201",
    kannadaPrice: "₹ 201",
    description: "Sacred Vedic prayers offered for marital harmony, longevity, and divine blessings.",
    kannadaDescription: "ದಾಂಪತ್ಯ ಸೌಹಾರ್ದತೆ, ಆಯುಷ್ಯ ವೃದ್ಧಿ ಹಾಗೂ ಕಲ್ಯಾಣ ಪ್ರಾಪ್ತಿಗಾಗಿ ನೆರವೇರಿಸುವ ಪವಿತ್ರ ಪೂಜೆ.",
    hindiDescription: "दांपत्य सुख, दीर्घायु एवं सुख-समृद्धि हेतु की जाने वाली पावन प्रार्थना।",
    teluguDescription: "దాంపత్య సౌభాగ్యం, ఆయురారోగ్యాలు మరియు కల్యాణ ప్రాప్తి కొరకు చేసే పవిత్ర పూజ.",
  },
  {
    id: "javal-seva",
    name: "Javal Seva",
    kannadaName: "ಜವಳ ಸೇವೆ (ಚೌಲ ಸಂಸ್ಕಾರ)",
    hindiName: "जावळ सेवा (मुंडन संस्कार)",
    teluguName: "జావళ సేవ (పుట్టువెండ్రుకల సమర్పణ)",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    description: "Traditional first hair-offering ceremony seeking Mother Ambadevi's protection.",
    kannadaDescription: "ಮಕ್ಕಳ ಕ್ಷೇಮ ಹಾಗೂ ಆಯುಷ್ಯಕ್ಕಾಗಿ ಜಗನ್ಮಾತೆಯ ಸನ್ನಿಧಿಯಲ್ಲಿ ಸಲ್ಲಿಸುವ ಪ್ರಥಮ ಕೇಶ ಮುಂಡನ ಸೇವೆ.",
    hindiDescription: "शिशुओं के कल्याण एवं उत्तम स्वास्थ्य हेतु देवी के चरणों में प्रथम केश अर्पण।",
    teluguDescription: "పిల్లల క్షేమం మరియు ఆయుష్షు కొరకు జగన్మాత సన్నిధిలో సమర్పించే ప్రథమ కేశ ముండన సేవ.",
  },
  {
    id: "kunkuma-archana",
    name: "Kunkuma Archana",
    kannadaName: "ಕುಂಕುಮ ಅರ್ಚನೆ",
    hindiName: "कुंकुम अर्चना",
    teluguName: "కుంకుమార్చన",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    description: "Chanting of sacred Devi Sahasranama with divine kumkum offerings for prosperity.",
    kannadaDescription: "ದೇವಿಯ ಸಹಸ್ರನಾಮ ಪಠಣೆಯೊಂದಿಗೆ ಸೌಭಾಗ್ಯ ಹಾಗೂ ಸಮೃದ್ಧಿಗಾಗಿ ನೆರವೇರಿಸುವ ಕುಂಕುಮಾರ್ಚನೆ.",
    hindiDescription: "देवी सहस्रनाम पाठ के साथ सौभाग्य एवं सुख-समृद्धि हेतु की जाने वाली कुंकुमार्चना।",
    teluguDescription: "దేవీ సహస్రనామ పఠనంతో సౌభాగ్యం మరియు సమృద్ధి కొరకు నిర్వహించే కుంకుమార్చన.",
  },
  {
    id: "bilva-archana",
    name: "Bilva Archana",
    kannadaName: "ಬಿಲ್ವ ಅರ್ಚನೆ",
    hindiName: "बिल्व अर्चना",
    teluguName: "బిల్వార్చన",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    description: "Holy offering of sacred Bilva patra leaves invoking supreme spiritual grace.",
    kannadaDescription: "ಪವಿತ್ರ ಬಿಲ್ವಪತ್ರೆಗಳಿಂದ ದೇವಿಯನ್ನು ಆರಾಧಿಸಿ ದೈವಿಕ ಅನುಗ್ರಹ ಪಡೆಯುವ ಸೇವೆ.",
    hindiDescription: "पवित्र बिल्व पत्रों से देवी की आराधना कर परम कृपा प्राप्त करने की सेवा।",
    teluguDescription: "పవిత్ర బిల్వపత్రాలతో అమ్మవారిని ఆరాధించి దైవానుగ్రహం పొందే పవిత్ర సేవ.",
  },
  {
    id: "ale-pooja",
    name: "Ale Pooja",
    kannadaName: "ಆಳೆ ಪೂಜೆ (ವಿಶೇಷ ಎಲೆ ಪೂಜೆ)",
    hindiName: "आळे पूजा (विशेष नागवल्ली पूजा)",
    teluguName: "ఆళె పూజ (విశేష తమలపాకుల పూజ)",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    description: "Devotional sacred leaf worship expressing deep reverence to the Divine Mother.",
    kannadaDescription: "ಪವಿತ್ರ ನಾಗವಲ್ಲಿ ದಳಗಳಿಂದ ಜಗನ್ಮಾತೆಗೆ ಭಕ್ತಿಪೂರ್ವಕವಾಗಿ ಸಮರ್ಪಿಸುವ ವಿಶೇಷ ಆಳೆ ಪೂಜೆ.",
    hindiDescription: "पवित्र तांबूल पत्रों से जगन्माता को अर्पित की जाने वाली विशेष आळे पूजा।",
    teluguDescription: "పవిత్ర నాగవల్లి దళాలతో జగన్మాతకు భక్తితో సమర్పించే విశేష ఆళె పూజ.",
  },
];

export const SEVAS_ROW_2: SevaItem[] = [
  {
    id: "thottilu-seva",
    name: "Thottilu Seva",
    kannadaName: "ತೊಟ್ಟಿಲು ಸೇವೆ",
    hindiName: "झूला सेवा (पाळणा सेवा)",
    teluguName: "ఉయ్యాల సేవ (తొట్టిల సేవ)",
    price: "₹ 501",
    kannadaPrice: "₹ 501",
    description: "Sacred cradle ceremony invoking the grace of Goddess Ambamata for newborns.",
    kannadaDescription: "ಮಕ್ಕಳ ಭಾಗ್ಯ ಹಾಗೂ ನವಜಾತ ಶಿಶುಗಳ ಆರೋಗ್ಯ ರಕ್ಷಣೆಗಾಗಿ ದೇವಿಗೆ ತೊಟ್ಟಿಲು ತೂಗುವ ಸೇವೆ.",
    hindiDescription: "संतान सुख एवं नवजात शिशुओं के आरोग्य संरक्षण हेतु पालना झुलाने की पावन सेवा।",
    teluguDescription: "సంతాన సౌభాగ్యం మరియు నవజాత శిశువుల ఆరోగ్య రక్షణ కోసం అమ్మవారికి ఉయ్యాల ఊపే సేవ.",
  },
  {
    id: "pallakki-seva",
    name: "Pallakki Seva",
    kannadaName: "ಪಲ್ಲಕ್ಕಿ ಸೇವೆ",
    hindiName: "पल्लक्की सेवा (पालकी सेवा)",
    teluguName: "పల్లకీ సేవ",
    price: "₹ 501",
    kannadaPrice: "₹ 501",
    description: "Grand palanquin procession honoring the Divine Mother amidst Vedic chants.",
    kannadaDescription: "ವೈದಿಕ ಮಂತ್ರಘೋಷಗಳೊಂದಿಗೆ ದೇವಿಯ ಉತ್ಸವ ಮೂರ್ತಿಯನ್ನು ಪಲ್ಲಕ್ಕಿಯಲ್ಲಿ ಹೊತ್ತು ಸಾಗುವ ಭವ್ಯ ಸೇವೆ.",
    hindiDescription: "वैदिक मंत्रोच्चार के मध्य देवी की उत्सव मूर्ति को पालकी में विराजमान कर भव्य परिक्रमा।",
    teluguDescription: "వేద మంత్రోచ్ఛారణల నడుమ అమ్మవారి ఉత్సవ మూర్తిని పల్లకీలో ఊరేగించే భవ్య సేవ.",
  },
  {
    id: "rudhrabhisheka-seva",
    name: "Rudhrabhisheka Seva",
    kannadaName: "ರುದ್ರಾಭಿಷೇಕ ಸೇವೆ",
    hindiName: "रुद्राभिषेक सेवा",
    teluguName: "రుద్రాభిషేక సేవ",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    description: "Holy ceremonial bathing with panchamruta and chanting of Sri Rudram for peace.",
    kannadaDescription: "ಶಾಂತಿ, ಸಮೃದ್ಧಿ ಹಾಗೂ ರಕ್ಷಣೆಗಾಗಿ ಶ್ರೀ ರುದ್ರ ಪ್ರಶ್ನ ಪಠಣೆಯೊಂದಿಗೆ ನೆರವೇರುವ ಪವಿತ್ರ ಅಭಿಷೇಕ.",
    hindiDescription: "शांति, समृद्धि एवं सर्वकल्याण हेतु श्री रुद्रम पाठ के साथ संपन्न पावन अभिषेक।",
    teluguDescription: "శాంతి, సమృద్ధి మరియు రక్షణ కొరకు శ్రీ రుద్ర ప్రశ్న పఠనంతో నిర్వహించే పవిత్ర అభిషేకము.",
  },
  {
    id: "panchabhisheka-seva",
    name: "Panchabhisheka Seva",
    kannadaName: "ಪಂಚಾಮೃತಾಭಿಷೇಕ ಸೇವೆ",
    hindiName: "पंचामृताभिषेक सेवा",
    teluguName: "పంచామృతాభిషేక సేవ",
    price: "₹ 101",
    kannadaPrice: "₹ 101",
    description: "Sacred ritual ablution performed with milk, honey, curd, ghee, and sugar.",
    kannadaDescription: "ಹಾಲು, ಮೊಸರು, ತುಪ್ಪ, ಜೇನುತುಪ್ಪ ಹಾಗೂ ಸಕ್ಕರೆಯಿಂದ ದೇವಿಗೆ ಸಲ್ಲಿಸುವ ಪವಿತ್ರ ಪಂಚಾಮೃತ ಸ್ನಾನ.",
    hindiDescription: "दूध, दही, घी, शहद एवं शर्करा से युक्त पंचामृत द्रव्यों से देवी का दिव्य स्नान।",
    teluguDescription: "పాలు, పెరుగు, నెయ్యి, తేనె మరియు పంచదారలతో అమ్మవారికి సమర్పించే పవిత్ర పంచామృత స్నానము.",
  },
  {
    id: "belli-rathosthava-seva",
    name: "Belli Rathosthava Seva",
    kannadaName: "ಬೆಳ್ಳಿ ರಥೋತ್ಸವ ಸೇವೆ",
    hindiName: "रजत रथोत्सव सेवा (चांदी का रथ)",
    teluguName: "రజత రథోత్సవ సేవ (వెండి రథం)",
    price: "₹ 2,001",
    kannadaPrice: "₹ 2,001",
    description: "Majestic Silver Chariot procession seva honoring the glory of Sri Ambadevi.",
    kannadaDescription: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ ವೈಭವವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳುವ ನಯನಮನೋಹರ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ ಸೇವೆ.",
    hindiDescription: "श्री अम्बादेवी के दिव्य वैभव को समर्पित अत्यंत पावन रजत रथोत्सव सेवा।",
    teluguDescription: "శ్రీ అంబాదేవి దివ్య వైభవాన్ని దర్శించుకునే నయనానందకరమైన రజత రథోత్సవ సేవ.",
  },
  {
    id: "shashwatha-rudhrabhisheka-seva",
    name: "Shashwatha Rudhrabhisheka Seva",
    kannadaName: "ಶಾಶ್ವತ ರುದ್ರಾಭಿಷೇಕ ಸೇವೆ",
    hindiName: "शाश्वत रुद्राभिषेक सेवा",
    teluguName: "శాశ్వత రుద్రాభిషేక సేవ",
    price: "₹ 2,001",
    kannadaPrice: "₹ 2,001",
    description: "Perpetual annual Rudhrabhisheka performed on devotee's chosen auspicious date.",
    kannadaDescription: "ಭಕ್ತರು ಬಯಸಿದ ಶುಭ ದಿನದಂದು ಪ್ರತಿ ವರ್ಷ ನಿರಂತರವಾಗಿ ನೆರವೇರುವ ಶಾಶ್ವತ ರುದ್ರಾಭಿಷೇಕ ಸೇವೆ.",
    hindiDescription: "श्रद्धालु द्वारा निर्धारित पावन तिथि पर प्रतिवर्ष निरंतर संपन्न होने वाला शाश्वत रुद्राभिषेक।",
    teluguDescription: "భక్తులు కోరిన శుభ దినాన ప్రతి సంవత్సరం నిరంతరాయంగా నిర్వహించే శాశ్వత రుద్రాభిషేక సేవ.",
  },
];

export const ALL_SEVAS: SevaItem[] = [
  ...SEVAS_ROW_1,
  ...SEVAS_ROW_2,
];

export const OTHER_SEVAS = [
  {
    name: "Tulaabhara Seva",
    kannadaName: "ತುಲಾಭಾರ ಸೇವೆ",
    hindiName: "तुलाभार सेवा",
    teluguName: "తులాభార సేవ",
    note: "Price to be confirmed",
    kannadaNote: "ದೇವಾಲಯದ ಕಚೇರಿಯಲ್ಲಿ ವಿಚಾರಿಸಿ",
    hindiNote: "मंदिर कार्यालय से संपर्क करें",
    teluguNote: "ఆలయ కార్యాలయంలో సంప్రదించండి",
  },
  {
    name: "Kanike (Offering)",
    kannadaName: "ಕಾಣಿಕೆ ಸಮರ್ಪಣೆ",
    hindiName: "भक्ति अर्पण एवं दान",
    teluguName: "భక్తి కానుకల సమర్పణ",
    note: "Devotee's choice / amount to be confirmed",
    kannadaNote: "ಭಕ್ತರ ಇಚ್ಛಾನುಸಾರ ಭಕ್ತಿ ಸಮರ್ಪಣೆ",
    hindiNote: "श्रद्धालु की इच्छानुसार भक्ति अर्पण",
    teluguNote: "భక్తుల ఇష్టానుసారం భక్తి సమర్పణ",
  },
];
