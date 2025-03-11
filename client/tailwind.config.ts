/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./client/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        backgroundImage: {
          'logo': "url('/logo.png')",
        },
      },
    },
    plugins: [],
  };