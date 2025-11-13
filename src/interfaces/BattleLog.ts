import { Action } from "./Action";

export interface BattleLog extends Action {
  playerName: string;
  targetHP: number;
  actorHP: number;
}
