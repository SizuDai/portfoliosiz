const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'retro-yellow': '#FFFF00', // Bright yellow for text
        'retro-black': '#000000', // Deep black for background
      },
      borderWidth: {
        'pixel': '4px', // Custom border width to simulate pixel border
      },
      backgroundImage: {
        'vignette': 'radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.5) 100%)'
      },
      // Extend boxShadow for glow effect
      boxShadow: {
        'glow': '0 0 8px rgba(255, 255, 255, 0.6)'
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      // your config here
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      boxShadow: ['hover', 'focus']
    }
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

