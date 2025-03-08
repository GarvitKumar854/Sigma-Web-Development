# JavaScript Async/Await & Fetch API

## Async/Await in JavaScript
**Async/Await** is a syntactic sugar built on Promises, making asynchronous code look and behave more like synchronous code, improving readability and reducing complexity.

**Async** Function
An `async` function is a function declared with the async keyword, enabling the use of the await keyword inside it.

**Await**
The `await` keyword pauses the execution of an async function, waiting for a Promise to resolve or reject before resuming.

**Example:**
```js
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

## Fetch API
The Fetch API provides a modern way to make network requests, similar to XMLHttpRequest but with a more powerful and flexible feature set. It returns a Promise that resolves to the Response object representing the response to the request.

**Example:**
```js
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
```