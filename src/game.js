class Game {
    constructor (size) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.initialTime = Date.now();
    }

    update () {

    }

    render () {
        // debugger;
        // this.ctx.fillStyle = "#2a6e09";
        // this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

module.exports = Game;