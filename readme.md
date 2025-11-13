Problem:
 
You are designing a tiny turn-based battle simulator for a simple RPG game.
Two fighters take turns performing actions like attacking or healing.
Each action is asynchronous — it takes some time to complete (to simulate animations, network latency, etc.).
Your task: implement a BattleArena class that correctly manages the turn order, asynchronous actions, and battle outcome.
 
You must implement a BattleArena class that:
Simulates a turn-based battle between two fighters.
Ensures turns happen in the correct sequence (one fighter at a time).
Waits for each fighter’s async action to finish before the next turn begins.
Ends the battle when one fighter’s hp reaches 0 or below.
Returns the final result and action log.
 

 Example Output:
 
🏆 Winner: Knight
┌─────────┬──────────┬──────────┬─────────┐
│ (index) │ actorId  │ action   │ amount  │
├─────────┼──────────┼──────────┼─────────┤
│ 0       │ 'A'      │ 'attack' │ 15      │
│ 1       │ 'B'      │ 'heal'   │ 12      │
│ 2       │ 'A'      │ 'attack' │ 15      │
│ 3       │ 'B'      │ 'attack' │ 10      │
│ ...     │ ...      │ ...      │ ...     │
└─────────┴──────────┴──────────┴─────────┘

Rules:
Fighters alternate turns (fighter1 → fighter2 → fighter1 → …).
On each turn, call the fighter’s act() method:
If the action is "attack", subtract amount from opponent’s hp.
If the action is "heal", add amount to their own hp (up to a max of 100).
Wait (await) for the action to complete before continuing.
Stop when one fighter’s hp <= 0.
Return result
 