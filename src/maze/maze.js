const Grid = require('./maze/grid');

class Maze {
    constructor () {
        this.grid = new Grid(size, this.width, this.height);
    }
    
    generateMaze () {
        const stack = [];
        let currentCell = this.grid[0][0]
        this.grid.cells.forEach(cell => {
            stack.push(cell);
            cell.visited = true;

            if (cell.neighbors.length > 0) {

            } else {

            }
        });
    }

    render () {
        this.grid.render(this.ctx);
    }
}