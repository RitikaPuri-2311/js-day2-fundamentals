"use strict"
//class syntax
class User {
  // constructor — runs when you create a new User
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // regular method
  greet() {
    return `Hi, I am ${this.name} and I am ${this.age} years old!`;
  }

  // another method
  getInfo() {
    return `${this.name} | ${this.email}`;
  }

  // static method — called on class itself, not on instance
  static create(name, age, email) {
    return new User(name, age, email);
  }
}

// Creating instances
const user1 = new User("Ritika", 22, "ritika@mail.com");
const user2 = new User("Ram", 24, "ram@mail.com");

console.log(user1.greet());
console.log(user2.getInfo());

// Static method — called on User directly
const user3 = User.create("Anjali", 21, "anjali@mail.com");
console.log("Static create →", user3.name);

// INHERITANCE — extends & super

// Parent class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}!`;
  }
}

// Child class — inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");  // super calls parent constructor
    this.breed = breed;
  }

  // extra method only Dog has
  fetch() {
    return `${this.name} fetches the ball`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "Meow");
  }

  purr() {
    return `${this.name} is purring.`;
  }
}

const dog = new Dog("Bruno", "Labrador");
const cat = new Cat("Whiskers");

console.log(dog.speak());  // inherited from Animal
console.log(dog.fetch());  // Dog's own method
console.log(cat.speak());  // inherited from Animal
console.log(cat.purr());   // Cat's own method


// REAL WORLD EXAMPLE — Student extends User

class Student extends User {
  constructor(name, age, email, course, grade) {
    super(name, age, email); // call User constructor
    this.course = course;
    this.grade = grade;
  }

  // override parent method
  greet() {
    return `Hi, I am ${this.name}, studying ${this.course}!`;
  }

  getReport() {
    return `${this.name} | ${this.course} | Grade: ${this.grade}`;
  }
}

const student = new Student("Ritika", 22, "ritika@mail.com", "JavaScript", "A+");

console.log(student.greet());      // overridden method
console.log(student.getInfo());    // inherited from User
console.log(student.getReport());  // Student's own method


// PROTOTYPE CHAIN — what's actually happening
// Every object has a prototype chain

console.log(student instanceof Student); // true
console.log(student instanceof User);    // true — because Student extends User
console.log(student instanceof Animal);  // false

