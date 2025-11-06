import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#05080f",
        aurora: "#1f5ed6",
        pulse: "#7f36ff",
        neon: "#12f7d6",
        graphite: "#1a1f2a",
        slate: "#2d3345"
      },
      backgroundImage: {
        grid: "linear-gradient(135deg, rgba(18,247,214,0.08) 0%, rgba(31,94,214,0.05) 50%, rgba(127,54,255,0.08) 100%)"
      },
      animation: {
        "slow-spin": "spin 40s linear infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
