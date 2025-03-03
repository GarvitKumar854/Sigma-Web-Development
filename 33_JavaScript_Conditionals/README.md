# JavaScript Conditionals
JavaScript conditionals allow you to execute different blocks of code based on specific conditions. They are essential for creating interactive and dynamic web applications. Here are the primary types of conditional statements in JavaScript:

1. `if` Statement
The if statement executes a block of code if a specified condition is true.
```js
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
```

2. `if...else` Statement
The `if...else` statement executes one block of code if the condition is true, and another block if the condition is false.
```js
let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

3. `else if` Statement
The `else if` statement allows you to check multiple conditions.
```js
let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}
```

4. `switch` Statement
The `switch` statement evaluates an expression and executes the corresponding block of code based on the value of the expression.
```js
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
```

5. Ternary Operator
The ternary operator is a shorthand for the `if...else` statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
```js
let age = 18;
let status = (age >= 18) ? "adult" : "minor";
console.log(status); // Output: adult
```

