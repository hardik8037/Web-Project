import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  // Drop console logs in production
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: [
        '/Users/hardik/Documents/Web Project',
        '/Users/hardik/.gemini'
      ]
    }
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'three';
          }
          if (id.includes('node_modules/gsap')) {
            return 'gsap';
          }
        },
      },
    },
  },
}));
