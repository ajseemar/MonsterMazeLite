class Bullet {
    constructor(sprite, pos) {
        this.sprite = sprite;

        this.position = {
            x: pos.x,
            y: pos.y
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        this.radius = 4;

        this.speed = 1000;
    }

    updateVelocity(x, y) {
        this.velocity.x = x * this.speed;
        this.velocity.y = y * this.speed;
    }

    update(dt) {
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
    }

    render(ctx, offset) {
        ctx.drawImage(this.sprite, this.position.x + offset.x, this.position.y + offset.y);
    }

    static update(bullets, dt) {
        bullets.forEach(bullet => bullet.update(dt));
    }

    static render(bullets, ...renderArgs) {
        bullets.forEach(bullet => bullet.render(...renderArgs));
    }
}

module.exports = Bullet;