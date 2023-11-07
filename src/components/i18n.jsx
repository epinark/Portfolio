import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./../locales/en";
import de from "./../locales/de";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
