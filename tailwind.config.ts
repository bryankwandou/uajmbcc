import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "var(--bg)",
          900: "var(--surface)",
          800: "var(--surface-2)",
        },
        accent: "var(--accent)",
        seal: "var(--seal)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
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
