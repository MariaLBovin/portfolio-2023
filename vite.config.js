import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      
    }
  },
  base: "https://marialbovin.github.io/portfolio-2023/",
  define: {
    "process.env": {}
  }
})
