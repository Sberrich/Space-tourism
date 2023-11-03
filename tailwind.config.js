/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        BarlowCondensed: ['Barlow Condensed'],
      },
      colors: {
        spaceBlack: 'hsla(0, 0%, 0%, 1)',
        spaceLightBlack: 'hsla(229, 35%, 7%, 1)',
        spaceWhite: 'hsla(0, 0%, 100%, 1)',
        spaceLightWhite: 'hsla(0, 0%, 100%, 0.04)',
        spaceGray: 'hsla(230, 10%, 42%, 1)',
        spaceLightGray: 'hsla(231, 79%, 90%, 1)',

      },
      width: {
        '128': '1440px',
      },
      height: {
        '128': '3352px',

      },
      letterSpacing: {
        'custom-spacing': '4.05px',
      }
    }
  },
  plugins: [],
}
