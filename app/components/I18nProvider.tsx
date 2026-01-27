"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultLocale,
  locales,
  translations,
  type Locale,
  type TranslationKey,
} from "../i18n/translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("locale");
    if (storedLocale && locales.includes(storedLocale as Locale)) {
      setLocaleState(storedLocale as Locale);
      return;
    }
    const browserLocale = navigator.language;
    const normalized = browserLocale.toLowerCase();
    if (normalized.startsWith("fr")) {
      setLocaleState("fr");
    } else if (normalized.startsWith("zh")) {
      const isTraditional =
        normalized.includes("hant") ||
        normalized.includes("tw") ||
        normalized.includes("hk") ||
        normalized.includes("mo");
      setLocaleState(isTraditional ? "zh-Hant" : "zh-Hans");
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("locale", nextLocale);
  };

  const value = useMemo<I18nContextValue>(() => {
    const dictionary = translations[locale];
    return {
      locale,
      setLocale,
      t: (key) => dictionary[key] ?? translations[defaultLocale][key] ?? key,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
