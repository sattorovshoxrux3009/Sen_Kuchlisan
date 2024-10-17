import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import uzTranslation from "../public/locales/uz.json"
import ruTranslation from "../public/locales/ru.json"

const language=localStorage.getItem("i18nextLng") || "en"

i18n
.use(Backend)
// Tilni aniqlash
.use(languageDetector)
// bog'lash
.use(initReactI18next)
.init({
    fallbackLng: "uz",
    lng: language,
    debug: true,
    resources:{
        uz:{translation : uzTranslation},
        ru:{translation : ruTranslation},
    }
})

export default i18n;
