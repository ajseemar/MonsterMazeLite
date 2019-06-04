const heuristic = require('../utils/utils');
const PriorityHeap = require('./priorityHeap');

class AStar {
    constructor (solver) {
        this.solver = solver;
        this.openSet = new Set();
        this.closedSet = new Set();
        this.gScore = {};
        this.fScore = {};

        openSet.add(solver.startNode);
        this.gScore[solver.startNode] = 0;
        this.fScore[solver.startNode] = this.gScore[solver.startNode] + 
            heuristic(solver.startNode.position, solver.endNode.position);
    }

    static run () {
        
        if (this.openSet.length > 0) {
            let lowestIdx = 0;
            for (let i = 0; i < this.openSet.length; i++) {
                if (this.openSet[i] < this.closedSet[lowestIdx]) lowestIdx = i;
            }

            current = this.openSet[lowestIdx];

            if (current === this.solver.endNode) console.log('DONE!');
            this.openSet.delete(current);
            this.closedSet.add(current);
            current.visited = true;

            let neighbors = current.neighbors.filter(obj => {
                let node = Object.values(obj)[0];
                // if (!node) return null;
                // console.log(node.visited);
                return !node.visited;
            });

            neighbors.forEach(neighbor => {
                let tentative_g = 5;
            })
            // for (let i = 0; i < neighbors.length; i++) {

            // }
        }
    }

    pause () {

    }

    destroy () {

    }
}

module.exports = AStar;