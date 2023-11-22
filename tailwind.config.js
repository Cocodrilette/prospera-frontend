/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
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
    keyframes: {
      levitate: {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-5px)",
        },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      levitate: "levitate 3s ease-in-out infinite",
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [require("flowbite/plugin")],
}
