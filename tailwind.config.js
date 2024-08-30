/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkBlack: "#1D0707",
        customLightBlack: "#321418",
        customDarkMaroon: "#59141D",
        customLightMaroon: "#8F302E",
        customYellow: "#E0A405",
      },
      fontFamily: {
        netflix: ["Montserrat", "sans-serif"],
        pixel: ["Pixelify Sans", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
      },
      fontSize: {
        "7xl": "80px",
      },
    },
  },

  plugins: [],
};
