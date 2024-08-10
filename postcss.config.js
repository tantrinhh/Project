module.exports = {
  plugins: [
    require("postcss-import"), // Nếu bạn sử dụng postcss-import
    require("postcss-nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
