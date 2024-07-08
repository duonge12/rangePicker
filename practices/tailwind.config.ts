import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      spacing: {
        '100': '200px', // Example value, adjust as needed
      },
      colors:{
        grey:{
          10:'rgba(20, 20, 20, 1)',
          20:'rgba(54, 54, 54, 1)',
          50:'rgba(128, 128, 128, 1)',
          70:'rgba(179, 179, 179, 1)',
          95:'rgba(242, 242, 242, 1)'

        },
        mint:{
          300:'rgba(171, 255, 195, 1)',
          900:'rgba(64, 160, 91, 1)',
        },
        error:{
          600:'rgba(233, 56, 13, 1)'
        },
        success:{
          600:'rgba(0, 163, 68, 1)'
        }
      },
    },
  },
  plugins: [],
};
export default config;
