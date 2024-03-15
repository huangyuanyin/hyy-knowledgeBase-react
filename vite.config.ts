import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/sassConfig.scss";'
      }
    }
  }
})
