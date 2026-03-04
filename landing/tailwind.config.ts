import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#25D366",
          dark: "#1EB957",
          light: "#E9FBEF"
        },
        ink: "#0F172A"
      },
      boxShadow: {
        soft: "0 14px 40px rgba(15, 23, 42, 0.08)",
        float: "0 18px 60px rgba(37, 211, 102, 0.16)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" }
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3.2s ease-in-out infinite",
        "reveal-up": "revealUp 0.8s ease forwards"
      }
    }
  },
  plugins: []
};

export default config;
