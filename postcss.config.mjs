const config = {
  plugins: ["@tailwindcss/postcss"],
   theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 5s linear infinite', // Adjust duration as needed
      }
    },
  }
};

export default config;
