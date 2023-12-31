import * as defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: { screen: '100dvh' },
      width: { screen: '100vw' },
      maxHeight: { screen: '100dvh' },
      maxWidth: { screen: '100dvw' },
      fontFamily: {
        sans: ['Silkscreen', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
