class Node {
    constructor (i, j, size) {
        this.position = {
            x: (j * size) + (size / 2),
            y: (i * size) + (size / 2)
        };
        this.neighbors = {
            "north": Infinity,
            "east": Infinity,
            "south": Infinity,
            "west": Infinity
        };
        this.size = 2;
    }

    render (ctx) {
        // ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = '#72af66';
        ctx.fill();
        // ctx.closePath();
    }
}

module.exports = Node;