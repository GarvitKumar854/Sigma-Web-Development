# CSS Float & Clear

## CSS Float
The `float` property in CSS is used to position an element to the left or right of its container, allowing other content to wrap around it. This property is commonly used for creating layouts with images, text, and other elements.

## CSS Clear
The `clear` property is used to control the behavior of an element with respect to floating elements. It ensures that an element does not wrap around a floated element.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Float and Clear Example</title>
    <style>
        .container {
            border: 1px solid #ddd;
            padding: 20px;
        }
        .left-float {
            float: left;
            width: 100px;
            height: 100px;
            background-color: lightblue;
            margin: 10px;
        }
        .right-float {
            float: right;
            width: 100px;
            height: 100px;
            background-color: lightgreen;
            margin: 10px;
        }
        .clear-both {
            clear: both;
            background-color: lightcoral;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="left-float">Left Float</div>
        <div class="right-float">Right Float</div>
        <div>Content that wraps around the floated elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="clear-both">Cleared Both</div>
    </div>
</body>
</html>
```

In this example:
- The `.left-float` element floats to the left, and the `.right-float` element floats to the right within the `.container`.
- The text content wraps around the floated elements.
- The `.clear-both` element is cleared on both sides, ensuring it moves below both floated elements.