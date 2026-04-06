import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署时，base 需要设置为仓库名（例如 /resume/）
// 本地开发时使用默认的 '/'
const base = process.env.GITHUB_PAGES_REPO_NAME || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
