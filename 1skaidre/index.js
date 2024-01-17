//1

class Person {
  constructor(vardas, pavarde, amzius, emailas) {
    this.name = vardas;
    this.lastName = pavarde;
    this.age = amzius;
    this.email = emailas;
  }
  getPersonInfo() {
    console.log(
      `Mano vardas ${this.name}, pavarde ${this.lastName}. Man yra ${this.age} metu, parasyk man laiska elektronini laiska i ${this.email}. Lauksiu:))`
    );
  }
}
const jonas = new Person("Jonas", "Jonaitis", 25, "jonukas@one.lt");
console.log(jonas);
jonas.getPersonInfo();
const marija = new Person("Marija", "Naujokaite", "22", "maryte@gmail.com");
console.log(marija);
marija.getPersonInfo();

//2

class Animal {
  static greeting() {
    console.log("I am an animal");
  }
}
const minotauras = new Animal();
console.log(minotauras);
Animal.greeting();

//3

//person jau turim is pirmos uzd

class Student extends Person {
  constructor(vardas, pavarde, amzius, kursas, vidurkis) {
    super(vardas, pavarde, amzius);
    this.course = kursas;
    this.average = vidurkis;
  }
  printStudentInfo() {
    console.log(
      `Mano vardas ${this.name}, pavarde ${this.lastName}. Man yra ${this.age} metu, esu ${this.course} kurso studentas, mano vidurkis ${this.average}.`
    );
  }
}
const jonasStudentas = new Student("Jonas", "Jonaitis", 25, "JavaScript", 8);
jonasStudentas.printStudentInfo();

//4

class Teacher extends Person {
  constructor(vardas, pavarde, amzius, dalykas, alga) {
    super(vardas, pavarde, amzius);
    this.subject = dalykas;
    this.salary = alga;
    this.topics = [];
  }
  isHappy() {
    if (this.salary > 1200) {
      console.log("Hoooray!");
    } else if (this.salary > 800) {
      console.log("Not bad");
    } else {
      console.log("Fck this job");
    }
  }
  setTopic(topikas) {
    this.topics.push(topikas);
  }
  getTopics() {
    this.topics.forEach((el) =>
      console.log(`Mokytojas ${this.name} desto: ${el}`)
    );
  }
}
const mokytojas1 = new Teacher("Jonas", "Jonaitis", 25, "JavaScript", 2500);
console.log(mokytojas1);

mokytojas1.isHappy();

mokytojas1.setTopic("OOP");
console.log(mokytojas1);

const topikai = ["oop", "array", "xxxx", "yyyy"];
topikai.forEach((topic) => mokytojas1.setTopic(topic));
mokytojas1.getTopics();

///2 skaidre
