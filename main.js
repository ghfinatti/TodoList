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
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n    align-items: center;\n}\n\n.logoimg{\n    width: 65px;\n    min-width: 65px;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n    overflow-y:scroll;\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 220px;\n    width: 20%;\n    height: 25%;\n    max-height: 247px;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.45);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Arial, Helvetica, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit, #edit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover, #edit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    min-width: fit-content;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.project{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n#name, #date{\n    width: 90%;\n    padding:2px;\n    height: 15px;\n}\n\n.form{\n    width: 90%;\n    align-self: center;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    justify-content: space-evenly;\n    min-width:507px;\n    margin-top: 15px;\n    margin-left: 15px;\n    width: 60%;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Arial, Helvetica, sans-serif;\n    align-self: center;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    min-width: 512px;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n    overflow-y:scroll;\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n    margin-left: 35px;\n}\n\n.task:hover{\n    text-decoration: line-through;\n    cursor:pointer;\n}\n\n.taskcompleted{\n    text-decoration: line-through;\n    color: red;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}\n\n.editbutton, .deletebutton{\n    width: 22px;\n    height: 22px;\n    cursor:pointer;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.tooltip{\n    position: relative;\n    display: inline-block;\n    padding-top:5px;\n}\n\n.tooltip .tooltiptext{\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(0,0,0,0.5);\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    top: 100%;\n    left: 50%;\n    margin-left: -60px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip .tooltiptext::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;  /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent black transparent;\n}\n\n.tooltip .tooltiptext {\n    opacity: 0;\n    transition: opacity 1s;\n}\n  \n.tooltip:hover .tooltiptext {\n    opacity: 1;\n}\n\n.buttonscontainer{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width:10%;\n\n}\n\n\n@media screen and (max-width: 950px) {\n    html{\n        width:100%;\n        height:100%;\n        display:flex;\n        flex-direction: column;\n    }\n\n    .nav-menu{\n        height: 150px;\n        width:100%;\n        overflow:hidden;\n    }\n\n    .menu-title{\n        font-size: 16px;\n        margin-bottom: 10px;\n    }\n\n    .todos-display{\n        width: 100%;\n    }\n\n    .project-tasks, .project-header{\n        align-self:center;\n        min-width: 50px;\n        width:90%;\n        margin: 0px;\n    }\n\n    .project-header{\n        padding-top: 10px;\n    }\n\n    .projects-container{\n        display:flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        width: 90%;\n        height:50%;\n        overflow-x: scroll;\n        margin-bottom: 10px;\n    }\n\n    .project-header{\n        display:flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        margin: 2px;\n        width: 100%;\n    }\n\n    .project-form{\n        min-width: 50px;\n        width: 80%;\n    }\n    \n    .taskscontainer{\n        padding: 5px;\n    }\n\n    .header{\n        width: 100%;\n        min-height:60px;\n        height:10%;\n        justify-content: center;\n    }\n\n    h1{\n        font-size: 30px;\n    }\n\n    .logoimg{\n        width: 30px;\n        min-width:30px;\n    }\n\n    #add-project-btn, .menuprojectname, .arrow{\n        font-size: 12px;\n    }\n\n    .project-date, .project-name, .project-priority{\n        font-size: 14px;\n        align-self: center;\n    }\n\n    .buttonscontainer{\n        align-self: center;\n        width: 15%;\n    }\n\n    .project{\n        margin: 5px;\n        width:fit-content;\n    }\n\n    #add-project-btn{\n        font-size: 15px;\n        min-width: 150px;\n        width: 150px;\n    }\n\n    .editbutton, .deletebutton{\n        width: 15px;\n        height: 15px;\n    }\n}", "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n    align-items: center;\n}\n\n.logoimg{\n    width: 65px;\n    min-width: 65px;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n    overflow-y:scroll;\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 220px;\n    width: 20%;\n    height: 25%;\n    max-height: 247px;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.45);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Arial, Helvetica, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit, #edit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover, #edit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    min-width: fit-content;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.project{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n#name, #date{\n    width: 90%;\n    padding:2px;\n    height: 15px;\n}\n\n.form{\n    width: 90%;\n    align-self: center;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    justify-content: space-evenly;\n    min-width:507px;\n    margin-top: 15px;\n    margin-left: 15px;\n    width: 60%;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Arial, Helvetica, sans-serif;\n    align-self: center;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    min-width: 512px;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n    overflow-y:scroll;\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n    margin-left: 35px;\n}\n\n.task:hover{\n    text-decoration: line-through;\n    cursor:pointer;\n}\n\n.taskcompleted{\n    text-decoration: line-through;\n    color: red;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}\n\n.editbutton, .deletebutton{\n    width: 22px;\n    height: 22px;\n    cursor:pointer;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.tooltip{\n    position: relative;\n    display: inline-block;\n    padding-top:5px;\n}\n\n.tooltip .tooltiptext{\n    visibility: hidden;\n    width: 120px;\n    background-color: rgba(0,0,0,0.5);\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    top: 100%;\n    left: 50%;\n    margin-left: -60px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip .tooltiptext::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;  /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent black transparent;\n}\n\n.tooltip .tooltiptext {\n    opacity: 0;\n    transition: opacity 1s;\n}\n  \n.tooltip:hover .tooltiptext {\n    opacity: 1;\n}\n\n.buttonscontainer{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width:10%;\n\n}\n\n\n@media screen and (max-width: 950px) {\n    html{\n        width:100%;\n        height:100%;\n        display:flex;\n        flex-direction: column;\n    }\n\n    .nav-menu{\n        height: 150px;\n        width:100%;\n        overflow:hidden;\n    }\n\n    .menu-title{\n        font-size: 16px;\n        margin-bottom: 10px;\n    }\n\n    .todos-display{\n        width: 100%;\n    }\n\n    .project-tasks, .project-header{\n        align-self:center;\n        min-width: 50px;\n        width:90%;\n        margin: 0px;\n    }\n\n    .project-header{\n        padding-top: 10px;\n    }\n\n    .projects-container{\n        display:flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        width: 90%;\n        height:50%;\n        overflow-x: scroll;\n        margin-bottom: 10px;\n    }\n\n    .project-header{\n        display:flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        margin: 2px;\n        width: 100%;\n    }\n\n    .project-form{\n        min-width: 50px;\n        width: 80%;\n    }\n    \n    .taskscontainer{\n        padding: 5px;\n    }\n\n    .header{\n        width: 100%;\n        min-height:60px;\n        height:10%;\n        justify-content: center;\n    }\n\n    h1{\n        font-size: 30px;\n    }\n\n    .logoimg{\n        width: 30px;\n        min-width:30px;\n    }\n\n    #add-project-btn, .menuprojectname, .arrow{\n        font-size: 12px;\n    }\n\n    .project-date, .project-name, .project-priority{\n        font-size: 14px;\n        align-self: center;\n    }\n\n    .buttonscontainer{\n        align-self: center;\n        width: 15%;\n    }\n\n    .project{\n        margin: 5px;\n        width:fit-content;\n    }\n\n    #add-project-btn{\n        font-size: 15px;\n        min-width: 150px;\n        width: 150px;\n    }\n\n    .editbutton, .deletebutton{\n        width: 15px;\n        height: 15px;\n    }\n}"],"sourceRoot":""}]);
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
const formTitle = document.querySelector('.form-title');

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
    formTitle.textContent = "New Project"
    addButton.value = "Add";

};

const addProjectToApp = () => {
    const priority = getPriority(priorityInput)
    const repeatedName = checkForRepeatedName(nameInput.value);
    const formattedDate = changeDateFormat(dateInput.value);
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
    formTitle.textContent = "Edit Project"
    addButton.removeEventListener('click', addProjectToApp);
    
    openProjectForm();
    
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
    const formattedDate = changeDateFormat(dateInput.value);
    if (repeatedName == true && checkNameChange == true){
        alert("Project name already used");
    }
    else if (priority === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information");
    }else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate) == false){
        alert("Choose a future date")
    }else{
        currentProject.title = nameInput.value;
        currentProject.dueDate = dateInput.value;
        currentProject.priority = priority;

        projectName.textContent = `${currentProject.title}`;
        projectDate.textContent = `Date: ${currentProject.dueDate}`;
        projectPriority.textContent = `Priority: ${currentProject.priority}`;
        
        populateProjectMenu();
        closeProjectForm();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0NBQStDLG1CQUFtQixrQkFBa0Isa0JBQWtCLGtCQUFrQixHQUFHLFNBQVMsb0JBQW9CLDBCQUEwQixxQkFBcUIsbUJBQW1CLGtCQUFrQixrQkFBa0Isa0JBQWtCLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLDRDQUE0QyxrQkFBa0Isa0JBQWtCLHdCQUF3QiwwQkFBMEIsR0FBRyxhQUFhLGtCQUFrQixzQkFBc0Isa0JBQWtCLEdBQUcsT0FBTyxrQkFBa0IsZ0RBQWdELEdBQUcsY0FBYyxtQkFBbUIsNkJBQTZCLGlCQUFpQixrQkFBa0IsMkNBQTJDLHdCQUF3QixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLGlCQUFpQixrQkFBa0IsK0NBQStDLEdBQUcsa0JBQWtCLG9CQUFvQixrQkFBa0IsNkJBQTZCLHlCQUF5QixZQUFZLGVBQWUsYUFBYSxjQUFjLGtCQUFrQix1QkFBdUIsd0JBQXdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGlEQUFpRCx5REFBeUQsNENBQTRDLDBCQUEwQixpREFBaUQsK0NBQStDLEdBQUcsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsR0FBRyxpQkFBaUIsa0JBQWtCLEdBQUcsaUJBQWlCLG9CQUFvQixzQkFBc0Isa0JBQWtCLGdDQUFnQyxHQUFHLDRCQUE0Qiw4Q0FBOEMsaUJBQWlCLDhCQUE4Qix5QkFBeUIsR0FBRyw4Q0FBOEMsMENBQTBDLHNCQUFzQixHQUFHLHFCQUFxQix5QkFBeUIsMkNBQTJDLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLGlCQUFpQiw2QkFBNkIsZ0RBQWdELHFCQUFxQixHQUFHLDJCQUEyQixnREFBZ0Qsc0JBQXNCLEdBQUcsZ0JBQWdCLHFCQUFxQix1QkFBdUIseUJBQXlCLHVCQUF1QixnREFBZ0QsR0FBRyxhQUFhLGdEQUFnRCxzQkFBc0Isa0JBQWtCLG1CQUFtQixxQ0FBcUMsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRyxVQUFVLGlCQUFpQix5QkFBeUIsR0FBRywyQkFBMkIsK0NBQStDLHNCQUFzQixHQUFHLHdCQUF3QixnQkFBZ0IseUJBQXlCLEdBQUcsV0FBVyxnQ0FBZ0MsR0FBRyxvQkFBb0Isb0JBQW9CLG9DQUFvQyxzQkFBc0IsdUJBQXVCLHdCQUF3QixpQkFBaUIsa0JBQWtCLEdBQUcsb0RBQW9ELHdCQUF3QixnREFBZ0QseUJBQXlCLEdBQUcsbUJBQW1CLG1CQUFtQiw2QkFBNkIsOEJBQThCLHlCQUF5QixpQkFBaUIsa0JBQWtCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLGlEQUFpRCx3QkFBd0IsR0FBRyxvQkFBb0IsbUJBQW1CLDBCQUEwQixpQkFBaUIsbUJBQW1CLHlCQUF5Qix1QkFBdUIsR0FBRyxtQkFBbUIsbUJBQW1CLEdBQUcsVUFBVSxnREFBZ0Qsc0JBQXNCLG1CQUFtQixzQkFBc0Isd0JBQXdCLEdBQUcsZ0JBQWdCLG9DQUFvQyxxQkFBcUIsR0FBRyxtQkFBbUIsb0NBQW9DLGlCQUFpQixHQUFHLG9CQUFvQiwwQkFBMEIsaUJBQWlCLEdBQUcsc0JBQXNCLG1CQUFtQiwwQkFBMEIsd0JBQXdCLHNCQUFzQixHQUFHLGVBQWUsaUJBQWlCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHlCQUF5Qix3QkFBd0IsR0FBRyxzQkFBc0IsNEJBQTRCLEdBQUcsZ0JBQWdCLGtCQUFrQix5QkFBeUIsR0FBRywrQkFBK0Isa0JBQWtCLG1CQUFtQixxQkFBcUIsc0JBQXNCLHlCQUF5QixHQUFHLGFBQWEseUJBQXlCLDRCQUE0QixzQkFBc0IsR0FBRywwQkFBMEIseUJBQXlCLG1CQUFtQix3Q0FBd0Msa0JBQWtCLHlCQUF5QixxQkFBcUIseUJBQXlCLHlCQUF5QixpQkFBaUIsZ0JBQWdCLGdCQUFnQix5QkFBeUIsZ0RBQWdELHNCQUFzQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyxrQ0FBa0MscUJBQXFCLHlCQUF5QixxQkFBcUIsK0NBQStDLHdCQUF3Qix3QkFBd0IsMEJBQTBCLDhEQUE4RCxHQUFHLDJCQUEyQixpQkFBaUIsNkJBQTZCLEdBQUcsbUNBQW1DLGlCQUFpQixHQUFHLHNCQUFzQixvQkFBb0IsMEJBQTBCLHFDQUFxQyxnQkFBZ0IsS0FBSyw0Q0FBNEMsV0FBVyxxQkFBcUIsc0JBQXNCLHVCQUF1QixpQ0FBaUMsT0FBTyxrQkFBa0Isd0JBQXdCLHFCQUFxQiwwQkFBMEIsT0FBTyxvQkFBb0IsMEJBQTBCLDhCQUE4QixPQUFPLHVCQUF1QixzQkFBc0IsT0FBTyx3Q0FBd0MsNEJBQTRCLDBCQUEwQixvQkFBb0Isc0JBQXNCLE9BQU8sd0JBQXdCLDRCQUE0QixPQUFPLDRCQUE0Qix1QkFBdUIsaUNBQWlDLDBCQUEwQixxQkFBcUIscUJBQXFCLDZCQUE2Qiw4QkFBOEIsT0FBTyx3QkFBd0IsdUJBQXVCLGlDQUFpQywwQkFBMEIsc0NBQXNDLHNCQUFzQixzQkFBc0IsT0FBTyxzQkFBc0IsMEJBQTBCLHFCQUFxQixPQUFPLDRCQUE0Qix1QkFBdUIsT0FBTyxnQkFBZ0Isc0JBQXNCLDBCQUEwQixxQkFBcUIsa0NBQWtDLE9BQU8sV0FBVywwQkFBMEIsT0FBTyxpQkFBaUIsc0JBQXNCLHlCQUF5QixPQUFPLG1EQUFtRCwwQkFBMEIsT0FBTyx3REFBd0QsMEJBQTBCLDZCQUE2QixPQUFPLDBCQUEwQiw2QkFBNkIscUJBQXFCLE9BQU8saUJBQWlCLHNCQUFzQiw0QkFBNEIsT0FBTyx5QkFBeUIsMEJBQTBCLDJCQUEyQix1QkFBdUIsT0FBTyxtQ0FBbUMsc0JBQXNCLHVCQUF1QixPQUFPLEdBQUcsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVks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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDd0I7QUFDUDtBQUNIO0FBQ0Q7O0FBRXRDO0FBQ0Esc0VBQW1DLFVBQVUsMERBQXVCO0FBQ3BFLHFFQUFrQyxVQUFVLDBEQUF1QjtBQUNuRSx3RUFBcUMsVUFBVSwyREFBd0I7QUFDdkUscUVBQWtDLFNBQVMsd0RBQXFCO0FBQ2hFLG1FQUFnQyxxQkFBcUIseUNBQXlDLGdFQUE2QixFQUFFO0FBQzdILG1FQUFnQyxTQUFTLHNEQUFtQjs7QUFFNUQ7QUFDQSxtRUFBbUMsVUFBVSxzREFBc0I7QUFDbkUsa0VBQWtDLFVBQVUsd0RBQXdCOztBQUVwRSxtREFBZ0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vZGlzdC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0Z1dHVyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vZGlzdC9zdHlsZS5jc3M/YjVjNiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS1Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00tVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOndyYXA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDU5LCAxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ29pbWd7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBtaW4td2lkdGg6IDY1cHg7XFxuICAgIG1hcmdpbjoyMHB4O1xcbn1cXG5cXG5oMXtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE3MywgMTY3KTtcXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XFxufVxcblxcbi50b2Rvcy1kaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDIzMywgMjI4LCAxKTtcXG59XFxuXFxuLnByb2plY3QtZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGJvdHRvbTowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICBtaW4td2lkdGg6IDM4NnB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIG1heC1oZWlnaHQ6IDI0N3B4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjRweCkgc2F0dXJhdGUoMTAwJSk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mb3JtLXRpdGxle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbmxhYmVsLCBpbnB1dHtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi5zdWJtaXQtYnRuc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI2NhbmNlbCwgI3N1Ym1pdCwgI2VkaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMTEsIDIxMiwgMjU1LCAxKTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2NhbmNlbDpob3ZlciwgI3N1Ym1pdDpob3ZlciwgI2VkaXQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1MSwgMTUyLCAyNTUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG57XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjE2LCAxNzkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjpzb2xpZCAxcHggYmxhY2s7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxM3B4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ1LCAxODQsIDEwNSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNuYW1lLCAjZGF0ZXtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzoycHg7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLmZvcm17XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVwcm9qZWN0bmFtZTpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICB3aWR0aDo4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFycm93e1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtaW4td2lkdGg6NTA3cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBjb2xvcjpibGFjaztcXG59XFxuXFxuLnByb2plY3QtZGF0ZSwgLnByb2plY3QtbmFtZSwgLnByb2plY3QtcHJpb3JpdHl7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgbWluLXdpZHRoOiA1MTJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigxMzEsIDEzMSwgMTMxKTtcXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3Rhc2stY2hlY2tib3h7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLnRhc2tjb21wbGV0ZWR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udGFza3Njb250YWluZXJ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjowcHg7XFxufVxcblxcbi5hZGR0YXNrY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcbi50YXNraW5wdXR7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5lZGl0aWNvbntcXG4gICAgaGVpZ2h0OjE1cHg7XFxufVxcblxcbi5kZWxldGVpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlbGV0ZWljb246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmFkZHRhc2tidG57XFxuICAgIGhlaWdodDoyMnB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0YnV0dG9uLCAuZGVsZXRlYnV0dG9ue1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b29sdGlwe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZy10b3A6NXB4O1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHR7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwMCU7ICAvKiBBdCB0aGUgdG9wIG9mIHRoZSB0b29sdGlwICovXFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG4gIFxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5idXR0b25zY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOjEwJTtcXG5cXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICAgaHRtbHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm5hdi1tZW51e1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50b2Rvcy1kaXNwbGF5e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFza3MsIC5wcm9qZWN0LWhlYWRlcntcXG4gICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xcbiAgICAgICAgd2lkdGg6OTAlO1xcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaGVhZGVye1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OjUwJTtcXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaGVhZGVye1xcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIG1hcmdpbjogMnB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybXtcXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC50YXNrc2NvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OjYwcHg7XFxuICAgICAgICBoZWlnaHQ6MTAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgaDF7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxvZ29pbWd7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIG1pbi13aWR0aDozMHB4O1xcbiAgICB9XFxuXFxuICAgICNhZGQtcHJvamVjdC1idG4sIC5tZW51cHJvamVjdG5hbWUsIC5hcnJvd3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kYXRlLCAucHJvamVjdC1uYW1lLCAucHJvamVjdC1wcmlvcml0eXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uc2NvbnRhaW5lcntcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxNSU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3R7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgICNhZGQtcHJvamVjdC1idG57XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5lZGl0YnV0dG9uLCAuZGVsZXRlYnV0dG9ue1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZGlzdC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFp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QTtRQUNJLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLFVBQVU7UUFDVixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFVBQVU7UUFDVix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDp3cmFwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCA1OSwgMSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgbWluLWhlaWdodDogMTMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvaW1ne1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgbWluLXdpZHRoOiA2NXB4O1xcbiAgICBtYXJnaW46MjBweDtcXG59XFxuXFxuaDF7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1tZW51e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNzMsIDE2Nyk7XFxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xcbn1cXG5cXG4udG9kb3MtZGlzcGxheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMzMsIDIyOCwgMSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgbWluLXdpZHRoOiAzODZweDtcXG4gICAgbWluLWhlaWdodDogMjIwcHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBtYXgtaGVpZ2h0OiAyNDdweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9ybS10aXRsZXtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG5sYWJlbCwgaW5wdXR7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNjYW5jZWwsICNzdWJtaXQsICNlZGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjExLCAyMTIsIDI1NSwgMSk7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjYW5jZWw6aG92ZXIsICNzdWJtaXQ6aG92ZXIsICNlZGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTEsIDE1MiwgMjU1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxNiwgMTc5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6c29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6MTNweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NSwgMTg0LCAxMDUsIDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZToyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbmFtZSwgI2RhdGV7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6MnB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi5mb3Jte1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51cHJvamVjdG5hbWU6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6ODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnJvd3tcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWluLXdpZHRoOjUwN3B4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGFza3N7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIG1pbi13aWR0aDogNTEycHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2IoMTMxLCAxMzEsIDEzMSk7XFxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi50YXNrY29tcGxldGVke1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tzY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46MHB4O1xcbn1cXG5cXG4uYWRkdGFza2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG4udGFza2lucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uZWRpdGljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbntcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5kZWxldGVpY29uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5hZGR0YXNrYnRue1xcbiAgICBoZWlnaHQ6MjJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZWRpdGJ1dHRvbiwgLmRlbGV0ZWJ1dHRvbntcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9vbHRpcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmctdG9wOjVweDtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0e1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMDAlOyAgLyogQXQgdGhlIHRvcCBvZiB0aGUgdG9vbHRpcCAqL1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBibGFjayB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuICBcXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYnV0dG9uc2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDoxMCU7XFxuXFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIGh0bWx7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbWVudXtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcblxcbiAgICAudG9kb3MtZGlzcGxheXtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhc2tzLCAucHJvamVjdC1oZWFkZXJ7XFxuICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgICAgIHdpZHRoOjkwJTtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWhlYWRlcntcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDo1MCU7XFxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWhlYWRlcntcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBtYXJnaW46IDJweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWZvcm17XFxuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAudGFza3Njb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDo2MHB4O1xcbiAgICAgICAgaGVpZ2h0OjEwJTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb2dvaW1ne1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBtaW4td2lkdGg6MzBweDtcXG4gICAgfVxcblxcbiAgICAjYWRkLXByb2plY3QtYnRuLCAubWVudXByb2plY3RuYW1lLCAuYXJyb3d7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGF0ZSwgLnByb2plY3QtbmFtZSwgLnByb2plY3QtcHJpb3JpdHl7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbnNjb250YWluZXJ7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTUlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0e1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAjYWRkLXByb2plY3QtYnRue1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgfVxcblxcbiAgICAuZWRpdGJ1dHRvbiwgLmRlbGV0ZWJ1dHRvbntcXG4gICAgICAgIHdpZHRoOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRnV0dXJlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIHZhciByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdXR1cmUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpID4gRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdHMsIHJlc3RvcmVMb2NhbFN0b3JhZ2UsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9ET00tVGFza3NcIjtcbmltcG9ydCB7Zm9ybWF0LCBpc0Z1dHVyZX0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVidXR0b24nKTtcbmV4cG9ydCBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRidXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRhdGUnKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1wcmlvcml0eScpO1xuXG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ0bnMnKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGl0bGUnKTtcblxuZXhwb3J0IGNvbnN0IG9wZW5Qcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUocHJvamVjdEZvcm0pLnpJbmRleCA9PSBcIi0xXCIpe1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS56SW5kZXggPSBcIjBcIjtcbiAgICAgICAgcHJvamVjdEZvcm0uYW5pbWF0ZShbXG4gICAgICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDAuMylcIix9LFxuICAgICAgICAgICAge3RyYW5zZm9ybTogXCJzY2FsZSgxKVwiLH1cbiAgICAgICAgXSwgMTUwKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uYW5pbWF0ZShbXG4gICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMSlcIix9LFxuICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDApXCIsfVxuICAgIF0sIDE1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7cHJvamVjdEZvcm0uc3R5bGUuekluZGV4ID0gXCItMVwifSwgMTUwKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCJcbiAgICBhZGRCdXR0b24udmFsdWUgPSBcIkFkZFwiO1xuXG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdFRvQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0UHJpb3JpdHkocHJpb3JpdHlJbnB1dClcbiAgICBjb25zdCByZXBlYXRlZE5hbWUgPSBjaGVja0ZvclJlcGVhdGVkTmFtZShuYW1lSW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjaGFuZ2VEYXRlRm9ybWF0KGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgaWYgKHJlcGVhdGVkTmFtZSA9PSB0cnVlKXtcbiAgICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgYWxyZWFkeSB1c2VkXCIpXG4gICAgfVxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09PSBudWxsIHx8IG5hbWVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJDJ21vbiwgYmUgbmljZSBhbmQgZmlsbCBhbGwgaW5mb3JtYXRpb25cIilcbiAgICB9ZWxzZSBpZiAoaXNGdXR1cmUoZm9ybWF0dGVkRGF0ZSkgPT0gZmFsc2Upe1xuICAgICAgICBhbGVydChcIkNob29zZSBhIGZ1dHVyZSBkYXRlXCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChuYW1lSW5wdXQudmFsdWUsZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eSk7XG4gICAgICAgIG5ld1Byb2plY3QuYWRkVG9Qcm9qZWN0cygpXG4gICAgICAgIHBvcHVsYXRlUHJvamVjdE1lbnUoKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB1cGRhdGVUb0xhc3RDcmVhdGVkUHJvamVjdCgpO1xuICAgICAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufTtcblxuY29uc3QgdXBkYXRlVG9MYXN0Q3JlYXRlZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFzdFByb2plY3RJbmRleCA9IHByb2plY3RzLmxlbmd0aC0xO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0udGl0bGV9YDtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Byb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLmR1ZURhdGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0ucHJpb3JpdHl9YDtcbiAgICBcbiAgICByZW5kZXJUYXNrcygpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRGl2ID0gKHRleHQsIGNzc0NsYXNzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cblxuY29uc3QgYWRkUHJvamVjdFRvTWVudSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVEaXYoJycsJ3Byb2plY3QnKTtcbiAgICBjb25zdCBuYW1lRGl2ID0gY3JlYXRlRGl2KHByb2plY3ROYW1lLCdtZW51cHJvamVjdG5hbWUnKTtcbiAgICBjb25zdCBhcnJvd0RpdiA9IGNyZWF0ZURpdignPicsJ2Fycm93Jyk7XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYXJyb3dEaXYpO1xuXG4gICAgY29uc3QgcHJvamVjdHNGcm9tTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51cHJvamVjdG5hbWUnKTtcbiAgICBwcm9qZWN0c0Zyb21NZW51LmZvckVhY2gocHJvamVjdEZyb21NZW51ID0+IHtwcm9qZWN0RnJvbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHBvcHVsYXRlUHJvamVjdFNjcmVlbil9KTtcbn07XG5cblxuY29uc3QgZ2V0UHJpb3JpdHkgPSAocHJpb3JpdHlOb2RlKSA9PiB7XG4gICAgaWYgKHByaW9yaXR5Tm9kZVswXS5jaGVja2VkID09IHRydWUpe1xuICAgICAgICByZXR1cm4gXCJIaWdoXCJcbiAgICB9ZWxzZSBpZihwcmlvcml0eU5vZGVbMV0uY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuIFwiTm9ybWFsXCJcbiAgICB9ZWxzZSBpZihwcmlvcml0eU5vZGVbMl0uY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuIFwiTG93XCJcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbXB0eURpdiA9IChkaXYpID0+IHtcbiAgICBjb25zdCBkaXZUb0JlRW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRpdik7XG4gICAgd2hpbGUgKGRpdlRvQmVFbXB0eS5maXJzdENoaWxkKXtcbiAgICAgICAgZGl2VG9CZUVtcHR5LnJlbW92ZUNoaWxkKGRpdlRvQmVFbXB0eS5sYXN0Q2hpbGQpO1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcG9wdWxhdGVQcm9qZWN0U2NyZWVuID0gKGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0UG9zaXRpb24gPSBnZXRQcm9qZWN0QnlJbmRleChlLnRhcmdldC50ZXh0Q29udGVudCk7XG5cbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RQb3NpdGlvbl0udGl0bGV9YDtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Byb2plY3RzW3Byb2plY3RQb3NpdGlvbl0uZHVlRGF0ZX1gO1xuICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLnByaW9yaXR5fWA7XG4gICAgXG4gICAgcmVuZGVyVGFza3MoKTtcblxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdEJ5SW5kZXggPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgaSA9IDBcbiAgICB3aGlsZShwcm9qZWN0c1tpXS50aXRsZSAhPSBwcm9qZWN0TmFtZSl7XG4gICAgICAgIGkrK1xuICAgIH1cbiAgICByZXR1cm4gaVxufVxuXG5jb25zdCBjaGVja0ZvclJlcGVhdGVkTmFtZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHJlcGVhdGVkTmFtZSA9IGZhbHNlXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcHJvamVjdHNbaV0udGl0bGUudG9Mb3dlckNhc2UoKSl7XG4gICAgICAgICAgICByZXBlYXRlZE5hbWUgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcGVhdGVkTmFtZVxufVxuXG5leHBvcnQgY29uc3QgcG9wdWxhdGVQcm9qZWN0TWVudSA9ICgpID0+IHtcbiAgICBlbXB0eURpdignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgIGFkZFByb2plY3RUb01lbnUocHJvamVjdHNbaV0udGl0bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDEpe1xuICAgICAgICBjb25zdCBwcm9qZWN0UG9zaXRpb24gPSBnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0UG9zaXRpb24sMSk7XG4gICAgICAgIHBvcHVsYXRlUHJvamVjdE1lbnUoKTtcbiAgICAgICAgdXBkYXRlVG9MYXN0Q3JlYXRlZFByb2plY3QoKTtcbiAgICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1lbHNle1xuICAgICAgICBhbGVydChgWW91IGNhbid0IGRlbGV0ZSBhbGwgcHJvamVjdHNgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgICBhZGRCdXR0b24udmFsdWUgPSBcIkVkaXRcIjtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgUHJvamVjdFwiXG4gICAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFRvQXBwKTtcbiAgICBcbiAgICBvcGVuUHJvamVjdEZvcm0oKTtcbiAgICBcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gcHJvamVjdERhdGUudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgcHJpb3JpdHlTdHJpbmcgPSBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzFdXG4gICAgXG4gICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZVN0cmluZztcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0TmFtZS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBpZihwcmlvcml0eVN0cmluZyA9PSBcIkhpZ2hcIil7XG4gICAgICAgIHByaW9yaXR5SW5wdXRbMF0uY2hlY2tlZCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5U3RyaW5nID09IFwiTm9ybWFsXCIpe1xuICAgICAgICBwcmlvcml0eUlucHV0WzFdLmNoZWNrZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlJbnB1dFsyXS5jaGVja2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0QXJyYXkpXG5cbn1cblxuY29uc3QgZWRpdFByb2plY3RBcnJheSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG4gICAgY29uc3QgcHJpb3JpdHkgPSBnZXRQcmlvcml0eShwcmlvcml0eUlucHV0KTtcbiAgICBjb25zdCByZXBlYXRlZE5hbWUgPSBjaGVja0ZvclJlcGVhdGVkTmFtZShuYW1lSW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IGNoZWNrTmFtZUNoYW5nZSA9ICEocHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lSW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjaGFuZ2VEYXRlRm9ybWF0KGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgaWYgKHJlcGVhdGVkTmFtZSA9PSB0cnVlICYmIGNoZWNrTmFtZUNoYW5nZSA9PSB0cnVlKXtcbiAgICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgYWxyZWFkeSB1c2VkXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gbnVsbCB8fCBuYW1lSW5wdXQudmFsdWUgPT0gXCJcIiB8fCBkYXRlSW5wdXQudmFsdWUgPT0gXCJcIil7XG4gICAgICAgIGFsZXJ0KFwiQydtb24sIGJlIG5pY2UgYW5kIGZpbGwgYWxsIGluZm9ybWF0aW9uXCIpO1xuICAgIH1lbHNlIGlmIChpc0Z1dHVyZShmb3JtYXR0ZWREYXRlKSA9PSBmYWxzZSl7XG4gICAgICAgIGFsZXJ0KFwiQ2hvb3NlIGEgZnV0dXJlIGRhdGVcIilcbiAgICB9ZWxzZXtcbiAgICAgICAgY3VycmVudFByb2plY3QudGl0bGUgPSBuYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmR1ZURhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UHJvamVjdC50aXRsZX1gO1xuICAgICAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke2N1cnJlbnRQcm9qZWN0LmR1ZURhdGV9YDtcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke2N1cnJlbnRQcm9qZWN0LnByaW9yaXR5fWA7XG4gICAgICAgIFxuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3RBcnJheSk7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0FwcCk7XG4gICAgICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZURhdGVGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLnNsaWNlKDAsNClcbiAgICBjb25zdCBtb250aCA9IGRhdGUuc2xpY2UoNSw3KS0xXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5zbGljZSg4LDEwKVxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSh5ZWFyLG1vbnRoLGRheSlcbiAgICByZXR1cm4gbmV3RGF0ZVxufVxuXG5jb25zdCByZW5kZXJQcm9qZWN0SGVhZGVyID0gKCkgPT4ge1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbMF0udGl0bGV9YDtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Byb2plY3RzWzBdLmR1ZURhdGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbMF0ucHJpb3JpdHl9YDtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclVJID0gKCkgPT4ge1xuICAgIHJlc3RvcmVMb2NhbFN0b3JhZ2UoKTtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyKCk7XG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG59IiwiaW1wb3J0IHsgdGFzaywgcHJvamVjdHMsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcHJvamVjdE5hbWUsIGdldFByb2plY3RCeUluZGV4LCBjcmVhdGVEaXYsIGVtcHR5RGl2IH0gZnJvbSBcIi4vRE9NLVByb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRhc2tidG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2lucHV0Jyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuXG5leHBvcnQgY29uc3QgYWRkVGFza1RvQXJyYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRhc2tJbnB1dC52YWx1ZSAhPSBcIlwiKXsgXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgdGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG4gICAgICAgIG5ld1Rhc2suYWRkVG9Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH07XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFza0Rlc2NyaXB0aW9uLCBjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY3JlYXRlRGl2KCcnLCAndGFzay1jb250YWluZXInKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRlbGV0ZUljb24uc3JjID0gJ2ltYWdlcy9kZWxldGUucG5nJztcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWljb24nKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pXG5cbiAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tMaS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza0xpLnRleHRDb250ZW50ID0gdGFza0Rlc2NyaXB0aW9uXG4gICAgaWYgKGNvbXBsZXRlZCA9PSB0cnVlKXtcbiAgICAgICAgdGFza0xpLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjb21wbGV0ZWQnKTtcbiAgICB9XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGkpO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgZW1wdHlEaXYoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlVGFza0RpdihjdXJyZW50UHJvamVjdC50YXNrc1tpXS5kZXNjcmlwdGlvbiwgY3VycmVudFByb2plY3QudGFza3NbaV0uY2hlY2tsaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZWljb24nKTtcbiAgICBjb25zdCB0YXNrRGVzY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVCdG5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGVsZXRlQnRuc1tpXS5kYXRhc2V0LnRhc2tudW0gPSBpO1xuICAgICAgICB0YXNrRGVzY3NbaV0uZGF0YXNldC50YXNrbnVtID0gaTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKGRlbGV0ZUJ0biA9PiB7ZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKX0pO1xuICAgIHRhc2tEZXNjcy5mb3JFYWNoKHRhc2tEZXNjID0+IHt0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY29tcGxldGVUYXNrKX0pO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza1dpdGhFbnRlciA9IChlKSA9PiB7XG4gICAgaWYoZS5rZXlDb2RlID09IDEzKXtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0YXNrYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uY2xpY2soKTtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuXG4gICAgY29uc3QgdGFza0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50YXNrbnVtO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG5cbn1cblxuY29uc3QgY29tcGxldGVUYXNrID0gKGUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG5cbiAgICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tudW07XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tzW3Rhc2tJbmRleF0uY2hlY2tsaXN0ID09IGZhbHNlKXtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3NbdGFza0luZGV4XS5jaGVja2xpc3QgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrc1t0YXNrSW5kZXhdLmNoZWNrbGlzdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlclRhc2tzKCk7XG59XG5cblxuIiwiaW1wb3J0ICogYXMgRE9NUHJvaiBmcm9tICcuL0RPTS1Qcm9qZWN0cyc7XG5pbXBvcnQgKiBhcyBET01UYXNrIGZyb20gJy4vRE9NLVRhc2tzJztcblxubGV0IHByb2plY3RzID0gW1xuICAgIHt0aXRsZTpcIkZpbmlzaCBPZGluIFByb2plY3RcIixkdWVEYXRlOlwiMjAyMi0wNC0wMVwiLHByaW9yaXR5OlwiSGlnaFwiLFxuICAgIHRhc2tzOltcbiAgICAgICAge2Rlc2NyaXB0aW9uOlwiRmluaXNoIEZvdW5kYXRpb25zXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICB7ZGVzY3JpcHRpb246XCJGaW5pc2ggVG8tZG8gQXBwXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICB7ZGVzY3JpcHRpb246XCJGaW5pc2ggSmF2YVNjcmlwdFwiLGNoZWNrbGlzdDpmYWxzZX0sXG4gICAgICAgIHtkZXNjcmlwdGlvbjpcIkxlYXJuIFJlYWN0XCIsY2hlY2tsaXN0OmZhbHNlfSxcbiAgICAgICAge2Rlc2NyaXB0aW9uOlwiTGVhcm4gTm9kZS5qc1wiLGNoZWNrbGlzdDpmYWxzZX1dfVxuXTtcblxuY2xhc3MgcHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0cygpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNsYXNzIHRhc2t7XG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGhpcylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVMb2NhbFN0b3JhZ2UoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiByZXN0b3JlTG9jYWxTdG9yYWdlKCl7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBpZiAocHJvamVjdHMgPT0gbnVsbCl7XG4gICAgICAgIHByb2plY3RzID0gW1xuICAgICAgICAgICAge3RpdGxlOlwiRmluaXNoIE9kaW4gUHJvamVjdFwiLGR1ZURhdGU6XCIyMDIyLTA0LTAxXCIscHJpb3JpdHk6XCJIaWdoXCIsXG4gICAgICAgICAgICB0YXNrczpbXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uOlwiRmluaXNoIEZvdW5kYXRpb25zXCIsY2hlY2tsaXN0OnRydWV9LFxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbjpcIkZpbmlzaCBUby1kbyBBcHBcIixjaGVja2xpc3Q6dHJ1ZX0sXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uOlwiRmluaXNoIEphdmFTY3JpcHRcIixjaGVja2xpc3Q6ZmFsc2V9LFxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbjpcIkxlYXJuIFJlYWN0XCIsY2hlY2tsaXN0OmZhbHNlfSxcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb246XCJMZWFybiBOb2RlLmpzXCIsY2hlY2tsaXN0OmZhbHNlfV19XG4gICAgICAgIF07XG4gICAgfVxufVxuXG5leHBvcnQgeyBwcm9qZWN0LCB0YXNrLCBwcm9qZWN0cywgc2F2ZUxvY2FsU3RvcmFnZSwgcmVzdG9yZUxvY2FsU3RvcmFnZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnL2Rpc3Qvc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlc3RvcmVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCAqIGFzIERPTVByb2ogZnJvbSAnLi9ET00tUHJvamVjdHMnO1xuaW1wb3J0ICogYXMgRE9NVGFzayBmcm9tICcuL0RPTS1UYXNrcyc7XG5pbXBvcnQgKiBhcyBDbGFzc2VzIGZyb20gJy4vcHJvamVjdHMnO1xuXG4vL3Byb2plY3RzIGxpc3RlbmVyc1xuRE9NUHJvai5uZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUHJvai5vcGVuUHJvamVjdEZvcm0pO1xuRE9NUHJvai5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Qcm9qLmFkZFByb2plY3RUb0FwcCk7XG5ET01Qcm9qLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVByb2ouY2xvc2VQcm9qZWN0Rm9ybSk7XG5ET01Qcm9qLmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRE9NUHJvai5kZWxldGVQcm9qZWN0KTtcbkRPTVByb2oucHJvamVjdHNGcm9tTWVudS5mb3JFYWNoKHByb2plY3RGcm9tTWVudSA9PiB7cHJvamVjdEZyb21NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxET01Qcm9qLnBvcHVsYXRlUHJvamVjdFNjcmVlbil9KTtcbkRPTVByb2ouZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRE9NUHJvai5lZGl0UHJvamVjdCk7XG5cbi8vdGFza3MgbGlzdGVuZXJzXG5ET01UYXNrLmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01UYXNrLmFkZFRhc2tUb0FycmF5KTtcbkRPTVRhc2sudGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgRE9NVGFzay5hZGRUYXNrV2l0aEVudGVyKTtcblxuRE9NUHJvai5yZW5kZXJVSSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==