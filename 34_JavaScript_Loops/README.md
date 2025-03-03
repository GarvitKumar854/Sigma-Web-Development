# 🔄 JavaScript Loops
Loops in JavaScript allow us to execute a block of code multiple times until a specific condition is met. They help in automating repetitive tasks efficiently.

## 1️⃣ for Loop
Used when the number of iterations is known beforehand. It consists of an initialization, condition, and increment/decrement.
```js
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```

## 2️⃣ while Loop
Used when the number of iterations is unknown, and the loop should continue as long as the condition is true.
```js
let i = 1;
while (i <= 5) {
    console.log("Iteration:", i);
    i++;
}
```

## 3️⃣ do...while Loop
This loop executes at least once, even if the condition is false, because the condition is checked after execution.
```js
let i = 1;
do {
    console.log("Iteration:", i);
    i++;
} while (i <= 5);
```

## 4️⃣ for...in Loop
Used to iterate over the properties of an object. It retrieves keys one by one.
```js
const user = { name: "Garvit", age: 20, country: "India" };
for (let key in user) {
    console.log(key, ":", user[key]);
}
```

## 5️⃣ for...of Loop
Designed for iterating over iterable objects like arrays, strings, and sets, returning values directly.
```js
const numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num);
}
```

💡 Loops make repetitive tasks easier! Choose the right loop based on your requirements! 🎯