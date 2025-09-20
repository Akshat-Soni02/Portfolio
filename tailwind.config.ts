/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: "#915EFF",
        "accent-light": "#B084FF",
        "accent-dark": "#7A4BCC",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "accent-glow": "0 0 20px rgba(145, 94, 255, 0.3)",
        "accent-glow-lg": "0 0 40px rgba(145, 94, 255, 0.4)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
