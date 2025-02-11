class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  // set specie(value) {
  //   this.species = value;
  // }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// const myCat = new Cat(Species);
// myCat.makeSound();
// myCat.purr();     

// const myDog = new Dog(Species);
// myDog.makeSound();
// myDog.bark();   

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
