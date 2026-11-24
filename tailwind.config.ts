import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2EFE9",
        ink: "#0B0B0B",
        red: "#FF1E1E",
        line: "#1A1A1A",
        muted: "#5E5A53",
      },
      fontFamily: {
        display: ["Anton", "Arial Narrow", "Impact", "sans-serif"],
        black: ["Archivo Black", "Arial Black", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      maxWidth: {
        page: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
