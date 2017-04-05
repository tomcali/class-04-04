// Make a dogs object with three keys...
// First key called "raining" with a value of true
// Second key called "noise" with a value of "Woof!"
// Third key called "makeNoise" which contains a function 
// which console.logs the noise to the screen if it is raining dogs
// Make a cats object with three keys...
// First key called "raining" with a value of false
// Second key called "noise" with a value of "Meow!"
// Third key called "makeNoise" which contains a function 
// which console.logs the noise to the screen if it is raining cats
// Make the dog bark
// Make the cat meow
// BONUS: Create a function called "massHysteria" 
// which takes in both the cats and the dogs object 
// and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" 
// if both of the raining keys are equal to true.
// BONUS: Look to see if you can find any means 
// to simplify your code further and further

var BuildDog = function (raining, noise) {
    var dog = {};
    dog.raining = raining;
    dog.noise = noise;
    dog.makeNoise = function () {
      if (dog.raining) {
        console.log('noise')
      }
    };
    return dog;
};

var BuildCat = function (raining, noise) {
    var cat = {};
    cat.raining = raining;
    cat.noise = noise;
    cat.makeNoise = function () {
      if (cat.raining) {
        console.log('Meow!')
      }
    };
    return cat;
};

var dog = BuildDog(false, 'Woof!');
var cat = BuildCat(false, 'Meow!');

// -------------------------------------------
// notice that the keys are the same, including the method
// so we can make this a generic object/class
// ... like setting up a mold to create many objects
function Animal(raining, noise){
  this.raining = raining;
  this.noise = noise;
  this.makenoise = function() {
  	console.log(this.noise);
  }
};

// instantiate objects
var dogs = new Animal(true, 'Woof!');
var cats = new Animal(false, 'Meow!');

console.log(dogs);
console.log(cats);

dogs.makeNoise();
cats.makeNoise();

// note that you can add new keys/properties to these objects
// -------------------------------------------

var massHysteria = function(dogs, cats) {
	if (dogs.raining && cats.raining) {
		console.log("Dogs and Cats living in mass hysteria.")
	}
};

massHysteria(dogs, cats);

// could use getters and setters to make things more secure
cats.setRaining = function(val) {
	this.raining = val;
}

cats.getRaining = function() {
	return this.raining;
}



