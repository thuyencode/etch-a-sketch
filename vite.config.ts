import { defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'

export default defineConfig({
  base: '/etch-a-sketch/',
  plugins: [simpleHtmlPlugin({ minify: true })]
})
