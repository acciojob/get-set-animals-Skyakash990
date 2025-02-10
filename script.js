class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this._species;
  }

  set species(value) {
    this._species = value;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  constructor() {
    super("Dog");
  }

  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  purr() {
    console.log("purr");
  }
}

// Creating instances and testing methods
const myCat = new Cat();
myCat.makeSound(); // The Cat makes a sound
myCat.purr();      // purr

const myDog = new Dog();
myDog.makeSound(); // The Dog makes a sound
myDog.bark();      // woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
