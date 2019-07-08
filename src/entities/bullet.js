const uuid = require('uuid');

class Bullet {
    constructor(sprite, pos) {
        this.id = uuid();

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

        this.collided = false;

        this.prevCollisionLength = 0;
    }

    updateVelocity(x, y) {
        this.velocity.x = x * this.speed;
        this.velocity.y = y * this.speed;
    }

    checkCollision() {

    }

    update(dt) {
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
    }

    render(ctx, offset) {
        ctx.drawImage(this.sprite, this.position.x + offset.x, this.position.y + offset.y);
    }

    static update(bullets, collisionDetector, dt) {
        Object.keys(bullets).forEach(id => {
            bullets[id].update(dt);
            const collided = collisionDetector.detectCollision(bullets[id]);
            // console.log(collided.length);
            // if (collided.length > 0 && collided.length !== this.prevCollisionLength) {
            //     console.log(collided.length);
            //     this.prevCollisionLength = collided.length;
            // }
            if (collided.length > 0) bullets[id].collided = true;
            // collided.forEach(bullet => {
            //     bullet.collided = true;
            //     // debugger;
            //     console.log(bullet);
            // });
            if (bullets[id].collided) delete bullets[id];
            // console.log(Object.keys(bullets).length);
        });
    }

    static render(bullets, ...renderArgs) {
        // console.log(Object.keys(bullets).length);

        Object.values(bullets).forEach(bullet => bullet.render(...renderArgs));
    }
}

module.exports = Bullet;