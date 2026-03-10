import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Ensure this line is present

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Ensure this is called as a function
  base : 
'react-sdp-repo',


})

