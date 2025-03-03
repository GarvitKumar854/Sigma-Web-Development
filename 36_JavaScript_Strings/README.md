# Strings In JavaScript
Strings in JavaScript are used to store **text data**. They are immutable (cannot be changed) and can be written using **single (`'`), double (`"`)**, or **backticks (\``)** for template literals.

---

## 1️⃣ **Creating Strings**
```js
let str1 = "Hello, World!";
let str2 = 'JavaScript is awesome!';
```
### 📌 Template Literals in JavaScript
Template literals (introduced in ES6) provide a more flexible way to work with strings. They allow multi-line strings, embedded expressions, and string interpolation using backticks (`) instead of single (') or double (") quotes.
```js
let name = `Garvit`; // Template literal
let sentence = `My Name is ${str3}`;
console.log(sentence);
```

## 2️⃣ String Properties
- `.length` → Returns the number of characters in a string.
```js
let text = "JavaScript";
console.log(text.length); // 10
let word = "Harry\"";
console.log(word.length); // 6 because \" is 1 character.
```

## 3️⃣ String Methods
- 🔹 Changing Case
```js
let word = "Hello";
console.log(word.toUpperCase()); // "HELLO"
console.log(word.toLowerCase()); // "hello"
```

- 🔹 Extracting Parts of a String
```js
let str = "JavaScript";
console.log(str.slice(0, 4));   // "Java"
console.log(str.substring(4, 10)); // "Script"
console.log(str.substr(4, 6));  // "Script"
```

- 🔹 Replacing Text
```js
let sentence = "I love JavaScript!";
console.log(sentence.replace("love", "like")); // "I like JavaScript!"
```

- 🔹 Concatenation
```js
let firstName = "Garvit";
let lastName = "Kumar";
console.log(firstName + " " + lastName); // "Garvit Kumar"
console.log(`${firstName} ${lastName}`); // "Garvit Kumar" (Template literals)
```

- 🔹 Trimming Spaces
```js
let msg = "   Hello World!   ";
console.log(msg.trim());  // "Hello World!"
console.log(msg.trimStart()); // "Hello World!   "
console.log(msg.trimEnd());   // "   Hello World!"
```

- 🔹 Splitting a String
```js
let names = "Alice,Bob,Charlie";
console.log(names.split(",")); // ["Alice", "Bob", "Charlie"]
```

### Quick Quiz
#### Use a `for` loop to print a string.
View [Answer](/08_Strings/quiz_Answer.js)

## 4️⃣ String Searching Methods
```js
let sentence = "JavaScript is a great language";
console.log(sentence.indexOf("great")); // 17
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.startsWith("Java")); // true
console.log(sentence.endsWith("language")); // true
```

### ⭐ Escape Sequence Characters in JavaScript  

Escape sequence characters in JavaScript are **special characters** used inside strings to represent characters that are difficult or impossible to type directly. They start with a **backslash (`\`)** followed by a specific character.

---

### 📌 Common Escape Sequences  

| Escape Sequence | Description                 | Example Output       |
|----------------|-----------------------------|----------------------|
| `\'`          | Single quote                 | `'Hello'`           |
| `\"`          | Double quote                 | `"JavaScript"`      |
| `\\`          | Backslash                     | `\`                 |
| `\n`          | New Line                      | Moves to next line  |
| `\t`          | Tab Space                     | Adds a tab space    |
| `\r`          | Carriage Return (rarely used) | Resets line content |
| `\b`          | Backspace                     | Removes a character |
| `\f`          | Form Feed                     | Page break (rarely used) |

---
🚀 **Escape sequences are useful for formatting text inside strings!** 🎯  




