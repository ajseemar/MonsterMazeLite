const Entity = require('./entity');
class Player extends Entity {
    constructor (size) {
        super(size);

        this.position = {
            x: size / 2,
            y: size / 2
        };
        this.size = size / 6;
    }

    render (ctx) {
        ctx.fillStyle = '#72af66';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

module.exports = Player;