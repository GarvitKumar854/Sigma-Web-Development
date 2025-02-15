# 🎨 CSS Fonts, ✏️ Text & Color 🌟 Properties

## Fonts in CSS
In CSS, fonts are an essential part of styling text and can greatly influence the appearance and readability of a web page. You can control various font properties to achieve the desired look and feel for your text.

### Key Font Properties:
1. **Font Family**: Defines the font to be applied.
2. **Font Size**: Sets the size of the text.
3. **Font Weight**: Adjusts the thickness of the text.
4. **Font Style**: Applies italic or oblique styles to the text.
5. **Font Variant**: Controls the appearance of small-caps text.
6. **Line Height**: Sets the amount of space between lines of text.
7. **Text Transform**: Changes the capitalization of text.
8. **Text Decoration**: Adds decorations like underline, overline, or line-through.
9. **Letter Spacing**: Adjusts the space between characters.
10. **Word Spacing**: Adjusts the space between words.

**Example:**
```CSS
body {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

h1, h2, h3 {
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
    color: #2c3e50;
}

a {
    text-decoration: none;
    color: #3498db;
}
```

### Using External Fonts
1. Select a Font on Google Fonts: Visit Google Fonts and choose a font you like. For example, let's select the "Roboto" font.

2. Embed the Font in Your HTML: Google Fonts provides a link to embed the font in your HTML. Copy the link provided.
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```
3. Use the Font in Your CSS: After embedding the font in your HTML, you can use it in your CSS by specifying the font family.
```css
body {
    font-family: 'Roboto', sans-serif;
}
```