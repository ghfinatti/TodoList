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
    ;(0,_projects__WEBPACK_IMPORTED_MODULE_0__.restoreLocalStorage)();
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
    if (projects == null){
        projects = [
            {title:"Finish Odin Project",dueDate:"2022-04-01",priority:"High",
            tasks:[
                {description:"Finish Foundations",checklist:true},
                {description:"Finish To-do App",checklist:true},
                {description:"Finish JavaScript",checklist:false},
                {description:"Learn React",checklist:false},
                {description:"Learn Node.js",checklist:false}]}
        ];
    }
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

_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.renderUI();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXBFLG1EQUFnQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9kaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRnV0dXJlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9kaXN0L3N0eWxlLmNzcz9iNWM2Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLVByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS1UYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgNTksIDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nb2ltZ3tcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG4gICAgbWFyZ2luOjIwcHg7XFxufVxcblxcbmgxe1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE3MywgMTY3KTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udG9kb3MtZGlzcGxheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMzMsIDIyOCwgMSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgbWluLXdpZHRoOiAzODZweDtcXG4gICAgbWluLWhlaWdodDogMjQ1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyNDdweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tdGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXR7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNjYW5jZWwsICNzdWJtaXQsICNlZGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjExLCAyMTIsIDI1NSwgMSk7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjYW5jZWw6aG92ZXIsICNzdWJtaXQ6aG92ZXIsICNlZGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTEsIDE1MiwgMjU1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxNiwgMTc5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6c29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEzcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDE4NCwgMTA1LCAwLjUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudXByb2plY3RuYW1lOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjUpO1xcbiAgICA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6ODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnJvd3tcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWluLXdpZHRoOjUwN3B4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBtaW4td2lkdGg6IDUxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDEzMSwgMTMxLCAxMzEpO1xcbiAgICBvdmVyZmxvdzpzY3JvbGw7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3Rhc2stY2hlY2tib3h7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi50YXNrY29tcGxldGVke1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tzY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46MHB4O1xcbn1cXG5cXG4uYWRkdGFza2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG4udGFza2lucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdGljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbntcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5kZWxldGVpY29uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5hZGR0YXNrYnRue1xcbiAgICBoZWlnaHQ6MjJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZWRpdGJ1dHRvbiwgLmRlbGV0ZWJ1dHRvbntcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9vbHRpcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmctdG9wOjVweDtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0e1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTAwJTsgIC8qIEF0IHRoZSB0b3Agb2YgdGhlIHRvb2x0aXAgKi9cXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgYmxhY2sgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcbiAgXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICAgLm1lbnUtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgI2FkZC1wcm9qZWN0LWJ0biwgLm1lbnVwcm9qZWN0bmFtZSwgLmFycm93e1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3Qvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLGtEQUFrRDtJQUNsRCxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQywrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGdEQUFnRDtJQUNoRCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHdDQUF3Qzs7SUFFeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0RBQWdEO0lBQ2hELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZLEdBQUcsOEJBQThCO0lBQzdDLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgNTksIDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nb2ltZ3tcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG4gICAgbWFyZ2luOjIwcHg7XFxufVxcblxcbmgxe1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE3MywgMTY3KTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udG9kb3MtZGlzcGxheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMzMsIDIyOCwgMSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgbWluLXdpZHRoOiAzODZweDtcXG4gICAgbWluLWhlaWdodDogMjQ1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyNDdweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tdGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXR7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNjYW5jZWwsICNzdWJtaXQsICNlZGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjExLCAyMTIsIDI1NSwgMSk7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjYW5jZWw6aG92ZXIsICNzdWJtaXQ6aG92ZXIsICNlZGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTEsIDE1MiwgMjU1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxNiwgMTc5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6c29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEzcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDE4NCwgMTA1LCAwLjUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudXByb2plY3RuYW1lOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjUpO1xcbiAgICA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6ODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnJvd3tcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWluLXdpZHRoOjUwN3B4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBtaW4td2lkdGg6IDUxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDEzMSwgMTMxLCAxMzEpO1xcbiAgICBvdmVyZmxvdzpzY3JvbGw7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3Rhc2stY2hlY2tib3h7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi50YXNrY29tcGxldGVke1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tzY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46MHB4O1xcbn1cXG5cXG4uYWRkdGFza2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG4udGFza2lucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdGljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbntcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5kZWxldGVpY29uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5hZGR0YXNrYnRue1xcbiAgICBoZWlnaHQ6MjJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZWRpdGJ1dHRvbiwgLmRlbGV0ZWJ1dHRvbntcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9vbHRpcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmctdG9wOjVweDtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0e1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTAwJTsgIC8qIEF0IHRoZSB0b3Agb2YgdGhlIHRvb2x0aXAgKi9cXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgYmxhY2sgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcbiAgXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICAgLm1lbnUtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgI2FkZC1wcm9qZWN0LWJ0biwgLm1lbnVwcm9qZWN0bmFtZSwgLmFycm93e1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRnV0dXJlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIHZhciByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdXR1cmUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpID4gRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdHMsIHJlc3RvcmVMb2NhbFN0b3JhZ2UsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9ET00tVGFza3NcIjtcbmltcG9ydCB7Zm9ybWF0LCBpc0Z1dHVyZX0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVidXR0b24nKTtcbmV4cG9ydCBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRidXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRhdGUnKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1wcmlvcml0eScpO1xuXG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ0bnMnKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuXG5leHBvcnQgY29uc3Qgb3BlblByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShwcm9qZWN0Rm9ybSkuekluZGV4ID09IFwiLTFcIil7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hbmltYXRlKFtcbiAgICAgICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMC4zKVwiLH0sXG4gICAgICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsfVxuICAgICAgICBdLCAxNTApO1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5hbmltYXRlKFtcbiAgICAgICAge3RyYW5zZm9ybTogXCJzY2FsZSgxKVwiLH0sXG4gICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMClcIix9XG4gICAgXSwgMTUwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtwcm9qZWN0Rm9ybS5zdHlsZS56SW5kZXggPSBcIi0xXCJ9LCAxNTApO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RUb0FwcCA9ICgpID0+IHtcbiAgICBjb25zdCBwcmlvcml0eSA9IGdldFByaW9yaXR5KHByaW9yaXR5SW5wdXQpXG4gICAgY29uc3QgcmVwZWF0ZWROYW1lID0gY2hlY2tGb3JSZXBlYXRlZE5hbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY2hhbmdlRGF0ZUZvcm1hdChkYXRlSW5wdXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGlzRnV0dXJlKGZvcm1hdHRlZERhdGUpKVxuICAgIGlmIChyZXBlYXRlZE5hbWUgPT0gdHJ1ZSl7XG4gICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGFscmVhZHkgdXNlZFwiKVxuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gbnVsbCB8fCBuYW1lSW5wdXQudmFsdWUgPT0gXCJcIiB8fCBkYXRlSW5wdXQudmFsdWUgPT0gXCJcIil7XG4gICAgICAgIGFsZXJ0KFwiQydtb24sIGJlIG5pY2UgYW5kIGZpbGwgYWxsIGluZm9ybWF0aW9uXCIpXG4gICAgfWVsc2UgaWYgKGlzRnV0dXJlKGZvcm1hdHRlZERhdGUpID09IGZhbHNlKXtcbiAgICAgICAgYWxlcnQoXCJDaG9vc2UgYSBmdXR1cmUgZGF0ZVwiKVxuICAgIH1lbHNle1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QobmFtZUlucHV0LnZhbHVlLGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHkpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZFRvUHJvamVjdHMoKVxuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgdXBkYXRlVG9MYXN0Q3JlYXRlZFByb2plY3QoKTtcbiAgICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVRvTGFzdENyZWF0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RQcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5sZW5ndGgtMTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLnRpdGxlfWA7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS5kdWVEYXRlfWA7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLnByaW9yaXR5fWA7XG4gICAgXG4gICAgcmVuZGVyVGFza3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpdiA9ICh0ZXh0LCBjc3NDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBuZXdFbGVtZW50XG59XG5cbmNvbnN0IGFkZFByb2plY3RUb01lbnUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRGl2KCcnLCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgbmFtZURpdiA9IGNyZWF0ZURpdihwcm9qZWN0TmFtZSwnbWVudXByb2plY3RuYW1lJyk7XG4gICAgY29uc3QgYXJyb3dEaXYgPSBjcmVhdGVEaXYoJz4nLCdhcnJvdycpO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFycm93RGl2KTtcblxuICAgIGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudXByb2plY3RuYW1lJyk7XG4gICAgcHJvamVjdHNGcm9tTWVudS5mb3JFYWNoKHByb2plY3RGcm9tTWVudSA9PiB7cHJvamVjdEZyb21NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwb3B1bGF0ZVByb2plY3RTY3JlZW4pfSk7XG59O1xuXG5cbmNvbnN0IGdldFByaW9yaXR5ID0gKHByaW9yaXR5Tm9kZSkgPT4ge1xuICAgIGlmIChwcmlvcml0eU5vZGVbMF0uY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuIFwiSGlnaFwiXG4gICAgfWVsc2UgaWYocHJpb3JpdHlOb2RlWzFdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIk5vcm1hbFwiXG4gICAgfWVsc2UgaWYocHJpb3JpdHlOb2RlWzJdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIkxvd1wiXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZW1wdHlEaXYgPSAoZGl2KSA9PiB7XG4gICAgY29uc3QgZGl2VG9CZUVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkaXYpO1xuICAgIHdoaWxlIChkaXZUb0JlRW1wdHkuZmlyc3RDaGlsZCl7XG4gICAgICAgIGRpdlRvQmVFbXB0eS5yZW1vdmVDaGlsZChkaXZUb0JlRW1wdHkubGFzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlUHJvamVjdFNjcmVlbiA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFBvc2l0aW9uID0gZ2V0UHJvamVjdEJ5SW5kZXgoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLnRpdGxlfWA7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLmR1ZURhdGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbcHJvamVjdFBvc2l0aW9uXS5wcmlvcml0eX1gO1xuICAgIFxuICAgIHJlbmRlclRhc2tzKCk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2plY3RCeUluZGV4ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGV0IGkgPSAwXG4gICAgd2hpbGUocHJvamVjdHNbaV0udGl0bGUgIT0gcHJvamVjdE5hbWUpe1xuICAgICAgICBpKytcbiAgICB9XG4gICAgcmV0dXJuIGlcbn1cblxuY29uc3QgY2hlY2tGb3JSZXBlYXRlZE5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCByZXBlYXRlZE5hbWUgPSBmYWxzZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT09IHByb2plY3RzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgICAgcmVwZWF0ZWROYW1lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXBlYXRlZE5hbWVcbn1cblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlUHJvamVjdE1lbnUgPSAoKSA9PiB7XG4gICAgZW1wdHlEaXYoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICBhZGRQcm9qZWN0VG9NZW51KHByb2plY3RzW2ldLnRpdGxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAxKXtcbiAgICAgICAgY29uc3QgcHJvamVjdFBvc2l0aW9uID0gZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdFBvc2l0aW9uLDEpO1xuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIHVwZGF0ZVRvTGFzdENyZWF0ZWRQcm9qZWN0KCk7XG4gICAgICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgYWxlcnQoYFlvdSBjYW4ndCBkZWxldGUgYWxsIHByb2plY3RzYCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSAoKSA9PiB7XG4gICAgYWRkQnV0dG9uLnZhbHVlID0gXCJFZGl0XCI7XG4gICAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFRvQXBwKTtcbiAgICBcbiAgICBvcGVuUHJvamVjdEZvcm0oKTtcbiAgICBcbiAgICAvL2NvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpXTtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gcHJvamVjdERhdGUudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgcHJpb3JpdHlTdHJpbmcgPSBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzFdXG4gICAgXG4gICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZVN0cmluZztcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0TmFtZS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBpZihwcmlvcml0eVN0cmluZyA9PSBcIkhpZ2hcIil7XG4gICAgICAgIHByaW9yaXR5SW5wdXRbMF0uY2hlY2tlZCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5U3RyaW5nID09IFwiTm9ybWFsXCIpe1xuICAgICAgICBwcmlvcml0eUlucHV0WzFdLmNoZWNrZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlJbnB1dFsyXS5jaGVja2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0QXJyYXkpXG5cbn1cblxuY29uc3QgZWRpdFByb2plY3RBcnJheSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG4gICAgY29uc3QgcHJpb3JpdHkgPSBnZXRQcmlvcml0eShwcmlvcml0eUlucHV0KTtcbiAgICBjb25zdCByZXBlYXRlZE5hbWUgPSBjaGVja0ZvclJlcGVhdGVkTmFtZShuYW1lSW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IGNoZWNrTmFtZUNoYW5nZSA9ICEocHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lSW5wdXQudmFsdWUpO1xuICAgIGlmIChyZXBlYXRlZE5hbWUgPT0gdHJ1ZSAmJiBjaGVja05hbWVDaGFuZ2UgPT0gdHJ1ZSl7XG4gICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGFscmVhZHkgdXNlZFwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IG51bGwgfHwgbmFtZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZGF0ZUlucHV0LnZhbHVlID09IFwiXCIpe1xuICAgICAgICBhbGVydChcIkMnbW9uLCBiZSBuaWNlIGFuZCBmaWxsIGFsbCBpbmZvcm1hdGlvblwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgY3VycmVudFByb2plY3QudGl0bGUgPSBuYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmR1ZURhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UHJvamVjdC50aXRsZX1gO1xuICAgICAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke2N1cnJlbnRQcm9qZWN0LmR1ZURhdGV9YDtcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke2N1cnJlbnRQcm9qZWN0LnByaW9yaXR5fWA7XG4gICAgICAgIFxuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgYWRkQnV0dG9uLnZhbHVlID0gXCJBZGRcIjtcbiAgICAgICAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3RBcnJheSk7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0FwcCk7XG4gICAgICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZURhdGVGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLnNsaWNlKDAsNClcbiAgICBjb25zdCBtb250aCA9IGRhdGUuc2xpY2UoNSw3KS0xXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5zbGljZSg4LDEwKVxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSh5ZWFyLG1vbnRoLGRheSlcbiAgICByZXR1cm4gbmV3RGF0ZVxufVxuXG5jb25zdCByZW5kZXJQcm9qZWN0SGVhZGVyID0gKCkgPT4ge1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbMF0udGl0bGV9YDtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Byb2plY3RzWzBdLmR1ZURhdGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbMF0ucHJpb3JpdHl9YDtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclVJID0gKCkgPT4ge1xuICAgIHJlc3RvcmVMb2NhbFN0b3JhZ2UoKTtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyKCk7XG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG59IiwiaW1wb3J0IHsgdGFzaywgcHJvamVjdHMsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcHJvamVjdE5hbWUsIGdldFByb2plY3RCeUluZGV4LCBjcmVhdGVEaXYsIGVtcHR5RGl2IH0gZnJvbSBcIi4vRE9NLVByb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRhc2tidG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2lucHV0Jyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuXG5leHBvcnQgY29uc3QgYWRkVGFza1RvQXJyYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRhc2tJbnB1dC52YWx1ZSAhPSBcIlwiKXsgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgdGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG4gICAgICAgIG5ld1Rhc2suYWRkVG9Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH07XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFza0Rlc2NyaXB0aW9uLCBjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY3JlYXRlRGl2KCcnLCAndGFzay1jb250YWluZXInKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRlbGV0ZUljb24uc3JjID0gJ2ltYWdlcy9kZWxldGUucG5nJztcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWljb24nKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pXG5cbiAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tMaS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza0xpLnRleHRDb250ZW50ID0gdGFza0Rlc2NyaXB0aW9uXG4gICAgaWYgKGNvbXBsZXRlZCA9PSB0cnVlKXtcbiAgICAgICAgdGFza0xpLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjb21wbGV0ZWQnKTtcbiAgICB9XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGkpO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgZW1wdHlEaXYoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlVGFza0RpdihjdXJyZW50UHJvamVjdC50YXNrc1tpXS5kZXNjcmlwdGlvbiwgY3VycmVudFByb2plY3QudGFza3NbaV0uY2hlY2tsaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZWljb24nKTtcbiAgICBjb25zdCB0YXNrRGVzY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVCdG5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGVsZXRlQnRuc1tpXS5kYXRhc2V0LnRhc2tudW0gPSBpO1xuICAgICAgICB0YXNrRGVzY3NbaV0uZGF0YXNldC50YXNrbnVtID0gaTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKGRlbGV0ZUJ0biA9PiB7ZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKX0pO1xuICAgIHRhc2tEZXNjcy5mb3JFYWNoKHRhc2tEZXNjID0+IHt0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY29tcGxldGVUYXNrKX0pO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza1dpdGhFbnRlciA9IChlKSA9PiB7XG4gICAgaWYoZS5rZXlDb2RlID09IDEzKXtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0YXNrYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uY2xpY2soKTtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuXG4gICAgY29uc3QgdGFza0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50YXNrbnVtO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG5cbn1cblxuY29uc3QgY29tcGxldGVUYXNrID0gKGUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG5cbiAgICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tudW07XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tzW3Rhc2tJbmRleF0uY2hlY2tsaXN0ID09IGZhbHNlKXtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3NbdGFza0luZGV4XS5jaGVja2xpc3QgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrc1t0YXNrSW5kZXhdLmNoZWNrbGlzdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlclRhc2tzKCk7XG59XG5cblxuIiwiaW1wb3J0ICogYXMgRE9NUHJvaiBmcm9tICcuL0RPTS1Qcm9qZWN0cyc7XG5pbXBvcnQgKiBhcyBET01UYXNrIGZyb20gJy4vRE9NLVRhc2tzJztcblxubGV0IHByb2plY3RzID0gW1xuICAgIHt0aXRsZTpcIkZpbmlzaCBPZGluIFByb2plY3RcIixkdWVEYXRlOlwiMjAyMi0wNC0wMVwiLHByaW9yaXR5OlwiSGlnaFwiLFxuICAgIHRhc2tzOltcbiAgICAgICAge2Rlc2NyaXB0aW9uOlwiRmluaXNoIEZvdW5kYXRpb25zXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICB7ZGVzY3JpcHRpb246XCJGaW5pc2ggVG8tZG8gQXBwXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICB7ZGVzY3JpcHRpb246XCJGaW5pc2ggSmF2YVNjcmlwdFwiLGNoZWNrbGlzdDpmYWxzZX0sXG4gICAgICAgIHtkZXNjcmlwdGlvbjpcIkxlYXJuIFJlYWN0XCIsY2hlY2tsaXN0OmZhbHNlfSxcbiAgICAgICAge2Rlc2NyaXB0aW9uOlwiTGVhcm4gTm9kZS5qc1wiLGNoZWNrbGlzdDpmYWxzZX1dfVxuXTtcblxuY2xhc3MgcHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0cygpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNsYXNzIHRhc2t7XG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGhpcylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVMb2NhbFN0b3JhZ2UoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiByZXN0b3JlTG9jYWxTdG9yYWdlKCl7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBpZiAocHJvamVjdHMgPT0gbnVsbCl7XG4gICAgICAgIHByb2plY3RzID0gW1xuICAgICAgICAgICAge3RpdGxlOlwiRmluaXNoIE9kaW4gUHJvamVjdFwiLGR1ZURhdGU6XCIyMDIyLTA0LTAxXCIscHJpb3JpdHk6XCJIaWdoXCIsXG4gICAgICAgICAgICB0YXNrczpbXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uOlwiRmluaXNoIEZvdW5kYXRpb25zXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbjpcIkZpbmlzaCBUby1kbyBBcHBcIixjaGVja2xpc3Q6dHJ1ZX0sXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uOlwiRmluaXNoIEphdmFTY3JpcHRcIixjaGVja2xpc3Q6ZmFsc2V9LFxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbjpcIkxlYXJuIFJlYWN0XCIsY2hlY2tsaXN0OmZhbHNlfSxcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb246XCJMZWFybiBOb2RlLmpzXCIsY2hlY2tsaXN0OmZhbHNlfV19XG4gICAgICAgIF07XG4gICAgfVxuICAgIERPTVByb2oucG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuICAgIERPTVByb2oucHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1swXS50aXRsZX1gO1xuICAgIERPTVByb2oucHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1swXS5kdWVEYXRlfWA7XG4gICAgRE9NUHJvai5wcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbMF0ucHJpb3JpdHl9YDtcblxuICAgIERPTVRhc2sucmVuZGVyVGFza3MoKTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdCwgdGFzaywgcHJvamVjdHMsIHNhdmVMb2NhbFN0b3JhZ2UsIHJlc3RvcmVMb2NhbFN0b3JhZ2UgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy9kaXN0L3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZXN0b3JlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgKiBhcyBET01Qcm9qIGZyb20gJy4vRE9NLVByb2plY3RzJztcbmltcG9ydCAqIGFzIERPTVRhc2sgZnJvbSAnLi9ET00tVGFza3MnO1xuaW1wb3J0ICogYXMgQ2xhc3NlcyBmcm9tICcuL3Byb2plY3RzJztcblxuLy9wcm9qZWN0cyBsaXN0ZW5lcnNcbkRPTVByb2oubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVByb2oub3BlblByb2plY3RGb3JtKTtcbkRPTVByb2ouYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUHJvai5hZGRQcm9qZWN0VG9BcHApO1xuRE9NUHJvai5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Qcm9qLmNsb3NlUHJvamVjdEZvcm0pO1xuRE9NUHJvai5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERPTVByb2ouZGVsZXRlUHJvamVjdCk7XG5ET01Qcm9qLnByb2plY3RzRnJvbU1lbnUuZm9yRWFjaChwcm9qZWN0RnJvbU1lbnUgPT4ge3Byb2plY3RGcm9tTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRE9NUHJvai5wb3B1bGF0ZVByb2plY3RTY3JlZW4pfSk7XG5ET01Qcm9qLmVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERPTVByb2ouZWRpdFByb2plY3QpO1xuXG4vL3Rhc2tzIGxpc3RlbmVyc1xuRE9NVGFzay5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NVGFzay5hZGRUYXNrVG9BcnJheSk7XG5ET01UYXNrLnRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIERPTVRhc2suYWRkVGFza1dpdGhFbnRlcik7XG5cbkRPTVByb2oucmVuZGVyVUkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=