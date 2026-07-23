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
    sourcemap: false, // Ensure source maps are disabled for production
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('lenis') || id.includes('dompurify') || id.includes('marked')) return 'vendor-utils';
            return 'vendor-core';
          }
        },
      },
    },
  },
}));
