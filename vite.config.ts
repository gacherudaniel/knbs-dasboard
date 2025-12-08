<<<<<<< HEAD
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
>>>>>>> 341fd5f8c96ccd3a141b5e71f7959b087128521c

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      "@": path.resolve(__dirname, "./src")
    }
  }
})
=======
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
>>>>>>> 341fd5f8c96ccd3a141b5e71f7959b087128521c
