import { createI18n } from 'vue-i18n';
import es from './es.json';
import en from './en.json';

const i18n = createI18n({
  locale: 'es', // Idioma por defecto
  messages: {
    es,
    en
  }
});

export default i18n;
