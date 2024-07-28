class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.wagTail = () => {
      return "Wagging tail";
    };
  }

  bark() {
    return "Woof!";
  }
}

const dog1 = new Dog("hello", "labrador");
const dog2 = new Dog("world", "Dalmatian");

const log = console.log;

log(dog1.wagTail() === dog2.wagTail());
log(dog1.wagTail === dog2.wagTail);
log(dog1.bark === dog2.bark);
log(Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2));
log(dog1.constructor === dog2.constructor);
