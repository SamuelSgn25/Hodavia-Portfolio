/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
