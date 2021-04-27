webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavSearchBar.js":
/*!************************************!*\
  !*** ./components/NavSearchBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\components\\NavSearchBar.js",
    _s = $RefreshSig$();




function NavSearchBar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1];

  var search = function search() {
    if (query.length >= 1) {
      location.replace("/search?q=".concat(query));
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "navsearchbar",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        search();
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Enter name or title of song here",
        onChange: function onChange(e) {
          setQuery(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "arrow-left.svg",
        alt: "search icon",
        className: "pointer",
        onClick: function onClick() {
          search();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_s(NavSearchBar, "Cck1gl1ZARIwvGy2/c750ou8va0=");

_c = NavSearchBar;
/* harmony default export */ __webpack_exports__["default"] = (NavSearchBar);

var _c;

$RefreshReg$(_c, "NavSearchBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZTZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiTmF2U2VhcmNoQmFyIiwidXNlU3RhdGUiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VhcmNoIiwibGVuZ3RoIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLFlBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUNiQyxLQURhO0FBQUEsTUFDUEMsUUFETzs7QUFFcEIsTUFBTUMsTUFBTSxHQUFDLFNBQVBBLE1BQU8sR0FBSTtBQUNoQixRQUFHRixLQUFLLENBQUNHLE1BQU4sSUFBZ0IsQ0FBbkIsRUFBcUI7QUFDcEJDLGNBQVEsQ0FBQ0MsT0FBVCxxQkFBOEJMLEtBQTlCO0FBQ0E7QUFDRCxHQUpEOztBQU9DLHNCQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSwyQkFDSTtBQUFNLGNBQVEsRUFBRSxrQkFBQ00sQ0FBRCxFQUFLO0FBQ3ZCQSxTQUFDLENBQUNDLGNBQUY7QUFDQUwsY0FBTTtBQUNQLE9BSEc7QUFBQSw4QkFJSjtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsa0NBQS9CO0FBQW9FLGdCQUFRLEVBQUUsa0JBQUNJLENBQUQsRUFBSztBQUNqRkwsa0JBQVEsQ0FBQ0ssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUdEO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpJLGVBUUE7QUFBSyxXQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsV0FBRyxFQUFDLGFBQTlCO0FBQTRDLGlCQUFTLEVBQUMsU0FBdEQ7QUFBZ0UsZUFBTyxFQUFFLG1CQUFJO0FBQUNQLGdCQUFNO0FBQUc7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0ExQlFKLFk7O0tBQUFBLFk7QUEyQk1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjFkY2RmZmZhZTIzYzk0ZmViYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmZ1bmN0aW9uIE5hdlNlYXJjaEJhcigpe1xyXG4gICBjb25zdCBbcXVlcnksc2V0UXVlcnldPXVzZVN0YXRlKFwiXCIpO1xyXG4gICBjb25zdCBzZWFyY2g9KCk9PntcclxuICAgIGlmKHF1ZXJ5Lmxlbmd0aCA+PSAxKXtcclxuICAgICBsb2NhdGlvbi5yZXBsYWNlKGAvc2VhcmNoP3E9JHtxdWVyeX1gKVxyXG4gICAgfVxyXG4gICB9XHJcbiBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZzZWFyY2hiYXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgc2VhcmNoKCk7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lIG9yIHRpdGxlIG9mIHNvbmcgaGVyZVwiICAgb25DaGFuZ2U9eyhlKT0+e1xyXG4gICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgfX0vPjxpbWcgc3JjPVwiYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJzZWFyY2ggaWNvblwiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiBvbkNsaWNrPXsoKT0+e3NlYXJjaCgpfX0vPlxyXG4gICAgICBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdlNlYXJjaEJhcjsiXSwic291cmNlUm9vdCI6IiJ9