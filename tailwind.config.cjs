/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  darkMode: false,
    theme: {
        extend: {
            spacing: {
                72: '18rem',
                84: '21rem',
                96: '24rem',
                108: '27rem',
                120: '30rem',
                132: '33rem',
                144: '36rem',
                156: '39rem',
                168: '42rem',
                180: '45rem',
              },
            fontSize: {
                '1xs': '0.70rem',
                '2xs': '0.65rem',
                '3xs': '0.60rem',
                '4xs': '0.55rem',
                '5xs': '0.50rem',
              },
            screens: {
                xs: '480px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px'
              },
        },
    },
  plugins: [
    require('@tailwindcss/forms'),
    ],
}