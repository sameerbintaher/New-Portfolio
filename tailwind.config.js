/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6",
          dark: "#60A5FA",
        },
        background: {
          light: "#F9FAFB",
          dark: "#111827",
        },
        card: {
          light: "#FFFFFF",
          dark: "#1F2937",
        },
      },
      boxShadow: {
        "custom-light": "0 0 15px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 0 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
