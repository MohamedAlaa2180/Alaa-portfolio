import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { projects } from './src/data.js'

// GitHub Pages has no SPA fallback, so a direct visit to a client-side route
// like /project/the-passive-design-lab 404s. After the build:
//  - copy index.html into dist/project/<id>/index.html for every project, so
//    project links are real pages that load with HTTP 200 (good for link previews);
//  - copy index.html to dist/404.html so any other unknown path still boots the app
//    and React Router takes over.
function githubPagesSpaFallback() {
  let outDir
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'))
      for (const { id } of projects) {
        const dir = path.join(outDir, 'project', id)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), indexHtml)
      }
      fs.writeFileSync(path.join(outDir, '404.html'), indexHtml)
    }
  }
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: '/Alaa-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
