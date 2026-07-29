import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["var(--font-kanit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        bg: "#0C0C0C",
        ink: "#0C0C0C",
        mist: "#D7E2EA",
        paper: "#EEF0EA",
        lime: "#C6FF4D",
        line: "#242424",
        "line-light": "#DADCD4",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%" },
          "50%": { borderRadius: "60% 40% 35% 65% / 55% 60% 40% 45%" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-rev": "marquee-rev 38s linear infinite",
        blob: "blob 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
