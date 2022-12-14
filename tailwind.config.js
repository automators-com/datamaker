/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
      },
      fontFamily: {
        JetBrainsMono: [
          "var(--jetbrains-font)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        "primary-focus": "hsl(var(--color-primary-focus) / <alpha-value>)",
        "primary-content": "hsl(var(--color-primary-content) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        "secondary-focus": "hsl(var(--color-secondary-focus) / <alpha-value>)",
        "secondary-content":
          "hsl(var(--color-secondary-content)/<alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        "accent-focus": "hsl(var(--color-accent-focus) / <alpha-value>)",
        "accent-content": "hsl(var(--color-accent-content) / <alpha-value>)",
        neutral: "hsl(var(--color-neutral) / <alpha-value>)",
        "neutral-focus": "hsl(var(--color-neutral-focus) / <alpha-value>)",
        "neutral-content": "hsl(var(--color-neutral-content) / <alpha-value>)",
        "base-100": "hsl(var(--color-base-100) / <alpha-value>)",
        "base-200": "hsl(var(--color-base-200) / <alpha-value>)",
        "base-300": "hsl(var(--color-base-300) / <alpha-value>)",
        "base-content": "hsl(var(--color-base-content) / <alpha-value>)",
        info: "hsl(var(--color-info) / <alpha-value>)",
        "info-content": "hsl(var(--color-info-content) / <alpha-value>)",
        success: "hsl(var(--color-success) / <alpha-value>)",
        "success-content": "hsl(var(--color-success-content) / <alpha-value>)",
        warning: "hsl(var(--color-warning) / <alpha-value>)",
        "warning-content": "hsl(var(--color-warning-content) / <alpha-value>)",
        error: "hsl(var(--color-error) / <alpha-value>)",
        "error-content": "hsl(var(--color-error-content) / <alpha-value>)",
      },
      keyframes: {
        globe: {
          "0%,100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-30%)" },
        },
      },
      animation: {
        globe: "globe 60s linear infinite",
      },
    },
  },
  plugins: [],
};
