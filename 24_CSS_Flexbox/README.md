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