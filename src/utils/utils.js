const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

const index = (i, j, rows) => i + (j * rows);

module.exports = lerp;
module.exports = index;