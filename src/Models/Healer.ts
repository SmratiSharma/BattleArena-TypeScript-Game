import { Player } from "./Player";
import { Action } from "../interfaces/Action";
import { delay } from "../Utils/delay";

export class Healer extends Player {
  constructor(id: string, name: string) {
    super(id, name);
  }

  // Override act() to make Healer more defensive
  async act(): Promise<Action> {
    await delay(1000);

    // Healer heals 60% of the time
    const isAttack = Math.random() > 0.6;

    // Action strength still depends on current HP
    let amount: number;
    if (this.hp > 50) {
      amount = Math.floor(Math.random() * 10) + 15; // 10–25 when strong
    } else {
      amount = Math.floor(Math.random() * 5) + 10;   // 5–9 when weak
    }

    const actionType = isAttack ? "attack" : "heal";

    return {
      actorId: this.id,
      action: actionType,
      amount: amount,
    };
  }
}
