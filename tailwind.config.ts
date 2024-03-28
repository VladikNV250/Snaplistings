import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5.5xl': '3.625rem', 
        '7.5xl': '5.065rem',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '33': '8.25rem',
        '38': '9.5rem',
        '50': '12.4rem',
        '58': '14.25rem',
        '59': '14.5rem', // 64 65     66    67    68  69    70    71    72
        '69': '17.25rem',// 16 16.25  16.5  16.75 17  17.25 17.5  17.75 18
        'full-w': '106%',
        'full-h': '120%',
      },
      colors: {
        darkslategray: {
          600: '#083c48',
          500: '#0c5c6e',
        },
        steelgray: {
          500: '#191a24',
        },
        frost: {
          100: '#f4f8e7',
          200: '#EDF4D9',
        },
        tango: {
          500: '#f47f20',
        }
      },
      backgroundImage: {
        'main-pattern': 'url("./../../public/bg.png")',
        'card-pattern': 'linear-gradient(135deg, rgba(245, 245, 245, 1) 20%, rgba(8, 60, 72, 0.2) 100%)',
        'card-pattern-none': 'linear-gradient(135deg, rgba(245, 245, 245, 1) 20%, rgba(245, 245, 245, 1) 100%)'
      },
      keyframes: {
        'slide-firstly': {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'}, 
        },
        'slide': {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(calc(-100% - 2536px))'}, 
        },
        'slide-slower': {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(calc(-100% - 3366px))'}, 
        }
      },
      animation: {
        'slide-firstly': 'slide-firstly 34s linear',
        'slide': 'slide 68s linear infinite',
        'slide-slower-firstly': 'slide-firstly 46s linear',
        'slide-slower': 'slide-slower 92s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
