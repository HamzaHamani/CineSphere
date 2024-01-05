import type { Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xxl: { max: "1440px" },
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      s: { max: "425px" },
      xs: { max: "375px" },
      xxs: { max: "320px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        pop: ["var(--font-poppins)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        textMain: {
          50: "var(--textMain-50)",
          100: "var(--textMain-100)",
          200: "var(--textMain-200)",
          300: "var(--textMain-300)",
          400: "var(--textMain-400)",
          500: "var(--textMain-500)",
          600: "var(--textMain-600)",
          700: "var(--textMain-700)",
          800: "var(--textMain-800)",
          900: "var(--textMain-900)",
          950: "var(--textMain-950)",
        },
        backgroundMain: {
          50: "var(--backgroundMain-50)",
          100: "var(--backgroundMain-100)",
          200: "var(--backgroundMain-200)",
          300: "var(--backgroundMain-300)",
          400: "var(--backgroundMain-400)",
          500: "var(--backgroundMain-500)",
          600: "var(--backgroundMain-600)",
          700: "var(--backgroundMain-700)",
          800: "var(--backgroundMain-800)",
          900: "var(--backgroundMain-900)",
          950: "var(--backgroundMain-950)",
        },

        primaryMain: {
          50: "var(--primaryMain-50)",
          100: "var(--primaryMain-100)",
          200: "var(--primaryMain-200)",
          300: "var(--primaryMain-300)",
          400: "var(--primaryMain-400)",
          500: "var(--primaryMain-500)",
          600: "var(--primaryMain-600)",
          700: "var(--primaryMain-700)",
          800: "var(--primaryMain-800)",
          900: "var(--primaryMain-900)",
          950: "var(--primaryMain-950)",
        },
        secondaryMain: {
          50: "var(--secondaryMain-50)",
          100: "var(--secondaryMain-100)",
          200: "var(--secondaryMain-200)",
          300: "var(--secondaryMain-300)",
          400: "var(--secondaryMain-400)",
          500: "var(--secondaryMain-500)",
          600: "var(--secondaryMain-600)",
          700: "var(--secondaryMain-700)",
          800: "var(--secondaryMain-800)",
          900: "var(--secondaryMain-900)",
          950: "var(--secondaryMain-950)",
        },
        accentMain: {
          50: "var(--accentMain-50)",
          100: "var(--accentMain-100)",
          200: "var(--accentMain-200)",
          300: "var(--accentMain-300)",
          400: "var(--accentMain-400)",
          500: "var(--accentMain-500)",
          600: "var(--accentMain-600)",
          700: "var(--accentMain-700)",
          800: "var(--accentMain-800)",
          900: "var(--accentMain-900)",
          950: "var(--accentMain-950)",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
