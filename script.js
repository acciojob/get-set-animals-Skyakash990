//complete this code
class Animal {
	constructor(species:string){
		this.species=species;
	}
	get speci(species){
		return `${this.species}`;
	}
	makeSound():void{
		console.log(`The ${this._species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor() {
    super("Cat");
  }

  purr() {
    console.log("purr");
  }
}

class Cat extends Animal {
	constructor() {
    super("Dog");
  }

  bark() {
    console.log("woof");
  }
}
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Cat makes a sound
myCat.purr();      // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Dog makes a sound
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
