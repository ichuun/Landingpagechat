/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors:{
        primary: '#4A72FF',
      },
      fontFamily:{
        primary: 'DM Sans',
        ssp: 'Source Sans Pro',
      },
    },
  },
  plugins: [],
};
