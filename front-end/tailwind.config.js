/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "primary-600": "#28a745",
        "primary-500": "#289241",
        "dark-600": "var(--dark)",
        "secondary-600": "var(--secondary)",
        "darker-600": "var(--darker)",
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant("rtl", '[dir="rtl"] &')
      addVariant("ltr", '[dir="ltr"] &')
    }
  ],
};
