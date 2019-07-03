const Maze = require('./maze/maze');
const InputManager = require('./utils/input');
const Player = require('./entities/player');
const Camera = require('./entities/camera');

class Game {
    constructor(size) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.initialTime = Date.now();
        window.maze = this.maze = new Maze(size, this.width, this.height, this.ctx);
        this.viewport = new Camera(this.width, this.height, size)
        this.inputHandler = new InputManager();
        this.player = new Player(this.width / size, this.inputHandler, this.width / size, size)
    }

    update(dt) {
        this.player.update(dt);
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
        console.log(this.viewport.offset.x, this.viewport.offset.y);
        this.player.render(this.ctx, this.viewport.offset.x, this.viewport.offset.y);
    }
}

module.exports = Game;