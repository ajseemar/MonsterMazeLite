const lerp = (a, b, n) => (1 - n) * a + n * b;

const index = (i, j, rows) => i + (j * rows);

const heuristic = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

module.exports = lerp;
module.exports = index;
module.exports = heuristic;