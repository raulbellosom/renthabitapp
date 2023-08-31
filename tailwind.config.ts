import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        rha_primary_yellow: "#F8B500",
        rha_primary_dark: "#393E46",
        rha_primary_gray: "#505762",
        rha_primary_yellow_light: "#FFC62C",
        rha_primary_yellow_dark: "#C59000",
      },
    },
  },
  plugins: [],
};
export default config;
