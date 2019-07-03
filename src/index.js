const Game = require('./game');

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game(25);
    const start = () => {
        let time = Date.now();
        let dt = (time - game.initialTime) / 1000.0;
        game.update(dt);
        game.render();
        game.initialTime = time;
        requestAnimationFrame(start);
    }
    start();
});