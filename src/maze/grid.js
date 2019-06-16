const Cell = require('./cell');

const index = require('../utils/utils');

class Grid {
    constructor (size, w, h, ctx) {
        this.ctx = ctx;
        window.cells = this.cells = new Array(size * size);
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
                this.cells[index(i, j, this.cellCount)] = new Cell(i, j, this.size.w / this.cellCount);
            }
        }
    }

    populateCells () {
        for (let i = 0; i < this.cells.length; i++) {
            Grid.populateCellWithNeighbors(this.cells[i], this.cells, this.cellCount, this.ctx);
            // Grid.populateCellNodeWithNeighbors(this.cells[i], this.cells, this.cellCount, this.ctx);
        }
    }

    static populateCellWithNeighbors (cell, cells, size, ctx) {
        let newCell;

        if (cell.row - 1 >= 0) {
            newCell = cells[index(cell.row - 1, cell.col, size)];
            cell.neighbors.push({ 'north': newCell });
            cell.node.neighbors["north"] = newCell.node;
        }
        if (cells[index(cell.row, cell.col + 1, size)]) {
            newCell = cells[index(cell.row, cell.col + 1, size)];
            cell.neighbors.push({ 'east': newCell });
            cell.node.neighbors["east"] = newCell.node;
        }
        if (cell.row + 1 <= size - 1) {
            newCell = cells[index(cell.row + 1, cell.col, size)];
            cell.neighbors.push({ 'south': newCell });
            cell.node.neighbors["south"] = newCell.node;
        }
        if (cells[index(cell.row, cell.col - 1, size)]) {
            newCell = cells[index(cell.row, cell.col - 1, size)];
            cell.neighbors.push({ 'west': newCell });
            cell.node.neighbors["west"] = newCell.node;
        }
    }

    static populateCellNodeWithNeighbors (cell, cells, size, ctx) {
        if (cells[index(cell.row - 1, cell.col, size)]) {
            if (cell.row - 1 >= 0) {
                cell.node.neighbors.push({ 'north': cells[index(cell.row - 1, cell.col, size)].node });
            }
        }
        if (cells[index(cell.row, cell.col + 1, size)]) {
            cell.node.neighbors.push({ 'east': cells[index(cell.row, cell.col + 1, size)].node });
        }
        if (cells[index(cell.row + 1, cell.col, size)]) {
            if (cell.row + 1 <= size - 1) {
            cell.node.neighbors.push({ 'south': cells[index(cell.row + 1, cell.col, size)].node });
            }
        }
        if (cells[index(cell.row, cell.col - 1, size)]) {
            cell.node.neighbors.push({ 'west': cells[index(cell.row, cell.col - 1, size)].node });
        }

        cell.neighbors.forEach(cellN => {
            ctx.fillStyle = "#9A66AC";
            ctx.fillRect(cellN.row * cellN.size, cellN.col * cellN.size, cellN.size, cellN.size);
        });
    }

    render (ctx) {
        for (let j = 0; j < this.cellCount; j++) {
            for (let i = 0; i < this.cellCount; i++) {
                let cell = this.cells[index(j, i, this.cellCount)];
                cell.render(ctx);
            }
        }
    }
}

module.exports = Grid;