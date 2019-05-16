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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Grid = __webpack_require__(/*! ./maze/grid */ \"./src/maze/grid.js\");\n\nclass Game {\n    constructor (size) {\n        // debugger;\n        this.canvas = document.getElementById('canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.width = this.canvas.width;\n        this.height = this.canvas.height;\n        this.grid = new Grid(size, this.width, this.height);\n        this.initialTime = Date.now();\n        // this.start();\n    }\n\n    update () {\n\n    }\n\n    render () {\n        // debugger;\n        // this.ctx.fillStyle = \"#2a6e09\";\n        // this.ctx.clearRect(0, 0, this.width, this.height);\n        this.grid.render(this.ctx);\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const game = new Game(10);\n    const start = () => {\n        let time = Date.now();\n        let dt = (time - game.initialTime / 1000);\n        game.update(dt);\n        game.render();\n        game.initialTime = time;\n        requestAnimationFrame(start);\n    }\n    start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/maze/cell.js":
/*!**************************!*\
  !*** ./src/maze/cell.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Cell {\n    constructor (row, col, size) {\n        this.row = row;\n        this.col = col;\n        this.size = size;\n        this.walls = {\n            \"north\": {\n                p1: {\n                    x: this.row * this.size,\n                    y: this.col * this.size\n                },\n                p2: {\n                    x: (this.row * this.size) + this.size,\n                    y: this.col * this.size\n                }\n            },\n            \"east\": {\n                p1: {\n                    x: (this.row * this.size) + this.size,\n                    y: this.col * this.size\n                },\n                p2: {\n                    x: (this.row * this.size) + this.size,\n                    y: (this.col * this.size) + this.size\n                }\n            },\n            \"south\": {\n                p1: {\n                    x: (this.row * this.size),\n                    y: (this.col * this.size) + this.size\n                },\n                p2: {\n                    x: (this.row * this.size) + this.size,\n                    y: (this.col * this.size) + this.size \n                }\n            },\n            \"west\": {\n                p1: {\n                    x: this.row * this.size,\n                    y: this.col * this.size\n                },\n                p2: {\n                    x: this.row * this.size,\n                    y: (this.col * this.size) + this.size\n                }\n            }\n        }\n    }\n}\n\nmodule.exports = Cell;\n\n//# sourceURL=webpack:///./src/maze/cell.js?");

/***/ }),

/***/ "./src/maze/grid.js":
/*!**************************!*\
  !*** ./src/maze/grid.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Cell = __webpack_require__(/*! ./cell */ \"./src/maze/cell.js\");\n\nclass Grid {\n    constructor (size, w, h) {\n        this.cells = new Array(size);\n        this.size = {\n            w: w,\n            h: h\n        };\n        this.cellCount = size;\n        \n        for (let i = 0; i < size; i++) {\n            this.cells[i] = new Array(10);\n        }\n        this.populateGrid();\n\n    }\n\n    populateGrid () {\n        for (let i = 0; i < this.cells.length; i++) {\n            for(let j = 0; j < this.cells.length; j++) {\n                this.cells[i][j] = new Cell(i, j, this.size.w / this.cellCount);\n            }\n        }\n        console.log(this.cells);\n    }\n\n    render (ctx) {\n        for (let i = 0; i < this.cells.length; i++) {\n            for (let j = 0; j < this.cells.length; j++) {\n                ctx.fillSyle = \"#53A1F3\";\n                Object.values(this.cells[i][j].walls).forEach(({ p1, p2 }) => {\n                    ctx.moveTo(p1.x, p1.y);\n                    ctx.lineTo(p2.x, p2.y);\n                    ctx.stroke();\n                });\n\n            }\n        }\n    }\n}\n\nmodule.exports = Grid;\n\n//# sourceURL=webpack:///./src/maze/grid.js?");

/***/ })

/******/ });