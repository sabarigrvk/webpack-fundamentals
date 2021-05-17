const { merge } = require("webpack-merge");
const config = () => {
  const mode = process.env.NODE_ENV || "development";
  const baseConfig = {
    mode,
    output: {
      clean: true,
    },
    stats: "errors-warnings",
  };

  return [
    merge(baseConfig, require("./client")[mode]),
    merge(baseConfig, require("./server")[mode]),
  ];
};

module.exports = config;
