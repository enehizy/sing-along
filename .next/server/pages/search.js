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
  let $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load(`${result.data}`);
  const lyricInDom = $('.lyrics  > p').html();
  $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load(`${lyricInDom}`, {
    xml: {
      normalizeWhitespace: true
    }
  }); //   console.log({lyrics:$.text()})

  const lyrics = $.root().text();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb25nQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoZWVyaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJlbG9hZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiU29uZ0NhcmQiLCJpbWciLCJ0aXRsZSIsImFydGlzdE5hbWUiLCJmdWxsVGl0bGUiLCJwYXRoIiwiaWQiLCJyZXBsYWNlIiwicXVlcnlTb25nIiwicSIsInJlc3BvbnNlIiwiYXhpb3MiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTiIsImRhdGEiLCJoaXRzIiwiZ2V0THlyaWNzIiwicmVzdWx0IiwiJCIsImNoZWVyaW8iLCJsb2FkIiwibHlyaWNJbkRvbSIsImh0bWwiLCJ4bWwiLCJub3JtYWxpemVXaGl0ZXNwYWNlIiwibHlyaWNzIiwicm9vdCIsInRleHQiLCJmaW5kU29uZyIsInNvbmciLCJzZWFyY2giLCJzb25ncyIsImVycm9yIiwibWFwIiwiaW5kZXgiLCJzb25nX2FydF9pbWFnZV90aHVtYm5haWxfdXJsIiwicHJpbWFyeV9hcnRpc3QiLCJuYW1lIiwiZnVsbF90aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInByb3BzIiwiZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NlYXJjaC5qc1wiKTtcbiIsIlxyXG5mdW5jdGlvbiBSZWxvYWQoKXtcclxuICAgIFxyXG4gICAgcmV0dXJuKDxoMiBjbGFzc05hbWU9XCJyZWxvYWRcIj5UaGVyZSBzZWVtcyB0byBiZSBhbiBlcnJvciB3aXRoIHlvdXIgbmV0d29yayAsY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uLGFuZCA8c3BhbiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX19PlRyeSBhZ2Fpbjwvc3Bhbj48L2gyPilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWxvYWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZnVuY3Rpb24gU29uZ0NhcmQoe2ltZyx0aXRsZSxhcnRpc3ROYW1lLGZ1bGxUaXRsZSxwYXRoLGlkfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nY2FyZFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdjYXJkaW1hZ2VcIj48aW1nIHNyYz17aW1nfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ2NhcmRpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57YXJ0aXN0TmFtZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJnb3RvbHlyaWNidXR0b25cIj5nbyB0byBseXI8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnb3RvYnV0dG9uIHBvaW50ZXJcIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShgJHtwYXRofT9pZD0ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgfX0+VmlldyBMeXJpY3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb25nQ2FyZDsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5U29uZyhxKXtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgYXhpb3MoYGh0dHBzOi8vYXBpLmdlbml1cy5jb20vc2VhcmNoP3E9JHtxfWAse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6YEJlYXJlciAke3Byb2Nlc3MuZW52LkFDQ0VTU19UT0tFTn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7IFxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucmVzcG9uc2UuaGl0cztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMeXJpY3MocGF0aCl7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IGF4aW9zKGBodHRwczovL2dlbml1cy5jb20vJHtwYXRofWApO1xyXG4gICAgICAgIGxldCAkID0gY2hlZXJpby5sb2FkKGAke3Jlc3VsdC5kYXRhfWApO1xyXG4gICAgICAgIGNvbnN0IGx5cmljSW5Eb209JCgnLmx5cmljcyAgPiBwJykuaHRtbCgpO1xyXG4gICAgICAgICQ9Y2hlZXJpby5sb2FkKGAke2x5cmljSW5Eb219YCwge1xyXG4gICAgICAgICAgICB4bWw6IHtcclxuICAgICAgICAgICAgICBub3JtYWxpemVXaGl0ZXNwYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICB9fSlcclxuICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyh7bHlyaWNzOiQudGV4dCgpfSlcclxuICAgICAgICAgIGNvbnN0IGx5cmljcz0kLnJvb3QoKS50ZXh0KCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgIGlmKGx5cmljcyA9PT0gJ251bGwnKSB0aHJvdyBgbHlyaWMgbm90IGZvdW5kYDtcclxuICAgICAgICAgIHJldHVybiBgJHtseXJpY3N9YDtcclxuICAgICAgXHJcbn1cclxuICAgICBcclxuICAgICAgXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFNvbmcoaWQpe1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBheGlvcyhgaHR0cHM6Ly9hcGkuZ2VuaXVzLmNvbS9zb25ncy8ke2lkfWAse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6YEJlYXJlciAke3Byb2Nlc3MuZW52LkFDQ0VTU19UT0tFTn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5yZXNwb25zZS5zb25nO1xyXG4gICBcclxuICBcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb25nQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3NvbmdDYXJkJztcclxuaW1wb3J0IFJlbG9hZCBmcm9tICcuLi9jb21wb25lbnRzL3JlbG9hZCc7XHJcbmltcG9ydCB7cXVlcnlTb25nfSBmcm9tICcuLi9oZWxwZXJzJztcclxuZnVuY3Rpb24gc2VhcmNoKHtzb25ncywgZXJyb3J9KXtcclxuICAgXHJcbiAgIGlmKGVycm9yKXtcclxuICAgICAgIHJldHVybig8UmVsb2FkLz4pXHJcbiAgIH1cclxuICAgICAgIHJldHVybihcclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICB7c29uZ3MubWFwKChzb25nLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oPFNvbmdDYXJkIGtleT17aW5kZXh9IGltZz17c29uZy5yZXN1bHQuc29uZ19hcnRfaW1hZ2VfdGh1bWJuYWlsX3VybH0gdGl0bGU9e3NvbmcucmVzdWx0LnRpdGxlfSBhcnRpc3ROYW1lPXtzb25nLnJlc3VsdC5wcmltYXJ5X2FydGlzdC5uYW1lfSBmdWxsVGl0bGU9e3NvbmcucmVzdWx0LmZ1bGxfdGl0bGV9IHBhdGg9e3NvbmcucmVzdWx0LnBhdGh9IGlkPXtzb25nLnJlc3VsdC5pZH0vPilcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIClcclxuICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM9YXN5bmMgKGNvbnRleHQpPT57XHJcbiAgICBjb25zdCB7cX0gPWNvbnRleHQucXVlcnk7ICBcclxuICAgIHRyeXtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBxdWVyeVNvbmcocSk7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICAgICBzb25nczpyZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjp0cnVlXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8vICAgICB0cnl7IFxyXG4gICAgICAgIFxyXG4vLyAgICAgIGNvbnN0IHJlc3VsdD0gYXdhaXQgYXhpb3MoYC9hcGkvc2VhcmNoP3E9JHtxfWApO1xyXG4gICAgIFxyXG4vLyAgICAgIHJldHVybntcclxuLy8gICAgICAgICBwcm9wczp7XHJcbi8vICAgICAgICAgICAgIHNvbmdzOnJlc3VsdCxcclxuLy8gICAgICAgICAgICAgZXJyb3I6ZmFsc2VcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gICAgIGNhdGNoKGUpe1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coZSlcclxuLy8gICAgICAgIHJldHVybntcclxuLy8gICAgICAgICAgICBwcm9wczp7XHJcbi8vICAgICAgICAgICAgICBlcnJvcjp0cnVlXHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuLy8gICAgIH1cclxuIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==