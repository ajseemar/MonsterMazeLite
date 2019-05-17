const Cell = require('./cell');

const index = require('../utils/utils');

class Grid {
    constructor (size, w, h) {
        this.cells = new Array(size * size);
        this.size = {
            w: w,
            h: h
        };
        this.cellCount = size;
        
        // debugger
        this.populateGrid();
    }

    populateGrid () {
        for (let i = 0; i < this.cellCount; i++) {
            for(let j = 0; j < this.cellCount; j++) {
                // debugger
                this.cells[index(j, i, this.cellCount)] = new Cell(j, i, this.size.w / this.cellCount);
            }
        }
        console.log(this.cells);
    }

    render (ctx) {
        for (let j = 0; j < this.cellCount; j++) {
            for (let i = 0; i < this.cellCount; i++) {
                let cell = this.cells[index(i, j, this.cellCount)];
                ctx.fillSyle = "#53A1F3";
                // debugger
                Object.values(cell.walls).forEach(({ p1, p2 }) => {
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                });
                if (cell.visited) {
                    debugger;
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(i * cell.size, j * cell.size, cell.size, cell.size);
                }
            }
        }
    }
}

module.exports = Grid;