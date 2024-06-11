/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // For these fonts to work in prodcution, you need to write them like and embed them in the <head> tag in the index html
      fontFamily: {
        serif: "Playfair Display, system-ui, serif",
        bodoni: "Bodoni Moda, system-ui, serif",
      },
      screens: {
        "3xl": "1920px",
      },
      //
      lineHeight: {
        // line height that's based from the design. It also fits with leading-tight but I'm going to plug in my own custom value from my own design here.
        "custom-height": "1.25",
      },
    },
  },
  plugins: [],
};
