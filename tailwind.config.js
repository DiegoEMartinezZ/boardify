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
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      useFormClasses: true,
    }),
  ],
};
