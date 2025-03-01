# CSS Filters
CSS Filters are used to apply visual effects (like blur, grayscale, brightness, etc.) to elements. They are commonly used on images, but they can be applied to any element. Filters allow you to modify the rendering of an element before it is displayed on the screen.


## Filter Functions
- **blur()** Applies a Gaussian blur to the element. The value specifies the blur radius in pixels.

- **brightness()** Adjusts the brightness of the element. The value is a percentage. A value of 100% means no change, while values greater than 100% increase brightness, and values less than 100% decrease brightness.

- **contrast()** Adjusts the contrast of the element. The value is a percentage. A value of 100% means no change, while values greater than 100% increase contrast, and values less than 100% decrease contrast.

- **grayscale()** Converts the element to grayscale. The value is a percentage. A value of 100% means the element is completely grayscale, and a value of 0% means no change.

- **invert()** Inverts the colors of the element. The value is a percentage. A value of 100% means the colors are completely inverted, and a value of 0% means no change.

- **opacity()** Adjusts the opacity of the element. The value is a percentage. A value of 100% means the element is fully opaque, and a value of 0% means the element is fully transparent.

- **saturate()** Adjusts the saturation of the element. The value is a percentage. A value of 100% means no change, while values greater than 100% increase saturation, and values less than 100% decrease saturation.

- **sepia()** Converts the element to sepia. The value is a percentage. A value of 100% means the element is completely sepia-toned, and a value of 0% means no change.

- **drop-shadow()** Applies a drop shadow to the element. The values specify the horizontal offset, vertical offset, blur radius, and color of the shadow.


### **Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Filters Example</title>
    <style>
        .container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }
        .container img {
            width: 200px;
            height: 200px;
            border: 2px solid #ddd;
        }
        .blur {
            filter: blur(5px);
        }
        .brightness {
            filter: brightness(150%);
        }
        .contrast {
            filter: contrast(120%);
        }
        .grayscale {
            filter: grayscale(100%);
        }
        .invert {
            filter: invert(100%);
        }
        .opacity {
            filter: opacity(50%);
        }
        .saturate {
            filter: saturate(200%);
        }
        .sepia {
            filter: sepia(100%);
        }
        .drop-shadow {
            filter: drop-shadow(10px 10px 5px #000);
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://via.placeholder.com/400" class="blur" alt="Blur">
        <img src="https://via.placeholder.com/400" class="brightness" alt="Brightness">
        <img src="https://via.placeholder.com/400" class="contrast" alt="Contrast">
        <img src="https://via.placeholder.com/400" class="grayscale" alt="Grayscale">
        <img src="https://via.placeholder.com/400" class="invert" alt="Invert">
        <img src="https://via.placeholder.com/400" class="opacity" alt="Opacity">
        <img src="https://via.placeholder.com/400" class="saturate" alt="Saturate">
        <img src="https://via.placeholder.com/400" class="sepia" alt="Sepia">
        <img src="https://via.placeholder.com/400" class="drop-shadow" alt="Drop Shadow">
    </div>
</body>
</html>
```