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
        '7.5xl': '5.065rem',
      },
      spacing: {
        '18': '4.5rem',
        '38': '9.5rem',
        'full-w': '106%',
        'full-h': '120%',
      },
      colors: {
        darkslategrey: {
          600: '#083c48',
          500: '#0c5c6e',
        },
        steelgray: {
          500: '#191a24',
        },
        frost: {
          500: '#f4f8e7',
        },
        tango: {
          500: '#f47f20',
        }
      }
    },
  },
  plugins: [],
};
export default config;
