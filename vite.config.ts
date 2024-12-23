import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  esbuild: {
    target: 'esnext',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },

    define: {
      'process.env': process.env
    }

  
});
