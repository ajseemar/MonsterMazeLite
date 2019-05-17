const Grid = require('./grid');
const index = require('../utils/utils');

class Maze {
    constructor (size, width, height) {
        this.cellCount = size;
        this.width = width;
        this.height = height;
        this.grid = new Grid(this.cellCount, this.width, this.height);
        // // debugger
        this.generateMaze();
    }


    generateMaze () {
        let currentCell = this.grid.cells[0];
        const stack = [];
        stack.push(currentCell);
        while (stack.length !== 0) {
            // debugger
            let neighbor = currentCell.findNeighbor(this.cells, this.cellCount);
            if (neighbor) console.log('neighbor found');
        }
    }

    render (ctx) {
        this.grid.render(ctx);
    }
}

module.exports = Maze;