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
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    },
      padding:{
        '18': '4.3rem',
      },
      backgroundColor: theme =>({
        'primary': '#89DAEC',
        'secondary':'#F9989F',
        'hoversecondary': '#FFBEC3',
        'seccion3fondo' : '#FF78B2',
        'footer' : '#292D32'
      }),
      fontFamily: {
        Lexend: ['Lexend', "sans-serif"],
      },
    },
  },
  plugins: [],
}

