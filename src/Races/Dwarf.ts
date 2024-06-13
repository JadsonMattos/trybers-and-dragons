import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static point = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.point += 1;
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    return Dwarf.point;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
