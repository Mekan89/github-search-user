module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        bgCol: "#22272d",
        navCol: "#2d333b",
        linkCol: "#dd7f61",
        titleCol: "#d3d4d6",
        pryCol: "#758390",
        borderCol: "#454c56",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
