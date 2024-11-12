import { type Config } from "tailwindcss";
import theme, { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "selector",
  theme: {
    extend: {
      fontSize: {
        'header-1': '2.5rem',
        'header-2': '2rem',
        'header-3': '1.5rem',
        'paragraph': '1rem',
        'small': '0.875rem',
        'copyright': '0.75rem'
      },
      colors: {
        'off-black': '#221E1E',
        'rouge-900': '#2E1310',
        'rouge-800': '#561B1A',
        'rouge-700': '#812123',
        'rouge-600': '#AE242D',
        'rouge-500': '#DE2437',
        'rouge-400': '#EF6A64',
        'rouge-300': '#FA9E95',
        'rouge-200': '#FFCFC9',
        'rouge-100': '#FFE7E4',
      },
      fontFamily: {
        'concert-one': ['Concert One', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace']
      },
    },
  },
  plugins: [],
} satisfies Config;
