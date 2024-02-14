/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      aquamarine: {
        50: "#ebfef7",
        100: "#cffcea",
        200: "#a3f7d9",
        300: "#68edc7",
        400: "#2cdbae",
        500: "#08c199",
        600: "#009d7d",
        700: "#007e67",
        800: "#026353",
        900: "#025246",
        950: "#002e28",
      },
      turbo: {
        50: "#feffe7",
        100: "#fbffc1",
        200: "#fbff86",
        300: "#fffd41",
        400: "#fff00d",
        500: "#ffe200",
        600: "#d1a700",
        700: "#a67802",
        800: "#895d0a",
        900: "#744c0f",
        950: "#442804",
      },
      cancel: {
        50: "#FF9CA9",
      },
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      useFormClasses: true,
    }),
  ],
};
