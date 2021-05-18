import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import App from "shared/components/App";

function ServerBootstrap({ routerContext = {}, location = req.path }) {
  return (
    <Router location={location} context={routerContext}>
      <App />
    </Router>
  );
}

function toHtmlString({ jsx, scriptTags, linkTags, styleTags }) {
  const content = renderToString(jsx);
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="static/bundle.js"></script>
      </body>
    </html>
  `;
}

ServerBootstrap.toHtmlString = toHtmlString;

export default ServerBootstrap;
