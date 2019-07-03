const index = require('../utils/utils');

const Node = require('../maze_solver/node');

class Cell {
    constructor(row, col, size) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.visited = false;
        this.node = new Node(row, col, size);
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

    render(ctx, offsetX, offsetY) {
        ctx.strokeStyle = "#53A1F3";
        // ctx.strokeStyle = "#000";
        Object.values(this.walls).forEach(({ p1, p2 }) => {
            ctx.beginPath();
            ctx.moveTo(p1.x + offsetX, p1.y + offsetY);
            ctx.lineTo(p2.x + offsetX, p2.y + offsetY);
            ctx.closePath();
            ctx.stroke();
        });

        // this.node.render(ctx);
    }
}

module.exports = Cell;