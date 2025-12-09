import { fileURLToPath, URL } from 'node:url';
import { dirname, resolve } from 'node:path'; // Import path functions
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// Get the current file's directory (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  // Vite uses 'build.outDir' instead of 'outputDir'
  build: {
    outDir: resolve(__dirname, '../server/public'), // This is the Vite equivalent
    emptyOutDir: true, // Optional: clear the directory before building
  },
});
