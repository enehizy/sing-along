webpackHotUpdate_N_E("pages/search",{

/***/ "./components/songCard.js":
/*!********************************!*\
  !*** ./components/songCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\components\\songCard.js";


function SongCard(_ref) {
  var img = _ref.img,
      title = _ref.title,
      artistName = _ref.artistName,
      fullTitle = _ref.fullTitle,
      path = _ref.path,
      id = _ref.id;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "songcard",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "songcardimage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 47
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 16
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "songcardinfo",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        children: artistName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "gotobutton pointer",
        onClick: function onClick() {
          location.replace("".concat(path, "?id=").concat(id));
        },
        children: "View Lyrics"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 18
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

_c = SongCard;
/* harmony default export */ __webpack_exports__["default"] = (SongCard);

var _c;

$RefreshReg$(_c, "SongCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb25nQ2FyZC5qcyJdLCJuYW1lcyI6WyJTb25nQ2FyZCIsImltZyIsInRpdGxlIiwiYXJ0aXN0TmFtZSIsImZ1bGxUaXRsZSIsInBhdGgiLCJpZCIsImxvY2F0aW9uIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxTQUFTQSxRQUFULE9BQTJEO0FBQUEsTUFBeENDLEdBQXdDLFFBQXhDQSxHQUF3QztBQUFBLE1BQXBDQyxLQUFvQyxRQUFwQ0EsS0FBb0M7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbkJDLFNBQW1CLFFBQW5CQSxTQUFtQjtBQUFBLE1BQVRDLElBQVMsUUFBVEEsSUFBUztBQUFBLE1BQUpDLEVBQUksUUFBSkEsRUFBSTtBQUN2RCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsNEJBQ087QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUErQjtBQUFLLFdBQUcsRUFBRUw7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEUCxlQUVPO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDSztBQUFBLGtCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETCxlQUVLO0FBQUEsa0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZMLGVBSUU7QUFBUSxpQkFBUyxFQUFDLG9CQUFsQjtBQUF1QyxlQUFPLEVBQUUsbUJBQUk7QUFDbERJLGtCQUFRLENBQUNDLE9BQVQsV0FBb0JILElBQXBCLGlCQUErQkMsRUFBL0I7QUFDRCxTQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7S0FoQlFOLFE7QUFpQk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4yYmE4ZGIwNmM3MDVhYzU5NDIwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZnVuY3Rpb24gU29uZ0NhcmQoe2ltZyx0aXRsZSxhcnRpc3ROYW1lLGZ1bGxUaXRsZSxwYXRoLGlkfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nY2FyZFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdjYXJkaW1hZ2VcIj48aW1nIHNyYz17aW1nfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ2NhcmRpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57YXJ0aXN0TmFtZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJnb3RvbHlyaWNidXR0b25cIj5nbyB0byBseXI8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnb3RvYnV0dG9uIHBvaW50ZXJcIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShgJHtwYXRofT9pZD0ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgfX0+VmlldyBMeXJpY3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb25nQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9