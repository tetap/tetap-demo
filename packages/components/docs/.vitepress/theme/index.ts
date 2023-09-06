import DefaultTheme from 'vitepress/theme'
import DemoBlock from '@ruabick/vitepress-demo-block'
import './var.css'
import '@ruabick/vitepress-demo-block/dist/style.css'

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component('demo', DemoBlock)
  }
}
