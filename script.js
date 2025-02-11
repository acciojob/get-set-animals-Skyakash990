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


const myCat = new Cat(Species);
myCat.makeSound();
myCat.purr();     

const myDog = new Dog(Species);
myDog.makeSound();
myDog.bark();   

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
