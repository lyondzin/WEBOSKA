/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Pastikan file HTML Anda disertakan
    "./feedback.html",
    './src/**/*.css' 
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-out', // Tambahkan animasi fade-in
      },
      keyframes: {
        'fade-in': { // Tambahkan keyframes untuk animasi fade-in
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
