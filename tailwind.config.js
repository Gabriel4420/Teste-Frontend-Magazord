/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Files that will use Tailwind (In our case, all extensions .tsx inside "src" folder)
    './src/**/*.tsx'
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // customize colors, fonts, ...
  // ps: colors palette = 100 (lighter) to 900 (darker)
  theme: {},
  plugins: []
}
