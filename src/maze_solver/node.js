class Node {
    constructor (i, j, size) {
        this.position = {
            x: (j * size) + (size / 2),
            y: (i * size) + (size / 2)
        };
        this.neighbors = {
            "north": {
                f: null,
                g: Infinity,
                h: null
            },
            "east": {
                f: null,
                g: Infinity,
                h: null
            },
            "south": {
                f: null,
                g: Infinity,
                h: null
            },
            "west": {
                f: null,
                g: Infinity,
                h: null
            },
        };
        Object.values(this.neighbors).forEach(val => val.f = val.g + val.h);
        this.size = 2;
        this.visited = false;
    }

    render (ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = '#72af66';
        ctx.fill();
    }
}

module.exports = Node;