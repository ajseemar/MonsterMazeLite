class CollisionDetector {
    constructor() {

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
}