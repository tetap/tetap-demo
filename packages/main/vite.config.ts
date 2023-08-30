import { defineConfig } from 'vite'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { TetapComponents } from '@tetap/components/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    eslintPlugin({
      include: [
        'src/*/**.vue',
        'src/*/**.ts',
        'src/*/**.d.ts',
        'src/*/**.tsx',
        'main.ts',
        'App.vue'
      ],
      exclude: ['./node_modules/**']
    }),
    Components({
      resolvers: [TetapComponents()]
    })
  ],
  esbuild: {
    treeShaking: true
  },
  build: {
    chunkSizeWarningLimit: 2048,
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
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
