const Maze = require('./maze/maze');

class Game {
    constructor (size) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.initialTime = Date.now();

        this.maze = new Maze(5, this.width, this.height);
    }

    update () {

    }

    render () {
        // debugger;
        // this.ctx.fillStyle = "#2a6e09";
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.maze.render(this.ctx);
    }
}

module.exports = Game;