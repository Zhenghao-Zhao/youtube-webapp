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
        },
        backdrop: 'var(--backdrop)',
        scrollthumb: 'var(--scrollthumb)',
        'scrollthumb-light': 'var(--scrollthumb-light)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      spacing: {
        'guide-small': 'var(--guide-small)',
        'guide-normal': 'var(--guide-normal)',
      },
      screens: {
        'smGb': '820px',
        'lgGb': '1310px',
      }
    },
  },
  plugins: [],
}

