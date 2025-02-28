# CSS Transitions 💫
CSS Transitions allow you to change property values smoothly (over a given duration), rather than having them change abruptly. This helps create dynamic and visually appealing web designs.

## Key Concepts of CSS Transitions

### transition-property
Specifies the CSS property to which the transition is applied.

### transition-duration
Specifies the duration of the transition. The time can be defined in seconds (`s`) or milliseconds (`ms`).

### transition-timing-function
Specifies the speed curve of the transition effect. Common values include `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, and `cubic-bezier`.

### transition-delay
Specifies a delay before the transition starts. The time can be defined in seconds (`s`) or milliseconds (`ms`).

### transition (shorthand property)
A shorthand property for setting the `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

## Example: Creating a Hover Effect
Let's create a simple example to demonstrate CSS Transitions by changing the background color of a box on hover.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions Example</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            transition: background-color 0.5s ease, transform 0.5s ease;
        }

        .box:hover {
            background-color: lightcoral;
            transform: scale(1.2);
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```