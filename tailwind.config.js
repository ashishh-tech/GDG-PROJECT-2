/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors used throughout the Precision Agency website
      colors: {
        primary: '#003EC7',       // Main blue color
        dark: '#131B2E',          // Dark navy for headings
        gray: '#434656',          // Body text gray
        lightbg: '#FAF8FF',       // Light page backgrounds
        cardbg: '#F2F3FF',        // Card backgrounds
        inputbg: '#F8FAFD',       // Input field backgrounds
        border: '#C3C5D9',        // Border color
        capsule: '#E2E7FF',       // Capsule/tag background
        green: '#005A3C',         // Green accent text
        footerbg: '#F8FAFD',      // Footer background
      },
      // Custom fonts - Inter for body, Manrope for headings
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
