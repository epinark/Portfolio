import {
  defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define your environment variables here
    'process.env': process.env,
  },
});