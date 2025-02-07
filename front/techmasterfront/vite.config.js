import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Assurez-vous que c'est l'URL correcte de votre backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});