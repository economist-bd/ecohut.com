import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ecohut.com/", // <--- এখানে অবশ্যই আপনার রিপোজিটরির পুরো নাম দিন
})