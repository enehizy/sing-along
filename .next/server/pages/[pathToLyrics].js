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
  let $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load(result.data);
  $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load($('.lyrics  > p').html(), {
    xml: {
      normalizeWhitespace: true
    }
  });
  const lyrics = $.root().text();
  return `${lyrics}`;
}
async function findSong(id) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.genius.com/songs/${id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    return response.data.response.song;
  } catch (e) {
    throw `${e}`;
  }
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
    // console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb25nSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW3BhdGhUb0x5cmljc10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGVlcmlvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJSZWxvYWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIlNvbmdIZWFkZXIiLCJ0aHVtYm5haWwiLCJmdWxsdGl0bGUiLCJxdWVyeVNvbmciLCJxIiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOIiwiZGF0YSIsImhpdHMiLCJnZXRMeXJpY3MiLCJwYXRoIiwicmVzdWx0IiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiaHRtbCIsInhtbCIsIm5vcm1hbGl6ZVdoaXRlc3BhY2UiLCJseXJpY3MiLCJyb290IiwidGV4dCIsImZpbmRTb25nIiwiaWQiLCJzb25nIiwiZSIsImVycm9yIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBhdGhUb0x5cmljcyIsInF1ZXJ5IiwicHJvcHMiLCJoZWFkZXJfaW1hZ2VfdGh1bWJuYWlsX3VybCIsImZ1bGxfdGl0bGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFF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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQVVIO0FBR00sTUFBTVEsa0JBQWtCLEdBQUUsTUFBT0MsT0FBUCxJQUFpQjtBQUM5QyxNQUFHO0FBQ0MsVUFBTTtBQUFDTCxRQUFEO0FBQUlNO0FBQUosUUFBa0JELE9BQU8sQ0FBQ0UsS0FBaEM7QUFFQSxVQUFNTixJQUFJLEdBQUUsTUFBTUYseURBQVEsQ0FBQ0MsRUFBRCxDQUExQixDQUhELENBSUM7O0FBQ0EsVUFBTUosTUFBTSxHQUFHLE1BQU9ULDBEQUFTLENBQUNtQixZQUFELENBQS9CO0FBR0EsV0FBTTtBQUNGRSxXQUFLLEVBQUM7QUFDRmpDLGlCQUFTLEVBQUUsR0FBRTBCLElBQUksQ0FBQ1EsMEJBQTJCLEVBRDNDO0FBRUZqQyxpQkFBUyxFQUFFLEdBQUV5QixJQUFJLENBQUNTLFVBQVcsRUFGM0I7QUFHRmQsY0FIRTtBQUlGTyxhQUFLLEVBQUM7QUFKSjtBQURKLEtBQU47QUFRSCxHQWhCRCxDQWlCQSxPQUFNRCxDQUFOLEVBQVE7QUFDSjtBQUNBLFdBQU07QUFDRk0sV0FBSyxFQUFDO0FBQ0hMLGFBQUssRUFBQztBQURIO0FBREosS0FBTjtBQUtIO0FBR0osQ0E1Qk0sQzs7Ozs7Ozs7Ozs7QUN6QlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW3BhdGhUb0x5cmljc10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1twYXRoVG9MeXJpY3NdLmpzXCIpO1xuIiwiXHJcbmZ1bmN0aW9uIFJlbG9hZCgpe1xyXG4gICAgXHJcbiAgICByZXR1cm4oPGgyIGNsYXNzTmFtZT1cInJlbG9hZFwiPlRoZXJlIHNlZW1zIHRvIGJlIGFuIGVycm9yIHdpdGggeW91ciBuZXR3b3JrICxjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24sYW5kIDxzcGFuIG9uQ2xpY2s9eygpPT57d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfX0+VHJ5IGFnYWluPC9zcGFuPjwvaDI+KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlbG9hZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gU29uZ0hlYWRlcih7dGh1bWJuYWlsLGZ1bGx0aXRsZX0pe1xyXG4gICAgcmV0dXJuKCA8ZGl2IGNsYXNzTmFtZT1cInNvbmdoZWFkZXJcIj5cclxuICAgIDxkaXYgPlxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiB3aWR0aD1cIjI1MHB4XCIgaGVpZ2h0PVwiMjUwcHhcIiBjbGFzc05hbWU9XCJzb25naW1nXCI+XHJcbiAgIDxjbGlwUGF0aCBpZD1cIm15Q2xpcFwiPlxyXG4gICBcclxuICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQ5LjZcIiAvPlxyXG5cclxuICAgIDwvY2xpcFBhdGg+XHJcbiAgIFxyXG4gICAgPGltYWdlIGNsaXBQYXRoPVwidXJsKCNteUNsaXApXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIGhyZWY9e3RodW1ibmFpbH0gLz5cclxuICAgIFxyXG4gICA8L3N2Zz5cclxuICAgIHsvKiA8aW1nIHNyYz17dGh1bWJuYWlsfS8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDI+e2Z1bGx0aXRsZX08L2gyPlxyXG4gICAgPC9kaXY+KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvbmdIZWFkZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeVNvbmcocSl7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGF4aW9zKGBodHRwczovL2FwaS5nZW5pdXMuY29tL3NlYXJjaD9xPSR7cX1gLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOmBCZWFyZXIgJHtwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU59YFxyXG4gICAgICAgIH1cclxuICAgIH0pOyBcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnJlc3BvbnNlLmhpdHM7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0THlyaWNzKHBhdGgpe1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCBheGlvcyhgaHR0cHM6Ly9nZW5pdXMuY29tLyR7cGF0aH1gKTtcclxuICAgICAgICBsZXQgJCA9IGNoZWVyaW8ubG9hZChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgJD1jaGVlcmlvLmxvYWQoJCgnLmx5cmljcyAgPiBwJykuaHRtbCgpLCB7XHJcbiAgICAgICAgICAgIHhtbDoge1xyXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgY29uc3QgbHlyaWNzPSQucm9vdCgpLnRleHQoKTtcclxuICAgICAgICAgIHJldHVybiBgJHtseXJpY3N9YDtcclxuICAgICAgXHJcbn1cclxuICAgICBcclxuICAgICAgXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFNvbmcoaWQpe1xyXG4gICB0cnl7XHJcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgYXhpb3MoYGh0dHBzOi8vYXBpLmdlbml1cy5jb20vc29uZ3MvJHtpZH1gLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOmBCZWFyZXIgJHtwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucmVzcG9uc2Uuc29uZztcclxuICAgfVxyXG4gICBjYXRjaChlKXtcclxuICAgICAgIHRocm93IGAke2V9YDtcclxuICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0Jzs7XHJcbmltcG9ydCBTb25nSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc29uZ0hlYWRlcic7XHJcbmltcG9ydCBSZWxvYWQgZnJvbSAnLi4vY29tcG9uZW50cy9yZWxvYWQnO1xyXG5pbXBvcnQge2dldEx5cmljcyxmaW5kU29uZ30gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb25nKHt0aHVtYm5haWwsZnVsbHRpdGxlLGx5cmljcyxlcnJvcn0pe1xyXG4gICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybig8UmVsb2FkLz4pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdjb250XCI+XHJcbiAgICAgICA8U29uZ0hlYWRlciB0aHVtYm5haWw9e3RodW1ibmFpbH0gZnVsbHRpdGxlPXtmdWxsdGl0bGV9Lz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibHlyaWNzXCI+e2x5cmljc308L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgIClcclxuXHJcbiBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM9IGFzeW5jIChjb250ZXh0KT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHtpZCxwYXRoVG9MeXJpY3N9PWNvbnRleHQucXVlcnk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBzb25nPSBhd2FpdCBmaW5kU29uZyhpZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc29uZylcclxuICAgICAgICBjb25zdCBseXJpY3MgPSBhd2FpdCAgZ2V0THlyaWNzKHBhdGhUb0x5cmljcyk7XHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICAgICB0aHVtYm5haWw6YCR7c29uZy5oZWFkZXJfaW1hZ2VfdGh1bWJuYWlsX3VybH1gLFxyXG4gICAgICAgICAgICAgICAgZnVsbHRpdGxlOmAke3NvbmcuZnVsbF90aXRsZX1gLFxyXG4gICAgICAgICAgICAgICAgbHlyaWNzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICAgICBlcnJvcjp0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoZWVyaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=