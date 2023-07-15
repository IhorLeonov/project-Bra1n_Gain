import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './constants/locales/en/translation.json';
import ua from './constants/locales/ua/translation.json';



i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie', 'path'],
            cache: ['cookie']

        },
        resources: {
            en: {
                translation: en,
            },
            ua: {
                translation: ua,
            },
        },



        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;