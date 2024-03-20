import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        DEFAULT: "0px 2px 4px 0px rgba(0, 0, 0, 0.20)",
      },
    },
    colors: {
      white: "#ffffff",
      gray: {
        100: "#F5F6F8",
        200: "#E9EBF0",
        300: "#DADCE2",
      },
      black: "#000000",
    },
    fontFamily: {
      alka: ["Alkalami", "sans-serif"],
    },
  },
};

export default config;
