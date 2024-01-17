import { Animal } from "./model.js";
const cat = new Animal("Cat", "5");
console.log(cat);
cat.setAge();
console.log(cat);
cat.getAge();

////

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age);
    this.color = color;
    this.legs = legs;
  }
  getInfo() {
    console.log(
      `Breed:${this.name} age: ${this.age}, fur color: ${this.color}, legs: ${this.legs}`
    );
  }
}
const dog = new Dog("Hasky", 3, "gray and white", 4);
dog.getInfo();
dog.getAge();
console.log(dog);
dog.setAge();
console.log(dog);
