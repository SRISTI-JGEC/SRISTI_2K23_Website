import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "event-back-image":
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/Images/events-bg.jpg')",
        "rule-bg": "url('/Images/Untitled-2.png')",
      },
    },
    fontFamily: {
      harry: ["Harry P", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
