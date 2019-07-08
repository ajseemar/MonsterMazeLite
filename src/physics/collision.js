const index = require('../utils/utils');

const Point = require('../maze/point');

class CollisionDetector {
    constructor(cellCount) {
        // this.walls = [];
        this.cellCount = cellCount;
    }

    updateCollidables(startTile, endTile, grid) {
        // debugger
        this.walls = [];
        for (let j = startTile.col; j < endTile.col; j++) {
            for (let i = startTile.row; i < endTile.row; i++) {
                if (!grid[index(i, j, this.cellCount)]) {
                    debugger
                }
                Object.values(grid[index(i, j, this.cellCount)].walls).forEach(wall => {
                    this.walls.push(wall);
                });
            }
        }
    }

    detectCollision(entity) {
        const collided = [];
        this.walls.forEach(wall => {
            const nearest = this.closestPointOnLine(wall, entity);
            if (nearest.x >= Math.min(wall.p1.x, wall.p2.x) && nearest.x <= Math.max(wall.p1.x, wall.p2.x) &&
                nearest.y >= Math.min(wall.p1.y, wall.p2.y) && nearest.y <= Math.max(wall.p1.y, wall.p2.y)) {
                const a = nearest.y - entity.position.y;
                const b = nearest.x - entity.position.x;

                const dist = Math.sqrt(a * a + b * b);

                if (dist < entity.radius) collided.push(wall);
            }
        });
        return collided;
    }

    resolveCollision(collidee, collider) {
        const dy = collidee.p2.y - collidee.p1.y;
        const dx = collidee.p2.x - collidee.p1.x;

        let slope;

        if (dy === 0) {
            if (collidee.p1.y < collider.position.y) {
                collider.position.y = collidee.p1.y + 1 + collider.radius;
            } else {
                collider.position.y = collidee.p1.y - 1 - collider.radius;
            }
        } else if (dx === 0) {
            if (collidee.p1.x < collider.position.x) {
                collider.position.x = collidee.p1.x + 1 + collider.radius;
            } else {
                collider.position.x = collidee.p1.x - 1 - collider.radius;
            }
        }
    }

    lineToLineCollision(wall1, wall2) {
        const a1 = wall1.p2.y - wall1.p1.y;
        const b1 = wall1.p1.x - wall1.p2.x;
        const c1 = a1 * wall1.p1.x + b1 * wall1.p1.y;

        const a2 = wall2.p2.y - wall2.p1.y;
        const b2 = wall2.p1.x - wall2.p2.x;
        const c2 = a2 * wall2.p1.x + b2 * wall2.p1.y;

        const det = a1 * b2 - a2 * b1;

        if (det !== 0) {
            const x = (b2 * c1 - b1 * c2) / det;
            const y = (a1 * c2 - a2 * c1) / det;

            if (x >= Math.min(wall1.p1.x, wall1.p2.x) && x <= Math.max(wall1.p1.x, wall1.p2.x) &&
                x >= Math.min(wall2.p1.x, wall2.p2.x) && x <= Math.max(wall2.p1.x, wall2.p2.x) &&
                y >= Math.min(wall1.p1.y, wall1.p2.y) && y <= Math.max(wall1.p1.y, wall1.p2.y) &&
                y >= Math.min(wall2.p1.y, wall2.p2.y) && y <= Math.max(wall2.p1.y, wall2.p2.y)) {
                return new Point(x, y);
            }
        }
        return null;
    }

    closestPointOnLine(wall, circle) {
        const a = wall.p2.y - wall.p1.y;
        const b = wall.p1.x - wall.p2.x;

        const c1 = a * wall.p1.x + b * wall.p1.y;
        const c2 = -b * circle.position.x + a * circle.position.y;

        const det = a * a + b * b;
        let cx = 0;
        let cy = 0;

        if (det != 0) {
            cx = (a * c1 - b * c2) / det;
            cy = (a * c2 + b * c1) / det;
        } else {
            cx = circle.position.x;
            cy = circle.position.y;
        }

        return new Point(cx, cy);
    }
}

module.exports = CollisionDetector;