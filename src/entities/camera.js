const index = require('../utils/utils');

class Camera {
    constructor(width, height, cellCount) {
        this.cellCount = cellCount;
        this.cellSize = width / this.cellCount;
        // debugger
        this.screen = {
            x: width,
            y: height
        };
        this.startTile = {
            row: 0,
            col: 0
        };
        this.endTile = {
            row: 0,
            col: 0
        };
        this.offset = {
            x: 0,
            y: 0
        };
    }

    update(px, py) {
        this.offset.x = Math.floor(this.screen.x / 2 - px); // - this.screen.x / 2;
        this.offset.y = Math.floor(this.screen.y / 2 - py); // - this.screen.y / 2;
        // this.offset.x = -px;
        // this.offset.y = -py
        // debugger
        let tile = {
            row: Math.floor(py / this.cellSize),
            col: Math.floor(px / this.cellSize)
        };

        this.startTile.row = tile.row - 1 - Math.ceil((this.screen.x / 2) / this.cellSize);
        this.startTile.col = tile.col - 1 - Math.ceil((this.screen.y / 2) / this.cellSize);
        // debugger
        if (this.startTile.row < 0) this.startTile.row = 0;
        if (this.startTile.col < 0) this.startTile.col = 0;

        this.endTile.row = tile.row + 1 + Math.ceil((this.screen.x / 2) / this.cellSize);
        this.endTile.col = tile.col + 1 + Math.ceil((this.screen.y / 2) / this.cellSize);
        // debugger
        if (this.endTile.row > this.cellCount) this.endTile.row = this.cellCount;
        if (this.endTile.col > this.cellCount) this.endTile.col = this.cellCount;
        // debugger
    }

    render(ctx, grid) {
        // debugger
        for (let j = this.startTile.col; j < this.endTile.col; j++) {
            for (let i = this.startTile.row; i < this.endTile.row; i++) {
                // console.log(i, j, grid[index(i, j, this.cellCount)]);
                // console.log(i, j, index(i, j, this.cellCount));
                if (!grid[index(i, j, this.cellCount)]) {
                    debugger
                }
                grid[index(i, j, this.cellCount)].render(ctx, this.offset.x, this.offset.y);
            }
        }
    }
}

module.exports = Camera;