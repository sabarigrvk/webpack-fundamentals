const { resolve } = require("path");
const { realpathSync } = require("fs");

const rootDir = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(rootDir, relativePath);

module.exports = {
  CONFIG_DIR: resolveApp("config"),
  SRC_DIR: resolveApp("src"),
  CLIENT_SRC_DIR: resolveApp("src/client"),
  SERVER_SRC_DIR: resolveApp("src/server"),
  SHARED_SRC_DIR: resolveApp("src/shared"),
  BUILD_DIR: resolveApp("build"),
  CLIENT_BUILD_DIR: resolveApp("build/client"),
  SERVER_BUILD_DIR: resolveApp("build/server"),
  STATIC_DIR: "/static/",
  PUBLIC_DIR: resolveApp("public"),
};
