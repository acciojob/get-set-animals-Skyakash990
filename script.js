class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this.species;
  }

  set species(value) {
    this.species = value;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}


const myCat = new Cat("Siamese");
myCat.makeSound(); // The Cat makes a sound
myCat.purr();     

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Dog makes a sound
myDog.bark();      // woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
