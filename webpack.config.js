const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello webpack",
    })
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
};
