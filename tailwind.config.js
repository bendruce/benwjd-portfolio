/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.jsx",
    "./components/**/*.jsx", // Include components directory
    "./hooks/**/*.jsx", // Include hooks directory
    "./utils/**/*.jsx", // Include utils directory if Tailwind is used there
  ],
  theme: {
    extend: {
      colors: {
        "react-color": "#61DBFB",
        "sigma-color": "#B89769",
      },
      textColor: {
        "light-font": "#F7F7F7",
        "topnav-font": "#219ebc",
        "light-text": "#F7F7F7",
        "custom-lboro": "#a880e6",
      },
      fontFamily: {
        "font-custom-1": ["Cascadia Code", "monospace"],
        "font-custom-2": ['"DejaVu Sans"', "sans-serif"],
        "font-eb-garamond": ['"EB Garamond"', "serif"],
        "font-grand-slang-roman": ['"Grandslang Roman"', "sans-serif"],
        "noto-sans-jp": ['"Noto Sans JP"', "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};
