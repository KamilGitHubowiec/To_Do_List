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

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nconst elements = {\r\n    list: document.querySelector('.list'),\r\n    item: document.querySelector('.item'),\r\n    text: document.querySelector('.text'),\r\n    edit: document.querySelector('.edit'),\r\n    delete: document.querySelector('.delete'),\r\n    input: document.querySelector('#add__input'),\r\n    addButton: document.querySelector('#add__button')\r\n};\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\r\n\r\n\r\nconst createItem = () => {\r\n    // Get input value\r\n    const query = Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"getInput\"])();\r\n\r\n    // If there is an input value then render the markup\r\n    if(query) {\r\n        Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"renderItem\"])(query);\r\n        Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"clearInput\"])();\r\n    }\r\n};\r\n\r\n// Add item\r\n_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].addButton.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    createItem();\r\n});\r\n\r\n// Delete item && Edit item\r\n_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].list.addEventListener('click', e => {\r\n    if (e.target.className === 'delete') {\r\n        const li = e.target.parentElement;\r\n        li.parentNode.removeChild(li);\r\n    } else if (e.target.className === 'edit') {\r\n        const li = e.target.parentNode.childNodes[1].innerText;\r\n        console.log(li);\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const input = document.getElementById('add-item__input');\r\n// const list = document.querySelector('#content ul');\r\n\r\n// document.getElementById('add-item__button').addEventListener('click', () => {\r\n//     // Take input value\r\n//     const inputValue = input.value;\r\n\r\n//     // Create element\r\n//     const li = document.createElement('li');\r\n//     const elem = document.createElement('span');\r\n//     const del = document.createElement('button');\r\n\r\n//     // Add content\r\n//     elem.textContent = inputValue;\r\n//     del.textContent = 'Delete';\r\n\r\n//     // Add Class    \r\n//     del.classList.add('delete');\r\n\r\n//     if (inputValue !== '') {\r\n//         // Append to DOM\r\n//         li.appendChild(elem);\r\n//         li.appendChild(del);\r\n//         list.appendChild(li);   \r\n\r\n//         // Clear input field\r\n//         input.value = '';\r\n//     } else { alert('Add something!');}\r\n\r\n//     document.querySelector('.delete').addEventListener('click', () => {\r\n//         list.removeChild(li);\r\n//     });\r\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: getInput, clearInput, renderItem, editItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInput\", function() { return getInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearInput\", function() { return clearInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderItem\", function() { return renderItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editItem\", function() { return editItem; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\r\n\r\n// Get input value\r\nconst getInput = () => _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].input.value;\r\n\r\n// Clear input\r\nconst clearInput = () => {\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].input.value = '';\r\n};\r\n\r\n// Create markup\r\nconst renderItem = (inputValue) => {\r\n    const markup = `\r\n        <li class=\"item\">\r\n            <p class=\"text\">${inputValue}</p>\r\n            <button class=\"edit\">Edit</button>\r\n            <button class=\"delete\">Delete</button>\r\n        </li>\r\n    `;\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].list.insertAdjacentHTML('beforeend', markup);\r\n};\r\n\r\n// Edit item\r\nconst editItem = () => {\r\n    var item = undefined.parentNode;\r\n    console.log('item');\r\n};\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });