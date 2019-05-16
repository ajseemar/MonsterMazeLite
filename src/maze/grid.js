const Cell = require('./cell');

class Grid {
    constructor (size, w, h) {
        this.cells = new Array(size);
        this.size = {
            w: w,
            h: h
        };
        this.cellCount = size;
        
        for (let i = 0; i < size; i++) {
            this.cells[i] = new Array(10);
        }
        this.populateGrid();

    }

    populateGrid () {
        for (let i = 0; i < this.cells.length; i++) {
            for(let j = 0; j < this.cells.length; j++) {
                this.cells[i][j] = new Cell(i, j, this.size.w / this.cellCount);
            }
        }
        console.log(this.cells);
    }

    render (ctx) {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells.length; j++) {
                ctx.fillSyle = "#53A1F3";
                Object.values(this.cells[i][j].walls).forEach(({ p1, p2 }) => {
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                });

            }
        }
    }
}

module.exports = Grid;