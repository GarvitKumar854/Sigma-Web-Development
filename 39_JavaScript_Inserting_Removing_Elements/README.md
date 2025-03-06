# Inserting and Removing Elements using JavaScript
JavaScript provides several methods to dynamically insert and remove elements in the DOM. Here are some common techniques:

1. `innerHTML`
- Purpose: Gets or sets the HTML content of an element, including HTML tags.
- Usage: Useful for inserting or replacing elements, attributes, and text within the element.
```js
let element = document.querySelector('div');
element.innerHTML = '<p>New Content</p>';
console.log(element.innerHTML); // Output: <p>New Content</p>
```

2. `innerText`
- Purpose: Gets or sets the text content of an element, excluding HTML tags. It only includes human-readable text.
- Usage: Useful for manipulating text content without affecting HTML structure.
```js
let element = document.querySelector('div');
element.innerText = 'New Text';
console.log(element.innerText); // Output: New Text
```


3. `outerHTML`
- Purpose: Gets or sets the HTML content of an element, including the element itself.
- Usage: Useful for replacing the entire element, including its attributes and content.
```js
let element = document.querySelector('div');
element.outerHTML = '<section>Replaced Element</section>';
console.log(element.outerHTML); // Output: <section>Replaced Element</section>
```

4. `tagName`
- Purpose: The tagName property is used to get the tag name of an element. This property returns the tag name of the element as a string, in uppercase letters.
- Usage: It can be useful when you need to identify the type of an element in the DOM, especially when handling events or traversing the DOM.
```js
let element = document.querySelector('div');
console.log(element.tagName); // Output: DIV
```

5. `nodeName`
Purpose: The nodeName property returns the name of the current node as a string. For element nodes, it returns the tag name of the element (in uppercase). For other types of nodes, it returns different values (e.g., #text for text nodes, #comment for comment nodes).
Usage: It can be useful when you need to identify the type of a node in the DOM.
```js
let element = document.querySelector('div');
console.log(element.nodeName); // Output: DIV

let textNode = document.createTextNode('Hello');
console.log(textNode.nodeName); // Output: #text
```

6. `textContent`
Purpose: The textContent property gets or sets the text content of a node and all its descendants. It returns a concatenation of the text content of all child nodes.
Usage: Useful for retrieving or updating the textual content of an element, including all its children, without any HTML tags.
```js
let element = document.querySelector('div');
element.textContent = 'New Text Content';
console.log(element.textContent); // Output: New Text Content
```

7. `hidden`
- Purpose: The hidden attribute in HTML is used to specify that an element is not relevant or should not be displayed.
- Usage: When applied, the element with the hidden attribute will be rendered but not visible in the layout, effectively hiding it from the user.
```js
let element = document.getElementById("myElement");
element.hidden = false; // This will show the element
```

8. `hasAttribute`
- Purpose: The hasAttribute method is used to determine whether an element has a specified attribute. It returns a boolean value (true or false).
- Usage: This method is useful when you need to check if an attribute is present on an element before performing an action based on its presence.
```js
let element = document.querySelector('div');
if (element.hasAttribute('id')) {
    console.log('Element has an ID attribute');
} else {
    console.log('Element does not have an ID attribute');
}
```

9. `getAttribute`
- Purpose: The getAttribute method is used to retrieve the value of a specified attribute from an element.
- Usage: This method is useful when you need to access the value of an attribute, such as id, class, href, src, or any custom attribute, for further processing or manipulation.
```js
let element = document.querySelector('a');
let hrefValue = element.getAttribute('href');
console.log(hrefValue); // Output: the URL specified in the href attribute
```

10. `setAttribute`
- Purpose: The setAttribute method is used to add a new attribute or change the value of an existing attribute on an element.
- Usage: This method is useful when you need to dynamically modify the attributes of an element, such as id, class, href, src, or any custom attribute.
```js
let element = document.querySelector('a');
element.setAttribute('href', 'https://www.example.com');
console.log(element.getAttribute('href')); // Output: https://www.example.com
```

11. `attributes`
- Purpose: The attributes property is a collection of all attribute nodes of an element. It provides a way to access and manipulate an element's attributes as an array-like object.
- Usage: This property is useful when you need to iterate over all attributes of an element or access specific attributes programmatically.
```js
let element = document.querySelector('div');
let attrs = element.attributes;

for (let i = 0; i < attrs.length; i++) {
    console.log(attrs[i].name + ' = ' + attrs[i].value);
}

// Output: Lists all attributes of the <div> element with their names and values
```

12. `removeAttribute`
- Purpose: The removeAttribute method is used to remove a specified attribute from an element.
- Usage: This method is useful when you need to dynamically remove an attribute from an element, such as id, class, href, src, or any custom attribute.
```js
let element = document.querySelector('div');
element.removeAttribute('id');
console.log(element.hasAttribute('id')); // Output: false
```

## Insertion Methods
```js
let div = document.createElement('div')     // create
div.classname = "alert"                     // set class
div.innerHTML = "<span>Hello</span>
document.body.append(div) 
```
Here are some more insertion methods:
1. `node.append(e)`: append at the end of node.
2. `node.prepend(e)`: Insert at the beginning of node.
3. `node.before(e)`: Insert before node.
4. `node.after(e)`: Insert after node.
5. `node.replaceWith(e)`: replaces node with the given node.

### insertAdjacentHTML / Text / Element
This method is used to insert HTML. The first parameter is a code word, specifying where to insert. Must be one of the following:

1. `beforebegin`: Insert HTML immediately before element.
2. `afterbegin`: Insert HTML into element at the beginning.
3. `beforeend`: Insert HTML into element at the end.
4. `afterend`: insert HTML immediately after element.

Example:
```html
<div id="div"></div>
<script>
    div.insertAdjacentHTML("beforebegin","<p>Hello</p>");
    div.insertAdjacentHTML("afterend","<p>Bye</p>");
</script>
<!-- The output would be: -->
<p>Hello</p>
<div id="div"></div>
<p>Bye</p>
```

## Node removal
To remove a node, there's a method node.remove()
```js
let id1 = document.getElementById("id1");
id1.remove()
```

## ClassName and Class
If we assign something to element.classname, it replaces the whole string of classes.
Often we want to add/remove/toggle a single class
1. `element.classList.add/remove("class")`: Adds/remove a class.
2. `element.classList.toggle("class")`: Adds the class if it doesn't exist, otherwise removes it.
3. element.classList.contains("class"): Checks for the given class, returns true/false.


