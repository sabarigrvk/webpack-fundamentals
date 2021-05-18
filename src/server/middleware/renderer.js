import React from "react";
import { join, resolve } from "path";
import { CLIENT_BUILD_DIR, STATIC_DIR } from "config/paths";
import { ServerBootstrap } from "server/components";

const renderer = (req, res, next) => {
  const initialProps = {
    routerContext: {},
    location: req.path,
  };

  const jsx = <ServerBootstrap {...initialProps} />;

  const html = ServerBootstrap.toHtmlString({
    jsx,
  });
  return res.send(html);
};

export default renderer;
