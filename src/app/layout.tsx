import type { Metadata, Viewport } from "next";
import { inter, notoSansKannada } from "@/app/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/shared/providers";
import { JsonLd, TEMPLE_STRUCTURED_DATA } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#8B1538",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.nameKannada}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sri Ambadevi Devasthana",
    "Sri Ambamata Devasthana",
    "Somalapura Temple",
    "Sindhanur Temple",
    "Siddha Parvatha Shaktipeeth",
    "Ambamath",
    "Param Poojya Sri Chidananda Avadhoota",
    "Belli Rathotsava",
    "Jatra Mahotsava Somalapura",
    "Ambamata Darshan Timings",
    "Pooja Booking Raichur",
    "Karnataka Temples HRCE",
    "ಶ್ರೀ ಅಂಬಾದೇವಿ ದೇವಸ್ಥಾನ",
    "ಶ್ರೀ ಅಂಬಾಮಾತಾ ದೇವಸ್ಥಾನ ಸೋಮಲಾಪುರ",
    "ಸಿಂಧನೂರು ದೇವಾಲಯಗಳು",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Religion & Spirituality",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["kn_IN", "hi_IN", "te_IN"],
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.nameKannada}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/devi.jpeg",
        width: 1200,
        height: 630,
        alt: "Goddess Sri Ambadevi Moola Vigraha Deity at Sukshethra Siddha Parvatha Somalapura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.nameKannada}`,
    description: siteConfig.description,
    images: ["/devi.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansKannada.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground flex flex-col antialiased">
        <JsonLd data={TEMPLE_STRUCTURED_DATA} />
        <Providers>
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

