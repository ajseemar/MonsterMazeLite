const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

module.exports = lerp;