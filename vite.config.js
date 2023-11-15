import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  base: '/etch-a-sketch/',
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
})
