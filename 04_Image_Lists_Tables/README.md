# Images, Lists & Tables In HTML

## 🖼️ Images in HTML

In HTML, images are embedded using the `<img>` tag, which is self-closing and does not require a closing tag.<br>
Attributes: 
- `src`: Specifies the path to the image file.
- `alt`: Provides alternative text if the image cannot be displayed.
### 🔹 Basic Syntax

```html
<img src="image.jpg" alt="Description" width="500" height="600">
```

## 📊 Tables in HTML

HTML **tables** allow you to organize data into rows and columns, making it easier to present structured information.

### 🔹 Basic Structure

An HTML table is defined using the `<table>` tag, with rows (`<tr>`), header cells (`<th>`), and data cells (`<td>`):

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

### 🔹 Key Tags
- `<table>`: Defines the table.
- `<tr>`: Defines a table row.
- `<th>`: Defines a header cell; by default, text is bold and centered.
- `<td>`: Defines a standard data cell.

### 🔹 Additional Elements
- `<caption>`: Adds a title to the table.
- `<colgroup>` and `<col>`: Specify column properties for styling.
- `<thead>`, `<tbody>`, and `<tfoot>`: Group sections of the table for styling and scripting purposes.
- `<td rowspan="number">` Content `</td>`: The rowspan attribute allows a cell to extend over multiple rows.
- `<td colspan="number">` Content `</td>`: attribute enables a cell to extend across multiple columns. 

## 📋 Lists in HTML

HTML provides various list types to organize content effectively.

### 🔹 Unordered Lists (`<ul>`)

An unordered list displays items with bullet points.

**Syntax:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### 🔹 Ordered Lists (`<ol>`)
An ordered list displays items with numbers.

**Syntax:**
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### 🔹 Description Lists (<dl>)
A description list pairs terms with their descriptions.

**Syntax:**
```html
<dl>
  <dt>Term 1</dt>
  <dd>Description for Term 1</dd>
  <dt>Term 2</dt>
  <dd>Description for Term 2</dd>
</dl>
```

### 🔹 Nesting Lists
Lists can be nested to create sublists.

**Example**
```html
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrots</li>
      <li>Peas</li>
    </ul>
  </li>
</ul>
```


