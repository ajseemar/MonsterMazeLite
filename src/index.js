const Game = require('./game');

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game(10);
    const start = () => {
        let time = Date.now();
        let dt = (time - game.initialTime / 1000);
        game.update(dt);
        game.render();
        game.initialTime = time;
        requestAnimationFrame(start);
    }
    start();
});