/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        deepYellow: "#FAA826",
        deepBlue:"#0C1844"
      }
    },
  },
  plugins: [],
}

