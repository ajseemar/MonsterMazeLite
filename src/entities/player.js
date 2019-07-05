const KEYS = require('../utils/keys');

class Player {
    constructor(sprite, size, inputHandler, cellSize, cellCount) {
        this.sprite = sprite;
        // console.log(this.sprite.width, this.sprite.height);
        this.size = size / 3; //c.width / (size * 2);
        this.radius = this.size * 3 / 2;
        // this.screenX = 0;
        // this.screenY = 0;

        this.position = {
            x: cellSize / 2,
            y: cellSize / 2
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        this.angle = 0;

        this.speed = this.size * 20;


        this.ih = inputHandler;

        this.cellSize = cellSize;
        this.cellCount = cellCount;

    }

    handleRotation(mousePos) {
        const dy = mousePos.y - this.position.y + this.sprite.height / 2;
        const dx = mousePos.x - this.position.x + this.sprite.width / 2;

        this.angle = Math.atan2(dy, dx) % 360;
    }

    handleInput() {
        if (this.ih.isPressed(KEYS.UP)) {
            // this.velocity.x = 0;
            this.velocity.y = -this.speed;
        } else if (this.ih.isPressed(KEYS.DOWN)) {
            // this.velocity.x = 0;
            this.velocity.y = this.speed;
        } else {
            this.velocity.y = 0;
            // this.velocity.x = 0;
        }

        if (this.ih.isPressed(KEYS.RIGHT)) {
            // this.velocity.y = 0;
            this.velocity.x = this.speed;
        } else if (this.ih.isPressed(KEYS.LEFT)) {
            // this.velocity.y = 0;
            this.velocity.x = -this.speed;
        } else {
            this.velocity.x = 0;
            // this.velocity.y = 0;
        }
    }

    update(dt) {
        this.handleInput();
        // const maxX = this.size * 100 * 3 - (c.width - 10 * (c.width / 100));
        // const maxY = this.size * 100 * 3 - (c.height - 10 * (c.height / 100));
        // console.log(dt)
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
        // this.position.x = Math.max(0, Math.min(this.position.x, (this.cellCount - 1) * this.cellSize));
        // this.position.y = Math.max(0, Math.min(this.position.y, (this.cellCount - 1) * this.cellSize));
        // console.log(this.position);
        // this.screenX = this.position.x;
        // this.screenY = this.position.y;
        // console.log(this.screenX, this.screenY);postition.
    }

    render(ctx, offset) {
        // console.log(this.position.x + offsetX, this.position.y + offsetY);
        // offsetX = 0;
        // offsetY = 0;

        // ctx.fillStyle = "#0ff";
        // ctx.beginPath();
        // // console.log(offsetX, offsetY, test);
        // ctx.arc(this.position.x + offset.x, this.position.y + offset.y, this.radius, 0, Math.PI * 2);
        // // console.log('rendering at...', this.position.x + offsetX, this.position.y + offsetY);
        // ctx.closePath();
        // ctx.fill();

        ctx.save();
        // this.angle = 0;
        ctx.translate(this.position.x + offset.x, this.position.y + offset.y);
        // console.log(this.position.x + offset.x, this.position.y + offset.y);
        ctx.rotate(this.angle * 180 / Math.PI);
        ctx.drawImage(this.sprite, -this.sprite.width / 2, -this.sprite.height / 2);
        // ctx.drawImage(this.sprite, this.position.x - this.width / 2, this.position.y - this.height / 2);
        // ctx.drawImage(this.sprite, this.position.x, this.position.y);
        ctx.restore();

        ctx.fillStyle = "#0ff";
        ctx.beginPath();
        // console.log(offsetX, offsetY, test);
        ctx.arc(this.position.x + offset.x, this.position.y + offset.y, 5, 0, Math.PI * 2);
        // console.log('rendering at...', this.position.x + offsetX, this.position.y + offsetY);
        ctx.closePath();
        ctx.fill();

    }
}

module.exports = Player;