import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tetap',
  description: 'Components',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/started/install', activeMatch: '/started/' },
      { text: 'Components', link: '/components/button.md', activeMatch: '/components/' }
    ],
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/tetap/tetap-demo' }]
  },
  vite: {
    plugins: []
  }
})
