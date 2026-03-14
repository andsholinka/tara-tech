import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           "#181A2F",
        fg:           "#FDA481",
        primary:      "#B4182D",
        "primary-fg": "#FDA481",
        secondary:    "#FDA481",
        accent:       "#37415C",
        muted:        "#242E49",
        "muted-fg":   "#FDA481",
        border:       "#37415C",
      },
      fontFamily: {
        heading: ["'Fraunces'", "serif"],
        sans:    ["'Nunito'", "sans-serif"],
      },
      boxShadow: {
        soft:  "0 4px 20px -2px rgba(180,24,45,0.2)",
        float: "0 10px 40px -10px rgba(253,164,129,0.25)",
        lift:  "0 20px 40px -10px rgba(180,24,45,0.3)",
      },
    },
  },
  plugins: [],
}
export default config
