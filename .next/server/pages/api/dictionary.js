module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/dictionary.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./backend/extractDictionary.js":
/*!**************************************!*\
  !*** ./backend/extractDictionary.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\"); // process.cwd() instead of __dirname for next.js/webpack\n\n\nconst syllableFilePath = path.join(process.cwd(), '/backend/TextFiles/syllableDictionary.txt');\nconst file = fs.readFileSync(syllableFilePath, \"utf8\");\nconst dictionaryInitialArray = file.split('\\n');\nconst dictionaryArray = dictionaryInitialArray.filter(string => {\n  if (!string.includes('(1)')) {\n    if (!string.includes('(2)')) {\n      if (!string.includes('(3)')) {\n        return string;\n      }\n    }\n  }\n});\n\nconst stringsToObjects = function (arr) {\n  let obj = {};\n\n  for (let i = 0; i < arr.length; i++) {\n    let newKey = arr[i].match(/^[^\\s]+/);\n    obj[newKey] = arr[i].slice(newKey.toString().length + 2);\n  }\n\n  return obj;\n};\n\nconst dictionaryObject = stringsToObjects(dictionaryArray);\nmodule.exports = dictionaryObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrZW5kL2V4dHJhY3REaWN0aW9uYXJ5LmpzPzZiMmIiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsInN5bGxhYmxlRmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGUiLCJyZWFkRmlsZVN5bmMiLCJkaWN0aW9uYXJ5SW5pdGlhbEFycmF5Iiwic3BsaXQiLCJkaWN0aW9uYXJ5QXJyYXkiLCJmaWx0ZXIiLCJzdHJpbmciLCJpbmNsdWRlcyIsInN0cmluZ3NUb09iamVjdHMiLCJhcnIiLCJvYmoiLCJpIiwibGVuZ3RoIiwibmV3S2V5IiwibWF0Y2giLCJzbGljZSIsInRvU3RyaW5nIiwiZGljdGlvbmFyeU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLE1BQU1BLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLElBQUlDLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBRCxDQUFsQixDLENBQ0E7OztBQUNBLE1BQU1FLGdCQUFnQixHQUFHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsMkNBQXpCLENBQXpCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHUCxFQUFFLENBQUNRLFlBQUgsQ0FBZ0JMLGdCQUFoQixFQUFrQyxNQUFsQyxDQUFiO0FBRUEsTUFBTU0sc0JBQXNCLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLElBQVgsQ0FBL0I7QUFFQSxNQUFNQyxlQUFlLEdBQUdGLHNCQUFzQixDQUFDRyxNQUF2QixDQUFnQ0MsTUFBRCxJQUFZO0FBQy9ELE1BQUksQ0FBQ0EsTUFBTSxDQUFDQyxRQUFQLENBQWdCLEtBQWhCLENBQUwsRUFBNkI7QUFDekIsUUFBSSxDQUFDRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0IsS0FBaEIsQ0FBTCxFQUE2QjtBQUN6QixVQUFJLENBQUNELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixLQUFoQixDQUFMLEVBQTZCO0FBQ3pCLGVBQU9ELE1BQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSixDQVJ1QixDQUF4Qjs7QUFVQSxNQUFNRSxnQkFBZ0IsR0FBRyxVQUFVQyxHQUFWLEVBQWU7QUFDcEMsTUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFHLENBQUNHLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFFBQUlFLE1BQU0sR0FBR0osR0FBRyxDQUFDRSxDQUFELENBQUgsQ0FBT0csS0FBUCxDQUFhLFNBQWIsQ0FBYjtBQUNBSixPQUFHLENBQUNHLE1BQUQsQ0FBSCxHQUFjSixHQUFHLENBQUNFLENBQUQsQ0FBSCxDQUFPSSxLQUFQLENBQWFGLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQkosTUFBbEIsR0FBMkIsQ0FBeEMsQ0FBZDtBQUNIOztBQUNELFNBQU9GLEdBQVA7QUFDSCxDQVBEOztBQVNBLE1BQU1PLGdCQUFnQixHQUFHVCxnQkFBZ0IsQ0FBQ0osZUFBRCxDQUF6QztBQUVBYyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLGdCQUFqQiIsImZpbGUiOiIuL2JhY2tlbmQvZXh0cmFjdERpY3Rpb25hcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuLy8gcHJvY2Vzcy5jd2QoKSBpbnN0ZWFkIG9mIF9fZGlybmFtZSBmb3IgbmV4dC5qcy93ZWJwYWNrXG5jb25zdCBzeWxsYWJsZUZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcvYmFja2VuZC9UZXh0RmlsZXMvc3lsbGFibGVEaWN0aW9uYXJ5LnR4dCcpO1xuY29uc3QgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhzeWxsYWJsZUZpbGVQYXRoLCBcInV0ZjhcIik7XG5cbmNvbnN0IGRpY3Rpb25hcnlJbml0aWFsQXJyYXkgPSBmaWxlLnNwbGl0KCdcXG4nKTtcblxuY29uc3QgZGljdGlvbmFyeUFycmF5ID0gZGljdGlvbmFyeUluaXRpYWxBcnJheS5maWx0ZXIoIChzdHJpbmcpID0+IHtcbiAgICBpZiAoIXN0cmluZy5pbmNsdWRlcygnKDEpJykpIHtcbiAgICAgICAgaWYgKCFzdHJpbmcuaW5jbHVkZXMoJygyKScpKSB7XG4gICAgICAgICAgICBpZiAoIXN0cmluZy5pbmNsdWRlcygnKDMpJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuY29uc3Qgc3RyaW5nc1RvT2JqZWN0cyA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld0tleSA9IGFycltpXS5tYXRjaCgvXlteXFxzXSsvKTtcbiAgICAgICAgb2JqW25ld0tleV0gPSBhcnJbaV0uc2xpY2UobmV3S2V5LnRvU3RyaW5nKCkubGVuZ3RoICsgMik7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmNvbnN0IGRpY3Rpb25hcnlPYmplY3QgPSBzdHJpbmdzVG9PYmplY3RzKGRpY3Rpb25hcnlBcnJheSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGljdGlvbmFyeU9iamVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./backend/extractDictionary.js\n");

/***/ }),

/***/ "./pages/api/dictionary.js":
/*!*********************************!*\
  !*** ./pages/api/dictionary.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDictionaryObject; });\n/* harmony import */ var _backend_extractDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../backend/extractDictionary */ \"./backend/extractDictionary.js\");\n/* harmony import */ var _backend_extractDictionary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backend_extractDictionary__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nfunction getDictionaryObject(req, res) {\n  res.status(200).send(_backend_extractDictionary__WEBPACK_IMPORTED_MODULE_0___default.a);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZGljdGlvbmFyeS5qcz9hMDEzIl0sIm5hbWVzIjpbImdldERpY3Rpb25hcnlPYmplY3QiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJzZW5kIiwic3lsbGFibGVEaWN0aW9uYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBRWUsU0FBU0EsbUJBQVQsQ0FBNkJDLEdBQTdCLEVBQWtDQyxHQUFsQyxFQUF1QztBQUNsREEsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLGlFQUFyQjtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2RpY3Rpb25hcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IHN5bGxhYmxlRGljdGlvbmFyeSBmcm9tICcuLi8uLi9iYWNrZW5kL2V4dHJhY3REaWN0aW9uYXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREaWN0aW9uYXJ5T2JqZWN0KHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoc3lsbGFibGVEaWN0aW9uYXJ5KTtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/dictionary.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });