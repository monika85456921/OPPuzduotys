export class Animal {
  constructor(name, age, legs) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
}

export class Bird extends Animal {
  constructor(name, age, wings, feathers, beak) {
    super(name, age, legs);
    (this.wings = wings), (this.feathers = feathers), (this.beak = beak);
  }
}

export class Cat extends Animal {
  constructor(name, age, fur, tail, whiskers) {
    super(name, age, legs);
    (this.fur = fur), (this.tail = tail), (this.whiskers = whiskers);
  }
}

export class Fish extends Animal {
  constructor(name, age, fins, scales, whiskers) {
    super(name, age, legs);
    (this.fins = fins), (this.scales = scales), (this.whiskers = whiskers);
  }
}
