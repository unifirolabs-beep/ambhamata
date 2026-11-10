/**
 * Sri Ambamata Devasthana - Official Design System Constants
 */

export const BRAND_COLORS = {
  divineYellow: {
    hex: "#F4C542",
    hsl: "43, 89%, 61%",
    rgb: "244, 197, 66",
    light: "#FCF7E8",
    subtle: "#F8E39E",
    dark: "#CE950D",
  },
  white: {
    hex: "#FFFFFF",
    hsl: "0, 0%, 100%",
    rgb: "255, 255, 255",
    cream: "#FAF8F5",
  },
  kumkumRed: {
    hex: "#A61932",
    hsl: "349, 74%, 37%",
    rgb: "166, 25, 50",
    light: "#FDF3F5",
    subtle: "#F5D3D9",
    dark: "#750E21",
    deep: "#460511",
  },
} as const;

export const BREAKPOINTS = {
  xs: 375,   // Small mobile: 320–375px
  sm: 480,   // Standard mobile: 376–480px
  md: 768,   // Tablet: 768–1023px
  lg: 1024,  // Laptop: 1024–1439px
  xl: 1440,  // Desktop: 1440–1919px
  "2xl": 1920, // Large desktop: 1920px+
} as const;

export const LOCALES = ["kn", "hi", "te", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "kn";

