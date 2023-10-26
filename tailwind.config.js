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
      backgroundColor: {
        "gradient-tr":
          "linear-gradient(to top right, #fbfad3, #c6e377, #729d39, #36622b, #6fc4a4, #f7859b)",
      },
    },
  },
  plugins: [],
}
