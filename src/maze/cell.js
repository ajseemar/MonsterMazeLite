class Cell {
    constructor (row, col, size) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.walls = {
            "north": {
                p1: {
                    x: this.row * this.size,
                    y: this.col * this.size
                },
                p2: {
                    x: (this.row * this.size) + this.size,
                    y: this.col * this.size
                }
            },
            "east": {
                p1: {
                    x: (this.row * this.size) + this.size,
                    y: this.col * this.size
                },
                p2: {
                    x: (this.row * this.size) + this.size,
                    y: (this.col * this.size) + this.size
                }
            },
            "south": {
                p1: {
                    x: (this.row * this.size),
                    y: (this.col * this.size) + this.size
                },
                p2: {
                    x: (this.row * this.size) + this.size,
                    y: (this.col * this.size) + this.size 
                }
            },
            "west": {
                p1: {
                    x: this.row * this.size,
                    y: this.col * this.size
                },
                p2: {
                    x: this.row * this.size,
                    y: (this.col * this.size) + this.size
                }
            }
        }
    }
}

module.exports = Cell;