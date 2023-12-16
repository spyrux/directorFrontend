import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'path';
import million from 'million/compiler';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  server: {
    port: 5500, // Set the port to 5500
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
