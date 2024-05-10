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
        ["color-primary-accent"]: "var(--color-primary-accent)",
        ["color-primary"]: "var(--color-primary)",
        ["color-button"]: "var(--color-button)",
        ["color-paragraph"]: "var(--color-paragraph)",
        ["color-button-text"]: "var(--color-button-text)",
        ["color-primary-bg"]: "var(--color-primary-bg)",
        ["color-secondary-bg"]: "var(--color-secondary-bg)",
        ["color-line"]: "var(--color-line)",
      },
      keyframes: {
        fadeIn: {
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        rolling: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(1turn)" },
        },
        popIn: {
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        actHeaderFadeIn: "fadeIn .6s ease 1s forwards",
        actFooterFadeIn: "fadeIn .6s ease 1.4s forwards",
        actRolling: "rolling 15s linear infinite",
        actAboutShowOne: "fadeIn 1.3s .1s forwards",
        actAboutShowTwo: "fadeIn 1.3s .3s forwards",
        actAboutShowThree: "fadeIn 1.3s .5s forwards",
        actPopShow: "popIn 0.8s cubic-bezier(.175,.885,.32,1.275) forwards",
        actProjcetFadeInOne: "fadeIn .8s ease .3s forwards",
        actProjcetFadeInTwo: "fadeIn .8s ease .4s forwards",
        actProjcetFadeInThree: "fadeIn .4s ease .8s forwards",
      },
      fontFamily: {
        PGG: ["PuradakGentleGothicR"],
        Abel: ["Abel", "sans-serif"],
        Sedan: ["Sedan SC", "serif"],
      },
    },
  },
};

export default config;
