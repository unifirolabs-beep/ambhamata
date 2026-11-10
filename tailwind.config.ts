import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        xs: "100%",
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1800px",
      },
    },
    extend: {
      colors: {
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
        // Dedicated Brand Tokens
        brand: {
          yellow: {
            DEFAULT: "hsl(var(--brand-yellow))",
            light: "hsl(var(--brand-yellow-light))",
            subtle: "hsl(var(--brand-yellow-subtle))",
            dark: "hsl(var(--brand-yellow-dark))",
          },
          red: {
            DEFAULT: "hsl(var(--brand-red))",
            light: "hsl(var(--brand-red-light))",
            subtle: "hsl(var(--brand-red-subtle))",
            dark: "hsl(var(--brand-red-dark))",
            deep: "hsl(var(--brand-red-deep))",
          },
          white: "hsl(var(--brand-white))",
          cream: "hsl(var(--brand-cream))",
        },
      },
      fontFamily: {
        sans: ["'Lato'", "var(--font-inter)", "var(--font-noto-kannada)", "var(--font-noto-devanagari)", "var(--font-noto-telugu)", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial", "sans-serif"],
        serif: ["'Lato'", "var(--font-inter)", "var(--font-noto-kannada)", "var(--font-noto-devanagari)", "var(--font-noto-telugu)", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial", "sans-serif"],
        english: ["'Lato'", "var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        kannada: ["var(--font-noto-kannada)", "sans-serif"],
        hindi: ["var(--font-noto-devanagari)", "sans-serif"],
        telugu: ["var(--font-noto-telugu)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "temple-sm": "0 1px 3px 0 rgba(166, 25, 50, 0.05), 0 1px 2px -1px rgba(166, 25, 50, 0.05)",
        "temple-md": "0 4px 6px -1px rgba(166, 25, 50, 0.07), 0 2px 4px -2px rgba(166, 25, 50, 0.05)",
        "temple-lg": "0 10px 15px -3px rgba(166, 25, 50, 0.08), 0 4px 6px -4px rgba(166, 25, 50, 0.05)",
        "temple-gold": "0 4px 20px 0 rgba(244, 197, 66, 0.28)",
        "temple-kumkum": "0 4px 20px 0 rgba(166, 25, 50, 0.18)",
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
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        ticker: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        ticker: "ticker 32s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
