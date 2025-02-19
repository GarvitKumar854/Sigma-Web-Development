# CSS Media Queries
CSS Media Queries are a powerful feature that allows you to apply styles based on specific conditions, such as the size of the viewport, the resolution of the device, or other media features. They enable you to create responsive designs that adapt to different screen sizes and devices.

**Syntax**
A Media Query consists of a media type (e.g., `screen`, `print`) and one or more conditions, called media features.

**Example:**
```css
@media (min-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

**Example with Multiple Media Queries:**
Here's a practical example using multiple media queries to create a responsive layout:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Media Queries Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            width: 100%;
            padding: 20px;
        }

        /* Styles for small screens */
        @media (max-width: 599px) {
            .container {
                background-color: lightblue;
                font-size: 14px;
            }
        }

        /* Styles for medium screens */
        @media (min-width: 600px) and (max-width: 1199px) {
            .container {
                background-color: lightgreen;
                font-size: 16px;
            }
        }

        /* Styles for large screens */
        @media (min-width: 1200px) {
            .container {
                background-color: lightcoral;
                font-size: 18px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Design with Media Queries</h1>
        <p>Resize the browser window to see the background color and font size change based on the viewport width.</p>
    </div>
</body>
</html>
```