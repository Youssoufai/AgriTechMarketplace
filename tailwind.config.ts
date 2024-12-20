import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "color": "#11132A",
        "color2": "#343434",
        "color3": "#108A00",
        "about-bg": "#F2F5FA"
      },
      fontFamily: {
        'parkinsans': ['Parkinsans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
