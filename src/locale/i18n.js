import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import xhr from 'i18next-xhr-backend'
import en from './translations/en_US.json'
import tr from './translations/tr_TR.json'

i18n
  .use(xhr)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: tr,
      en: en,
    },
    //  lng: 'tr',
    fallbackLng: 'tr',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: false,
      wait: true,
      bindi18n: 'languagechanged loaded',
      bindI18nStore: 'added removed',
      nsMode: 'default',
    },
  })

export default i18n
