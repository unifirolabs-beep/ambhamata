import { useLocale } from "@/context/locale-context";
import type { Locale } from "@/constants";
import { hiContentTranslation } from "./content-translations-hi";
import { teContentTranslation } from "./content-translations-te";

export interface ContentTranslation {
  header: {
    templeName: string;
    templeSubtitle: string;
    bookSeva: string;
    mantraTicker: string;
  };
  nav: {
    home: string;
    about: string;
    sevas: string;
    timings: string;
    festivals: string;
    gallery: string;
    contact: string;
  };
  hero: {
    mantraText: string;
    subtitle: string;
    title: string;
    location: string;
    callout: string;
    timingsBtn: string;
    sevasBtn: string;
    quickServices: {
      darshanam: { title: string; subtitle: string };
      sevas: { title: string; subtitle: string };
      poojas: { title: string; subtitle: string };
      hundi: { title: string; subtitle: string };
      homam: { title: string; subtitle: string };
      info: { title: string; subtitle: string };
    };
  };
  aboutHome: {
    eyebrow: string;
    headingPart1: string;
    headingPart2: string;
    subtitlePill: string;
    para1: {
      prefix: string;
      bold1: string;
      middle: string;
      bold2: string;
      suffix: string;
    };
    para2: {
      prefix: string;
      bold1: string;
      middle: string;
      bold2: string;
      middle2: string;
      bold3: string;
      suffix: string;
    };
    para3: string;
    highlight: string;
    cta: string;
  };
  sevasHome: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAllBtn: string;
    otherSevasTitle: string;
    tulaabharaName: string;
    kanikeName: string;
  };
  festivalsHome: {
    eyebrow: string;
    heading: string;
    lead: string;
    featuredTag: string;
    featuredTitle: string;
    featuredLocation: string;
    discoverLink: string;
    exploreBtn: string;
    items: Array<{
      tag: string;
      title: string;
      description: string;
    }>;
  };
  aboutPage: {
    banner: {
      eyebrow: string;
      title: string;
      subtitle: string;
      chip1: string;
      chip2: string;
      chip3: string;
    };
    section1: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      lead: string;
      p1: string;
      p2: string;
      p3: string;
      cardEyebrow: string;
      cardHeading: string;
      cardP1: string;
      cardP2: string;
      cardP3: string;
    };
    section2: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      p1: string;
      p2: string;
      p3: string;
      prayerEyebrow: string;
      prayerText: string;
      legacyEyebrow: string;
      legacyText: string;
    };
    section3: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      card1Title: string;
      card1Desc: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
      card4Title: string;
      card4Desc: string;
    };
    section4: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      p1: string;
      p2: string;
      bulletsTitle: string;
      b1: string;
      b2: string;
      b3: string;
      b4: string;
      b5: string;
      quote: string;
      photoCaption: string;
    };
    section5: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      p1: string;
      p2: string;
      p3: string;
    };
    section6: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      visionStatement: string;
      pillars: Array<{
        title: string;
        desc: string;
      }>;
    };
    section7?: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      visionStatement: string;
      pillars: Array<{
        title: string;
        desc: string;
      }>;
    };
    section8: {
      eyebrow: string;
      heading: string;
      p1: string;
      quote: string;
      mantra: string;
      btnSevas: string;
      btnTimings: string;
    };
  };
  sevasPage: {
    banner: {
      eyebrow: string;
      title: string;
      subtitle: string;
      chip1: string;
      chip2: string;
      chip3: string;
    };
    tabs: {
      all: string;
      archana: string;
      abhishekam: string;
      special: string;
    };
    ctaBook: string;
    offeringText: string;
  };
  timingsPage: {
    banner: {
      breadcrumbHome: string;
      breadcrumbCurrent: string;
      mantra: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      description: string;
      chip1: string;
      chip2: string;
      chip3: string;
      chip4: string;
    };
    intro: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      p1: string;
      p2: string;
      hoursCardTitle: string;
      morningLabel: string;
      morningTime: string;
      eveningLabel: string;
      eveningTime: string;
      note: string;
    };
    schedule: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      items: Array<{
        num: string;
        title: string;
        tag: string;
        time: string;
        description: string;
      }>;
    };
    info: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      points: string[];
      adminTitle: string;
      adminDesc: string;
      adminPhone: string;
      adminLocation: string;
      contactBtn: string;
    };
    benediction: {
      quote: string;
      mantra: string;
      bookSevaBtn: string;
      contactBtn: string;
    };
  };
  festivalsPage: {
    hero: {
      mantra: string;
      eyebrow: string;
      heading: string;
      subtitle: string;
      intro: string;
    };
    events: Array<{
      tag: string;
      title: string;
      p1: string;
      p2: string;
      image: string;
      alt: string;
    }>;
    closing: {
      heading: string;
      description: string;
      blessing: string;
      mantra: string;
    };
  };
  galleryPage: {
    hero: {
      mantra: string;
      eyebrow: string;
      heading: string;
      subtitle: string;
      intro: string;
    };
    categories: {
      all: string;
      deity: string;
      architecture: string;
      festivals: string;
      poojas: string;
    };
    highlights: {
      eyebrow: string;
      heading: string;
      subtitle: string;
    };
    closing: {
      heading: string;
      subtitle: string;
      description: string;
      timingsBtn: string;
      sevasBtn: string;
      blessing: string;
      mantra: string;
    };
  };
  contactPage: {
    hero: {
      mantra: string;
      eyebrow: string;
      heading: string;
      subtitle: string;
    };
    info: {
      phoneTitle: string;
      phone: string;
      addressTitle: string;
      address: string;
      timingsTitle: string;
      timings: string;
      trustTitle: string;
      trustInfo: string;
    };
    donation: {
      heading: string;
      subtitle: string;
      description: string;
      hundiNote: string;
    };
  };
  governmentListing: {
    badge: string;
    templeName: string;
    location: string;
    templeIdLabel: string;
    templeId: string;
    description: string;
    buttonText: string;
    govtTitle: string;
    deptTitle: string;
  };
  shilaMantapaInauguration: {
    eyebrow: string;
    title: string;
    subtitle: string;
    venueBadge: string;
    eventDate: string;
    sections: {
      ministers: string;
      presidency: string;
      guests: string;
    };
    ministers: Array<{
      orderNum: string;
      name: string;
      designation: string;
      subDesignation: string;
      image: string;
      badge: string;
    }>;
    president: {
      name: string;
      designation: string;
      constituency: string;
      roleTitle: string;
      image: string;
      badge: string;
    };
    guests: Array<{
      name: string;
      designation: string;
      image: string;
      badge: string;
    }>;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    sevasTitle: string;
    darshanTitle: string;
    morningLabel: string;
    morningTime: string;
    eveningLabel: string;
    eveningTime: string;
    devoteeNote: string;
    copyright: string;
    trustTitle: string;
  };
}

export const contentTranslations: Record<Locale, ContentTranslation> = {
  en: {
    header: {
      templeName: "Sri Bagalamukhi Ambadevi Devasthana",
      templeSubtitle: "Siddha Parvatha Somalapura",
      bookSeva: "Book Seva",
      mantraTicker: "ॐ ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ನಮಃ • ॐ SRI BAGALAMUKHI AMBADEVI NAMAHA • ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು",
    },
    nav: {
      home: "Home",
      about: "About Temple",
      sevas: "Seva & Pooja",
      timings: "Darshan & Timings",
      festivals: "Events & Festivals",
      gallery: "Gallery",
      contact: "Contact & Donations",
    },
    hero: {
      mantraText: "ಶ್ರೀ ಅಂಬಾದೇವಿ",
      subtitle: "A Sacred Abode of Divine Mother Sri Ambadevi",
      title: "Sri Bagalamukhi Ambadevi Devasthana",
      location: "Siddha Parvatha (Ambamata), Karnataka",
      callout: "Seek the Divine Blessings of Goddess Sri Ambadevi",
      timingsBtn: "Timings",
      sevasBtn: "Online Sevas",
      quickServices: {
        darshanam: { title: "DHARSHANAM", subtitle: "Timings & Guidelines" },
        sevas: { title: "SEVAS", subtitle: "Sacred Services" },
        poojas: { title: "VEDIC POOJAS", subtitle: "Offer Your Prayers" },
        hundi: { title: "HUNDI", subtitle: "Make a Donation" },
        homam: { title: "HOMAM", subtitle: "Sacred Havans" },
        info: { title: "TEMPLE INFO", subtitle: "Know Our Temple" },
      },
    },
    aboutHome: {
      eyebrow: "|| ABOUT OUR SACRED KSHETRA ||",
      headingPart1: "About Sukṣhetra Siddha Parvatha",
      headingPart2: "Ambamata Devasthana",
      subtitlePill: "A Sacred Abode of Divine Shakti, Faith and Spiritual Heritage",
      para1: {
        prefix: "Nestled amidst the serene hills of North Karnataka, ",
        bold1: "Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath",
        middle: ", located at Somalapura, Sindhanur Taluk, Raichur District, is a revered spiritual destination dedicated to ",
        bold2: "Sri Ambadevi",
        suffix: ".",
      },
      para2: {
        prefix: "With a documented history traditionally traced back more than ",
        bold1: "343+ Years",
        middle: ", this sacred Kshetra represents centuries of devotion, divine grace and spiritual heritage. The temple's sacred traditions are deeply associated with ",
        bold2: "Param Poojya Sri Chidananda Avadhoota",
        middle2: ", whose intense penance and unwavering devotion are central to the spiritual identity of ",
        bold3: "Siddha Parvatha",
        suffix: ".",
      },
      para3: "Today, Ambamath continues to attract devotees from Karnataka, Maharashtra, Andhra Pradesh, Telangana and other parts of India, preserving a rich tradition of Shakti worship and devotion.",
      highlight: "Discover the divine history, spiritual legacy and sacred traditions of Ambamath.",
      cta: "Explore Our History",
    },
    sevasHome: {
      eyebrow: "|| SRI AMBAMATA DEVASTHANA ||",
      title: "Sevas",
      subtitle: "Participate in the Sacred Sevas and Receive the Divine Blessings of Sri Ambadevi.",
      viewAllBtn: "View All Sevas",
      otherSevasTitle: "Other Sevas",
      tulaabharaName: "Tulaabhara Seva",
      kanikeName: "Kanike (Offering)",
    },
    festivalsHome: {
      eyebrow: "|| EVENTS & FESTIVALS ||",
      heading: "Celebrate the Divine Glory of Sri Ambamata",
      lead: "Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath is a sacred centre of devotion, religious traditions and cultural celebrations.",
      featuredTag: "FEATURED FESTIVAL",
      featuredTitle: "Sri Ambadevi Jatra Mahotsava",
      featuredLocation: "Sukṣhetra Siddha Parvatha, Somalapura",
      discoverLink: "Discover All Celebrations",
      exploreBtn: "Explore All Events & Festivals",
      items: [
        {
          tag: "ANNUAL SILVER CHARIOT",
          title: "Sri Ambadevi Belli Rathotsava",
          description: "The sacred silver chariot procession of Sri Ambadevi, celebrated with devotion and traditional rituals.",
        },
        {
          tag: "SACRED VEDIC RITUAL",
          title: "Sri Ambadevi Kumbhotsava",
          description: "A sacred Kumbha ceremony performed with Vedic rituals for the well-being and prosperity of all devotees.",
        },
        {
          tag: "AUSPICIOUS DAYS",
          title: "Special Religious Celebrations",
          description: "A series of auspicious days and traditional poojas conducted with special alankara and rituals at the temple.",
        },
      ],
    },
    aboutPage: {
      banner: {
        eyebrow: "|| SACRED KSHETRA ||",
        title: "About Sri Ambamata Devasthana",
        subtitle: "Sukṣhetra Siddha Parvatha Shaktipeeth Somalapura",
        chip1: "343+ Years Legacy",
        chip2: "Siddha Parvatha",
        chip3: "Shaktipeeth",
      },
      section1: {
        eyebrow: "|| DOCUMENTED CHRONICLE ||",
        heading: "1. History of Sri Ambamata Devasthana",
        subtitle: "A Sacred Abode of Over Three Centuries of Unwavering Faith & Penance",
        lead: "A sacred legacy spanning over three centuries of unwavering Vedic devotion, saintly penance, and the eternal manifestation of the Divine Mother.",
        p1: "Sukṣhetra Siddha Parvatha Ambamath holds a special place in the spiritual and cultural heritage of North Karnataka. The temple's history is traditionally traced back more than 343 years, reflecting a long-standing tradition of Goddess worship, spiritual practices and devotion.",
        p2: "According to the temple's traditional history, Siddha Parvatha was a sacred place where saints and spiritual seekers performed meditation and penance. The divine presence of Sri Ambadevi is associated with the spiritual experiences and intense devotion of Param Poojya Sri Chidananda Avadhoota.",
        p3: "Historical records, local chronicles and the longstanding tradition of the annual Jatra and Rathotsava testify to the enduring religious importance of the temple in the region.",
        cardEyebrow: "Documented Heritage",
        cardHeading: "343+ Years of Continuous Worship",
        cardP1: "Traced back to 1680 CE in historical records and colonial gazetteers.",
        cardP2: "Recognized in the official 1961 Census of India historical fair surveys.",
        cardP3: "Revered by generations of families across Karnataka, Maharashtra, AP & Telangana.",
      },
      section2: {
        eyebrow: "|| SAINTLY TAPOBHOOMI ||",
        heading: "2. Param Poojya Sri Chidananda Avadhoota",
        subtitle: "The Saint Whose Devotion Enriched the Spiritual Heritage of Siddha Parvatha",
        p1: "The spiritual history of Sukṣhetra Siddha Parvatha Ambamath is inseparably connected with Param Poojya Sri Chidananda Avadhoota, a revered saint whose devotion and spiritual practices are remembered as an important part of the temple's heritage.",
        p2: "According to traditional accounts, Sri Chidananda Avadhoota was deeply devoted to the Divine Mother and pursued spiritual enlightenment through meditation, penance and complete surrender to the Goddess. His spiritual journey brought him to the sacred surroundings of Siddha Parvatha, where he undertook intense penance in the natural caves and serene environment of the hill.",
        p3: "During his unwavering devotion and spiritual practices, Sri Ambadevi is believed to have manifested before him and blessed him with divine grace.",
        prayerEyebrow: "The Saint's Universal Compassionate Prayer",
        prayerText: "\"Moved by his devotion, the saint prayed to Jagadamba to remain eternally at Siddha Parvatha and bless every devotee who approached her with sincere faith, without distinction of caste, creed or social status.\"",
        legacyEyebrow: "Spiritual Legacy of the Avadhoota",
        legacyText: "His association with Ambamath remains a cherished part of the temple's identity and religious tradition, ensuring the doors of divine grace remain open to all souls.",
      },
      section3: {
        eyebrow: "|| SACRED LANDSCAPE ||",
        heading: "3. Siddha Parvatha – The Sacred Hill",
        subtitle: "A Land of Meditation, Penances and Divine Realisation",
        card1Title: "Abode of Siddhas",
        card1Desc: "Traditionally revered as a holy hill visited and consecrated by enlightened masters and ascetic saints for silent meditation.",
        card2Title: "Natural Caves",
        card2Desc: "Features secluded rock shelters and caves traditionally used by spiritual aspirants for deep sadhana away from worldly distractions.",
        card3Title: "Medicinal Flora",
        card3Desc: "Enriched by indigenous herbal vegetation historically referenced by practitioners for their rejuvenating and healing qualities.",
        card4Title: "Spiritual Vibrations",
        card4Desc: "Devotees regularly experience a profound sense of inner calm, mental clarity, and divine peace upon ascending the sacred hill.",
      },
      section4: {
        eyebrow: "|| JAGADAMBA SWAROOPAM ||",
        heading: "4. Sri Ambadevi – The Divine Mother",
        subtitle: "Supreme Embodiment of Divine Feminine Power, Compassion and Protection",
        p1: "Sri Ambadevi is worshipped as the supreme embodiment of divine feminine power, compassion and protection. Revered as Jagadamba, the Mother of the Universe, the Goddess represents the eternal power that protects righteousness, removes obstacles and guides devotees towards peace and spiritual strength.",
        p2: "The sacred Shree Bagala Chakra Shaktipeeth is an important part of the spiritual identity of Ambamath and its traditional worship.",
        bulletsTitle: "Devotees Seek Her Grace For:",
        b1: "Divine protection and supreme spiritual blessings.",
        b2: "Peace, harmony, and lasting prosperity in family life.",
        b3: "Inner strength, courage, and resilience during difficult times.",
        b4: "Removal of spiritual obstacles and negative worldly influences.",
        b5: "Continuous spiritual growth, peace of mind, and well-being.",
        quote: "The temple's sacred traditions reflect the belief that the Divine Mother is always present to guide and protect those who approach her with sincere devotion.",
        photoCaption: "Goddess Sri Ambadevi • Shree Bagala Chakra Shaktipeeth",
      },
      section5: {
        eyebrow: "|| ORAL & VEDIC HERITAGE ||",
        heading: "5. Devi Purana and Sacred Traditions",
        subtitle: "Timeless Oral Legends, Vedic Hymns and Divine Manifestation of the Mother",
        p1: "The sacred Devi Purana associated with Ambamath is traditionally preserved through the temple's religious traditions and dedicated generations of devotees.",
        p2: "It narrates the divine manifestations, spiritual significance, sacred miracles and boundless compassion of Sri Ambadevi. These sacred narratives form an important part of the devotional heritage of the Kshetra and continue to be faithfully passed down through generations.",
        p3: "Vedic hymns, stotras and devotional songs honoring the Goddess are recited during daily rituals and major festivals, keeping alive the rich oral and cultural heritage of the temple.",
      },
      section6: {
        eyebrow: "|| FUTURE & PILGRIMAGE ROADMAP ||",
        heading: "6. Our Vision & Spiritual Heritage",
        subtitle: "Preserving Temple Traditions & Improving the Pilgrimage Experience",
        visionStatement: "The development of Sukṣhetra Siddha Parvatha Ambamath is not limited to temple infrastructure. It represents an enduring commitment to preserving an invaluable spiritual and cultural heritage for future generations, while establishing Siddha Parvatha on India's spiritual pilgrimage map.",
        pillars: [
          {
            title: "Major Pilgrimage Center",
            desc: "Establishing Siddha Parvatha as a renowned pilgrimage and spiritual tourism destination across North Karnataka.",
          },
          {
            title: "Heritage Preservation",
            desc: "Safeguarding over 343+ years of spiritual chronicles, saintly traditions, and sacred oral narratives.",
          },
          {
            title: "Pilgrim Amenities",
            desc: "Providing comfortable devotee accommodation, purified water, queue complexes, and serene meditation zones.",
          },
          {
            title: "Traditional Vedic Worship",
            desc: "Preserving authentic rituals, daily archana, homas, and Shree Bagala Chakra Shaktipeeth sanctity.",
          },
          {
            title: "Hill & Environmental Care",
            desc: "Preserving the sacred Siddha Parvatha hill, native medicinal plants, ancient caves, and peaceful environment.",
          },
          {
            title: "Cultural & Devotional Tourism",
            desc: "Connecting the sacred legacy of Ambadevi with Karnataka's richer spiritual and cultural heritage circuit.",
          },
        ],
      },
      section7: {
        eyebrow: "|| FUTURE & PILGRIMAGE ROADMAP ||",
        heading: "6. Our Vision & Spiritual Heritage",
        subtitle: "Preserving Temple Traditions & Improving the Pilgrimage Experience",
        visionStatement: "The development of Sukṣhetra Siddha Parvatha Ambamath is not limited to temple infrastructure. It represents an enduring commitment to preserving an invaluable spiritual and cultural heritage for future generations, while establishing Siddha Parvatha on India's spiritual pilgrimage map.",
        pillars: [
          {
            title: "Major Pilgrimage Center",
            desc: "Establishing Siddha Parvatha as a renowned pilgrimage and spiritual tourism destination across North Karnataka.",
          },
          {
            title: "Heritage Preservation",
            desc: "Safeguarding over 343+ years of spiritual chronicles, saintly traditions, and sacred oral narratives.",
          },
          {
            title: "Pilgrim Amenities",
            desc: "Providing comfortable devotee accommodation, purified water, queue complexes, and serene meditation zones.",
          },
          {
            title: "Traditional Vedic Worship",
            desc: "Preserving authentic rituals, daily archana, homas, and Shree Bagala Chakra Shaktipeeth sanctity.",
          },
          {
            title: "Hill & Environmental Care",
            desc: "Preserving the sacred Siddha Parvatha hill, native medicinal plants, ancient caves, and peaceful environment.",
          },
          {
            title: "Cultural & Devotional Tourism",
            desc: "Connecting the sacred legacy of Ambadevi with Karnataka's richer spiritual and cultural heritage circuit.",
          },
        ],
      },
      section8: {
        eyebrow: "|| OUR ETERNAL BELIEF ||",
        heading: "A Living Heritage of Faith, Devotion and Divine Grace",
        p1: "Sukṣhetra Siddha Parvatha Shaktipeeth Ambamath is more than a place of worship. It is a sacred heritage shaped by faith, devotion, spiritual practices and the blessings of the Divine Mother.",
        quote: "“May the divine blessings of Sri Ambamata bring peace, prosperity, strength and happiness to all.”",
        mantra: "॥ ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಿಗೆ ಜಯವಾಗಲಿ ॥",
        btnSevas: "Explore Temple Sevas",
        btnTimings: "Temple Darshan Timings",
      },
    },
    sevasPage: {
      banner: {
        eyebrow: "|| SACRED OFFERINGS ||",
        title: "Pooja & Temple Sevas",
        subtitle: "Participate in Sacred Daily and Special Sevas at Sukṣhetra Siddha Parvatha Ambamata",
        chip1: "Daily & Special Sevas",
        chip2: "Vedic Sankalpa",
        chip3: "Sanctum Sanctorum",
      },
      tabs: {
        all: "All Sevas",
        archana: "Archana & Daily",
        abhishekam: "Abhishekam",
        special: "Special & Chariot",
      },
      ctaBook: "Book Seva",
      offeringText: "Devotional Offering",
    },
    timingsPage: {
      banner: {
        breadcrumbHome: "Home",
        breadcrumbCurrent: "Darshan & Timings",
        mantra: "|| ॐ श्री अम्बादेव्यै नमಃ ||",
        eyebrow: "SUKṢHETRA SIDDHA PARVATHA SHAKTIPEETH AMBAMATH",
        title: "Darshan & Daily Pooja Timings",
        subtitle: "Experience the Divine Grace of Sri Ambadevi",
        description:
          "Sri Ambamata Devasthana welcomes devotees to experience the divine presence of Sri Ambadevi at the sacred Siddha Parvatha Kshetra. Daily worship and religious rituals are performed according to traditional practices of the temple.",
        chip1: "Daily Darshan: 6:00 AM – 8:30 PM",
        chip2: "7 Sacred Daily Ceremonies",
        chip3: "Traditional Agama Puja",
        chip4: "Devotee Pradakshina",
      },
      intro: {
        eyebrow: "|| DIVINE SANCTUM DARSHAN ||",
        heading: "Experience the Divine Grace of Sri Ambadevi",
        subtitle: "A Sacred Abode of Divine Shakti, Faith and Timeless Devotional Heritage",
        p1: "Sri Ambamata Devasthana welcomes devotees to experience the divine presence of Sri Ambadevi at the sacred Siddha Parvatha Kshetra.",
        p2: "Daily worship and religious rituals are performed according to the traditional practices of the temple. Devotees can participate in the sacred ceremonies, offer prayers and seek the blessings of the Divine Mother.",
        hoursCardTitle: "General Darshan Timings",
        morningLabel: "Morning Darshan:",
        morningTime: "6:00 AM – 1:30 PM",
        eveningLabel: "Evening Darshan:",
        eveningTime: "4:00 PM – 8:30 PM",
        note: "Sanctum open on all days for devotees seeking the divine blessings of Goddess Sri Ambadevi.",
      },
      schedule: {
        eyebrow: "|| VEDIC WORSHIP SCHEDULE ||",
        heading: "Daily Pooja Schedule",
        subtitle: "Traditional Ceremonies Performed According to Sacred Agama Shastra",
        items: [
          {
            num: "1",
            title: "Kakada Aarti – Early Morning",
            tag: "Dawn Offering",
            time: "Early Morning (6:00 AM)",
            description:
              "The daily worship begins with Kakada Aarti, the traditional morning offering of light to Sri Ambadevi. The aarti marks the beginning of the day's religious ceremonies.",
          },
          {
            num: "2",
            title: "Rudrabhisheka",
            tag: "Vedic Chanting",
            time: "Abhisheka Pooja (7:00 AM – 9:00 AM)",
            description:
              "A sacred Abhisheka performed as part of the temple's daily religious worship, seeking divine blessings and spiritual well-being.",
          },
          {
            num: "3",
            title: "Panchamrutha Abhisheka",
            tag: "Holy Bathing Rite",
            time: "Abhisheka Pooja (7:00 AM – 9:00 AM)",
            description:
              "A traditional sacred bathing ritual performed with five holy ingredients as part of the prescribed worship practices.",
          },
          {
            num: "4",
            title: "Sahasranama Kumkumarchana",
            tag: "Devi Sahasranama",
            time: "Morning Ritual (8:00 AM)",
            description:
              "A devotional offering performed by reciting the sacred names of the Goddess and offering Kumkum in reverence to Sri Ambadevi.",
          },
          {
            num: "5",
            title: "Sri Devi Pooja & Alankara",
            tag: "Divine Alankara",
            time: "9:00 AM to 10:00 AM",
            description:
              "Special worship is performed for Sri Ambadevi, followed by traditional Alankara, during which the Goddess is adorned with beautiful sarees and ornaments.",
          },
          {
            num: "6",
            title: "Devotee Darshan, Pooja & Archana",
            tag: "Public Worship",
            time: "10:00 AM to 1:30 PM & 4:00 PM to 8:00 PM",
            description:
              "Following the Goddess's Alankara, devotees are provided an opportunity to have Darshan, offer prayers and participate in available Pooja and Archana services.",
          },
          {
            num: "7",
            title: "Maha Mangalarati",
            tag: "Evening Climax",
            time: "8:00 PM to 8:30 PM",
            description:
              "The day's regular worship concludes with Maha Mangalarati, the sacred final offering of light to the Divine Mother.",
          },
        ],
      },
      info: {
        eyebrow: "|| PILGRIM GUIDELINES ||",
        heading: "Devotee Information",
        subtitle: "Important Guidelines and Protocols for Devotees Visiting the Kshetra",
        points: [
          "Devotees are welcome to participate in the permitted daily religious rituals.",
          "Special Sevas and Archana services are available according to temple traditions.",
          "Festival days and special occasions may have different schedules.",
          "Please contact the temple administration for the latest Darshan timings and special Pooja arrangements.",
        ],
        adminTitle: "Temple Administration & Helpdesk",
        adminDesc:
          "For advance seva bookings, accommodation inquiries, or special festival timings, please reach out to the Devasthana office.",
        adminPhone: "+91 94486 32541 / +91 98451 78923",
        adminLocation: "Sukṣhetra Siddha Parvatha, Somalapura, Sindhanur Taluk, Raichur District, Karnataka",
        contactBtn: "Contact Administration",
      },
      benediction: {
        quote: "May the divine blessings of Sri Ambadevi bring peace, prosperity and happiness to every devotee.",
        mantra: "॥ ಶ್ರೀ ಅಂಬಾದೇವಿ ಪ್ರಸನ್ನ ॥",
        bookSevaBtn: "Book Seva Online",
        contactBtn: "Temple Contact & Donation",
      },
    },
    festivalsPage: {
      hero: {
        mantra: "|| ॐ श्री अम्बादेव्यै नमः ||",
        eyebrow: "|| SACRED CONGREGATIONS ||",
        heading: "Events & Festivals",
        subtitle: "Sacred Celebrations at Siddha Parvatha",
        intro:
          "Sukshetra Siddha Parvatha Shaktipeeth Ambamath is a sacred centre of devotion, religious traditions and cultural celebrations. Throughout the year, various festivals and special religious ceremonies are observed at Sri Ambamata Devasthana, bringing together devotees from Karnataka and neighbouring states.",
      },
      events: [
        {
          tag: "DOCUMENTED IN 1961 CENSUS",
          title: "Sri Ambadevi Jatra Mahotsava",
          p1: "The annual Sri Ambadevi Jatra Mahotsava is one of the most significant religious celebrations of the temple. The Jatra brings together a large gathering of devotees for special Poojas, devotional offerings, religious ceremonies and the traditional Rathotsava.",
          p2: "Historical records from the 1961 Census of India document the annual fair at Somalapura, including the traditional Rathotsava and the grand gathering of approximately 20,000–30,000 devotees across Karnataka, Maharashtra, and neighboring states.",
          image: "/festival-hero-desktop.png",
          alt: "Sri Ambadevi Jatra Mahotsava Temple Gathering",
        },
        {
          tag: "ANNUAL SILVER CHARIOT",
          title: "Sri Ambadevi Belli Rathotsava (Silver Chariot Festival)",
          p1: "The Belli Rathotsava is a significant devotional celebration associated with Sri Ambadevi. During this occasion, the Goddess is ceremonially taken in a beautifully decorated silver chariot as part of the traditional religious procession.",
          p2: "Amidst the chanting of Vedic hymns and resonant devotional prayers, thousands of devotees gather to witness the sacred procession through the streets of Somalapura, offering flowers and coconuts to seek the divine grace of the Mother.",
          image: "/sevas/special-poojas-hq.jpg",
          alt: "Sri Ambadevi Belli Rathotsava Silver Chariot",
        },
        {
          tag: "NAVARATRI CELEBRATIONS",
          title: "Sharannavaratri Mahotsava",
          p1: "Nine sacred nights of intensive Shakti worship, Chandi Homa, special alankaras and divine aradhana are performed with great devotion, attracting large number of devotees to seek the blessings of Sri Ambadevi.",
          p2: "Each night, the Goddess is adorned in unique traditional alankaras representing different sacred forms of the Divine Mother. Devotees participate in continuous kumkuma archana, recitation of Sri Lalitha Sahasranama, and evening devotional bhajans.",
          image: "/sevas/sharannavaratri-devi.jpg",
          alt: "Sharannavaratri Mahotsava Sri Ambadevi Alankara",
        },
        {
          tag: "TRIUMPH OF DHARMA",
          title: "Vijayadashami Celebrations",
          p1: "Auspicious culmination of the Navaratri celebrations, signifying the triumph of divine righteousness. Special Poojas, alankaras and darshan are performed on this sacred day.",
          p2: "On this sacred Vijayadashami, special Poojas, Alankaras and Maha Mangalarati are offered. Devotees from near and far visit the temple to seek auspicious beginnings, spiritual protection, and victorious blessings in all righteous endeavors.",
          image: "/sevas/homam-hq.jpg",
          alt: "Vijayadashami Sacred Homa Fire and Rituals",
        },
        {
          tag: "MONTHLY FULL MOON",
          title: "Pournami Special Worship",
          p1: "On every Pournami (full moon), special Vedic abhishekas, kumkuma archana and prayers are performed, and devotees participate in worship seeking peace, health and family prosperity.",
          p2: "The sacred Siddha Parvatha hill glows under the celestial full moon, creating a deeply spiritually charged atmosphere where collective prayers and deep meditation bestow peace of mind and lasting spiritual harmony.",
          image: "/sevas/pournami-moon.jpg",
          alt: "Pournami Special Worship Full Moon over Temple",
        },
        {
          tag: "NEW MOON OBSERVANCE",
          title: "Amavasya Religious Observances",
          p1: "On Amavasya (new moon), special prayers and spiritual cleansing ceremonies are performed, seeking the removal of negative influences, doshas, and the well-being of devotees.",
          p2: "Special Shanti poojas, protective sankalpas, and traditional rituals are conducted at the Shree Bagala Chakra Shaktipeeth, invoking the Goddess's fierce protective grace to dispel all spiritual obstacles and illuminate life with inner strength.",
          image: "/sevas/abhishekam-hq.jpg",
          alt: "Amavasya Religious Observances Sacred Kumbha",
        },
      ],
      closing: {
        heading: "The Spirit of Celebration",
        description:
          "The festivals of Sri Ambamata Devasthana are more than religious gatherings. They represent generations of faith, devotion, cultural heritage and community participation. Through these sacred celebrations, the traditions of Siddha Parvatha continue to inspire devotees and preserve the divine legacy of Sri Ambadevi.",
        blessing: "May Sri Ambamata bless all devotees with peace, prosperity and happiness.",
        mantra: "॥ Jai Sri Ambamata ॥",
      },
    },
    galleryPage: {
      hero: {
        mantra: "ॐ श्री ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ನಮಃ",
        eyebrow: "SACRED TEMPLE PHOTO GALLERY",
        heading: "Divine Darshan & Temple Moments",
        subtitle: "A Sacred Visual Journey of Siddha Parvatha Ambamata",
        intro: "Immerse in the divine presence of Goddess Sri Ambadevi through sacred sanctum photographs, the grandeur of the Belli Rathotsava, Vedic poojas, and the timeless serenity of the ancient hill shrine.",
      },
      categories: {
        all: "All Photographs",
        deity: "Sacred Sanctum & Deities",
        architecture: "Temple & Sacred Hills",
        festivals: "Belli Rathotsava & Utsavas",
        poojas: "Vedic Poojas & Rituals",
      },
      highlights: {
        eyebrow: "SACRED KSHETRA SHOWCASE",
        heading: "Capturing 343+ Years of Divine Heritage",
        subtitle: "Sacred memories preserved through generations of unbroken faith and worship",
      },
      closing: {
        heading: "Seek the Divine Blessings in Person",
        subtitle: "Plan Your Visit to Sukṣhetra Siddha Parvatha",
        description: "Photographs convey a glimpse of the grace; witnessing the divine presence in person at the sanctum sanctorum of Sri Ambadevi brings enduring peace, clarity, and fulfillment to devotees.",
        timingsBtn: "View Darshan Timings",
        sevasBtn: "Explore Temple Sevas",
        blessing: "May Goddess Sri Ambadevi bestow health, prosperity, and spiritual joy upon you and your family.",
        mantra: "॥ ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು ॥",
      },
    },
    contactPage: {
      hero: {
        mantra: "ॐ श्री ಅಂಬಾದೇವಿ ನಮಃ",
        eyebrow: "TEMPLE CONTACT & DEVOTEE SERVICES",
        heading: "Connect with Sri Ambamata Devasthana",
        subtitle: "Administration office, helpline, seva enquiries, and sacred offerings",
      },
      info: {
        phoneTitle: "Temple Office & Helpline",
        phone: "+91 94801 64515 / +91 98450 12345",
        addressTitle: "Temple Location",
        address: "Sukṣhetra Siddha Parvatha, Somalapura, Sindhanur Taluk, Raichur District, Karnataka - 584128",
        timingsTitle: "Office Hours",
        timings: "Morning: 6:00 AM – 1:30 PM | Evening: 4:00 PM – 8:30 PM",
        trustTitle: "Administration Trust",
        trustInfo: "Sri Bagalamukhi Ambadevi Devasthana Trust (Regd.), Somalapura",
      },
      donation: {
        heading: "Devotional Offerings & Kanike",
        subtitle: "Support temple maintenance, nitya annadana, and spiritual activities",
        description: "Devotees wishing to contribute kanike, seva offerings, or annadana donations can coordinate directly with the temple administration counter or transfer through official registered bank accounts.",
        hundiNote: "All devotional contributions made through the official temple counter are duly acknowledged with official temple receipts.",
      },
    },
    governmentListing: {
      badge: "Official HR&CE Portal Listing",
      templeName: "Sri Ambadevi Devasthana",
      location: "Somalapura, Sindhanur Taluk, Raichur District, Karnataka",
      templeIdLabel: "Temple ID",
      templeId: "TM000155",
      description:
        "Sri Ambadevi Temple, Somalapura, is officially listed on the Government of Karnataka's Hindu Religious Institutions & Charitable Endowments Department (HR&CE) portal. Devotees can refer to the official government portal for temple information and available services.",
      buttonText: "View Official Government Record",
      govtTitle: "Government of Karnataka",
      deptTitle: "Hindu Religious Institutions & Charitable Endowments Department",
    },
    shilaMantapaInauguration: {
      eyebrow: "|| SACRED INAUGURATION CEREMONY ||",
      title: "Inauguration Ceremony of the New Shila Mantapa",
      subtitle: "Sukṣhetra Siddha Parvatha Sri Ambadevi Devasthana, Somalapura",
      venueBadge: "Grand Dedication Mahotsava",
      eventDate: "Sacred Stone Pavilion Lokarpana",
      sections: {
        ministers: "Hon'ble Cabinet Ministers & Chief Guests",
        presidency: "Event Presidency",
        guests: "Distinguished Dignitaries & Hon'ble Guests",
      },
      ministers: [
        {
          orderNum: "3",
          name: "Sri Satish Jarkiholi",
          designation: "Hon'ble Minister for Public Works Department",
          subDesignation: "Government of Karnataka",
          image: "/dignitaries/satish-jarkiholi.jpg",
          badge: "Cabinet Minister",
        },
        {
          orderNum: "4",
          name: "Sri Basavaraj Rayareddy",
          designation: "Hon'ble Minister for Higher Education / Financial Advisor",
          subDesignation: "MLA Yelburga, Govt. of Karnataka",
          image: "/dignitaries/basavaraj-rayareddy.jpg",
          badge: "Cabinet Minister",
        },
        {
          orderNum: "5",
          name: "Sri Shivaraj Tangadagi",
          designation: "Hon'ble Minister for Backward Classes Welfare & Kannada & Culture",
          subDesignation: "Government of Karnataka",
          image: "/dignitaries/shivaraj-tangadagi.jpg",
          badge: "Cabinet Minister",
        },
      ],
      president: {
        name: "Sri Hampanagouda Badarli",
        designation: "Hon'ble Member of Legislative Assembly (MLA)",
        constituency: "Sindhanur Assembly Constituency",
        roleTitle: "Presided By",
        image: "/dignitaries/hampanagouda-badarli.jpg",
        badge: "President of Ceremony",
      },
      guests: [
        {
          name: "Sri R. Basanagouda Turvihal",
          designation: "Hon'ble MLA, Maski Assembly Constituency",
          image: "/dignitaries/basanagouda-turvihal.jpg",
          badge: "MLA - Maski",
        },
        {
          name: "Sri Basanagouda Daddal",
          designation: "Hon'ble MLA, Raichur Rural & Chairman, Maharshi Valmiki ST Dev Corp",
          image: "/dignitaries/basanagouda-daddal.jpg",
          badge: "MLA - Raichur Rural",
        },
        {
          name: "Sri J.T. Patil",
          designation: "Hon'ble MLA, Bilgi Assembly Constituency",
          image: "/dignitaries/jt-patil.jpg",
          badge: "MLA - Bilgi",
        },
        {
          name: "Sri G. Kumar Naik",
          designation: "Hon'ble Member of Parliament (MP), Raichur Lok Sabha Constituency (Retd. IAS)",
          image: "/dignitaries/kumar-naik.jpg",
          badge: "Member of Parliament",
        },
        {
          name: "Dr. Shivaraj N. Patil",
          designation: "Hon'ble Former MLA, Raichur City Constituency",
          image: "/dignitaries/shivaraj-n-patil.jpg",
          badge: "Former MLA",
        },
      ],
    },
    footer: {
      description: "Sacred abode of Sri Ambamata Devasthana, nurturing spiritual heritage, Vedic rituals, and devotional traditions for generations.",
      quickLinksTitle: "Quick Links",
      sevasTitle: "Seva & Pooja",
      darshanTitle: "Daily Darshan Hours",
      morningLabel: "Morning:",
      morningTime: "6:00 AM – 1:30 PM",
      eveningLabel: "Evening:",
      eveningTime: "4:00 PM – 8:30 PM",
      devoteeNote: "Open on all days for devotees seeking the divine blessings of Sri Ambadevi.",
      copyright: "All Rights Reserved. Sri Ambamata Devasthana.",
      trustTitle: "Sri Ambamata Devasthana Trust",
    },
  },
  kn: {
    header: {
      templeName: "ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ",
      templeSubtitle: "ಸಿದ್ಧ ಪರ್ವತ ಸೋಮಲಾಪುರ",
      bookSeva: "ಸೇವೆ ಕಾಯ್ದಿರಿಸಿ",
      mantraTicker: "ॐ ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ನಮಃ • ॐ SRI BAGALAMUKHI AMBADEVI NAMAHA • ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು",
    },
    nav: {
      home: "ಮುಖಪುಟ",
      about: "ದೇವಾಲಯದ ಬಗ್ಗೆ",
      sevas: "ಸೇವೆ ಮತ್ತು ಪೂಜೆ",
      timings: "ದರ್ಶನ ಮತ್ತು ಸಮಯ",
      festivals: "ಉತ್ಸವಗಳು",
      gallery: "ಭಾವಚಿತ್ರಗಳು",
      contact: "ಸಂಪರ್ಕ ಮತ್ತು ದೇಣಿಗೆ",
    },
    hero: {
      mantraText: "ಶ್ರೀ ಅಂಬಾದೇವಿ",
      subtitle: "ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಸನ್ನಿಧಿ",
      title: "ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ",
      location: "ಸಿದ್ಧ ಪರ್ವತ (ಅಂಬಾಮಠ), ಸೋಮಲಾಪುರ, ಕರ್ನಾಟಕ",
      callout: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪೆ ಮತ್ತು ಆಶೀರ್ವಾದ ಪಡೆಯಿರಿ",
      timingsBtn: "ದರ್ಶನ ಸಮಯ",
      sevasBtn: "ಆನ್‌ಲೈನ್ ಸೇವೆಗಳು",
      quickServices: {
        darshanam: { title: "ದರ್ಶನ", subtitle: "ದರ್ಶನ ಸಮಯ ಮತ್ತು ಮಾಹಿತಿ" },
        sevas: { title: "ಸೇವೆಗಳು", subtitle: "ಪವಿತ್ರ ಪೂಜಾ ಸೇವೆಗಳು" },
        poojas: { title: "ವೈದಿಕ ಪೂಜೆ", subtitle: "ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸಿ" },
        hundi: { title: "ಹುಂಡಿ", subtitle: "ಭಕ್ತಿ ಕಾಣಿಕೆ ಸಮರ್ಪಣೆ" },
        homam: { title: "ಹೋಮ ಹವನ", subtitle: "ಪವಿತ್ರ ಯಾಗ" },
        info: { title: "ಕ್ಷೇತ್ರ ಮಾಹಿತಿ", subtitle: "ದೇವಾಲಯದ ಇತಿಹಾಸ" },
      },
    },
    aboutHome: {
      eyebrow: "|| ನಮ್ಮ ಪವಿತ್ರ ಕ್ಷೇತ್ರದ ಬಗ್ಗೆ ||",
      headingPart1: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಾತಾ",
      headingPart2: "ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ",
      subtitlePill: "ದಿವ್ಯ ಶಕ್ತಿ, ನಂಬಿಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯ ಪವಿತ್ರ ಸನ್ನಿಧಿ",
      para1: {
        prefix: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಪ್ರಶಾಂತ ಬೆಟ್ಟಗಳ ನಡುವೆ ನೆಲೆಸಿರುವ, ",
        bold1: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠವು",
        middle: " ರಾಯಚೂರು ಜಿಲ್ಲೆಯ ಸಿಂಧನೂರು ತಾಲೂಕಿನ ಸೋಮಲಾಪುರದಲ್ಲಿದ್ದು, ಜಗನ್ಮಾತೆಯಾದ ",
        bold2: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ",
        suffix: " ಪರಮ ಪವಿತ್ರ ಆರಾಧನಾ ಕ್ಷೇತ್ರವಾಗಿದೆ.",
      },
      para2: {
        prefix: "343+ ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚಿನ ಪರಂಪರಾಗತ ಇತಿಹಾಸವಿರುವ ಈ ಪವಿತ್ರ ಕ್ಷೇತ್ರವು ಶತಮಾನಗಳ ಭಕ್ತಿ, ದೈವಿಕ ಕೃಪೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯ ಪ್ರತೀಕವಾಗಿದೆ. ಕ್ಷೇತ್ರದ ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳು ",
        bold1: "343+ ವರ್ಷಗಳ ಪರಂಪರೆ",
        middle: "ಯನ್ನು ಹೊಂದಿದ್ದು, ",
        bold2: "ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರ",
        middle2: " ಕಠಿಣ ತಪಸ್ಸು ಮತ್ತು ಅಚಲ ಭಕ್ತಿಯೊಂದಿಗೆ ನಿಕಟವಾಗಿ ಬೆಸೆದುಕೊಂಡಿದೆ. ಇದು ",
        bold3: "ಸಿದ್ಧ ಪರ್ವತದ",
        suffix: " ಆಧ್ಯಾತ್ಮಿಕ ಹಿರಿಮೆಯನ್ನು ಜಗತ್ತಿಗೆ ಸಾರಿದೆ.",
      },
      para3: "ಇಂದು ಅಂಬಾಮಠವು ಕರ್ನಾಟಕ, ಮಹಾರಾಷ್ಟ್ರ, ಆಂಧ್ರಪ್ರದೇಶ, ತೆಲಂಗಾಣ ಸೇರಿದಂತೆ ದೇಶದ ನಾನಾ ಭಾಗಗಳಿಂದ ಭಕ್ತರನ್ನು ಆಕರ್ಷಿಸುತ್ತಿದ್ದು, ಶಕ್ತಿ ಉಪಾಸನೆ ಮತ್ತು ಭಕ್ತಿಯ ಭವ್ಯ ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿಕೊಂಡು ಬಂದಿದೆ.",
      highlight: "ಅಂಬಾಮಠದ ದಿವ್ಯ ಇತಿಹಾಸ, ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆ ಮತ್ತು ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳನ್ನು ತಿಳಿಯಿರಿ.",
      cta: "ಇತಿಹಾಸ ತಿಳಿಯಿರಿ",
    },
    sevasHome: {
      eyebrow: "|| ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನ ||",
      title: "ಸೇವೆಗಳು",
      subtitle: "ಪವಿತ್ರ ಸೇವೆಗಳಲ್ಲಿ ಪಾಲ್ಗೊಂಡು ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪೆಗೆ ಪಾತ್ರರಾಗಿ.",
      viewAllBtn: "ಎಲ್ಲಾ ಸೇವೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      otherSevasTitle: "ಇತರ ಸೇವೆಗಳು",
      tulaabharaName: "ತುಲಾಭಾರ ಸೇವೆ",
      kanikeName: "ಕಾಣಿಕೆ ಸಮರ್ಪಣೆ",
    },
    festivalsHome: {
      eyebrow: "|| ಉತ್ಸವಗಳು ಮತ್ತು ಹಬ್ಬಗಳು ||",
      heading: "ಶ್ರೀ ಅಂಬಾಮಾತೆಯ ದಿವ್ಯ ವೈಭವವನ್ನು ಆಚರಿಸಿ",
      lead: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠವು ಭಕ್ತಿ, ಧಾರ್ಮಿಕ ಸಂಪ್ರದಾಯಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಆಚರಣೆಗಳ ಪರಮ ಪವಿತ್ರ ಕೇಂದ್ರವಾಗಿದೆ.",
      featuredTag: "ಪ್ರಮುಖ ವಾರ್ಷಿಕ ಜಾತ್ರೆ",
      featuredTitle: "ಶ್ರೀ ಅಂಬಾದೇವಿ ಜಾತ್ರಾ ಮಹೋತ್ಸವ",
      featuredLocation: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ, ಸೋಮಲಾಪುರ",
      discoverLink: "ಎಲ್ಲಾ ಉತ್ಸವಗಳನ್ನು ತಿಳಿಯಿರಿ",
      exploreBtn: "ಎಲ್ಲಾ ಉತ್ಸವಗಳು ಮತ್ತು ಹಬ್ಬಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      items: [
        {
          tag: "ವಾರ್ಷಿಕ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ",
          title: "ಶ್ರೀ ಅಂಬಾದೇವಿ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ",
          description: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಪವಿತ್ರ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ, ಭಕ್ತಿ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ವಿಧಿವಿಧಾನಗಳೊಂದಿಗೆ ವಿಜೃಂಭಣೆಯಿಂದ ಜರುಗುತ್ತದೆ.",
        },
        {
          tag: "ಪವಿತ್ರ ಕುಂಭೋತ್ಸವ",
          title: "ಶ್ರೀ ಅಂಬಾದೇವಿ ಕುಂಭೋತ್ಸವ",
          description: "ಸಕಲ ಭಕ್ತಾದಿಗಳ ಕ್ಷೇಮ ಮತ್ತು ಸಮೃದ್ಧಿಗಾಗಿ ವೈದಿಕ ವಿಧಿಗಳೊಂದಿಗೆ ನೆರವೇರಿಸುವ ಪವಿತ್ರ ಕುಂಭೋತ್ಸವ ಪೂಜೆ.",
        },
        {
          tag: "ವಿಶೇಷ ಧಾರ್ಮಿಕ ದಿನಗಳು",
          title: "ವಿಶೇಷ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು",
          description: "ದೇವಾಲಯದಲ್ಲಿ ವಿಶೇಷ ಅಲಂಕಾರ ಮತ್ತು ಆರಾಧನೆಯೊಂದಿಗೆ ಜರುಗುವ ಪುಣ್ಯದಿನಗಳು ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಪೂಜೆಗಳ ಸರಣಿ.",
        },
      ],
    },
    aboutPage: {
      banner: {
        eyebrow: "|| ಪವಿತ್ರ ಕ್ಷೇತ್ರ ||",
        title: "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದ ಪರಿಚಯ",
        subtitle: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಸೋಮಲಾಪುರ, ಕರ್ನಾಟಕ",
        chip1: "343+ ವರ್ಷಗಳ ಪರಂಪರೆ",
        chip2: "ಸಿದ್ಧ ಪರ್ವತ",
        chip3: "ಶಕ್ತಿಪೀಠ",
      },
      section1: {
        eyebrow: "|| ದಾಖಲಿತ ಇತಿಹಾಸ ||",
        heading: "1. ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ",
        subtitle: "ಮೂರು ಶತಮಾನಗಳಿಗೂ ಹೆಚ್ಚಿನ ಅಚಲ ಭಕ್ತಿ ಮತ್ತು ತಪಸ್ಸಿನ ಪವಿತ್ರ ಸನ್ನಿಧಿ",
        lead: "ಮೂರು ಶತಮಾನಗಳಿಗೂ ಹೆಚ್ಚಿನ ವೈದಿಕ ಭಕ್ತಿ, ಸಂತರ ತಪಸ್ಸು ಮತ್ತು ಜಗನ್ಮಾತೆಯ ದಿವ್ಯ ಸಾಕ್ಷಾತ್ಕಾರದ ಪವಿತ್ರ ಪರಂಪರೆ.",
        p1: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಆಧ್ಯಾತ್ಮಿಕ ಹಾಗೂ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯಲ್ಲಿ ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಠವು ಅತ್ಯಂತ ಪವಿತ್ರ ಸ್ಥಾನವನ್ನು ಪಡೆದಿದೆ. ದೇವಾಲಯದ ಇತಿಹಾಸವು 343+ ವರ್ಷಗಳಿಗಿಂತಲೂ ಹಿಂದಿನ ಪರಂಪರೆಯನ್ನು ಹೊಂದಿದ್ದು, ನಿರಂತರ ದೇವಿ ಉಪಾಸನೆ, ಆಧ್ಯಾತ್ಮಿಕ ಸಾಧನೆ ಮತ್ತು ಭಕ್ತಿಯ ಪ್ರತೀಕವಾಗಿದೆ.",
        p2: "ದೇವಾಲಯದ ಐತಿಹಾಸಿಕ ಸಂಪ್ರದಾಯದ ಪ್ರಕಾರ, ಸಿದ್ಧ ಪರ್ವತವು ಋಷಿಮುನಿಗಳು ಹಾಗೂ ತಪಸ್ವಿಗಳು ತಪಸ್ಸು ಮತ್ತು ಧ್ಯಾನ ಮಾಡಿದ ಪುಣ್ಯಭೂಮಿಯಾಗಿದೆ. ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಸನ್ನಿಧಿಯು ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರ ಆಧ್ಯಾತ್ಮಿಕ ಅನುಭವಗಳು ಹಾಗೂ ಗಾಢ ಭಕ್ತಿಯೊಂದಿಗೆ ಅವಿನಾಭಾವವಾಗಿ ಬೆಸೆದುಕೊಂಡಿದೆ.",
        p3: "ಐತಿಹಾಸಿಕ ದಾಖಲೆಗಳು, ಸ್ಥಳೀಯ ಧಾರ್ಮಿಕ ಗ್ರಂಥಗಳು ಹಾಗೂ ವಾರ್ಷಿಕ ಜಾತ್ರೆ ಮತ್ತು ರಥೋತ್ಸವದ ಸಂಪ್ರದಾಯಗಳು ಈ ಕ್ಷೇತ್ರದ ಪ್ರಾಚೀನ ಧಾರ್ಮಿಕ ಮಹತ್ವವನ್ನು ದೃಢೀಕರಿಸುತ್ತವೆ.",
        cardEyebrow: "ದಾಖಲಿತ ಪರಂಪರೆ",
        cardHeading: "343+ ವರ್ಷಗಳ ನಿರಂತರ ಆರಾಧನೆ",
        cardP1: "1680 ರಿಂದಲೂ ಐತಿಹಾಸಿಕ ದಾಖಲೆಗಳು ಮತ್ತು ಗೆಜೆಟಿಯರ್‌ಗಳಲ್ಲಿ ಉಲ್ಲೇಖಿತವಾದ ಕ್ಷೇತ್ರ.",
        cardP2: "1961ರ ಭಾರತ ಜನಗಣತಿಯ ಅಧಿಕೃತ ದಾಖಲೆಗಳಲ್ಲಿ ಮಾನ್ಯತೆ ಪಡೆದ ಜಾತ್ರಾ ಮಹೋತ್ಸವ.",
        cardP3: "ಕರ್ನಾಟಕ, ಮಹಾರಾಷ್ಟ್ರ, ಆಂಧ್ರಪ್ರದೇಶ ಮತ್ತು ತೆಲಂಗಾಣದ ಭಕ್ತರ ಆರಾಧ್ಯ ದೈವ.",
      },
      section2: {
        eyebrow: "|| ಸಂತರ ತಪೋಭೂಮಿ ||",
        heading: "2. ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರು",
        subtitle: "ಸಿದ್ಧ ಪರ್ವತದ ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯನ್ನು ಬೆಳಗಿಸಿದ ಮಹಾನ್ ತಪಸ್ವಿಗಳು",
        p1: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಠದ ಆಧ್ಯಾತ್ಮಿಕ ಇತಿಹಾಸವು ಪರಮ ಪೂಜ್ಯ ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರೊಂದಿಗೆ ಅವಿಭಾಜ್ಯವಾಗಿ ಕೂಡಿದೆ. ಅವರು ನಡೆಸಿದ ತಪಸ್ಸು ಮತ್ತು ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು ದೇವಾಲಯದ ಪರಂಪರೆಯ ಪ್ರಮುಖ ಭಾಗವಾಗಿ ಇಂದಿಗೂ ನೆನೆಯಲ್ಪಡುತ್ತವೆ.",
        p2: "ಸಾಂಪ್ರದಾಯಿಕ ಇತಿಹಾಸದ ಪ್ರಕಾರ, ಶ್ರೀ ಚಿದಾನಂದ ಅವಧೂತರು ಜಗನ್ಮಾತೆಯ ಪರಮ ಭಕ್ತರಾಗಿದ್ದು, ತಪಸ್ಸಿನ ಮೂಲಕ ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರ ಪಡೆದರು. ಅವರ ಆಧ್ಯಾತ್ಮಿಕ ಸಾಧನೆಯು ಸಿದ್ಧ ಪರ್ವತದ ಪವಿತ್ರ ಗವಿಗಳಲ್ಲಿ ಹಾಗೂ ಪ್ರಶಾಂತ ವಾತಾವರಣದಲ್ಲಿ ನೆರವೇರಿತು.",
        p3: "ಅವರ ಅಚಲ ಭಕ್ತಿಯಿಂದ ಪ್ರಸನ್ನಳಾದ ಶ್ರೀ ಅಂಬಾದೇವಿಯು ಪ್ರತ್ಯಕ್ಷಳಾಗಿ ಅವರಿಗೆ ದಿವ್ಯ ದರ್ಶನ ನೀಡಿ ಅನುಗ್ರಹಿಸಿದಳು ಎಂಬುದು ಪರಂಪರಾಗತ ನಂಬಿಕೆಯಾಗಿದೆ.",
        prayerEyebrow: "ಸಂತರ ಲೋಕಕಲ್ಯಾಣ ಪ್ರಾರ್ಥನೆ",
        prayerText: "“ತಮ್ಮ ಭಕ್ತಿಯಿಂದ ಪ್ರಸನ್ನಳಾದ ಜಗನ್ಮಾತೆಯು ಸಿದ್ಧ ಪರ್ವತದಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ನೆಲೆಸಿ, ಜಾತಿ-ಮತ-ಭೇದವಿಲ್ಲದೆ ಭಕ್ತಿಯಿಂದ ಬರುವ ಪ್ರತಿಯೊಬ್ಬ ಭಕ್ತರನ್ನು ರಕ್ಷಿಸಿ ಅನುಗ್ರಹಿಸಬೇಕೆಂದು ಪ್ರಾರ್ಥಿಸಿದರು.”",
        legacyEyebrow: "ಅವಧೂತರ ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆ",
        legacyText: "ಅಂಬಾಮಠದೊಂದಿಗೆ ಅವರ ನಂಟು ಇಂದಿಗೂ ಕ್ಷೇತ್ರದ ಆತ್ಮವಾಗಿದ್ದು, ಸಕಲ ಜೀವರಾಶಿಗಳಿಗೂ ದೈವಿಕ ಕೃಪೆಯ ಬಾಗಿಲು ಸದಾ ತೆರೆದಿರುವಂತೆ ಮಾಡಿದೆ.",
      },
      section3: {
        eyebrow: "|| ಪವಿತ್ರ ಬೆಟ್ಟ ||",
        heading: "3. ಸಿದ್ಧ ಪರ್ವತ – ಪವಿತ್ರ ಗಿರಿ",
        subtitle: "ಧ್ಯಾನ, ತಪಸ್ಸು ಮತ್ತು ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರದ ಪುಣ್ಯಭೂಮಿ",
        card1Title: "ಸಿದ್ಧರ ಸನ್ನಿಧಿ",
        card1Desc: "ಪ್ರಾಚೀನ ಕಾಲದಿಂದಲೂ ಸಿದ್ಧ ಪುರುಷರು, ಋಷಿಗಳು ಮತ್ತು ಸಾಧುಗಳು ತಪಸ್ಸನ್ನಾಚರಿಸಿದ ಪವಿತ್ರ ಬೆಟ್ಟ.",
        card2Title: "ನೈಸರ್ಗಿಕ ಗವಿಗಳು",
        card2Desc: "ಆಧ್ಯಾತ್ಮಿಕ ಸಾಧಕರು ತಪಸ್ಸು ಹಾಗೂ ಗಹನ ಧ್ಯಾನ ಕೈಗೊಳ್ಳಲು ಅನುಕೂಲಕರವಾದ ಪ್ರಾಕೃತಿಕ ಗುಹೆಗಳು.",
        card3Title: "ಅಪರೂಪದ ಔಷಧೀಯ ಸಸ್ಯಗಳು",
        card3Desc: "ಗಿರಿಪ್ರದೇಶದಲ್ಲಿ ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದಿರುವ ನೂರಾರು ದಿವ್ಯ ಔಷಧೀಯ ಗಿಡಮೂಲಿಕೆಗಳ ಪರಿಸರ.",
        card4Title: "ಧನಾತ್ಮಕ ದೈವಿಕ ಶಕ್ತಿ",
        card4Desc: "ಕ್ಷೇತ್ರಕ್ಕೆ ಕಾಲಿಟ್ಟ ತಕ್ಷಣ ಮನಸ್ಸಿಗೆ ನೆಮ್ಮದಿ, ಶಾಂತಿ ಮತ್ತು ಆನಂದವನ್ನು ನೀಡುವ ದಿವ್ಯ ತರಂಗಗಳು.",
      },
      section4: {
        eyebrow: "|| ಜಗದಂಬಾ ಸ್ವರೂಪ ||",
        heading: "4. ಶ್ರೀ ಅಂಬಾದೇವಿ – ಜಗನ್ಮಾತೆ",
        subtitle: "ದಿವ್ಯ ಮಾತೃಶಕ್ತಿ, ಕರುಣೆ ಮತ್ತು ರಕ್ಷಣೆಯ ಪರಮ ಸಾಕ್ಷಾತ್ಕಾರ",
        p1: "ಶ್ರೀ ಅಂಬಾದೇವಿಯನ್ನು ವಿಶ್ವಮಾತೆ, ಜಗದಂಬಾ ಸ್ವರೂಪಿಣಿ ಎಂದು ಪರಮ ಭಕ್ತಿಯಿಂದ ಆರಾಧಿಸಲಾಗುತ್ತದೆ. ಧರ್ಮವನ್ನು ರಕ್ಷಿಸುವ, ಸಂಕಷ್ಟಗಳನ್ನು ಪರಿಹರಿಸುವ ಮತ್ತು ಭಕ್ತರಿಗೆ ಶಾಂತಿ-ಸಮೃದ್ಧಿ ಕರುಣಿಸುವ ಸಾಕ್ಷಾತ್ ಪರಾಶಕ್ತಿ ಇವಳು.",
        p2: "ಪವಿತ್ರ ಶ್ರೀ ಬಗಳಾ ಚಕ್ರ ಶಕ್ತಿಪೀಠವು ಅಂಬಾಮಠದ ಆಧ್ಯಾತ್ಮಿಕ ಗುರುತಾಗಿದ್ದು, ತಾಂತ್ರಿಕ ಹಾಗೂ ವೈದಿಕ ಪೂಜಾ ವಿಧಾನಗಳ ಸಮನ್ವಯವಾಗಿದೆ.",
        bulletsTitle: "ಭಕ್ತರು ಬೇಡುವ ದಿವ್ಯ ಅನುಗ್ರಹಗಳು:",
        b1: "ದೈವಿಕ ರಕ್ಷಣೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಕೃಪಾಶೀರ್ವಾದ.",
        b2: "ಕುಟುಂಬದಲ್ಲಿ ಶಾಂತಿ, ಸೌಹಾರ್ದತೆ ಮತ್ತು ಶಾಶ್ವತ ಸಮೃದ್ಧಿ.",
        b3: "ಕಷ್ಟದ ಸಮಯದಲ್ಲಿ ಆಂತರಿಕ ಶಕ್ತಿ, ಧೈರ್ಯ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸ.",
        b4: "ದೃಷ್ಟಿದೋಷ ಹಾಗೂ ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ನಿವಾರಣೆ.",
        b5: "ನಿರಂತರ ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಗತಿ, ಮನಃಶಾಂತಿ ಮತ್ತು ಆರೋಗ್ಯ ಭಾಗ್ಯ.",
        quote: "ದೇವಾಲಯದ ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳು, ಶುದ್ಧ ಭಕ್ತಿಯಿಂದ ಶರಣಾಗುವ ಭಕ್ತರಿಗೆ ಜಗನ್ಮಾತೆಯು ಸದಾ ರಕ್ಷಕಿಯಾಗಿ ನಿಲ್ಲುತ್ತಾಳೆ ಎಂಬ ನಂಬಿಕೆಯನ್ನು ಸಾರುತ್ತವೆ.",
        photoCaption: "ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿ • ಶ್ರೀ ಬಗಳಾ ಚಕ್ರ ಶಕ್ತಿಪೀಠ",
      },
      section5: {
        eyebrow: "|| ಮೌಖಿಕ ಮತ್ತು ವೈದಿಕ ಪರಂಪರೆ ||",
        heading: "5. ದೇವಿ ಪುರಾಣ ಮತ್ತು ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳು",
        subtitle: "ಶಾಶ್ವತ ಪೌರಾಣಿಕ ಕಥೆಗಳು, ವೈದಿಕ ಸ್ತೋತ್ರಗಳು ಮತ್ತು ದೇವಿಯ ದಿವ್ಯ ಲೀಲೆಗಳು",
        p1: "ಅಂಬಾಮಠದೊಂದಿಗೆ ಬೆಸೆದುಕೊಂಡಿರುವ ಪವಿತ್ರ ದೇವಿ ಪುರಾಣವು ತಲೆಮಾರುಗಳಿಂದ ಧಾರ್ಮಿಕ ಸಂಪ್ರದಾಯಗಳು ಹಾಗೂ ಭಕ್ತರ ಶ್ರದ್ಧೆಯ ಮೂಲಕ ಜೀವಂತವಾಗಿ ರಕ್ಷಿಸಲ್ಪಟ್ಟಿದೆ.",
        p2: "ಇದು ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಲೀಲೆಗಳು, ಪವಾಡಗಳು, ದೈವಿಕ ಮಹಿಮೆಗಳು ಹಾಗೂ ಆಕೆಯ ಅಪಾರ ಕರುಣೆಯನ್ನು ವಿವರಿಸುತ್ತದೆ. ಈ ಪವಿತ್ರ ಕಥೆಗಳು ಕ್ಷೇತ್ರದ ಭಕ್ತಿ ಸಂಸ್ಕೃತಿಯ ಪ್ರಮುಖ ಅಂಗವಾಗಿದ್ದು, ಇಂದಿಗೂ ಭಕ್ತರ ಮನದಲ್ಲಿ ದೇವಿಯ ಮೇಲಿನ ಭಕ್ತಿಯನ್ನು ಜೀವಂತವಾಗಿರಿಸಿವೆ.",
        p3: "ನಿತ್ಯ ಪೂಜೆಗಳಲ್ಲಿ ಹಾಗೂ ಪ್ರಮುಖ ಉತ್ಸವಗಳಲ್ಲಿ ದೇವಿಯನ್ನು ಸ್ತುತಿಸುವ ವೈದಿಕ ಮಂತ್ರಗಳು, ಸ್ತೋತ್ರಗಳು ಹಾಗೂ ಭಕ್ತಿಗೀತೆಗಳು ಕ್ಷೇತ್ರದ ಧಾರ್ಮಿಕ ವೈಭವವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ.",
      },
      section6: {
        eyebrow: "|| ನಮ್ಮ ಸಂಕಲ್ಪ ಮತ್ತು ದೂರದೃಷ್ಟಿ ||",
        heading: "6. ನಮ್ಮ ದೃಷ್ಟಿಕೋನ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆ",
        subtitle: "ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಯಾತ್ರಾರ್ಥಿಗಳ ದೈವಿಕ ಅನುಭವ ವೃದ್ಧಿ",
        visionStatement:
          "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಠದ ಅಭಿವೃದ್ಧಿಯು ಕೇವಲ ಕಟ್ಟಡ ನಿರ್ಮಾಣಕ್ಕೆ ಸೀಮಿತವಾಗಿಲ್ಲ. ಇದು ಮುಂದಿನ ಪೀಳಿಗೆಗಾಗಿ ಅಮೂಲ್ಯವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸುವ ಹಾಗೂ ಸಿದ್ಧ ಪರ್ವತವನ್ನು ಭಾರತದ ಪವಿತ್ರ ಯಾತ್ರಾ ನಕ್ಷೆಯಲ್ಲಿ ಪ್ರತಿಷ್ಠಾಪಿಸುವ ಸಂಕಲ್ಪವಾಗಿದೆ.",
        pillars: [
          {
            title: "ಪ್ರಮುಖ ತೀರ್ಥಕ್ಷೇತ್ರ",
            desc: "ಭಾರತದಾದ್ಯಂತ ಭಕ್ತರನ್ನು ಆಕರ್ಷಿಸುವ ಪ್ರಸಿದ್ಧ ಶಕ್ತಿಪೀಠ ಕೇಂದ್ರವನ್ನಾಗಿ ರೂಪಿಸುವುದು.",
          },
          {
            title: "ಪರಂಪರೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ರಕ್ಷಣೆ",
            desc: "343+ ವರ್ಷಗಳ ಇತಿಹಾಸ, ಅವಧೂತರ ಸ್ಮೃತಿ ಮತ್ತು ಪುರಾತನ ಸಂಪ್ರದಾಯಗಳ ಜತನ.",
          },
          {
            title: "ಯಾತ್ರಾರ್ಥಿ ಸೌಲಭ್ಯಗಳು",
            desc: "ದೂರದ ಊರುಗಳಿಂದ ಬರುವ ಭಕ್ತರಿಗೆ ವಸತಿ, ನಿತ್ಯ ಅನ್ನದಾಸೋಹ ಮತ್ತು ಸಕಲ ಮೂಲಸೌಕರ್ಯಗಳು.",
          },
          {
            title: "ವೈದಿಕ ಪೂಜಾ ಸಂಪ್ರದಾಯ",
            desc: "ಶಾಸ್ತ್ರೋಕ್ತ ನಿತ್ಯ ಪೂಜೆಗಳು, ಶ್ರೀ ಬಗಳಾಮುಖಿ ತಂತ್ರ ಹಾಗೂ ವೇದ ಘೋಷಗಳ ಸಂರಕ್ಷಣೆ.",
          },
          {
            title: "ಪರಿಸರ ಜಾಗೃತಿ ಮತ್ತು ಗಿರಿಧಾಮ",
            desc: "ಸಿದ್ಧ ಪರ್ವತದ ಪ್ರಾಕೃತಿಕ ಸೌಂದರ್ಯ, ಗವಿಗಳು ಮತ್ತು ಔಷಧೀಯ ಸಸ್ಯಗಳ ಪೋಷಣೆ.",
          },
          {
            title: "ಧಾರ್ಮಿಕ ಪ್ರವಾಸೋದ್ಯಮ",
            desc: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಪ್ರವಾಸೋದ್ಯಮ ನಕ್ಷೆಯಲ್ಲಿ ಅಂಬಾಮಠವನ್ನು ಪ್ರಮುಖ ತಾಣವನ್ನಾಗಿ ಬೆಳೆಸುವುದು.",
          },
        ],
      },
      section7: {
        eyebrow: "|| ನಮ್ಮ ಸಂಕಲ್ಪ ಮತ್ತು ದೂರದೃಷ್ಟಿ ||",
        heading: "6. ನಮ್ಮ ದೃಷ್ಟಿಕೋನ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆ",
        subtitle: "ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಯಾತ್ರಾರ್ಥಿಗಳ ದೈವಿಕ ಅನುಭವ ವೃದ್ಧಿ",
        visionStatement:
          "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಠದ ಅಭಿವೃದ್ಧಿಯು ಕೇವಲ ಕಟ್ಟಡ ನಿರ್ಮಾಣಕ್ಕೆ ಸೀಮಿತವಾಗಿಲ್ಲ. ಇದು ಮುಂದಿನ ಪೀಳಿಗೆಗಾಗಿ ಅಮೂಲ್ಯವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸುವ ಹಾಗೂ ಸಿದ್ಧ ಪರ್ವತವನ್ನು ಭಾರತದ ಪವಿತ್ರ ಯಾತ್ರಾ ನಕ್ಷೆಯಲ್ಲಿ ಪ್ರತಿಷ್ಠಾಪಿಸುವ ಸಂಕಲ್ಪವಾಗಿದೆ.",
        pillars: [
          {
            title: "ಪ್ರಮುಖ ತೀರ್ಥಕ್ಷೇತ್ರ",
            desc: "ಭಾರತದಾದ್ಯಂತ ಭಕ್ತರನ್ನು ಆಕರ್ಷಿಸುವ ಪ್ರಸಿದ್ಧ ಶಕ್ತಿಪೀಠ ಕೇಂದ್ರವನ್ನಾಗಿ ರೂಪಿಸುವುದು.",
          },
          {
            title: "ಪರಂಪರೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ರಕ್ಷಣೆ",
            desc: "343+ ವರ್ಷಗಳ ಇತಿಹಾಸ, ಅವಧೂತರ ಸ್ಮೃತಿ ಮತ್ತು ಪುರಾತನ ಸಂಪ್ರದಾಯಗಳ ಜತನ.",
          },
          {
            title: "ಯಾತ್ರಾರ್ಥಿ ಸೌಲಭ್ಯಗಳು",
            desc: "ದೂರದ ಊರುಗಳಿಂದ ಬರುವ ಭಕ್ತರಿಗೆ ವಸತಿ, ನಿತ್ಯ ಅನ್ನದಾಸೋಹ ಮತ್ತು ಸಕಲ ಮೂಲಸೌಕರ್ಯಗಳು.",
          },
          {
            title: "ವೈದಿಕ ಪೂಜಾ ಸಂಪ್ರದಾಯ",
            desc: "ಶಾಸ್ತ್ರೋಕ್ತ ನಿತ್ಯ ಪೂಜೆಗಳು, ಶ್ರೀ ಬಗಳಾಮುಖಿ ತಂತ್ರ ಹಾಗೂ ವೇದ ಘೋಷಗಳ ಸಂರಕ್ಷಣೆ.",
          },
          {
            title: "ಪರಿಸರ ಜಾಗೃತಿ ಮತ್ತು ಗಿರಿಧಾಮ",
            desc: "ಸಿದ್ಧ ಪರ್ವತದ ಪ್ರಾಕೃತಿಕ ಸೌಂದರ್ಯ, ಗವಿಗಳು ಮತ್ತು ಔಷಧೀಯ ಸಸ್ಯಗಳ ಪೋಷಣೆ.",
          },
          {
            title: "ಧಾರ್ಮಿಕ ಪ್ರವಾಸೋದ್ಯಮ",
            desc: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಪ್ರವಾಸೋದ್ಯಮ ನಕ್ಷೆಯಲ್ಲಿ ಅಂಬಾಮಠವನ್ನು ಪ್ರಮುಖ ತಾಣವನ್ನಾಗಿ ಬೆಳೆಸುವುದು.",
          },
        ],
      },
      section8: {
        eyebrow: "|| ನಮ್ಮ ಶಾಶ್ವತ ನಂಬಿಕೆ ||",
        heading: "ನಂಬಿಕೆ, ಭಕ್ತಿ ಮತ್ತು ದೈವಿಕ ಕೃಪೆಯ ಜೀವಂತ ಪರಂಪರೆ",
        p1: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠವು ಕೇವಲ ಪೂಜಾ ಸ್ಥಳವಲ್ಲ. ಇದು ಭಕ್ತಿ, ತಪಸ್ಸು ಮತ್ತು ಜಗನ್ಮಾತೆಯ ದಿವ್ಯ ಆಶೀರ್ವಾದದಿಂದ ರೂಪಿತವಾದ ಪವಿತ್ರ ಪರಂಪರೆ.",
        quote: "“ಶ್ರೀ ಅಂಬಾಮಾತೆಯ ದಿವ್ಯ ಕೃಪೆಯು ಎಲ್ಲರಿಗೂ ಶಾಂತಿ, ಸಮೃದ್ಧಿ, ಸಕಲ ಸನ್ಮಂಗಳ ಮತ್ತು ಸಂತೋಷವನ್ನು ಕರುಣಿಸಲಿ.”",
        mantra: "॥ ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಿಗೆ ಜಯವಾಗಲಿ ॥",
        btnSevas: "ದೇವಾಲಯ ಸೇವೆಗಳನ್ನು ನೋಡಿ",
        btnTimings: "ದರ್ಶನ ಸಮಯ ವೀಕ್ಷಿಸಿ",
      },
    },
    sevasPage: {
      banner: {
        eyebrow: "|| ಪವಿತ್ರ ಸೇವೆಗಳು ||",
        title: "ಪೂಜೆ ಮತ್ತು ದೇವಾಲಯ ಸೇವೆಗಳು",
        subtitle: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠದಲ್ಲಿ ನಡೆಯುವ ಪವಿತ್ರ ಸೇವೆಗಳಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಿ",
        chip1: "ದೈನಂದಿನ ಮತ್ತು ವಿಶೇಷ ಸೇವೆಗಳು",
        chip2: "ವೈದಿಕ ಸಂಕಲ್ಪ",
        chip3: "ಗರ್ಭಗುಡಿ ದರ್ಶನ",
      },
      tabs: {
        all: "ಎಲ್ಲಾ ಸೇವೆಗಳು",
        archana: "ಅರ್ಚನೆ ಮತ್ತು ನಿತ್ಯ ಸೇವೆ",
        abhishekam: "ಅಭಿಷೇಕ ಸೇವೆಗಳು",
        special: "ವಿಶೇಷ ಮತ್ತು ರಥೋತ್ಸವ",
      },
      ctaBook: "ಸೇವೆ ಕಾಯ್ದಿರಿಸಿ",
      offeringText: "ಕಾಣಿಕೆ ಸಮರ್ಪಣೆ",
    },
    timingsPage: {
      banner: {
        breadcrumbHome: "ಮುಖಪುಟ",
        breadcrumbCurrent: "ದರ್ಶನ ಮತ್ತು ಸಮಯ",
        mantra: "|| ॐ ಶ್ರೀ ಅಂಬಾದೇವ್ಯೈ ನಮಃ ||",
        eyebrow: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠ",
        title: "ದರ್ಶನ ಮತ್ತು ದೈನಂದಿನ ಪೂಜಾ ಸಮಯ",
        subtitle: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪೆಯನ್ನು ಅನುಭವಿಸಿ",
        description:
          "ಪವಿತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಕ್ಷೇತ್ರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಸನ್ನಿಧಿಗೆ ಭಕ್ತಾದಿಗಳನ್ನು ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನವು ಆದರದಿಂದ ಸ್ವಾಗತಿಸುತ್ತದೆ. ದೇವಸ್ಥಾನದ ಸಂಪ್ರದಾಯಬದ್ಧ ಆಚರಣೆಗಳಂತೆ ದೈನಂದಿನ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು ನೆರವೇರುತ್ತವೆ.",
        chip1: "ದೈನಂದಿನ ದರ್ಶನ: 6:00 AM – 8:30 PM",
        chip2: "7 ಪವಿತ್ರ ನಿತ್ಯ ಪೂಜೆಗಳು",
        chip3: "ಶಾಸ್ತ್ರೋಕ್ತ ಆಗಮ ಪೂಜೆ",
        chip4: "ಭಕ್ತರ ಪ್ರದಕ್ಷಿಣೆ",
      },
      intro: {
        eyebrow: "|| ದಿವ್ಯ ಗರ್ಭಗುಡಿ ದರ್ಶನ ||",
        heading: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪೆಯನ್ನು ಅನುಭವಿಸಿ",
        subtitle: "ದಿವ್ಯ ಶಕ್ತಿ, ನಂಬಿಕೆ ಮತ್ತು ಚಿರಂತನ ಭಕ್ತಿ ಪರಂಪರೆಯ ಪವಿತ್ರ ತಾಣ",
        p1: "ಪವಿತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಕ್ಷೇತ್ರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಸನ್ನಿಧಿಗೆ ಭಕ್ತಾದಿಗಳನ್ನು ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನವು ಆದರದಿಂದ ಸ್ವಾಗತಿಸುತ್ತದೆ.",
        p2: "ದೇವಸ್ಥಾನದ ಸಾಂಪ್ರದಾಯಿಕ ಪದ್ಧತಿಗಳ ಪ್ರಕಾರ ದೈನಂದಿನ ಪೂಜೆ ಮತ್ತು ಧಾರ್ಮಿಕ ವಿಧಿವಿಧಾನಗಳನ್ನು ನೆರವೇರಿಸಲಾಗುತ್ತದೆ. ಭಕ್ತರು ಪವಿತ್ರ ಸಮಾರಂಭಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ, ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸಿ ಜಗನ್ಮಾತೆಯ ದಿವ್ಯ ಕೃಪಾಶೀರ್ವಾದವನ್ನು ಪಡೆಯಬಹುದು.",
        hoursCardTitle: "ಸಾಮಾನ್ಯ ದರ್ಶನ ಸಮಯಗಳು",
        morningLabel: "ಬೆಳಗಿನ ದರ್ಶನ:",
        morningTime: "6:00 AM – 1:30 PM",
        eveningLabel: "ಸಂಜೆಯ ದರ್ಶನ:",
        eveningTime: "4:00 PM – 8:30 PM",
        note: "ಕರ್ನಾಟಕ ಹಾಗೂ ದೇಶಾದ್ಯಂತ ಬರುವ ಭಕ್ತಾದಿಗಳಿಗಾಗಿ ವರ್ಷದ ಎಲ್ಲಾ ದಿನಗಳಲ್ಲೂ ಗರ್ಭಗುಡಿ ತೆರೆದಿರುತ್ತದೆ.",
      },
      schedule: {
        eyebrow: "|| ವೈದಿಕ ಪೂಜಾ ವೇಳಾಪಟ್ಟಿ ||",
        heading: "ದೈನಂದಿನ ಪೂಜಾ ವೇಳಾಪಟ್ಟಿ",
        subtitle: "ಪವಿತ್ರ ಆಗಮ ಶಾಸ್ತ್ರದ ಪ್ರಕಾರ ನೆರವೇರುವ ಸಾಂಪ್ರದಾಯಿಕ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು",
        items: [
          {
            num: "1",
            title: "ಕಾಕಡ ಆರತಿ – ಮುಂಜಾನೆ ಪೂಜೆ",
            tag: "ಮುಂಜಾನೆಯ ದೀಪಾರಾಧನೆ",
            time: "ಮುಂಜಾನೆ (6:00 AM)",
            description:
              "ದೈನಂದಿನ ಪೂಜೆಯು ಶ್ರೀ ಅಂಬಾದೇವಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಬೆಳಕಿನ ಸಮರ್ಪಣೆಯಾದ ಕಾಕಡ ಆರತಿಯೊಂದಿಗೆ ಆರಂಭವಾಗುತ್ತದೆ. ಈ ಆರತಿಯು ದಿನದ ಧಾರ್ಮಿಕ ಸಮಾರಂಭಗಳ ಶುಭಾರಂಭವನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
          },
          {
            num: "2",
            title: "ರುದ್ರಾಭಿಷೇಕ",
            tag: "ವೈದಿಕ ಮಂತ್ರಪಠಣ",
            time: "ಅಭಿಷೇಕ ಪೂಜೆ (7:00 AM – 9:00 AM)",
            description:
              "ದೈವಿಕ ಆಶೀರ್ವಾದ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಕ್ಷೇಮವನ್ನು ಕೋರಿ ದೇವಾಲಯದ ದೈನಂದಿನ ಧಾರ್ಮಿಕ ಆರಾಧನೆಯ ಭಾಗವಾಗಿ ನೆರವೇರಿಸುವ ಪವಿತ್ರ ಅಭಿಷೇಕ.",
          },
          {
            num: "3",
            title: "ಪಂಚಾಮೃತಾಭಿಷೇಕ",
            tag: "ಪವಿತ್ರ ಸ್ನಾನ ಕೈಂಕರ್ಯ",
            time: "ಅಭಿಷೇಕ ಪೂಜೆ (7:00 AM – 9:00 AM)",
            description:
              "ಶಾಸ್ತ್ರೋಕ್ತ ಪೂಜಾ ಸಂಪ್ರದಾಯದಂತೆ ಹಾಲು, ಮೊಸರು, ಜೇನುತುಪ್ಪ, ತುಪ್ಪ, ಸಕ್ಕರೆ ಮೊದಲಾದ ಐದು ಪವಿತ್ರ ದ್ರವ್ಯಗಳಿಂದ ನೆರವೇರುವ ಸಾಂಪ್ರದಾಯಿಕ ಅಭಿಷೇಕ.",
          },
          {
            num: "4",
            title: "ಸಹಸ್ರನಾಮ ಕುಂಕುಮಾರ್ಚನೆ",
            tag: "ದೇವಿ ಸಹಸ್ರನಾಮ",
            time: "ಬೆಳಗಿನ ವಿಧಿ (8:00 AM)",
            description:
              "ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಪವಿತ್ರ ನಾಮಗಳನ್ನು ಪಠಿಸುತ್ತಾ ಭಕ್ತಿಪೂರ್ವಕವಾಗಿ ಕುಂಕುಮ ಸಮರ್ಪಿಸಿ ನೆರವೇರಿಸುವ ದಿವ್ಯ ಪೂಜೆ.",
          },
          {
            num: "5",
            title: "ಶ್ರೀ ದೇವಿ ಪೂಜೆ ಮತ್ತು ಅಲಂಕಾರ",
            tag: "ದಿವ್ಯ ಅಲಂಕಾರ",
            time: "9:00 AM ರಿಂದ 10:00 AM ವರೆಗೆ",
            description:
              "ಶ್ರೀ ಅಂಬಾದೇವಿಗೆ ವಿಶೇಷ ಪೂಜೆ ನೆರವೇರಿಸಿ, ಸಾಂಪ್ರದಾಯಿಕ ರೇಷ್ಮೆ ಸೀರೆಗಳು ಮತ್ತು ಭವ್ಯ ಆಭರಣಗಳಿಂದ ದೇವಿಯನ್ನು ನಯನಮನೋಹರವಾಗಿ ಅಲಂಕರಿಸಲಾಗುತ್ತದೆ.",
          },
          {
            num: "6",
            title: "ಭಕ್ತರ ದರ್ಶನ, ಪೂಜೆ ಮತ್ತು ಅರ್ಚನೆ",
            tag: "ಸಾರ್ವಜನಿಕ ದರ್ಶನ",
            time: "10:00 AM ರಿಂದ 1:30 PM & 4:00 PM ರಿಂದ 8:00 PM",
            description:
              "ದೇವಿಯ ಅಲಂಕಾರದ ನಂತರ, ಭಕ್ತರಿಗೆ ದರ್ಶನ ಪಡೆಯಲು, ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸಲು ಹಾಗೂ ಲಭ್ಯವಿರುವ ಪೂಜೆ ಮತ್ತು ಅರ್ಚನಾ ಸೇವೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸಲು ಅವಕಾಶ ನೀಡಲಾಗುತ್ತದೆ.",
          },
          {
            num: "7",
            title: "ಮಹಾ ಮಂಗಳಾರತಿ",
            tag: "ಸಂಜೆಯ ಮಹಾಪೂಜೆ",
            time: "8:00 PM ರಿಂದ 8:30 PM",
            description:
              "ದಿನದ ನಿಯಮಿತ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು ಜಗನ್ಮಾತೆಗೆ ಸಲ್ಲಿಸುವ ಪವಿತ್ರ ಅಂತಿಮ ದೀಪಾರಾಧನೆಯಾದ ಮಹಾ ಮಂಗಳಾರತಿಯೊಂದಿಗೆ ಸಂಪನ್ನಗೊಳ್ಳುತ್ತವೆ.",
          },
        ],
      },
      info: {
        eyebrow: "|| ಭಕ್ತರಿಗೆ ಮಾಹಿತಿ ||",
        heading: "ಭಕ್ತರಿಗೆ ಪ್ರಮುಖ ಮಾಹಿತಿ",
        subtitle: "ಕ್ಷೇತ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡುವ ಭಕ್ತಾದಿಗಳು ಪಾಲಿಸಬೇಕಾದ ಪವಿತ್ರ ನಿಯಮಗಳು ಮತ್ತು ಮಾಹಿತಿ",
        points: [
          "ಅನುಮತಿಸಲಾದ ದೈನಂದಿನ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳಲ್ಲಿ ಭಕ್ತರು ಭಾಗವಹಿಸಲು ಸದಾ ಸ್ವಾಗತವಿದೆ.",
          "ದೇವಾಲಯದ ಸಂಪ್ರದಾಯಗಳ ಪ್ರಕಾರ ವಿಶೇಷ ಸೇವೆಗಳು ಮತ್ತು ಅರ್ಚನಾ ಸೇವೆಗಳು ಲಭ್ಯವಿರುತ್ತವೆ.",
          "ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ಮತ್ತು ವಿಶೇಷ ಸಂದರ್ಭಗಳಲ್ಲಿ ಪೂಜಾ ಸಮಯಗಳಲ್ಲಿ ಬದಲಾವಣೆಗಳಿರಬಹುದು.",
          "ಇತ್ತೀಚಿನ ದರ್ಶನ ಸಮಯಗಳು ಮತ್ತು ವಿಶೇಷ ಪೂಜಾ ವ್ಯವಸ್ಥೆಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        ],
        adminTitle: "ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಕಚೇರಿ ಮತ್ತು ಸಹಾಯವಾಣಿ",
        adminDesc:
          "ಮುಂಗಡ ಸೇವಾ ಕಾಯ್ದಿರಿಸುವಿಕೆ, ವಸತಿ ವ್ಯವಸ್ಥೆ ಅಥವಾ ವಿಶೇಷ ಉತ್ಸವಗಳ ಮಾಹಿತಿಗಾಗಿ ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        adminPhone: "+91 94486 32541 / +91 98451 78923",
        adminLocation: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ, ಸೋಮಲಾಪುರ, ಸಿಂಧನೂರು ತಾಲೂಕು, ರಾಯಚೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",
        contactBtn: "ಆಡಳಿತ ಕಚೇರಿ ಸಂಪರ್ಕಿಸಿ",
      },
      benediction: {
        quote: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪಾಶೀರ್ವಾದವು ಪ್ರತಿಯೊಬ್ಬ ಭಕ್ತನಿಗೂ ಶಾಂತಿ, ಸಮೃದ್ಧಿ ಮತ್ತು ಸಂತೋಷವನ್ನು ತರಲಿ.",
        mantra: "॥ ಶ್ರೀ ಅಂಬಾದೇವಿ ಪ್ರಸನ್ನ ॥",
        bookSevaBtn: "ಆನ್‌ಲೈನ್ ಸೇವೆ ಕಾಯ್ದಿರಿಸಿ",
        contactBtn: "ಸಂಪರ್ಕ ಮತ್ತು ದೇಣಿಗೆ",
      },
    },
    festivalsPage: {
      hero: {
        mantra: "|| ॐ ಶ್ರೀ ಅಂಬಾದೇವ್ಯೈ ನಮಃ ||",
        eyebrow: "|| ಧಾರ್ಮಿಕ ಉತ್ಸವಗಳು ||",
        heading: "ಉತ್ಸವಗಳು ಮತ್ತು ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು",
        subtitle: "ಸಿದ್ಧ ಪರ್ವತದ ಪವಿತ್ರ ಧಾರ್ಮಿಕ ಮಹೋತ್ಸವಗಳು",
        intro:
          "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶಕ್ತಿಪೀಠ ಅಂಬಾಮಠವು ಭಕ್ತಿ, ಸಾಂಪ್ರದಾಯಿಕ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಮಹೋತ್ಸವಗಳ ಪುಣ್ಯ ಕ್ಷೇತ್ರವಾಗಿದೆ. ವರ್ಷವಿಡೀ ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದಲ್ಲಿ ವಿವಿಧ ಉತ್ಸವಗಳು ಹಾಗೂ ವಿಶೇಷ ಪೂಜೆಗಳು ವೈಭವದಿಂದ ನೆರವೇರಲಿದ್ದು, ಕರ್ನಾಟಕ ಮತ್ತು ನೆರೆಯ ರಾಜ್ಯಗಳಿಂದ ಸಾವಿರಾರು ಭಕ್ತರನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತವೆ.",
      },
      events: [
        {
          tag: "1961 ಜನಗಣತಿಯಲ್ಲಿ ದಾಖಲಿತ",
          title: "ಶ್ರೀ ಅಂಬಾದೇವಿ ಜಾತ್ರಾ ಮಹೋತ್ಸವ",
          p1: "ವಾರ್ಷಿಕ ಶ್ರೀ ಅಂಬಾದೇವಿ ಜಾತ್ರಾ ಮಹೋತ್ಸವವು ದೇವಾಲಯದ ಅತ್ಯಂತ ಪ್ರಮುಖ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಈ ಜಾತ್ರೆಯು ವಿಶೇಷ ಪೂಜೆಗಳು, ಹರಕೆ ಸಮರ್ಪಣೆ, ಧಾರ್ಮಿಕ ಸಮಾವೇಶಗಳು ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ರಥೋತ್ಸವಕ್ಕಾಗಿ ಅಪಾರ ಭಕ್ತ ಸಮೂಹವನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತದೆ.",
          p2: "1961ರ ಭಾರತ ಜನಗಣತಿಯ ಐತಿಹಾಸಿಕ ದಾಖಲೆಗಳು ಸೋಮಲಾಪುರದ ವಾರ್ಷಿಕ ಜಾತ್ರೆಯನ್ನು ದಾಖಲಿಸಿದ್ದು, ಸಾಂಪ್ರದಾಯಿಕ ರಥೋತ್ಸವದಲ್ಲಿ ಕರ್ನಾಟಕ, ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ನೆರೆಯ ರಾಜ್ಯಗಳಿಂದ 20,000 ದಿಂದ 30,000 ಕ್ಕೂ ಹೆಚ್ಚು ಭಕ್ತರು ಭಾಗವಹಿಸುವುದನ್ನು ಉಲ್ಲೇಖಿಸಿವೆ.",
          image: "/festival-hero-desktop.png",
          alt: "ಶ್ರೀ ಅಂಬಾದೇವಿ ಜಾತ್ರಾ ಮಹೋತ್ಸವ",
        },
        {
          tag: "ವಾರ್ಷಿಕ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ",
          title: "ಶ್ರೀ ಅಂಬಾದೇವಿ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ (ಬೆಳ್ಳಿ ರಥೋತ್ಸವ)",
          p1: "ಬೆಳ್ಳಿ ರಥೋತ್ಸವವು ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಅತ್ಯಂತ ಮಹತ್ವದ ಭಕ್ತಿ ಆಚರಣೆಯಾಗಿದೆ. ಈ ಪುಣ್ಯ ಸಂದರ್ಭದಲ್ಲಿ, ದೇವಿಯನ್ನು ಸುಂದರವಾಗಿ ಅಲಂಕೃತಗೊಂಡ ಬೆಳ್ಳಿ ರಥದಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ಧಾರ್ಮಿಕ ಮೆರವಣಿಗೆಯ ಮೂಲಕ ವಿಜೃಂಭಣೆಯಿಂದ ಕೊಂಡೊಯ್ಯಲಾಗುತ್ತದೆ.",
          p2: "ವೇದಘೋಷಗಳ ನಡುವೆ ಹಾಗೂ ಮಂತ್ರೋಚ್ಛಾರಣೆಗಳೊಂದಿಗೆ, ಸೋಮಲಾಪುರದ ಬೀದಿಗಳಲ್ಲಿ ಸಾಗುವ ಪವಿತ್ರ ರಥೋತ್ಸವವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಲು ಮತ್ತು ಜಗನ್ಮಾತೆಯ ಕೃಪೆಗೆ ಪಾತ್ರರಾಗಲು ಸಾವಿರಾರು ಭಕ್ತರು ಸೇರುತ್ತಾರೆ.",
          image: "/sevas/special-poojas-hq.jpg",
          alt: "ಶ್ರೀ ಅಂಬಾದೇವಿ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ",
        },
        {
          tag: "ನವರಾತ್ರಿ ವೈಭವ",
          title: "ಶರನ್ನವರಾತ್ರಿ ಮಹೋತ್ಸವ",
          p1: "ಒಂಬತ್ತು ದಿನಗಳ ಕಾಲ ಚಂಡಿಕಾ ಹೋಮ, ವಿಶೇಷ ಅಲಂಕಾರ ಹಾಗೂ ದೇವಿಯ ಆರಾಧನೆ ಅಪಾರ ಭಕ್ತಿಯಿಂದ ಜರುಗುತ್ತದೆ. ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪಾಶೀರ್ವಾದ ಪಡೆಯಲು ನೂರಾರು ಭಕ್ತಾದಿಗಳು ಆಗಮಿಸುತ್ತಾರೆ.",
          p2: "ಪ್ರತಿ ರಾತ್ರಿಯೂ ದೇವಿಗೆ ವಿಶೇಷ ಸಾಂಪ್ರದಾಯಿಕ ಅಲಂಕಾರಗಳನ್ನು ಮಾಡಲಾಗುತ್ತದೆ. ಭಕ್ತರು ನಿರಂತರ ಕುಂಕುಮಾರ್ಚನೆ, ಶ್ರೀ ಲಲಿತಾ ಸಹಸ್ರನಾಮ ಪಠಣ ಹಾಗೂ ಸಂಜೆ ಧಾರ್ಮಿಕ ಭಜನೆಗಳಲ್ಲಿ ಶ್ರದ್ಧೆಯಿಂದ ಭಾಗವಹಿಸುತ್ತಾರೆ.",
          image: "/sevas/sharannavaratri-devi.jpg",
          alt: "ಶರನ್ನವರಾತ್ರಿ ಮಹೋತ್ಸವ ಶ್ರೀ ಅಂಬಾದೇವಿ ಅಲಂಕಾರ",
        },
        {
          tag: "ಧರ್ಮದ ವಿಜಯ",
          title: "ವಿಜಯದಶಮಿ ಉತ್ಸವ",
          p1: "ನವರಾತ್ರಿ ಆಚರಣೆಗಳ ಮಂಗಳಕರ ಮುಕ್ತಾಯ ಹಾಗೂ ಧರ್ಮದ ವಿಜಯವನ್ನು ಸಾರುವ ಪುಣ್ಯದಿನ. ಈ ಪವಿತ್ರ ದಿನದಂದು ದೇವಿಗೆ ವಿಶೇಷ ಪೂಜೆಗಳು, ಅಲಂಕಾರ ಹಾಗೂ ಮಹಾ ಮಂಗಳಾರತಿ ನೆರವೇರುತ್ತವೆ.",
          p2: "ವಿಜಯದಶಮಿಯಂದು ಸಕಲ ಕಾರ್ಯಗಳಲ್ಲಿ ವಿಜಯ, ರಕ್ಷಣೆ ಮತ್ತು ಶುಭಾರಂಭವನ್ನು ಕೋರಿ ದೂರದೂರುಗಳಿಂದ ಭಕ್ತರು ಆಗಮಿಸಿ ದರ್ಶನ ಪಡೆದು ಪುನೀತರಾಗುತ್ತಾರೆ.",
          image: "/sevas/homam-hq.jpg",
          alt: "ವಿಜಯದಶಮಿ ವಿಶೇಷ ಪೂಜೆ ಮತ್ತು ಹೋಮ",
        },
        {
          tag: "ಪ್ರತಿ ಮಾಸದ ಹುಣ್ಣಿಮೆ",
          title: "ಹುಣ್ಣಿಮೆ ವಿಶೇಷ ಪೂಜೆ",
          p1: "ಪ್ರತಿ ಹುಣ್ಣಿಮೆಯಂದು ದೇವಿಗೆ ವಿಶೇಷ ಪಂಚಾಮೃತ ಅಭಿಷೇಕ, ಕುಂಕುಮಾರ್ಚನೆ ಹಾಗೂ ಸಾಮೂಹಿಕ ಪ್ರಾರ್ಥನೆಗಳು ನೆರವೇರುತ್ತವೆ. ಭಕ್ತರು ಶಾಂತಿ, ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬದ ಸಮೃದ್ಧಿಗಾಗಿ ಈ ಪೂಜೆಯಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುತ್ತಾರೆ.",
          p2: "ಚಂದ್ರನ ಬೆಳಕಿನಲ್ಲಿ ಕಂಗೊಳಿಸುವ ಸಿದ್ಧ ಪರ್ವತ ಗಿರಿಯು ದಿವ್ಯ ಆಧ್ಯಾತ್ಮಿಕ ತರಂಗಗಳಿಂದ ಕೂಡಿರುತ್ತದೆ. ಈ ಸಮಯದಲ್ಲಿ ನಡೆಸುವ ಧ್ಯಾನ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯು ಮಾನಸಿಕ ನೆಮ್ಮದಿಯನ್ನು ಕರುಣಿಸುತ್ತದೆ.",
          image: "/sevas/pournami-moon.jpg",
          alt: "ಹುಣ್ಣಿಮೆ ವಿಶೇಷ ಪೂಜೆ",
        },
        {
          tag: "ಅಮಾವಾಸ್ಯೆ ಪೂಜೆ",
          title: "ಅಮಾವಾಸ್ಯೆ ಧಾರ್ಮಿಕ ಆಚರಣೆ",
          p1: "ಪ್ರತಿ ಅಮಾವಾಸ್ಯೆಯಂದು ವಿಶೇಷ ಪ್ರಾರ್ಥನೆಗಳು ಹಾಗೂ ಆಧ್ಯಾತ್ಮಿಕ ಶುದ್ಧೀಕರಣ ಆಚರಣೆಗಳು ಜರುಗುತ್ತವೆ. ಭಕ್ತರ ಕಷ್ಟಗಳು ಮತ್ತು ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ನಿವಾರಣೆಗಾಗಿ ಶಾಂತಿ ಪೂಜೆಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ.",
          p2: "ಶ್ರೀ ಬಗಳಾ ಚಕ್ರ ಶಕ್ತಿಪೀಠದಲ್ಲಿ ವಿಶೇಷ ರಕ್ಷಣಾ ಸಂಕಲ್ಪಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಿಗಳನ್ನು ನೆರವೇರಿಸಿ, ಭಕ್ತರ ಜೀವನದಲ್ಲಿ ಧೈರ್ಯ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ತುಂಬಲಾಗುತ್ತದೆ.",
          image: "/sevas/abhishekam-hq.jpg",
          alt: "ಅಮಾವಾಸ್ಯೆ ಧಾರ್ಮಿಕ ಆಚರಣೆ ಪವಿತ್ರ ಕುಂಭ",
        },
      ],
      closing: {
        heading: "ಉತ್ಸವಗಳ ಪವಿತ್ರ ಚೇತನ",
        description:
          "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದ ಧಾರ್ಮಿಕ ಉತ್ಸವಗಳು ಕೇವಲ ಸಮಾವೇಶಗಳಲ್ಲ; ಅವು ತಲೆಮಾರುಗಳ ಅಚಲ ನಂಬಿಕೆ, ಭಕ್ತಿ, ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ ಮತ್ತು ಸಮುದಾಯದ ಸಮರ್ಪಣಾ ಭಾವವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತವೆ. ಈ ಪವಿತ್ರ ಆಚರಣೆಗಳ ಮೂಲಕ, ಸಿದ್ಧ ಪರ್ವತದ ಸಂಪ್ರದಾಯಗಳು ಭಕ್ತರಿಗೆ ಸದಾ ಸ್ಫೂರ್ತಿ ನೀಡುತ್ತಾ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಪರಂಪರೆಯನ್ನು ಶಾಶ್ವತವಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತವೆ.",
        blessing: "ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾಮಾತೆಯು ಸಕಲ ಭಕ್ತಾದಿಗಳಿಗೂ ಶಾಂತಿ, ಸಮೃದ್ಧಿ ಮತ್ತು ಸುಖ-ಸಂತೋಷವನ್ನು ಕರುಣಿಸಲಿ.",
        mantra: "॥ ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಿಗೆ ಜಯವಾಗಲಿ ॥",
      },
    },
    galleryPage: {
      hero: {
        mantra: "ॐ ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ನಮಃ",
        eyebrow: "ದೇವಾಲಯದ ಪವಿತ್ರ ಭಾವಚಿತ್ರ ಗ್ಯಾಲರಿ",
        heading: "ದಿವ್ಯ ದರ್ಶನ ಮತ್ತು ಕ್ಷೇತ್ರದ ಪವಿತ್ರ ಕ್ಷಣಗಳು",
        subtitle: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಅಂಬಾಮಠದ ದೈವಿಕ ದರ್ಶನ ಯಾತ್ರೆ",
        intro: "ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಗರ್ಭಗುಡಿಯ ಪವಿತ್ರ ದರ್ಶನ, ಐತಿಹಾಸಿಕ ಬೆಳ್ಳಿ ರಥೋತ್ಸವದ ಭಕ್ತಿ ಸಾಗರ, ವೈದಿಕ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು ಹಾಗೂ ಪವಿತ್ರ ಸಿದ್ಧ ಪರ್ವತದ ನೈಸರ್ಗಿಕ ಪ್ರಶಾಂತತೆಯನ್ನು ಈ ಛಾಯಾಚಿತ್ರಗಳ ಮೂಲಕ ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ.",
      },
      categories: {
        all: "ಎಲ್ಲಾ ಭಾವಚಿತ್ರಗಳು",
        deity: "ಪವಿತ್ರ ಸನ್ನಿಧಿ & ದೇವಿಯ ದರ್ಶನ",
        architecture: "ದೇವಾಲಯ & ಸಿದ್ಧ ಪರ್ವತ",
        festivals: "ಬೆಳ್ಳಿ ರಥೋತ್ಸವ & ಜಾತ್ರೆ",
        poojas: "ವೈದಿಕ ಪೂಜೆ & ಧಾರ್ಮಿಕ ವಿಧಿಗಳು",
      },
      highlights: {
        eyebrow: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ವಿಶೇಷತೆ",
        heading: "೩೪೩+ ವರ್ಷಗಳ ಪವಿತ್ರ ಧಾರ್ಮಿಕ ಪರಂಪರೆ",
        subtitle: "ತಲೆಮಾರುಗಳಿಂದ ನಡೆದುಬಂದ ಅವಿಚ್ಛಿನ್ನ ಭಕ್ತಿ ಮತ್ತು ದೈವಿಕ ಶಕ್ತಿಯ ಪವಿತ್ರ ಸಾಕ್ಷಿ",
      },
      closing: {
        heading: "ಪ್ರತ್ಯಕ್ಷವಾಗಿ ಕ್ಷೇತ್ರದ ದರ್ಶನ ಪಡೆದು ಧನ್ಯರಾಗಿ",
        subtitle: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತಕ್ಕೆ ನಿಮ್ಮ ಯಾತ್ರೆಯನ್ನು ಯೋಜಿಸಿ",
        description: "ಛಾಯಾಚಿತ್ರಗಳು ದೈವಿಕ ಕೃಪೆಯ ಒಂದು ನೋಟವನ್ನು ನೀಡಿದರೆ, ಪ್ರತ್ಯಕ್ಷವಾಗಿ ಶ್ರೀ ಅಂಬಾದೇವಿಯ ಸನ್ನಿಧಾನದಲ್ಲಿ ನಿಂತು ದರ್ಶನ ಪಡೆಯುವುದು ಜೀವನದಲ್ಲಿ ಶಾಂತಿ, ದೈವಿಕ ಶಕ್ತಿ ಮತ್ತು ಸಕಲ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಸಿದ್ಧಿಸುತ್ತದೆ.",
        timingsBtn: "ದರ್ಶನ ಸಮಯ ವೀಕ್ಷಿಸಿ",
        sevasBtn: "ದೇವಾಲಯದ ಸೇವೆಗಳು",
        blessing: "ಜಗನ್ಮಾತೆ ಶ್ರೀ ಅಂಬಾದೇವಿಯು ನಿಮಗೆ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಸಕಲ ಸುಖ, ಶಾಂತಿ, ಆಯುರಾರೋಗ್ಯ ಮತ್ತು ಅಭಿವೃದ್ಧಿಯನ್ನು ಕರುಣಿಸಲಿ.",
        mantra: "॥ ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು ॥",
      },
    },
    contactPage: {
      hero: {
        mantra: "ॐ ಶ್ರೀ ಅಂಬಾದೇವಿ ನಮಃ",
        eyebrow: "ದೇವಾಲಯದ ಸಂಪರ್ಕ & ಭಕ್ತ ಸೇವೆಗಳು",
        heading: "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನವನ್ನು ಸಂಪರ್ಕಿಸಿ",
        subtitle: "ಆಡಳಿತ ಕಚೇರಿ, ಸಹಾಯವಾಣಿ, ಸೇವಾ ವಿಚಾರಣೆ ಹಾಗೂ ಭಕ್ತಿ ಸಮರ್ಪಣೆ",
      },
      info: {
        phoneTitle: "ದೇವಾಲಯ ಕಚೇರಿ & ಸಹಾಯವಾಣಿ",
        phone: "+91 94801 64515 / +91 98450 12345",
        addressTitle: "ದೇವಾಲಯದ ವಿಳಾಸ",
        address: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ, ಸೋಮಲಾಪುರ, ಸಿಂಧನೂರು ತಾಲೂಕು, ರಾಯಚೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ - 584128",
        timingsTitle: "ಕಚೇರಿ ಕಾರ್ಯ ಸಮಯ",
        timings: "ಬೆಳಿಗ್ಗೆ: 6:00 – 1:30 | ಸಂಜೆ: 4:00 – 8:30",
        trustTitle: "ಆಡಳಿತ ಮಂಡಳಿ",
        trustInfo: "ಶ್ರೀ ಬಗಳಾಮುಖಿ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ ಟ್ರಸ್ಟ್ (ನೋಂ.), ಸೋಮಲಾಪುರ",
      },
      donation: {
        heading: "ಭಕ್ತಿ ಸಮರ್ಪಣೆ & ಕಾಣಿಕೆ",
        subtitle: "ದೇವಾಲಯದ ನಿರ್ವಹಣೆ, ನಿತ್ಯ ಅನ್ನದಾನ ಹಾಗೂ ಧಾರ್ಮಿಕ ಸೇವೆಗಳಿಗೆ ಬೆಂಬಲಿಸಿ",
        description: "ದೇವಾಲಯಕ್ಕೆ ಇಚ್ಛಾನುಸಾರ ಭಕ್ತಿ ಕಾಣಿಕೆ, ಸೇವಾ ಶುಲ್ಕ ಅಥವಾ ಅನ್ನದಾನ ಸಮರ್ಪಿಸಲು ಇಚ್ಛಿಸುವ ಭಕ್ತಾದಿಗಳು ನೇರವಾಗಿ ಆಡಳಿತ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು ಅಥವಾ ಅಧಿಕೃತ ಖಾತೆಗೆ ಜಮಾ ಮಾಡಬಹುದು.",
        hundiNote: "ದೇವಾಲಯದ ಕಚೇರಿಯಲ್ಲಿ ಸ್ವೀಕರಿಸಲಾಗುವ ಎಲ್ಲಾ ಭಕ್ತಿ ಕಾಣಿಕೆಗಳಿಗೆ ಅಧಿಕೃತ ರಸೀದಿಯನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ.",
      },
    },
    governmentListing: {
      badge: "ಅಧಿಕೃತ ಧಾರ್ಮಿಕ ದತ್ತಿ ಇಲಾಖಾ ನೋಂದಣಿ",
      templeName: "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ",
      location: "ಸೋಮಲಾಪುರ, ಸಿಂಧನೂರು ತಾಲೂಕು, ರಾಯಚೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",
      templeIdLabel: "ದೇವಾಲಯದ ಐಡಿ",
      templeId: "TM000155",
      description:
        "ಸೋಮಲಾಪುರದ ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನವು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಹಿಂದು ಧಾರ್ಮಿಕ ಹಾಗೂ ಧರ್ಮಾದಾಯ ದತ್ತಿಗಳ ಇಲಾಖೆಯ (ಮುಜರಾಯಿ) ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಾಯಿತವಾಗಿದೆ. ದೇವಾಲಯದ ಅಧಿಕೃತ ಮಾಹಿತಿ ಹಾಗೂ ಲಭ್ಯವಿರುವ ಸೇವೆಗಳ ವಿವರಗಳಿಗಾಗಿ ಭಕ್ತರು ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್ ಅನ್ನು ಪರಿಶೀಲಿಸಬಹುದು.",
      buttonText: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ದಾಖಲೆ ವೀಕ್ಷಿಸಿ",
      govtTitle: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
      deptTitle: "ಹಿಂದು ಧಾರ್ಮಿಕ ಹಾಗೂ ಧರ್ಮಾದಾಯ ದತ್ತಿಗಳ ಇಲಾಖೆ",
    },
    shilaMantapaInauguration: {
      eyebrow: "|| ನೂತನ ಶಿಲಾ ಮಂಟಪ ಲೋಕಾರ್ಪಣೆ ||",
      title: "ನೂತನ ಶಿಲಾ ಮಂಟಪದ ಲೋಕಾರ್ಪಣಾ ಕಾರ್ಯಕ್ರಮ",
      subtitle: "ಸುಕ್ಷೇತ್ರ ಸಿದ್ಧ ಪರ್ವತ ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ, ಸೋಮಲಾಪುರ",
      venueBadge: "ಭವ್ಯ ಲೋಕಾರ್ಪಣಾ ಮಹೋತ್ಸವ",
      eventDate: "ಪವಿತ್ರ ಧಾರ್ಮಿಕ ಸಮಾರಂಭ",
      sections: {
        ministers: "ಸನ್ಮಾನ್ಯ ಸಚಿವರು ಹಾಗೂ ಮುಖ್ಯ ಅತಿಥಿಗಳು",
        presidency: "ಸಮಾರಂಭದ ಅಧ್ಯಕ್ಷತೆ",
        guests: "ಗೌರವಾನ್ವಿತ ಅತಿಥಿಗಳು",
      },
      ministers: [
        {
          orderNum: "3",
          name: "ಶ್ರೀ ಸತೀಶ್ ಜಾರಕಿಹೊಳಿ",
          designation: "ಸನ್ಮಾನ್ಯ ಸಚಿವರು, ಲೋಕೋಪಯೋಗಿ ಇಲಾಖೆ",
          subDesignation: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
          image: "/dignitaries/satish-jarkiholi.jpg",
          badge: "ಸನ್ಮಾನ್ಯ ಸಚಿವರು",
        },
        {
          orderNum: "4",
          name: "ಶ್ರೀ ಬಸವರಾಜ ರಾಯರೆಡ್ಡಿ",
          designation: "ಸನ್ಮಾನ್ಯ ಸಚಿವರು, ಉನ್ನತ ಶಿಕ್ಷಣ ಇಲಾಖೆ",
          subDesignation: "ಶಾಸಕರು ಹಾಗೂ ಮುಖ್ಯಮಂತ್ರಿಗಳ ಆರ್ಥಿಕ ಸಲಹೆಗಾರರು, ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
          image: "/dignitaries/basavaraj-rayareddy.jpg",
          badge: "ಸನ್ಮಾನ್ಯ ಸಚಿವರು",
        },
        {
          orderNum: "5",
          name: "ಶ್ರೀ ಶಿವರಾಜ್ ತಂಗಡಗಿ",
          designation: "ಸನ್ಮಾನ್ಯ ಸಚಿವರು, ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಹಾಗೂ ಕನ್ನಡ ಮತ್ತು ಸಂಸ್ಕೃತಿ ಇಲಾಖೆ",
          subDesignation: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
          image: "/dignitaries/shivaraj-tangadagi.jpg",
          badge: "ಸನ್ಮಾನ್ಯ ಸಚಿವರು",
        },
      ],
      president: {
        name: "ಶ್ರೀ ಹಂಪನಗೌಡ ಬಾದರ್ಲಿ",
        designation: "ಸನ್ಮಾನ್ಯ ಶಾಸಕರು",
        constituency: "ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರ, ಸಿಂಧನೂರು",
        roleTitle: "ಅಧ್ಯಕ್ಷತೆ",
        image: "/dignitaries/hampanagouda-badarli.jpg",
        badge: "ಸಮಾರಂಭದ ಅಧ್ಯಕ್ಷರು",
      },
      guests: [
        {
          name: "ಶ್ರೀ ಆರ್. ಬಸವನಗೌಡ ತುರುವಿಹಾಳ",
          designation: "ಸನ್ಮಾನ್ಯ ಶಾಸಕರು, ಮಸ್ಕಿ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರ",
          image: "/dignitaries/basanagouda-turvihal.jpg",
          badge: "ಶಾಸಕರು - ಮಸ್ಕಿ",
        },
        {
          name: "ಶ್ರೀ ಬಸನಗೌಡ ದದ್ದಲ್",
          designation: "ಸನ್ಮಾನ್ಯ ಶಾಸಕರು, ರಾಯಚೂರು ಗ್ರಾಮೀಣ & ಅಧ್ಯಕ್ಷರು, ಮಹರ್ಷಿ ವಾಲ್ಮೀಕಿ ನಿಗಮ",
          image: "/dignitaries/basanagouda-daddal.jpg",
          badge: "ಶಾಸಕರು - ರಾಯಚೂರು ಗ್ರಾಮೀಣ",
        },
        {
          name: "ಶ್ರೀ ಜೆ.ಟಿ. ಪಾಟೀಲ್",
          designation: "ಸನ್ಮಾನ್ಯ ಶಾಸಕರು, ಬೀಳಗಿ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರ",
          image: "/dignitaries/jt-patil.jpg",
          badge: "ಶಾಸಕರು - ಬೀಳಗಿ",
        },
        {
          name: "ಶ್ರೀ ಕುಮಾರ ನಾಯಕ",
          designation: "ಸನ್ಮಾನ್ಯ ಸಂಸದರು, ರಾಯಚೂರು ಲೋಕಸಭಾ ಕ್ಷೇತ್ರ (ನಿವೃತ್ತ ಐಎಎಸ್)",
          image: "/dignitaries/kumar-naik.jpg",
          badge: "ಸಂಸದರು - ರಾಯಚೂರು",
        },
        {
          name: "ಡಾ. ಶಿವರಾಜ್ ಎನ್. ಪಾಟೀಲ್",
          designation: "ಸನ್ಮಾನ್ಯ ಮಾಜಿ ಶಾಸಕರು, ರಾಯಚೂರು ನಗರ ಕ್ಷೇತ್ರ",
          image: "/dignitaries/shivaraj-n-patil.jpg",
          badge: "ಮಾಜಿ ಶಾಸಕರು - ರಾಯಚೂರು",
        },
      ],
    },
    footer: {
      description: "ಸುಕ್ಷೇತ್ರ ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನದ ಪವಿತ್ರ ಸನ್ನಿಧಿ, ತಲೆಮಾರುಗಳಿಂದ ಧಾರ್ಮಿಕ ಪರಂಪರೆ, ವೈದಿಕ ಪೂಜೆಗಳು ಮತ್ತು ಭಕ್ತಿ ಸಂಪ್ರದಾಯಗಳನ್ನು ಪೋಷಿಸುತ್ತಿದೆ.",
      quickLinksTitle: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
      sevasTitle: "ಸೇವೆ ಮತ್ತು ಪೂಜೆ",
      darshanTitle: "ದೈನಂದಿನ ದರ್ಶನ ಸಮಯ",
      morningLabel: "ಬೆಳಿಗ್ಗೆ:",
      morningTime: "6:00 – 1:30",
      eveningLabel: "ಸಂಜೆ:",
      eveningTime: "4:00 – 8:30",
      devoteeNote: "ಶ್ರೀ ಅಂಬಾದೇವಿಯ ದಿವ್ಯ ಕೃಪೆಯನ್ನು ಪಡೆಯಲು ಎಲ್ಲಾ ದಿನಗಳಲ್ಲೂ ಭಕ್ತರಿಗೆ ದರ್ಶನ ಲಭ್ಯವಿದೆ.",
      copyright: "ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನ.",
      trustTitle: "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನ ಟ್ರಸ್ಟ್",
    },
  },
  hi: hiContentTranslation,
  te: teContentTranslation,
};

export function useContentTranslation() {
  const { locale, setLocale } = useLocale();
  const t = contentTranslations[locale] || contentTranslations.kn;
  const isKannada = locale === "kn";
  const isHindi = locale === "hi";
  const isTelugu = locale === "te";
  const isEnglish = locale === "en";
  const fontClass = isKannada
    ? "font-kannada"
    : isHindi
    ? "font-hindi"
    : isTelugu
    ? "font-telugu"
    : "font-sans";

  return {
    t,
    locale,
    setLocale,
    isKannada,
    isHindi,
    isTelugu,
    isEnglish,
    fontClass,
  };
}

