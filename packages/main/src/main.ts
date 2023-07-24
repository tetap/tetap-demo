import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import unoverlay from '@overlays/vue'
import { loadLocaleMessages } from '@web-video-filter/locale'
import './theme/global.scss'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {}
})

app.use(i18n).use(unoverlay).use(router)

/** 异步加载语言包 */
loadLocaleMessages(i18n, 'zh-CN').finally(() => {
  document.getElementById('loading')?.classList?.add('hidden')
})

app.mount('#app')
