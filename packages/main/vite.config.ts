import { defineConfig } from 'vite'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/*/**.vue', 'src/*/**.ts', 'src/*/**.d.ts', 'src/*/**.tsx'],
      exclude: ['./node_modules/**']
    })
  ],
  esbuild: {
    treeShaking: true
  },
  build: {
    chunkSizeWarningLimit: 2048,
    sourcemap: false,
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
