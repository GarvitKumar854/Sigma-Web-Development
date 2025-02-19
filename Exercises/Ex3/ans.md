# Exercise 3 Answer

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Design</title>
    <style>
        .card {
            width: 300px;
            height: 430px;
            border: 1px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            margin: 20px auto;
        }
        .card img {
            width: 97%;
            padding: 5px;
            border-radius: 10px;
        }
        .card-content {
            padding: 0 15px;
        }
        .card-content .tags {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }
        .card-content .tags span {
            background-color: #ffffff;
            border: 1px solid gray;
            border-radius: 20px;
            padding: 4px 10px;
            font-size: 12px;
        }
        .card-content h2 {
            margin: 20px 0 10px;
            font-size: 24px;
        }
        .card-content p {
            margin: 0 0 20px;
            color: #555;
            font-size: 14px;
        }
        .card-content .read-more {
            display: inline-block;
            padding: 12px 20px;
            background-color: #94c8ff;
            color: #0091ff;
            border-radius: 20px;
            border: none;
            font-weight: bold;
            text-decoration: none;
            font-size: 14px;
            margin: 0 auto;
        }
        .center {
            display: flex;
            justify-content: center;
        }
    </style>
</head>
<body>
    <div class="card">
        <img src="https://media.istockphoto.com/id/1208877516/photo/old-man-and-the-sea.jpg?s=612x612&w=0&k=20&c=uehCCP7wTeem0mD90LXCgbDb5kRwCOcAXq8UB4_Li7M=" alt="Lago di Braies">
        <div class="card-content">
            <div class="tags">
                <span>Nature</span>
                <span>Lake</span>
            </div>
            <h2>Lago di Braies</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>
            <div class="center">
                <button class="read-more">Read More</button>
            </div>
        </div>
    </div>
</body>
</html>
```