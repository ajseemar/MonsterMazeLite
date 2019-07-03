class Player {
    class Player {
    constructor(size, inputHandler, cellSize, cellCount) {
        this.size = size / 3; //c.width / (size * 2);
        // this.screenX = 0;
        // this.screenY = 0;

        this.position = {
            x: this.size,
            y: this.size
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        this.speed = this.size * 20;


        this.ih = inputHandler;

        this.cellSize = cellSize;
        this.cellCount = cellCount;
    }

    handleInput() {
        if (this.ih.isPressed(KEYS.UP)) {
            // this.velocity.x = 0;
            this.velocity.y = this.speed;
        } else if (this.ih.isPressed(KEYS.DOWN)) {
            // this.velocity.x = 0;
            this.velocity.y = -this.speed;
        } else {
            this.velocity.y = 0;
            // this.velocity.x = 0;
        }

        if (this.ih.isPressed(KEYS.RIGHT)) {
            // this.velocity.y = 0;
            this.velocity.x = -this.speed;
        } else if (this.ih.isPressed(KEYS.LEFT)) {
            // this.velocity.y = 0;
            this.velocity.x = this.speed;
        } else {
            this.velocity.x = 0;
            // this.velocity.y = 0;
        }
    }

    update(dt) {
        this.handleInput();
        // const maxX = this.size * 100 * 3 - (c.width - 10 * (c.width / 100));
        // const maxY = this.size * 100 * 3 - (c.height - 10 * (c.height / 100));
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
        this.position.x = Math.max(0, Math.min(this.position.x, (this.cellCount - 1) * this.cellSize));
        this.position.y = Math.max(0, Math.min(this.position.y, (this.cellCount - 1) * this.cellSize));
        // this.screenX = this.position.x;
        // this.screenY = this.position.y;
        // console.log(this.screenX, this.screenY);postition.
    }

    render(offsetX, offsetY) {
        // console.log(this.position.x + offsetX, this.position.y + offsetY);
        cc.fillStyle = "#0ff";
        cc.beginPath();
        cc.arc(this.position.x + offsetX, this.position.y + offsetY, this.size, 0, Math.PI * 2)
        cc.closePath();
        cc.fill();
    }
}

module.exports = Player;