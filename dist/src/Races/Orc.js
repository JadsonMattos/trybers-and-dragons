"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        Orc.point += 1;
        this._maxLifePoints = 74;
    }
    static createdRacesInstances() {
        return Orc.point;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Orc.point = 0;
exports.default = Orc;
