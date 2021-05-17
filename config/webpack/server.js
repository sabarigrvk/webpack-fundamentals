const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const { SERVER_SRC_DIR, SERVER_BUILD_DIR } = require("../paths");

const baseConfig = {
  name: "server",
  target: "node",
  entry: {
    server: [SERVER_SRC_DIR],
  },
  externals: [nodeExternals()],
  output: {
    path: SERVER_BUILD_DIR,
    library: {
      type: "commonjs2",
    },
  },
};

module.exports = {
  development: merge(baseConfig, {
    devtool: "inline-cheap-module-source-map",
  }),
  production: merge(baseConfig, {
    devtool: false,
  }),
};
