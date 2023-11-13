/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7D1B",
        secondary: "#212121",
        gradientOne: "#FFBB87",
        gradientTwo: "#FF852B",
        lighterGray: "#D9D9D9",
        lightGray: "#C4C4C4",
      },
    },
  },
  plugins: [],
};
