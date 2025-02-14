# 🎬 Video, 🔊 Audio and 📺 Media in HTML


## Video Element
The `<video>` tag is used to embed video content.
### Attributes:
- **src**: Specifies the URL of the video file.
- **controls**: Adds play, pause, and other controls to the video.
- **autoplay**: Starts playing the video as soon as it is loaded.
- **loop**: Replays the video after it ends.
- **muted**: Mutes the audio of the video.

**Example:**
```html
<video src="movie.mp4" controls autoplay loop muted></video>
```

## Audio Element 🎵
The `<audio>` tag is used to embed audio content.
### Attributes:
- **src**: Specifies the URL of the audio file.
- **controls**: Adds play, pause, and other controls to the audio.
- **autoplay**: Starts playing the audio as soon as it is loaded.
- **loop**: Replays the audio after it ends.
- **muted**: Mutes the audio.

**Example:**
```html
<audio src="song.mp3" controls autoplay loop muted></audio>
```

### **`preload`** Attribute
The preload attribute in HTML specifies how the browser should load the media (like video or audio) before the user interacts with it. It can have three values:
- `none`: The browser should not preload the media.
- `metadata`: The browser should preload only metadata (such as duration).
- `auto`: The browser should preload the entire media file.

## Media in HTML
HTML provides various tags and attributes to seamlessly integrate multimedia content into your web pages, making it engaging and interactive for users.

### SVG
SVG (Scalable Vector Graphics) is an XML-based format for vector graphics. SVG allows you to define images and graphical content in a way that can scale to different sizes without losing quality. It's commonly used for icons, charts, and complex illustrations on web pages.

**Example of SVG in HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Example</title>
</head>
<body>
    <h1>SVG Example</h1>
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
</body>
</html>
```

#### Adding SVG Files
You can also include SVG files as images or background images:
**Embedding an SVG file as an image:**
```html
<img src="image.svg" alt="Description of the image">
```

**Using an SVG file as a background image in CSS:**
```css
div {
    background-image: url('image.svg');
}
```

### iFrames in HTML
iFrames (Inline Frames) in HTML are used to embed another HTML document within the current HTML document. The `<iframe>` tag creates an inline frame, which can display web pages, videos, maps, or other content from another source.

**Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iFrame Example</title>
</head>
<body>
    <h1>Embedded Page</h1>
    <iframe src="https://www.example.com" width="600" height="400" frameborder="0" allowfullscreen></iframe>
</body>
</html>
```

