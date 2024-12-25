/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
    },
    screens: {
      hg: {
        min: '1921px',
      },
      xgg: {
        max: '1920px',
      },
      gg: {
        max: '1739px',
      },
      xxl: {
        max: '1535px',
      },
      xl: {
        max: '1279px',
      },
      lg: {
        max: '1023px',
      },
      md: {
        max: '767px',
      },
      sm: {
        max: '639px',
      },
      xs: {
        max: '479px',
      },
      xxs: {
        max: '364px',
      },
    },
  },
}
