# CSS Flexbox
The CSS Flexible Box Layout, commonly known as Flexbox, is a layout module designed to make it easier to design flexible and responsive layouts. It provides a more efficient way to align and distribute space among items in a container, even when their size is unknown or dynamic

## Key Concepts:
1. **Flex Container:**
- The parent element that contains flex items.
- Defined using `display: flex`; or `display`: `inline-flex`;.
```css
.container {
    display: flex;
}
```

2. **Flex Items:**
- The direct children of a flex container.
- They can be manipulated using various flexbox properties.

## Flex Container Properties:
1. **flex-direction:**
- Defines the direction in which the flex items are placed in the flex container.
- Values: row (default), `row-reverse`, `column`, `column-reverse`.
```css
.container {
    flex-direction: row;
}
```

2. **flex-wrap:**
- Specifies whether the flex items should wrap or not.
- Values: `nowrap` (default), `wrap`, `wrap-reverse`.
```css
.container {
    flex-wrap: wrap;
}
```

3. **justify-content:**
- Aligns flex items along the main axis (horizontal axis in `row` direction).
- Values: `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
```css
.container {
    justify-content: center;
}
```

4. **align-items:**
- Aligns flex items along the cross axis (vertical axis in `row` direction).
- Values: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`.
```css
.container {
    align-items: center;
}
```

5. **align-content:**
- Aligns flex lines when there is extra space in the cross axis.
- Values: `stretch` (default), `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.
```css
.container {
    align-content: space-between;
}
```

6. **flex-flow:**
- A shorthand property for setting both `flex-direction` and `flex-wrap`.
- Values: `flex-direction` followed by `flex-wrap`.
```css
.container {
    flex-flow: row wrap;
}
```

7. **gap:**
- Defines the space between flex items.
- Values: Any length value (e.g., `10px`, `1rem`).
```css
.container {
    gap: 10px;
}
```

## Flex Item Properties:

1. **order:**
- Specifies the order of the flex items.
- Default value is `0`.

2. **flex-grow**:
- Specifies how much a flex item will grow relative to the rest of the flex items.
- Default value is 0.

3. **flex-shrink:**
- Specifies how much a flex item will shrink relative to the rest of the flex items.
- Default value is 1.

4. **flex-basis:**
- Specifies the initial size of a flex item before any growing or shrinking.
- Default value is auto.

5. **align-self:
- Overrides the `align-items` property for individual flex items.
- Values: `auto` (default), `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

**Example:**
```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            height: 300px;
            background-color: lightgrey;
            padding: 10px;
        }
        .item {
            flex: 1 1 100px; /* flex-grow, flex-shrink, flex-basis */
            margin: 10px;
            padding: 20px;
            background-color: lightblue;
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```