/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n    align-items: center;\n}\n\n.logoimg{\n    width: 65px;\n    min-width: 65px;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n    overflow:scroll;\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    max-height: 247px;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit, #edit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover, #edit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    min-width: fit-content;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    min-width:507px;\n    justify-content:flex-start;\n    margin-top: 15px;\n    margin-left: 15px;\n    width: 60%;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    align-self: center;\n    margin-left: 50px;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    min-width: 512px;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n    overflow:scroll;\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n    margin-left: 35px;\n}\n\n.task:hover{\n    text-decoration: line-through;\n    cursor:pointer;\n}\n\n.taskcompleted{\n    text-decoration: line-through;\n    color: red;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}\n\n.editbutton, .deletebutton{\n    width: 22px;\n    height: 22px;\n    margin-left: 50px;\n}\n\n.editbtncontainer, .deletebtncontainer{\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n}\n\n.edittext, .deletetext{\n    display: none;\n    align-self: center;\n    padding-left: 5px;\n    border-bottom: 1px solid black;\n    border-top: 1px solid black;\n    border-right: 1px solid black;\n    border-radius: 0px 5px 5px 0px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    padding-right: 5px;\n}\n.editbtncontainer:hover .edittext{\n    display:block;\n    animation-name: test;\n    animation-duration: 0.7s;\n}\n\n.deletebtncontainer:hover .deletetext{\n    display:block;\n    animation-name: test;\n    animation-duration: 0.7s;\n}\n\n@keyframes test{\n    0%{width: 0%}\n    25%{width: 25%}\n    50%{width: 50%}\n    100%{width: 100%}\n}\n\n\n@media screen and (max-width: 950px ) {\n    .menu-title{\n        font-size: 12px;\n    }\n\n    #add-project-btn, .menuprojectname, .arrow{\n        font-size: 10px;\n    }\n\n    .project-date, .project-name, .project-priority{\n        font-size: 14px;\n        align-self: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n    align-items: center;\n}\n\n.logoimg{\n    width: 65px;\n    min-width: 65px;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n    overflow:scroll;\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    max-height: 247px;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit, #edit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover, #edit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    min-width: fit-content;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    min-width:507px;\n    justify-content:flex-start;\n    margin-top: 15px;\n    margin-left: 15px;\n    width: 60%;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    align-self: center;\n    margin-left: 50px;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    min-width: 512px;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n    overflow:scroll;\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n    margin-left: 35px;\n}\n\n.task:hover{\n    text-decoration: line-through;\n    cursor:pointer;\n}\n\n.taskcompleted{\n    text-decoration: line-through;\n    color: red;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}\n\n.editbutton, .deletebutton{\n    width: 22px;\n    height: 22px;\n    margin-left: 50px;\n}\n\n.editbtncontainer, .deletebtncontainer{\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n}\n\n.edittext, .deletetext{\n    display: none;\n    align-self: center;\n    padding-left: 5px;\n    border-bottom: 1px solid black;\n    border-top: 1px solid black;\n    border-right: 1px solid black;\n    border-radius: 0px 5px 5px 0px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    padding-right: 5px;\n}\n.editbtncontainer:hover .edittext{\n    display:block;\n    animation-name: test;\n    animation-duration: 0.7s;\n}\n\n.deletebtncontainer:hover .deletetext{\n    display:block;\n    animation-name: test;\n    animation-duration: 0.7s;\n}\n\n@keyframes test{\n    0%{width: 0%}\n    25%{width: 25%}\n    50%{width: 50%}\n    100%{width: 100%}\n}\n\n\n@media screen and (max-width: 950px ) {\n    .menu-title{\n        font-size: 12px;\n    }\n\n    #add-project-btn, .menuprojectname, .arrow{\n        font-size: 10px;\n    }\n\n    .project-date, .project-name, .project-priority{\n        font-size: 14px;\n        align-self: center;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
/* harmony export */   "editProject": () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOM_Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-Tasks */ "./src/DOM-Tasks.js");



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
    if (repeatedName == true){
        alert("Project name already used")
    }
    else if (priority === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information")
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
    deleteIcon.src = '/src/images/delete.png';
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
    {title:"First Project",dueDate:"2050-12-25",priority:"High",tasks:[]}
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
    console.log(projects)
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
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

// export function saveLocalStorage(){
//     localStorage.setItem('projects', JSON.stringify(projects));
// }

// function restoreLocalStorage(){
//     projects = JSON.parse(localStorage.getItem('projects'));
//     console.log(projects)
//     DOMProj.populateProjectMenu();
//     projectName.textContent = `${projects[0].title}`;
//     projectDate.textContent = `Date: ${projects[0].dueDate}`;
//     projectPriority.textContent = `Priority: ${projects[0].priority}`;

//     DOMTask.renderTasks();
// }

(0,_projects__WEBPACK_IMPORTED_MODULE_1__.restoreLocalStorage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQzRCO0FBQ1A7QUFDSDs7QUFFdkM7QUFDQSxzRUFBbUMsVUFBVSwwREFBdUI7QUFDcEUscUVBQWtDLFVBQVUsMERBQXVCO0FBQ25FLHdFQUFxQyxVQUFVLDJEQUF3QjtBQUN2RSxxRUFBa0MsU0FBUyx3REFBcUI7QUFDaEUsbUVBQWdDLHFCQUFxQix5Q0FBeUMsZ0VBQTZCLEVBQUU7QUFDN0gsbUVBQWdDLFNBQVMsc0RBQW1COztBQUU1RDtBQUNBLG1FQUFtQyxVQUFVLHNEQUFzQjtBQUNuRSxrRUFBa0MsVUFBVSx3REFBd0I7O0FBRXBFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQsMENBQTBDLG9CQUFvQjtBQUM5RCxrREFBa0QscUJBQXFCOztBQUV2RTtBQUNBOztBQUVBLDhEQUFtQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLVByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS1UYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgNTksIDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nb2ltZ3tcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG4gICAgbWFyZ2luOjIwcHg7XFxufVxcblxcbmgxe1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE3MywgMTY3KTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udG9kb3MtZGlzcGxheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMzMsIDIyOCwgMSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgbWluLXdpZHRoOiAzODZweDtcXG4gICAgbWluLWhlaWdodDogMjQ1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyNDdweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tdGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXR7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNjYW5jZWwsICNzdWJtaXQsICNlZGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjExLCAyMTIsIDI1NSwgMSk7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjYW5jZWw6aG92ZXIsICNzdWJtaXQ6aG92ZXIsICNlZGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTEsIDE1MiwgMjU1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxNiwgMTc5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6c29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEzcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDE4NCwgMTA1LCAwLjUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudXByb2plY3RuYW1lOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjUpO1xcbiAgICA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6ODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnJvd3tcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6NTA3cHg7XFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC10YXNrc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgbWluLXdpZHRoOiA1MTJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigxMzEsIDEzMSwgMTMxKTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4udGFza2NvbXBsZXRlZHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrc2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuLmFkZHRhc2tjb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuLnRhc2tpbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmVkaXRpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG59XFxuXFxuLmRlbGV0ZWljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uYWRkdGFza2J0bntcXG4gICAgaGVpZ2h0OjIycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRidXR0b24sIC5kZWxldGVidXR0b257XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uZWRpdGJ0bmNvbnRhaW5lciwgLmRlbGV0ZWJ0bmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0dGV4dCwgLmRlbGV0ZXRleHR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG4uZWRpdGJ0bmNvbnRhaW5lcjpob3ZlciAuZWRpdHRleHR7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0ZXN0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxufVxcblxcbi5kZWxldGVidG5jb250YWluZXI6aG92ZXIgLmRlbGV0ZXRleHR7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0ZXN0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxufVxcblxcbkBrZXlmcmFtZXMgdGVzdHtcXG4gICAgMCV7d2lkdGg6IDAlfVxcbiAgICAyNSV7d2lkdGg6IDI1JX1cXG4gICAgNTAle3dpZHRoOiA1MCV9XFxuICAgIDEwMCV7d2lkdGg6IDEwMCV9XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4ICkge1xcbiAgICAubWVudS10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcblxcbiAgICAjYWRkLXByb2plY3QtYnRuLCAubWVudXByb2plY3RuYW1lLCAuYXJyb3d7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGF0ZSwgLnByb2plY3QtbmFtZSwgLnByb2plY3QtcHJpb3JpdHl7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFFBQVE7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RCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksR0FBRyxTQUFTO0lBQ1osSUFBSSxVQUFVO0lBQ2QsSUFBSSxVQUFVO0lBQ2QsS0FBSyxXQUFXO0FBQ3BCOzs7QUFHQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgNTksIDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nb2ltZ3tcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG4gICAgbWFyZ2luOjIwcHg7XFxufVxcblxcbmgxe1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE3MywgMTY3KTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udG9kb3MtZGlzcGxheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMzMsIDIyOCwgMSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgbWluLXdpZHRoOiAzODZweDtcXG4gICAgbWluLWhlaWdodDogMjQ1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyNDdweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tdGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXR7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNjYW5jZWwsICNzdWJtaXQsICNlZGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjExLCAyMTIsIDI1NSwgMSk7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjYW5jZWw6aG92ZXIsICNzdWJtaXQ6aG92ZXIsICNlZGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTEsIDE1MiwgMjU1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxNiwgMTc5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6c29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEzcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDE4NCwgMTA1LCAwLjUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudXByb2plY3RuYW1lOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjUpO1xcbiAgICA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6ODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnJvd3tcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6NTA3cHg7XFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC10YXNrc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgbWluLXdpZHRoOiA1MTJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigxMzEsIDEzMSwgMTMxKTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4udGFza2NvbXBsZXRlZHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrc2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuLmFkZHRhc2tjb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuLnRhc2tpbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmVkaXRpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG59XFxuXFxuLmRlbGV0ZWljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uYWRkdGFza2J0bntcXG4gICAgaGVpZ2h0OjIycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRidXR0b24sIC5kZWxldGVidXR0b257XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uZWRpdGJ0bmNvbnRhaW5lciwgLmRlbGV0ZWJ0bmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0dGV4dCwgLmRlbGV0ZXRleHR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG4uZWRpdGJ0bmNvbnRhaW5lcjpob3ZlciAuZWRpdHRleHR7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0ZXN0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxufVxcblxcbi5kZWxldGVidG5jb250YWluZXI6aG92ZXIgLmRlbGV0ZXRleHR7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0ZXN0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxufVxcblxcbkBrZXlmcmFtZXMgdGVzdHtcXG4gICAgMCV7d2lkdGg6IDAlfVxcbiAgICAyNSV7d2lkdGg6IDI1JX1cXG4gICAgNTAle3dpZHRoOiA1MCV9XFxuICAgIDEwMCV7d2lkdGg6IDEwMCV9XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4ICkge1xcbiAgICAubWVudS10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcblxcbiAgICAjYWRkLXByb2plY3QtYnRuLCAubWVudXByb2plY3RuYW1lLCAuYXJyb3d7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGF0ZSwgLnByb2plY3QtbmFtZSwgLnByb2plY3QtcHJpb3JpdHl7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0cywgc2F2ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gXCIuL0RPTS1UYXNrc1wiO1xuXG5leHBvcnQgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVidXR0b24nKTtcbmV4cG9ydCBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRidXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRhdGUnKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1wcmlvcml0eScpO1xuXG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ0bnMnKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuXG5leHBvcnQgY29uc3Qgb3BlblByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShwcm9qZWN0Rm9ybSkuekluZGV4ID09IFwiLTFcIil7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hbmltYXRlKFtcbiAgICAgICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMC4zKVwiLH0sXG4gICAgICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsfVxuICAgICAgICBdLCAxNTApO1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5hbmltYXRlKFtcbiAgICAgICAge3RyYW5zZm9ybTogXCJzY2FsZSgxKVwiLH0sXG4gICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMClcIix9XG4gICAgXSwgMTUwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtwcm9qZWN0Rm9ybS5zdHlsZS56SW5kZXggPSBcIi0xXCJ9LCAxNTApO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RUb0FwcCA9ICgpID0+IHtcbiAgICBjb25zdCBwcmlvcml0eSA9IGdldFByaW9yaXR5KHByaW9yaXR5SW5wdXQpXG4gICAgY29uc3QgcmVwZWF0ZWROYW1lID0gY2hlY2tGb3JSZXBlYXRlZE5hbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICBpZiAocmVwZWF0ZWROYW1lID09IHRydWUpe1xuICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IHVzZWRcIilcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IG51bGwgfHwgbmFtZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZGF0ZUlucHV0LnZhbHVlID09IFwiXCIpe1xuICAgICAgICBhbGVydChcIkMnbW9uLCBiZSBuaWNlIGFuZCBmaWxsIGFsbCBpbmZvcm1hdGlvblwiKVxuICAgIH1lbHNle1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QobmFtZUlucHV0LnZhbHVlLGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHkpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZFRvUHJvamVjdHMoKVxuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgdXBkYXRlVG9MYXN0Q3JlYXRlZFByb2plY3QoKTtcbiAgICAgICAgc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVRvTGFzdENyZWF0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RQcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5sZW5ndGgtMTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLnRpdGxlfWA7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS5kdWVEYXRlfWA7XG4gICAgcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLnByaW9yaXR5fWA7XG4gICAgXG4gICAgcmVuZGVyVGFza3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpdiA9ICh0ZXh0LCBjc3NDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBuZXdFbGVtZW50XG59XG5cbmNvbnN0IGFkZFByb2plY3RUb01lbnUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRGl2KCcnLCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgbmFtZURpdiA9IGNyZWF0ZURpdihwcm9qZWN0TmFtZSwnbWVudXByb2plY3RuYW1lJyk7XG4gICAgY29uc3QgYXJyb3dEaXYgPSBjcmVhdGVEaXYoJz4nLCdhcnJvdycpO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFycm93RGl2KTtcblxuICAgIGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudXByb2plY3RuYW1lJyk7XG4gICAgcHJvamVjdHNGcm9tTWVudS5mb3JFYWNoKHByb2plY3RGcm9tTWVudSA9PiB7cHJvamVjdEZyb21NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwb3B1bGF0ZVByb2plY3RTY3JlZW4pfSk7XG59O1xuXG5cbmNvbnN0IGdldFByaW9yaXR5ID0gKHByaW9yaXR5Tm9kZSkgPT4ge1xuICAgIGlmIChwcmlvcml0eU5vZGVbMF0uY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuIFwiSGlnaFwiXG4gICAgfWVsc2UgaWYocHJpb3JpdHlOb2RlWzFdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIk5vcm1hbFwiXG4gICAgfWVsc2UgaWYocHJpb3JpdHlOb2RlWzJdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIkxvd1wiXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZW1wdHlEaXYgPSAoZGl2KSA9PiB7XG4gICAgY29uc3QgZGl2VG9CZUVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkaXYpO1xuICAgIHdoaWxlIChkaXZUb0JlRW1wdHkuZmlyc3RDaGlsZCl7XG4gICAgICAgIGRpdlRvQmVFbXB0eS5yZW1vdmVDaGlsZChkaXZUb0JlRW1wdHkubGFzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlUHJvamVjdFNjcmVlbiA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFBvc2l0aW9uID0gZ2V0UHJvamVjdEJ5SW5kZXgoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLnRpdGxlfWA7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLmR1ZURhdGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbcHJvamVjdFBvc2l0aW9uXS5wcmlvcml0eX1gO1xuICAgIFxuICAgIHJlbmRlclRhc2tzKCk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2plY3RCeUluZGV4ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGV0IGkgPSAwXG4gICAgd2hpbGUocHJvamVjdHNbaV0udGl0bGUgIT0gcHJvamVjdE5hbWUpe1xuICAgICAgICBpKytcbiAgICB9XG4gICAgcmV0dXJuIGlcbn1cblxuY29uc3QgY2hlY2tGb3JSZXBlYXRlZE5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCByZXBlYXRlZE5hbWUgPSBmYWxzZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT09IHByb2plY3RzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgICAgcmVwZWF0ZWROYW1lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXBlYXRlZE5hbWVcbn1cblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlUHJvamVjdE1lbnUgPSAoKSA9PiB7XG4gICAgZW1wdHlEaXYoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICBhZGRQcm9qZWN0VG9NZW51KHByb2plY3RzW2ldLnRpdGxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAxKXtcbiAgICAgICAgY29uc3QgcHJvamVjdFBvc2l0aW9uID0gZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdFBvc2l0aW9uLDEpO1xuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIHVwZGF0ZVRvTGFzdENyZWF0ZWRQcm9qZWN0KCk7XG4gICAgfWVsc2V7XG4gICAgICAgIGFsZXJ0KGBZb3UgY2FuJ3QgZGVsZXRlIGFsbCBwcm9qZWN0c2ApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGFkZEJ1dHRvbi52YWx1ZSA9IFwiRWRpdFwiO1xuICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0FwcCk7XG4gICAgXG4gICAgb3BlblByb2plY3RGb3JtKCk7XG4gICAgXG4gICAgLy9jb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2dldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KV07XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IHByb2plY3REYXRlLnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IHByaW9yaXR5U3RyaW5nID0gcHJvamVjdFByaW9yaXR5LnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXVxuICAgIFxuICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGVTdHJpbmc7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgaWYocHJpb3JpdHlTdHJpbmcgPT0gXCJIaWdoXCIpe1xuICAgICAgICBwcmlvcml0eUlucHV0WzBdLmNoZWNrZWQgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChwcmlvcml0eVN0cmluZyA9PSBcIk5vcm1hbFwiKXtcbiAgICAgICAgcHJpb3JpdHlJbnB1dFsxXS5jaGVja2VkID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5SW5wdXRbMl0uY2hlY2tlZCA9IHRydWVcbiAgICB9XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdEFycmF5KVxuXG59XG5cbmNvbnN0IGVkaXRQcm9qZWN0QXJyYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0UHJpb3JpdHkocHJpb3JpdHlJbnB1dCk7XG4gICAgY29uc3QgcmVwZWF0ZWROYW1lID0gY2hlY2tGb3JSZXBlYXRlZE5hbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICBjb25zdCBjaGVja05hbWVDaGFuZ2UgPSAhKHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZUlucHV0LnZhbHVlKTtcbiAgICBpZiAocmVwZWF0ZWROYW1lID09IHRydWUgJiYgY2hlY2tOYW1lQ2hhbmdlID09IHRydWUpe1xuICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IHVzZWRcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09PSBudWxsIHx8IG5hbWVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJDJ21vbiwgYmUgbmljZSBhbmQgZmlsbCBhbGwgaW5mb3JtYXRpb25cIik7XG4gICAgfWVsc2V7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRpdGxlID0gbmFtZUlucHV0LnZhbHVlO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5kdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFByb2plY3QudGl0bGV9YDtcbiAgICAgICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtjdXJyZW50UHJvamVjdC5kdWVEYXRlfWA7XG4gICAgICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtjdXJyZW50UHJvamVjdC5wcmlvcml0eX1gO1xuICAgICAgICBcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIGFkZEJ1dHRvbi52YWx1ZSA9IFwiQWRkXCI7XG4gICAgICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0QXJyYXkpO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0VG9BcHApO1xuICAgICAgICBzYXZlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufSIsImltcG9ydCB7IHRhc2ssIHByb2plY3RzLCBzYXZlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHByb2plY3ROYW1lLCBnZXRQcm9qZWN0QnlJbmRleCwgY3JlYXRlRGl2LCBlbXB0eURpdiB9IGZyb20gXCIuL0RPTS1Qcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0YXNrYnRuJyk7XG5leHBvcnQgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tpbnB1dCcpO1xuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3Njb250YWluZXInKTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb0FycmF5ID0gKCkgPT4ge1xuICAgIGlmICh0YXNrSW5wdXQudmFsdWUgIT0gXCJcIil7IFxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuICAgICAgICBuZXdUYXNrLmFkZFRvUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICAgIHNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9O1xufVxuXG5jb25zdCBjcmVhdGVUYXNrRGl2ID0gKHRhc2tEZXNjcmlwdGlvbiwgY29tcGxldGVkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZURpdignJywgJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBkZWxldGVJY29uLnNyYyA9ICcvc3JjL2ltYWdlcy9kZWxldGUucG5nJztcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWljb24nKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pXG5cbiAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tMaS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza0xpLnRleHRDb250ZW50ID0gdGFza0Rlc2NyaXB0aW9uXG4gICAgaWYgKGNvbXBsZXRlZCA9PSB0cnVlKXtcbiAgICAgICAgdGFza0xpLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjb21wbGV0ZWQnKTtcbiAgICB9XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGkpO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgZW1wdHlEaXYoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlVGFza0RpdihjdXJyZW50UHJvamVjdC50YXNrc1tpXS5kZXNjcmlwdGlvbiwgY3VycmVudFByb2plY3QudGFza3NbaV0uY2hlY2tsaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZWljb24nKTtcbiAgICBjb25zdCB0YXNrRGVzY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVCdG5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGVsZXRlQnRuc1tpXS5kYXRhc2V0LnRhc2tudW0gPSBpO1xuICAgICAgICB0YXNrRGVzY3NbaV0uZGF0YXNldC50YXNrbnVtID0gaTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKGRlbGV0ZUJ0biA9PiB7ZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKX0pO1xuICAgIHRhc2tEZXNjcy5mb3JFYWNoKHRhc2tEZXNjID0+IHt0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY29tcGxldGVUYXNrKX0pO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza1dpdGhFbnRlciA9IChlKSA9PiB7XG4gICAgaWYoZS5rZXlDb2RlID09IDEzKXtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0YXNrYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uY2xpY2soKTtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuXG4gICAgY29uc3QgdGFza0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50YXNrbnVtO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gICAgcmVuZGVyVGFza3MoKTtcblxufVxuXG5jb25zdCBjb21wbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZ2V0UHJvamVjdEJ5SW5kZXgocHJvamVjdE5hbWUudGV4dENvbnRlbnQpXTtcblxuICAgIGNvbnN0IHRhc2tJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQudGFza251bTtcbiAgICBpZiAoY3VycmVudFByb2plY3QudGFza3NbdGFza0luZGV4XS5jaGVja2xpc3QgPT0gZmFsc2Upe1xuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrc1t0YXNrSW5kZXhdLmNoZWNrbGlzdCA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzW3Rhc2tJbmRleF0uY2hlY2tsaXN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyVGFza3MoKTtcbn1cblxuXG4iLCJpbXBvcnQgKiBhcyBET01Qcm9qIGZyb20gJy4vRE9NLVByb2plY3RzJztcbmltcG9ydCAqIGFzIERPTVRhc2sgZnJvbSAnLi9ET00tVGFza3MnO1xuXG5sZXQgcHJvamVjdHMgPSBbXG4gICAge3RpdGxlOlwiRmlyc3QgUHJvamVjdFwiLGR1ZURhdGU6XCIyMDUwLTEyLTI1XCIscHJpb3JpdHk6XCJIaWdoXCIsdGFza3M6W119XG5dO1xuXG5jbGFzcyBwcm9qZWN0e1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUb1Byb2plY3RzKCl7XG4gICAgICAgIHByb2plY3RzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuY2xhc3MgdGFza3tcbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRUb1Byb2plY3QocHJvamVjdCl7XG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0aGlzKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2F2ZUxvY2FsU3RvcmFnZSgpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVMb2NhbFN0b3JhZ2UoKXtcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgIERPTVByb2oucG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuICAgIERPTVByb2oucHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1swXS50aXRsZX1gO1xuICAgIERPTVByb2oucHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1swXS5kdWVEYXRlfWA7XG4gICAgRE9NUHJvai5wcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbMF0ucHJpb3JpdHl9YDtcblxuICAgIERPTVRhc2sucmVuZGVyVGFza3MoKTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdCwgdGFzaywgcHJvamVjdHMsIHNhdmVMb2NhbFN0b3JhZ2UsIHJlc3RvcmVMb2NhbFN0b3JhZ2UgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlc3RvcmVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCAqIGFzIERPTVByb2ogZnJvbSAnLi9ET00tUHJvamVjdHMnO1xuaW1wb3J0ICogYXMgRE9NVGFzayBmcm9tICcuL0RPTS1UYXNrcyc7XG5cbi8vcHJvamVjdHMgbGlzdGVuZXJzXG5ET01Qcm9qLm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Qcm9qLm9wZW5Qcm9qZWN0Rm9ybSk7XG5ET01Qcm9qLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVByb2ouYWRkUHJvamVjdFRvQXBwKTtcbkRPTVByb2ouY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUHJvai5jbG9zZVByb2plY3RGb3JtKTtcbkRPTVByb2ouZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxET01Qcm9qLmRlbGV0ZVByb2plY3QpO1xuRE9NUHJvai5wcm9qZWN0c0Zyb21NZW51LmZvckVhY2gocHJvamVjdEZyb21NZW51ID0+IHtwcm9qZWN0RnJvbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERPTVByb2oucG9wdWxhdGVQcm9qZWN0U2NyZWVuKX0pO1xuRE9NUHJvai5lZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxET01Qcm9qLmVkaXRQcm9qZWN0KTtcblxuLy90YXNrcyBsaXN0ZW5lcnNcbkRPTVRhc2suYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVRhc2suYWRkVGFza1RvQXJyYXkpO1xuRE9NVGFzay50YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBET01UYXNrLmFkZFRhc2tXaXRoRW50ZXIpO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsU3RvcmFnZSgpe1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlc3RvcmVMb2NhbFN0b3JhZ2UoKXtcbi8vICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuLy8gICAgIERPTVByb2oucG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuLy8gICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbMF0udGl0bGV9YDtcbi8vICAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Byb2plY3RzWzBdLmR1ZURhdGV9YDtcbi8vICAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbMF0ucHJpb3JpdHl9YDtcblxuLy8gICAgIERPTVRhc2sucmVuZGVyVGFza3MoKTtcbi8vIH1cblxucmVzdG9yZUxvY2FsU3RvcmFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==