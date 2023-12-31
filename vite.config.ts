import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import viteSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-v1/',
  plugins: [viteSvgr(), react()],
})
