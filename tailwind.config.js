const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/src/assets/WhatsApp Video 2024-01-02 at 16.15.32.mp4')"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}