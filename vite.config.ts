import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so assets resolve on a GitHub Pages project site
// (https://<user>.github.io/<repository>/) without hard-coding the repository name.
// For an absolute project-site base, set base to '/your-repository-name/' instead.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 4317,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 4318,
    strictPort: true,
  },
})
