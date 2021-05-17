const { join } = require("path");
const { merge } = require("webpack-merge");
const { CLIENT_SRC_DIR, CLIENT_BUILD_DIR, STATIC_DIR } = require("../paths");
const { clientLoaders } = require("./loaders");
const { clientPlugins, sharedPlugins } = require("./plugins");

const baseConfig = {
  name: "client",
  target: "web",
  entry: {
    bundle: [CLIENT_SRC_DIR],
  },
  module: {
    rules: clientLoaders,
  },
  plugins: [...sharedPlugins, ...clientPlugins],
  output: {
    path: join(CLIENT_BUILD_DIR, STATIC_DIR),
    publicPath: STATIC_DIR,
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
