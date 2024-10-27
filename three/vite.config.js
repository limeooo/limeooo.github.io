import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    glsl()
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]' // 确保文件名不变
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
