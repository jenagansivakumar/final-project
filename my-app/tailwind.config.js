/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        colors: {
          pink: "#ff69b4",
        },
        colors: {
          "primary-orange": "#FF5722",
          "primary-orange-light": "#FF8A65",
          "primary-orange-dark": "#E64A19",
          "primary-blue": "#2196F3",
          "primary-blue-light": "#64B5F6",
          "primary-blue-dark": "#1976D2",
          "primary-green": "#4CAF50",
          "primary-green-light": "#81C784",
          "primary-green-dark": "#388E3C",
          "primary-pink": "#E91E63",
        },
      },
    },
    plugins: [],
  },
};
