"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        Necromancer.instances += 1;
        this._energyType = 'mana';
    }
    static createdArchetypeInstances() {
        return this.instances;
    }
    get energyType() {
        return this._energyType;
    }
}
Necromancer.instances = 0;
exports.default = Necromancer;
