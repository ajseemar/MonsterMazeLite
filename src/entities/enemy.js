class Enemy extends Entity {
    constructor(size) {
        super(size);

        this.position = {
            x: size / 2,
            y: size / 2
        };
        this.size = size / 4;
    }

    render(ctx) {
        ctx.fillStyle = "#ba7e35";
    }
}

module.exports = Enemy;