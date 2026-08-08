const path = require("path");

module.exports = {
  mode: "production",

  entry: "./js/script.js",

  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        type: "javascript/auto",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
