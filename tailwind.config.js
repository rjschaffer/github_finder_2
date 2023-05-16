/** @type {import('tailwindcss').Config} */

const { join } = require('path');

export default {
  content: [
    join(__dirname, "/index.html"),
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}



