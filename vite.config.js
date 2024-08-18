/* eslint-disable no-undef */
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@widgets': path.resolve(__dirname, './src/components/widgets'),
      '@icons': path.resolve(__dirname, './src/components/icons'),
      '@images': path.resolve(__dirname, './src/components/images'),
      '@shared': path.resolve(__dirname, './src/components/shared')
    },
  },
  plugins: [react()],
});
