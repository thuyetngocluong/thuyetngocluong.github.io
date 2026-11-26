/** Build: npx tailwindcss@3.4.17 -i css/tailwind.input.css -o css/tailwind.css --minify */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        primaryDark: '#0051D5',
        indigo: '#5856D6',
        ink: '#1d1d1f',
        sub: '#6e6e73',
        line: '#e7e7ee',
        mist: '#f5f5f7',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
};
