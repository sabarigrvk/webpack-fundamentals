const pkg = require("../package.json");
const isTargetWeb = (caller) => Boolean(caller && caller.target === "web");
const isWebpack = (caller) => Boolean(caller && caller.name === "babel-loader");

const config = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const web = api.caller(isTargetWeb);
  const webpack = api.caller(isWebpack);
  return {
    presets: [
      "@babel/react",
      [
        "@babel/env",
        {
          useBuiltIns: web ? "entry" : undefined,
          corejs: web ? "core-js@3" : false,
          targets: !web ? { node: "current" } : undefined,
          modules: webpack ? false : "commonjs",
          targets: {
            browsers: pkg.browserslist[api.env()],
          },
        },
      ],
    ],
  };
};

module.exports = config;
