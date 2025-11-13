import { Player } from "./Player";
import { Action } from "../interfaces/Action";
import { delay } from "../Utils/delay";

export class Attacker extends Player {
  constructor(id: string, name: string) {
    super(id, name);
  }

  // Override act() to make Attacker more aggressive
  async act(): Promise<Action> {
    await delay(1000);

    // Attacker attacks 60% of the time
    const isAttack = Math.random() > 0.4;

    // Action power depends on HP
    let amount: number;
    if (this.hp > 50) {
      amount = Math.floor(Math.random() * 10) + 15; 
    } else {
      amount = Math.floor(Math.random() * 5) + 10;   
    }

    const actionType = isAttack ? "attack" : "heal";

    return {
      actorId: this.id,
      action: actionType,
      amount: amount,
    };
  }
}
