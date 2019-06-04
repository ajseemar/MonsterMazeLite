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

/***/ "./src/entities/entity.js":
/*!********************************!*\
  !*** ./src/entities/entity.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Entity {\n    constructor (size) {\n        this.position = {\n            x: 0,\n            y: 0\n        }\n\n        this.size = size;\n    }\n}\n\nmodule.exports = Entity;\n\n//# sourceURL=webpack:///./src/entities/entity.js?");

/***/ }),

/***/ "./src/entities/player.js":
/*!********************************!*\
  !*** ./src/entities/player.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Entity = __webpack_require__(/*! ./entity */ \"./src/entities/entity.js\");\nclass Player extends Entity {\n    constructor (size) {\n        super(size);\n\n        this.position = {\n            x: size / 2,\n            y: size / 2\n        };\n        this.size = size / 6;\n    }\n\n    render (ctx) {\n        ctx.fillStyle = '#72af66';\n        ctx.beginPath();\n        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.fill();\n    }\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/entities/player.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Maze = __webpack_require__(/*! ./maze/maze */ \"./src/maze/maze.js\");\nconst Player = __webpack_require__(/*! ./entities/player */ \"./src/entities/player.js\");\n\nclass Game {\n    constructor (size) {\n        this.canvas = document.getElementById('canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.width = this.canvas.width;\n        this.height = this.canvas.height;\n        this.initialTime = Date.now();\n\n        this.maze = new Maze(size, this.width, this.height, this.ctx);\n        this.player = new Player(this.width / size);\n    }\n\n    update () {\n\n    }\n\n    render () {\n        // debugger;\n        // this.ctx.fillStyle = \"#2a6e09\";\n        // this.ctx.clearRect(0, 0, this.width, this.height);\n        // this.ctx.clearRect(0, 0, this.width, this.height);\n        this.player.render(this.ctx);\n        this.maze.render(this.ctx);\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const game = new Game(25);\n    const start = () => {\n        let time = Date.now();\n        let dt = (time - game.initialTime / 1000);\n        game.update(dt);\n        game.render();\n        game.initialTime = time;\n        requestAnimationFrame(start);\n    }\n    start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/maze/cell.js":
/*!**************************!*\
  !*** ./src/maze/cell.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nconst Node = __webpack_require__(/*! ../maze_solver/node */ \"./src/maze_solver/node.js\");\n\nclass Cell {\n    constructor (row, col, size) {\n        this.row = row;\n        this.col = col;\n        this.size = size;\n        this.visited = false;\n        this.node = new Node(row, col, size);\n        this.neighbors = [];\n        this.walls = {\n            \"north\": {\n                p1: {\n                    x: this.col * this.size,\n                    y: this.row * this.size\n                },\n                p2: {\n                    x: (this.col * this.size) + this.size,\n                    y: this.row * this.size\n                }\n            },\n            \"east\": {\n                p1: {\n                    x: (this.col * this.size) + this.size,\n                    y: this.row * this.size\n                },\n                p2: {\n                    x: (this.col * this.size) + this.size,\n                    y: (this.row * this.size) + this.size\n                }\n            },\n            \"south\": {\n                p1: {\n                    x: (this.col * this.size),\n                    y: (this.row * this.size) + this.size\n                },\n                p2: {\n                    x: (this.col * this.size) + this.size,\n                    y: (this.row * this.size) + this.size \n                }\n            },\n            \"west\": {\n                p1: {\n                    x: this.col * this.size,\n                    y: this.row * this.size\n                },\n                p2: {\n                    x: this.col * this.size,\n                    y: (this.row * this.size) + this.size\n                }\n            }\n        }\n    }\n\n    id () {\n        return `${this.row}${this.col}`;\n    }\n\n    render (ctx) {\n        ctx.strokeStyle = \"#53A1F3\";\n        // ctx.strokeStyle = \"#000\";\n        Object.values(this.walls).forEach(({ p1, p2 }) => {\n            ctx.beginPath();\n            ctx.moveTo(p1.x, p1.y);\n            ctx.lineTo(p2.x, p2.y);\n            ctx.closePath();\n            ctx.stroke();\n        });\n        \n        if (this.node) this.node.render(ctx);\n    }\n}\n\nmodule.exports = Cell;\n\n//# sourceURL=webpack:///./src/maze/cell.js?");

/***/ }),

/***/ "./src/maze/grid.js":
/*!**************************!*\
  !*** ./src/maze/grid.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Cell = __webpack_require__(/*! ./cell */ \"./src/maze/cell.js\");\n\nconst index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Grid {\n    constructor (size, w, h, ctx) {\n        this.ctx = ctx;\n        window.cells = this.cells = new Array(size * size);\n        this.size = {\n            w: w,\n            h: h\n        };\n        this.cellCount = size;\n        \n        // debugger\n        this.populateGrid();\n        this.populateCells();\n        // console.log(this.cells);\n    }\n\n    populateGrid () {\n        for (let j = 0; j < this.cellCount; j++) {\n            for(let i = 0; i < this.cellCount; i++) {\n                this.cells[index(i, j, this.cellCount)] = new Cell(i, j, this.size.w / this.cellCount);\n            }\n        }\n    }\n\n    populateCells () {\n        for (let i = 0; i < this.cells.length; i++) {\n            Grid.populateCellWithNeighbors(this.cells[i], this.cells, this.cellCount, this.ctx);\n            Grid.populateCellNodeWithNeighbors(this.cells[i], this.cells, this.cellCount, this.ctx);\n        }\n    }\n\n    static populateCellWithNeighbors (cell, cells, size, ctx) {\n        if (cells[index(cell.row - 1, cell.col, size)]) {\n            if (cell.row - 1 >= 0) {\n            cell.neighbors.push({ 'north': cells[index(cell.row - 1, cell.col, size)] });\n            }\n        }\n        if (cells[index(cell.row, cell.col + 1, size)]) {\n            cell.neighbors.push({ 'east': cells[index(cell.row, cell.col + 1, size)] });\n        }\n        if (cells[index(cell.row + 1, cell.col, size)]) {\n            if (cell.row + 1 <= size - 1) {\n            cell.neighbors.push({ 'south': cells[index(cell.row + 1, cell.col, size)] });\n            }\n        }\n        if (cells[index(cell.row, cell.col - 1, size)]) {\n            cell.neighbors.push({ 'west': cells[index(cell.row, cell.col - 1, size)] });\n        }\n\n        cell.neighbors.forEach(cellN => {\n            ctx.fillStyle = \"#9A66AC\";\n            ctx.fillRect(cellN.row * cellN.size, cellN.col * cellN.size, cellN.size, cellN.size);\n        });\n    }\n\n    static populateCellNodeWithNeighbors (cell, cells, size, ctx) {\n        if (cells[index(cell.row - 1, cell.col, size)]) {\n            if (cell.row - 1 >= 0) {\n                cell.node.neighbors.push({ 'north': cells[index(cell.row - 1, cell.col, size)].node });\n            }\n        }\n        if (cells[index(cell.row, cell.col + 1, size)]) {\n            cell.node.neighbors.push({ 'east': cells[index(cell.row, cell.col + 1, size)].node });\n        }\n        if (cells[index(cell.row + 1, cell.col, size)]) {\n            if (cell.row + 1 <= size - 1) {\n            cell.node.neighbors.push({ 'south': cells[index(cell.row + 1, cell.col, size)].node });\n            }\n        }\n        if (cells[index(cell.row, cell.col - 1, size)]) {\n            cell.node.neighbors.push({ 'west': cells[index(cell.row, cell.col - 1, size)].node });\n        }\n\n        cell.neighbors.forEach(cellN => {\n            ctx.fillStyle = \"#9A66AC\";\n            ctx.fillRect(cellN.row * cellN.size, cellN.col * cellN.size, cellN.size, cellN.size);\n        });\n    }\n\n    render (ctx) {\n        for (let j = 0; j < this.cellCount; j++) {\n            for (let i = 0; i < this.cellCount; i++) {\n                let cell = this.cells[index(j, i, this.cellCount)];\n                cell.render(ctx);\n            }\n        }\n    }\n}\n\nmodule.exports = Grid;\n\n//# sourceURL=webpack:///./src/maze/grid.js?");

/***/ }),

/***/ "./src/maze/maze.js":
/*!**************************!*\
  !*** ./src/maze/maze.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Grid = __webpack_require__(/*! ./grid */ \"./src/maze/grid.js\");\nconst Solver = __webpack_require__(/*! ../maze_solver/solver */ \"./src/maze_solver/solver.js\");\nconst index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Maze {\n    constructor (size, width, height, ctx) {\n        this.cellCount = size;\n        this.width = width;\n        this.height = height;\n        this.grid = new Grid(this.cellCount, this.width, this.height, ctx);\n\n        this.generateMaze();\n        window.solver = this.solver = new Solver(this.grid.cells, this.grid.cells[0].node, this.grid.cells[this.grid.cells.length - 1].node);\n        // console.log(this.grid.cells);\n    }\n\n\n    generateMaze () {\n        let currentCell = this.grid.cells[0];\n        currentCell.visited = true;\n        const stack = [currentCell];\n\n        while (stack.length !== 0) {\n            let neighbors = currentCell.neighbors.filter(obj => {\n                let cell = Object.values(obj)[0];\n                if (!cell) return null;\n                // console.log(cell.visited);\n                return !cell.visited;\n            });\n\n            let neighborDir;\n            let neighbor;\n\n            let neighborObj = neighbors[Math.floor(Math.random() * neighbors.length)];\n            if (neighborObj) {\n                neighborDir = Object.keys(neighborObj)[0];\n                neighbor = neighborObj[neighborDir];\n            }\n\n            if (neighborObj === undefined) {\n                currentCell = stack.pop();\n            }\n            else {\n                neighbor.visited = true;\n                switch (neighborDir) {\n                    case \"north\":\n                        delete currentCell.walls[\"north\"];\n                        delete neighbor.walls[\"south\"];\n                        // currentCell.node.neighbors[\"north\"] = 1;\n                        // neighbor.node.neighbors[\"south\"] = 1;\n                        currentCell.node.costs[\"north\"][\"g\"] = 1;\n                        neighbor.node.costs[\"south\"][\"g\"] = 1;\n                        // this.solver.graph[currentCell.id()].costs[\"north\"][\"g\"] = 1;\n                        // this.solver.graph[neighbor.id()].costs[\"south\"][\"g\"] = 1;\n                        break;\n                    case \"east\":\n                        delete currentCell.walls[\"east\"];\n                        delete neighbor.walls[\"west\"];\n                        // currentCell.node.neighbors[\"east\"] = 1;\n                        // neighbor.node.neighbors[\"west\"] = 1;\n                        currentCell.node.costs[\"east\"][\"g\"] = 1;\n                        neighbor.node.costs[\"west\"][\"g\"] = 1;\n                        break;\n                    case \"south\":\n                        delete currentCell.walls[\"south\"];\n                        delete neighbor.walls[\"north\"];\n                        // currentCell.node.neighbors[\"south\"] = 1;\n                        // neighbor.node.neighbors[\"north\"] = 1;\n                        currentCell.node.costs[\"south\"][\"g\"] = 1;\n                        neighbor.node.costs[\"north\"][\"g\"] = 1;\n                        break;\n                    case \"west\":\n                        delete currentCell.walls[\"west\"];\n                        delete neighbor.walls[\"east\"];\n                        // currentCell.node.neighbors[\"west\"] = 1;\n                        // neighbor.node.neighbors[\"east\"] = 1;\n                        currentCell.node.costs[\"west\"][\"g\"] = 1;\n                        neighbor.node.costs[\"east\"][\"g\"] = 1;\n                        break;\n                }\n                stack.push(neighbor);\n                currentCell = neighbor;\n            }\n        }\n    }\n\n    render (ctx) {\n        this.grid.render(ctx);\n    }\n}\n\nmodule.exports = Maze;\n\n//# sourceURL=webpack:///./src/maze/maze.js?");

/***/ }),

/***/ "./src/maze_solver/aStar.js":
/*!**********************************!*\
  !*** ./src/maze_solver/aStar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const heuristic = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\nconst PriorityHeap = __webpack_require__(/*! ./priorityHeap */ \"./src/maze_solver/priorityHeap.js\");\n\nclass AStar {\n    constructor (solver) {\n        this.solver = solver;\n        this.openSet = new Set();\n        this.closedSet = new Set();\n        this.gScore = {};\n        this.fScore = {};\n\n        openSet.add(solver.startNode);\n        this.gScore[solver.startNode] = 0;\n        this.fScore[solver.startNode] = this.gScore[solver.startNode] + \n            heuristic(solver.startNode.position, solver.endNode.position);\n    }\n\n    static run () {\n        \n        if (this.openSet.length > 0) {\n            let lowestIdx = 0;\n            for (let i = 0; i < this.openSet.length; i++) {\n                if (this.openSet[i] < this.closedSet[lowestIdx]) lowestIdx = i;\n            }\n\n            current = this.openSet[lowestIdx];\n\n            if (current === this.solver.endNode) console.log('DONE!');\n            this.openSet.delete(current);\n            this.closedSet.add(current);\n            current.visited = true;\n\n            let neighbors = current.neighbors.filter(obj => {\n                let node = Object.values(obj)[0];\n                // if (!node) return null;\n                // console.log(node.visited);\n                return !node.visited;\n            });\n\n            neighbors.forEach(neighbor => {\n                let tentative_g = 5;\n            })\n            // for (let i = 0; i < neighbors.length; i++) {\n\n            // }\n        }\n    }\n\n    pause () {\n\n    }\n\n    destroy () {\n\n    }\n}\n\nmodule.exports = AStar;\n\n//# sourceURL=webpack:///./src/maze_solver/aStar.js?");

/***/ }),

/***/ "./src/maze_solver/node.js":
/*!*********************************!*\
  !*** ./src/maze_solver/node.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Node {\n    constructor (i, j, size) {\n        this.position = {\n            x: (j * size) + (size / 2),\n            y: (i * size) + (size / 2)\n        };\n        this.cost = {\n            f: Infinity,\n            g: Infinity,\n            h: Infinity\n        };\n        this.neighbors = [];\n        // this.neighbors = {\n        //     \"north\": Infinity,\n        //     \"east\": Infinity,\n        //     \"south\": Infinity,\n        //     \"west\": Infinity,\n        // };\n        this.costs = {\n            \"north\": {\n                f: null,\n                g: Infinity,\n                h: null\n            },\n            \"east\": {\n                f: null,\n                g: Infinity,\n                h: null\n            },\n            \"south\": {\n                f: null,\n                g: Infinity,\n                h: null\n            },\n            \"west\": {\n                f: null,\n                g: Infinity,\n                h: null\n            },\n        };\n        // Object.values(this.neighbors).forEach(val => val.f = val.g + val.h);\n        this.size = 2;\n        this.visited = false;\n    }\n\n    render (ctx) {\n        ctx.beginPath();\n        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);\n        ctx.closePath();\n        ctx.fillStyle = \"#ac82ce\";\n        ctx.fill();\n    }\n}\n\nmodule.exports = Node;\n\n//# sourceURL=webpack:///./src/maze_solver/node.js?");

/***/ }),

/***/ "./src/maze_solver/priorityHeap.js":
/*!*****************************************!*\
  !*** ./src/maze_solver/priorityHeap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class PriorityHeap {\n    constructor () {\n        this.heap = [null];\n    }\n\n    getParent(idx) {\n        return Math.floor(idx / 2);\n    }\n\n    getLeftChild(idx) {\n        return idx * 2;\n    }\n\n    getRightChild(idx) {\n        return idx * 2 + 1;\n    }\n\n    insert(node) {\n        // add the new node to the bottom level, far-left \n        this.heap.push(node);\n\n        // then, sift that value up the heap to restore heap property\n        this.siftUp(this.heap.length - 1);\n    }\n\n    siftUp(idx) {\n        // if the node is already at the root, there's no further we can sift up\n        if (idx === 1) return;\n\n        let parentIdx = this.getParent(idx);\n\n        // if the node is bigger than it's parent, we are breaking heap property...\n        if (this.heap[parentIdx].costs[\"f\"] > this.heap[idx].costs[\"f\"]) {\n            // so swap the node with it's parent\n            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];\n\n            // and continue to sift it up recursively\n            this.siftUp(parentIdx);\n        }\n    }\n\n    deleteMin() {\n        if (this.heap.length === 2) return this.heap.pop();\n        if (this.heap.length === 1) return null;\n\n        let min = this.heap[1];\n        this.heap[1] = this.heap.pop();\n        this.siftDown(1);\n        return min;\n    }\n\n    siftDown(idx) {\n        let ary = this.heap;\n        let leftIdx = this.getLeftChild(idx);\n        let rightIdx = this.getRightChild(idx);\n        let leftNode = ary[leftIdx];\n        let rightNode = ary[rightIdx];\n\n        if (leftNode === undefined) leftNode = {costs: {f: Infinity}};\n        if (rightNode === undefined) rightNode = {costs: {f: Infinity}};\n\n        if (ary[idx] < leftNode && ary[idx] < rightNode) return;\n\n        if (leftNode > rightNode) {\n            var swapIdx = rightIdx;\n        } else {\n            var swapIdx = leftIdx;\n        }\n\n        [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];\n        this.siftDown(swapIdx);\n    }\n}\n\nmodule.exports = PriorityHeap;\n\n//# sourceURL=webpack:///./src/maze_solver/priorityHeap.js?");

/***/ }),

/***/ "./src/maze_solver/solver.js":
/*!***********************************!*\
  !*** ./src/maze_solver/solver.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const Node = require('./node');\nconst AStar = __webpack_require__(/*! ./aStar */ \"./src/maze_solver/aStar.js\");\n\nclass Solver {\n    constructor (gridCells, start, end) {\n        this.graph = {};\n        this.cells = gridCells;\n        this.startNode = start;\n        this.endNode = end;\n        gridCells.forEach(cell => this.graph[cell.id()] = cell.node);\n    }\n\n    solve () {\n        AStar.run(this);\n    }\n}\n\nmodule.exports = Solver;\n\n//# sourceURL=webpack:///./src/maze_solver/solver.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const lerp = (a, b, n) => (1 - n) * a + n * b;\n\nconst index = (i, j, rows) => i + (j * rows);\n\nconst heuristic = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);\n\nmodule.exports = heuristic;\nmodule.exports = lerp;\nmodule.exports = index;\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });