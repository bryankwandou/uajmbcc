import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0B",
          900: "#101013",
          800: "#16161A",
        },
        gold: {
          DEFAULT: "#D8AC4E",
          soft: "#E8BF67",
        },
        bone: {
          DEFAULT: "#F0EEE8",
        },
      },
      fontFamily: {
        display: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "2px",
      },
      transitionTimingFunction: {
        crisp: "cubic-bezier(0.2, 0.7, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
