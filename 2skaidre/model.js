export class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  setAge() {
    this.age++;
  }
  getAge() {
    console.log(`${this.name} age is ${this.age}`);
  }
}
