/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#F5F0E8',
        espresso: '#2C1A0E',
        caramel: '#C4783A',
        cream: '#EDE8DC',
        chalkboard: '#1C2B1C',
        latte: '#8B6347',
        steam: '#F0E6D3',
        mocha: '#6B3F1F',
        fog: '#B8A898',
        darkroast: '#1A0F08',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'paper-texture':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
