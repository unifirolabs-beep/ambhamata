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
    "Official portal of Sri Ambadevi Devasthana (Sri Ambamata Devasthana). Sacred abode of the Divine Mother.",
  url: "https://ambhamata.org",
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
};

