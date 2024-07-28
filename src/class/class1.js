class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() { }
  wagTail() { }
}

const dog1 = new Dog("hello", "labrador");
const dog2 = new Dog("world", "Dalmatian");

console.log(dog1.wagTail === dog2.wagTail)

console.log(Object.getPrototypeOf(dog1))


// name and breed are not in the prototype of Dog
//
// dog1.bark = Dog.prototype.bark
// dog1.wagTail = Dog.prototype.wagTail
// dog1.name, dog1.breed -> in dog1 instance
