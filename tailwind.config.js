module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgCol: "#22272d",
        navCol: "#2d333b",
        linkCol: "#316dca",
        titleCol: "hsl(209,19%,73%,1)",
        pryCol: "#758390",
        borderCol: "#454c56",
      },
    },
  },
  plugins: [require("daisyui")],
};
