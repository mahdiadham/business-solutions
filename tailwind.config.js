/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        dmSansRegular: "DM Sans Regular",
        dmSansMedium: "DM Sans Medium",
        dmSansBold: "DM Sans Bold",
        rubikRegular: "Rubik Regular",
        rubikMedium: "Rubik Medium",
        robotoRegular: "Roboto Regular",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      boxShadow: {
        normal: "0px 22px 18px 0px rgba(0, 0, 0, 0.05)",
      },
      lineHeight: {
        normal: "26px",
      },
    },
    screens: {
      'xs': "360px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}

