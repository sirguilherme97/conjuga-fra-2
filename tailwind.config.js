module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        rep: '#808000',
      },
      fontFamily: {
        'sans': 'Roboto, sans-serif'
      },
      screens: {
        '2xl': { 'max': '1535px' },
        'xl': { 'max': '1279px' },
        'lg': { 'max': '1023px' },
        'md': { 'max': '767px' },
        'sm': { 'max': '639px' },
        'xs': { 'max': '460px' },
      }
    },
  },
  plugins: [],
}
