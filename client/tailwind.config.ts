/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./client/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        backgroundImage: {
          'logo': "url('/logo.png')",
          'home1': "url('/home1.jpg')",
          'home2': "url('/home2.jpg')",
          'home3': "url('/home3.jpg')",
          'home4': "url('/home4.jpg')",
          'home5': "url('/home5.jpg')",
          'home6': "url('/home6.jpg')",
          'home7': "url('/home7.jpg')",
        },
      },
    },
    plugins: [],
  };