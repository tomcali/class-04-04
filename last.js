// Instructions

// Remember Tamagotchis? They were those little 
// toys that contained "digital pets" which you could 
// feed, pet, play with, and care for. Kind of like 
// Furbies but a whole lot less terrifying. 
// Over the next thirty minutes or so, you are going 
// to create your own basic Tamagotchi clone using constructors.

// Create a constructor called "DigitalPal" 
// which will create four properties and four methods...

// The first property is "hungry" and it initially starts out as false

// The second property is "sleepy" and it initially starts out as false

// The third property is "bored" and it initially starts out as true

// The fourth property is "age" and it initially starts out at 0

// The first method is "feed()" - 
// If hungry is true, print "That was yummy!", 
// set hungry to false, and then set sleepy to true. 
// If hungry is false, print "No thanks! I'm full."

// The second method is "sleep()" 
// - If sleepy is true, print "Zzzzzzzz", 
// set sleepy to false, then set bored to true, 
// and then run increaseAge(). If sleepy is false, 
// print "No way! I'm not tired."

// The third method is "play()" 
// - If bored is true, print "Yay! Let's play!", 
// set bored to false, and then set hungry to true. 
// If bored is false, print "Not right now. Later?"

// The fourth method is "increaseAge()" 
// - This method runs within the sleepy() 
// method when the DigitalPal goes to sleep and 
// increases the DigitalPal's age by one while 
// also printing "Happy Birthday to me! I am "+age+" old!"

// Create a variable named "Dog" that is set to a 
// new DigitalPal before adding the following unique 
// properties/methods to it...

// Outside - Initially set to false

// Bark() - Prints out "Woof! Woof!" when run

// goOutside() - If outside is false, prints 
// "Yay! I love the outdoors!", sets outside 
// to true, and runs Bark(). If outside is true, 
// prints "We're already outside though..."

// goInside() - If outside is true, prints 
// "Do we have to? Fine..." and sets outside 
// to false. If outside is false, prints "I'm already inside..."

// Make a second variable named "Cat" that is set 
// to a new DigitalPal and add the following methods to it:

// HouseCondition - Initially set to 100... But not for long...

// meow() - prints out "Meow! Meow!" when run

// destroyFurniture() - Lowers HouseCondition by 10 
// and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" 
// to the screen. Also sets bored to false and sleepy to true. 
// If HouseCondition is equal to 0, then this should not run anymore.

// buyNewFurniture() - Raises HouseCondition by 50 and prints 
// "Are you sure about that?" to the screen.

// Play around with your newly created digital pets 
// for a bit and see what else you could add in order 
// 	to make them even more exciting!

// BONUS: Make it so your Tamagotchis run off of user-input. 
// It may sound easy at first, but this can actually be quite challenging. 
// We will be going over this in more detail during the next class.





function DigitalPal (hungry, sleepy, bored, age) {
  this.hungry = hungry || false; // sets default if no name given
  this.sleepy = sleepy || false;
  this.bored = bored || false;
  this.age = age || 21;

// The first method is "feed()" - 
// If hungry is true, print "That was yummy!", 
// set hungry to false, and then set sleepy to true. 
// If hungry is false, print "No thanks! I'm full."
  this.feed = function() {
  	if (this.hungry) {
  		console.log("That was yummy!");
  		this.hungry = false;
  	}
  	else {
  		console.log(No thanks! I'm full');
  	}
  } // end function feed

// The second method is "sleep()" 
// - If sleepy is true, print "Zzzzzzzz", 
// set sleepy to false, then set bored to true, 
// and then run increaseAge(). If sleepy is false, 
// print "No way! I'm not tired."
  this.sleep = function() {
  	if (this.sleepy) {
  		console.log("Zzzzzzzz");
  		this.sleepy = false;
  		this.bored = true;
  		this.inceaseAge();
  	}
  	else {
   		console.log("No way! I'm not tired.");
  	}
  } // end function sleep

// The third method is "play()" 
// - If bored is true, print "Yay! Let's play!", 
// set bored to false, and then set hungry to true. 
// If bored is false, print "Not right now. Later?"
  this.play = function() {
    if (this.bored) {
    	console.log("Yay! Let's play!");
    	this.bored = false;
    	this.hungry = true;
    }
    else {
    	console.log("Not right now. Later?");
    }
  }
// The fourth method is "increaseAge()" 
// - This method runs within the sleepy() 
// method when the DigitalPal goes to sleep and 
// increases the DigitalPal's age by one while 
// also printing "Happy Birthday to me! I am "+age+" old!"
  this.increaseAge() {
  	age++;
  	console.log("Happy Birthday to me! I am "+age+" old!");
  }

} // end of function DigitalPal


// --------------------------------------------------
// Create a variable named "Dog" that is set to a 
// new DigitalPal before adding the following unique 
// properties/methods to it...

// Outside - Initially set to false

// Bark() - Prints out "Woof! Woof!" when run


var Dog = new DigitalPal (hungry, sleepy, bored, age);

Dog.Outside = false;
Dog.Bark() {
	console.log("Woof! Woof!");
}

// goOutside() - If outside is false, prints 
// "Yay! I love the outdoors!", sets outside 
// to true, and runs Bark(). If outside is true, 
// prints "We're already outside though..."
Dog.goOutside() {
	if(!Dog.outside) {
		console.log("Yay! I love the outdoors!");
		Dog.outside = true;
		Dog.bark();
    }
    else {
        console.log("We're already outside though...");
    }
}

// goInside() - If outside is true, prints 
// "Do we have to? Fine..." and sets outside 
// to false. If outside is false, prints "I'm already inside..."
Dog.goInside() {
  if(Dog.outside) {
  	console.log("Do we have to? Fine...");
    Dog.outside = false;
  }
  else {
  	console.log("I'm already inside...");
  }
}





