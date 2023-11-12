const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A199',
          light: '#14C3BB'
        },
        secondary: {
          DEFAULT: '#FFDC9E',
          dark: '#F4CA80',
          light: '#FFE9C3',
          tint: '#FCF9E9'
        },
        basic: {
          black: '#515151',
          white: '#FFFFFF'
        }
      }
    }
  },
  plugins: [
    plugin(({ addBase, addComponents, theme }) => {
      addBase({
        body: {
          background: theme('colors.secondary.tint'),
          color: theme('colors.basic.black'),
          fontFamily: '"Noto Sans TC"',
          lineHeight: 1.6
        },
        b: {
          fontWeight: 400
        }
      })
      addComponents({
        '.headline': {
          '--headline-fz': '120px',

          fontFamily: '"Noto Serif TC"',
          fontSize: 'var(--headline-fz)',
          lineHeight: '1.5',
          fontWeight: 700
        },
        '.headline-1': {
          '--headline-fz': '48px'
        },
        '.headline-2': {
          '--headline-fz': '40px'
        }
      })
      addComponents({
        '.title': {
          '--title-fz': '40px',

          fontFamily: '"Noto Sans TC"',
          fontSize: 'var(--title-fz)',
          lineHeight: '1.5',
          fontWeight: 700
        },
        '.title-1': {
          '--title-fz': '28px'
        },
        '.subtitle': {
          '--title-fz': '24px'
        }
      })
      addComponents({
        '.gaegu': {
          '--gaegu-fz': '72px',

          fontFamily: '"Gaegu"',
          fontSize: 'var(--gaegu-fz)',
          lineHeight: '1.5'
        },
        '.gaegu-2': {
          '--gaegu-fz': '60px'
        },
        '.gaegu-3': {
          '--gaegu-fz': '40px'
        }
      })
      addComponents({
        '.fz-lg': {
          fontSize: '20px'
        },
        '.vote-miao': {
          fontFamily: '"Noto Sans"',
          fontSize: '240px'
        }
      })
    })
  ]
}
