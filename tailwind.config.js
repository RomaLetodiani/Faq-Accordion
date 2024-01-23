/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'light-pink': '#f9f0ff',
        'grayish-purple': '#8c6991',
        'dark-purple': '#2f1533',
      },
      backgroundImage: {
        desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
        mobile: "url('/src/assets/images/background-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
};
