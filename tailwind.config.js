/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      400: "24rem",
    },
    extend: {
      colors: {
        bg: "#CAD2C5",
        secondary: "#84A98C",
        secondaryy: "#84A98C",
        tertiary: "#52796F",
        quaternary: "#354F52",
        quinary: "#2F3E46",
        bgNavbar: "#292626cc",
        bgNavbarGreen: "#84a98c80",
        bgNavbarGreenSolid: "#84A98C",
        bgNavbarBlack: "#292626",
      },
      fontSize: {
        desciption: "11px",
      },
    },
    screens: {
      imgProduct: "400px",
      sm: '640px',

      md: '768px',

      lg: '1024px',
    }
  },
  plugins: [],
};
