const { merge } = require("webpack-merge");
const {
  CLIENT_SRC_DIR,
  SERVER_SRC_DIR,
  SHARED_DIR,
  SRC_DIR,
  COMPONENT_DIR,
  CONFIG_DIR,
} = require("../paths");

const config = () => {
  const mode = process.env.NODE_ENV || "development";
  const baseConfig = {
    mode,
    output: {
      clean: true,
    },
    resolve: {
      extensions: [".js", ".json", ".mjs", ".jsx", ".ts", ".tsx", ".css"],
      alias: {
        client: CLIENT_SRC_DIR,
        components: COMPONENT_DIR,
        config: CONFIG_DIR,
        shared: SHARED_DIR,
        server: SERVER_SRC_DIR,
      },
      fallback: { path: false, fs: false },
      modules: [SRC_DIR, CONFIG_DIR, "node_modules"],
    },
    stats: "errors-warnings",
  };
  // console.log(merge(baseConfig, require("./client")[mode]));
  // process.exit();
  return [
    merge(baseConfig, require("./client")[mode]),
    merge(baseConfig, require("./server")[mode]),
  ];
};

module.exports = config;
