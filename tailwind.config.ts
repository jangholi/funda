// import colors from 'tailwindcss/colors'

export default {
  theme: {
    fontFamily: {
      sans: [
        'Proxima Nova, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      ]
    },
    extend: {
      colors: {
        primary: {
          30: 'hsl(39, 90%, 68%)',
          40: 'hsl(39, 92%, 61%)',
          50: 'hsl(39, 100%, 48%)',
          60: 'hsl(39, 100%, 44%)',
        },
        secondary: {
          10: 'hsl(201, 100%, 95%)',
          40: 'hsl(202, 100%, 65%)',
          70: 'hsl(202, 100%, 35%)',
          90: 'hsl(202, 100%, 20%)',
        },
      },
    },
  },
};
