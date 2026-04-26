module.exports = {
  content: ["./src/**/*.{njk,html,js,md}"],
  safelist: ['backdrop-blur-xl'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: '#0a0a0a',
        accent: '#c8ff00',
      }
    },
  },
  plugins: [],
};
