/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md: "820px",
        xs: "375px"
      },
    },
  },
  plugins: [],
}
