# JavaScript Events
**Events** in JavaScript are actions or occurrences that happen in the browser, which JavaScript can respond to. These events can be triggered by user interactions such as clicking a button, pressing a key, or scrolling the page, as well as other actions like loading a page or an image.<br>
## `addEventListener`
The `addEventListener` method attaches an event handler to an element, allowing you to define what happens when a specific event occurs.
### Common JavaScript Events
1. Mouse Events:
    - `click`: Fires when an element is clicked.
    - `dblclick`: Fires when an element is double-clicked.
    - `mouseover`: Fires when the mouse pointer is over an element.
    - `mouseout`: Fires when the mouse pointer leaves an element.
    ```js
    let button = document.querySelector('button');
    button.addEventListener('click', function() {
    alert('Button clicked!');
    });
    ```

2. Keyboard Events:
    - `keydown`: Fires when a key is pressed.
    - `keyup`: Fires when a key is released.
    ```js
    document.addEventListener('keydown', function(event) {
        console.log('Key pressed: ' + event.key);
    });
    ```

3. Form Events:
- `submit`: Fires when a form is submitted.
- `change`: Fires when the value of an input or select element is changed.
    ```js
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
    ```

4. Window Events:
    - `load`: Fires when the entire page has loaded.
    - `resize`: Fires when the browser window is resized.
    - `scroll`: Fires when the page is scrolled. 
    ```js
    window.addEventListener('load', function() {
        console.log('Page loaded!');
    });

    window.addEventListener('resize', function() {
        console.log('Window resized!');
    });
    ```

5. Focus Events:
    `focus`: Fires when an element gains focus.
    `blur`: Fires when an element loses focus.
    ```js
    let input = document.querySelector('input');
    input.addEventListener('focus', function() {
        console.log('Input focused');
    });

    input.addEventListener('blur', function() {
        console.log('Input lost focus');
    });
    ```

### Event Bubbling
**Event Bubbling** is a concept where an event starts from the deepest target element and then bubbles up to its parent elements, continuing up the DOM tree. This means an event triggers on the target element first and then on each parent element in sequence.
**Example:**
```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener("click", function() {
        alert("Parent Div Clicked");
    });

    document.getElementById("child").addEventListener("click", function(event) {
        alert("Child Button Clicked");
        event.stopPropagation(); // Stops the event from bubbling up
    });
</script>
```
In this example, clicking the child button triggers its event handler first, and then the event bubbles up to the parent element, unless `event.stopPropagation()` is used to stop the bubbling process.<br>
Event bubbling allows for efficient event handling by using event delegation and ensures that events can be managed effectively in complex DOM hierarchies.

## `removeEventListener`
The removeEventListener method removes a previously attached event handler from an element, stopping it from being triggered by future events.
**Example:**
```js
function handleClick() {
    alert('Element clicked!');
}

let element = document.querySelector('button');
element.addEventListener('click', handleClick);

// Remove the event listener
element.removeEventListener('click', handleClick);
```

#### `setInterval`
Repeatedly executes a function at specified intervals (in milliseconds).
##### Example
```js
let count = 0;
let intervalId = setInterval(function() {
    console.log('Interval message: ' + count);
    count++;
}, 1000);
```

#### `clearInterval`
Stops the execution of a function set by setInterval.
##### Example
```js
let count = 0;
let intervalId = setInterval(function() {
    console.log('Interval message: ' + count);
    count++;
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval after 5 executions
    }
}, 1000);
```

#### `setTimeout`
Executes a function once after a specified delay (in milliseconds).
##### Example
```js
setTimeout(function() {
    console.log('This message is shown after 2 seconds');
}, 2000);
```

#### `clearTimeout`
Cancels a function set by setTimeout before it executes.
##### Example
```js
let timeoutId = setTimeout(function() {
    console.log('This message will not be shown');
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout before it executes
```

