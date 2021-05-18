/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/paths.js":
/*!*************************!*\
  !*** ./config/paths.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! path */ "path"),
    resolve = _require.resolve;

var _require2 = __webpack_require__(/*! fs */ "fs"),
    realpathSync = _require2.realpathSync;

var rootDir = realpathSync(process.cwd());

var resolveApp = function resolveApp(relativePath) {
  return resolve(rootDir, relativePath);
};

module.exports = {
  CONFIG_DIR: resolveApp("config"),
  SRC_DIR: resolveApp("src"),
  CLIENT_SRC_DIR: resolveApp("src/client"),
  SERVER_SRC_DIR: resolveApp("src/server"),
  SHARED_DIR: resolveApp("src/shared"),
  COMPONENT_DIR: resolveApp("src/shared/components"),
  BUILD_DIR: resolveApp("build"),
  CLIENT_BUILD_DIR: resolveApp("build/client"),
  SERVER_BUILD_DIR: resolveApp("build/server"),
  STATIC_DIR: "/static/",
  PUBLIC_DIR: resolveApp("public")
};

/***/ }),

/***/ "./src/server/components/ServerBootstrap.js":
/*!**************************************************!*\
  !*** ./src/server/components/ServerBootstrap.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/App */ "./src/shared/components/App.js");





function ServerBootstrap(_ref) {
  var _ref$routerContext = _ref.routerContext,
      routerContext = _ref$routerContext === void 0 ? {} : _ref$routerContext,
      _ref$location = _ref.location,
      location = _ref$location === void 0 ? req.path : _ref$location;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: location,
    context: routerContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(shared_components_App__WEBPACK_IMPORTED_MODULE_3__.default, null));
}

function toHtmlString(_ref2) {
  var jsx = _ref2.jsx,
      scriptTags = _ref2.scriptTags,
      linkTags = _ref2.linkTags,
      styleTags = _ref2.styleTags;
  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(jsx);
  return "<!doctype html>\n    <html lang=\"en\">\n      <head>\n        <meta charSet=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n      </head>\n      <body>\n        <div id=\"app\">".concat(content, "</div>\n        <script src=\"static/bundle.js\"></script>\n      </body>\n    </html>\n  ");
}

ServerBootstrap.toHtmlString = toHtmlString;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerBootstrap);

/***/ }),

/***/ "./src/server/components/index.js":
/*!****************************************!*\
  !*** ./src/server/components/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerBootstrap": () => (/* reexport safe */ _ServerBootstrap__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ServerBootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerBootstrap */ "./src/server/components/ServerBootstrap.js");



/***/ }),

/***/ "./src/server/middleware/index.js":
/*!****************************************!*\
  !*** ./src/server/middleware/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderer": () => (/* reexport safe */ _renderer__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./src/server/middleware/renderer.js");



/***/ }),

/***/ "./src/server/middleware/renderer.js":
/*!*******************************************!*\
  !*** ./src/server/middleware/renderer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/paths */ "./config/paths.js");
/* harmony import */ var config_paths__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(config_paths__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var server_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! server/components */ "./src/server/components/index.js");





var renderer = function renderer(req, res, next) {
  var initialProps = {
    routerContext: {},
    location: req.path
  };
  var jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(server_components__WEBPACK_IMPORTED_MODULE_3__.ServerBootstrap, initialProps);
  var html = server_components__WEBPACK_IMPORTED_MODULE_3__.ServerBootstrap.toHtmlString({
    jsx: jsx
  });
  return res.send(html);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);

/***/ }),

/***/ "./src/shared/components/App.js":
/*!**************************************!*\
  !*** ./src/shared/components/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/routes */ "./src/shared/routes.js");




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home alone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, shared_routes__WEBPACK_IMPORTED_MODULE_2__.default.map(function (route, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
      key: i,
      exact: route.exact,
      path: route.path,
      component: route.component
    });
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/shared/components/pages/AboutPage/index.js":
/*!********************************************************!*\
  !*** ./src/shared/components/pages/AboutPage/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AboutPage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "About page"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./src/shared/components/pages/HomePage/index.js":
/*!*******************************************************!*\
  !*** ./src/shared/components/pages/HomePage/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function HomePage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "HomePage page");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_pages_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/pages/HomePage */ "./src/shared/components/pages/HomePage/index.js");
/* harmony import */ var components_pages_AboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/pages/AboutPage */ "./src/shared/components/pages/AboutPage/index.js");


var routes = [{
  path: "/",
  exact: true,
  component: components_pages_HomePage__WEBPACK_IMPORTED_MODULE_0__.default
}, {
  path: "/about",
  exact: true,
  component: components_pages_AboutPage__WEBPACK_IMPORTED_MODULE_1__.default
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/paths */ "./config/paths.js");
/* harmony import */ var config_paths__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(config_paths__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware */ "./src/server/middleware/index.js");




var PORT = process.env.PORT || 3000;
var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(config_paths__WEBPACK_IMPORTED_MODULE_2__.STATIC_DIR, express__WEBPACK_IMPORTED_MODULE_1___default().static((0,path__WEBPACK_IMPORTED_MODULE_0__.join)(config_paths__WEBPACK_IMPORTED_MODULE_2__.CLIENT_BUILD_DIR, config_paths__WEBPACK_IMPORTED_MODULE_2__.STATIC_DIR)));
app.use(_middleware__WEBPACK_IMPORTED_MODULE_3__.renderer);
app.listen(PORT, function () {
  console.log("server is listening");
});
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1mdW5kYW1lbnRhbHMvLi9jb25maWcvcGF0aHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1mdW5kYW1lbnRhbHMvLi9zcmMvc2VydmVyL2NvbXBvbmVudHMvU2VydmVyQm9vdHN0cmFwLmpzIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzLy4vc3JjL3NlcnZlci9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzLy4vc3JjL3NlcnZlci9taWRkbGV3YXJlL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWZ1bmRhbWVudGFscy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9wYWdlcy9BYm91dFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1mdW5kYW1lbnRhbHMvLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvcGFnZXMvSG9tZVBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1mdW5kYW1lbnRhbHMvLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWZ1bmRhbWVudGFscy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWZ1bmRhbWVudGFscy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1mdW5kYW1lbnRhbHMvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1mdW5kYW1lbnRhbHMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWZ1bmRhbWVudGFscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1mdW5kYW1lbnRhbHMvLi9zcmMvc2VydmVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgcmVzb2x2ZSB9ID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCB7IHJlYWxwYXRoU3luYyB9ID0gcmVxdWlyZShcImZzXCIpO1xuXG5jb25zdCByb290RGlyID0gcmVhbHBhdGhTeW5jKHByb2Nlc3MuY3dkKCkpO1xuY29uc3QgcmVzb2x2ZUFwcCA9IChyZWxhdGl2ZVBhdGgpID0+IHJlc29sdmUocm9vdERpciwgcmVsYXRpdmVQYXRoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENPTkZJR19ESVI6IHJlc29sdmVBcHAoXCJjb25maWdcIiksXG4gIFNSQ19ESVI6IHJlc29sdmVBcHAoXCJzcmNcIiksXG4gIENMSUVOVF9TUkNfRElSOiByZXNvbHZlQXBwKFwic3JjL2NsaWVudFwiKSxcbiAgU0VSVkVSX1NSQ19ESVI6IHJlc29sdmVBcHAoXCJzcmMvc2VydmVyXCIpLFxuICBTSEFSRURfRElSOiByZXNvbHZlQXBwKFwic3JjL3NoYXJlZFwiKSxcbiAgQ09NUE9ORU5UX0RJUjogcmVzb2x2ZUFwcChcInNyYy9zaGFyZWQvY29tcG9uZW50c1wiKSxcbiAgQlVJTERfRElSOiByZXNvbHZlQXBwKFwiYnVpbGRcIiksXG4gIENMSUVOVF9CVUlMRF9ESVI6IHJlc29sdmVBcHAoXCJidWlsZC9jbGllbnRcIiksXG4gIFNFUlZFUl9CVUlMRF9ESVI6IHJlc29sdmVBcHAoXCJidWlsZC9zZXJ2ZXJcIiksXG4gIFNUQVRJQ19ESVI6IFwiL3N0YXRpYy9cIixcbiAgUFVCTElDX0RJUjogcmVzb2x2ZUFwcChcInB1YmxpY1wiKSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcInNoYXJlZC9jb21wb25lbnRzL0FwcFwiO1xuXG5mdW5jdGlvbiBTZXJ2ZXJCb290c3RyYXAoeyByb3V0ZXJDb250ZXh0ID0ge30sIGxvY2F0aW9uID0gcmVxLnBhdGggfSkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXIgbG9jYXRpb249e2xvY2F0aW9ufSBjb250ZXh0PXtyb3V0ZXJDb250ZXh0fT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9IdG1sU3RyaW5nKHsganN4LCBzY3JpcHRUYWdzLCBsaW5rVGFncywgc3R5bGVUYWdzIH0pIHtcbiAgY29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKGpzeCk7XG4gIHJldHVybiBgPCFkb2N0eXBlIGh0bWw+XG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICA8c2NyaXB0IHNyYz1cInN0YXRpYy9idW5kbGUuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIGA7XG59XG5cblNlcnZlckJvb3RzdHJhcC50b0h0bWxTdHJpbmcgPSB0b0h0bWxTdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlckJvb3RzdHJhcDtcbiIsImltcG9ydCBTZXJ2ZXJCb290c3RyYXAgZnJvbSBcIi4vU2VydmVyQm9vdHN0cmFwXCI7XG5cbmV4cG9ydCB7IFNlcnZlckJvb3RzdHJhcCB9O1xuIiwiaW1wb3J0IHJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XG5cbmV4cG9ydCB7IHJlbmRlcmVyIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IENMSUVOVF9CVUlMRF9ESVIsIFNUQVRJQ19ESVIgfSBmcm9tIFwiY29uZmlnL3BhdGhzXCI7XG5pbXBvcnQgeyBTZXJ2ZXJCb290c3RyYXAgfSBmcm9tIFwic2VydmVyL2NvbXBvbmVudHNcIjtcblxuY29uc3QgcmVuZGVyZXIgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgaW5pdGlhbFByb3BzID0ge1xuICAgIHJvdXRlckNvbnRleHQ6IHt9LFxuICAgIGxvY2F0aW9uOiByZXEucGF0aCxcbiAgfTtcblxuICBjb25zdCBqc3ggPSA8U2VydmVyQm9vdHN0cmFwIHsuLi5pbml0aWFsUHJvcHN9IC8+O1xuXG4gIGNvbnN0IGh0bWwgPSBTZXJ2ZXJCb290c3RyYXAudG9IdG1sU3RyaW5nKHtcbiAgICBqc3gsXG4gIH0pO1xuICByZXR1cm4gcmVzLnNlbmQoaHRtbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCJzaGFyZWQvcm91dGVzXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGluayB0bz1cIi9cIj5Ib21lIGFsb25lPC9MaW5rPlxuICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIHtyb3V0ZXMubWFwKChyb3V0ZSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBleGFjdD17cm91dGUuZXhhY3R9XG4gICAgICAgICAgICAgIHBhdGg9e3JvdXRlLnBhdGh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIEFib3V0UGFnZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+QWJvdXQgcGFnZTwvaDE+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2PkhvbWVQYWdlIHBhZ2U8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIiwiaW1wb3J0IEhvbWVQYWdlIGZyb20gXCJjb21wb25lbnRzL3BhZ2VzL0hvbWVQYWdlXCI7XG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gXCJjb21wb25lbnRzL3BhZ2VzL0Fib3V0UGFnZVwiO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWVQYWdlLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEFib3V0UGFnZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IENMSUVOVF9CVUlMRF9ESVIsIFNUQVRJQ19ESVIgfSBmcm9tIFwiY29uZmlnL3BhdGhzXCI7XG5pbXBvcnQgeyByZW5kZXJlciB9IGZyb20gXCIuL21pZGRsZXdhcmVcIjtcblxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoU1RBVElDX0RJUiwgZXhwcmVzcy5zdGF0aWMoam9pbihDTElFTlRfQlVJTERfRElSLCBTVEFUSUNfRElSKSkpO1xuYXBwLnVzZShyZW5kZXJlcik7XG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJzZXJ2ZXIgaXMgbGlzdGVuaW5nXCIpO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QTs7Ozs7Ozs7O0FDakJBO0FBQ0E7QTs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==