"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this._opponent = player2;
    }
    fight() {
        while (this.player.lifePoints !== -1 && this._opponent.lifePoints !== -1) {
            this.player.attack(this._opponent);
            this._opponent.attack(this.player);
        }
        return super.fight();
    }
}
exports.default = PVP;
