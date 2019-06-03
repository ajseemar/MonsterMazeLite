const Cell = require('./cell');

const index = require('../utils/utils');

class Grid {
    constructor (size, w, h, ctx) {
        this.ctx = ctx;
        this.cells = new Array(size * size);
        this.size = {
            w: w,
            h: h
        };
        this.cellCount = size;
        
        // debugger
        this.populateGrid();
        this.populateCells();
        // console.log(this.cells);
    }

    populateGrid () {
        for (let j = 0; j < this.cellCount; j++) {
            for(let i = 0; i < this.cellCount; i++) {
                // debugger
                this.cells[index(i, j, this.cellCount)] = new Cell(i, j, this.size.w / this.cellCount);
            }
        }
        // console.log(this.cells);
    }

    populateCells () {
        for (let i = 0; i < this.cells.length; i++) 
            Grid.populateCellWithNeighbors(this.cells[i], this.cells, this.cellCount, this.ctx);
    }

    static populateCellWithNeighbors (cell, cells, size, ctx) {
        // debugger
        if (cells[index(cell.row - 1, cell.col, size)]) {
            // if (!cell.visited) {
            if (cell.row - 1 >= 0) {
            cell.neighbors.push({ 'north': cells[index(cell.row - 1, cell.col, size)] });
            }
        }
        if (cells[index(cell.row, cell.col + 1, size)]) {
            // if (!cell.visited) {
            cell.neighbors.push({ 'east': cells[index(cell.row, cell.col + 1, size)] });
            // }
        }
        if (cells[index(cell.row + 1, cell.col, size)]) {
            // if (!cell.visited) {
            if (cell.row + 1 <= size - 1) {
            cell.neighbors.push({ 'south': cells[index(cell.row + 1, cell.col, size)] });
            }
        }
        if (cells[index(cell.row, cell.col - 1, size)]) {
            // if (!cell.visited) {
            cell.neighbors.push({ 'west': cells[index(cell.row, cell.col - 1, size)] });
            // }
        }

        cell.neighbors.forEach(cellN => {
            ctx.fillStyle = "#9A66AC";
            ctx.fillRect(cellN.row * cellN.size, cellN.col * cellN.size, cellN.size, cellN.size);
        });
        // debugger
    }

    render (ctx) {
        for (let j = 0; j < this.cellCount; j++) {
            for (let i = 0; i < this.cellCount; i++) {
                let cell = this.cells[index(j, i, this.cellCount)];
                cell.render(ctx);
                // ctx.strokeStyle = '#cc2076';
                // ctx.beginPath();
                // ctx.arc(cell.node.position.x, cell.node.position.y, cell.node.position.size, 0, 2 * Math.PI);
                // // ctx.closePath();
                // // ctx.lineWidth = 3;
                // ctx.stroke();
                // debugger
                // cell.node.render(ctx);

                

            }
        }
    }
}

module.exports = Grid;