import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
