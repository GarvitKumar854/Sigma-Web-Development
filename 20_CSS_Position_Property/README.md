# CSS Position ⚙️ Property
The `position` property in CSS specifies how an element is positioned in a document. There are several values for the position property, each dictating different behavior:

## Values
1. **static** (default):
- The element is positioned according to the normal flow of the document.
- It is not affected by `top`, `right`, `bottom`, or `left` properties.
```css
div {
    position: static;
}
```

### `z-index`
The z-index property in CSS controls the stacking order of positioned elements on the z-axis, allowing you to specify which elements appear in front of or behind others based on their numerical values, where higher values are stacked above lower values. This property is useful for managing overlapping content, such as layers, modals, and tooltips, ensuring they display in the intended order. Here's an example:
```css
.element1 {
    position: absolute;
    z-index: 1; /* Lower stacking order */
}

.element2 {
    position: absolute;
    z-index: 10; /* Higher stacking order */
}
```

2. **relative**:
- The element is positioned relative to its normal position.
- The `top`, `right`, `bottom`, and `left` properties can adjust its position.
```css
div {
    position: relative;
    top: 10px;
    left: 20px;
}
```

3. **absolute**:
- The element is positioned relative to the nearest positioned ancestor (not static), or to the initial containing block if no positioned ancestor exists.
- The `top`, `right`, `bottom`, and `left` properties specify the offset from the containing block.
```css
div {
    position: absolute;
    top: 50px;
    right: 30px;
}
```

4. **fixed**:
- The element is positioned relative to the viewport.
- It stays in the same position even when the page is scrolled.
```css
div {
    position: fixed;
    top: 0;
    right: 0;
}
```

5. **sticky**:
- The element is positioned based on the user's scroll position.
- It toggles between relative and fixed positioning, depending on the scroll position.
```css
div {
    position: sticky;
    top: 0;
}
```
## Important !
transform, filter, or perspective properties can also make an element appear as positioned.