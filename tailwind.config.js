const config = {
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
        'custom-gray': '#282B30',
      },
      fontFamily: {
        "abc-monument": ['"ABC Monument Grotesk"', "sans-serif"],
        "lakonet": ['Lakonet', 'sans-serif']
      },
      screens: {
        "xs": "380px",
        "sm": "640px",
        "md": "768px",
        "mg": "840px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      }
    },
  },
  plugins: [],
};
export default config;
