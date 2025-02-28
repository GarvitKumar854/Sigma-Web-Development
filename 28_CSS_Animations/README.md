# CSS Animations
CSS Animations allow you to animate transitions between different states of an element. They provide a way to add visual feedback to your web pages and make your design more engaging and dynamic.

## Key Concepts of CSS Animations
### @keyframes
The `@keyframes` rule defines the animation. It specifies the style changes at various points during the animation sequence. You can use percentages to define when the changes should happen or use `from` and `to` keywords.

### animation-name
Specifies the name of the @keyframes animation that should be applied to the element.

### animation-duration
Specifies the duration of the animation. The time can be defined in seconds (`s`) or milliseconds (`ms`).

### animation-timing-function
Specifies the speed curve of the animation. Common values include `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, and `cubic-bezier`.

### animation-delay
Specifies a delay before the animation starts. The time can be defined in seconds (`s`) or milliseconds (`ms`).

### animation-iteration-count
Specifies the number of times the animation should be played. You can use numbers or the keyword `infinite` for continuous looping.

### animation-direction
Specifies whether the animation should play in reverse on alternate cycles. Common values include `normal`, `reverse`, `alternate`, and `alternate-reverse`.


## animation (shorthand property)
A shorthand property for setting all the animation properties, including `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, and `animation-direction`.


## Example: Creating a Simple Animation
Here's a simple example demonstrating the use of CSS Animations by changing the background color and moving an element:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Example</title>
    <style>
        @keyframes example {
            0% {
                background-color: lightblue;
                transform: translateX(0);
            }
            50% {
                background-color: lightgreen;
                transform: translateX(200px);
            }
            100% {
                background-color: lightcoral;
                transform: translateX(0);
            }
        }

        .box {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            background-color: lightblue;
            animation: example 5s ease-in-out infinite;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```
