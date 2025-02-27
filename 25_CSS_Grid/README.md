# CSS Grid ⌗
CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, making it easier to design web pages without having to use floats and positioning.

## Key Concepts

### Grid Container
To define a grid container, you use the `display: grid;` property. This establishes a new grid formatting context for its children.

### Grid Items
The direct children of a grid container are grid items. These items can be placed and sized within the grid using various grid properties.

## Grid Container Properties

### grid-template-columns
Defines the columns of the grid. You can specify the width of each column.
```css
.container {
    grid-template-columns: 100px 200px 100px;
}
```

### grid-template-rows
Defines the rows of the grid. You can specify the height of each row.
```css
grid-template-rows
Defines the rows of the grid. You can specify the height of each row.
```

### gap
Sets the gap (also known as gutter) between rows and columns.
```css
.container {
    gap: 10px;
}
```

### grid-template-areas
Defines named grid areas that can be referenced by grid items. This allows you to create more complex layouts.
```css
.container {
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
}
```

### justify-items
Aligns grid items along the inline (row) axis.
```css
.container {
    justify-items: center;
}
```

### align-items
Aligns grid items along the block (column) axis.
```css
.container {
    align-items: center;
}
```

### justify-content
Aligns the entire grid along the inline (row) axis.
```css
.container {
    justify-content: center;
}
```

### align-content
Aligns the entire grid along the block (column) axis.
```css
.container {
    align-content: center;
}
```

## Grid Item Properties
### grid-column
Specifies the starting and ending column lines for a grid item.
```css
.item {
    grid-column: 1 / 3;
}
```

### grid-row
Specifies the starting and ending row lines for a grid item.
```css
.item {
    grid-row: 1 / 3;
}
```

### grid-area
Specifies a grid item’s location using the named grid areas.
```css
.item {
    grid-area: header;
}
```

### justify-self
Aligns a grid item inside its grid area along the inline (row) axis.
```css
.item {
    justify-self: center;
}
```

### align-self
Aligns a grid item inside its grid area along the block (column) axis.
```css
.item {
    align-self: center;
}
```

**Example:**
Here's a simple example demonstrating the use of CSS Grid:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Example</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: 100px 200px;
            gap: 10px;
            grid-template-areas: 
                "header header header"
                "sidebar main main"
                "footer footer footer";
        }
        .header {
            grid-area: header;
            background-color: lightblue;
        }
        .sidebar {
            grid-area: sidebar;
            background-color: lightcoral;
        }
        .main {
            grid-area: main;
            background-color: lightgreen;
        }
        .footer {
            grid-area: footer;
            background-color: lightgoldenrodyellow;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="main">Main Content</div>
        <div class="footer">Footer</div>
    </div>
</body>
</html>
```
