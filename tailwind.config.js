/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#fbfad3",
        primaryGreen: "#c6e377",
        secondaryGreen: "#729d39",
        terciaryGreen: "#36622b",
        oceanGreen: "#6fc4a4",
        minimalPink: "#f7859b",
      },
    },
  },
  plugins: [],
}
