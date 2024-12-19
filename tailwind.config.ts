import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "rgb(var(--clr-background))",
      surface: "rgb(var(--clr-surface))",
      foreground: "rgb(var(--clr-foreground))",
      primary: "rgb(var(--clr-primary))",
      secondary: "rgb(var(--clr-secondary))",
    },
    extend: {
      boxShadow: {
        100: "2px 2px 0px 0px rgb(var(--clr-foreground))",
        200: "2px 2px 0px 2px rgb(var(--clr-foreground))",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "Trebuchet MS"],
      },
    },
  },
  plugins: [typography, tailwindcssAnimate],
} satisfies Config;
