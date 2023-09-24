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
        leaderboard_Image: "url('/Images/leaderboard.jpg')",
        home_bg: "url('/Images/home.jpg')",
      },
    },
    fontFamily: {
      griffy: ["Griffy", "cursive"],
      harry: ["Harry P", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
<<<<<<< HEAD
    require('@tailwindcss/typography'),
=======
    require('tailwind-scrollbar'),
>>>>>>> 3ca2e3a161ff17372e13ce1857bae6a2104457a5
],
};
export default config;
