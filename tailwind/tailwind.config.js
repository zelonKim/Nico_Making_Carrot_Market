/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ // Tailwind를 사용할 파일들을 명시해줌.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class", 
  plugins: [require("@tailwindcss/forms")],
}
