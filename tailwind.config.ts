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
        'full-w': '106%',
        'full-h': '120%',
      },
      colors: {
        darkslategrey: {
          600: '#083c48',
          500: '#0c5c6e',
        },
        steelgrey: {
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
      }
    },
  },
  plugins: [],
};
export default config;
