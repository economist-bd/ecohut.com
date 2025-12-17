import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // <--- এই লাইনটি খেয়াল করুন, এটি '/' হতে হবে
})