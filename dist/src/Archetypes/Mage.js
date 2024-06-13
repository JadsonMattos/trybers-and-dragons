"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        Mage.instances += 1;
        this._energyType = 'mana';
    }
    static createdArchetypeInstances() {
        return this.instances;
    }
    get energyType() {
        return this._energyType;
    }
}
Mage.instances = 0;
exports.default = Mage;
