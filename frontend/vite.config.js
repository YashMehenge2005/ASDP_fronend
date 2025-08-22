import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/upload': 'https://asdp-fba8.onrender.com/',
      '/clean': 'https://asdp-fba8.onrender.com/',
      '/report': 'https://asdp-fba8.onrender.com/',
      '/download_data': 'https://asdp-fba8.onrender.com/',
      '/login': 'https://asdp-fba8.onrender.com/',
      '/register': 'https://asdp-fba8.onrender.com/',
      '/profile': 'https://asdp-fba8.onrender.com/',
      '/logout': 'https://asdp-fba8.onrender.com/',
      '/admin': 'https://asdp-fba8.onrender.com/',
      '/admin/summary': 'https://asdp-fba8.onrender.com/',
      '/avatars': 'https://asdp-fba8.onrender.com/',
      '/healthz': 'https://asdp-fba8.onrender.com/',
      '/me': 'https://asdp-fba8.onrender.com/'
    }
  }
})
