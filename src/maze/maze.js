const Grid = require('./grid');
const index = require('../utils/utils');

class Maze {
    constructor(size, width, height, ctx) {
        this.cellCount = size;
        this.width = width;
        this.height = height;
        this.grid = new Grid(this.cellCount, this.width, this.height, ctx);

        this.generateMaze();
    }


    generateMaze() {
        let currentCell = this.grid.cells[0];
        currentCell.visited = true;
        const stack = [currentCell];

        while (stack.length !== 0) {
            let neighbors = currentCell.neighbors.filter(obj => {
                let cell = Object.values(obj)[0];
                if (!cell) return null;
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
                        currentCell.node.neighbors["north"] = 1;
                        neighbor.node.neighbors["south"] = 1;
                        break;
                    case "east":
                        delete currentCell.walls["east"];
                        delete neighbor.walls["west"];
                        currentCell.node.neighbors["east"] = 1;
                        neighbor.node.neighbors["west"] = 1;
                        break;
                    case "south":
                        delete currentCell.walls["south"];
                        delete neighbor.walls["north"];
                        currentCell.node.neighbors["south"] = 1;
                        neighbor.node.neighbors["north"] = 1;
                        break;
                    case "west":
                        delete currentCell.walls["west"];
                        delete neighbor.walls["east"];
                        currentCell.node.neighbors["west"] = 1;
                        neighbor.node.neighbors["east"] = 1;
                        break;
                }
                stack.push(neighbor);
                currentCell = neighbor;
            }
        }
    }

    render(ctx) {
        this.grid.render(ctx);
    }
}

module.exports = Maze;