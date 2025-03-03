# ⚡ Functions in JavaScript 

Functions in JavaScript allow you to **group reusable code** into a single block, making your programs more **efficient, modular, and easy to manage**.  

---

### 1️⃣ **Function Declaration**  
A named function that can be called **anywhere in the script** due to **hoisting**.  
```js
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Garvit"));
```

### 2️⃣ Function Expression
A function stored in a variable; not hoisted.
```js
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Garvit"));
```

### 3️⃣ Arrow Function (ES6)
A shorter syntax for writing functions.
```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Garvit"));
```

### 4️⃣ Immediately Invoked Function Expression (IIFE)
Executes immediately after definition.
```js
(function() {
    console.log("IIFE executed!");
})();
```

### 5️⃣ Higher-Order Function
A function that takes another function as an argument or returns a function.
```js
function operate(a, b, func) {
    return func(a, b);
}
const add = (x, y) => x + y;
console.log(operate(5, 3, add));
```

### 6️⃣ Callback Function
A function passed as an argument to another function.
```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 2000);
}
fetchData(console.log);
```
💡 Functions make code reusable and maintainable! Use them wisely! 🎯
