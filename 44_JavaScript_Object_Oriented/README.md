# JavaScript Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) in JavaScript is a programming paradigm based on the concept of objects. Objects are collections of related data (properties) and methods (functions) that represent real-world entities.

## JavaScript Prototypes in Object-Oriented Programming
In JavaScript, prototypes are a key feature of its object-oriented programming model. Instead of using classical inheritance (like in other languages), JavaScript uses prototype-based inheritance, meaning objects can inherit directly from other objects.

### What is a Prototype?
A prototype is an object from which other objects can inherit properties and methods. Every JavaScript object has an internal property called [[Prototype]], which points to its prototype.

1. Prototype Basics:
    - Every object in JavaScript has a [[Prototype]] (accessed via __proto__).
    - Prototypes allow objects to inherit properties and methods from other objects.
2. Prototype Chain:
     - If a property/method isn't found in an object, JavaScript looks up the prototype chain to find it.
3. Adding Methods via Prototype:
    - Methods added to a prototype are shared among all instances of that object.
    ```js
    function Person(name) {
    this.name = name;
    }
    Person.prototype.sayHello = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
    let john = new Person('John');
    john.sayHello(); // Output: Hello, my name is John
    ```

4. Inheritance Using Prototype:
    - Objects can inherit directly from other objects using Object.create() or by extending prototypes.
    ```js
    let animal = { eat: function() { console.log('Eating...'); } };
    let dog = Object.create(animal);
    dog.bark = function() { console.log('Barking...'); };
    dog.eat(); // Output: Eating...
    dog.bark(); // Output: Barking...
    ```

## Classes and Objects in JavaScript
JavaScript supports **Object-Oriented Programming (OOP)**, and classes and objects are its core concepts. Here's a simple explanation:

### 1. Classes
- A **class** is a blueprint for creating objects.
- It defines the properties and methods that the objects created from it will have.
- Introduced in ES6, the class syntax is a more structured way to handle objects and inheritance.
**Syntax:**
```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
```
- **Constructor**: The constructor method initializes the properties of an object when it's created.
- **Methods**: Functions defined within the class.

### 2. Objects
- An object is an instance of a class.
- It contains properties (data) and methods (functions) defined by its class.
**Creating an Object:**
```js
let person1 = new Person('John', 25);
person1.greet(); // Output: Hi, my name is John and I am 25 years old.
```

### Inheritance
Classes can inherit properties and methods from other classes using the `extends` keyword.
**Example:**
```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

let myDog = new Dog('Rex', 'Golden Retriever');
myDog.speak(); // Output: Rex makes a sound.
myDog.bark(); // Output: Rex barks.
```

#### Practical Example
```js
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    details() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

let myCar = new Car('Toyota', 'Corolla', 2021);
console.log(myCar.details()); // Output: Toyota Corolla (2021)
```

### Method Overriding
**Method overriding** occurs when a subclass provides a specific implementation of a method that is already defined in its parent class. The subclass method takes precedence when called on an instance of the subclass.
#### Key Points:
- The method in the subclass must have the **same name, parameters, and return type** as the method in the parent class.
- It allows subclasses to provide specialized behavior for methods inherited from the parent.
**Example:**
```js
class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

let myDog = new Dog();
myDog.speak(); // Output: Dog barks (overrides parent method)
```