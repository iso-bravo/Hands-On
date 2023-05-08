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
      padding:{
        '18': '4.3rem',
      },
      backgroundColor: theme =>({
        'primary': '#C0EEE4',
        'secondary':'#F9989F',
        'hoversecondary': '#FFBEC3',
        'seccion3fondo' : '#EDF9F6',
        'footer' : '#292D32'
      }),
      fontFamily: {
        Lexend: ['Lexend', "sans-serif"],
      },
    },
  },
  plugins: [],
}

