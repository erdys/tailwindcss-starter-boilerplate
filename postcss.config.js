const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        require("postcss-preset-env")({
            browsers: "last 2 versions"
        }),
        require("tailwindcss"),
        require("autoprefixer")
    ]
};
