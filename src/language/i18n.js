import {I18nManager} from "react-native";
import i18n from "i18next";
import resources from './resources';
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANG, DEFAULT_LANG_FOR_RTL } from "../constants/languageConst";

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: I18nManager.isRTL ? DEFAULT_LANG_FOR_RTL : DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
