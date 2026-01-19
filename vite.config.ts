import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      base: "/dnstt_walkthrough",
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});