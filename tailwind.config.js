/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        primary: "#b89786",
        secondary: "#d19d5e",
        accent: "#cb8f71",
        warning: "#ff77e9",

        bg: "#f8dda5",
        bg2: "#e5be92",
        bg3: "#ffefca",
        text: "rgb(186, 79, 61)",

        "header-bar-bg": "theme('colors.secondary')",
        "nav-bar-bg": "theme('colors.primary')",

        "shop-bg": "theme(colors.bg2)",
        "shop-item-bg": "theme('colors.bg3')",
        "footer-bg": "theme('colors.accent')",
      },

      spacing: {
        "3xs": "clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem)",
        "2xs": "clamp(0.56rem, calc(0.55rem + 0.09vw), 0.63rem)",
        xs: "clamp(0.88rem, calc(0.86rem + 0.09vw), 0.94rem)",
        s: "clamp(1.13rem, calc(1.09rem + 0.18vw), 1.25rem)",
        m: "clamp(1.69rem, calc(1.64rem + 0.27vw), 1.88rem)",
        l: "clamp(2.25rem, calc(2.19rem + 0.36vw), 2.5rem)",
        xl: "clamp(3.38rem, calc(3.28rem + 0.54vw), 3.75rem)",
        "2xl": "clamp(4.5rem, calc(4.38rem + 0.71vw), 5rem)",
        "3xl": "clamp(6.75rem, calc(6.56rem + 1.07vw), 7.5rem)",

        "header-bar-s": "theme(spacing.3xl)",
        "header-bar-l": "calc(theme('spacing.3xl') + theme('spacing.s'))",
        "btn-s": "theme('spacing.xl')",
        "btn-l": "calc(theme('spacing.xl') + theme('spacing.s'))",
        "shop-menu-img": "theme('spacing.3xl')",

        "shop-menu": "calc(3 * theme('spacing.header-bar-l')",

        gap: "theme('spacing.m')",
      },

      fontFamily: {
        btn: ["Satoshi Bold"],
      },

      fontSize: {
        s: "clamp(1.28rem, 0.13vw + 1.24rem, 1.43rem)",
        m: "clamp(1.6rem, 0.27vw + 1.52rem, 1.9rem)",
        l: "clamp(2rem, 0.48vw + 1.85rem, 2.53rem)",
        xl: "clamp(2.5rem, 0.8vw + 2.26rem, 3.38rem)",
        "2xl": "clamp(3.13rem, 1.25vw + 2.75rem, 4.5rem)",
        "3xl": "clamp(3.91rem, 1.9vw + 3.34rem, 6rem)",
        "4xl": "clamp(4.88rem, 2.83vw + 4.03rem, 8rem)",
      },
    },
  },
};




// PAGE WRAPPER: w-100 mx-auto max-w-screen-xl
// TEXT WRAPPER: 

// FLEX-COL: flex flex-col items-center justify-center
// FLEX-ROW: flex items-center justify-center

//
//
//
//
//
//
//
//
//
//
//

