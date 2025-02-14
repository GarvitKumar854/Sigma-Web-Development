# 🪪 ID And 🗂️ Classes In HTML
IDs and classes in HTML are used to uniquely identify elements and group them for styling and scripting purposes. Here's a brief overview:

## ID Attribute 🆔
- Purpose: Uniquely identifies an element.
- Usage: Each ID must be unique within a document. Commonly used for styling a specific element with CSS or for selecting an element with JavaScript.
- Syntax: The `id` attribute is added to an HTML tag.
```html
<div id="header">This is the header</div>
```

## Class Attribute 🏷️
- Purpose: Groups elements that share the same styles or behaviors.
- Usage: Multiple elements can have the same class, and an element can have multiple classes. Useful for applying the same styles to multiple elements.
- Syntax: The class attribute is added to an HTML tag.
```html
<div class="container">This is a container</div>
<p class="container">This paragraph is also in a container</p>
```

## CSS and JavaScript Usage 📜
### CSS Example
```css
#header {
  background-color: lightblue;
}

.container {
  border: 1px solid black;
}
```

### JavaScript Example
```js
// Select an element by ID
const headerElement = document.getElementById("header");

// Select elements by class
const containerElements = document.getElementsByClassName("container");
```