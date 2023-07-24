import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { i18n } from '@web_video_filter/locale'
import './theme/global.scss'

const app = createApp(App)

app.use(router).use(i18n)

app.mount('#app')
