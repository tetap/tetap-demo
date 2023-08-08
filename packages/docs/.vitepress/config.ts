import { defineConfig } from 'vitepress'
import components from './rewrites/components'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tetap',
  description: 'Components',
  rewrites: components(),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/started/install', activeMatch: '/started/' },
      { text: 'Components', link: '/components/button', activeMatch: '/components/' }
    ],

    sidebar: {
      '/started/': [
        {
          text: 'Get Started',
          items: [{ text: 'Installation', link: '/started/install' }]
        }
      ],
      '/components/': [
        {
          text: '通用',
          items: [{ text: 'Button', link: '/components/button' }]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/tetap/tetap-demo' }]
  }
})
