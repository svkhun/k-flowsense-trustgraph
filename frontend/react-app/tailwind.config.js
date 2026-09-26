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
        kplus: {
          DEFAULT: '#00A950',
          hover: '#008F43',
          dark: '#00582B',
          glow: 'rgba(0, 169, 80, 0.35)',
          mint: '#10B981',
          neon: '#00F59B',
        },
        obsidian: {
          950: '#03050B',
          900: '#050814',
          850: '#080D1E',
          800: '#0D152D',
          700: '#142042',
          600: '#1F305E',
        },
        emerald: {
          950: '#022C22',
          900: '#064E3B',
          800: '#065F46',
          700: '#047857',
          600: '#059669',
          500: '#10B981',
          400: '#34D399',
          300: '#6EE7B7',
          200: '#A7F3D0',
          100: '#D1FAE5',
          50: '#ECFDF5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans Thai"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 169, 80, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 169, 80, 0.55)' },
        }
      }
    },
  },
  plugins: [],
}
