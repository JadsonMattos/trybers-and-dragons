"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        Elf.point += 1;
        this._maxLifePoints = 99;
    }
    static createdRacesInstances() {
        return Elf.point;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Elf.point = 0;
exports.default = Elf;
