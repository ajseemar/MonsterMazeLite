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
                if (cell.visited) {
                    // debugger;
                    ctx.fillStyle = "rgba (100, 23, 128, 100)";
                    ctx.fillRect(cell.col * cell.size, cell.row * cell.size, cell.size, cell.size)
                    
                    // ctx.fillStyle = "#FF0000";
                    // ctx.fillRect(i * cell.size, j * cell.size, cell.size, cell.size);
                }
                ctx.fillSyle = "#53A1F3";
                // console.log(cell);
                Object.values(cell.walls).forEach(({ p1, p2 }) => {
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                });
                // ctx.fillStyle = 'rgb(140, 76, 44, 100)';
                // ctx.fillRect(0, 0, cell.size, cell.size);
                // debugger
            }
        }
    }
}

module.exports = Grid;