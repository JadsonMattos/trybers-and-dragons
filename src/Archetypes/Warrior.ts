import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
