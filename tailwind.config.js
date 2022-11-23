/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "serif"],
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: [],
};
