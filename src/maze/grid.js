const Cell = require('./cell');

const index = require('../utils/utils');

class Grid {
    constructor(size, w, h, ctx) {
        this.ctx = ctx;
        this.cells = new Array(size * size);
        this.size = {
            w: w,
            h: h
        };
        this.cellCount = size;

        this.cellSize = 100;

        this.populateGrid();
        this.populateCells();
    }

    populateGrid() {
        for (let j = 0; j < this.cellCount; j++) {
            for (let i = 0; i < this.cellCount; i++) {
                this.cells[index(i, j, this.cellCount)] = new Cell(i, j, this.cellSize);
            }
        }
    }

    populateCells() {
        for (let i = 0; i < this.cells.length; i++)
            Grid.populateCellWithNeighbors(this.cells[i], this.cells, this.cellCount, this.ctx);
    }

    static populateCellWithNeighbors(cell, cells, size, ctx) {
        if (cells[index(cell.row - 1, cell.col, size)]) {
            if (cell.row - 1 >= 0) {
                cell.neighbors.push({ 'north': cells[index(cell.row - 1, cell.col, size)] });
            }
        }
        if (cells[index(cell.row, cell.col + 1, size)]) {
            cell.neighbors.push({ 'east': cells[index(cell.row, cell.col + 1, size)] });
        }
        if (cells[index(cell.row + 1, cell.col, size)]) {
            if (cell.row + 1 <= size - 1) {
                cell.neighbors.push({ 'south': cells[index(cell.row + 1, cell.col, size)] });
            }
        }
        if (cells[index(cell.row, cell.col - 1, size)]) {
            cell.neighbors.push({ 'west': cells[index(cell.row, cell.col - 1, size)] });
        }

        cell.neighbors.forEach(cellN => {
            ctx.fillStyle = "#9A66AC";
            ctx.fillRect(cellN.row * cellN.size, cellN.col * cellN.size, cellN.size, cellN.size);
        });
    }

    render(ctx) {
        for (let j = 0; j < this.cellCount; j++) {
            for (let i = 0; i < this.cellCount; i++) {
                let cell = this.cells[index(j, i, this.cellCount)];
                cell.render(ctx);
            }
        }
    }
}

module.exports = Grid;