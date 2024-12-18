# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Generals ++ 
Development Documents

	Coding Frameworks 
o	Socket.io -> for connection and Session Management.
o	React -> front end development.

	Game Assets
o	9 x 8 Gameboard
    ____________________________
		|__|__|__|__|__|__|__|__|__|
    |__|__|__|__|__|__|__|__|__|
    |__|__|__|__|__|__|__|__|__|
    |__|__|__|__|__|__|__|__|__|
    |__|__|__|__|__|__|__|__|__|
    |__|__|__|__|__|__|__|__|__|
    |__|__|__|__|__|__|__|__|__|
    |__|__|__|__|__|__|__|__|__|
    
o	21 pieces for each player
Piece Name	      Quantity	Value	    Powerup	              Killed Effect
5 star general	     1	      13	    General’s Charge	    Morale Boost
4 star general	     1	      12	    General’s Charge	
3 star general	     1	      11	    General’s Charge	
2 star general	     1	      10	    General’s Charge	
1 star general	     1	      9       General’s Charge	
Colonel	             1	      8	      Coming up	            Coming up
Lieutenant Colonel   1	      7	      Coming up	            Coming up
Major	               1	      6	      Coming up	            Coming up
Captain	             1	      5	      Coming up	            Coming up
1st lieutenant	     1	      4	      Coming up	            Coming up
2nd lieutenant	     1	      3	      Coming up	            Coming up
Seargeant	           1	      2	      Just Got Promoted	    No effect
Private	             6	      1	      Coming up	            Coming up
Spy	                 2	      1000	  No power	            Eye Spy
Flag	               1	      0	      Panic Switch	        Lose

Power Up / gain boosts descriptions
General’s Charge – Allows you to move a singular piece twice 1 charge per general alive.
Morale Boost – When all enemy generals are killed you gain a buff that will let you move 5 troops at the same time once
Just Got Promoted – You can activate before taking attacking an enemy piece when attacking enemy spy and the buff is active you kill spy and the buff is refreshed else buff goes to cooldown for 2 turns.
Eye spy – when all enemy spy is killed you gain the ability to reveal a 3x3 square all enemy inside the area will be revealed to you.
Panic Switch – You can switch the position of 2 of your troop’s cooldown of 3 turns. The range is 2 rows between the 2 troops
Game Rules
	At the start of the game the players are give a maximum of 10 minutes to arrange their troops as they like in their side of the board. If both players already place all their troops and marked ready will start cutting the preparation time.
	Each piece can only move in vertical or horizontal way once per turn. Excepts when a special buff is activated.
	Attack is made if a player moves his piece to a square occupied by an enemy. The player will then lose the troop of kill the enemy troop depending on the value of the attacking and the defending troop. The higher value will always kill the lower value regardless of who is making the attack. 
  o	Special rules for spy and private as Spies will eliminate everything except the private which always kills the spy
	Game will continue until one of the winning conditions is fulfilled.
  o	Rat’s Victory – When your flag Reaches the other side of the board.
  o	Total Annihilation – When you kill all enemy troops except the flag. 
  o	CTF – When you kill the enemy flag.
  o	Order 66 – kill all enemy privates and have at least 1 spy left.

Front End Development
	The Landing Screen will be developed easily as such focus on how to handle the player token and attack logic will be prioritized after creating their Pages.
	Tokens should be movable by mouse.
  o	Tokens should only be moved to a square adjacent to it.
  o	Skills like General’s charge should increase the players turn count but limit to next move to be the piece that has already be in place.
  o	Cancelling the ability should be done by either right clicking or clicking the ability icon.
	Attacking is done if you place your token on a space occupied by the enemy.
  o	The values of the token will be checked. The token with the largest value will win the attack/defense.
  o	The losing token then be displayed in the front of the player that won it. 
	Panic Switch ability handling
  o	When panic switch is activated, there should be a visual que of its activation. And the switch should be visible to both players except on what piece is swapped by the enemy. 
	Skills should have their own que when activated it could be audio or visual or both.
	Token Specific abilities such as JGP should be activated when the piece is double clicked
	There is a timer of 15 min per player that is paused when it’s not your turn.
Socket IO
	Web Socket should be set up when the token handling is done. 




