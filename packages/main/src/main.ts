import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import unoverlay from '@overlays/vue'
import { loadLocaleMessages } from '@tetap-demo/locale'
import './theme/global.scss'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'ZH-CN',
  fallbackLocale: 'ZH-CN',
  messages: {}
})

app.use(i18n).use(unoverlay).use(router)

app.mount('#app')

/** 异步加载语言包 */
loadLocaleMessages(i18n, 'ZH-CN')
  .catch((message) => {
    console.error('loadLocaleMessages', message)
  })
  .finally(() => {
    document.getElementById('loading')?.classList?.add('hidden')
  })
