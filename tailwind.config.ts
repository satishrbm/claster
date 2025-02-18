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
        primary: "#B11F29"
      },
      backgroundImage: {
        'hero-bg': "url('/images/hero-bg.png')",
        'body-bg': "url('/images/body-bg.png')"
      },
      fontFamily: {
        ropa: ['RopaMixSCPTT', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
