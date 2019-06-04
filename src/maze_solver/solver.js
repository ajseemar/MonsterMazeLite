const Node = require('./node');

class Solver {
    constructor (grid) {
        this.graph = {};
        this.cells = grid;
        grid.forEach(cell => this.graph[cell] = new Node(cell.row, cell.col, cell.size));
    }
}

module.exports = Solver;