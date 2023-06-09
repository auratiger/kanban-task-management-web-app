const colors = {
  transparent: "transparent",
  current: "currentColor",
  white: "hsl(0, 0%, 100%)", // #FFFFFF
  purple: {
    light: "hsl(243, 100%, 82%)", // #A8A4FF
    DEFAULT: "hsl(242, 48%, 58%)", // #635FC7
    medium: "#635fc740",
    low: "#635fc71a",
  },
  red: {
    light: "hsl(0, 100%, 80%)", // #FF9898
    DEFAULT: "hsl(0, 78%, 63%)", // #EA5555
  },
  grey: {
    light: "hsl(220, 69%, 97%)", // #F4F7FD
    slight: "hsl(219, 63%, 95%)", // #E9EFFA
    medium: "hsl(216, 15%, 57%)", // #828FA3
    sdark: "hsl(235, 10%, 22%)",
    dark: "hsl(235, 12%, 19%)", // #2B2C37
    vdark: "hsl(235, 16%, 15%)", // #20212C
  },
  lines: {
    light: "hsl(221, 69%, 94%)", // #E4EBFA
    dark: "hsl(236, 11%, 27%)", // #3E3F4E
  },
  black: "hsl(237, 100%, 4%)", // #000112
};

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontSize: {
      ms: "0.66rem",
      sm: "0.88rem",
      md: "1.6rem",
      lg: "1.3rem",
      lx: "2rem",
      xl: "2.4rem",

      "body-md": [
        "0.8125rem",
        {
          lineHeight: "23px",
          fontWeight: "700",
        },
      ],
      "body-lg": [
        "0.95rem",
        {
          lineHeight: "15px",
          fontWeight: "700",
        },
      ],
      "head-sm": [
        "0.75rem",
        {
          lineHeight: "15px",
          fontWeight: "700",
        },
      ],
      "head-md": [
        "0.9375rem",
        {
          lineHeight: "19px",
          fontWeight: "700",
        },
      ],
      "head-lg": [
        "1.125rem",
        {
          lineHeight: "23px",
          fontWeight: "700",
        },
      ],
      "head-xl": [
        "1.5rem",
        {
          lineHeight: "30px",
          fontWeight: "700",
        },
      ],
    },
    lineHeight: {
      ms: "2.3rem",
      sm: "1.5rem",
      md: "1.9rem",
      lg: "2.3rem",
      lx: "2.5rem",
      xl: "3rem",
    },
    letterSpacing: {
      sm: ".20rem",
    },
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-jakarta)"],
      },

      backgroundColor: colors,
      textColor: colors,
      borderColor: colors,
      colors: colors,
      spacing: {
        0.8: "0.8rem",
        1.2: "1.2rem",
        1.6: "1.6rem",
        2.4: "2.4rem",
        3.2: "3.2rem",
        4.8: "4.8rem",
        34.3: "34.3rem",
        48: "48rem",
      },
      borderRadius: {
        2: "2rem",
        2.4: "2.4rem",
      },
    },
  },
  plugins: [],
};
