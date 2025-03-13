# JavaScript try catch & ❌ Error Handling ✓
Error handling in JavaScript ensures that unexpected runtime errors can be gracefully managed without crashing the application. The try...catch block is a common structure used for error handling in JavaScript.

## `try...catch` Syntax
```js
try {
    // Code that may throw an error
} catch (error) { 
    // Code to handle the error
}
```
- try block: Contains code that may potentially throw an error.
- catch block: Contains code to handle the error if it occurs. The error parameter gives details about what went wrong.

### Example of `try...catch`
```js
try {
    let result = 10 / 0; // This won't throw an error (just Infinity)
    console.log('Result:', result);

    // A deliberate error
    let undefinedVar = undefinedVar + 1; // This will throw an error
} catch (error) {
    console.log('An error occurred:', error.message);
}
```

## Using finally
The finally block is optional and will always execute regardless of whether an error was thrown or not.
```js
try {
    let result = 5 / 0;
    console.log('Result:', result);
} catch (error) {
    console.log('Error:', error.message);
} finally {
    console.log('This will always execute');
}
```

## Throwing Custom Errors
You can manually throw an error using the throw keyword.
```js
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log('Error:', error.message);
}
```

