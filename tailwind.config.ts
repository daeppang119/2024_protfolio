import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#222",
        white: "#f1f1f1",
      },
      keyframes: {
        fadeIn: {
          // "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        rolling: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(1turn)" },
        },
      },
      animation: {
        actHeaderFadeIn: "fadeIn .6s ease 1s forwards",
        actFooterFadeIn: "fadeIn .6s ease 1.4s forwards",
        actRolling: "rolling 15s linear infinite",
        actAboutShowOne: "fadeIn 1.3s .1s forwards",
        actAboutShowTwo: "fadeIn 1.3s .3s forwards",
        actAboutShowThree: "fadeIn 1.3s .5s forwards",
      },
      fontFamily: {
        miracle: ["Miracle"],
        gowun: ["Gowun Batang", "serif"],
        sunflower: ["Sunflower", "sans-serif"],
      },
    },
  },
};

export default config;
