# Introduction to 🖌️ CSS 
CSS, or Cascading Style Sheets, is a stylesheet language used for describing the presentation of a document written in HTML or XML. CSS controls how elements on a web page are displayed, including layout, colors, fonts, and other visual aspects.

##  Key Features of CSS
- Styling: Allows you to apply styles to HTML elements, such as colors, fonts, and backgrounds.
- Layout: Helps create responsive layouts using features like flexbox and grid.
- Separation of Concerns: Separates content (HTML) from presentation (CSS), making it easier to maintain and update the website.

## ✨ What is Selectors ?
In CSS, selectors are used to target and style HTML elements. Here are some common types of selectors with brief examples:
- ### **ID Selector**: Targets an element with a specific `id`.
```css
#header {
    color: blue;
}
```

- ### **Class Selector**: Targets elements with a specific `class`.
```css
.menu {
    font-size: 18px;
}
```

- ### **Element Selector**: Targets all instances of an element.
```css
p {
    line-height: 1.5;
}
```

- ### **Descendant Selector**: Targets elements that are descendants of a specified element.
```css
div p {
    color: green;
}
```

- ### **Child Selector**: Targets elements that are direct children of a specified element.
```css
ul > li {
    list-style-type: none;
}
```

- ### **Attribute Selector**: Targets elements with a specified attribute.
```css
input[type="text"] {
    border: 1px solid #ccc;
}
```
- ### **Universal Selector**: Targets all elements on a page.
```css
* {
    margin: 0;
    padding: 0;
}
```

- ### **Pseudo-class Selector**: Targets elements based on their state.
```css
a:hover {
    color: red;
}
```


## Methods to use CSS
There are three primary methods to use CSS in your website:
### 1. Inline CSS 🎨
CSS styles are applied directly within an HTML element using the `<style>` attribute.
**Example:**
```html
<p style="color: blue; font-size: 20px;">This is a blue paragraph.</p>
```

### 2. Internal CSS 🏠
CSS rules are defined within a `<style>` tag in the `<head>` section of the HTML document. This method is useful for applying styles to a single page.
**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        body {
            background-color: lightgray;
        }
        h1 {
            color: darkblue;
        }
        p {
            color: darkgreen;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is an example of internal CSS.</p>
</body>
</html>
```

### 3. External CSS 🌐
CSS rules are defined in an external stylesheet, which is linked to the HTML document using the `<link>` tag. This method is ideal for applying consistent styles across multiple pages.
**Example:**
1. Create a CSS file named `style.css`:
```CSS
body {
    background-color: lightgray;
}
h1 {
    color: darkblue;
}
p {
    color: darkgreen;
}
```
2. Link the CSS file in your HTML document:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is an example of external CSS.</p>
</body>
</html>
```