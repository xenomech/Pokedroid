/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          0: "#EEEDDE",
          1: "#EAB308",
          2: "#1f1f1f",
        },
      },
      maxWidth: {
        button: "110px",
      },
    },
  },
  plugins: [],
};
