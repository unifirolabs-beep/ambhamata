import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/constants";

export { DEFAULT_LOCALE, LOCALES, type Locale };

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

