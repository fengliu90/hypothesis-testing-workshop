import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#123047",
        slate: "#304e63",
        teal: "#0f766e",
        mist: "#eff6f6",
        line: "#d8e5e8",
      },
      boxShadow: {
        panel: "0 10px 30px rgba(18, 48, 71, 0.06)",
      },
      fontFamily: {
        sans: ["'IBM Plex Sans'", "'Segoe UI'", "sans-serif"],
        serif: ["'Iowan Old Style'", "'Palatino Linotype'", "'Book Antiqua'", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
