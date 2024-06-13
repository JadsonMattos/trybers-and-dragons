import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
