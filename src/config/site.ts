export interface NavItem {
  title: string;
  shortTitle?: string;
  href: string;
  kannadaTitle?: string;
  kannadaShortTitle?: string;
  hindiTitle?: string;
  hindiShortTitle?: string;
  teluguTitle?: string;
  teluguShortTitle?: string;
  description?: string;
  kannadaDescription?: string;
  hindiDescription?: string;
  teluguDescription?: string;
}

export interface HeaderNavItem {
  title: string;
  shortTitle?: string;
  href?: string;
  kannadaTitle?: string;
  kannadaShortTitle?: string;
  hindiTitle?: string;
  hindiShortTitle?: string;
  teluguTitle?: string;
  teluguShortTitle?: string;
  children?: NavItem[];
}

export const siteConfig = {
  name: "Sri Ambadevi Devasthana",
  nameKannada: "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ",
  nameHindi: "श्री अम्बादेवी देवस्थान",
  nameTelugu: "శ్రీ అంబాదేవి దేవస్థానము",
  altName: "Sri Ambamata Devasthana",
  altNameKannada: "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನ",
  altNameHindi: "श्री अम्बामाता देवस्थान",
  altNameTelugu: "శ్రీ అంబామాత దేవస్థానము",
  description:
    "Official portal of Sri Ambadevi Devasthana (Sri Ambamata Devasthana). Documented 343+ year sacred history, spiritual traditions of Param Poojya Sri Chidananda Avadhoota, darshan timings, pooja booking, and Belli Rathotsava at Somalapura, Sindhanur, Raichur.",
  url: "https://www.sriambadevidevasthanambamath.com",
  navItems: [
    {
      title: "Home",
      href: "/",
      kannadaTitle: "ಮುಖಪುಟ",
      hindiTitle: "मुख्य पृष्ठ",
      teluguTitle: "ముఖ్యాంశం",
    },
    {
      title: "About Temple",
      href: "/about",
      kannadaTitle: "ದೇವಾಲಯದ ಬಗ್ಗೆ",
      hindiTitle: "मंदिर परिचय",
      teluguTitle: "దేవాలయ పరిచయం",
    },
    {
      title: "Seva & Pooja",
      href: "/sevas",
      kannadaTitle: "ಸೇವೆ ಮತ್ತು ಪೂಜೆ",
      hindiTitle: "पूजा एवं सेवाएँ",
      teluguTitle: "పూజలు & సేవలు",
    },
    {
      title: "Darshan & Timings",
      shortTitle: "Darshan",
      href: "/timings",
      kannadaTitle: "ದರ್ಶನ ಮತ್ತು ಸಮಯ",
      kannadaShortTitle: "ದರ್ಶನ",
      hindiTitle: "दर्शन एवं समय",
      hindiShortTitle: "दर्शन",
      teluguTitle: "దర్శనం & సమయాలు",
      teluguShortTitle: "దర్శనం",
    },
    {
      title: "Events & Festivals",
      shortTitle: "Festivals",
      href: "/festivals",
      kannadaTitle: "ಉತ್ಸವಗಳು",
      hindiTitle: "उत्सव एवं पर्व",
      hindiShortTitle: "उत्सव",
      teluguTitle: "ఉత్సవాలు & పండుగలు",
      teluguShortTitle: "ఉత్సవాలు",
    },
    {
      title: "Gallery",
      href: "/gallery",
      kannadaTitle: "ಭಾವಚಿತ್ರಗಳು",
      hindiTitle: "चित्र दीर्घा",
      teluguTitle: "చిత్రశాల",
    },
    {
      title: "Places to Visit",
      shortTitle: "Places",
      href: "/places-to-visit",
      kannadaTitle: "ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳು",
      kannadaShortTitle: "ಸ್ಥಳಗಳು",
      hindiTitle: "दर्शनीय स्थल",
      hindiShortTitle: "दर्शनीय स्थल",
      teluguTitle: "దర్శనీయ స్థలాలు",
      teluguShortTitle: "స్థలాలు",
    },
    {
      title: "Contact & Donations",
      shortTitle: "Contact",
      href: "/contact",
      kannadaTitle: "ಸಂಪರ್ಕ ಮತ್ತು ದೇಣಿಗೆ",
      kannadaShortTitle: "ಸಂಪರ್ಕ",
      hindiTitle: "संपर्क एवं दान",
      hindiShortTitle: "संपर्क",
      teluguTitle: "సంప్రదించండి & విరాళాలు",
      teluguShortTitle: "సంప్రదించండి",
    },
  ] satisfies NavItem[],
  headerNavItems: [
    {
      title: "Home",
      href: "/",
      kannadaTitle: "ಮುಖಪುಟ",
      hindiTitle: "मुख्य पृष्ठ",
      teluguTitle: "ముఖ్యాంశం",
    },
    {
      title: "About Temple",
      href: "/about",
      kannadaTitle: "ದೇವಾಲಯದ ಬಗ್ಗೆ",
      hindiTitle: "मंदिर परिचय",
      teluguTitle: "దేవాలయ పరిచయం",
    },
    {
      title: "Online Services",
      shortTitle: "Online Services",
      kannadaTitle: "ಆನ್‌ಲೈನ್ ಸೇವೆಗಳು",
      kannadaShortTitle: "ಆನ್‌ಲೈನ್ ಸೇವೆಗಳು",
      hindiTitle: "ऑनलाइन सेवाएँ",
      hindiShortTitle: "ऑनलाइन सेवाएँ",
      teluguTitle: "ఆన్‌లైన్ సేవలు",
      teluguShortTitle: "ఆన్‌లైన్ సేవలు",
      children: [
        {
          title: "Seva & Pooja",
          href: "/sevas",
          kannadaTitle: "ಸೇವೆ ಮತ್ತು ಪೂಜೆ",
          hindiTitle: "पूजा एवं सेवाएँ",
          teluguTitle: "పూజలు & సేవలు",
          description: "Daily Sevas, Archana & Special Poojas",
          kannadaDescription: "ದೈನಂದಿನ ಸೇವೆಗಳು, ಅರ್ಚನೆ ಮತ್ತು ವಿಶೇಷ ಪೂಜೆಗಳು",
          hindiDescription: "दैनिक सेवाएँ, अर्चना एवं विशेष पूजा",
          teluguDescription: "దైనందిన సేవలు, అర్చన & విశేష పూజలు",
        },
        {
          title: "Darshan & Timings",
          href: "/timings",
          kannadaTitle: "ದರ್ಶನ ಮತ್ತು ಸಮಯ",
          hindiTitle: "दर्शन एवं समय",
          teluguTitle: "దర్శనం & సమయాలు",
          description: "Morning & Evening Darshan Schedule",
          kannadaDescription: "ಬೆಳಗ್ಗೆ ಮತ್ತು ಸಂಜೆ ದರ್ಶನ ವೇಳಾಪಟ್ಟಿ",
          hindiDescription: "प्रातः एवं संध्या दर्शन समय सारणी",
          teluguDescription: "ఉదయం & సాయంత్రం దర్శన సమయాలు",
        },
        {
          title: "Events & Festivals",
          href: "/festivals",
          kannadaTitle: "ಉತ್ಸವಗಳು",
          hindiTitle: "उत्सव एवं पर्व",
          teluguTitle: "ఉత్సవాలు & పండుగలు",
          description: "Annual Jatra, Rathotsava & Utsavs",
          kannadaDescription: "ವಾರ್ಷಿಕ ಜಾತ್ರೆ, ರಥೋತ್ಸವ ಮತ್ತು ಉತ್ಸವಗಳು",
          hindiDescription: "वार्षिक जात्रा, रथोत्सव एवं प्रमुख पर्व",
          teluguDescription: "వార్షిక జాతర, రథోత్సవం & పండుగలు",
        },
      ],
    },
    {
      title: "Gallery",
      href: "/gallery",
      kannadaTitle: "ಭಾವಚಿತ್ರಗಳು",
      hindiTitle: "चित्र दीर्घा",
      teluguTitle: "చిత్రశాల",
    },
    {
      title: "Places to Visit",
      shortTitle: "Places",
      href: "/places-to-visit",
      kannadaTitle: "ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳಗಳು",
      kannadaShortTitle: "ಸ್ಥಳಗಳು",
      hindiTitle: "दर्शनीय स्थल",
      hindiShortTitle: "दर्शनीय स्थल",
      teluguTitle: "దర్శనీయ స్థలాలు",
      teluguShortTitle: "స్థలాలు",
    },
    {
      title: "Contact & Donations",
      shortTitle: "Contact",
      href: "/contact",
      kannadaTitle: "ಸಂಪರ್ಕ ಮತ್ತು ದೇಣಿಗೆ",
      kannadaShortTitle: "ಸಂಪರ್ಕ",
      hindiTitle: "संपर्क एवं दान",
      hindiShortTitle: "संपर्क",
      teluguTitle: "సంప్రదించండి & విరాళాలు",
      teluguShortTitle: "సంప్రదించండి",
    },
  ] satisfies HeaderNavItem[],
};

export function getLocalizedNavTitle(
  item: Pick<HeaderNavItem, "title" | "kannadaTitle" | "hindiTitle" | "teluguTitle">,
  locale: string
): string {
  if (locale === "kn" && item.kannadaTitle) return item.kannadaTitle;
  if (locale === "hi" && item.hindiTitle) return item.hindiTitle;
  if (locale === "te" && item.teluguTitle) return item.teluguTitle;
  return item.title;
}

export function getLocalizedNavShortTitle(
  item: Pick<
    HeaderNavItem,
    | "title"
    | "shortTitle"
    | "kannadaTitle"
    | "kannadaShortTitle"
    | "hindiTitle"
    | "hindiShortTitle"
    | "teluguTitle"
    | "teluguShortTitle"
  >,
  locale: string
): string {
  if (locale === "kn") return item.kannadaShortTitle || item.kannadaTitle || item.title;
  if (locale === "hi") return item.hindiShortTitle || item.hindiTitle || item.title;
  if (locale === "te") return item.teluguShortTitle || item.teluguTitle || item.title;
  return item.shortTitle || item.title;
}

export function getLocalizedNavDescription(
  item: Pick<NavItem, "description" | "kannadaDescription" | "hindiDescription" | "teluguDescription">,
  locale: string
): string | undefined {
  if (locale === "kn" && item.kannadaDescription) return item.kannadaDescription;
  if (locale === "hi" && item.hindiDescription) return item.hindiDescription;
  if (locale === "te" && item.teluguDescription) return item.teluguDescription;
  return item.description;
}

export function getNavLocaleFontClass(locale: string): string | undefined {
  if (locale === "kn") return "font-kannada";
  if (locale === "hi") return "font-hindi";
  if (locale === "te") return "font-telugu";
  return undefined;
}

