import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { URL, fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx(), dts({ exclude: 'css/**' })],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: './dist/es',
    //压缩
    minify: true,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue
      external: ['vue'],
      input: ['./index.ts'],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        //让打包目录和我们目录对应
        preserveModules: true,
        sourcemap: true,
        exports: 'named',
        //配置打包根目录
        dir: fileURLToPath(new URL('./dist/es', import.meta.url))
      }
    },
    lib: {
      entry: './index.ts',
      name: '@tetap/components',
      formats: ['es']
    }
  }
})
