# JavaScript Callbacks & Promises

## Asynchronous Nature of JavaScript
JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, it handles asynchronous operations efficiently using event-driven programming, enabling non-blocking execution. This allows JavaScript to perform tasks like fetching data from an API, reading files, or handling user interactions without freezing the main thread.

### 1. **Callbacks**: A function passed as an argument to another function, executed after the completion of an asynchronous task.
```js
setTimeout(function() {
    console.log('This message is shown after 2 seconds');
}, 2000);
```

### 2. **Promises**: An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
```js
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Done!'), 2000);
});

promise.then(function(result) {
    console.log(result); // Output: Done!
});
```

### `then` and `catch` in Promises
`.then`: The then method handles the successful resolution of a promise, allowing chaining of multiple asynchronous operations.<br>
##### **Example:**
```js
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Success!'), 1000);
});

promise.then(function(result) {
    console.log(result); // Output: Success!
});
```

`.catch`: The `catch` method handles errors or rejections of a promise, providing a way to manage asynchronous errors.<br>
**Example:**
```js
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject('Error!'), 1000);
});

promise
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error); // Output: Error!
});
```

`.finally`: The `.finally` method in JavaScript is used to execute a callback function once a promise is settled, regardless of whether it was fulfilled or rejected. It is useful for performing cleanup actions or final steps that need to happen regardless of the outcome of the promise.
```js
let promise = new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation
    setTimeout(() => resolve('Success!'), 1000);
    // To test rejection, replace with: setTimeout(() => reject('Error!'), 1000);
});

promise
.then(function(result) {
    console.log(result); // Output: Success!
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log('This will always be executed'); // Output: This will always be executed
});
```

### Promise APIs in JavaScript
#### 1. `Promise.all`
Waits for all promises to resolve, returning a single promise that resolves to an array of results.<br>
##### **Example:**
```js
Promise.all([Promise.resolve('First'), Promise.resolve('Second')]).then(results => console.log(results)); // Output: ['First', 'Second']
```

#### 2. `Promise.race`
Waits for the first promise to settle, returning a single promise with the result of the first settled promise.<br>
##### **Example:**
```js
Promise.race([Promise.resolve('First'), new Promise(resolve => setTimeout(resolve, 500, 'Second'))])
    .then(result => console.log(result)); // Output: 'First'
```

#### 3. `Promise.allSettled`
Waits for all promises to settle (resolve or reject), returning a single promise with an array of outcomes.<br>
##### **Example:**
```js
Promise.allSettled([Promise.resolve('First'), Promise.reject('Error')])
    .then(results => console.log(results)); 
    // Output: [{status: 'fulfilled', value: 'First'}, {status: 'rejected', reason: 'Error'}]
```
#### 4. `Promise.any`
Waits for the first fulfilled promise, returning a single promise with that value, or rejects if all are rejected.<br>
##### **Example:**
```js
Promise.any([Promise.reject('Error 1'), Promise.resolve('Second')])
    .then(result => console.log(result)); // Output: 'Second'
```



