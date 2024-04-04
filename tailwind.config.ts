import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '832px',
        'mobile': {min: '640px', max: '831px'} // special for video element
      },
      boxShadow: {
        'xl-up': '0 -1px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.2);'
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '5.25xl': '3.25rem',
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
        '59': '14.5rem', 
        '69': '17.25rem',
        '88': '22rem',
        '92': '23rem',
        // 'full-w': '106%',
        // 'full-h': '120%',
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
        'card-pattern-none': 'linear-gradient(135deg, rgba(245, 245, 245, 1) 20%, rgba(245, 245, 245, 1) 100%)',
      },
      keyframes: {
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
        'slide-firstly': 'slide 68s linear -34s infinite',
        'slide': 'slide 68s linear infinite',
        'slide-slower-firstly': 'slide-slower 92s linear -46s infinite',
        'slide-slower': 'slide-slower 92s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
