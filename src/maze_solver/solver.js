// const Node = require('./node');
const AStar = require('./aStar');

class Solver {
    constructor (gridCells, start, end) {
        this.graph = {};
        this.cells = gridCells;
        this.startNode = start;
        this.endNode = end;
        gridCells.forEach(cell => this.graph[cell.id()] = cell.node);
    }

    solve () {
        AStar.run(this);
    }
}

module.exports = Solver;