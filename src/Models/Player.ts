import { Action } from "../interfaces/Action";
import { delay } from "../Utils/delay";

export abstract class Player {
  id: string;
  name: string;
  hp: number = 100;
  maxHp: number = 100;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  async act(): Promise<Action> {
    // simulating  delay (animation, network, etc.)

    await delay(1000);

    
    const isAttack = Math.random() > 0.5;

    // here if the player is strong then their attack will be harder ( amount will be more ) otherwise low
    let amount: number;
    if (this.hp > 50) {
      amount = Math.floor(Math.random() * 10) + 10; // 10–20 -> strong
    } else {
      amount = Math.floor(Math.random() * 5) + 5;   // 5–10 -> weak
    }

    const actionType = isAttack ? "attack" : "heal";

    return {
      actorId: this.id,
      action: actionType,
      amount: amount,
    };
  }

  // Update HP after being attacked or healed
  applyAction(action: Action) {
    if (action.action === "attack") {
      this.hp -= action.amount;
      if (this.hp < 0) this.hp = 0;
    } else if (action.action === "heal") {
      this.hp += action.amount;
      if (this.hp > this.maxHp) this.hp = this.maxHp;
    }
  }

  isAlive(): boolean {
    return this.hp > 0;
  }
}
