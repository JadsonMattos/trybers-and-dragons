import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _opponent: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._opponent = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._opponent.lifePoints !== -1) {
      this.player.attack(this._opponent);
      this._opponent.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;