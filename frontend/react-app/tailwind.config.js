/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'none': '0px',
        'sm': '0px',
        DEFAULT: '0px',
        'md': '0px',
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
      },
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
          950: '#0C0D0E',
          900: '#121214',
          850: '#151618',
          800: '#18191D',
          700: '#22242A',
          600: '#2E3036',
        },
        charcoal: {
          DEFAULT: '#18191D',
          dark: '#121214',
          card: '#18191D',
          elevated: '#22242A',
          border: '#2A2B30',
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
        sans: ['"IBM Plex Sans Thai"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        thai: ['"IBM Plex Sans Thai"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      lineHeight: {
        'tight': '1.38',
        'snug': '1.5',
        'normal': '1.68',
        'relaxed': '1.82',
        'loose': '2.05',
      },
      letterSpacing: {
        'tight': '-0.01em',
        'normal': '0.01em',
        'wide': '0.025em',
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
