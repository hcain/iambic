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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/author.js");
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

/***/ "./backend/extractText.js":
/*!********************************!*\
  !*** ./backend/extractText.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst path = __webpack_require__(/*! path */ \"path\"); // process.cwd() instead of __dirname for next.js/webpack\n\n\nconst authorFilePath = path.join(process.cwd(), '/backend/TextFiles/poe.txt'); // // this code was used to convert pdf to text file:\n// // might need process.cwd() instead of __dirname now with next.js/webpack\n// var filePath = path.join(__dirname, 'TextFiles/poe.pdf')\n// var extract = require('pdf-text-extract')\n// extract(filePath, { splitPages: false }, function (err, text) {\n//   if (err) {\n//     console.dir(err)\n//     return\n//   }\n//   const editedText = text.join('\\n', ' ')\n//   fs.writeFile('TextFiles/poe.txt', editedText, function (err) {\n//     if (err) return console.log(err);})\n// })\n//convert text into word bank\n\nconst file = fs.readFileSync(authorFilePath, 'utf8');\nconst authorArray = file.replace(/\\s+/g, ' ').split(' '); //convert into marchov chain\n\nconst marchov = function (arr) {\n  let obj = {};\n\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] && arr[i + 1]) {\n      // remove non-letters\n      // future improvements: leave hyphens\n      let word = arr[i].replace(/[\\W\\d_]+/g, '');\n      let nextWord = arr[i + 1].replace(/[\\W\\d_]+/g, ''); // fix case for non-proper nouns\n      // future improvements: add more proper nouns\n\n      if (word !== 'I' && word !== 'God') {\n        word = word.toLowerCase();\n      }\n\n      if (nextWord !== 'I' && nextWord !== 'God') {\n        nextWord = nextWord.toLowerCase();\n      } // add words(s) to Marchov chain\n\n\n      if (obj.hasOwnProperty(word)) {\n        obj[word].push(nextWord); // console.log(word, nextWord)\n      } else {\n        obj[word] = [nextWord];\n      }\n    }\n  }\n\n  return obj;\n};\n\nconst authorMarchovObject = marchov(authorArray);\nmodule.exports = authorMarchovObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrZW5kL2V4dHJhY3RUZXh0LmpzP2I1ZmIiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsImF1dGhvckZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlIiwicmVhZEZpbGVTeW5jIiwiYXV0aG9yQXJyYXkiLCJyZXBsYWNlIiwic3BsaXQiLCJtYXJjaG92IiwiYXJyIiwib2JqIiwiaSIsImxlbmd0aCIsIndvcmQiLCJuZXh0V29yZCIsInRvTG93ZXJDYXNlIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwiYXV0aG9yTWFyY2hvdk9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLE1BQU1BLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQixDLENBQ0E7OztBQUNBLE1BQU1FLGNBQWMsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLDRCQUF6QixDQUF2QixDLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFDQSxNQUFNQyxJQUFJLEdBQUdQLEVBQUUsQ0FBQ1EsWUFBSCxDQUFnQkwsY0FBaEIsRUFBZ0MsTUFBaEMsQ0FBYjtBQUNBLE1BQU1NLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWEsTUFBYixFQUFxQixHQUFyQixFQUEwQkMsS0FBMUIsQ0FBZ0MsR0FBaEMsQ0FBcEIsQyxDQUdBOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxVQUFVQyxHQUFWLEVBQWU7QUFDM0IsTUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFHLENBQUNHLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFFBQUlGLEdBQUcsQ0FBQ0UsQ0FBRCxDQUFILElBQVVGLEdBQUcsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBakIsRUFBMEI7QUFFdEI7QUFDQTtBQUNBLFVBQUlFLElBQUksR0FBR0osR0FBRyxDQUFDRSxDQUFELENBQUgsQ0FBT0wsT0FBUCxDQUFlLFdBQWYsRUFBNEIsRUFBNUIsQ0FBWDtBQUNBLFVBQUlRLFFBQVEsR0FBSUwsR0FBRyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFKLENBQWFMLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0MsRUFBbEMsQ0FBZixDQUxzQixDQU90QjtBQUNBOztBQUNBLFVBQUlPLElBQUksS0FBSyxHQUFULElBQWdCQSxJQUFJLEtBQUssS0FBN0IsRUFBb0M7QUFDaENBLFlBQUksR0FBR0EsSUFBSSxDQUFDRSxXQUFMLEVBQVA7QUFDSDs7QUFDRCxVQUFJRCxRQUFRLEtBQUssR0FBYixJQUFvQkEsUUFBUSxLQUFLLEtBQXJDLEVBQTRDO0FBQ3hDQSxnQkFBUSxHQUFHQSxRQUFRLENBQUNDLFdBQVQsRUFBWDtBQUNILE9BZHFCLENBZ0J0Qjs7O0FBQ0EsVUFBSUwsR0FBRyxDQUFDTSxjQUFKLENBQW1CSCxJQUFuQixDQUFKLEVBQThCO0FBQzFCSCxXQUFHLENBQUNHLElBQUQsQ0FBSCxDQUFVSSxJQUFWLENBQWVILFFBQWYsRUFEMEIsQ0FFMUI7QUFDSCxPQUhELE1BR087QUFDSEosV0FBRyxDQUFDRyxJQUFELENBQUgsR0FBWSxDQUFDQyxRQUFELENBQVo7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsU0FBT0osR0FBUDtBQUNILENBN0JEOztBQThCQSxNQUFNUSxtQkFBbUIsR0FBR1YsT0FBTyxDQUFDSCxXQUFELENBQW5DO0FBRUFjLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsbUJBQWpCIiwiZmlsZSI6Ii4vYmFja2VuZC9leHRyYWN0VGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbi8vIHByb2Nlc3MuY3dkKCkgaW5zdGVhZCBvZiBfX2Rpcm5hbWUgZm9yIG5leHQuanMvd2VicGFja1xuY29uc3QgYXV0aG9yRmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy9iYWNrZW5kL1RleHRGaWxlcy9wb2UudHh0Jyk7XG5cblxuLy8gLy8gdGhpcyBjb2RlIHdhcyB1c2VkIHRvIGNvbnZlcnQgcGRmIHRvIHRleHQgZmlsZTpcbi8vIC8vIG1pZ2h0IG5lZWQgcHJvY2Vzcy5jd2QoKSBpbnN0ZWFkIG9mIF9fZGlybmFtZSBub3cgd2l0aCBuZXh0LmpzL3dlYnBhY2tcbi8vIHZhciBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdUZXh0RmlsZXMvcG9lLnBkZicpXG4vLyB2YXIgZXh0cmFjdCA9IHJlcXVpcmUoJ3BkZi10ZXh0LWV4dHJhY3QnKVxuLy8gZXh0cmFjdChmaWxlUGF0aCwgeyBzcGxpdFBhZ2VzOiBmYWxzZSB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0KSB7XG4vLyAgIGlmIChlcnIpIHtcbi8vICAgICBjb25zb2xlLmRpcihlcnIpXG4vLyAgICAgcmV0dXJuXG4vLyAgIH1cbi8vICAgY29uc3QgZWRpdGVkVGV4dCA9IHRleHQuam9pbignXFxuJywgJyAnKVxuLy8gICBmcy53cml0ZUZpbGUoJ1RleHRGaWxlcy9wb2UudHh0JywgZWRpdGVkVGV4dCwgZnVuY3Rpb24gKGVycikge1xuLy8gICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO30pXG4vLyB9KVxuXG5cbi8vY29udmVydCB0ZXh0IGludG8gd29yZCBiYW5rXG5jb25zdCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGF1dGhvckZpbGVQYXRoLCAndXRmOCcpO1xuY29uc3QgYXV0aG9yQXJyYXkgPSBmaWxlLnJlcGxhY2UoL1xccysvZywgJyAnKS5zcGxpdCgnICcpO1xuXG5cbi8vY29udmVydCBpbnRvIG1hcmNob3YgY2hhaW5cbmNvbnN0IG1hcmNob3YgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0gJiYgYXJyW2kgKyAxXSkge1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgbm9uLWxldHRlcnNcbiAgICAgICAgICAgIC8vIGZ1dHVyZSBpbXByb3ZlbWVudHM6IGxlYXZlIGh5cGhlbnNcbiAgICAgICAgICAgIGxldCB3b3JkID0gYXJyW2ldLnJlcGxhY2UoL1tcXFdcXGRfXSsvZywgJycpO1xuICAgICAgICAgICAgbGV0IG5leHRXb3JkID0gKGFycltpICsgMV0pLnJlcGxhY2UoL1tcXFdcXGRfXSsvZywgJycpO1xuXG4gICAgICAgICAgICAvLyBmaXggY2FzZSBmb3Igbm9uLXByb3BlciBub3Vuc1xuICAgICAgICAgICAgLy8gZnV0dXJlIGltcHJvdmVtZW50czogYWRkIG1vcmUgcHJvcGVyIG5vdW5zXG4gICAgICAgICAgICBpZiAod29yZCAhPT0gJ0knICYmIHdvcmQgIT09ICdHb2QnKSB7XG4gICAgICAgICAgICAgICAgd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0V29yZCAhPT0gJ0knICYmIG5leHRXb3JkICE9PSAnR29kJykge1xuICAgICAgICAgICAgICAgIG5leHRXb3JkID0gbmV4dFdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHdvcmRzKHMpIHRvIE1hcmNob3YgY2hhaW5cbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkod29yZCkpIHtcbiAgICAgICAgICAgICAgICBvYmpbd29yZF0ucHVzaChuZXh0V29yZCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod29yZCwgbmV4dFdvcmQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialt3b3JkXSA9IFtuZXh0V29yZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmNvbnN0IGF1dGhvck1hcmNob3ZPYmplY3QgPSBtYXJjaG92KGF1dGhvckFycmF5KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdXRob3JNYXJjaG92T2JqZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./backend/extractText.js\n");

/***/ }),

/***/ "./backend/matchAuthorAndDictionary.js":
/*!*********************************************!*\
  !*** ./backend/matchAuthorAndDictionary.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst dictionaryObject = __webpack_require__(/*! ./extractDictionary.js */ \"./backend/extractDictionary.js\");\n\nconst authorMarchovObject = __webpack_require__(/*! ./extractText.js */ \"./backend/extractText.js\"); // const removePunctuation = (word) => {\n//     return word.replace(/[\\W\\d_]+/g, '')\n// }\n\n\nconst checkIfInDictionary = word => {\n  // console.log(dictionaryObject.hasOwnProperty(word.toUpperCase()))\n  return dictionaryObject.hasOwnProperty(word.toUpperCase());\n};\n\nconst arrayOfAuthorWords = Object.keys(authorMarchovObject);\nconst notInDictionary = [];\nconst authorInDictionary = {};\n\nfor (let i = 0; i < arrayOfAuthorWords.length; i++) {\n  let currentWord = arrayOfAuthorWords[i];\n\n  if (checkIfInDictionary(currentWord)) {\n    authorInDictionary[currentWord] = [];\n\n    for (let j = 0; j < authorMarchovObject[currentWord].length; j++) {\n      const nextWord = authorMarchovObject[currentWord][j]; // console.log(currentWord, nextWord, checkIfInDictionary(nextWord))\n\n      if (checkIfInDictionary(nextWord)) {\n        // console.log(authorInDictionary[currentWord])\n        // if (authorInDictionary.hasOwnProperty(currentWord)) {\n        authorInDictionary[currentWord].push(nextWord); // }\n      }\n    } // if (authorInDictionary[currentWord].length === 0) {\n    //     delete authorInDictionary[currentWord]\n    // }\n\n  } else {\n    notInDictionary.push(currentWord);\n  }\n} // future improvements:\n// use syllable rules to append dictionaryObject with words from notInDictionary\n// use authorMarchovObject\n//include punctuation\n\n\nmodule.exports = authorInDictionary;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYXRjaEF1dGhvckFuZERpY3Rpb25hcnkuanM/ZDAwYSJdLCJuYW1lcyI6WyJkaWN0aW9uYXJ5T2JqZWN0IiwicmVxdWlyZSIsImF1dGhvck1hcmNob3ZPYmplY3QiLCJjaGVja0lmSW5EaWN0aW9uYXJ5Iiwid29yZCIsImhhc093blByb3BlcnR5IiwidG9VcHBlckNhc2UiLCJhcnJheU9mQXV0aG9yV29yZHMiLCJPYmplY3QiLCJrZXlzIiwibm90SW5EaWN0aW9uYXJ5IiwiYXV0aG9ySW5EaWN0aW9uYXJ5IiwiaSIsImxlbmd0aCIsImN1cnJlbnRXb3JkIiwiaiIsIm5leHRXb3JkIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLE1BQU1BLGdCQUFnQixHQUFHQyxtQkFBTyxDQUFDLDhEQUFELENBQWhDOztBQUNBLE1BQU1DLG1CQUFtQixHQUFHRCxtQkFBTyxDQUFDLGtEQUFELENBQW5DLEMsQ0FFQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1FLG1CQUFtQixHQUFJQyxJQUFELElBQVU7QUFDbEM7QUFDQSxTQUFPSixnQkFBZ0IsQ0FBQ0ssY0FBakIsQ0FBZ0NELElBQUksQ0FBQ0UsV0FBTCxFQUFoQyxDQUFQO0FBQ0gsQ0FIRDs7QUFLQSxNQUFNQyxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLG1CQUFaLENBQTNCO0FBQ0ksTUFBTVEsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsRUFBM0I7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxrQkFBa0IsQ0FBQ00sTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsTUFBSUUsV0FBVyxHQUFHUCxrQkFBa0IsQ0FBQ0ssQ0FBRCxDQUFwQzs7QUFFQSxNQUFJVCxtQkFBbUIsQ0FBQ1csV0FBRCxDQUF2QixFQUFzQztBQUNqQ0gsc0JBQWtCLENBQUNHLFdBQUQsQ0FBbEIsR0FBa0MsRUFBbEM7O0FBQ0QsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFFYixtQkFBbUIsQ0FBQ1ksV0FBRCxDQUFuQixDQUFpQ0QsTUFBcEQsRUFBNERFLENBQUMsRUFBN0QsRUFBaUU7QUFDN0QsWUFBTUMsUUFBUSxHQUFHZCxtQkFBbUIsQ0FBQ1ksV0FBRCxDQUFuQixDQUFpQ0MsQ0FBakMsQ0FBakIsQ0FENkQsQ0FFN0Q7O0FBRUEsVUFBSVosbUJBQW1CLENBQUNhLFFBQUQsQ0FBdkIsRUFBbUM7QUFDL0I7QUFDQTtBQUNJTCwwQkFBa0IsQ0FBQ0csV0FBRCxDQUFsQixDQUFnQ0csSUFBaEMsQ0FBcUNELFFBQXJDLEVBSDJCLENBSS9CO0FBQ0g7QUFDSixLQVppQyxDQWFsQztBQUNBO0FBQ0E7O0FBQ0gsR0FoQkQsTUFnQk87QUFDSE4sbUJBQWUsQ0FBQ08sSUFBaEIsQ0FBcUJILFdBQXJCO0FBQ0M7QUFDUixDLENBRUQ7QUFDQTtBQUNBO0FBRUE7OztBQUVKSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLGtCQUFqQiIsImZpbGUiOiIuL2JhY2tlbmQvbWF0Y2hBdXRob3JBbmREaWN0aW9uYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkaWN0aW9uYXJ5T2JqZWN0ID0gcmVxdWlyZSgnLi9leHRyYWN0RGljdGlvbmFyeS5qcycpO1xuY29uc3QgYXV0aG9yTWFyY2hvdk9iamVjdCA9IHJlcXVpcmUoJy4vZXh0cmFjdFRleHQuanMnKTtcblxuLy8gY29uc3QgcmVtb3ZlUHVuY3R1YXRpb24gPSAod29yZCkgPT4ge1xuLy8gICAgIHJldHVybiB3b3JkLnJlcGxhY2UoL1tcXFdcXGRfXSsvZywgJycpXG4vLyB9XG5cbmNvbnN0IGNoZWNrSWZJbkRpY3Rpb25hcnkgPSAod29yZCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGRpY3Rpb25hcnlPYmplY3QuaGFzT3duUHJvcGVydHkod29yZC50b1VwcGVyQ2FzZSgpKSlcbiAgICByZXR1cm4gZGljdGlvbmFyeU9iamVjdC5oYXNPd25Qcm9wZXJ0eSh3b3JkLnRvVXBwZXJDYXNlKCkpXG59XG5cbmNvbnN0IGFycmF5T2ZBdXRob3JXb3JkcyA9IE9iamVjdC5rZXlzKGF1dGhvck1hcmNob3ZPYmplY3QpXG4gICAgY29uc3Qgbm90SW5EaWN0aW9uYXJ5ID0gW11cbiAgICBjb25zdCBhdXRob3JJbkRpY3Rpb25hcnkgPSB7fVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZkF1dGhvcldvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IGFycmF5T2ZBdXRob3JXb3Jkc1tpXVxuXG4gICAgICAgIGlmIChjaGVja0lmSW5EaWN0aW9uYXJ5KGN1cnJlbnRXb3JkKSkge1xuICAgICAgICAgICAgIGF1dGhvckluRGljdGlvbmFyeVtjdXJyZW50V29yZF0gPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8IGF1dGhvck1hcmNob3ZPYmplY3RbY3VycmVudFdvcmRdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFdvcmQgPSBhdXRob3JNYXJjaG92T2JqZWN0W2N1cnJlbnRXb3JkXVtqXVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRXb3JkLCBuZXh0V29yZCwgY2hlY2tJZkluRGljdGlvbmFyeShuZXh0V29yZCkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrSWZJbkRpY3Rpb25hcnkobmV4dFdvcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dGhvckluRGljdGlvbmFyeVtjdXJyZW50V29yZF0pXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhdXRob3JJbkRpY3Rpb25hcnkuaGFzT3duUHJvcGVydHkoY3VycmVudFdvcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JJbkRpY3Rpb25hcnlbY3VycmVudFdvcmRdLnB1c2gobmV4dFdvcmQpXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoYXV0aG9ySW5EaWN0aW9uYXJ5W2N1cnJlbnRXb3JkXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vICAgICBkZWxldGUgYXV0aG9ySW5EaWN0aW9uYXJ5W2N1cnJlbnRXb3JkXVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm90SW5EaWN0aW9uYXJ5LnB1c2goY3VycmVudFdvcmQpXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZnV0dXJlIGltcHJvdmVtZW50czpcbiAgICAvLyB1c2Ugc3lsbGFibGUgcnVsZXMgdG8gYXBwZW5kIGRpY3Rpb25hcnlPYmplY3Qgd2l0aCB3b3JkcyBmcm9tIG5vdEluRGljdGlvbmFyeVxuICAgIC8vIHVzZSBhdXRob3JNYXJjaG92T2JqZWN0XG5cbiAgICAvL2luY2x1ZGUgcHVuY3R1YXRpb25cblxubW9kdWxlLmV4cG9ydHMgPSBhdXRob3JJbkRpY3Rpb25hcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./backend/matchAuthorAndDictionary.js\n");

/***/ }),

/***/ "./pages/api/author.js":
/*!*****************************!*\
  !*** ./pages/api/author.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAuthorObject; });\n/* harmony import */ var _backend_matchAuthorAndDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../backend/matchAuthorAndDictionary */ \"./backend/matchAuthorAndDictionary.js\");\n/* harmony import */ var _backend_matchAuthorAndDictionary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backend_matchAuthorAndDictionary__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nfunction getAuthorObject(req, res) {\n  res.status(200).send(_backend_matchAuthorAndDictionary__WEBPACK_IMPORTED_MODULE_0___default.a);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aG9yLmpzPzk2NzgiXSwibmFtZXMiOlsiZ2V0QXV0aG9yT2JqZWN0IiwicmVxIiwicmVzIiwic3RhdHVzIiwic2VuZCIsImF1dGhvckluRGljdGlvbmFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQztBQUM5Q0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLHdFQUFyQjtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGhvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgYXV0aG9ySW5EaWN0aW9uYXJ5IGZyb20gJy4uLy4uL2JhY2tlbmQvbWF0Y2hBdXRob3JBbmREaWN0aW9uYXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBdXRob3JPYmplY3QocmVxLCByZXMpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChhdXRob3JJbkRpY3Rpb25hcnkpO1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/author.js\n");

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