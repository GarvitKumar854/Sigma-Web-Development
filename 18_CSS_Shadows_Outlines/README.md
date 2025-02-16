# CSS Shadows and Outlines

## Shadows
Shadows in CSS are used to create depth and emphasis by adding shadow effects to elements. There are two main types of shadows in CSS: box shadows and text shadows.

### Box Shadow (`box-shadow`)
The box-shadow property adds shadow effects to the frame of an element. It can create multiple shadows by specifying multiple values separated by commas.

**Syntax:**
```css
element {
    box-shadow: h-offset v-offset blur spread color;
}
```
**Parameters:**
- **h-offset**: Horizontal offset of the shadow (positive value shifts the shadow to the right, negative to the left).
- **v-offset**: Vertical offset of the shadow (positive value shifts the shadow down, negative shifts it up).
- **blur**: Optional. The blur radius. The higher the number, the more blurred the shadow.
- **spread**: Optional. The spread radius. Positive values increase the size of the shadow, negative values decrease it.
- **color**: The color of the shadow.

**Example:**
```css
div {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
```

### Text Shadow (`text-shadow`)
The text-shadow property adds shadow effects to text. You can specify multiple shadows by separating values with commas.

**Syntax:**
```css
element {
    text-shadow: h-offset v-offset blur color;
}
```

**Parameters:**
- **`h-offset`**: Horizontal offset of the shadow.
- **`v-offset`**: Vertical offset of the shadow.
- **`blur`**: Optional. The blur radius.
- **`color`**: The color of the shadow.

## Outline (`outline`)
The outline property draws a line around an element, outside the border edge. It differs from borders in that it does not take up space and can have different offset and style values.

**Syntax:**
```css
element {
    outline: width style color;
}
```

**Example:**
```css
button {
    outline: 2px dashed red;
}
```

## Difference Between Border and Outline
| **Feature**           | **Border**                                   | **Outline**                                 |
|-----------------------|----------------------------------------------|---------------------------------------------|
| **Position**          | Surrounds the element's padding and content. | Surrounds the element, outside the border.  |
| **Part of Box Model** | Yes, affects element size and layout.        | No, does not affect element size or layout. |
| **Offset**            | No inherent offset.                          | Can be offset using `outline-offset`.       |
| **CSS Property**      | `border`                                     | `outline`                                   |
| **Shorthand**         | Yes (`border: width style color;`).          | Yes (`outline: width style color;`).        |
| **Focus Visibility**  | Not typically used for focus indication.     | Often used to indicate focus.               |

