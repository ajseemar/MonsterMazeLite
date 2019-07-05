const Maze = require('./maze/maze');
const InputManager = require('./utils/input');
const Player = require('./entities/player');
const Camera = require('./entities/camera');
const CollisionDetector = require('./physics/collision');

class Game {
    constructor(size, rm) {
        this.rm = rm;

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.initialTime = Date.now();

        this.maze = new Maze(size, this.width, this.height, this.ctx);
        this.viewport = new Camera(this.width, this.height, size, this.maze.grid.cellSize);
        this.inputHandler = new InputManager();
        this.player = new Player(rm.get('player_standing'), this.width / size, this.inputHandler, this.width / size, size);
        this.collisionDetector = new CollisionDetector(size);

        this.rm.onReady(this.initPlayer.bind(this));
    }

    initPlayer() {
        this.player.sprite = this.rm.get('player_standing');
        // debugger
    }

    update(dt) {
        this.collisionDetector.updateCollidables(this.viewport.startTile, this.viewport.endTile, this.maze.grid.cells);
        // console.log(this.collisionDetector.walls);
        this.player.update(dt);

        this.collisionDetector.detectCollision(this.player);
        this.viewport.update(this.player.position.x, this.player.position.y);
    }

    render() {
        // debugger;
        // this.ctx.fillStyle = "#2a6e09";
        // this.ctx.clearRect(0, 0, this.width, this.height);
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0, 0, this.width, this.height);
        // this.maze.render(this.ctx);
        this.viewport.render(this.ctx, this.maze.grid.cells);
        // console.log(this.player.position, this.viewport.offset);
        // console.log(this.viewport.offset.x, this.viewport.offset.y);
        this.player.render(this.ctx, this.viewport.offset);
    }
}

module.exports = Game;