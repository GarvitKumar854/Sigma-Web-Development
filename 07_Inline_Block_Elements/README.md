# Inline And Block Elements In HTML

## Inline Elements 🚀
Inline elements only take up as much width as necessary, and they do not start on a new line. They are typically used for smaller parts of content within a block element, like a single word or a small section of text.

### Examples of Inline Elements:
- `<a>`: Defines a hyperlink.
- `<span>`: A generic inline container for styling and scripting.
- `<img>`: Embeds an image.
- `<strong>`: Defines important text, usually rendered as bold.
- `<em>`: Defines emphasized text, usually rendered as italic.
- `<br>`: Inserts a line break.
- `<input>`: Defines an input control.
- `<label>`: Defines a label for an `<input>` element.
- `<code>`: Defines a piece of computer code.
- `<abbr>`: Defines an abbreviation or acronym.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline Elements Example</title>
</head>
<body>
    <p>This is a paragraph with an <a href="#">inline link</a>, some <strong>bold text</strong>, and some <em>italic text</em>.</p>
    <p>Here's an image: <img src="image.jpg" alt="An image"></p>
    <p>A line break<br>happens here.</p>
    <p><code>print()</code> is an inline code example.</p>
    <p><abbr title="Hypertext Markup Language">HTML</abbr> is the language of the web.</p>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username">
    </form>
</body>
</html>
```

## Block Elements 📦
Block elements take up the full width available (by default) and always start on a new line. They are used for larger sections of content, such as paragraphs or dividers.


### Examples of Block Elements:
- `<div>`: A generic block container for grouping content.
- `<p>`: Defines a paragraph.
- `<h1>` to `<h6>`: Define headings from level 1 to level 6.
- `<ul>`: Defines an unordered (bulleted) list.
- `<ol>`: Defines an ordered (numbered) list.
- `<li>`: Defines a list item.
- `<table>`: Defines a table.
- `<tr>`: Defines a table row.
- `<td>`: Defines a table cell.
- `<header>`: Defines a header for a document or section.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Block Elements Example</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <h2>An Example of Block Elements</h2>
    </header>
    <div>
        <p>This is a paragraph inside a block container (div).</p>
        <p>Below is a list of items:</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <p>Below is an ordered list:</p>
        <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ol>
        <p>And here is a table:</p>
        <table border="1">
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
            </tr>
            <tr>
                <td>Cell 3</td>
                <td>Cell 4</td>
            </tr>
        </table>
    </div>
</body>
</html>
```
