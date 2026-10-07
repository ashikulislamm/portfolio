import type { Config } from "tailwindcss";

const config: Config = {
  // Only apply hover styles on devices that can actually hover, so taps on
  // touch screens don't leave elements stuck in their hover state.
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        background: "var(--color-background)",
        "bg-void": "var(--bg-void)",
        "secondary-bg": "var(--color-secondary-bg)",
        "card-bg": "var(--color-card-bg)",
        "surface-elevated": "var(--color-surface-elevated)",
        "border-subtle": "var(--color-border-subtle)",
        "border-hover": "var(--color-border-hover)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        accent: "var(--color-accent)",
        cream: "var(--color-cream)",
        "cream-light": "var(--color-cream-light)",
        "cream-muted": "var(--color-cream-muted)",
        "nav-active": "var(--color-nav-active)",
        surface: "var(--color-secondary-bg)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Space Grotesk", "ui-sans-serif", "sans-serif"],
        display: ["var(--font-heading)", "Space Grotesk", "ui-sans-serif", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        cyber: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "cursor-blink": "cursor-blink 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
