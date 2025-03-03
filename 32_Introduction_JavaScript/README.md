# Introduction 📝 to JavaScript <img src="https://github.com/user-attachments/assets/9c1f4164-152b-4872-aa68-bae40d023602" width="25px">

JavaScript is a versatile, high-level programming language that is widely used to create dynamic and interactive web content. It is one of the core technologies of web development, alongside HTML and CSS. Here, we'll cover the basics of JavaScript to get you started.

## 🔑 Key Features of JavaScript:
- **Interactivity**: JavaScript enables interactive elements on web pages, such as forms, animations, and games.
- **Client-Side**: It primarily runs on the client-side (in the user's browser), allowing for immediate responses to user actions.
- **Versatility**: JavaScript can be used for both frontend (client-side) and backend (server-side) development.
- **Event-Driven**: It supports event-based programming, enabling developers to execute code in response to user actions.


## Variables 🔡 in JavaScript 
Variables in JavaScript are containers that store data values. They allow you to name and manipulate data, making your code more readable and maintainable. You can think of a variable as a labeled box that holds a value.

### ✍ Declaring Variables
JavaScript variables can be declared using `var`, `let`, or `const`.

- `var`: Function-scoped, can be redeclared and updated.
- `let`: Block-scoped, can be updated but not redeclared.
- `const`: Block-scoped, cannot be updated or redeclared.

## 📦 Datatypes in JavaScript
There are 7 Primitive Datatypes, and 2 Object's Datatypes:
1. **String**: Text data.
2. **Number**: Numeric data.
3. **Boolean**: Logical data (true or false).
4. **Null**: Intentional absence of any value.
5. **Undefined**: Variable declared but not assigned a value.
6. **Object**: Collection of key-value pairs.
7. **Array**: Ordered collection of values.
8. **Symbol**: Unique and immutable value.
9. **BigInt**: Integer with arbitrary precision.

**Example:**
```js
let message = "Hello, World!"; // String
let score = 42; // Number
let isActive = true; // Boolean
let emptyValue = null; // Null
let unassigned; // Undefined

let person = { // Object
    name: "Alice",
    age: 25
};

let numbers = [1, 2, 3, 4, 5]; // Array

let uniqueID = Symbol("id"); // Symbol

let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

console.log(message, score, isActive, emptyValue, unassigned, person, numbers, uniqueID, bigNumber);
```