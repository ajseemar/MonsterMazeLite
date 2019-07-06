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

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var v1 = __webpack_require__(/*! ./v1 */ \"./node_modules/uuid/v1.js\");\nvar v4 = __webpack_require__(/*! ./v4 */ \"./node_modules/uuid/v4.js\");\n\nvar uuid = v4;\nuuid.v1 = v1;\nuuid.v4 = v4;\n\nmodule.exports = uuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/index.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/broofa/node-uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v4.js?");

/***/ }),

/***/ "./src/entities/bullet.js":
/*!********************************!*\
  !*** ./src/entities/bullet.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const uuid = __webpack_require__(/*! uuid */ \"./node_modules/uuid/index.js\");\n\nclass Bullet {\n    constructor(sprite, pos) {\n        this.id = uuid();\n\n        this.sprite = sprite;\n\n        this.position = {\n            x: pos.x,\n            y: pos.y\n        };\n\n        this.velocity = {\n            x: 0,\n            y: 0\n        };\n\n        this.radius = 4;\n\n        this.speed = 1000;\n\n        this.collided = false;\n    }\n\n    updateVelocity(x, y) {\n        this.velocity.x = x * this.speed;\n        this.velocity.y = y * this.speed;\n    }\n\n    checkCollision() {\n\n    }\n\n    update(dt) {\n        this.position.x += this.velocity.x * dt;\n        this.position.y += this.velocity.y * dt;\n    }\n\n    render(ctx, offset) {\n        ctx.drawImage(this.sprite, this.position.x + offset.x, this.position.y + offset.y);\n    }\n\n    static update(bullets, dt) {\n        Object.keys(bullets).forEach(id => {\n            bullets[id].update(dt);\n            if (bullets[id].collided) delete bullets[id];\n        });\n    }\n\n    static render(bullets, ...renderArgs) {\n        Object.values(bullets).forEach(bullet => bullet.render(...renderArgs));\n    }\n}\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/entities/bullet.js?");

/***/ }),

/***/ "./src/entities/camera.js":
/*!********************************!*\
  !*** ./src/entities/camera.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Camera {\n    constructor(width, height, cellCount, cellSize) {\n        this.cellCount = cellCount;\n        this.cellSize = cellSize;\n        // debugger\n        this.screen = {\n            x: width,\n            y: height\n        };\n        this.startTile = {\n            row: 0,\n            col: 0\n        };\n        this.endTile = {\n            row: 0,\n            col: 0\n        };\n        this.offset = {\n            x: 0,\n            y: 0\n        };\n    }\n\n    update(px, py) {\n        this.offset.x = Math.floor(this.screen.x / 2 - px); // - this.screen.x / 2;\n        this.offset.y = Math.floor(this.screen.y / 2 - py); // - this.screen.y / 2;\n        // this.offset.x = -px;\n        // this.offset.y = -py\n        // debugger\n        let tile = {\n            row: Math.floor(py / this.cellSize),\n            col: Math.floor(px / this.cellSize)\n        };\n\n        this.startTile.row = tile.row - 1 - Math.ceil((this.screen.x / 2) / this.cellSize);\n        this.startTile.col = tile.col - 1 - Math.ceil((this.screen.y / 2) / this.cellSize);\n        // debugger\n        if (this.startTile.row < 0) this.startTile.row = 0;\n        if (this.startTile.col < 0) this.startTile.col = 0;\n\n        this.endTile.row = tile.row + 1 + Math.ceil((this.screen.x / 2) / this.cellSize);\n        this.endTile.col = tile.col + 1 + Math.ceil((this.screen.y / 2) / this.cellSize);\n        // debugger\n        if (this.endTile.row > this.cellCount) this.endTile.row = this.cellCount;\n        if (this.endTile.col > this.cellCount) this.endTile.col = this.cellCount;\n        // debugger\n    }\n\n    render(ctx, grid) {\n        // debugger\n        for (let j = this.startTile.col; j < this.endTile.col; j++) {\n            for (let i = this.startTile.row; i < this.endTile.row; i++) {\n                // console.log(i, j, grid[index(i, j, this.cellCount)]);\n                // console.log(i, j, index(i, j, this.cellCount));\n                if (!grid[index(i, j, this.cellCount)]) {\n                    debugger\n                }\n                grid[index(i, j, this.cellCount)].render(ctx, this.offset.x, this.offset.y);\n            }\n        }\n    }\n}\n\nmodule.exports = Camera;\n\n//# sourceURL=webpack:///./src/entities/camera.js?");

/***/ }),

/***/ "./src/entities/player.js":
/*!********************************!*\
  !*** ./src/entities/player.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const KEYS = __webpack_require__(/*! ../utils/keys */ \"./src/utils/keys.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/entities/bullet.js\");\n\nclass Player {\n    constructor(sprite, size, inputHandler, cellSize, cellCount) {\n        this.sprite = sprite;\n        // console.log(this.sprite.width, this.sprite.height);\n        this.size = size / 3; //c.width / (size * 2);\n        this.radius = this.size * 3 / 2;\n        // this.screenX = 0;\n        // this.screenY = 0;\n\n        this.position = {\n            x: cellSize / 2,\n            y: cellSize / 2\n        };\n\n        this.velocity = {\n            x: 0,\n            y: 0\n        };\n\n        this.angle = 0;\n\n        this.speed = 250;\n        // console.log(this.speed);\n\n        this.ih = inputHandler;\n\n        this.cellSize = cellSize;\n        this.cellCount = cellCount;\n\n        this.bullets = {};\n\n        const debounce = (func, delay) => {\n            let inDebounce\n            return function () {\n                const context = this\n                const args = arguments\n                clearTimeout(inDebounce)\n                inDebounce = setTimeout(() => func.apply(context, args), delay)\n            }\n        }\n\n        this.shoot = debounce(this.shoot, 10);\n\n    }\n\n    handleRotation(delta) {\n        this.angle = Math.atan2(delta.y, delta.x) * 180 / Math.PI;\n\n        if (this.angle < 0) {\n\n            this.angle = 360 + this.angle;\n\n        }\n    }\n\n    handleInput() {\n        if (this.ih.isPressed(KEYS.UP)) {\n            // this.velocity.x = 0;\n            this.velocity.y = -this.speed;\n        } else if (this.ih.isPressed(KEYS.DOWN)) {\n            // this.velocity.x = 0;\n            this.velocity.y = this.speed;\n        } else {\n            this.velocity.y = 0;\n            // this.velocity.x = 0;\n        }\n\n        if (this.ih.isPressed(KEYS.RIGHT)) {\n            // this.velocity.y = 0;\n            this.velocity.x = this.speed;\n        } else if (this.ih.isPressed(KEYS.LEFT)) {\n            // this.velocity.y = 0;\n            this.velocity.x = -this.speed;\n        } else {\n            this.velocity.x = 0;\n            // this.velocity.y = 0;\n        }\n    }\n\n    shoot(delta) {\n        // debugger\n        const bullet = new Bullet(this.bulletSprite, this.position);\n        let x, y;\n        if (this.delta) {\n            x = this.delta.x;\n            y = this.delta.y;\n        } else {\n            x = delta.x;\n            y = delta.y;\n        }\n        const magnitude = Math.sqrt(x * x + y * y);\n\n        x /= magnitude;\n        y /= magnitude;\n\n        bullet.updateVelocity(x, y);\n        this.bullets[bullet.id] = bullet;\n    }\n\n    update(dt) {\n        // this.handleInput();\n        // const maxX = this.size * 100 * 3 - (c.width - 10 * (c.width / 100));\n        // const maxY = this.size * 100 * 3 - (c.height - 10 * (c.height / 100));\n        // console.log(dt)\n        this.position.x += this.velocity.x * dt;\n        this.position.y += this.velocity.y * dt;\n\n        Bullet.update(this.bullets, dt);\n        // this.position.x = Math.max(0, Math.min(this.position.x, (this.cellCount - 1) * this.cellSize));\n        // this.position.y = Math.max(0, Math.min(this.position.y, (this.cellCount - 1) * this.cellSize));\n        // console.log(this.position);\n        // this.screenX = this.position.x;\n        // this.screenY = this.position.y;\n        // console.log(this.screenX, this.screenY);postition.\n    }\n\n    render(ctx, offset) {\n        // console.log(this.position.x + offsetX, this.position.y + offsetY);\n        // offsetX = 0;\n        // offsetY = 0;\n\n        // ctx.fillStyle = \"#0ff\";\n        // ctx.beginPath();\n        // // console.log(offsetX, offsetY, test);\n        // ctx.arc(this.position.x + offset.x, this.position.y + offset.y, this.radius, 0, Math.PI * 2);\n        // // console.log('rendering at...', this.position.x + offsetX, this.position.y + offsetY);\n        // ctx.closePath();\n        // ctx.fill();\n\n        ctx.save();\n        // this.angle = 0;\n        ctx.translate(this.position.x + offset.x, this.position.y + offset.y);\n        // console.log(this.position.x + offset.x, this.position.y + offset.y);\n        ctx.rotate(this.angle * Math.PI / 180);\n        ctx.drawImage(this.sprite, -this.sprite.width / 2, -this.sprite.height / 2);\n        // ctx.drawImage(this.sprite, this.position.x - this.width / 2, this.position.y - this.height / 2);\n        // ctx.drawImage(this.sprite, this.position.x, this.position.y);\n        ctx.restore();\n\n        Bullet.render(this.bullets, ctx, offset);\n\n\n\n        // ctx.fillStyle = \"#0ff\";\n        // ctx.beginPath();\n        // console.log(offsetX, offsetY, test);\n        // ctx.arc(this.position.x + offset.x, this.position.y + offset.y, 5, 0, Math.PI * 2);\n        // console.log('rendering at...', this.position.x + offsetX, this.position.y + offsetY);\n        // ctx.closePath();\n        // ctx.fill();\n\n    }\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/entities/player.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Maze = __webpack_require__(/*! ./maze/maze */ \"./src/maze/maze.js\");\nconst InputManager = __webpack_require__(/*! ./utils/input */ \"./src/utils/input.js\");\nconst Player = __webpack_require__(/*! ./entities/player */ \"./src/entities/player.js\");\nconst Camera = __webpack_require__(/*! ./entities/camera */ \"./src/entities/camera.js\");\nconst CollisionDetector = __webpack_require__(/*! ./physics/collision */ \"./src/physics/collision.js\");\n\nclass Game {\n    constructor(size, rm) {\n        this.rm = rm;\n        this.rm.onReady(this.initPlayer.bind(this));\n\n        this.canvas = document.getElementById('canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.width = this.canvas.width;\n        this.height = this.canvas.height;\n\n        this.initialTime = Date.now();\n\n        this.maze = new Maze(size, this.width, this.height, this.ctx);\n        this.viewport = new Camera(this.width, this.height, size, this.maze.grid.cellSize);\n        this.inputHandler = new InputManager();\n        this.player = new Player(rm.get('player_standing'), this.width / size, this.inputHandler, this.width / size, size);\n        this.collisionDetector = new CollisionDetector(size);\n\n        this.canvas.addEventListener('mousemove', this.handleRotation.bind(this));\n        this.canvas.addEventListener('click', this.handleClick.bind(this));\n        // this.canvas.addEventListener('mouseenter', this.handleMouseEnter.bind(this));\n        // this.canvas.addEventListener('mouseleave', this.handleMouseLeave.bind(this));\n        this.mousePos = {\n            x: 0,\n            y: 0\n        };\n        window.addEventListener(\"gamepadconnected\", (e) => {\n            // console.log(\"A gamepad connected:\");\n            console.log(e.gamepad);\n            this.inputHandler.gamepad = e.gamepad\n        });\n\n        window.addEventListener(\"gamepaddisconnected\", (event) => {\n            console.log(\"A gamepad disconnected:\");\n            delete this.inputHandler.gamepad;\n            console.log(event.gamepad);\n        });\n    }\n\n    initPlayer() {\n        this.player.sprite = this.rm.get('player_standing');\n        this.player.bulletSprite = this.rm.get('bullet');\n    }\n\n    getMousePosition(e) {\n        const rect = this.canvas.getBoundingClientRect();\n        const mousePos = {\n            x: e.clientX - rect.left,\n            y: e.clientY - rect.top\n        };\n\n        const dy = mousePos.y - this.canvas.height / 2;\n        const dx = mousePos.x - this.canvas.width / 2;\n\n        return { x: dx, y: dy };\n    }\n\n    handleClick(e) {\n        e.preventDefault();\n        this.player.shoot(this.getMousePosition(e));\n    }\n\n    handleRotation(e) {\n        // this.updatePivot();\n\n        // this.angle = Math.atan2(e.clientY - this.regY, e.clientX - this.regX);\n        // const mousePos = this.getMousePosition(e);\n\n        // const dy = mousePos.y - this.canvas.height / 2;\n        // const dx = mousePos.x - this.canvas.width / 2;\n        this.mousePos = this.getMousePosition(e);\n        // this.player.angle = Math.atan2(mousePos.y - this.player.position.y + (this.player.sprite.width / 2), mousePos.x - this.player.position.x + (this.player.sprite.height / 2));\n        // this.player.angle = Math.atan2(mousePos.y - this.player.position.y, mousePos.x - this.player.position.x);\n        // console.log(this.angle);\n        // console.log(mousePos.x, mousePos.y);\n\n        // this.angle = this.angle * (180 / Math.PI);\n        // console.log(this.angle);\n\n        // if (this.angle < 0) {\n\n        //     this.angle = 360 - (-this.angle);\n\n        // }\n    }\n\n    updateGamepad() {\n        this.gamepad = navigator.getGamepads()[0];\n        if (!this.gamepad) return false; // no gamepad to update. Use key states from inputHandler\n\n        // handle shooting bullets\n        if (this.gamepad.axes[4] > 0) {\n            // console.log('Right Trigger Pressed');\n            this.player.shoot();\n        }\n\n        // handle velocity\n        this.player.velocity.x = this.gamepad.axes[0] * this.player.speed; //this.player.speed;\n        this.player.velocity.y = this.gamepad.axes[1] * this.player.speed; //this.player.speed;\n\n        // handle rotation\n        if (this.gamepad.axes[2] !== 0 && this.gamepad.axes[3] !== 0) {\n            this.player.delta = {\n                x: this.gamepad.axes[2],\n                y: this.gamepad.axes[3]\n            };\n            this.player.angle = Math.atan2(this.gamepad.axes[3], this.gamepad.axes[2]) * 180 / Math.PI;\n        }\n\n        if (this.player.angle < 0) {\n\n            this.player.angle = 360 + this.player.angle;\n\n        }\n\n        // successfully updated gamepad\n        return true;\n    }\n\n\n    update(dt) {\n        this.collisionDetector.updateCollidables(this.viewport.startTile, this.viewport.endTile, this.maze.grid.cells);\n        if (!this.updateGamepad()) {\n            this.player.handleInput();\n            this.player.handleRotation(this.mousePos);\n        }\n        // console.log(this.collisionDetector.walls);\n        this.player.update(dt);\n\n        this.collisionDetector.detectCollision(this.player);\n\n\n        this.viewport.update(this.player.position.x, this.player.position.y);\n    }\n\n    render() {\n        // debugger;\n        // this.ctx.fillStyle = \"#2a6e09\";\n        // this.ctx.clearRect(0, 0, this.width, this.height);\n        // this.ctx.clearRect(0, 0, this.width, this.height);\n        this.ctx.fillStyle = \"#000\";\n        this.ctx.fillRect(0, 0, this.width, this.height);\n        // this.maze.render(this.ctx);\n        this.viewport.render(this.ctx, this.maze.grid.cells);\n        // console.log(this.player.position, this.viewport.offset);\n        // console.log(this.viewport.offset.x, this.viewport.offset.y);\n        this.player.render(this.ctx, this.viewport.offset);\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst ResourceManager = __webpack_require__(/*! ./utils/resource_manager */ \"./src/utils/resource_manager.js\");\n\nconst assets = {\n    'baseball_bat': 'assets/images/baseball_bat.png',\n    'blue_foot': 'assets/images/blue_foot.png',\n    'blue_shoulder': 'assets/images/blue_shoulder.png',\n    'bottom_wall': 'assets/images/bottom_wall.png',\n    'bullet': 'assets/images/bullet.png',\n    'end_flag': 'assets/images/end_flag.png',\n    'green_foot': 'assets/images/green_foot.png',\n    'green_shoulder': 'assets/images/green_shoulder.png',\n    'helmet': 'assets/images/helmet.png',\n    'left_wall': 'assets/images/left_wall.png',\n    'limb': 'assets/images/limb.png',\n    'machine_gun': 'assets/images/machine_gun.png',\n    'metal_bat': 'assets/images/metal_bat.png',\n    'pistol_reload': 'assets/images/pistol_reload.png',\n    'pistol': 'assets/images/pistol.png',\n    'player_gun': 'assets/images/player_gun.png',\n    'player_hold': 'assets/images/player_hold.png',\n    'player_machine_gun_reload': 'assets/images/player_machine_gun_reload.png',\n    'player_machine_gun': 'assets/images/player_machine_gun.png',\n    'player_standing': 'assets/images/player_standing.png',\n    'right_wall': 'assets/images/right_wall.png',\n    'start_flag': 'assets/images/start_flag.png',\n};\n\nvar rm = new ResourceManager();\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    rm.load(assets);\n    const game = new Game(25, rm);\n    const start = () => {\n        let time = Date.now();\n        let dt = (time - game.initialTime) / 1000.0;\n        game.update(dt);\n        game.render();\n        game.initialTime = time;\n        requestAnimationFrame(start);\n    }\n    rm.onReady(start);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/maze/cell.js":
/*!**************************!*\
  !*** ./src/maze/cell.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nconst Node = __webpack_require__(/*! ../maze_solver/node */ \"./src/maze_solver/node.js\");\nconst Wall = __webpack_require__(/*! ./wall */ \"./src/maze/wall.js\");\nconst Point = __webpack_require__(/*! ./point */ \"./src/maze/point.js\");\n\nclass Cell {\n    constructor(row, col, size) {\n        this.row = row;\n        this.col = col;\n        this.size = size;\n        this.visited = false;\n        this.node = new Node(row, col, size);\n        this.neighbors = [];\n        this.walls = {\n            \"north\": new Wall(\n                new Point(this.col * this.size, this.row * this.size),\n                new Point((this.col * this.size) + this.size, this.row * this.size)\n            ),\n            \"east\": new Wall(\n                new Point((this.col * this.size) + this.size, this.row * this.size),\n                new Point((this.col * this.size) + this.size, (this.row * this.size) + this.size)\n            ),\n            \"south\": new Wall(\n                new Point((this.col * this.size), (this.row * this.size) + this.size),\n                new Point((this.col * this.size) + this.size, (this.row * this.size) + this.size)\n            ),\n            \"west\": new Wall(\n                new Point(this.col * this.size, this.row * this.size),\n                new Point(this.col * this.size, (this.row * this.size) + this.size)\n            )\n        }\n    }\n\n    render(ctx, offsetX, offsetY) {\n        ctx.strokeStyle = \"#53A1F3\";\n        // ctx.strokeStyle = \"#000\";\n        Object.values(this.walls).forEach(({ p1, p2 }) => {\n            ctx.beginPath();\n            ctx.moveTo(p1.x + offsetX, p1.y + offsetY);\n            ctx.lineTo(p2.x + offsetX, p2.y + offsetY);\n            ctx.closePath();\n            ctx.stroke();\n        });\n\n        // this.node.render(ctx);\n    }\n}\n\nmodule.exports = Cell;\n\n//# sourceURL=webpack:///./src/maze/cell.js?");

/***/ }),

/***/ "./src/maze/grid.js":
/*!**************************!*\
  !*** ./src/maze/grid.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Cell = __webpack_require__(/*! ./cell */ \"./src/maze/cell.js\");\n\nconst index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Grid {\n    constructor(size, w, h, ctx) {\n        this.ctx = ctx;\n        this.cells = new Array(size * size);\n        this.size = {\n            w: w,\n            h: h\n        };\n        this.cellCount = size;\n\n        this.cellSize = 100;\n\n        // debugger\n        this.populateGrid();\n        this.populateCells();\n        // console.log(this.cells);\n    }\n\n    populateGrid() {\n        for (let j = 0; j < this.cellCount; j++) {\n            for (let i = 0; i < this.cellCount; i++) {\n                // debugger\n                this.cells[index(i, j, this.cellCount)] = new Cell(i, j, this.cellSize);\n            }\n        }\n        // console.log(this.cells);\n    }\n\n    populateCells() {\n        for (let i = 0; i < this.cells.length; i++)\n            Grid.populateCellWithNeighbors(this.cells[i], this.cells, this.cellCount, this.ctx);\n    }\n\n    static populateCellWithNeighbors(cell, cells, size, ctx) {\n        // debugger\n        if (cells[index(cell.row - 1, cell.col, size)]) {\n            // if (!cell.visited) {\n            if (cell.row - 1 >= 0) {\n                cell.neighbors.push({ 'north': cells[index(cell.row - 1, cell.col, size)] });\n            }\n        }\n        if (cells[index(cell.row, cell.col + 1, size)]) {\n            // if (!cell.visited) {\n            cell.neighbors.push({ 'east': cells[index(cell.row, cell.col + 1, size)] });\n            // }\n        }\n        if (cells[index(cell.row + 1, cell.col, size)]) {\n            // if (!cell.visited) {\n            if (cell.row + 1 <= size - 1) {\n                cell.neighbors.push({ 'south': cells[index(cell.row + 1, cell.col, size)] });\n            }\n        }\n        if (cells[index(cell.row, cell.col - 1, size)]) {\n            // if (!cell.visited) {\n            cell.neighbors.push({ 'west': cells[index(cell.row, cell.col - 1, size)] });\n            // }\n        }\n\n        cell.neighbors.forEach(cellN => {\n            ctx.fillStyle = \"#9A66AC\";\n            ctx.fillRect(cellN.row * cellN.size, cellN.col * cellN.size, cellN.size, cellN.size);\n        });\n        // debugger\n    }\n\n    render(ctx) {\n        for (let j = 0; j < this.cellCount; j++) {\n            for (let i = 0; i < this.cellCount; i++) {\n                let cell = this.cells[index(j, i, this.cellCount)];\n                cell.render(ctx);\n                // ctx.strokeStyle = '#cc2076';\n                // ctx.beginPath();\n                // ctx.arc(cell.node.position.x, cell.node.position.y, cell.node.position.size, 0, 2 * Math.PI);\n                // // ctx.closePath();\n                // // ctx.lineWidth = 3;\n                // ctx.stroke();\n                // debugger\n                // cell.node.render(ctx);\n\n\n\n            }\n        }\n    }\n}\n\nmodule.exports = Grid;\n\n//# sourceURL=webpack:///./src/maze/grid.js?");

/***/ }),

/***/ "./src/maze/maze.js":
/*!**************************!*\
  !*** ./src/maze/maze.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Grid = __webpack_require__(/*! ./grid */ \"./src/maze/grid.js\");\nconst index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nclass Maze {\n    constructor (size, width, height, ctx) {\n        this.cellCount = size;\n        this.width = width;\n        this.height = height;\n        this.grid = new Grid(this.cellCount, this.width, this.height, ctx);\n\n        this.generateMaze();\n        // console.log(this.grid.cells);\n    }\n\n\n    generateMaze () {\n        let currentCell = this.grid.cells[0];\n        currentCell.visited = true;\n        const stack = [currentCell];\n\n        while (stack.length !== 0) {\n            let neighbors = currentCell.neighbors.filter(obj => {\n                let cell = Object.values(obj)[0];\n                if (!cell) return null;\n                // console.log(cell.visited);\n                return !cell.visited;\n            });\n\n            let neighborDir;\n            let neighbor;\n\n            let neighborObj = neighbors[Math.floor(Math.random() * neighbors.length)];\n            if (neighborObj) {\n                neighborDir = Object.keys(neighborObj)[0];\n                neighbor = neighborObj[neighborDir];\n            }\n\n            if (neighborObj === undefined) {\n                currentCell = stack.pop();\n            }\n            else {\n                neighbor.visited = true;\n                switch (neighborDir) {\n                    case \"north\":\n                        delete currentCell.walls[\"north\"];\n                        delete neighbor.walls[\"south\"];\n                        currentCell.node.neighbors[\"north\"] = 1;\n                        neighbor.node.neighbors[\"south\"] = 1;\n                        break;\n                    case \"east\":\n                        delete currentCell.walls[\"east\"];\n                        delete neighbor.walls[\"west\"];\n                        currentCell.node.neighbors[\"east\"] = 1;\n                        neighbor.node.neighbors[\"west\"] = 1;\n                        break;\n                    case \"south\":\n                        delete currentCell.walls[\"south\"];\n                        delete neighbor.walls[\"north\"];\n                        currentCell.node.neighbors[\"south\"] = 1;\n                        neighbor.node.neighbors[\"north\"] = 1;\n                        break;\n                    case \"west\":\n                        delete currentCell.walls[\"west\"];\n                        delete neighbor.walls[\"east\"];\n                        currentCell.node.neighbors[\"west\"] = 1;\n                        neighbor.node.neighbors[\"east\"] = 1;\n                        break;\n                }\n                stack.push(neighbor);\n                currentCell = neighbor;\n            }\n        }\n    }\n\n    render (ctx) {\n        this.grid.render(ctx);\n    }\n}\n\nmodule.exports = Maze;\n\n//# sourceURL=webpack:///./src/maze/maze.js?");

/***/ }),

/***/ "./src/maze/point.js":
/*!***************************!*\
  !*** ./src/maze/point.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Point {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\nmodule.exports = Point;\n\n\n//# sourceURL=webpack:///./src/maze/point.js?");

/***/ }),

/***/ "./src/maze/wall.js":
/*!**************************!*\
  !*** ./src/maze/wall.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Wall {\n    constructor(p1, p2) {\n        this.p1 = p1\n        this.p2 = p2\n\n        this.a = this.p2.y - this.p1.y;\n        this.b = this.p1.x - this.p2.x;\n        this.c = this.a * this.p1.x + this.b * this.p1.y;\n    }\n\n    render() {\n        ctx.beginPath();\n        ctx.moveTo(this.p1.x, this.p1.y);\n        ctx.lineTo(this.p2.x, this.p2.y);\n        ctx.closePath();\n        ctx.stroke();\n    }\n}\n\nmodule.exports = Wall;\n\n//# sourceURL=webpack:///./src/maze/wall.js?");

/***/ }),

/***/ "./src/maze_solver/node.js":
/*!*********************************!*\
  !*** ./src/maze_solver/node.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Node {\n    constructor (i, j, size) {\n        this.position = {\n            x: (j * size) + (size / 2),\n            y: (i * size) + (size / 2)\n        };\n        this.neighbors = {\n            \"north\": Infinity,\n            \"east\": Infinity,\n            \"south\": Infinity,\n            \"west\": Infinity\n        };\n        this.size = 2;\n    }\n\n    render (ctx) {\n        // ctx.lineWidth = 0;\n        ctx.beginPath();\n        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);\n        ctx.closePath();\n        ctx.fillStyle = '#72af66';\n        ctx.fill();\n        // ctx.closePath();\n    }\n}\n\nmodule.exports = Node;\n\n//# sourceURL=webpack:///./src/maze_solver/node.js?");

/***/ }),

/***/ "./src/physics/collision.js":
/*!**********************************!*\
  !*** ./src/physics/collision.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const index = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nconst Point = __webpack_require__(/*! ../maze/point */ \"./src/maze/point.js\");\n\nclass CollisionDetector {\n    constructor(cellCount) {\n        // this.walls = [];\n        this.cellCount = cellCount;\n    }\n\n    updateCollidables(startTile, endTile, grid) {\n        // debugger\n        this.walls = [];\n        for (let j = startTile.col; j < endTile.col; j++) {\n            for (let i = startTile.row; i < endTile.row; i++) {\n                if (!grid[index(i, j, this.cellCount)]) {\n                    debugger\n                }\n                Object.values(grid[index(i, j, this.cellCount)].walls).forEach(wall => {\n                    this.walls.push(wall);\n                });\n            }\n        }\n    }\n\n    detectCollision(player) {\n        this.walls.forEach(wall => {\n            const nearest = this.closestPointOnLine(wall, player);\n            if (nearest.x >= Math.min(wall.p1.x, wall.p2.x) && nearest.x <= Math.max(wall.p1.x, wall.p2.x) &&\n                nearest.y >= Math.min(wall.p1.y, wall.p2.y) && nearest.y <= Math.max(wall.p1.y, wall.p2.y)) {\n                const a = nearest.y - player.position.y;\n                const b = nearest.x - player.position.x;\n\n                const dist = Math.sqrt(a * a + b * b);\n\n                if (dist < player.radius) this.resolveCollision(wall, player);\n            }\n        });\n    }\n\n    resolveCollision(wall, player) {\n        const dy = wall.p2.y - wall.p1.y;\n        const dx = wall.p2.x - wall.p1.x;\n\n        let slope;\n\n        if (dy === 0) {\n            if (wall.p1.y < player.position.y) {\n                player.position.y = wall.p1.y + 1 + player.radius;\n            } else {\n                player.position.y = wall.p1.y - 1 - player.radius;\n            }\n        } else if (dx === 0) {\n            if (wall.p1.x < player.position.x) {\n                player.position.x = wall.p1.x + 1 + player.radius;\n            } else {\n                player.position.x = wall.p1.x - 1 - player.radius;\n            }\n        }\n    }\n\n    lineToLineCollision(wall1, wall2) {\n        const a1 = wall1.p2.y - wall1.p1.y;\n        const b1 = wall1.p1.x - wall1.p2.x;\n        const c1 = a1 * wall1.p1.x + b1 * wall1.p1.y;\n\n        const a2 = wall2.p2.y - wall2.p1.y;\n        const b2 = wall2.p1.x - wall2.p2.x;\n        const c2 = a2 * wall2.p1.x + b2 * wall2.p1.y;\n\n        const det = a1 * b2 - a2 * b1;\n\n        if (det !== 0) {\n            const x = (b2 * c1 - b1 * c2) / det;\n            const y = (a1 * c2 - a2 * c1) / det;\n\n            if (x >= Math.min(wall1.p1.x, wall1.p2.x) && x <= Math.max(wall1.p1.x, wall1.p2.x) &&\n                x >= Math.min(wall2.p1.x, wall2.p2.x) && x <= Math.max(wall2.p1.x, wall2.p2.x) &&\n                y >= Math.min(wall1.p1.y, wall1.p2.y) && y <= Math.max(wall1.p1.y, wall1.p2.y) &&\n                y >= Math.min(wall2.p1.y, wall2.p2.y) && y <= Math.max(wall2.p1.y, wall2.p2.y)) {\n                return new Point(x, y);\n            }\n        }\n        return null;\n    }\n\n    closestPointOnLine(wall, circle) {\n        const a = wall.p2.y - wall.p1.y;\n        const b = wall.p1.x - wall.p2.x;\n\n        const c1 = a * wall.p1.x + b * wall.p1.y;\n        const c2 = -b * circle.position.x + a * circle.position.y;\n\n        const det = a * a + b * b;\n        let cx = 0;\n        let cy = 0;\n\n        if (det != 0) {\n            cx = (a * c1 - b * c2) / det;\n            cy = (a * c2 + b * c1) / det;\n        } else {\n            cx = circle.position.x;\n            cy = circle.position.y;\n        }\n\n        return new Point(cx, cy);\n    }\n}\n\nmodule.exports = CollisionDetector;\n\n//# sourceURL=webpack:///./src/physics/collision.js?");

/***/ }),

/***/ "./src/utils/input.js":
/*!****************************!*\
  !*** ./src/utils/input.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const KEYS = __webpack_require__(/*! ./keys */ \"./src/utils/keys.js\");\n\nclass InputManager {\n    constructor() {\n        this.pressedKeys = {};\n\n        document.addEventListener('keydown', e => this.setKey(e, true));\n        document.addEventListener('keyup', e => this.setKey(e, false));\n    }\n\n    setKey(e, status) {\n        e.preventDefault();\n        let key;\n        switch (e.keyCode) {\n            case 32:\n                key = KEYS.SPACE;\n                break;\n            case 65:\n                key = KEYS.LEFT;\n                break;\n            case 87:\n                key = KEYS.UP;\n                break;\n            case 68:\n                key = KEYS.RIGHT;\n                break;\n            case 83:\n                key = KEYS.DOWN;\n                break;\n            case 37:\n                key = KEYS.LEFT;\n                break;\n            case 38:\n                key = KEYS.UP;\n                break;\n            case 39:\n                key = KEYS.RIGHT;\n                break;\n            case 40:\n                key = KEYS.DOWN;\n                break;\n            default:\n                // Convert ASCII codes to letters\n                key = String.fromCharCode(e.keyCode);\n\n        }\n\n        this.pressedKeys[key] = status;\n    }\n\n    // update() {\n    //     // debugger\n    //     const gp = navigator.getGamepads()[0];\n    //     if (!gp) return;\n    //     // if (!this.gamepad) return;\n    //     // if (this.gamepad.axes[4] > 0) {\n    //     //     console.log('Right Trigger Pressed');\n    //     // }\n    //     if (gp.buttons[0].pressed) {\n    //         console.log('a button pressed');\n    //     }\n    //     if (gp.buttons[0].value === 1) {\n    //         console.log('a button value changed');\n    //     }\n    //     if (gp.axes[5] > 0) {\n    //         console.log('Left Trigger Pressed');\n    //     }\n    // }\n\n    isPressed(key) {\n        return this.pressedKeys[key];\n    }\n}\n\nmodule.exports = InputManager;\n\n//# sourceURL=webpack:///./src/utils/input.js?");

/***/ }),

/***/ "./src/utils/keys.js":
/*!***************************!*\
  !*** ./src/utils/keys.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const KEYS = {\n    SPACE: \"SPACE\",\n    LEFT: \"LEFT\",\n    UP: \"UP\",\n    RIGHT: \"RIGHT\",\n    DOWN: \"DOWN\"\n};\n\nmodule.exports = KEYS;\n\n//# sourceURL=webpack:///./src/utils/keys.js?");

/***/ }),

/***/ "./src/utils/resource_manager.js":
/*!***************************************!*\
  !*** ./src/utils/resource_manager.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class ResourceManager {\n    constructor() {\n        this.resourceCache = {};\n        this.loading = [];\n        this.callbacks = [];\n    }\n\n    load(resource) {\n        if (resource instanceof Object) {\n            Object.keys(resource).forEach(key => this._load(key, resource[key]));\n        } else this._load(resource);\n    }\n\n    _load(key, url) {\n        if (this.resourceCache[key]) return this.resourceCache[key];\n        else {\n            this.loading.push(url);\n\n            const img = new Image();\n            img.onload = () => {\n                this.resourceCache[key] = img;\n                if (this.isReady()) this.callbacks.forEach(cb => cb());\n            }\n            img.src = url;\n            this.resourceCache[key] = img;\n        }\n    }\n\n    get(url) {\n        return this.resourceCache[url];\n    }\n\n    isReady() {\n        let ready = true;\n        for (let k in this.resourceCache) {\n            if (this.resourceCache.hasOwnProperty(k) && !(this.resourceCache[k]))\n                ready = false;\n        };\n        return ready;\n    }\n\n    onReady(func) {\n        this.callbacks.push(func);\n    }\n}\n\nmodule.exports = ResourceManager;\n\n//# sourceURL=webpack:///./src/utils/resource_manager.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const lerp = (a, b, n) => {\n    return (1 - n) * a + n * b;\n};\n\nconst index = (i, j, rows) => i + (j * rows);\n\nmodule.exports = lerp;\nmodule.exports = index;\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });