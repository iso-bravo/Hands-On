/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme =>({
        'primary': '#C0EEE4',
        'secondary':'#F9989F',
        'hoversecondary': '#FFBEC3'
      }),
      fontFamily: {
        Lexend: ['Lexend', "sans-serif"],
      },
    },
  },
  plugins: [],
}

