const { join } = require("path");
const { merge } = require("webpack-merge");
const { CLIENT_SRC_DIR, CLIENT_BUILD_DIR, PUBLIC_DIR } = require("../paths");

const baseConfig = {
  name: "client",
  target: "web",
  entry: {
    bundle: [CLIENT_SRC_DIR],
  },
  output: {
    path: join(CLIENT_BUILD_DIR, PUBLIC_DIR),
    publicPath: PUBLIC_DIR,
  },
};

module.exports = {
  development: merge(baseConfig, {
    devtool: "inline-cheap-module-source-map",
  }),
  production: merge(baseConfig, {
    devtool: "source-map",
    output: {
      filename: "[name].[contenthash].js",
    },
  }),
};
