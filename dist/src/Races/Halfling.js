"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        Halfling.point += 1;
        this._maxLifePoints = 60;
    }
    static createdRacesInstances() {
        return Halfling.point;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Halfling.point = 0;
exports.default = Halfling;
