const path = require("path");
const pkg = require("../package.json");
const jsConfig = require("../jsconfig.json");
const isTargetWeb = (caller) => Boolean(caller && caller.target === "web");
const isWebpack = (caller) => Boolean(caller && caller.name === "babel-loader");

const getAliases = () => {
  const webpackConfig = require("./webpack");
  const { alias } = webpackConfig()[0]?.resolve ?? {};
  if (!alias) {
    return {};
  }
  const paths = Object.keys(alias).reduce((acc, cur) => {
    const pathKey = `${cur}`;
    const pathVal = `./${path.relative("./", alias[cur])}`;
    acc[pathKey] = pathVal;
    return acc;
  }, {});
  return paths;
};

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
    plugins: [
      [
        "module-resolver",
        {
          root: [jsConfig.compilerOptions.baseUrl],
          alias: getAliases(),
        },
      ],
    ],
  };
};

module.exports = config;
