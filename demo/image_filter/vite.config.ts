import { defineConfig } from 'vite'
import { URL, fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import manifest from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  esbuild: {
    treeShaking: true
  },
  server: {
    port: manifest.devProp
  },
  build: {
    chunkSizeWarningLimit: 2048,
    sourcemap: false
  },
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``
      }
    }
  }
})
