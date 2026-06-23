/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas:  '#F9F5E3',
        maroon:  '#66101F',
        ink:     '#0B3948',
        sienna:  '#65472A',
        prose:   '#3f5963',
        powder:  '#84ACCE',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"Space Mono"', 'monospace'],
        hand:  ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
