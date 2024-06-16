/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#FFEFEF",
        primary: "#FF7D29",
        glass: "rgba(214, 214, 214, 0.6)",
        mainBackground: "#DDDDDD",
        textColor: "#7E8EF1",
        footerColor: "#686D76",
        footerText: "#B5C0D0",
      },
    },
  },
  plugins: [],
};
