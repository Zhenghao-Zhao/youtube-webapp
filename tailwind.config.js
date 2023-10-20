import color from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: {
          hover: 'var(--btn-hover)',
          primary: 'var(--btn-primary)',
          select: 'var(--btn-select)',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

