import { defineConfig } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { genTemp } from '@ruabick/vite-plugin-gen-temp'
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc'
import { fileURLToPath } from 'url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sidebar from './sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Tetap',
  titleTemplate: "Tetap",
  lastUpdated: true,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      }
    ]
  ],
  base: process.env.NODE_ENV === 'production' ? '/tetap-demo' : '/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/install', activeMatch: '/guide/' },
      { text: '组件', link: '/components/button', activeMatch: '/components/' }
    ],
    sidebar: sidebar,
    algolia: {},
    socialLinks: [{ icon: 'github', link: 'https://github.com/tetap/components' }]
  },
  vue: {},
  vite: {
    plugins: [genTemp(), genApiDoc(), vueJsx()],
    resolve: {
      alias: {
        '@tetap/components': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  buildEnd() {
    process.exit(0)
  }
})
