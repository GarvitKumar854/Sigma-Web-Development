# Your First Website

## <img src= "https://cdn-icons-png.flaticon.com/128/174/174854.png" width = "25px"> Basic HTML Website Structure
Every HTML webpage follows a simple structure. Here’s a beginner-friendly template:  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>
<body>

    <h1>Welcome to My Website</h1>
    <p>This is a simple webpage.</p>

</body>
</html>
```
## 📌 Explanation
- `<!DOCTYPE html>` → Declares the document as HTML5.
- `<html>` → The root of the HTML document.
- `<head>` → Contains metadata (title, character set, etc.).
- `<title>` → Sets the webpage title (seen on the browser tab).
- `<body>` → Holds the content visible on the webpage.
- `<h1>` → Main heading.
- `<p>` → A paragraph.

## 🔹 HTML Attributes  

HTML **attributes** provide extra information about elements and are written inside the opening tag.  

### ✨ Common Attributes  

- ✔ **`href`** (for links)  
```html
<a href="https://example.com">Visit</a>
```

- ✔ **`src`** (for images)
```html
<img src="image.jpg" alt="Image">
```

- ✔ **`style`** (inline CSS)
```html
<p style="color: blue;">Blue text</p>
```

- ✔ **`title`** (tooltip on hover)
```html
<p title="Tooltip">Hover over me</p>
```

- ✔ **`id & class`** (for styling & JS)
```html
<p id="unique" class="text-style">Styled Text</p>
```