/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'custom-aqua':'#00FFFF',
        'custom-background':'rgba(0,0,0,0.25)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(15px)',
        
      },
    },
  },
  plugins: [],
};
