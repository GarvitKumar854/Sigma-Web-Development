# CSS Variables
CSS Variables, also known as Custom Properties, allow you to store values that you can reuse throughout your CSS. This makes your CSS more modular, maintainable, and easier to update.

## Defining and Using CSS Variables:
1. **Define a Variable**: Variables are defined within a selector using the `--` prefix.
```css
:root {
    --main-bg-color: lightblue;
    --main-text-color: #333;
}
```

2. **Use a Variable**: Use the var() function to reference the variable.
```css
body {
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
}
```

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Example</title>
    <style>
        :root {
            --main-bg-color: lightblue;
            --main-text-color: #333;
            --main-padding: 10px;
        }

        body {
            background-color: var(--main-bg-color);
            color: var(--main-text-color);
            padding: var(--main-padding);
        }

        h1 {
            color: var(--main-text-color);
        }
    </style>
</head>
<body>
    <h1>Welcome to CSS Variables</h1>
    <p>Using CSS Variables makes your code more maintainable and efficient.</p>
</body>
</html>
```

In this example:
- Variables `--main-bg-color`, `--main-text-color`, and `--main-padding` are defined in the `:root` selector, making them available globally.
- These variables are then used in various CSS rules to maintain consistency and make future updates easier.