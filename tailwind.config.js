module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      signature: ['Great Vibes', 'cursive'],
    },
    colors: {
      gray: '#818181',
      'light-gray': '#D9D9D9',
      black: '#181818',
      'gray-light': '#f3efefe3',
      orange: '#26c2a5d2',
      white: '#FFFFFF',
      yellow: 'hsl(61, 100%, 67%)',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: () => ({
        'hero-pattern': 'url("/assets-hero.svg")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
