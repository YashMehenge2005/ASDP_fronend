import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all API calls to backend during development
      '/api': {
        target: 'https://asdp-psi.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // Direct API endpoints for development
      '/upload': 'https://asdp-psi.vercel.app',
      '/clean': 'https://asdp-psi.vercel.app',
      '/report': 'https://asdp-psi.vercel.app',
      '/download_data': 'https://asdp-psi.vercel.app',
      '/login': 'https://asdp-psi.vercel.app',
      '/register': 'https://asdp-psi.vercel.app',
      '/profile': 'https://asdp-psi.vercel.app',
      '/logout': 'https://asdp-psi.vercel.app',
      '/admin': 'https://asdp-psi.vercel.app',
      '/admin/summary': 'https://asdp-psi.vercel.app',
      '/avatars': 'https://asdp-psi.vercel.app',
      '/healthz': 'https://asdp-psi.vercel.app',
      '/me': 'https://asdp-psi.vercel.app'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  }
})
