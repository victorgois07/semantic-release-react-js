import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from '../locales/pt.json'

const resources = {
  pt: {
    translation: pt,
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'pt',
  debug: process.env.NODE_ENV === 'development',
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  },
  interpolation: {
    format(value, format) {
      if (format === 'bold') return `<strong>${value}</strong>`
      return value
    },
    escapeValue: false,
  },
})

export default i18n
