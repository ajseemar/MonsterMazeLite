const Maze = require('./maze/maze');
const InputManager = require('./utils/input');
const Player = require('./entities/player');
const Camera = require('./entities/camera');
const CollisionDetector = require('./physics/collision');

class Game {
    constructor(size, rm) {
        this.rm = rm;
        this.rm.onReady(this.initPlayer.bind(this));

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.initialTime = Date.now();

        this.maze = new Maze(size, this.width, this.height, this.ctx);
        this.viewport = new Camera(this.width, this.height, size, this.maze.grid.cellSize);
        this.inputHandler = new InputManager();
        this.player = new Player(rm.get('player_standing'), this.width / size, this.inputHandler, this.width / size, size);
        this.collisionDetector = new CollisionDetector(size);

        this.canvas.addEventListener('mousemove', this.handleRotation.bind(this));
        this.canvas.addEventListener('click', this.handleClick.bind(this));
        // this.canvas.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        // this.canvas.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        this.mousePos = {
            x: 0,
            y: 0
        };
        window.addEventListener("gamepadconnected", (e) => {
            // console.log("A gamepad connected:");
            console.log(e.gamepad);
            this.inputHandler.gamepad = e.gamepad
        });

        window.addEventListener("gamepaddisconnected", (event) => {
            console.log("A gamepad disconnected:");
            delete this.inputHandler.gamepad;
            console.log(event.gamepad);
        });
    }

    initPlayer() {
        this.player.sprite = this.rm.get('player_standing');
        this.player.bulletSprite = this.rm.get('bullet');
    }

    getMousePosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mousePos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };

        const dy = mousePos.y - this.canvas.height / 2;
        const dx = mousePos.x - this.canvas.width / 2;

        return { x: dx, y: dy };
    }

    handleClick(e) {
        e.preventDefault();
        this.player.shoot(this.getMousePosition(e));
    }

    handleRotation(e) {
        // this.updatePivot();

        // this.angle = Math.atan2(e.clientY - this.regY, e.clientX - this.regX);
        // const mousePos = this.getMousePosition(e);

        // const dy = mousePos.y - this.canvas.height / 2;
        // const dx = mousePos.x - this.canvas.width / 2;
        this.mousePos = this.getMousePosition(e);
        // this.player.angle = Math.atan2(mousePos.y - this.player.position.y + (this.player.sprite.width / 2), mousePos.x - this.player.position.x + (this.player.sprite.height / 2));
        // this.player.angle = Math.atan2(mousePos.y - this.player.position.y, mousePos.x - this.player.position.x);
        // console.log(this.angle);
        // console.log(mousePos.x, mousePos.y);

        // this.angle = this.angle * (180 / Math.PI);
        // console.log(this.angle);

        // if (this.angle < 0) {

        //     this.angle = 360 - (-this.angle);

        // }
    }

    updateGamepad() {
        this.gamepad = navigator.getGamepads()[0];
        if (!this.gamepad) return false; // no gamepad to update. Use key states from inputHandler

        // handle shooting bullets
        if (this.gamepad.axes[4] > 0) {
            // console.log('Right Trigger Pressed');
            this.player.shoot();
        }

        // handle velocity
        this.player.velocity.x = this.gamepad.axes[0] * this.player.speed; //this.player.speed;
        this.player.velocity.y = this.gamepad.axes[1] * this.player.speed; //this.player.speed;

        // handle rotation
        if (this.gamepad.axes[2] !== 0 && this.gamepad.axes[3] !== 0) {
            this.player.delta = {
                x: this.gamepad.axes[2],
                y: this.gamepad.axes[3]
            };
            this.player.angle = Math.atan2(this.gamepad.axes[3], this.gamepad.axes[2]) * 180 / Math.PI;
        }

        if (this.player.angle < 0) {

            this.player.angle = 360 + this.player.angle;

        }

        // successfully updated gamepad
        return true;
    }


    update(dt) {
        this.collisionDetector.updateCollidables(this.viewport.startTile, this.viewport.endTile, this.maze.grid.cells);
        if (!this.updateGamepad()) {
            this.player.handleInput();
            this.player.handleRotation(this.mousePos);
        }
        // console.log(this.collisionDetector.walls);
        this.player.update(dt);

        this.collisionDetector.detectCollision(this.player);


        this.viewport.update(this.player.position.x, this.player.position.y);
    }

    render() {
        // debugger;
        // this.ctx.fillStyle = "#2a6e09";
        // this.ctx.clearRect(0, 0, this.width, this.height);
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0, 0, this.width, this.height);
        // this.maze.render(this.ctx);
        this.viewport.render(this.ctx, this.maze.grid.cells);
        // console.log(this.player.position, this.viewport.offset);
        // console.log(this.viewport.offset.x, this.viewport.offset.y);
        this.player.render(this.ctx, this.viewport.offset);
    }
}

module.exports = Game;