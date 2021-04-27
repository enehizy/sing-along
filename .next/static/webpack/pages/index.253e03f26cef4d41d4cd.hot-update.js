webpackHotUpdate_N_E("pages/index",{

/***/ "./components/searchBar.js":
/*!*********************************!*\
  !*** ./components/searchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\components\\searchBar.js",
    _s = $RefreshSig$();




function SearchBar(props) {
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Find the Lyrics to your Favourite Songs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "poweredbygenius",
      children: "Powered by Genius.com"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "search-bar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          search();
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Enter name or title of song here",
          value: query,
          onChange: function onChange(e) {
            setQuery(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
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
          lineNumber: 26,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_s(SearchBar, "Cck1gl1ZARIwvGy2/c750ou8va0=");

_c = SearchBar;
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

var _c;

$RefreshReg$(_c, "SearchBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzZWFyY2giLCJsZW5ndGgiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBeUI7QUFBQTs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVoQkMsS0FGZ0I7QUFBQSxNQUVWQyxRQUZVOztBQUd4QixNQUFNQyxNQUFNLEdBQUMsU0FBUEEsTUFBTyxHQUFJO0FBQ2hCLFFBQUdGLEtBQUssQ0FBQ0csTUFBTixJQUFnQixDQUFuQixFQUFxQjtBQUNuQkMsY0FBUSxDQUFDQyxPQUFULHFCQUE4QkwsS0FBOUI7QUFFRDtBQUNELEdBTEQ7O0FBTUcsc0JBQ0k7QUFBQSw0QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBRyxlQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQUdBO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDQTtBQUFNLGdCQUFRLEVBQUUsa0JBQUNNLENBQUQsRUFBSztBQUNuQkEsV0FBQyxDQUFDQyxjQUFGO0FBQ0FMLGdCQUFNO0FBQ1AsU0FIRDtBQUFBLGdDQUlBO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVcsRUFBQyxrQ0FBL0I7QUFBa0UsZUFBSyxFQUFFRixLQUF6RTtBQUFnRixrQkFBUSxFQUFFLGtCQUFDTSxDQUFELEVBQUs7QUFDN0ZMLG9CQUFRLENBQUNLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFHRDtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkEsZUFTQztBQUFLLGFBQUcsRUFBQyxnQkFBVDtBQUEwQixhQUFHLEVBQUMsYUFBOUI7QUFBNEMsbUJBQVMsRUFBQyxTQUF0RDtBQUFnRSxpQkFBTyxFQUFFLG1CQUFJO0FBQUNQLGtCQUFNO0FBQUc7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Qkg7O0dBbENRTCxTOztLQUFBQSxTO0FBb0NNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNTNlMDNmMjZjZWY0ZDQxZDRjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5mdW5jdGlvbiBTZWFyY2hCYXIocHJvcHMpe1xyXG5cclxuICBjb25zdCBbcXVlcnksc2V0UXVlcnldPXVzZVN0YXRlKFwiXCIpO1xyXG4gY29uc3Qgc2VhcmNoPSgpPT57XHJcbiAgaWYocXVlcnkubGVuZ3RoID49IDEpe1xyXG4gICAgbG9jYXRpb24ucmVwbGFjZShgL3NlYXJjaD9xPSR7cXVlcnl9YClcclxuICAgIFxyXG4gIH1cclxuIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5GaW5kIHRoZSBMeXJpY3MgdG8geW91ciBGYXZvdXJpdGUgU29uZ3M8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBvd2VyZWRieWdlbml1c1wiPlBvd2VyZWQgYnkgR2VuaXVzLmNvbTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzZWFyY2goKTtcclxuICAgICAgICB9fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWUgb3IgdGl0bGUgb2Ygc29uZyBoZXJlXCIgdmFsdWU9e3F1ZXJ5fSBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICB9fS8+IFxyXG4gICAgICAgICA8aW1nIHNyYz1cImFycm93LWxlZnQuc3ZnXCIgYWx0PVwic2VhcmNoIGljb25cIiBjbGFzc05hbWU9XCJwb2ludGVyXCIgb25DbGljaz17KCk9PntzZWFyY2goKX19Lz5cclxuICAgICAgICBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==