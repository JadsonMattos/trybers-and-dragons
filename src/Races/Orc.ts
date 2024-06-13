import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static point = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.point += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return Orc.point;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Orc;
