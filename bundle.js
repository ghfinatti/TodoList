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
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n}\n\n.left-header{\n    display: flex;\n    width:fit-content;\n    align-items: center;\n    min-height: 130px;\n}\n\n.logoimg{\n    width: 8%;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content:space-evenly;\n    margin-top: 15px;\n    width: 60%;\n    height: fit-content;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n}\n\n.deletebutton{\n    height: 20px;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.addtask{\n    align-self: center;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n    filter: saturate(7);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    margin: 0px;\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(34, 34, 59, 1);\n    width: 100%;\n    height: 15%;\n    min-height: 130px;\n}\n\n.left-header{\n    display: flex;\n    width:fit-content;\n    align-items: center;\n    min-height: 130px;\n}\n\n.logoimg{\n    width: 8%;\n    margin:20px;\n}\n\nh1{\n    color:white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.nav-menu{\n    display:flex;\n    flex-direction: column;\n    width: 15%;\n    height: 85%;\n    background-color: rgb(201, 173, 167);\n}\n\n.todos-display{\n    display: flex;\n    flex-direction: column;\n    width: 85%;\n    height: 85%;\n    background-color: rgba(242, 233, 228, 1);\n}\n\n.project-form{\n    display: flex;\n    z-index: -1;\n    flex-direction: column;\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    min-width: 386px;\n    min-height: 245px;\n    width: 20%;\n    height: 30%;\n    backdrop-filter: blur(64px) saturate(100%);\n    -webkit-backdrop-filter: blur(64px) saturate(100%);\n    background-color: rgba(0, 0, 0, 0.32);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.form-title{\n    align-self: center;\n    margin-top: 15px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\nlabel, input{\n    margin: 3px;\n}\n\n.submit-btns{\n    display: flex;\n    margin-top:10px;\n    width: 100%;\n    justify-content: flex-end;\n}\n\n#cancel, #submit{\n    background-color:rgba(211, 212, 255, 1);\n    width: 20%;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#cancel:hover, #submit:hover{\n    background-color:rgb(151, 152, 255);\n    cursor: pointer;\n}\n\n#add-project-btn{\n    align-self: center;\n    background-color: rgb(245, 216, 179);\n    border-radius: 5px;\n    border:solid 1px black;\n    height: 25px;\n    width: 50%;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size:13px;\n}\n\n#add-project-btn:hover{\n    background-color:rgba(245, 184, 105, 0.5);\n    cursor: pointer;\n}\n\n.menu-title{\n    font-size:20px;\n    margin-top: 10px;\n    align-self: center;\n    font-weight: 200;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 14px;\n    margin:10px;\n    display:flex;\n    justify-content: space-between;\n}\n\n.menuprojectname:hover{\n    border-bottom: solid 1px rgba(0,0,0,0.5);\n    ;\n    cursor: pointer;\n}\n\n.projects-container{\n    width:80%;\n    align-self: center;\n}\n\n.arrow{\n    justify-content: flex-end;\n}\n\n.project-header{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content:space-evenly;\n    margin-top: 15px;\n    width: 60%;\n    height: fit-content;\n    color:black;\n}\n\n.project-date, .project-name, .project-priority{\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.project-tasks{\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    width: 60%;\n    height: 75%;\n    margin-top: 10px;\n    margin-left: 15px;\n    box-shadow: 0px 0px 4px rgb(131, 131, 131);\n}\n\n.task-container{\n    display:flex;\n    flex-direction: row;\n    width: 90%;\n    height: 25px;\n    align-self: center;\n    margin-top: 15px;\n}\n\n#task-checkbox{\n    height: 15px;\n}\n\n.task{\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 15px;\n    height: 15px;\n    margin-top: 5px;\n}\n\n.deletebutton{\n    height: 20px;\n}\n\n.taskscontainer{\n    height: fit-content;\n    margin:0px;\n}\n\n.addtaskcontainer{\n    display:flex;\n    flex-direction: row;\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n.taskinput{\n    width: 60%;\n}\n\n.addtask{\n    align-self: center;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.editicon{\n    height:15px;\n}\n\n.deleteicon{\n    height:15px;\n    align-self: center;\n    margin-left: 10px;\n}\n\n.deleteicon:hover{\n    transform: scale(1.5);\n    filter: saturate(7);\n}"],"sourceRoot":""}]);
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
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm),
/* harmony export */   "closeProjectForm": () => (/* binding */ closeProjectForm),
/* harmony export */   "addProjectToApp": () => (/* binding */ addProjectToApp),
/* harmony export */   "populateProjectScreen": () => (/* binding */ populateProjectScreen),
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
    {title:"First Project",dueDate:"2050-12-25",priority:"High",tasks:[{title:"First Task",checklist:false},{title:"Second Task",checklist:false}]}
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




const testProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.project('test title', 'test description', 'test dueDate', 'test priority', 'test checklist')
const testTask1 = new _projects__WEBPACK_IMPORTED_MODULE_1__.task('test task title', 'test task description');
const testTask2 = new _projects__WEBPACK_IMPORTED_MODULE_1__.task('test task title2', 'test task description2');

_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.newProject.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.openProjectForm);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.addButton.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.addProjectToApp);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.cancelButton.addEventListener('click', _DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.closeProjectForm);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.deleteBtn.addEventListener('click',_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.deleteProject);
_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.projectsFromMenu.forEach(projectFromMenu => {projectFromMenu.addEventListener('click',_DOM_Projects__WEBPACK_IMPORTED_MODULE_2__.populateProjectScreen)});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS1Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgNTksIDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcbn1cXG5cXG4ubGVmdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcXG59XFxuXFxuLmxvZ29pbWd7XFxuICAgIHdpZHRoOiA4JTtcXG4gICAgbWFyZ2luOjIwcHg7XFxufVxcblxcbmgxe1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE3MywgMTY3KTtcXG59XFxuXFxuLnRvZG9zLWRpc3BsYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjMzLCAyMjgsIDEpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIG1pbi13aWR0aDogMzg2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tdGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXR7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNjYW5jZWwsICNzdWJtaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMTEsIDIxMiwgMjU1LCAxKTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2NhbmNlbDpob3ZlciwgI3N1Ym1pdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTUxLCAxNTIsIDI1NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTYsIDE3OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOnNvbGlkIDFweCBibGFjaztcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxM3B4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ1LCAxODQsIDEwNSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnVwcm9qZWN0bmFtZTpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIHdpZHRoOjgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYXJyb3d7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBjb2xvcjpibGFjaztcXG59XFxuXFxuLnByb2plY3QtZGF0ZSwgLnByb2plY3QtbmFtZSwgLnByb2plY3QtcHJpb3JpdHl7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDEzMSwgMTMxLCAxMzEpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5kZWxldGVidXR0b257XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRhc2tzY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46MHB4O1xcbn1cXG5cXG4uYWRkdGFza2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG4udGFza2lucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uYWRkdGFza3tcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5lZGl0aWNvbntcXG4gICAgaGVpZ2h0OjE1cHg7XFxufVxcblxcbi5kZWxldGVpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlbGV0ZWljb246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSg3KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lB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QUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgNTksIDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xcbn1cXG5cXG4ubGVmdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcXG59XFxuXFxuLmxvZ29pbWd7XFxuICAgIHdpZHRoOiA4JTtcXG4gICAgbWFyZ2luOjIwcHg7XFxufVxcblxcbmgxe1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2LW1lbnV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE3MywgMTY3KTtcXG59XFxuXFxuLnRvZG9zLWRpc3BsYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjMzLCAyMjgsIDEpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIG1pbi13aWR0aDogMzg2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpIHNhdHVyYXRlKDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2NHB4KSBzYXR1cmF0ZSgxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tdGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXR7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNjYW5jZWwsICNzdWJtaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMTEsIDIxMiwgMjU1LCAxKTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2NhbmNlbDpob3ZlciwgI3N1Ym1pdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTUxLCAxNTIsIDI1NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTYsIDE3OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOnNvbGlkIDFweCBibGFjaztcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxM3B4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ1LCAxODQsIDEwNSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnVwcm9qZWN0bmFtZTpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIHdpZHRoOjgwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYXJyb3d7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBjb2xvcjpibGFjaztcXG59XFxuXFxuLnByb2plY3QtZGF0ZSwgLnByb2plY3QtbmFtZSwgLnByb2plY3QtcHJpb3JpdHl7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDEzMSwgMTMxLCAxMzEpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi50YXNre1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5kZWxldGVidXR0b257XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRhc2tzY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46MHB4O1xcbn1cXG5cXG4uYWRkdGFza2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG4udGFza2lucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uYWRkdGFza3tcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5lZGl0aWNvbntcXG4gICAgaGVpZ2h0OjE1cHg7XFxufVxcblxcbi5kZWxldGVpY29ue1xcbiAgICBoZWlnaHQ6MTVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlbGV0ZWljb246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSg3KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpO1xuZXhwb3J0IGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbmV4cG9ydCBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdHNGcm9tTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG5leHBvcnQgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZWJ1dHRvbicpO1xuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG5jb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRhdGUnKTtcbmNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXByaW9yaXR5Jyk7XG5cbmV4cG9ydCBjb25zdCBvcGVuUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUocHJvamVjdEZvcm0pLnpJbmRleCA9PSBcIi0xXCIpe1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS56SW5kZXggPSBcIjBcIjtcbiAgICAgICAgcHJvamVjdEZvcm0uYW5pbWF0ZShbXG4gICAgICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDAuMylcIix9LFxuICAgICAgICAgICAge3RyYW5zZm9ybTogXCJzY2FsZSgxKVwiLH1cbiAgICAgICAgXSwgMTUwKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uYW5pbWF0ZShbXG4gICAgICAgIHt0cmFuc2Zvcm06IFwic2NhbGUoMSlcIix9LFxuICAgICAgICB7dHJhbnNmb3JtOiBcInNjYWxlKDApXCIsfVxuICAgIF0sIDE1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7cHJvamVjdEZvcm0uc3R5bGUuekluZGV4ID0gXCItMVwifSwgMTUwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0VG9BcHAgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBnZXRQcmlvcml0eSgpXG4gICAgY29uc3QgcmVwZWF0ZWROYW1lID0gY2hlY2tGb3JSZXBlYXRlZE5hbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICBpZiAocmVwZWF0ZWROYW1lID09IHRydWUpe1xuICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IHVzZWRcIilcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHlJbnB1dCA9PT0gbnVsbCB8fCBuYW1lSW5wdXQudmFsdWUgPT0gXCJcIiB8fCBkYXRlSW5wdXQudmFsdWUgPT0gXCJcIil7XG4gICAgICAgIGFsZXJ0KFwiQydtb24sIGJlIG5pY2UgYW5kIGZpbGwgYWxsIGluZm9ybWF0aW9uXCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChuYW1lSW5wdXQudmFsdWUsZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0KTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRUb1Byb2plY3RzKClcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0TWVudSgpO1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgICAgIHVwZGF0ZVRvTGFzdENyZWF0ZWRQcm9qZWN0KCk7XG4gICAgfVxufTtcblxuY29uc3QgdXBkYXRlVG9MYXN0Q3JlYXRlZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFzdFByb2plY3RJbmRleCA9IHByb2plY3RzLmxlbmd0aC0xO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0udGl0bGV9YDtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Byb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLmR1ZURhdGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0ucHJpb3JpdHl9YDtcbiAgICBcbiAgICAvL3VwZGF0ZSB3aXRoIHRhc2tzIGxvZ2ljXG59XG5cbmNvbnN0IGNyZWF0ZURpdiA9ICh0ZXh0LCBjc3NDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBuZXdFbGVtZW50XG59XG5cbmNvbnN0IGFkZFByb2plY3RUb01lbnUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRGl2KCcnLCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgbmFtZURpdiA9IGNyZWF0ZURpdihwcm9qZWN0TmFtZSwnbWVudXByb2plY3RuYW1lJyk7XG4gICAgY29uc3QgYXJyb3dEaXYgPSBjcmVhdGVEaXYoJz4nLCdhcnJvdycpO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFycm93RGl2KTtcblxuICAgIGNvbnN0IHByb2plY3RzRnJvbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudXByb2plY3RuYW1lJyk7XG4gICAgcHJvamVjdHNGcm9tTWVudS5mb3JFYWNoKHByb2plY3RGcm9tTWVudSA9PiB7cHJvamVjdEZyb21NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwb3B1bGF0ZVByb2plY3RTY3JlZW4pfSk7XG59O1xuXG5cbmNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHktYnRucycpO1xuICAgIGlmIChwcmlvcml0eUlucHV0WzBdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIkhpZ2hcIlxuICAgIH1lbHNlIGlmKHByaW9yaXR5SW5wdXRbMV0uY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuIFwiTm9ybWFsXCJcbiAgICB9ZWxzZSBpZihwcmlvcml0eUlucHV0WzJdLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiBcIkxvd1wiXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5jb25zdCBlbXB0eURpdiA9IChkaXYpID0+IHtcbiAgICBjb25zdCBkaXZUb0JlRW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRpdik7XG4gICAgd2hpbGUgKGRpdlRvQmVFbXB0eS5maXJzdENoaWxkKXtcbiAgICAgICAgZGl2VG9CZUVtcHR5LnJlbW92ZUNoaWxkKGRpdlRvQmVFbXB0eS5sYXN0Q2hpbGQpO1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcG9wdWxhdGVQcm9qZWN0U2NyZWVuID0gKGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0UG9zaXRpb24gPSBnZXRQcm9qZWN0QnlJbmRleChlLnRhcmdldC50ZXh0Q29udGVudCk7XG5cbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RQb3NpdGlvbl0udGl0bGV9YDtcbiAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Byb2plY3RzW3Byb2plY3RQb3NpdGlvbl0uZHVlRGF0ZX1gO1xuICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtwcm9qZWN0c1twcm9qZWN0UG9zaXRpb25dLnByaW9yaXR5fWA7XG5cbiAgICBlbXB0eURpdignLnRhc2tzY29udGFpbmVyJyk7XG59XG5cbmNvbnN0IGdldFByb2plY3RCeUluZGV4ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGV0IGkgPSAwXG4gICAgd2hpbGUocHJvamVjdHNbaV0udGl0bGUgIT0gcHJvamVjdE5hbWUpe1xuICAgICAgICBpKytcbiAgICB9XG4gICAgcmV0dXJuIGlcbn1cblxuY29uc3QgY2hlY2tGb3JSZXBlYXRlZE5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCByZXBlYXRlZE5hbWUgPSBmYWxzZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT09IHByb2plY3RzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgICAgcmVwZWF0ZWROYW1lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXBlYXRlZE5hbWVcbn1cblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0TWVudSA9ICgpID0+IHtcbiAgICBlbXB0eURpdignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgIGFkZFByb2plY3RUb01lbnUocHJvamVjdHNbaV0udGl0bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDEpe1xuICAgICAgICBjb25zdCBwcm9qZWN0UG9zaXRpb24gPSBnZXRQcm9qZWN0QnlJbmRleChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0UG9zaXRpb24sMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgICBwb3B1bGF0ZVByb2plY3RNZW51KCk7XG4gICAgICAgIHVwZGF0ZVRvTGFzdENyZWF0ZWRQcm9qZWN0KCk7XG4gICAgfWVsc2V7XG4gICAgICAgIGFsZXJ0KGBZb3UgY2FuJ3QgZGVsZXRlIGFsbCBwcm9qZWN0c2ApO1xuICAgIH1cbn1cbiIsImNvbnN0IHByb2plY3RzID0gW1xuICAgIHt0aXRsZTpcIkZpcnN0IFByb2plY3RcIixkdWVEYXRlOlwiMjA1MC0xMi0yNVwiLHByaW9yaXR5OlwiSGlnaFwiLHRhc2tzOlt7dGl0bGU6XCJGaXJzdCBUYXNrXCIsY2hlY2tsaXN0OmZhbHNlfSx7dGl0bGU6XCJTZWNvbmQgVGFza1wiLGNoZWNrbGlzdDpmYWxzZX1dfVxuXTtcblxuY2xhc3MgcHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9Qcm9qZWN0cygpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNsYXNzIHRhc2t7XG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XG4gICAgfVxufVxuXG4vL2NvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IHByb2plY3QoJ3Rlc3QgdGl0bGUnLCAndGVzdCBkZXNjcmlwdGlvbicsICd0ZXN0IGR1ZURhdGUnLCAndGVzdCBwcmlvcml0eScsICd0ZXN0IGNoZWNrbGlzdCcpXG5cbmV4cG9ydCB7IHByb2plY3QsIHRhc2ssIHByb2plY3RzIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0cywgdGFzayB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0ICogYXMgRE9NUHJvaiBmcm9tICcuL0RPTS1Qcm9qZWN0cyc7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IHByb2plY3QoJ3Rlc3QgdGl0bGUnLCAndGVzdCBkZXNjcmlwdGlvbicsICd0ZXN0IGR1ZURhdGUnLCAndGVzdCBwcmlvcml0eScsICd0ZXN0IGNoZWNrbGlzdCcpXG5jb25zdCB0ZXN0VGFzazEgPSBuZXcgdGFzaygndGVzdCB0YXNrIHRpdGxlJywgJ3Rlc3QgdGFzayBkZXNjcmlwdGlvbicpO1xuY29uc3QgdGVzdFRhc2syID0gbmV3IHRhc2soJ3Rlc3QgdGFzayB0aXRsZTInLCAndGVzdCB0YXNrIGRlc2NyaXB0aW9uMicpO1xuXG5ET01Qcm9qLm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Qcm9qLm9wZW5Qcm9qZWN0Rm9ybSk7XG5ET01Qcm9qLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVByb2ouYWRkUHJvamVjdFRvQXBwKTtcbkRPTVByb2ouY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUHJvai5jbG9zZVByb2plY3RGb3JtKTtcbkRPTVByb2ouZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxET01Qcm9qLmRlbGV0ZVByb2plY3QpO1xuRE9NUHJvai5wcm9qZWN0c0Zyb21NZW51LmZvckVhY2gocHJvamVjdEZyb21NZW51ID0+IHtwcm9qZWN0RnJvbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERPTVByb2oucG9wdWxhdGVQcm9qZWN0U2NyZWVuKX0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==