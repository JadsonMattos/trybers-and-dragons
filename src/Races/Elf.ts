import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static point = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.point += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return Elf.point;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Elf;
