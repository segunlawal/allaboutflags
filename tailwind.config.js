/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      height: {
        128: '42rem',
      },
    },
  },
  plugins: [],
};
