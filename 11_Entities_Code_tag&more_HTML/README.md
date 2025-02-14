# ✨ Entities, </> Code tag & More on HTML
Entities in HTML are special codes that represent characters or symbols that are not easily typed on a keyboard or could be interpreted as HTML code. These entities start with an ampersand (&) and end with a semicolon (;).

## Common HTML Entities
- **Space** (`&nbsp;`)
Description: Non-breaking space, used to create additional spaces in text.

- **Less Than** (`&lt;`)
Description: Represents the less-than sign (<).

- **Greater Than** (`&gt;`)
Description: Represents the greater-than sign (>).

- **Ampersand** (`&amp;`)
Description: Represents the ampersand symbol (&).

- **Quotation Mark** (`&quot;`)
Description: Represents the double quotation mark (").

- **Apostrophe** (`&apos;`)
Description: Represents the apostrophe or single quote (').

- **Copyright** (`&copy;`)
Description: Represents the copyright symbol (©).

- **Registered Trademark** (`&reg;`)
Description: Represents the registered trademark symbol (®).

- **Euro Sign** (`&euro;`)
Description: Represents the euro currency symbol (€).

- **Cent Sign** (`&cent;`)
Description: Represents the cent symbol (¢).


**Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Entities Example</title>
</head>
<body>
    <p>Use &lt; and &gt; to display less than and greater than signs.</p>
    <p>Use &quot; for double quotes and &apos; for single quotes.</p>
    <p>&copy; 2025 Your Company. All rights reserved.</p>
</body>
</html>
```

## `pre` tag
The `<pre>` tag in HTML is used to define preformatted text. Text within this tag is displayed in a fixed-width font (usually Courier) and preserves both spaces and line breaks. This tag is often used to display code blocks or formatted text where white spaces are important.

**Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preformatted Text Example</title>
</head>
<body>
    <h1>Example of Preformatted Text</h1>
    <pre>
        This is an example of preformatted text.
        The spaces and line breaks are preserved.
        function example() {
            console.log("Hello, world!");
        }
    </pre>
</body>
</html>
```