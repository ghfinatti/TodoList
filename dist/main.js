/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/style.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n    align-items: center;\n}\n\n.logoimg{\n    width: 65px;\n    min-width: 65px;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n    overflow:scroll;\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    max-height: 247px;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit, #edit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover, #edit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    min-width: fit-content;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    justify-content: space-evenly;\n    min-width:507px;\n    margin-top: 15px;\n    margin-left: 15px;\n    width: 60%;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    align-self: center;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    min-width: 512px;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n    overflow:scroll;\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n    margin-left: 35px;\n}\n\n.task:hover{\n    text-decoration: line-through;\n    cursor:pointer;\n}\n\n.taskcompleted{\n    text-decoration: line-through;\n    color: red;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}\n\n.editbutton, .deletebutton{\n    width: 22px;\n    height: 22px;\n    cursor:pointer;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.tooltip{\n    position: relative;\n    display: inline-block;\n    padding-top:5px;\n}\n\n.tooltip .tooltiptext{\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(0,0,0,0.5);\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    top: 100%;\n    left: 50%;\n    margin-left: -60px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip .tooltiptext::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;  /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent black transparent;\n}\n\n.tooltip .tooltiptext {\n    opacity: 0;\n    transition: opacity 1s;\n}\n  \n.tooltip:hover .tooltiptext {\n    opacity: 1;\n}\n\n\n@media screen and (max-width: 950px) {\n    .menu-title{\n        font-size: 12px;\n    }\n\n    #add-project-btn, .menuprojectname, .arrow{\n        font-size: 10px;\n    }\n\n    .project-date, .project-name, .project-priority{\n        font-size: 14px;\n        align-self: center;\n    }\n}", "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n    align-items: center;\n}\n\n.logoimg{\n    width: 65px;\n    min-width: 65px;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n    overflow:scroll;\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    max-height: 247px;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit, #edit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover, #edit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    min-width: fit-content;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    justify-content: space-evenly;\n    min-width:507px;\n    margin-top: 15px;\n    margin-left: 15px;\n    width: 60%;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    align-self: center;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    min-width: 512px;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n    overflow:scroll;\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n    margin-left: 35px;\n}\n\n.task:hover{\n    text-decoration: line-through;\n    cursor:pointer;\n}\n\n.taskcompleted{\n    text-decoration: line-through;\n    color: red;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}\n\n.editbutton, .deletebutton{\n    width: 22px;\n    height: 22px;\n    cursor:pointer;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.tooltip{\n    position: relative;\n    display: inline-block;\n    padding-top:5px;\n}\n\n.tooltip .tooltiptext{\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(0,0,0,0.5);\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    top: 100%;\n    left: 50%;\n    margin-left: -60px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip .tooltiptext::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;  /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent black transparent;\n}\n\n.tooltip .tooltiptext {\n    opacity: 0;\n    transition: opacity 1s;\n}\n  \n.tooltip:hover .tooltiptext {\n    opacity: 1;\n}\n\n\n@media screen and (max-width: 950px) {\n    .menu-title{\n        font-size: 12px;\n    }\n\n    #add-project-btn, .menuprojectname, .arrow{\n        font-size: 10px;\n    }\n\n    .project-date, .project-name, .project-priority{\n        font-size: 14px;\n        align-self: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isFuture/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isFuture/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */

function isFuture(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() > Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./dist/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM-Projects.js":
/*!*****************************!*\
  !*** ./src/DOM-Projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "addButton": () => (/* binding */ addButton),
/* harmony export */   "cancelButton": () => (/* binding */ cancelButton),
/* harmony export */   "projectsFromMenu": () => (/* binding */ projectsFromMenu),
/* harmony export */   "deleteBtn": () => (/* binding */ deleteBtn),
/* harmony export */   "editBtn": () => (/* binding */ editBtn),
/* harmony export */   "projectName": () => (/* binding */ projectName),
/* harmony export */   "projectDate": () => (/* binding */ projectDate),
/* harmony export */   "projectPriority": () => (/* binding */ projectPriority),
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm),
/* harmony export */   "closeProjectForm": () => (/* binding */ closeProjectForm),
/* harmony export */   "addProjectToApp": () => (/* binding */ addProjectToApp),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "emptyDiv": () => (/* binding */ emptyDiv),
/* harmony export */   "populateProjectScreen": () => (/* binding */ populateProjectScreen),
/* harmony export */   "getProjectByIndex": () => (/* binding */ getProjectByIndex),
/* harmony export */   "populateProjectMenu": () => (/* binding */ populateProjectMenu),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "renderUI": () => (/* binding */ renderUI)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOM_Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-Tasks */ "./src/DOM-Tasks.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isFuture/index.js");




const newProject = document.querySelector('#add-project-btn');
const addButton = document.querySelector('#submit');
const cancelButton = document.querySelector('#cancel');
const projectsFromMenu = document.querySelectorAll('.project');
const deleteBtn = document.querySelector('.deletebutton');
const editBtn = document.querySelector('.editbutton');
const projectName = document.querySelector('.project-name');
const projectDate = document.querySelector('.project-date');
const projectPriority = document.querySelector('.project-priority');

const priorityInput = document.querySelectorAll('.priority-btns');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');

const openProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    nameInput.value = "";
    dateInput.value = "";
    if (getComputedStyle(projectForm).zIndex == "-1"){
        projectForm.style.zIndex = "0";
        projectForm.animate([
            {transform: "scale(0.3)",},
            {transform: "scale(1)",}
        ], 150);
    };
};

const closeProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
    projectForm.animate([
        {transform: "scale(1)",},
        {transform: "scale(0)",}
    ], 150);
    setTimeout(() => {projectForm.style.zIndex = "-1"}, 150);
};

const addProjectToApp = () => {
    const priority = getPriority(priorityInput)
    const repeatedName = checkForRepeatedName(nameInput.value);
    const formattedDate = changeDateFormat(dateInput.value);
    console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate))
    if (repeatedName == true){
        alert("Project name already used")
    }
    else if (priority === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information")
    }else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate) == false){
        alert("Choose a future date")
    }else{
        const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.project(nameInput.value,dateInput.value, priority);
        newProject.addToProjects()
        populateProjectMenu();
        closeProjectForm();
        updateToLastCreatedProject();
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)();
    }
};

const updateToLastCreatedProject = () => {
    const lastProjectIndex = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.length-1;
    projectName.textContent = `${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[lastProjectIndex].title}`;
    projectDate.textContent = `Date: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[lastProjectIndex].dueDate}`;
    projectPriority.textContent = `Priority: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[lastProjectIndex].priority}`;
    
    (0,_DOM_Tasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
}

const createDiv = (text, cssClass) => {
    const newElement = document.createElement('div');
    newElement.classList.add(cssClass);
    newElement.textContent = text;
    return newElement
}

const addProjectToMenu = (projectName) => {
    const projectsContainer = document.querySelector('.projects-container');
    const projectDiv = createDiv('','project');
    const nameDiv = createDiv(projectName,'menuprojectname');
    const arrowDiv = createDiv('>','arrow');

    projectsContainer.appendChild(projectDiv);
    projectDiv.appendChild(nameDiv);
    projectDiv.appendChild(arrowDiv);

    const projectsFromMenu = document.querySelectorAll('.menuprojectname');
    projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',populateProjectScreen)});
};


const getPriority = (priorityNode) => {
    if (priorityNode[0].checked == true){
        return "High"
    }else if(priorityNode[1].checked == true){
        return "Normal"
    }else if(priorityNode[2].checked == true){
        return "Low"
    }else{
        return null
    }
}

const emptyDiv = (div) => {
    const divToBeEmpty = document.querySelector(div);
    while (divToBeEmpty.firstChild){
        divToBeEmpty.removeChild(divToBeEmpty.lastChild);
    };
};

const populateProjectScreen = (e) => {
    const projectPosition = getProjectByIndex(e.target.textContent);

    projectName.textContent = `${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[projectPosition].title}`;
    projectDate.textContent = `Date: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[projectPosition].dueDate}`;
    projectPriority.textContent = `Priority: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[projectPosition].priority}`;
    
    (0,_DOM_Tasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

}

const getProjectByIndex = (projectName) => {
    let i = 0
    while(_projects__WEBPACK_IMPORTED_MODULE_0__.projects[i].title != projectName){
        i++
    }
    return i
}

const checkForRepeatedName = (name) => {
    let repeatedName = false
    for(let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++){
        if (name.toLowerCase() === _projects__WEBPACK_IMPORTED_MODULE_0__.projects[i].title.toLowerCase()){
            repeatedName = true
        }
    }
    return repeatedName
}

const populateProjectMenu = () => {
    emptyDiv('.projects-container');
    for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__.projects.length;i++){
        addProjectToMenu(_projects__WEBPACK_IMPORTED_MODULE_0__.projects[i].title);
    }
}

const deleteProject = () => {
    if (_projects__WEBPACK_IMPORTED_MODULE_0__.projects.length > 1){
        const projectPosition = getProjectByIndex(projectName.textContent);
        _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectPosition,1);
        populateProjectMenu();
        updateToLastCreatedProject();
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)();
    }else{
        alert(`You can't delete all projects`);
    }
}

const editProject = () => {
    addButton.value = "Edit";
    addButton.removeEventListener('click', addProjectToApp);
    
    openProjectForm();
    
    //const currentProject = projects[getProjectByIndex(projectName.textContent)];
    const dateString = projectDate.textContent.split(" ")[1]
    const priorityString = projectPriority.textContent.split(" ")[1]
    
    dateInput.value = dateString;
    nameInput.value = projectName.textContent;
    
    if(priorityString == "High"){
        priorityInput[0].checked = true
    } else if (priorityString == "Normal"){
        priorityInput[1].checked = true
    } else {
        priorityInput[2].checked = true
    }

    addButton.addEventListener('click', editProjectArray)

}

const editProjectArray = () => {
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[getProjectByIndex(projectName.textContent)];
    const priority = getPriority(priorityInput);
    const repeatedName = checkForRepeatedName(nameInput.value);
    const checkNameChange = !(projectName.textContent = nameInput.value);
    if (repeatedName == true && checkNameChange == true){
        alert("Project name already used");
    }
    else if (priority === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information");
    }else{
        currentProject.title = nameInput.value;
        currentProject.dueDate = dateInput.value;
        currentProject.priority = priority;

        projectName.textContent = `${currentProject.title}`;
        projectDate.textContent = `Date: ${currentProject.dueDate}`;
        projectPriority.textContent = `Priority: ${currentProject.priority}`;
        
        populateProjectMenu();
        closeProjectForm();
        addButton.value = "Add";
        addButton.removeEventListener('click', editProjectArray);
        addButton.addEventListener('click', addProjectToApp);
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)();
    }
}

const changeDateFormat = (date) => {
    const year = date.slice(0,4)
    const month = date.slice(5,7)-1
    const day = date.slice(8,10)
    const newDate = new Date(year,month,day)
    return newDate
}

const renderProjectHeader = () => {
    projectName.textContent = `${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[0].title}`;
    projectDate.textContent = `Date: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[0].dueDate}`;
    projectPriority.textContent = `Priority: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[0].priority}`;
}

const renderUI = () => {
    renderProjectHeader();
    (0,_DOM_Tasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
    populateProjectMenu();
}

/***/ }),

/***/ "./src/DOM-Tasks.js":
/*!**************************!*\
  !*** ./src/DOM-Tasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskBtn": () => (/* binding */ addTaskBtn),
/* harmony export */   "taskInput": () => (/* binding */ taskInput),
/* harmony export */   "addTaskToArray": () => (/* binding */ addTaskToArray),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "addTaskWithEnter": () => (/* binding */ addTaskWithEnter)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOM_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-Projects */ "./src/DOM-Projects.js");



const addTaskBtn = document.querySelector('.addtaskbtn');
const taskInput = document.querySelector('.taskinput');
const tasksContainer = document.querySelector('.taskscontainer');

const addTaskToArray = () => {
    if (taskInput.value != ""){ 
        const newTask = new _projects__WEBPACK_IMPORTED_MODULE_0__.task(taskInput.value);
        const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.getProjectByIndex)(_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent)];
        newTask.addToProject(currentProject);
        taskInput.value = "";
        renderTasks();
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)();
    };
}

const createTaskDiv = (taskDescription, completed) => {
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.getProjectByIndex)(_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent)];

    const taskContainer = (0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.createDiv)('', 'task-container');
    tasksContainer.appendChild(taskContainer);

    const deleteIcon = document.createElement('img')
    deleteIcon.src = 'images/delete.png';
    deleteIcon.classList.add('deleteicon');
    taskContainer.appendChild(deleteIcon)

    const taskLi = document.createElement('li');
    taskLi.classList.add('task');
    taskLi.textContent = taskDescription
    if (completed == true){
        taskLi.classList.add('taskcompleted');
    }
    taskContainer.appendChild(taskLi);
}

const renderTasks = () => {
    ;(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.emptyDiv)('.taskscontainer');
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.getProjectByIndex)(_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent)];
    for (let i = 0; i < currentProject.tasks.length; i++){
        createTaskDiv(currentProject.tasks[i].description, currentProject.tasks[i].checklist);
    }

    const deleteBtns = document.querySelectorAll('.deleteicon');
    const taskDescs = document.querySelectorAll('.task');

    for (let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].dataset.tasknum = i;
        taskDescs[i].dataset.tasknum = i;
    }
    
    deleteBtns.forEach(deleteBtn => {deleteBtn.addEventListener('click',deleteTask)});
    taskDescs.forEach(taskDesc => {taskDesc.addEventListener('click',completeTask)});
}

const addTaskWithEnter = (e) => {
    if(e.keyCode == 13){
        const addTaskBtn = document.querySelector('.addtaskbtn');
        addTaskBtn.click();
        e.target.value = "";
    }
}

const deleteTask = (e) => {
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.getProjectByIndex)(_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent)];

    const taskIndex = e.target.dataset.tasknum;
    currentProject.tasks.splice(taskIndex, 1);

    renderTasks();
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)();

}

const completeTask = (e) => {
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.getProjectByIndex)(_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent)];

    const taskIndex = e.target.dataset.tasknum;
    if (currentProject.tasks[taskIndex].checklist == false){
        currentProject.tasks[taskIndex].checklist = true;
    }else{
        currentProject.tasks[taskIndex].checklist = false;
    }

    renderTasks();
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "saveLocalStorage": () => (/* binding */ saveLocalStorage),
/* harmony export */   "restoreLocalStorage": () => (/* binding */ restoreLocalStorage)
/* harmony export */ });
/* harmony import */ var _DOM_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-Projects */ "./src/DOM-Projects.js");
/* harmony import */ var _DOM_Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-Tasks */ "./src/DOM-Tasks.js");



let projects = [
    {title:"Finish Odin Project",dueDate:"2022-04-01",priority:"High",
    tasks:[
        {description:"Finish Foundations",checklist:true},
        {description:"Finish To-do App",checklist:true},
        {description:"Finish JavaScript",checklist:false},
        {description:"Learn React",checklist:false},
        {description:"Learn Node.js",checklist:false}]}
];

class project{

    constructor(title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tasks = [];
    }

    addToProjects(){
        projects.push(this)
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

class task{
    constructor(description){
        this.description = description;
        this.checklist = false;
    }

    addToProject(project){
        project.tasks.push(this)
    }
}

function saveLocalStorage(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

function restoreLocalStorage(){
    projects = JSON.parse(localStorage.getItem('projects'));
    _DOM_Projects__WEBPACK_IMPORTED_MODULE_0__.populateProjectMenu();
    _DOM_Projects__WEBPACK_IMPORTED_MODULE_0__.projectName.textContent = `${projects[0].title}`;
    _DOM_Projects__WEBPACK_IMPORTED_MODULE_0__.projectDate.textContent = `Date: ${projects[0].dueDate}`;
    _DOM_Projects__WEBPACK_IMPORTED_MODULE_0__.projectPriority.textContent = `Priority: ${projects[0].priority}`;

    _DOM_Tasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks();
}



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
/******/ 			id: moduleId,
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dist/style.css */ "./dist/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-Projects */ "./src/DOM-Projects.js");
/* harmony import */ var _DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-Tasks */ "./src/DOM-Tasks.js");






//projects listeners
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.newProject.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.openProjectForm);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.addButton.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.addProjectToApp);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.cancelButton.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.deleteBtn.addEventListener('click',_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.deleteProject);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.populateProjectScreen)});
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.editBtn.addEventListener('click',_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.editProject);

//tasks listeners
_DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.addTaskBtn.addEventListener('click', _DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.addTaskToArray);
_DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.taskInput.addEventListener('keyup', _DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.addTaskWithEnter);

(0,_projects__WEBPACK_IMPORTED_MODULE_1__.restoreLocalStorage)();
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.renderUI();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDhEQUEyQjtBQUMvQixJQUFJLGtFQUErQixNQUFNLGtCQUFrQjtBQUMzRCxJQUFJLGtFQUErQixZQUFZLG9CQUFvQjtBQUNuRSxJQUFJLHNFQUFtQyxnQkFBZ0IscUJBQXFCOztBQUU1RSxJQUFJLG1EQUFtQjtBQUN2Qjs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055QjtBQUN3QjtBQUNQO0FBQ0g7QUFDRDs7QUFFdEM7QUFDQSxzRUFBbUMsVUFBVSwwREFBdUI7QUFDcEUscUVBQWtDLFVBQVUsMERBQXVCO0FBQ25FLHdFQUFxQyxVQUFVLDJEQUF3QjtBQUN2RSxxRUFBa0MsU0FBUyx3REFBcUI7QUFDaEUsbUVBQWdDLHFCQUFxQix5Q0FBeUMsZ0VBQTZCLEVBQUU7QUFDN0gsbUVBQWdDLFNBQVMsc0RBQW1COztBQUU1RDtBQUNBLG1FQUFtQyxVQUFVLHNEQUFzQjtBQUNuRSxrRUFBa0MsVUFBVSx3REFBd0I7O0FBRXBFLDhEQUFtQjtBQUNuQixtREFBZ0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vZGlzdC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0Z1dHVyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vZGlzdC9zdHlsZS5jc3M/YjVjNiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS1Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00tVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOndyYXA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDU5LCAxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ29pbWd7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBtaW4td2lkdGg6IDY1cHg7XFxuICAgIG1hcmdpbjoyMHB4O1xcbn1cXG5cXG5oMXtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1tZW51e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNzMsIDE2Nyk7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuLnRvZG9zLWRpc3BsYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjMzLCAyMjgsIDEpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIG1pbi13aWR0aDogMzg2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgbWF4LWhlaWdodDogMjQ3cHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjRweCkgc2F0dXJhdGUoMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mb3JtLXRpdGxle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxubGFiZWwsIGlucHV0e1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuLnN1Ym1pdC1idG5ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jY2FuY2VsLCAjc3VibWl0LCAjZWRpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxMSwgMjEyLCAyNTUsIDEpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY2FuY2VsOmhvdmVyLCAjc3VibWl0OmhvdmVyLCAjZWRpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTUxLCAxNTIsIDI1NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTYsIDE3OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOnNvbGlkIDFweCBibGFjaztcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxM3B4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ1LCAxODQsIDEwNSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnVwcm9qZWN0bmFtZTpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIHdpZHRoOjgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYXJyb3d7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1pbi13aWR0aDo1MDdweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1kYXRlLCAucHJvamVjdC1uYW1lLCAucHJvamVjdC1wcmlvcml0eXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgbWluLXdpZHRoOiA1MTJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigxMzEsIDEzMSwgMTMxKTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4udGFza2NvbXBsZXRlZHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrc2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuLmFkZHRhc2tjb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuLnRhc2tpbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmVkaXRpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG59XFxuXFxuLmRlbGV0ZWljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uYWRkdGFza2J0bntcXG4gICAgaGVpZ2h0OjIycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRidXR0b24sIC5kZWxldGVidXR0b257XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvb2x0aXB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nLXRvcDo1cHg7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwMCU7ICAvKiBBdCB0aGUgdG9wIG9mIHRoZSB0b29sdGlwICovXFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG4gIFxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIC5tZW51LXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgICNhZGQtcHJvamVjdC1idG4sIC5tZW51cHJvamVjdG5hbWUsIC5hcnJvd3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kYXRlLCAucHJvamVjdC1uYW1lLCAucHJvamVjdC1wcmlvcml0eXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNY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IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOndyYXA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDU5LCAxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ29pbWd7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBtaW4td2lkdGg6IDY1cHg7XFxuICAgIG1hcmdpbjoyMHB4O1xcbn1cXG5cXG5oMXtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1tZW51e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNzMsIDE2Nyk7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuLnRvZG9zLWRpc3BsYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjMzLCAyMjgsIDEpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIG1pbi13aWR0aDogMzg2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgbWF4LWhlaWdodDogMjQ3cHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjRweCkgc2F0dXJhdGUoMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mb3JtLXRpdGxle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxubGFiZWwsIGlucHV0e1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuLnN1Ym1pdC1idG5ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jY2FuY2VsLCAjc3VibWl0LCAjZWRpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxMSwgMjEyLCAyNTUsIDEpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY2FuY2VsOmhvdmVyLCAjc3VibWl0OmhvdmVyLCAjZWRpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTUxLCAxNTIsIDI1NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTYsIDE3OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOnNvbGlkIDFweCBibGFjaztcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxM3B4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ1LCAxODQsIDEwNSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnVwcm9qZWN0bmFtZTpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIHdpZHRoOjgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYXJyb3d7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1pbi13aWR0aDo1MDdweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1kYXRlLCAucHJvamVjdC1uYW1lLCAucHJvamVjdC1wcmlvcml0eXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgbWluLXdpZHRoOiA1MTJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigxMzEsIDEzMSwgMTMxKTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4udGFza2NvbXBsZXRlZHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrc2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuLmFkZHRhc2tjb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuLnRhc2tpbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmVkaXRpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG59XFxuXFxuLmRlbGV0ZWljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uYWRkdGFza2J0bntcXG4gICAgaGVpZ2h0OjIycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRidXR0b24sIC5kZWxldGVidXR0b257XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvb2x0aXB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nLXRvcDo1cHg7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwMCU7ICAvKiBBdCB0aGUgdG9wIG9mIHRoZSB0b29sdGlwICovXFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG4gIFxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIC5tZW51LXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgICNhZGQtcHJvamVjdC1idG4sIC5tZW51cHJvamVjdG5hbWUsIC5hcnJvd3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kYXRlLCAucHJvamVjdC1uYW1lLCAucHJvamVjdC1wcmlvcml0eXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0Z1dHVyZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIGZ1dHVyZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAzMSBEZWNlbWJlciAyMDE0IGluIHRoZSBmdXR1cmU/XG4gKiB2YXIgcmVzdWx0ID0gaXNGdXR1cmUobmV3IERhdGUoMjAxNCwgMTEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRnV0dXJlKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA+IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3QsIHByb2plY3RzLCBzYXZlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vRE9NLVRhc2tzXCI7XG5pbXBvcnQge2Zvcm1hdCwgaXNGdXR1cmV9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJyk7XG5leHBvcnQgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuZXhwb3J0IGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwnKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0Zyb21NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbmV4cG9ydCBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0YnV0dG9uJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kYXRlJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcHJpb3JpdHknKTtcblxuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eS1idG5zJyk7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcblxuZXhwb3J0IGNvbnN0IG9wZW5Qcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUocHJvamVjdEZvcm0pLnpJbmRleCA9PSBcIi0xXCIpe1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS56SW5kZXggPSBcIjBcIjtcbiAgICAgICAgcHJvamVjdEZvcm0uYW5pbWF0ZShbXG4gICAgICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDAuMylcIix9LFxuICAgICAgICAgICAge3RyYW5zZm9ybTogXCJzY2FsZSgxKVwiLH1cbiAgICAgICAgXSwgMTUwKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uYW5pbWF0ZShbXG4gICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMSlcIix9LFxuICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDApXCIsfVxuICAgIF0sIDE1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7cHJvamVjdEZvcm0uc3R5bGUuekluZGV4ID0gXCItMVwifSwgMTUwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0VG9BcHAgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBnZXRQcmlvcml0eShwcmlvcml0eUlucHV0KVxuICAgIGNvbnN0IHJlcGVhdGVkTmFtZSA9IGNoZWNrRm9yUmVwZWF0ZWROYW1lKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGNoYW5nZURhdGVGb3JtYXQoZGF0ZUlucHV0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpc0Z1dHVyZShmb3JtYXR0ZWREYXRlKSlcbiAgICBpZiAocmVwZWF0ZWROYW1lID09IHRydWUpe1xuICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IHVzZWRcIilcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IG51bGwgfHwgbmFtZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZGF0ZUlucHV0LnZhbHVlID09IFwiXCIpe1xuICAgICAgICBhbGVydChcIkMnbW9uLCBiZSBuaWNlIGFuZCBmaWxsIGFsbCBpbmZvcm1hdGlvblwiKVxuICAgIH1lbHNlIGlmIChpc0Z1dHVyZShmb3JtYXR0ZWREYXRlKSA9PSBmYWxzZSl7XG4gICAgICAgIGFsZXJ0KFwiQ2hvb3NlIGEgZnV0dXJlIGRhdGVcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KG5hbWVJbnB1dC52YWx1ZSxkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5KTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRUb1Byb2plY3RzKClcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIHVwZGF0ZVRvTGFzdENyZWF0ZWRQcm9qZWN0KCk7XG4gICAgICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG59O1xuXG5jb25zdCB1cGRhdGVUb0xhc3RDcmVhdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBsYXN0UHJvamVjdEluZGV4ID0gcHJvamVjdHMubGVuZ3RoLTE7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS50aXRsZX1gO1xuICAgIHByb2plY3REYXRlLnRleHRDb250ZW50ID0gYERhdGU6ICR7cHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0uZHVlRGF0ZX1gO1xuICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS5wcmlvcml0eX1gO1xuICAgIFxuICAgIHJlbmRlclRhc2tzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXYgPSAodGV4dCwgY3NzQ2xhc3MpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gbmV3RWxlbWVudFxufVxuXG5jb25zdCBhZGRQcm9qZWN0VG9NZW51ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGNyZWF0ZURpdignJywncHJvamVjdCcpO1xuICAgIGNvbnN0IG5hbWVEaXYgPSBjcmVhdGVEaXYocHJvamVjdE5hbWUsJ21lbnVwcm9qZWN0bmFtZScpO1xuICAgIGNvbnN0IGFycm93RGl2ID0gY3JlYXRlRGl2KCc+JywnYXJyb3cnKTtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChhcnJvd0Rpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0c0Zyb21NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVwcm9qZWN0bmFtZScpO1xuICAgIHByb2plY3RzRnJvbU1lbnUuZm9yRWFjaChwcm9qZWN0RnJvbU1lbnUgPT4ge3Byb2plY3RGcm9tTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscG9wdWxhdGVQcm9qZWN0U2NyZWVuKX0pO1xufTtcblxuXG5jb25zdCBnZXRQcmlvcml0eSA9IChwcmlvcml0eU5vZGUpID0+IHtcbiAgICBpZiAocHJpb3JpdHlOb2RlWzBdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIkhpZ2hcIlxuICAgIH1lbHNlIGlmKHByaW9yaXR5Tm9kZVsxXS5jaGVja2VkID09IHRydWUpe1xuICAgICAgICByZXR1cm4gXCJOb3JtYWxcIlxuICAgIH1lbHNlIGlmKHByaW9yaXR5Tm9kZVsyXS5jaGVja2VkID09IHRydWUpe1xuICAgICAgICByZXR1cm4gXCJMb3dcIlxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVtcHR5RGl2ID0gKGRpdikgPT4ge1xuICAgIGNvbnN0IGRpdlRvQmVFbXB0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGl2KTtcbiAgICB3aGlsZSAoZGl2VG9CZUVtcHR5LmZpcnN0Q2hpbGQpe1xuICAgICAgICBkaXZUb0JlRW1wdHkucmVtb3ZlQ2hpbGQoZGl2VG9CZUVtcHR5Lmxhc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3B1bGF0ZVByb2plY3RTY3JlZW4gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RQb3NpdGlvbiA9IGdldFByb2plY3RCeUluZGV4KGUudGFyZ2V0LnRleHRDb250ZW50KTtcblxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdFBvc2l0aW9uXS50aXRsZX1gO1xuICAgIHByb2plY3REYXRlLnRleHRDb250ZW50ID0gYERhdGU6ICR7cHJvamVjdHNbcHJvamVjdFBvc2l0aW9uXS5kdWVEYXRlfWA7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzW3Byb2plY3RQb3NpdGlvbl0ucHJpb3JpdHl9YDtcbiAgICBcbiAgICByZW5kZXJUYXNrcygpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0QnlJbmRleCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGxldCBpID0gMFxuICAgIHdoaWxlKHByb2plY3RzW2ldLnRpdGxlICE9IHByb2plY3ROYW1lKXtcbiAgICAgICAgaSsrXG4gICAgfVxuICAgIHJldHVybiBpXG59XG5cbmNvbnN0IGNoZWNrRm9yUmVwZWF0ZWROYW1lID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcmVwZWF0ZWROYW1lID0gZmFsc2VcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpID09PSBwcm9qZWN0c1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgICAgIHJlcGVhdGVkTmFtZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVwZWF0ZWROYW1lXG59XG5cbmV4cG9ydCBjb25zdCBwb3B1bGF0ZVByb2plY3RNZW51ID0gKCkgPT4ge1xuICAgIGVtcHR5RGl2KCcucHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgYWRkUHJvamVjdFRvTWVudShwcm9qZWN0c1tpXS50aXRsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RQb3NpdGlvbiA9IGdldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RQb3NpdGlvbiwxKTtcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuICAgICAgICB1cGRhdGVUb0xhc3RDcmVhdGVkUHJvamVjdCgpO1xuICAgICAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG4gICAgfWVsc2V7XG4gICAgICAgIGFsZXJ0KGBZb3UgY2FuJ3QgZGVsZXRlIGFsbCBwcm9qZWN0c2ApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGFkZEJ1dHRvbi52YWx1ZSA9IFwiRWRpdFwiO1xuICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0FwcCk7XG4gICAgXG4gICAgb3BlblByb2plY3RGb3JtKCk7XG4gICAgXG4gICAgLy9jb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IHByb2plY3REYXRlLnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IHByaW9yaXR5U3RyaW5nID0gcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXVxuICAgIFxuICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGVTdHJpbmc7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgaWYocHJpb3JpdHlTdHJpbmcgPT0gXCJIaWdoXCIpe1xuICAgICAgICBwcmlvcml0eUlucHV0WzBdLmNoZWNrZWQgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChwcmlvcml0eVN0cmluZyA9PSBcIk5vcm1hbFwiKXtcbiAgICAgICAgcHJpb3JpdHlJbnB1dFsxXS5jaGVja2VkID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5SW5wdXRbMl0uY2hlY2tlZCA9IHRydWVcbiAgICB9XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdEFycmF5KVxuXG59XG5cbmNvbnN0IGVkaXRQcm9qZWN0QXJyYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0UHJpb3JpdHkocHJpb3JpdHlJbnB1dCk7XG4gICAgY29uc3QgcmVwZWF0ZWROYW1lID0gY2hlY2tGb3JSZXBlYXRlZE5hbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICBjb25zdCBjaGVja05hbWVDaGFuZ2UgPSAhKHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZUlucHV0LnZhbHVlKTtcbiAgICBpZiAocmVwZWF0ZWROYW1lID09IHRydWUgJiYgY2hlY2tOYW1lQ2hhbmdlID09IHRydWUpe1xuICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IHVzZWRcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09PSBudWxsIHx8IG5hbWVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJDJ21vbiwgYmUgbmljZSBhbmQgZmlsbCBhbGwgaW5mb3JtYXRpb25cIik7XG4gICAgfWVsc2V7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRpdGxlID0gbmFtZUlucHV0LnZhbHVlO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5kdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFByb2plY3QudGl0bGV9YDtcbiAgICAgICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtjdXJyZW50UHJvamVjdC5kdWVEYXRlfWA7XG4gICAgICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtjdXJyZW50UHJvamVjdC5wcmlvcml0eX1gO1xuICAgICAgICBcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIGFkZEJ1dHRvbi52YWx1ZSA9IFwiQWRkXCI7XG4gICAgICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0QXJyYXkpO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0VG9BcHApO1xuICAgICAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VEYXRlRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5zbGljZSgwLDQpXG4gICAgY29uc3QgbW9udGggPSBkYXRlLnNsaWNlKDUsNyktMVxuICAgIGNvbnN0IGRheSA9IGRhdGUuc2xpY2UoOCwxMClcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoeWVhcixtb250aCxkYXkpXG4gICAgcmV0dXJuIG5ld0RhdGVcbn1cblxuY29uc3QgcmVuZGVyUHJvamVjdEhlYWRlciA9ICgpID0+IHtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzWzBdLnRpdGxlfWA7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1swXS5kdWVEYXRlfWA7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzWzBdLnByaW9yaXR5fWA7XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJVSSA9ICgpID0+IHtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyKCk7XG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG59IiwiaW1wb3J0IHsgdGFzaywgcHJvamVjdHMsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcHJvamVjdE5hbWUsIGdldFByb2plY3RCeUluZGV4LCBjcmVhdGVEaXYsIGVtcHR5RGl2IH0gZnJvbSBcIi4vRE9NLVByb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRhc2tidG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2lucHV0Jyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuXG5leHBvcnQgY29uc3QgYWRkVGFza1RvQXJyYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRhc2tJbnB1dC52YWx1ZSAhPSBcIlwiKXsgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgdGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG4gICAgICAgIG5ld1Rhc2suYWRkVG9Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH07XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFza0Rlc2NyaXB0aW9uLCBjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY3JlYXRlRGl2KCcnLCAndGFzay1jb250YWluZXInKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRlbGV0ZUljb24uc3JjID0gJ2ltYWdlcy9kZWxldGUucG5nJztcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWljb24nKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pXG5cbiAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tMaS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza0xpLnRleHRDb250ZW50ID0gdGFza0Rlc2NyaXB0aW9uXG4gICAgaWYgKGNvbXBsZXRlZCA9PSB0cnVlKXtcbiAgICAgICAgdGFza0xpLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjb21wbGV0ZWQnKTtcbiAgICB9XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGkpO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgZW1wdHlEaXYoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlVGFza0RpdihjdXJyZW50UHJvamVjdC50YXNrc1tpXS5kZXNjcmlwdGlvbiwgY3VycmVudFByb2plY3QudGFza3NbaV0uY2hlY2tsaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZWljb24nKTtcbiAgICBjb25zdCB0YXNrRGVzY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVCdG5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGVsZXRlQnRuc1tpXS5kYXRhc2V0LnRhc2tudW0gPSBpO1xuICAgICAgICB0YXNrRGVzY3NbaV0uZGF0YXNldC50YXNrbnVtID0gaTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKGRlbGV0ZUJ0biA9PiB7ZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKX0pO1xuICAgIHRhc2tEZXNjcy5mb3JFYWNoKHRhc2tEZXNjID0+IHt0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY29tcGxldGVUYXNrKX0pO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza1dpdGhFbnRlciA9IChlKSA9PiB7XG4gICAgaWYoZS5rZXlDb2RlID09IDEzKXtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0YXNrYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uY2xpY2soKTtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuXG4gICAgY29uc3QgdGFza0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50YXNrbnVtO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG5cbn1cblxuY29uc3QgY29tcGxldGVUYXNrID0gKGUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG5cbiAgICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tudW07XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tzW3Rhc2tJbmRleF0uY2hlY2tsaXN0ID09IGZhbHNlKXtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3NbdGFza0luZGV4XS5jaGVja2xpc3QgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrc1t0YXNrSW5kZXhdLmNoZWNrbGlzdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlclRhc2tzKCk7XG59XG5cblxuIiwiaW1wb3J0ICogYXMgRE9NUHJvaiBmcm9tICcuL0RPTS1Qcm9qZWN0cyc7XG5pbXBvcnQgKiBhcyBET01UYXNrIGZyb20gJy4vRE9NLVRhc2tzJztcblxubGV0IHByb2plY3RzID0gW1xuICAgIHt0aXRsZTpcIkZpbmlzaCBPZGluIFByb2plY3RcIixkdWVEYXRlOlwiMjAyMi0wNC0wMVwiLHByaW9yaXR5OlwiSGlnaFwiLFxuICAgIHRhc2tzOltcbiAgICAgICAge2Rlc2NyaXB0aW9uOlwiRmluaXNoIEZvdW5kYXRpb25zXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICB7ZGVzY3JpcHRpb246XCJGaW5pc2ggVG8tZG8gQXBwXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICB7ZGVzY3JpcHRpb246XCJGaW5pc2ggSmF2YVNjcmlwdFwiLGNoZWNrbGlzdDpmYWxzZX0sXG4gICAgICAgIHtkZXNjcmlwdGlvbjpcIkxlYXJuIFJlYWN0XCIsY2hlY2tsaXN0OmZhbHNlfSxcbiAgICAgICAge2Rlc2NyaXB0aW9uOlwiTGVhcm4gTm9kZS5qc1wiLGNoZWNrbGlzdDpmYWxzZX1dfVxuXTtcblxuY2xhc3MgcHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0cygpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNsYXNzIHRhc2t7XG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGhpcylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVMb2NhbFN0b3JhZ2UoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiByZXN0b3JlTG9jYWxTdG9yYWdlKCl7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBET01Qcm9qLnBvcHVsYXRlUHJvamVjdE1lbnUoKTtcbiAgICBET01Qcm9qLnByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbMF0udGl0bGV9YDtcbiAgICBET01Qcm9qLnByb2plY3REYXRlLnRleHRDb250ZW50ID0gYERhdGU6ICR7cHJvamVjdHNbMF0uZHVlRGF0ZX1gO1xuICAgIERPTVByb2oucHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzWzBdLnByaW9yaXR5fWA7XG5cbiAgICBET01UYXNrLnJlbmRlclRhc2tzKCk7XG59XG5cbmV4cG9ydCB7IHByb2plY3QsIHRhc2ssIHByb2plY3RzLCBzYXZlTG9jYWxTdG9yYWdlLCByZXN0b3JlTG9jYWxTdG9yYWdlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcvZGlzdC9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVzdG9yZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0ICogYXMgRE9NUHJvaiBmcm9tICcuL0RPTS1Qcm9qZWN0cyc7XG5pbXBvcnQgKiBhcyBET01UYXNrIGZyb20gJy4vRE9NLVRhc2tzJztcbmltcG9ydCAqIGFzIENsYXNzZXMgZnJvbSAnLi9wcm9qZWN0cyc7XG5cbi8vcHJvamVjdHMgbGlzdGVuZXJzXG5ET01Qcm9qLm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Qcm9qLm9wZW5Qcm9qZWN0Rm9ybSk7XG5ET01Qcm9qLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVByb2ouYWRkUHJvamVjdFRvQXBwKTtcbkRPTVByb2ouY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUHJvai5jbG9zZVByb2plY3RGb3JtKTtcbkRPTVByb2ouZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxET01Qcm9qLmRlbGV0ZVByb2plY3QpO1xuRE9NUHJvai5wcm9qZWN0c0Zyb21NZW51LmZvckVhY2gocHJvamVjdEZyb21NZW51ID0+IHtwcm9qZWN0RnJvbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERPTVByb2oucG9wdWxhdGVQcm9qZWN0U2NyZWVuKX0pO1xuRE9NUHJvai5lZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxET01Qcm9qLmVkaXRQcm9qZWN0KTtcblxuLy90YXNrcyBsaXN0ZW5lcnNcbkRPTVRhc2suYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVRhc2suYWRkVGFza1RvQXJyYXkpO1xuRE9NVGFzay50YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBET01UYXNrLmFkZFRhc2tXaXRoRW50ZXIpO1xuXG5yZXN0b3JlTG9jYWxTdG9yYWdlKCk7XG5ET01Qcm9qLnJlbmRlclVJKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9