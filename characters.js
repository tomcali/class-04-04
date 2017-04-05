// note default parameter values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// http://adripofjavascript.com/blog/drips/default-parameters-in-javascript.html

// Over the course of this activity you are going to be using constructors 
//to create simplistic characters for use within a very basic 
// Roleplaying Game (RPG)

// Each character created using your constructor 
// should have the following properties...

// Name: The character's name --> String

// Profession: What the character does for a living --> String

// Gender: The character's gender --> String

// Age: The character's age --> Integer

// Strength: Abstraction for how strong the character is --> Integer

// HitPoints (HP): Abstraction for how much health the character has --> Integer

// PrintStats: Function which prints all of a character's 
// properties to the screen

// Once you have created your constructor, create two new 
// characters and print their properties to the screen

// Fool around and get comfortable with your constructor 
// before moving onto the next parts of the activity
// Now that you feel comfortable with your constructor, 
// it is time to start making this character creation system a little more reactive by adding in some more methods...

// IsAlive: Function which prints whether or not this character 
// is alive by looking into their hitpoints and determining 
// whether they are above or below zero.

// Attack: Function which takes in a second character's 
// hitpoints and subtracts this character's strength from it.

// LevelUp: Function which increases this character's Age by 1, 
// their Strength by 5, and their HitPoints by 25.

// BONUS: After completing the previous sections and making 
// sure they work, you now have everything you need to create 
// a very basic RPG where two characters fight one another. 
// Don't worry if you cannot finish this part of the activity as, 
// by completing the above sections you are well on your way 
// to mastering constructors!

function MakeCharacter (name, profession, gender, age, 
	strength, hitPoints) {
  this.name = name || 'NoName'; // sets default if no name given
  this.profession = profession || 'mastermind';
  this.gender = gender || 'none';
  this.age = age || 21;
  this.strength = strength || 5;
  this.hitPoints = hitPoints || 5;
  this.isAlive = function() {
  	if (this.hitPoints > 0) return true;
  	if (this.hitPoints <= 0) return false;
  }	
  this.levelUp = function() {
    this.age = this.age + 1;
    this.strength = this.strength + 5;
    this.hitPoints = this.hitPoints + 25;
  }
  this.attack = function(otherPlayer) {
    otherPlayer.hitPoints = otherPlayer.hitPoints - 
      this.strength;
    return otherPlayer;  
  }
  this.printStatus = function() {
    console.log(this.name);
    // console.log(this.profession);
    // console.log(this.gender);
    // console.log(this.age);
    console.log('strength:', this.strength);
    console.log('hitPoints:', this.hitPoints);
    console.log('isAlive:', this.isAlive());
  } 
} // end function MakeCharacter

// instantiation of two players for the game
var firstPlayer = new MakeCharacter(name = 'Alpha', profession = 'mastermind', 
	  gender = 'male', age = 35, strength = 5, hitPoints = 10);

var secondPlayer = new MakeCharacter(name = 'Beta', profession = 'robot', 
	gender = 'none', age = 1, strength = 6, hitPoints = 5);

// simulate the game
var numberRound = 0;
while (firstPlayer.isAlive() && secondPlayer.isAlive()) {
  numberRound++;
  console.log();
  console.log('Round:', numberRound);	
  firstPlayer.attack(otherPlayer = secondPlayer);
  console.log('Status after firstPlayer attacks secondPlayer');
  firstPlayer.printStatus();
  secondPlayer.printStatus();
  console.log();
  secondPlayer.attack(otherPlayer = firstPlayer);
  console.log('Status after secondPlayer attacks firstPlayer');
  firstPlayer.printStatus();
  secondPlayer.printStatus();
}
