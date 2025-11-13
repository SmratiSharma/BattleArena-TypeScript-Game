import promptSync from "prompt-sync";
import { Attacker } from "./Models/Attacker";
import { Healer } from "./Models/Healer";
import { BattleArena } from "./controller/BattleArena";


const prompt = promptSync();

console.log(" Welcome to the BattleArena \n");

const player1Name = prompt("Enter name for Player 1: ");
const player1Type = prompt(`Choose Type of "${player1Name}" (Attacker / Healer): `).toLowerCase();

const player2Name = prompt("Enter name for Player 2: ");
const player2Type = prompt(`Choose Type of "${player2Name}" (Attacker / Healer): `).toLowerCase();


function createPlayer(id: string, name: string, type: string) {
  if (type === "attacker") return new Attacker(id, name);
  if (type === "healer") return new Healer(id, name);

  console.log(`Unknown type "${type}", defaulting to Attacker.`);
  return new Attacker(id, name);
}

// Create Players
const Player1 = createPlayer("A", player1Name, player1Type);
const Player2 = createPlayer("B", player2Name, player2Type);

// Create and start the battle
const arena = new BattleArena(Player1, Player2);
arena.startBattle();
