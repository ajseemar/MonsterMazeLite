const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

const index = (i, j, cols) => i + j * cols

module.exports = lerp;
module.exports = index;