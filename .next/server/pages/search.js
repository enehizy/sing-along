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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/search.js");
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

/***/ "./components/songCard.js":
/*!********************************!*\
  !*** ./components/songCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\components\\songCard.js";


function SongCard({
  img,
  title,
  artistName,
  fullTitle,
  path,
  id
}) {
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
        onClick: () => {
          location.replace(`${path}?id=${id}`);
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

/* harmony default export */ __webpack_exports__["default"] = (SongCard);

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

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_songCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/songCard */ "./components/songCard.js");
/* harmony import */ var _components_reload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reload */ "./components/reload.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers.js");

var _jsxFileName = "C:\\Users\\User\\Desktop\\projects\\sing-along\\pages\\search.js";





function search({
  songs,
  error
}) {
  if (error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_reload__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 15
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: songs.map((song, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_songCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        img: song.result.song_art_image_thumbnail_url,
        title: song.result.title,
        artistName: song.result.primary_artist.name,
        fullTitle: song.result.full_title,
        path: song.result.path,
        id: song.result.id
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 26
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

const getServerSideProps = async context => {
  const {
    q
  } = context.query;

  try {
    const response = await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["querySong"])(q);
    return {
      props: {
        songs: response,
        error: false
      }
    };
  } catch (e) {
    return {
      props: {
        error: true
      }
    };
  } //     try{ 
  //      const result= await axios(`/api/search?q=${q}`);
  //      return{
  //         props:{
  //             songs:result,
  //             error:false
  //         }
  //     }
  // }
  //     catch(e){
  //        console.log(e)
  //        return{
  //            props:{
  //              error:true
  //            }
  //        }
  //     }

};
/* harmony default export */ __webpack_exports__["default"] = (search);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb25nQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoZWVyaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJlbG9hZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiU29uZ0NhcmQiLCJpbWciLCJ0aXRsZSIsImFydGlzdE5hbWUiLCJmdWxsVGl0bGUiLCJwYXRoIiwiaWQiLCJyZXBsYWNlIiwicXVlcnlTb25nIiwicSIsInJlc3BvbnNlIiwiYXhpb3MiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTiIsImRhdGEiLCJoaXRzIiwiZ2V0THlyaWNzIiwicmVzdWx0IiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiaHRtbCIsInhtbCIsIm5vcm1hbGl6ZVdoaXRlc3BhY2UiLCJseXJpY3MiLCJyb290IiwidGV4dCIsImZpbmRTb25nIiwic29uZyIsImUiLCJzZWFyY2giLCJzb25ncyIsImVycm9yIiwibWFwIiwiaW5kZXgiLCJzb25nX2FydF9pbWFnZV90aHVtYm5haWxfdXJsIiwicHJpbWFyeV9hcnRpc3QiLCJuYW1lIiwiZnVsbF90aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QkFBVSxFQUFFNEIsSUFBSSxDQUFDWCxNQUFMLENBQVltQixjQUFaLENBQTJCQyxJQUF0STtBQUE0SSxpQkFBUyxFQUFFVCxJQUFJLENBQUNYLE1BQUwsQ0FBWXFCLFVBQW5LO0FBQStLLFlBQUksRUFBRVYsSUFBSSxDQUFDWCxNQUFMLENBQVlkLElBQWpNO0FBQXVNLFVBQUUsRUFBRXlCLElBQUksQ0FBQ1gsTUFBTCxDQUFZYjtBQUF2TixTQUFlOEIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSCxLQUZDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV047O0FBRU0sTUFBTUssa0JBQWtCLEdBQUMsTUFBT0MsT0FBUCxJQUFpQjtBQUM3QyxRQUFNO0FBQUNqQztBQUFELE1BQUtpQyxPQUFPLENBQUNDLEtBQW5COztBQUNBLE1BQUc7QUFFQyxVQUFNakMsUUFBUSxHQUFFLE1BQU1GLDBEQUFTLENBQUNDLENBQUQsQ0FBL0I7QUFDQSxXQUFNO0FBQ0ZtQyxXQUFLLEVBQUM7QUFDRlgsYUFBSyxFQUFDdkIsUUFESjtBQUVGd0IsYUFBSyxFQUFDO0FBRko7QUFESixLQUFOO0FBT0gsR0FWRCxDQVdBLE9BQU1ILENBQU4sRUFBUTtBQUNKLFdBQU07QUFDRmEsV0FBSyxFQUFDO0FBQ0ZWLGFBQUssRUFBQztBQURKO0FBREosS0FBTjtBQU1ILEdBcEI0QyxDQXFCakQ7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQyxDQTFDTTtBQTRDUUYscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsRUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZWFyY2guanNcIik7XG4iLCJcclxuZnVuY3Rpb24gUmVsb2FkKCl7XHJcbiAgICBcclxuICAgIHJldHVybig8aDIgY2xhc3NOYW1lPVwicmVsb2FkXCI+VGhlcmUgc2VlbXMgdG8gYmUgYW4gZXJyb3Igd2l0aCB5b3VyIG5ldHdvcmsgLGNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbixhbmQgPHNwYW4gb25DbGljaz17KCk9Pnt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9fT5UcnkgYWdhaW48L3NwYW4+PC9oMj4pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVsb2FkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmZ1bmN0aW9uIFNvbmdDYXJkKHtpbWcsdGl0bGUsYXJ0aXN0TmFtZSxmdWxsVGl0bGUscGF0aCxpZH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ2NhcmRcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nY2FyZGltYWdlXCI+PGltZyBzcmM9e2ltZ30vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdjYXJkaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2FydGlzdE5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiZ290b2x5cmljYnV0dG9uXCI+Z28gdG8gbHlyPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ290b2J1dHRvbiBwb2ludGVyXCIgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoYCR7cGF0aH0/aWQ9JHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgIH19PlZpZXcgTHlyaWNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29uZ0NhcmQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeVNvbmcocSl7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGF4aW9zKGBodHRwczovL2FwaS5nZW5pdXMuY29tL3NlYXJjaD9xPSR7cX1gLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOmBCZWFyZXIgJHtwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU59YFxyXG4gICAgICAgIH1cclxuICAgIH0pOyBcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnJlc3BvbnNlLmhpdHM7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0THlyaWNzKHBhdGgpe1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCBheGlvcyhgaHR0cHM6Ly9nZW5pdXMuY29tLyR7cGF0aH1gKTtcclxuICAgICAgICBsZXQgJCA9IGNoZWVyaW8ubG9hZChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgJD1jaGVlcmlvLmxvYWQoJCgnLmx5cmljcyAgPiBwJykuaHRtbCgpLCB7XHJcbiAgICAgICAgICAgIHhtbDoge1xyXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgY29uc3QgbHlyaWNzPSQucm9vdCgpLnRleHQoKTtcclxuICAgICAgICAgIHJldHVybiBgJHtseXJpY3N9YDtcclxuICAgICAgXHJcbn1cclxuICAgICBcclxuICAgICAgXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFNvbmcoaWQpe1xyXG4gICB0cnl7XHJcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgYXhpb3MoYGh0dHBzOi8vYXBpLmdlbml1cy5jb20vc29uZ3MvJHtpZH1gLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOmBCZWFyZXIgJHtwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucmVzcG9uc2Uuc29uZztcclxuICAgfVxyXG4gICBjYXRjaChlKXtcclxuICAgICAgIHRocm93IGAke2V9YDtcclxuICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNvbmdDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvc29uZ0NhcmQnO1xyXG5pbXBvcnQgUmVsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvcmVsb2FkJztcclxuaW1wb3J0IHtxdWVyeVNvbmd9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5mdW5jdGlvbiBzZWFyY2goe3NvbmdzLCBlcnJvcn0pe1xyXG4gICBcclxuICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgcmV0dXJuKDxSZWxvYWQvPilcclxuICAgfVxyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIHtzb25ncy5tYXAoKHNvbmcsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybig8U29uZ0NhcmQga2V5PXtpbmRleH0gaW1nPXtzb25nLnJlc3VsdC5zb25nX2FydF9pbWFnZV90aHVtYm5haWxfdXJsfSB0aXRsZT17c29uZy5yZXN1bHQudGl0bGV9IGFydGlzdE5hbWU9e3NvbmcucmVzdWx0LnByaW1hcnlfYXJ0aXN0Lm5hbWV9IGZ1bGxUaXRsZT17c29uZy5yZXN1bHQuZnVsbF90aXRsZX0gcGF0aD17c29uZy5yZXN1bHQucGF0aH0gaWQ9e3NvbmcucmVzdWx0LmlkfS8+KVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgKVxyXG4gIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcz1hc3luYyAoY29udGV4dCk9PntcclxuICAgIGNvbnN0IHtxfSA9Y29udGV4dC5xdWVyeTsgIFxyXG4gICAgdHJ5e1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IHF1ZXJ5U29uZyhxKTtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgICAgIHNvbmdzOnJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgICAgIGVycm9yOnRydWVcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuLy8gICAgIHRyeXsgXHJcbiAgICAgICAgXHJcbi8vICAgICAgY29uc3QgcmVzdWx0PSBhd2FpdCBheGlvcyhgL2FwaS9zZWFyY2g/cT0ke3F9YCk7XHJcbiAgICAgXHJcbi8vICAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHByb3BzOntcclxuLy8gICAgICAgICAgICAgc29uZ3M6cmVzdWx0LFxyXG4vLyAgICAgICAgICAgICBlcnJvcjpmYWxzZVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4vLyAgICAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgICAgIHByb3BzOntcclxuLy8gICAgICAgICAgICAgIGVycm9yOnRydWVcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGVlcmlvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9