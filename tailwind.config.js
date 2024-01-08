/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          500: "#246BFD",
        },
        dark: {
          100: "#23262F",
        },
        slate: {
          25: "#FCFCFD",
          200: "#E2E5E9",
          500: "#515662",
          600: "#31363F",
          700: "#202328",
        },
      },
    },
  },
  plugins: [],
};
