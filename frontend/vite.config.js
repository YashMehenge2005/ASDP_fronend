import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/upload': 'http://localhost:5000/',
      '/clean': 'http://localhost:5000/',
      '/report': 'http://localhost:5000/',
      
      '/download_data': 'http://localhost:5000/',
      '/login': 'http://localhost:5000/',
      '/register': 'http://localhost:5000/',
      '/profile': 'http://localhost:5000/',
      '/logout': 'http://localhost:5000/',
      '/admin': 'http://localhost:5000/',
      '/admin/summary': 'http://localhost:5000/',
      '/avatars': 'http://localhost:5000/',
      '/healthz': 'http://localhost:5000/',
      '/me': 'http://localhost:5000/'
    }
  }
})
