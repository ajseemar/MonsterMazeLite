const Grid = require('./grid');
const index = require('../utils/utils');

class Maze {
    constructor (size, width, height, ctx) {
        this.cellCount = size;
        this.width = width;
        this.height = height;
        this.grid = new Grid(this.cellCount, this.width, this.height, ctx);

        this.generateMaze();
        console.log(this.grid.cells);
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
            // let neighbors = [];

            // for (let i = 0; i < currentCell.neighbors.length; i++) {
            //     if (!(currentCell.neighbors[i].visited)) {
            //         neighbors.push(currentCell.neighbors[i]);
            //     }
            // }

            let neighborDir;
            let neighbor;

            let neighborObj = neighbors[Math.floor(Math.random() * neighbors.length)];
            // console.log(neighborObj);
            // console.log(currentCell);
            // console.log(stack);
            if (neighborObj) {
                neighborDir = Object.keys(neighborObj)[0];
                neighbor = neighborObj[neighborDir];
                // neighborObj = null;
            }

            if (neighborObj === undefined) {
                // debugger;
                currentCell = stack.pop();
                // stack.pop();
            }
            else {
                // debugger
                neighbor.visited = true;
                switch (neighborDir) {
                    case "north":
                        // debugger
                        delete currentCell.walls["north"];
                        delete neighbor.walls["south"];
                        // debugger
                        break;
                    case "east":
                        // debugger
                        delete currentCell.walls["east"];
                        delete neighbor.walls["west"];
                        // debugger
                        break;
                    case "south":
                        // debugger
                        delete currentCell.walls["south"];
                        delete neighbor.walls["north"];
                        // debugger
                        break;
                    case "west":
                        // debugger
                        delete currentCell.walls["west"];
                        delete neighbor.walls["east"];
                        // debugger
                        break;
                }
                // debugger
                stack.push(neighbor);
                currentCell = neighbor;
                // debugger
            }
        }
    }

    render (ctx) {
        this.grid.render(ctx);
    }
}

module.exports = Maze;