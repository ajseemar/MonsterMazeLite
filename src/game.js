const Maze = require('./maze/maze');
const Player = require('./entities/player');

class Game {
    constructor (size) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.initialTime = Date.now();

        this.maze = new Maze(size, this.width, this.height, this.ctx);
        this.player = new Player(this.width / size);
    }

    update () {

    }

    render () {
        // debugger;
        // this.ctx.fillStyle = "#2a6e09";
        // this.ctx.clearRect(0, 0, this.width, this.height);
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.player.render(this.ctx);
        this.maze.render(this.ctx);
    }
}

module.exports = Game;