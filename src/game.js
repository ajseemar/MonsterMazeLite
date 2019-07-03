const Maze = require('./maze/maze');
const InputManager = require('./utils/input');
const Player = require('./entities/player');

class Game {
    constructor(size) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.initialTime = Date.now();

        window.maze = this.maze = new Maze(size, this.width, this.height, this.ctx);
        this.inputHandler = new InputManager();
        this.player = new Player(this.width / size, this.inputHandler, this.width / size, size)
    }

    update(dt) {
        this.player.update(dt);
    }

    render() {
        // debugger;
        // this.ctx.fillStyle = "#2a6e09";
        // this.ctx.clearRect(0, 0, this.width, this.height);
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.maze.render(this.ctx);
        this.player.render(this.ctx);
    }
}

module.exports = Game;