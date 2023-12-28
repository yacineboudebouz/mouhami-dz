import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { lang } from "./lang.js";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = lang;
i18next.use(initReactI18next).init({
  resources,
  lng: "EN",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
