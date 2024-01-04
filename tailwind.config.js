/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "var-yellow": "#FDCA09",
        "var-black": "#101010",
        "var-white": "#FFF",
        "var-primary-darker": "#FEC00A",
        "var-yellow-avatar": "#FEF1E0",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
