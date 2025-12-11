import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        reciprocity: {
          DEFAULT: '#3A8BFF',
          dark: '#246CDB',
          light: '#DCEBFF',
        },
        gold: {
          DEFAULT: '#E5B76A',
          dark: '#C79A50',
          light: '#F8E6C7',
        },
        slate: {
          50: '#F8F9FB',
          100: '#F0F2F5',
          200: '#E1E4E8',
          300: '#C6CBD4',
          400: '#8F96A0',
          500: '#6A7280',
          600: '#4A535E',
          700: '#2F3742',
          800: '#2A2F35',
          900: '#1A1C1E',
        },
        bg: {
          cloud: '#F5F7FA',
          midnight: '#1A1C1E',
        },
        status: {
          positive: '#3BB273',
          'positive-light': '#DFF6E8',
          warning: '#FFA94D',
          'warning-light': '#FFF4E6',
          danger: '#FF5C5C',
          'danger-light': '#FFECEC',
          info: '#3A8BFF',
          'info-light': '#EAF2FF',
        },
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.06)',
        card: '0 2px 8px rgba(0,0,0,0.04)',
        pop: '0 8px 20px rgba(0,0,0,0.08)',
        header: '0 1px 3px rgba(0,0,0,0.05)',
        'focus-ring': '0 0 0 3px rgba(58,139,255,0.35)',
      },
      fontSize: {
        h1: ['28px', '36px'],
        h2: ['24px', '32px'],
        h3: ['20px', '28px'],
        h4: ['18px', '24px'],
        'body-lg': ['16px', '24px'],
        body: ['15px', '22px'],
        'body-sm': ['14px', '20px'],
        caption: ['12px', '16px'],
        micro: ['11px', '16px'],
      },
      spacing: {
        0: '0px',
        1: '2px',
        2: '4px',
        3: '6px',
        4: '8px',
        5: '10px',
        6: '12px',
        8: '16px',
        10: '20px',
        12: '24px',
        14: '28px',
        16: '32px',
        20: '40px',
        24: '48px',
      },
      transitionDuration: {
        fast: '120ms',
        normal: '200ms',
        slow: '320ms',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'emphasis': 'cubic-bezier(0.2, 0, 0, 1)',
        'decelerate': 'cubic-bezier(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}

export default config
