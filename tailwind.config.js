/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fop: {
          dark: "#09090b",
          accent: "#fcd34d",
          accentHover: "#fbbf24",
          muted: "#a1a1aa",
        },
      },
      fontFamily: {
        sans: ['"Poppins"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
