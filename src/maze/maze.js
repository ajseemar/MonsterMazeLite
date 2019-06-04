const Grid = require('./grid');
const Solver = require('../maze_solver/solver');
const index = require('../utils/utils');

class Maze {
    constructor (size, width, height, ctx) {
        this.cellCount = size;
        this.width = width;
        this.height = height;
        this.grid = new Grid(this.cellCount, this.width, this.height, ctx);

        this.generateMaze();
        window.solver = this.solver = new Solver(this.grid.cells, this.grid.cells[0].node, this.grid.cells[this.grid.cells.length - 1].node);
        // console.log(this.grid.cells);
    }


    generateMaze () {
        let currentCell = this.grid.cells[0];
        currentCell.visited = true;
        const stack = [currentCell];

        while (stack.length !== 0) {
            let neighbors = currentCell.neighbors.filter(obj => {
                let cell = Object.values(obj)[0];
                if (!cell) return null;
                // console.log(cell.visited);
                return !cell.visited;
            });

            let neighborDir;
            let neighbor;

            let neighborObj = neighbors[Math.floor(Math.random() * neighbors.length)];
            if (neighborObj) {
                neighborDir = Object.keys(neighborObj)[0];
                neighbor = neighborObj[neighborDir];
            }

            if (neighborObj === undefined) {
                currentCell = stack.pop();
            }
            else {
                neighbor.visited = true;
                switch (neighborDir) {
                    case "north":
                        delete currentCell.walls["north"];
                        delete neighbor.walls["south"];
                        // currentCell.node.neighbors["north"] = 1;
                        // neighbor.node.neighbors["south"] = 1;
                        currentCell.node.costs["north"]["g"] = 1;
                        neighbor.node.costs["south"]["g"] = 1;
                        // this.solver.graph[currentCell.id()].costs["north"]["g"] = 1;
                        // this.solver.graph[neighbor.id()].costs["south"]["g"] = 1;
                        break;
                    case "east":
                        delete currentCell.walls["east"];
                        delete neighbor.walls["west"];
                        // currentCell.node.neighbors["east"] = 1;
                        // neighbor.node.neighbors["west"] = 1;
                        currentCell.node.costs["east"]["g"] = 1;
                        neighbor.node.costs["west"]["g"] = 1;
                        break;
                    case "south":
                        delete currentCell.walls["south"];
                        delete neighbor.walls["north"];
                        // currentCell.node.neighbors["south"] = 1;
                        // neighbor.node.neighbors["north"] = 1;
                        currentCell.node.costs["south"]["g"] = 1;
                        neighbor.node.costs["north"]["g"] = 1;
                        break;
                    case "west":
                        delete currentCell.walls["west"];
                        delete neighbor.walls["east"];
                        // currentCell.node.neighbors["west"] = 1;
                        // neighbor.node.neighbors["east"] = 1;
                        currentCell.node.costs["west"]["g"] = 1;
                        neighbor.node.costs["east"]["g"] = 1;
                        break;
                }
                stack.push(neighbor);
                currentCell = neighbor;
            }
        }
    }

    render (ctx) {
        this.grid.render(ctx);
    }
}

module.exports = Maze;