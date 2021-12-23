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
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n}\n\n.left-header{\n    display: flex;\n    width:fit-content;\n    align-items: center;\n    min-height: 130px;\n}\n\n.logoimg{\n    width: 8%;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content:space-evenly;\n    margin-top: 15px;\n    width: 60%;\n    height: fit-content;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n}\n\n.deletebutton{\n    height: 20px;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n}\n\n.left-header{\n    display: flex;\n    width:fit-content;\n    align-items: center;\n    min-height: 130px;\n}\n\n.logoimg{\n    width: 8%;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content:space-evenly;\n    margin-top: 15px;\n    width: 60%;\n    height: fit-content;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n}\n\n.deletebutton{\n    height: 20px;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n}\n\n.addtaskbtn{\n    height:22px;\n    align-self: center;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "projectName": () => (/* binding */ projectName),
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm),
/* harmony export */   "closeProjectForm": () => (/* binding */ closeProjectForm),
/* harmony export */   "addProjectToApp": () => (/* binding */ addProjectToApp),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "emptyDiv": () => (/* binding */ emptyDiv),
/* harmony export */   "populateProjectScreen": () => (/* binding */ populateProjectScreen),
/* harmony export */   "getProjectByIndex": () => (/* binding */ getProjectByIndex),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const newProject = document.querySelector('#add-project-btn');
const addButton = document.querySelector('#submit');
const cancelButton = document.querySelector('#cancel');
const projectsFromMenu = document.querySelectorAll('.project');
const deleteBtn = document.querySelector('.deletebutton');
const projectName = document.querySelector('.project-name');
const projectDate = document.querySelector('.project-date');
const projectPriority = document.querySelector('.project-priority');

const openProjectForm = () => {
    const projectForm = document.querySelector('.project-form');
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
    const nameInput = document.querySelector('#name');
    const dateInput = document.querySelector('#date');
    const priorityInput = getPriority()
    const repeatedName = checkForRepeatedName(nameInput.value);
    if (repeatedName == true){
        alert("Project name already used")
    }
    else if (priorityInput === null || nameInput.value == "" || dateInput.value == ""){
        alert("C'mon, be nice and fill all information")
    }else{
        const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.project(nameInput.value,dateInput.value, priorityInput);
        const newTask = new _projects__WEBPACK_IMPORTED_MODULE_0__.task('testetask');
        newProject.addToProjects()
        populateProjectMenu();
        closeProjectForm();
        updateToLastCreatedProject();
    }
};

const updateToLastCreatedProject = () => {
    const lastProjectIndex = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.length-1;
    projectName.textContent = `${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[lastProjectIndex].title}`;
    projectDate.textContent = `Date: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[lastProjectIndex].dueDate}`;
    projectPriority.textContent = `Priority: ${_projects__WEBPACK_IMPORTED_MODULE_0__.projects[lastProjectIndex].priority}`;
    
    //update with tasks logic
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


const getPriority = () => {
    const priorityInput = document.querySelectorAll('.priority-btns');
    if (priorityInput[0].checked == true){
        return "High"
    }else if(priorityInput[1].checked == true){
        return "Normal"
    }else if(priorityInput[2].checked == true){
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

    emptyDiv('.taskscontainer');
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
        console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.projects)
        populateProjectMenu();
        updateToLastCreatedProject();
    }else{
        alert(`You can't delete all projects`);
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
/* harmony export */   "addTaskWithEnter": () => (/* binding */ addTaskWithEnter)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOM_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-Projects */ "./src/DOM-Projects.js");



const addTaskBtn = document.querySelector('.addtaskbtn');
const taskInput = document.querySelector('.taskinput');
const tasksContainer = document.querySelector('.taskscontainer');

const addTaskToArray = () => {
    const newTask = new _projects__WEBPACK_IMPORTED_MODULE_0__.task(taskInput.value);
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.getProjectByIndex)(_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent)];
    newTask.addToProject(currentProject);

    //createTaskDiv(newTask.description);
    renderTasks();
    console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.projects)
}

const createTaskDiv = (taskDescription) => {
    const taskContainer = (0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.createDiv)('', 'task-container');
    tasksContainer.appendChild(taskContainer);

    const taskLi = document.createElement('li');
    taskLi.classList.add('task');
    taskLi.textContent = taskDescription
    taskContainer.appendChild(taskLi);

    console.log(taskLi)

    const deleteIcon = document.createElement('img')
    deleteIcon.src = '/src/images/delete.png';
    deleteIcon.classList.add('deleteicon');
    taskContainer.appendChild(deleteIcon)

}

const renderTasks = () => {
    ;(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.emptyDiv)('.taskscontainer');
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.getProjectByIndex)(_DOM_Projects__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent)];
    for (let i = 0; i < currentProject.tasks.length; i++){
        createTaskDiv(currentProject.tasks[i].description);
    }
}

const addTaskWithEnter = (e) => {
    if(e.keyCode == 13){
        const addTaskBtn = document.querySelector('.addtaskbtn');
        addTaskBtn.click();
        e.target.value = "";
    }
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
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = [
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

//const testProject = new project('test title', 'test description', 'test dueDate', 'test priority', 'test checklist')



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





_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.newProject.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.openProjectForm);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.addButton.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.addProjectToApp);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.cancelButton.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.deleteBtn.addEventListener('click',_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.deleteProject);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.populateProjectScreen)});

_DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.addTaskBtn.addEventListener('click', _DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.addTaskToArray);
_DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.taskInput.addEventListener('keyup', _DOM_Tasks__WEBPACK_IMPORTED_MODULE_3__.addTaskWithEnter);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0M7QUFDWDtBQUNIOztBQUV2QyxzRUFBbUMsVUFBVSwwREFBdUI7QUFDcEUscUVBQWtDLFVBQVUsMERBQXVCO0FBQ25FLHdFQUFxQyxVQUFVLDJEQUF3QjtBQUN2RSxxRUFBa0MsU0FBUyx3REFBcUI7QUFDaEUsbUVBQWdDLHFCQUFxQix5Q0FBeUMsZ0VBQTZCLEVBQUU7O0FBRTdILG1FQUFtQyxVQUFVLHNEQUFzQjtBQUNuRSxrRUFBa0MsVUFBVSx3REFBd0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS1Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00tVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOndyYXA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDU5LCAxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcXG59XFxuXFxuLmxlZnQtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTMwcHg7XFxufVxcblxcbi5sb2dvaW1ne1xcbiAgICB3aWR0aDogOCU7XFxuICAgIG1hcmdpbjoyMHB4O1xcbn1cXG5cXG5oMXtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1tZW51e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNzMsIDE2Nyk7XFxufVxcblxcbi50b2Rvcy1kaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDIzMywgMjI4LCAxKTtcXG59XFxuXFxuLnByb2plY3QtZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGJvdHRvbTowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICBtaW4td2lkdGg6IDM4NnB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNDVweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjRweCkgc2F0dXJhdGUoMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mb3JtLXRpdGxle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxubGFiZWwsIGlucHV0e1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuLnN1Ym1pdC1idG5ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jY2FuY2VsLCAjc3VibWl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjExLCAyMTIsIDI1NSwgMSk7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjYW5jZWw6aG92ZXIsICNzdWJtaXQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1MSwgMTUyLCAyNTUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG57XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjE2LCAxNzkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjpzb2xpZCAxcHggYmxhY2s7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6MTNweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NSwgMTg0LCAxMDUsIDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZToyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51cHJvamVjdG5hbWU6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICB3aWR0aDo4MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFycm93e1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUsIC5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXByaW9yaXR5e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigxMzEsIDEzMSwgMTMxKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jdGFzay1jaGVja2JveHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4udGFza3tcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZGVsZXRlYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi50YXNrc2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuLmFkZHRhc2tjb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuLnRhc2tpbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmVkaXRpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG59XFxuXFxuLmRlbGV0ZWljb257XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGVsZXRlaWNvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uYWRkdGFza2J0bntcXG4gICAgaGVpZ2h0OjIycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsa0RBQWtEO0lBQ2xELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixnREFBZ0Q7SUFDaEQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx3Q0FBd0M7O0lBRXhDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDp3cmFwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCA1OSwgMSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgbWluLWhlaWdodDogMTMwcHg7XFxufVxcblxcbi5sZWZ0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcbn1cXG5cXG4ubG9nb2ltZ3tcXG4gICAgd2lkdGg6IDglO1xcbiAgICBtYXJnaW46MjBweDtcXG59XFxuXFxuaDF7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXYtbWVudXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMTczLCAxNjcpO1xcbn1cXG5cXG4udG9kb3MtZGlzcGxheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMzMsIDIyOCwgMSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgbWluLXdpZHRoOiAzODZweDtcXG4gICAgbWluLWhlaWdodDogMjQ1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjRweCkgc2F0dXJhdGUoMTAwJSk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9ybS10aXRsZXtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbmxhYmVsLCBpbnB1dHtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi5zdWJtaXQtYnRuc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI2NhbmNlbCwgI3N1Ym1pdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxMSwgMjEyLCAyNTUsIDEpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY2FuY2VsOmhvdmVyLCAjc3VibWl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTEsIDE1MiwgMjU1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxNiwgMTc5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6c29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEzcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDE4NCwgMTA1LCAwLjUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudXByb2plY3RuYW1lOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjUpO1xcbiAgICA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6ODAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hcnJvd3tcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGNvbG9yOmJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1kYXRlLCAucHJvamVjdC1uYW1lLCAucHJvamVjdC1wcmlvcml0eXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnByb2plY3QtdGFza3N7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2IoMTMxLCAxMzEsIDEzMSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3Rhc2stY2hlY2tib3h7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmRlbGV0ZWJ1dHRvbntcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGFza3Njb250YWluZXJ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjowcHg7XFxufVxcblxcbi5hZGR0YXNrY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcbi50YXNraW5wdXR7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5lZGl0aWNvbntcXG4gICAgaGVpZ2h0OjE1cHg7XFxufVxcblxcbi5kZWxldGVpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlbGV0ZWljb246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmFkZHRhc2tidG57XFxuICAgIGhlaWdodDoyMnB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdHMsIHRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVidXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbmNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGF0ZScpO1xuY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcHJpb3JpdHknKTtcblxuZXhwb3J0IGNvbnN0IG9wZW5Qcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShwcm9qZWN0Rm9ybSkuekluZGV4ID09IFwiLTFcIil7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hbmltYXRlKFtcbiAgICAgICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMC4zKVwiLH0sXG4gICAgICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsfVxuICAgICAgICBdLCAxNTApO1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5hbmltYXRlKFtcbiAgICAgICAge3RyYW5zZm9ybTogXCJzY2FsZSgxKVwiLH0sXG4gICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMClcIix9XG4gICAgXSwgMTUwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtwcm9qZWN0Rm9ybS5zdHlsZS56SW5kZXggPSBcIi0xXCJ9LCAxNTApO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RUb0FwcCA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGdldFByaW9yaXR5KClcbiAgICBjb25zdCByZXBlYXRlZE5hbWUgPSBjaGVja0ZvclJlcGVhdGVkTmFtZShuYW1lSW5wdXQudmFsdWUpO1xuICAgIGlmIChyZXBlYXRlZE5hbWUgPT0gdHJ1ZSl7XG4gICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGFscmVhZHkgdXNlZFwiKVxuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eUlucHV0ID09PSBudWxsIHx8IG5hbWVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJDJ21vbiwgYmUgbmljZSBhbmQgZmlsbCBhbGwgaW5mb3JtYXRpb25cIilcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KG5hbWVJbnB1dC52YWx1ZSxkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQpO1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IHRhc2soJ3Rlc3RldGFzaycpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZFRvUHJvamVjdHMoKVxuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgdXBkYXRlVG9MYXN0Q3JlYXRlZFByb2plY3QoKTtcbiAgICB9XG59O1xuXG5jb25zdCB1cGRhdGVUb0xhc3RDcmVhdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBsYXN0UHJvamVjdEluZGV4ID0gcHJvamVjdHMubGVuZ3RoLTE7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS50aXRsZX1gO1xuICAgIHByb2plY3REYXRlLnRleHRDb250ZW50ID0gYERhdGU6ICR7cHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0uZHVlRGF0ZX1gO1xuICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS5wcmlvcml0eX1gO1xuICAgIFxuICAgIC8vdXBkYXRlIHdpdGggdGFza3MgbG9naWNcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpdiA9ICh0ZXh0LCBjc3NDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBuZXdFbGVtZW50XG59XG5cbmNvbnN0IGFkZFByb2plY3RUb01lbnUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRGl2KCcnLCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgbmFtZURpdiA9IGNyZWF0ZURpdihwcm9qZWN0TmFtZSwnbWVudXByb2plY3RuYW1lJyk7XG4gICAgY29uc3QgYXJyb3dEaXYgPSBjcmVhdGVEaXYoJz4nLCdhcnJvdycpO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFycm93RGl2KTtcblxuICAgIGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudXByb2plY3RuYW1lJyk7XG4gICAgcHJvamVjdHNGcm9tTWVudS5mb3JFYWNoKHByb2plY3RGcm9tTWVudSA9PiB7cHJvamVjdEZyb21NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwb3B1bGF0ZVByb2plY3RTY3JlZW4pfSk7XG59O1xuXG5cbmNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHktYnRucycpO1xuICAgIGlmIChwcmlvcml0eUlucHV0WzBdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIkhpZ2hcIlxuICAgIH1lbHNlIGlmKHByaW9yaXR5SW5wdXRbMV0uY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuIFwiTm9ybWFsXCJcbiAgICB9ZWxzZSBpZihwcmlvcml0eUlucHV0WzJdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIkxvd1wiXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZW1wdHlEaXYgPSAoZGl2KSA9PiB7XG4gICAgY29uc3QgZGl2VG9CZUVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkaXYpO1xuICAgIHdoaWxlIChkaXZUb0JlRW1wdHkuZmlyc3RDaGlsZCl7XG4gICAgICAgIGRpdlRvQmVFbXB0eS5yZW1vdmVDaGlsZChkaXZUb0JlRW1wdHkubGFzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlUHJvamVjdFNjcmVlbiA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFBvc2l0aW9uID0gZ2V0UHJvamVjdEJ5SW5kZXgoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLnRpdGxlfWA7XG4gICAgcHJvamVjdERhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLmR1ZURhdGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbcHJvamVjdFBvc2l0aW9uXS5wcmlvcml0eX1gO1xuXG4gICAgZW1wdHlEaXYoJy50YXNrc2NvbnRhaW5lcicpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdEJ5SW5kZXggPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgaSA9IDBcbiAgICB3aGlsZShwcm9qZWN0c1tpXS50aXRsZSAhPSBwcm9qZWN0TmFtZSl7XG4gICAgICAgIGkrK1xuICAgIH1cbiAgICByZXR1cm4gaVxufVxuXG5jb25zdCBjaGVja0ZvclJlcGVhdGVkTmFtZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHJlcGVhdGVkTmFtZSA9IGZhbHNlXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcHJvamVjdHNbaV0udGl0bGUudG9Mb3dlckNhc2UoKSl7XG4gICAgICAgICAgICByZXBlYXRlZE5hbWUgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcGVhdGVkTmFtZVxufVxuXG5jb25zdCBwb3B1bGF0ZVByb2plY3RNZW51ID0gKCkgPT4ge1xuICAgIGVtcHR5RGl2KCcucHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgYWRkUHJvamVjdFRvTWVudShwcm9qZWN0c1tpXS50aXRsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RQb3NpdGlvbiA9IGdldFByb2plY3RCeUluZGV4KHByb2plY3ROYW1lLnRleHRDb250ZW50KTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RQb3NpdGlvbiwxKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgIHBvcHVsYXRlUHJvamVjdE1lbnUoKTtcbiAgICAgICAgdXBkYXRlVG9MYXN0Q3JlYXRlZFByb2plY3QoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgYWxlcnQoYFlvdSBjYW4ndCBkZWxldGUgYWxsIHByb2plY3RzYCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgdGFzaywgcHJvamVjdHMsIHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcHJvamVjdE5hbWUsIGdldFByb2plY3RCeUluZGV4LCBjcmVhdGVEaXYsIGVtcHR5RGl2IH0gZnJvbSBcIi4vRE9NLVByb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRhc2tidG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2lucHV0Jyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuXG5leHBvcnQgY29uc3QgYWRkVGFza1RvQXJyYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyB0YXNrKHRhc2tJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuICAgIG5ld1Rhc2suYWRkVG9Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vY3JlYXRlVGFza0RpdihuZXdUYXNrLmRlc2NyaXB0aW9uKTtcbiAgICByZW5kZXJUYXNrcygpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxufVxuXG5jb25zdCBjcmVhdGVUYXNrRGl2ID0gKHRhc2tEZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVEaXYoJycsICd0YXNrLWNvbnRhaW5lcicpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3QgdGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0YXNrTGkuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhc2tMaS50ZXh0Q29udGVudCA9IHRhc2tEZXNjcmlwdGlvblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpKTtcblxuICAgIGNvbnNvbGUubG9nKHRhc2tMaSlcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRlbGV0ZUljb24uc3JjID0gJy9zcmMvaW1hZ2VzL2RlbGV0ZS5wbmcnO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlaWNvbicpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbilcblxufVxuXG5jb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBlbXB0eURpdignLnRhc2tzY29udGFpbmVyJyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCldO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBjcmVhdGVUYXNrRGl2KGN1cnJlbnRQcm9qZWN0LnRhc2tzW2ldLmRlc2NyaXB0aW9uKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrV2l0aEVudGVyID0gKGUpID0+IHtcbiAgICBpZihlLmtleUNvZGUgPT0gMTMpe1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRhc2tidG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi5jbGljaygpO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfVxufSIsImNvbnN0IHByb2plY3RzID0gW1xuICAgIHt0aXRsZTpcIkZpcnN0IFByb2plY3RcIixkdWVEYXRlOlwiMjA1MC0xMi0yNVwiLHByaW9yaXR5OlwiSGlnaFwiLHRhc2tzOltdfVxuXTtcblxuY2xhc3MgcHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0cygpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNsYXNzIHRhc2t7XG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGhpcylcbiAgICB9XG59XG5cbi8vY29uc3QgdGVzdFByb2plY3QgPSBuZXcgcHJvamVjdCgndGVzdCB0aXRsZScsICd0ZXN0IGRlc2NyaXB0aW9uJywgJ3Rlc3QgZHVlRGF0ZScsICd0ZXN0IHByaW9yaXR5JywgJ3Rlc3QgY2hlY2tsaXN0JylcblxuZXhwb3J0IHsgcHJvamVjdCwgdGFzaywgcHJvamVjdHMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3QsIHByb2plY3RzLCB0YXNrIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgKiBhcyBET01Qcm9qIGZyb20gJy4vRE9NLVByb2plY3RzJztcbmltcG9ydCAqIGFzIERPTVRhc2sgZnJvbSAnLi9ET00tVGFza3MnO1xuXG5ET01Qcm9qLm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Qcm9qLm9wZW5Qcm9qZWN0Rm9ybSk7XG5ET01Qcm9qLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVByb2ouYWRkUHJvamVjdFRvQXBwKTtcbkRPTVByb2ouY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUHJvai5jbG9zZVByb2plY3RGb3JtKTtcbkRPTVByb2ouZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxET01Qcm9qLmRlbGV0ZVByb2plY3QpO1xuRE9NUHJvai5wcm9qZWN0c0Zyb21NZW51LmZvckVhY2gocHJvamVjdEZyb21NZW51ID0+IHtwcm9qZWN0RnJvbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERPTVByb2oucG9wdWxhdGVQcm9qZWN0U2NyZWVuKX0pO1xuXG5ET01UYXNrLmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01UYXNrLmFkZFRhc2tUb0FycmF5KTtcbkRPTVRhc2sudGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgRE9NVGFzay5hZGRUYXNrV2l0aEVudGVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=