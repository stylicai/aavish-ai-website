import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        md: "3rem",
        lg: "5rem"
      },
      screens: {
        "2xl": "1480px"
      }
    },
    extend: {
      colors: {
        bg: {
          page: "var(--color-bg-page)",
          card: "var(--color-bg-card)",
          delivery: "var(--color-bg-delivery)",
          dark: "var(--color-bg-dark)",
          "dark-card": "var(--color-bg-dark-card)",
          orchestration: "var(--color-bg-orchestration)"
        },
        ink: {
          DEFAULT: "var(--color-text-primary)",
          body: "var(--color-text-body)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
          "dark-body": "var(--color-text-dark-body)"
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
          hover: "var(--color-accent-hover)",
          dark: "var(--color-accent-dark)"
        },
        line: {
          DEFAULT: "var(--color-border)",
          dark: "var(--color-border-dark)"
        },
        status: {
          success: "var(--color-success)",
          warning: "var(--color-warning)",
          error: "var(--color-error)"
        }
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
      },
      fontSize: {
        eyebrow: ["11px", { lineHeight: "1", letterSpacing: "0.15em" }],
        mono: ["13px", { lineHeight: "1.6" }],
        "body-sm": ["13px", { lineHeight: "1.6" }],
        body: ["15px", { lineHeight: "1.7" }],
        "body-lg": ["17px", { lineHeight: "1.7" }]
      },
      letterSpacing: {
        eyebrow: "0.15em",
        display: "-0.02em",
        "display-tight": "-0.03em"
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px"
      },
      boxShadow: {
        "card-hover": "0 18px 40px -28px rgba(255,112,0,0.35), 0 2px 8px -2px rgba(17,17,17,0.06)",
        "btn-primary": "0 8px 20px -12px rgba(255,112,0,0.55)",
        "inset-soft": "inset 0 1px 0 rgba(255,255,255,0.04)"
      },
      transitionTimingFunction: {
        entrance: "cubic-bezier(0.22, 1, 0.36, 1)",
        hover: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      keyframes: {
        "logo-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "caret-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" }
        },
        "connection-pulse": {
          "0%": { strokeDashoffset: "0", opacity: "0.5" },
          "50%": { opacity: "1" },
          "100%": { strokeDashoffset: "-16", opacity: "0.5" }
        },
        "node-ping": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.6)", opacity: "0" }
        },
        sheen: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" }
        },
        "ghost-cursor": {
          "0%":   { transform: "translate(8%, 12%)" },
          "25%":  { transform: "translate(62%, 18%)" },
          "55%":  { transform: "translate(48%, 64%)" },
          "80%":  { transform: "translate(20%, 70%)" },
          "100%": { transform: "translate(8%, 12%)" }
        }
      },
      animation: {
        "logo-scroll": "logo-scroll 28s linear infinite",
        float: "float 9s ease-in-out infinite",
        "caret-blink": "caret-blink 1s steps(2, end) infinite",
        "connection-pulse": "connection-pulse 3.4s ease-in-out infinite",
        "node-ping": "node-ping 2.6s cubic-bezier(0, 0, 0.2, 1) infinite",
        sheen: "sheen 6s ease-in-out infinite",
        "ghost-cursor": "ghost-cursor 14s cubic-bezier(0.4, 0, 0.2, 1) infinite"
      }
    }
  },
  plugins: []
};

export default config;
