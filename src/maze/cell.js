const index = require('../utils/utils');

class Cell {
    constructor (row, col, size) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.visited = false;
        this.neighbors = [];
        this.walls = {
            "north": {
                p1: {
                    x: this.col * this.size,
                    y: this.row * this.size
                },
                p2: {
                    x: (this.col * this.size) + this.size,
                    y: this.row * this.size
                }
            },
            "east": {
                p1: {
                    x: (this.col * this.size) + this.size,
                    y: this.row * this.size
                },
                p2: {
                    x: (this.col * this.size) + this.size,
                    y: (this.row * this.size) + this.size
                }
            },
            "south": {
                p1: {
                    x: (this.col * this.size),
                    y: (this.row * this.size) + this.size
                },
                p2: {
                    x: (this.col * this.size) + this.size,
                    y: (this.row * this.size) + this.size 
                }
            },
            "west": {
                p1: {
                    x: this.col * this.size,
                    y: this.row * this.size
                },
                p2: {
                    x: this.col * this.size,
                    y: (this.row * this.size) + this.size
                }
            }
        }
    }

    findNeighbor (cells, size) {
        // const neighbors = [];
        // debugger
        // if (cells[index(this.row, this.col - 1, size)]) {
        //     // debugger;
        //     if (!this.visited) {
        //         neighbors.push({ 'north': cells[index(this.row, this.col - 1, size)] });
        //     }
        // }
        // if (cells[index(this.row + 1, this.col, size)]) {
        //     if (!this.visited) {
        //         neighbors.push({ 'east': cells[index(this.row + 1, this.col, size)] });
        //     }
        // }
        // if (cells[index(this.row, this.col + 1, size)]) {
        //     if (!this.visited) {
        //         neighbors.push({ 'south': cells[index(this.row, this.col + 1, size)] });
        //     }
        // }
        // if (cells[index(this.row - 1, this.col, size)]) {
        //     if (!this.visited) {
        //         neighbors.push({ 'west': cells[index(this.row - 1, this.col, size)] });
        //     }
        // }

        // if (neighbors.length > 0) {
        //     // debugger
        //     return neighbors[Math.floor(Math.random() * neighbors.length)];
        // } else return null;
    }
}

module.exports = Cell;