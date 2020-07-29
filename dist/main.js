/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/cloudy.jpg */ \"./src/images/cloudy.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  min-height: 100vh;\\n  color: #fff;\\n}\\n\\n.first-message {\\n  font-size: 58px;\\n  font-weight: bold;\\n  max-width: 700px;\\n  text-align: center;\\n  margin: auto;\\n}\\n\\n.selected {\\n  color: #fff;\\n  font-weight: bolder;\\n}\\n\\n.units {\\n  font-size: 36px;\\n  margin: auto;\\n  cursor: pointer;\\n  color: lightgray;\\n}\\n\\n.main-content {\\n  display: none;\\n}\\n\\nheader {\\n  text-align: center;\\n}\\n\\n.search-bar {\\n  max-width: 320px;\\n  background-color: rgba(255, 255, 255, 0.6);\\n  border-radius: 25px;\\n}\\n\\n.main-card {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  max-width: 350px;\\n}\\n\\n.city-name {\\n  font-size: 32px;\\n}\\n\\n.icon-weather {\\n  height: 105px;\\n}\\n\\n.description {\\n  font-size: 28px;\\n  font-weight: 700;\\n}\\n\\n.temperature {\\n  font-size: 72px;\\n}\\n\\n.bottom-container {\\n  width: 100%;\\n  font-size: 16px;\\n}\\n\\n.error-message {\\n  visibility: hidden;\\n}\\n\\n.forecast-card {\\n  text-align: center;\\n  border-radius: 25px;\\n  box-shadow: 2px 1px 5px 2px rgba(241, 229, 52, 0.801);\\n}\\n\\n.temp-forecast {\\n  font-size: 26px;\\n}\\n\\n.icon-forecast {\\n  height: 85px;\\n}\\n\\n.forecast-day {\\n  text-transform: uppercase;\\n  font-size: 26px;\\n}\\n\\n.gift-container {\\n  height: 250px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/apis/giphyApi.js":
/*!******************************!*\
  !*** ./src/apis/giphyApi.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulation */ \"./src/domManipulation.js\");\n\n\nconst errorMessage = document.querySelector('.error-message');\n\nasync function getGift() {\n  try {\n    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=JbHdX4EguTWZ7yIGmJ4qJDtoBI2LuUg7&s=weather', { mode: 'cors' });\n    const giftData = await response.json();\n    Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"displayGift\"])(giftData);\n  } catch (e) {\n    errorMessage.style.visibility = 'visible';\n    errorMessage.textContent = 'Gift not found';\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getGift);\n\n//# sourceURL=webpack:///./src/apis/giphyApi.js?");

/***/ }),

/***/ "./src/apis/openWeatherApi.js":
/*!************************************!*\
  !*** ./src/apis/openWeatherApi.js ***!
  \************************************/
/*! exports provided: getWeather, getForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getForecast\", function() { return getForecast; });\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulation */ \"./src/domManipulation.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ \"./src/helper.js\");\n\n\n\nconst errorMessage = document.querySelector('.error-message');\nconst api = {\n  key: '175ed9516bf5a7c853e693c92bba596b',\n  baseurl: 'https://api.openweathermap.org/data/2.5/',\n};\n\nasync function getWeather(query, unit) {\n  try {\n    const response = await fetch(`${api.baseurl}weather?q=${query}&units=${unit === 'C' ? 'metric' : 'imperial'}&APPID=${api.key}`, { mode: 'cors' });\n    const weather = await response.json();\n    const mainContent = document.querySelector('.main-content');\n    mainContent.classList.add('d-flex', 'justify-content-around');\n    Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"displayWeather\"])(weather, unit);\n  } catch (e) {\n    errorMessage.style.visibility = 'visible';\n    errorMessage.textContent = 'City not found';\n    const mainContent = document.querySelector('.main-content');\n    mainContent.classList.remove('d-flex', 'justify-content-around');\n  }\n}\n\nasync function getForecast(query, unit) {\n  try {\n    const responseForecast = await fetch(`${api.baseurl}forecast?q=${query}&units=${unit === 'C' ? 'metric' : 'imperial'}&appid=${api.key}`, { mode: 'cors' });\n    const forecast = await responseForecast.json();\n    const forecastCont = document.querySelector('.forecast');\n    Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"clearElement\"])(forecastCont);\n    Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"displayForecast\"])(forecast, unit);\n  } catch (e) {\n    errorMessage.style.visibility = 'visible';\n    errorMessage.textContent = 'City not found';\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/apis/openWeatherApi.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/*! exports provided: displayWeather, displayForecast, displayGift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayWeather\", function() { return displayWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayForecast\", function() { return displayForecast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayGift\", function() { return displayGift; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nconst displayWeather = (weather, unit) => {\n  const firstMessage = document.querySelector('.first-message');\n  firstMessage.style.display = 'none';\n\n  const cityName = document.querySelector('.city-name');\n  cityName.textContent = `${weather.name}, ${weather.sys.country}`;\n\n  const cityDate = document.querySelector('.city-date');\n  cityDate.textContent = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setDate\"])().weatherDate;\n\n  const iconWeather = document.querySelector('.icon-weather');\n  iconWeather.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;\n\n  const temperature = document.querySelector('.temperature');\n  temperature.textContent = `${weather.main.temp.toFixed(0)}°${unit}`;\n\n  const description = document.querySelector('.description');\n  description.textContent = `${weather.weather[0].description}`;\n\n  const wind = document.querySelector('.wind');\n  wind.textContent = `${weather.wind.speed} km/h`;\n\n  const humidity = document.querySelector('.humidity');\n  humidity.textContent = `${weather.main.humidity}%`;\n\n  const feelLike = document.querySelector('.feel-like');\n  feelLike.textContent = `${weather.main.feels_like.toFixed(0)}°${unit}`;\n\n  const minMax = document.querySelector('.min-max');\n  minMax.textContent = `${weather.main.temp_min.toFixed(0)}°${unit} / ${weather.main.temp_max.toFixed(0)}°${unit}`;\n};\n\nconst setForecastCard = (forecast, i, dayDescrip, unit) => {\n  const forecastCont = document.querySelector('.forecast');\n  const forecastCard = document.createElement('div');\n  forecastCard.classList.add('forecast-card', 'my-5', 'p-3', 'mx-2');\n  forecastCont.appendChild(forecastCard);\n\n  const forecastDay = document.createElement('div');\n  forecastDay.classList.add('forecast-day');\n  forecastDay.textContent = dayDescrip;\n  forecastCard.appendChild(forecastDay);\n\n  const iconForecast = document.createElement('img');\n  iconForecast.classList.add('icon-forecast');\n  iconForecast.src = `http://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;\n  forecastCard.appendChild(iconForecast);\n\n  const tempForecast = document.createElement('div');\n  tempForecast.classList.add('temp-forecast');\n  tempForecast.textContent = `${forecast.list[i].main.temp.toFixed(0)}°${unit}`;\n  forecastCard.appendChild(tempForecast);\n\n  const minMaxForecast = document.createElement('div');\n  minMaxForecast.classList.add('.min-max-forecast');\n  minMaxForecast.textContent = `${forecast.list[i].main.temp_min.toFixed(0)}°${unit} / ${forecast.list[i].main.temp_max.toFixed(0)}°${unit}`;\n};\n\nconst displayForecast = (forecast, unit) => {\n  for (let i = 0; i < forecast.list.length; i += 1) {\n    if (forecast.list[i].dt_txt === Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setDate\"])().forecastDate) {\n      setForecastCard(forecast, i, Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setDate\"])().dayDescrip(1), unit);\n      setForecastCard(forecast, i + 8, Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setDate\"])().dayDescrip(2), unit);\n      setForecastCard(forecast, i + 16, Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setDate\"])().dayDescrip(3), unit);\n      setForecastCard(forecast, i + 24, Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setDate\"])().dayDescrip(4), unit);\n      setForecastCard(forecast, i + 32, Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setDate\"])().dayDescrip(5), unit);\n    }\n  }\n};\n\nconst displayGift = (giftData) => {\n  const giftContainer = document.querySelector('.gift-container');\n  giftContainer.src = giftData.data.images.original.url;\n};\n\n\n\n//# sourceURL=webpack:///./src/domManipulation.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: setDate, clearElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDate\", function() { return setDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearElement\", function() { return clearElement; });\nconst setDate = () => {\n  const currentDate = new Date();\n\n  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];\n  const dayDescrip = (idx) => days[currentDate.getDay() + idx];\n\n  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  const monthDescrip = months[currentDate.getMonth()];\n\n  const year = currentDate.getFullYear();\n  let month = '';\n  let day = '';\n  if (currentDate.getMonth() < 10) {\n    month = `0${currentDate.getMonth() + 1}`;\n  } else {\n    month = currentDate.getMonth() + 1;\n  }\n  if (currentDate.getDate() < 10) {\n    day = `0${currentDate.getDate()}`;\n  } else {\n    day = currentDate.getDate() + 1;\n  }\n\n  const weatherDate = `${dayDescrip(0)} ${day}, ${monthDescrip} ${year}`;\n  const forecastDate = `${year}-${month}-${day} 09:00:00`;\n\n  return {\n    weatherDate, forecastDate, dayDescrip, monthDescrip,\n  };\n};\n\nconst clearElement = (element) => {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/images/cloudy.jpg":
/*!*******************************!*\
  !*** ./src/images/cloudy.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9e27da8ff28b7242ad09ac24617bf1f5.jpg\");\n\n//# sourceURL=webpack:///./src/images/cloudy.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uiManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiManager */ \"./src/uiManager.js\");\n\n\n\nObject(_uiManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/uiManager.js":
/*!**************************!*\
  !*** ./src/uiManager.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apis_openWeatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis/openWeatherApi */ \"./src/apis/openWeatherApi.js\");\n/* harmony import */ var _apis_giphyApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apis/giphyApi */ \"./src/apis/giphyApi.js\");\n\n\n\nconst uiManager = () => {\n  const searchBar = document.querySelector('.search-bar');\n  const errorMessage = document.querySelector('.error-message');\n\n  let unit = 'C';\n\n  const unitC = document.querySelector('.celcius');\n  const unitF = document.querySelector('.farenheit');\n\n  function setQuery() {\n    if (searchBar.value !== '') {\n      Object(_apis_openWeatherApi__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"])(searchBar.value, unit);\n      Object(_apis_openWeatherApi__WEBPACK_IMPORTED_MODULE_0__[\"getForecast\"])(searchBar.value, unit);\n      Object(_apis_giphyApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      errorMessage.style.visibility = 'hidden';\n    } else {\n      errorMessage.style.visibility = 'visible';\n      errorMessage.textContent = 'Please enter a city name';\n    }\n  }\n\n  unitC.addEventListener('click', () => {\n    unitC.classList.add('selected');\n    unitF.classList.remove('selected');\n    unit = 'C';\n    setQuery();\n  });\n\n  unitF.addEventListener('click', () => {\n    unitF.classList.add('selected');\n    unitC.classList.remove('selected');\n    unit = 'F';\n    setQuery();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uiManager);\n\n//# sourceURL=webpack:///./src/uiManager.js?");

/***/ })

/******/ });