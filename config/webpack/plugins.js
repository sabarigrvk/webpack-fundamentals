const { join } = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { isProd } = require("../utils");
const { CLIENT_BUILD_DIR, PUBLIC_DIR } = require("../paths");

const sharedPlugins = [];

const clientPlugins = [
  new DefinePlugin({
    __SERVER__: "false",
    __BROWSER__: "true",
  }),
  new HtmlWebpackPlugin({
    filename: join(CLIENT_BUILD_DIR, "index.html"),
    inject: true,
    template: join(PUBLIC_DIR, "index.html"),
  }),
];

const serverPlugins = [
  new DefinePlugin({
    __SERVER__: "true",
    __BROWSER__: "false",
  }),
];

module.exports = { sharedPlugins, clientPlugins, serverPlugins };
