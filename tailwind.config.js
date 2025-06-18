module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alata', 'sans-serif'],
        mono: ['Fira Mono', 'monospace'],
      },
    },
    screens: {
      uwxl: '1920px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
