/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#2b2629",
          "200": "#1d1a1c",
          "300": "#181618",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "#d0dbd6",
        },
        mintcream: "#f7fffb",
        lightseagreen: "#00a795",
        dimgray: "#72656d",
        darkcyan: "#00897c",
        darkslategray: "#353a38",
        aqua: "#69fff6",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        manrope: "Manrope",
      },
      borderRadius: {
        "29xl": "48px",
        "13xl": "32px",
        "21xl": "40px",
        "381xl": "400px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "32xl": "51px",
      "3xl": "22px",
      "48xl": "67px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
