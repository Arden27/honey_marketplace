/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      screens: {
        "max-lg": { max: "1023px" },
        "max-md": { max: "768px" },
      },

      colors: {
        primary: "hsl(33, 55%, 60%)",
        secondary: "hsl(33, 55%, 70%)",

        accent: "hsl(20, 50%, 60%)",
        accent2: "hsl(20, 50%, 65%)",
        warning: "hsl(9, 50%, 50%)",

        bg: "hsl(40, 85%, 80%)",
        bg2: "hsl(33, 65%, 65%)",
        bg3: "hsl(40, 100%, 86%)",
        text: "hsl(30, 70%, 18%)",

        header: "theme('colors.primary')",
        nav: "theme('colors.secondary')",
        "cart-bar": "theme('colors.secondary')",
        "cart-bar-item": "theme('colors.bg3')",

        "about-box": "theme(colors.bg2)",

        shop: "theme(colors.bg2)",
        "shop-item": "theme('colors.bg3')",

        footer: "theme('colors.secondary')",
        "footer-item": "theme('colors.bg3')",
      },

      spacing: {
        "3xs": "clamp(0.19rem, 0.17rem + 0.08vw, 0.25rem)",
        "2xs": "clamp(0.56rem, calc(0.55rem + 0.09vw), 0.63rem)",
        xs: "clamp(0.88rem, calc(0.86rem + 0.09vw), 0.94rem)",
        sm: "clamp(1.13rem, calc(1.09rem + 0.18vw), 1.25rem)",

        md: "clamp(1.25rem, calc(1.25rem + 0.27vw), 1.88rem)",
        lg: "clamp(2.25rem, calc(2.19rem + 0.36vw), 2.5rem)",
        xl: "clamp(3.38rem, calc(3.28rem + 0.54vw), 3.75rem)",
        "2xl": "clamp(4.5rem, calc(4.38rem + 0.71vw), 5rem)",
        "3xl": "clamp(6.75rem, calc(6.56rem + 1.07vw), 7.5rem)",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",

        // --space-3xs: clamp(0.19rem, 0.17rem + 0.08vw, 0.25rem);
        // --space-2xs: clamp(0.38rem, 0.36rem + 0.08vw, 0.44rem);
        // --space-xs: clamp(0.56rem, 0.53rem + 0.16vw, 0.69rem);
        // --space-s: clamp(0.75rem, 0.72rem + 0.16vw, 0.88rem);
        // --space-m: clamp(1.13rem, 1.08rem + 0.25vw, 1.31rem);
        // --space-l: clamp(1.50rem, 1.43rem + 0.33vw, 1.75rem);
        // --space-xl: clamp(2.25rem, 2.15rem + 0.49vw, 2.63rem);
        // --space-2xl: clamp(3.00rem, 2.87rem + 0.66vw, 3.50rem);
        // --space-3xl: clamp(4.50rem, 4.30rem + 0.99vw, 5.25rem);

        // ----3xs: clamp(0.82rem, -0.02vw + 0.82rem, 0.8rem);
        // ----2xs: clamp(1.02rem, 0.05vw + 1.01rem, 1.07rem);
        // ----sm: clamp(1.28rem, 0.15vw + 1.23rem, 1.43rem);
        // ----base: clamp(1.6rem, 0.31vw + 1.5rem, 1.9rem);
        // ----md: clamp(2rem, 0.55vw + 1.82rem, 2.53rem);
        // ----lg: clamp(2.5rem, 0.91vw + 2.21rem, 3.38rem);
        // ----xl: clamp(3.13rem, 1.43vw + 2.67rem, 4.5rem);
        // ----2xl: clamp(3.91rem, 2.18vw + 3.21rem, 6rem);
        // ----3xl: clamp(4.88rem, 3.24vw + 3.84rem, 8rem);

        gap: "theme('spacing.md')",

        "btn-sm": "theme('spacing.xl')",
        "btn-lg": "calc(theme('spacing.xl') + theme('spacing.sm'))",

        "header-sm": "theme(spacing.3xl)",
        "header-lg": "calc(theme('spacing.3xl') + theme('spacing.sm'))",

        "shop-menu-img": "theme('spacing.3xl')",
        "shop-menu":
          "calc(2 * theme('spacing.3xl') + theme('spacing.lg') + theme('spacing.sm'))",
      },

      fontFamily: {
        btn: ["Satoshi Bold"],
        sans: ["Satoshi"],
        serif: ["Nunito"],
      },

      fontSize: {
        sm: "clamp(1.28rem, 0.13vw + 1.24rem, 1.43rem)",
        base: "clamp(1.6rem, 0.27vw + 1.52rem, 1.9rem)",
        md: "clamp(2rem, 0.48vw + 1.85rem, 2.53rem)",
        lg: "clamp(2.5rem, 0.8vw + 2.26rem, 3.38rem)",
        xl: "clamp(3.13rem, 1.25vw + 2.75rem, 4.5rem)",
        "2xl": "clamp(3.91rem, 1.9vw + 3.34rem, 6rem)",
        "3xl": "clamp(4.88rem, 2.83vw + 4.03rem, 8rem)",

  // --space-3xs: clamp(0.25rem, 0.23rem + 0.10vw, 0.31rem);
  // --space-2xs: clamp(0.50rem, 0.46rem + 0.21vw, 0.63rem);
  // --space-xs: clamp(0.75rem, 0.71rem + 0.21vw, 0.88rem);
  // --space-s: clamp(1.00rem, 0.94rem + 0.31vw, 1.19rem);
  // --space-m: clamp(1.50rem, 1.40rem + 0.52vw, 1.81rem);
  // --space-l: clamp(2.00rem, 1.88rem + 0.63vw, 2.38rem);
  // --space-xl: clamp(3.00rem, 2.81rem + 0.94vw, 3.56rem);
  // --space-2xl: clamp(4.00rem, 3.75rem + 1.25vw, 4.75rem);
  // --space-3xl: clamp(6.00rem, 5.63rem + 1.88vw, 7.13rem);
      },

      boxShadow: {
        DEFAULT: "0px 4px 6px 0px rgb(0 0 0 / 0.2)",
      },

      // loading animation
      keyframes: {
        loading: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        loading: "loading 1s infinite alternate",
      },
    },
  },
};

// PAGE WRAPPER: w-100 mx-auto max-w-screen-2xl
// TEXT WRAPPER: m-auto w-[calc(100%-2*theme(spacing.md))]

// FLEX-COL: flex flex-col items-center justify-center
// FLEX-ROW: flex items-center justify-center

// GRID CENTER: items-center justify-items-center
//
//
//
// box: overflow-hidden rounded-[3rem]
//
//
//
//
