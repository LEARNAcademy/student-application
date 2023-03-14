module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-eslint")({
      fix: true,
    }),
  ],
}