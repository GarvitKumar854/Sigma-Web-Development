# CSS Sizing 📏 Units
CSS sizing units define how the dimensions of elements (such as width, height, margin, and padding) are specified. There are several types of units used in CSS, each serving a different purpose:

## Absolute Units:
Absolute units are fixed and are not affected by other elements. They are best used when you want precise control over an element's size.
- **px (pixels)**: The most commonly used unit.
```css
div {
    width: 200px;
    height: 100px;
}
```

- **pt (points)**: Typically used for print styles.
```css
h1 {
    font-size: 12pt;
}
```

- **cm (centimeters), mm (millimeters), in (inches)**: Used for print styles.
```css
p {
    margin: 1cm;
}
```

## Relative Units:
Relative units are based on the size of other elements or the viewport. They are more flexible and responsive.

- **% (percentage)**: Relative to the parent element's size.
```css
div {
    width: 50%;
}
```

- **em**: Relative to the font-size of the element.
```css
p {
    font-size: 1.5em;
}
```

- **rem (root em)**: Relative to the font-size of the root element (`<html>`).
```css
body {
    font-size: 1rem; /* equal to 16px if the root font-size is 16px */
}
```

- **vw (viewport width)**, vh (viewport height): Relative to the size of the viewport.
```css
div {
    width: 50vw;
    height: 50vh;
}
```

- **vmin, vmax**: Relative to the smaller (`vmin`) or larger (`vmax`) dimension of the viewport.
```css
div {
    width: 50vmin;
}
```

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Sizing Units</title>
    <style>
        .absolute {
            width: 200px;
            height: 100px;
            background-color: lightblue;
        }
        .relative {
            width: 50%;
            height: 50vh;
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <div class="absolute">Absolute Size (200px by 100px)</div>
    <div class="relative">Relative Size (50% width, 50vh height)</div>
</body>
</html>
```