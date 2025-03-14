import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

dotenv.config({ path: '../../.env' });

export default defineConfig({
  define: {
    "import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY": JSON.stringify(process.env.CANISTER_ID_INTERNET_IDENTITY),
    "import.meta.env.VITE_DFX_NETWORK": JSON.stringify(process.env.DFX_NETWORK),
  },
  base: "./",
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), 
    react(),
    tailwindcss(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(
          new URL("../declarations", import.meta.url)
        ),
      },
    ],
    dedupe: ['@dfinity/agent'],
  },
});
