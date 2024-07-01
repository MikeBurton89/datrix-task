/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "20/80": "20% 80%",
      },
      gridTemplateRows: {
        "10/90": "10% 90%",
      },
    },
  },
  plugins: [],
};
