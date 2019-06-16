class Node {
    constructor (i, j, size) {
        this.position = {
            x: (j * size) + (size / 2),
            y: (i * size) + (size / 2)
        };
        this.cost = {
            f: Infinity,
            g: Infinity,
            h: Infinity
        };
        this.neighbors = {
            // "north": null,
            // "east": null,
            // "south": null,
            // "west": null
        };
        // this.neighbors = [];
        // // this.neighbors = {
        // //     "north": Infinity,
        // //     "east": Infinity,
        // //     "south": Infinity,
        // //     "west": Infinity,
        // // };
        // this.costs = {
        //     "north": {
        //         f: null,
        //         g: Infinity,
        //         h: null
        //     },
        //     "east": {
        //         f: null,
        //         g: Infinity,
        //         h: null
        //     },
        //     "south": {
        //         f: null,
        //         g: Infinity,
        //         h: null
        //     },
        //     "west": {
        //         f: null,
        //         g: Infinity,
        //         h: null
        //     },
        // };
        // // Object.values(this.neighbors).forEach(val => val.f = val.g + val.h);
        // this.size = 2;
        // this.visited = false;
    }

    render (ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = "#ac82ce";
        ctx.fill();
    }
}

module.exports = Node;