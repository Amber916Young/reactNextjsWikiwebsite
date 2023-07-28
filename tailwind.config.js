/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-darkest': '#21183C',
        'grey-white': '#f7f7f7',
        'white': '#ffffff',
        'purple-lightest': '#F3EBFF',
        'purple-lighter': '#D6BBFC',
        'purple-light': '#A779E9',
        'purple-base': '#9561E2',
        'purple-dark': '#794ACF',
        'purple-darker': '#382B5F',
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
      keyframes: {
        wiggle: {
          from: {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle .6s ease-in-out 0s'
      }
    },
  },
  plugins: [],
}
