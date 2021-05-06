const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    contentBase: "./build",
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello react",
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
};
