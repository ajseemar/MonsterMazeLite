const KEYS = require('./keys');

class InputManager {
    constructor() {
        this.pressedKeys = {};

        document.addEventListener('keydown', e => this.setKey(e, true));
        document.addEventListener('keyup', e => this.setKey(e, false));
    }

    setKey(e, status) {
        e.preventDefault();
        let key;
        switch (e.keyCode) {
            case 32:
                key = KEYS.SPACE;
                break;
            case 65:
                key = KEYS.LEFT;
                break;
            case 87:
                key = KEYS.UP;
                break;
            case 68:
                key = KEYS.RIGHT;
                break;
            case 83:
                key = KEYS.DOWN;
                break;
            case 37:
                key = KEYS.LEFT;
                break;
            case 38:
                key = KEYS.UP;
                break;
            case 39:
                key = KEYS.RIGHT;
                break;
            case 40:
                key = KEYS.DOWN;
                break;
            default:
                // Convert ASCII codes to letters
                key = String.fromCharCode(e.keyCode);

        }

        this.pressedKeys[key] = status;
    }

    // update() {
    //     // debugger
    //     const gp = navigator.getGamepads()[0];
    //     if (!gp) return;
    //     // if (!this.gamepad) return;
    //     // if (this.gamepad.axes[4] > 0) {
    //     //     console.log('Right Trigger Pressed');
    //     // }
    //     if (gp.buttons[0].pressed) {
    //         console.log('a button pressed');
    //     }
    //     if (gp.buttons[0].value === 1) {
    //         console.log('a button value changed');
    //     }
    //     if (gp.axes[5] > 0) {
    //         console.log('Left Trigger Pressed');
    //     }
    // }

    isPressed(key) {
        return this.pressedKeys[key];
    }
}

module.exports = InputManager;