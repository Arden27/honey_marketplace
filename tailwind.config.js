/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      screens: {
        "315px": "315px",
        "380px": "380px",
        "330px": "330px",
        "430px": "430px",
      },

      colors: {
        primary: "hsl(33, 65%, 65%)",
        secondary: "hsl(33, 55%, 70%)",

        text: "hsl(30, 70%, 18%)",

        accent: "hsl(22, 40%, 70%)",
        accent2: "hsl(20, 50%, 65%)",
        warning: "hsl(9, 50%, 50%)",

        bg: "hsl(40, 85%, 80%)",
        bg2: "hsl(33, 55%, 70%)",
        bg2: "hsl(36, 76%, 75%)",

        bg3: "hsl(40, 100%, 86%)",

        header: "hsl(34, 57%, 58%)",
        header: "hsl(33, 65%, 65%)",

        bar: "hsl(30, 52%, 70%)",
        //  header: "hsl(29, 45%, 63%)",
        // bar: "hsl(33, 65%, 70%)",

        "about-box": "theme(colors.bg2)",

        footer: "theme('colors.secondary')",
        primary: "hsl(33, 55%, 60%)",
        secondary: "hsl(33, 55%, 70%)",
      },

      spacing: {
        "3xs": "clamp(0.25rem, 0.23rem + 0.10vw, 0.31rem)",
        "2xs": "clamp(0.50rem, 0.46rem + 0.21vw, 0.63rem)",
        xs: "clamp(0.75rem, 0.71rem + 0.21vw, 0.88rem)",
        sm: "clamp(1.00rem, 0.94rem + 0.31vw, 1.19rem)",
        md: "clamp(1.50rem, 1.40rem + 0.52vw, 1.81rem)",
        lg: "clamp(2.00rem, 1.88rem + 0.63vw, 2.38rem)",
        xl: "clamp(3.00rem, 2.81rem + 0.94vw, 3.56rem)",
        "2xl": "clamp(4.00rem, 3.75rem + 1.25vw, 4.75rem)",
        "3xl": "clamp(6.00rem, 5.63rem + 1.88vw, 7.13rem)",
      },

      fontFamily: {
        btn: ["Satoshi Bold"],
        sans: ["Satoshi"],
        serif: ["Nunito"],
      },

      fontSize: {
        xs: "clamp(0.67rem, 0.70rem + -0.04vw, 0.69rem)",
        sm: "clamp(0.83rem, 0.81rem + 0.10vw, 0.89rem)",
        md: "clamp(1.00rem, 0.94rem + 0.31vw, 1.19rem)",
        lg: "clamp(1.20rem, 1.07rem + 0.64vw, 1.58rem)",
        xl: "clamp(1.44rem, 1.22rem + 1.12vw, 2.11rem)",
        "2xl": "clamp(1.73rem, 1.37rem + 1.81vw, 2.81rem)",
        "3xl": "clamp(2.07rem, 1.52rem + 2.79vw, 3.75rem)",
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