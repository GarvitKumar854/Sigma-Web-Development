# CSS Object-fit & Object-position

Both `object-fit` and `object-position` are CSS properties used to control the presentation of replaced elements, such as `<img>` and `<video>`. They are particularly useful for managing how images or videos are displayed within their containers.

## `object-fit`
The `object-fit` property specifies how an element's content should be resized to fit its container. It determines the object's size and positioning within the container.

### Values:
`fill`: The default value. The content is resized to fill the container. It may stretch the image or video if the aspect ratios do not match.

`contain`: The content is resized to fit within the container while preserving its aspect ratio. The entire content will be visible, but there may be empty space within the container.

`cover`: The content is resized to fill the container while preserving its aspect ratio. The content will cover the entire container, but some parts might be clipped if the aspect ratios do not match.

`none`: The content maintains its original size. No resizing occurs.

`scale-down`: The content is scaled down to the smallest of `none` or `contain`.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Object-Fit Example</title>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 2px solid #ddd;
        }
        .fill {
            object-fit: fill;
        }
        .contain {
            object-fit: contain;
        }
        .cover {
            object-fit: cover;
        }
        .none {
            object-fit: none;
        }
        .scale-down {
            object-fit: scale-down;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="fill" alt="Fill">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="contain" alt="Contain">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="cover" alt="Cover">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="none" alt="None">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="scale-down" alt="Scale Down">
    </div>
</body>
</html>
```

## `object-position`
The `object-position` property specifies the alignment of the content within its container. It is often used with `object-fit` to adjust the content's position.

### Values:
Values can be specified as keywords (e.g., `left`, `center`, `right`, `top`, `bottom`) or as length values (e.g., `20px`, `50%`).

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Object-Position Example</title>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 2px solid #ddd;
            overflow: hidden; /* To hide the overflowed parts */
        }
        .position-top-left {
            object-fit: cover;
            object-position: top left;
        }
        .position-center {
            object-fit: cover;
            object-position: center;
        }
        .position-bottom-right {
            object-fit: cover;
            object-position: bottom right;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="position-top-left" alt="Top Left">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="position-center" alt="Center">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" class="position-bottom-right" alt="Bottom Right">
    </div>
</body>
</html>
```