# CSS Overflow 🌊 Property
The `overflow` property in CSS specifies how to handle content that exceeds the dimensions of its container. It controls whether the content should be clipped, displayed with scrollbars, or visible outside the container.

## Values:
1. **visible**: The default value. Content is not clipped and may overflow the container.
```css
div {
    overflow: visible;
}
```
2. **hidden**: Content that exceeds the container's dimensions is clipped and not visible.
```css
div {
    overflow: hidden;
}
```
3. **scroll**: Content that exceeds the container's dimensions is clipped, but scrollbars are added to allow viewing the hidden content.
```css
div {
    overflow: scroll;
}
```

4. **auto**: Content that exceeds the container's dimensions is clipped, and scrollbars are added only if necessary.
```css
div {
    overflow: auto;
}
```

## `white-space`
- Controls how white space inside an element is handled.
- Common values: `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line`.
```css
p {
    white-space: nowrap;
}
```

## `overflow-x`
- Manages horizontal overflow of an element's content.
## `overflow-y`
- Manages vertical overflow of an element's content.

### Common values: `isible`, `hidden`, `scroll`, `auto`.

## `text-overflow`
- Specifies how overflowed text is signaled to users.
- Common values: `clip`, `ellipsis`.
```css
div {
    text-overflow: ellipsis;
}
```
