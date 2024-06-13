"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        Dwarf.point += 1;
        this._maxLifePoints = 80;
    }
    static createdRacesInstances() {
        return Dwarf.point;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Dwarf.point = 0;
exports.default = Dwarf;
