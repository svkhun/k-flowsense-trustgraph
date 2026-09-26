/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kbank: {
          DEFAULT: '#00A950',
          hover: '#008F43',
          dark: '#005E2C',
          forest: '#02381A',
          subtle: 'rgba(0, 169, 80, 0.12)',
          border: 'rgba(0, 169, 80, 0.28)'
        },
        surface: {
          950: '#090A0F',
          900: '#0E1017',
          850: '#12151E',
          800: '#181C28',
          750: '#202534',
          700: '#2A3042'
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      transitionDuration: {
        DEFAULT: '150ms',
      }
    },
  },
  plugins: [],
}
