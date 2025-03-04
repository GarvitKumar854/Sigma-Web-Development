# JavaScript 📜 Document 🧊 Object Model
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to interact with and manipulate the content, structure, and style of web pages dynamically. The DOM provides a way for JavaScript to access and update the content, structure, and style of a document while it is being viewed.

## Key Concepts of the DOM
1. **Nodes and Elements:**
- Node: The basic unit of the DOM. There are different types of nodes, such as element nodes, text nodes, and attribute nodes.
- Element: A specific type of node that represents an HTML element (e.g., `<div>`, `<p>`).

2. **Tree Structure:**
- The DOM represents a document as a hierarchical tree structure.
- Each node in the tree can have child nodes, creating a parent-child relationship.
- The root node of the tree is the document itself.

3. **Accessing DOM Elements:** JavaScript provides various methods to access and manipulate `DOM` elements.
    - `getElementById`: Selects an element by its ID.
    - `getElementsByClassName`: Selects all elements with a specific class name.
    - `getElementsByTagName`: Selects all elements with a specific tag name.
    - `querySelector`: Selects the first element that matches a CSS selector.
    - `querySelectorAll`: Selects all elements that match a CSS selector.

4. **Manipulating DOM Elements**: JavaScript can be used to change the content, style, and attributes of DOM elements.
    - Changing Content:
    ```js
    let element = document.getElementById("myElement");
    element.innerHTML = "New Content";
    ```

    - Changing Style:
    ```js
    let element = document.getElementById("myElement");
    element.style.color = "red";
    ```

    - Adding/Removing Classes:
    ```js
    let element = document.getElementById("myElement");
    element.classList.add("newClass");
    element.classList.remove("oldClass");
    ```

    - Adding/Removing Elements:
    ```js
    // Adding a new element
    let newElement = document.createElement("div");
    newElement.innerHTML = "Hello, World!";
    document.body.appendChild(newElement);

    // Removing an element
    let elementToRemove = document.getElementById("myElement");
    elementToRemove.parentNode.removeChild(elementToRemove);
    ```

