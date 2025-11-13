import { Player } from "../Models/Player";
import { Action } from "../interfaces/Action";
import { BattleLog } from "../interfaces/BattleLog";

export class BattleArena {
  Player1: Player;
  Player2: Player;
  log: BattleLog[] = [];

  constructor(Player1: Player, Player2: Player) {
    this.Player1 = Player1;
    this.Player2 = Player2;
  }

  async startBattle() {
    console.log(`⚔️  Battle starts between ${this.Player1.name} and ${this.Player2.name}!\n`);

    let current = this.Player1;
    let opponent = this.Player2;

    while (this.Player1.isAlive() && this.Player2.isAlive()) {
      
      const action = await current.act();

      if (action.action === "attack") {
        opponent.applyAction(action);
        console.log(`${current.name} attacks ${opponent.name} for ${action.amount} damage!`);
      } else if (action.action === "heal") {
        current.applyAction(action);
        console.log(`${current.name} heals for ${action.amount} HP!`);
      }

      // Saving action to log
      this.log.push({
      actorId: current.id,
      playerName: current.name,
      action: action.action,
      amount: action.amount,
      targetHP: opponent.hp,
      actorHP: current.hp
    });

      console.log(`${this.Player1.name} HP: ${this.Player1.hp} | ${this.Player2.name} HP: ${this.Player2.hp}\n`);


      if (!opponent.isAlive()) break;


      [current, opponent] = [opponent, current];
    }

    const winner = this.Player1.isAlive() ? this.Player1 : this.Player2;

    console.log(`\nWinner of This Battle is : ${winner.name}`);
    console.table(this.log);
  }
}
