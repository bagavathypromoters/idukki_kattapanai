/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { forest: "#1f3a2b", moss: "#5f8a4b", mist: "#eef2ec", ink: "#14211a", gold: "#c9a227" },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Figtree", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
