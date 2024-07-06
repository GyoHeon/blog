import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{ts,tsx,mdx}", "./src/components/**/*.{ts,tsx,mdx}", "./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "text-main": "16px",
        "text-small": "14px",
        "text-xsmall": "12px",
        "text-2xs": "10px",
      },
    },
  },
  plugins: [],
};

export default config;
