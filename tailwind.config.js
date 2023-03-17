/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./AppExtended.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-barber": "#AE78D3",
        "primary-snackmen": "#77d2d1",
        "primary-closed": "#CCCCCC",
        "primary-black": "#1E1B1B",
        "secondary-black": "#353232",
      },
    },
  },
  plugins: [],
};
