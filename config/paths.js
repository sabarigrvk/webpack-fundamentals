const { resolve } = require("path");
const { realpathSync } = require("fs");

const rootDir = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(rootDir, relativePath);

module.exports = {
  SRC_DIR: resolveApp("src"),
  CLIENT_SRC_DIR: resolveApp("src/client"),
  SERVER_SRC_DIR: resolveApp("src/server"),
  BUILD_DIR: resolveApp("build"),
  CLIENT_BUILD_DIR: resolveApp("build/client"),
  SERVER_BUILD_DIR: resolveApp("build/server"),
  PUBLIC_DIR: "/static/",
};
