import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060B",
          900: "#0A0B12",
          800: "#11131E",
          700: "#1A1D2E",
        },
        violet: {
          glow: "#7C5CFF",
        },
        cyan: {
          glow: "#22D3EE",
        },
        amber: {
          glow: "#FBBF24",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        gridpan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gridpan: "gridpan 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
