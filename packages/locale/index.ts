import { createI18n } from 'vue-i18n'
import ZHCN from './langs/ZH-CN.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': ZHCN
  }
})
