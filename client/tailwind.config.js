/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#FF2F09",
        tertiary: "#0085FF",
        error: "#FF2F09",
        success: "#10FF70",
        white: "#fff",
      },
      backgroundColor: {
        primary: "#FFFFFF",
        secondary: "#FF2F09",
        tertiary: "#FAFAFA",
        error: "#FF9D8B",
        success: "#10FF70",
      },
    },
  },
  plugins: [],
};
