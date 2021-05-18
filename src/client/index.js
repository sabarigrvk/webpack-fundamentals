import React from "react";
import { hydrate, render } from "react-dom";
import { Router } from "react-router-dom";
import App from "components/App";
import { createBrowserHistory } from "history";

let history = createBrowserHistory();

function ClientBootstrap() {
  return (
    <Router history={history}>
      <App />
    </Router>
  );
}

function renderer() {
  const renderFunc = module.hot ? render : hydrate;
  renderFunc(<ClientBootstrap />, document.getElementById("app"));
}

if (module.hot) {
  renderer();
  module.hot.accept();
} else {
  renderer();
}
