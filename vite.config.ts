<<<<<<< Updated upstream
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
>>>>>>> Stashed changes

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< Updated upstream
})
=======
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
});
>>>>>>> Stashed changes
