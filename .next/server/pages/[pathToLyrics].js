module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[pathToLyrics].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/reload.js":
/*!******************************!*\
  !*** ./components/reload.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\components\\reload.js";

function Reload() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
    className: "reload",
    children: ["There seems to be an error with your network ,check your internet connection,and ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      onClick: () => {
        window.location.reload();
      },
      children: "Try again"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 116
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Reload);

/***/ }),

/***/ "./components/songHeader.js":
/*!**********************************!*\
  !*** ./components/songHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\components\\songHeader.js";


function SongHeader({
  thumbnail,
  fulltitle
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "songheader",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        viewBox: "0 0 100 100",
        width: "250px",
        height: "250px",
        className: "songimg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("clipPath", {
          id: "myClip",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
            cx: "50",
            cy: "50",
            r: "49.6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 4
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("image", {
          clipPath: "url(#myClip)",
          height: "100%",
          width: "100%",
          href: thumbnail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: fulltitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 13
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SongHeader);

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: querySong, getLyrics, findSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySong", function() { return querySong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLyrics", function() { return getLyrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSong", function() { return findSong; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ "cheerio");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_1__);


async function querySong(q) {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.genius.com/search?q=${q}`, {
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  });
  return response.data.response.hits;
}
async function getLyrics(path) {
  const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://genius.com/${path}`);
  let $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load(`${result.data}`);
  const lyricInDom = $('.lyrics  > p').html();
  $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load(`${lyricInDom}`, {
    xml: {
      normalizeWhitespace: true
    }
  }); //   console.log({lyrics:$.text()})

  let lyrics = await Promise.all([$.root().text()]);
  lyrics = lyrics[0];
  if (lyrics === 'null') throw `lyric not found`;
  return `${lyrics}`;
}
async function findSong(id) {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.genius.com/songs/${id}`, {
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  });
  return response.data.response.song;
}

/***/ }),

/***/ "./pages/[pathToLyrics].js":
/*!*********************************!*\
  !*** ./pages/[pathToLyrics].js ***!
  \*********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return song; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_songHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/songHeader */ "./components/songHeader.js");
/* harmony import */ var _components_reload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reload */ "./components/reload.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers.js");

var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\pages\\[pathToLyrics].js";

;



function song({
  thumbnail,
  fulltitle,
  lyrics,
  error
}) {
  if (error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_reload__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "songcont",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_songHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      thumbnail: thumbnail,
      fulltitle: fulltitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "lyrics",
      children: lyrics
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
const getServerSideProps = async context => {
  try {
    const {
      id,
      pathToLyrics
    } = context.query;
    const song = await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["findSong"])(id); // console.log(song)

    const lyrics = await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getLyrics"])(pathToLyrics);
    return {
      props: {
        thumbnail: `${song.header_image_thumbnail_url}`,
        fulltitle: `${song.full_title}`,
        lyrics,
        error: false
      }
    };
  } catch (e) {
    console.log({
      error: e
    });
    return {
      props: {
        error: true
      }
    };
  }
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb25nSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW3BhdGhUb0x5cmljc10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGVlcmlvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJSZWxvYWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIlNvbmdIZWFkZXIiLCJ0aHVtYm5haWwiLCJmdWxsdGl0bGUiLCJxdWVyeVNvbmciLCJxIiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOIiwiZGF0YSIsImhpdHMiLCJnZXRMeXJpY3MiLCJwYXRoIiwicmVzdWx0IiwiJCIsImNoZWVyaW8iLCJsb2FkIiwibHlyaWNJbkRvbSIsImh0bWwiLCJ4bWwiLCJub3JtYWxpemVXaGl0ZXNwYWNlIiwibHlyaWNzIiwiUHJvbWlzZSIsImFsbCIsInJvb3QiLCJ0ZXh0IiwiZmluZFNvbmciLCJpZCIsInNvbmciLCJlcnJvciIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXRoVG9MeXJpY3MiLCJxdWVyeSIsInByb3BzIiwiaGVhZGVyX2ltYWdlX3RodW1ibmFpbF91cmwiLCJmdWxsX3RpdGxlIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QkFDRCxxRUFBQyw4REFBRDtBQUFZLGVBQVMsRUFBRTlCLFNBQXZCO0FBQWtDLGVBQVMsRUFBRUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURDLGVBRUE7QUFBSSxlQUFTLEVBQUMsUUFBZDtBQUFBLGdCQUF3QnFCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQVVIO0FBR00sTUFBTVMsa0JBQWtCLEdBQUUsTUFBT0MsT0FBUCxJQUFpQjtBQUM5QyxNQUFHO0FBQ0MsVUFBTTtBQUFDSixRQUFEO0FBQUlLO0FBQUosUUFBa0JELE9BQU8sQ0FBQ0UsS0FBaEM7QUFFQSxVQUFNTCxJQUFJLEdBQUUsTUFBTUYseURBQVEsQ0FBQ0MsRUFBRCxDQUExQixDQUhELENBSUM7O0FBQ0EsVUFBTU4sTUFBTSxHQUFHLE1BQU9WLDBEQUFTLENBQUNxQixZQUFELENBQS9CO0FBR0EsV0FBTTtBQUNGRSxXQUFLLEVBQUM7QUFDRm5DLGlCQUFTLEVBQUUsR0FBRTZCLElBQUksQ0FBQ08sMEJBQTJCLEVBRDNDO0FBRUZuQyxpQkFBUyxFQUFFLEdBQUU0QixJQUFJLENBQUNRLFVBQVcsRUFGM0I7QUFHRmYsY0FIRTtBQUlGUSxhQUFLLEVBQUM7QUFKSjtBQURKLEtBQU47QUFRSCxHQWhCRCxDQWlCQSxPQUFNUSxDQUFOLEVBQVE7QUFDSkMsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ1YsV0FBSyxFQUFDUTtBQUFQLEtBQVo7QUFDQSxXQUFNO0FBQ0ZILFdBQUssRUFBQztBQUNITCxhQUFLLEVBQUM7QUFESDtBQURKLEtBQU47QUFLSDtBQUdKLENBNUJNLEM7Ozs7Ozs7Ozs7O0FDekJQLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1twYXRoVG9MeXJpY3NdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bcGF0aFRvTHlyaWNzXS5qc1wiKTtcbiIsIlxyXG5mdW5jdGlvbiBSZWxvYWQoKXtcclxuICAgIFxyXG4gICAgcmV0dXJuKDxoMiBjbGFzc05hbWU9XCJyZWxvYWRcIj5UaGVyZSBzZWVtcyB0byBiZSBhbiBlcnJvciB3aXRoIHlvdXIgbmV0d29yayAsY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uLGFuZCA8c3BhbiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX19PlRyeSBhZ2Fpbjwvc3Bhbj48L2gyPilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWxvYWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFNvbmdIZWFkZXIoe3RodW1ibmFpbCxmdWxsdGl0bGV9KXtcclxuICAgIHJldHVybiggPGRpdiBjbGFzc05hbWU9XCJzb25naGVhZGVyXCI+XHJcbiAgICA8ZGl2ID5cclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgd2lkdGg9XCIyNTBweFwiIGhlaWdodD1cIjI1MHB4XCIgY2xhc3NOYW1lPVwic29uZ2ltZ1wiPlxyXG4gICA8Y2xpcFBhdGggaWQ9XCJteUNsaXBcIj5cclxuICAgXHJcbiAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0OS42XCIgLz5cclxuXHJcbiAgICA8L2NsaXBQYXRoPlxyXG4gICBcclxuICAgIDxpbWFnZSBjbGlwUGF0aD1cInVybCgjbXlDbGlwKVwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBocmVmPXt0aHVtYm5haWx9IC8+XHJcbiAgICBcclxuICAgPC9zdmc+XHJcbiAgICB7LyogPGltZyBzcmM9e3RodW1ibmFpbH0vPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgPGgyPntmdWxsdGl0bGV9PC9oMj5cclxuICAgIDwvZGl2PilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb25nSGVhZGVyOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlcnlTb25nKHEpe1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBheGlvcyhgaHR0cHM6Ly9hcGkuZ2VuaXVzLmNvbS9zZWFyY2g/cT0ke3F9YCx7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzpgQmVhcmVyICR7cHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOfWBcclxuICAgICAgICB9XHJcbiAgICB9KTsgXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5yZXNwb25zZS5oaXRzO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEx5cmljcyhwYXRoKXtcclxuICBcclxuICAgICAgICBjb25zdCByZXN1bHQ9YXdhaXQgYXhpb3MoYGh0dHBzOi8vZ2VuaXVzLmNvbS8ke3BhdGh9YCk7XHJcbiAgICAgICAgbGV0ICQgPSBjaGVlcmlvLmxvYWQoYCR7cmVzdWx0LmRhdGF9YCk7XHJcbiAgICAgICAgY29uc3QgbHlyaWNJbkRvbT0kKCcubHlyaWNzICA+IHAnKS5odG1sKCk7XHJcbiAgICAgICAgJD1jaGVlcmlvLmxvYWQoYCR7bHlyaWNJbkRvbX1gLCB7XHJcbiAgICAgICAgICAgIHhtbDoge1xyXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIH19KVxyXG4gICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHtseXJpY3M6JC50ZXh0KCl9KVxyXG4gICAgICAgICAgbGV0IGx5cmljcz1hd2FpdCBQcm9taXNlLmFsbChbJC5yb290KCkudGV4dCgpXSk7XHJcbiAgICAgICAgICBseXJpY3M9bHlyaWNzWzBdO1xyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgIGlmKGx5cmljcyA9PT0gJ251bGwnKSB0aHJvdyBgbHlyaWMgbm90IGZvdW5kYDtcclxuICAgICAgICAgIHJldHVybiBgJHtseXJpY3N9YDtcclxuICAgICAgXHJcbn1cclxuICAgICBcclxuICAgICAgXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFNvbmcoaWQpe1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBheGlvcyhgaHR0cHM6Ly9hcGkuZ2VuaXVzLmNvbS9zb25ncy8ke2lkfWAse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6YEJlYXJlciAke3Byb2Nlc3MuZW52LkFDQ0VTU19UT0tFTn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5yZXNwb25zZS5zb25nO1xyXG4gICBcclxuICBcclxufSIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7O1xyXG5pbXBvcnQgU29uZ0hlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NvbmdIZWFkZXInO1xyXG5pbXBvcnQgUmVsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvcmVsb2FkJztcclxuaW1wb3J0IHtnZXRMeXJpY3MsZmluZFNvbmd9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29uZyh7dGh1bWJuYWlsLGZ1bGx0aXRsZSxseXJpY3MsZXJyb3J9KXtcclxuICAgIGlmKGVycm9yKXtcclxuICAgICAgICByZXR1cm4oPFJlbG9hZC8+KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nY29udFwiPlxyXG4gICAgICAgPFNvbmdIZWFkZXIgdGh1bWJuYWlsPXt0aHVtYm5haWx9IGZ1bGx0aXRsZT17ZnVsbHRpdGxlfS8+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImx5cmljc1wiPntseXJpY3N9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICApXHJcblxyXG4gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzPSBhc3luYyAoY29udGV4dCk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7aWQscGF0aFRvTHlyaWNzfT1jb250ZXh0LnF1ZXJ5O1xyXG4gICAgXHJcbiAgICAgICAgY29uc3Qgc29uZz0gYXdhaXQgZmluZFNvbmcoaWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNvbmcpXHJcbiAgICAgICAgY29uc3QgbHlyaWNzID0gYXdhaXQgIGdldEx5cmljcyhwYXRoVG9MeXJpY3MpO1xyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsOmAke3NvbmcuaGVhZGVyX2ltYWdlX3RodW1ibmFpbF91cmx9YCxcclxuICAgICAgICAgICAgICAgIGZ1bGx0aXRsZTpgJHtzb25nLmZ1bGxfdGl0bGV9YCxcclxuICAgICAgICAgICAgICAgIGx5cmljcyxcclxuICAgICAgICAgICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh7ZXJyb3I6ZX0pO1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICAgICBlcnJvcjp0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoZWVyaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=