import type { Config } from "tailwindcss";
import { extendedTheme } from "./app/extended-theme";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      ...extendedTheme,
      fontFamily: {
        sans: ["var(--font-cooper-hewitt)"],
        mono: ["var(--font-cooper-hewitt)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
