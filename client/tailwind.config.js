/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        teal: "#00ADB5",
        teall: "#80d6da",
        grey: "#393E46",
        greyy: "#222831",
        gre: "#9c9fa3",
      },
    },
    plugins: [],
  },
};
