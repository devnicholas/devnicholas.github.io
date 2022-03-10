/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById('openMenu').addEventListener('click', function() {\r\n    openMenu();\r\n})\r\ndocument.getElementById('escapeZone').addEventListener('click', function() {\r\n    closeMenu();\r\n})\r\nconst menuItems = document.querySelectorAll('.mobile-menu-item');\r\nmenuItems.forEach(item => {\r\n    item.addEventListener('click', function() {\r\n        closeMenu();\r\n    })\r\n})\r\n\r\nfunction openMenu() {\r\n    document.getElementById('mobileMenu').animate([\r\n        { right: '-100%' },\r\n        { right: '0' }\r\n    ], {\r\n        duration: 200,\r\n        fill: 'forwards'\r\n    });\r\n}\r\nfunction closeMenu() {\r\n    document.getElementById('mobileMenu').animate([\r\n        { right: '0' },\r\n        { right: '-100%' }\r\n    ], {\r\n        duration: 200,\r\n        fill: 'forwards'\r\n    });\r\n}\n\n//# sourceURL=webpack://devnicholas.github.io/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;