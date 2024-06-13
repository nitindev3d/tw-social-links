/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'off-black': 'hsl(0, 0%, 8%)',
      'grey': 'hsl(0, 0%, 20%)',
      'dark-grey': 'hsl(0, 0%, 12%)',
      'green': 'hsl(75, 94%, 57%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system',],
    },
    extend: {},
  },
  plugins: [],
}

