module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      sm: "658px",

      md: "768px",

      lg: "1024px",

      xl: "1288px",

      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
