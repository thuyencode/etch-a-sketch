/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { xs: '200px' },
      height: { screen: '100dvh' },
      width: { screen: '100vw' },
      maxHeight: { screen: '100dvh' },
      maxWidth: { screen: '100dvw' },
    },
  },
  plugins: [],
}
