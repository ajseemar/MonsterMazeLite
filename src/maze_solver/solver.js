const Node = require('./node');

class Solver {
    constructor (grid) {
        this.graph = grid.map(cell => new Node(cell.row, cell.col, cell.size));
    }
}

module.exports = Solver;