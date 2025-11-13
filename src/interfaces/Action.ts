export interface Action {
  actorId: string;     // e.g., 'A' or 'B' — identifies which player acted
  action: "attack" | "heal";  // what action the player performed
  amount: number;      // amount of damage dealt or HP healed
}
