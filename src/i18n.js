import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: getCurrentLanguage(),
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export function getCurrentLanguage() {
  const locale = localStorage.getItem("lang");

  if (!locale) {
    return localStorage.setItem("lang", "en");
  }

  return locale;
}
