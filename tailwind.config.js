/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // 기본 HTML 파일
    './src/**/*.{vue,js,ts,jsx,tsx}', // src 폴더 내 모든 Vue 및 JS/TS 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
