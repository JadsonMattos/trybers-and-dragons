import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static point = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.point += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling.point;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Halfling;
