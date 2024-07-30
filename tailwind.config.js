/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/bg.jpg')",
        "carousel-image": "url('/billie_bg.png')",
      },
      colors: {
        primary: `hsl(14, 86%, 42%)`,
        secondary: `hsl(159, 69%, 38%)`,
        Rose50: `hsl(20, 50%, 98%)`,
        Rose100: `hsl(13, 31%, 94%)`,
        Rose300: `hsl(14, 25%, 72%)`,
        Rose400: `hsl(7, 20%, 60%)`,
        Rose500: `hsl(12, 20%, 44%)`,
        Rose900: `hsl(14, 65%, 9%)`,
      },
      screens: {
        xs: "375px",
        sm: "440px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        RedHat: ["Red Hat Text", "sans-serif"],
      },
      fontSize: {
        ProductName: "16px",
      },
    },
  },
  plugins: [],
};
