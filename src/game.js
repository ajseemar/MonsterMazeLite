const Grid = require('./maze/grid');

class Game {
    constructor (size) {
        // debugger;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.grid = new Grid(size, this.width, this.height);
        this.initialTime = Date.now();
        // this.start();
    }

    update () {

    }

    render () {
        // debugger;
        // this.ctx.fillStyle = "#2a6e09";
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.grid.render(this.ctx);
    }
}

module.exports = Game;