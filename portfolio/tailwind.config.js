/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '376px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1920px',
    },
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        blob: "blob 7s infinite",
        bounceSkew: "bounceSkew 1s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
          
        },
        bounceSkew: {
          "0%, 100%": {
            transform: "translateY(-25%)"
          },
          "50%": {
              transform: "scale(1, 0.9)",
          },
        },
      },
    }
  },
  plugins: [],
}
