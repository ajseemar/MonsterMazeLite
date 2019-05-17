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

eval("const Maze = __webpack_require__(/*! ./maze/maze */ \"./src/maze/maze.js\");\n\nclass Game {\n    constructor (size) {\n        this.canvas = document.getElementById('canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.width = this.canvas.width;\n        this.height = this.canvas.height;\n        this.initialTime = Date.now();\n\n        this.maze = new Maze(5, this.width, this.height);\n    }\n\n    update () {\n\n    }\n\n    render () {\n        // debugger;\n        // this.ctx.fillStyle = \"#2a6e09\";\n        // this.ctx.clearRect(0, 0, this.width, this.height);\n        this.maze.render(this.ctx);\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

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
/***/ (function(module, exports, __webpack_require__) {

eval("const index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Cell {\n    constructor (row, col, size) {\n        this.row = col;\n        this.col = row;\n        this.size = size;\n        this.visited = false;\n        this.walls = {\n            \"north\": {\n                p1: {\n                    x: this.row * this.size,\n                    y: this.col * this.size\n                },\n                p2: {\n                    x: (this.row * this.size) + this.size,\n                    y: this.col * this.size\n                }\n            },\n            \"east\": {\n                p1: {\n                    x: (this.row * this.size) + this.size,\n                    y: this.col * this.size\n                },\n                p2: {\n                    x: (this.row * this.size) + this.size,\n                    y: (this.col * this.size) + this.size\n                }\n            },\n            \"south\": {\n                p1: {\n                    x: (this.row * this.size),\n                    y: (this.col * this.size) + this.size\n                },\n                p2: {\n                    x: (this.row * this.size) + this.size,\n                    y: (this.col * this.size) + this.size \n                }\n            },\n            \"west\": {\n                p1: {\n                    x: this.row * this.size,\n                    y: this.col * this.size\n                },\n                p2: {\n                    x: this.row * this.size,\n                    y: (this.col * this.size) + this.size\n                }\n            }\n        }\n    }\n\n    findNeighbor (cells, size) {\n        const neighbors = [];\n        if (cells[index(this.row, this.col - 1, size)]) {\n            // debugger;\n            if (!this.visited) {\n                neighbors.push({ 'north': cells[index(this.row, this.col - 1, size)] });\n            }\n        }\n        if (cells[index(this.row + 1, this.col, size)]) {\n            if (!this.visited) {\n                neighbors.push({ 'east': cells[index(this.row + 1, this.col, size)] });\n            }\n        }\n        if (cells[index(this.row, this.col + 1, size)]) {\n            if (!this.visited) {\n                neighbors.push({ 'south': cells[index(this.row, this.col + 1, size)] });\n            }\n        }\n        if (cells[index(this.row - 1, this.col, size)]) {\n            if (!this.visited) {\n                neighbors.push({ 'west': cells[index(this.row - 1, this.col, size)] });\n            }\n        }\n\n        if (neighbors.length > 0) {\n            // debugger\n            return neighbors[Math.floor(Math.random() * neighbors.length)];\n        } else return null;\n    }\n}\n\nmodule.exports = Cell;\n\n//# sourceURL=webpack:///./src/maze/cell.js?");

/***/ }),

/***/ "./src/maze/grid.js":
/*!**************************!*\
  !*** ./src/maze/grid.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Cell = __webpack_require__(/*! ./cell */ \"./src/maze/cell.js\");\n\nconst index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Grid {\n    constructor (size, w, h) {\n        this.cells = new Array(size * size);\n        this.size = {\n            w: w,\n            h: h\n        };\n        this.cellCount = size;\n        \n        // debugger\n        this.populateGrid();\n    }\n\n    populateGrid () {\n        for (let i = 0; i < this.cellCount; i++) {\n            for(let j = 0; j < this.cellCount; j++) {\n                // debugger\n                this.cells[index(j, i, this.cellCount)] = new Cell(j, i, this.size.w / this.cellCount);\n            }\n        }\n        console.log(this.cells);\n    }\n\n    render (ctx) {\n        for (let j = 0; j < this.cellCount; j++) {\n            for (let i = 0; i < this.cellCount; i++) {\n                let cell = this.cells[index(i, j, this.cellCount)];\n                ctx.fillSyle = \"#53A1F3\";\n                // debugger\n                Object.values(cell.walls).forEach(({ p1, p2 }) => {\n                    ctx.moveTo(p1.x, p1.y);\n                    ctx.lineTo(p2.x, p2.y);\n                    ctx.stroke();\n                });\n                if (cell.visited) {\n                    debugger;\n                    ctx.fillStyle = \"#FF0000\";\n                    ctx.fillRect(i * cell.size, j * cell.size, cell.size, cell.size);\n                }\n            }\n        }\n    }\n}\n\nmodule.exports = Grid;\n\n//# sourceURL=webpack:///./src/maze/grid.js?");

/***/ }),

/***/ "./src/maze/maze.js":
/*!**************************!*\
  !*** ./src/maze/maze.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Grid = __webpack_require__(/*! ./grid */ \"./src/maze/grid.js\");\nconst index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Maze {\n    constructor (size, width, height) {\n        this.cellCount = size;\n        this.width = width;\n        this.height = height;\n        this.grid = new Grid(this.cellCount, this.width, this.height);\n        // // debugger\n        this.generateMaze();\n    }\n\n\n    generateMaze () {\n        let currentCell = this.grid.cells[0];\n        const stack = [];\n        stack.push(currentCell);\n        while (stack.length !== 0) {\n            // debugger\n            let neighbor = currentCell.findNeighbor(this.cells, this.cellCount);\n            if (neighbor) console.log('neighbor found');\n        }\n    }\n\n    render (ctx) {\n        this.grid.render(ctx);\n    }\n}\n\nmodule.exports = Maze;\n\n//# sourceURL=webpack:///./src/maze/maze.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const lerp = (a, b, n) => {\n    return (1 - n) * a + n * b;\n};\n\nconst index = (i, j, cols) => i + j * cols\n\nmodule.exports = lerp;\nmodule.exports = index;\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });