import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project at /rail-closet/
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-sprites-index',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const path = req.url?.split('?')[0]
          if (path === '/sprites' || path === '/sprites/') {
            req.url = '/sprites/index.html'
          }
          next()
        })
      },
    },
  ],
  base,
})
