# Arrays in JavaScript
An array in JavaScript is a special variable that can hold multiple values in a single variable. It allows storing ordered collections of elements like numbers, strings, objects, etc.

## ✅ Creating an Array
```js
let fruits = ["Apple", "Banana", "Mango"];                  // Array of strings
let numbers = [10, 20, 30, 40];                             // Array of numbers
let marks_class_12 = [31, 78, "Absent", 74, 50, "Fail"];    // Array of Student Marks
console.log(marks_class_12);
console.log(typeof(marks_class_12));                        // Output: object
```

## 🔹 Accessing Elements
Arrays are Mutable and it's elements are accessed using indexing (starting from 0).
```js
console.log(fruits[0]);             // Output: Apple
console.log(numbers[2]);            // Output: 30
console.log(marks_class_12[6])      // Output: 'undefined' {index not exists}
nuumbers[1] = 200;                  // Changed 2nd value of 'numbers'
```

## 🔹 Array Properties & Methods

| Method              | Description                                     | Example Output |
|---------------------|-------------------------------------------------|---------------|
| `length`           | Returns the number of elements in an array      | `fruits.length → 3` |
| `push(value)`      | Adds a new element at the **end**               | `fruits.push("Orange")` |
| `pop()`            | Removes the **last** element                    | `fruits.pop()` |
| `shift()`          | Removes the **first** element                   | `fruits.shift()` |
| `unshift(value)`   | Adds a new element at the **beginning**         | `fruits.unshift("Grapes")` |
| `indexOf(value)`   | Returns the index of a value                   | `fruits.indexOf("Banana") → 1` |
| `includes(value)`  | Checks if value exists in array                | `fruits.includes("Mango") → true` |
| `join(", ")`       | Converts array to a string                     | `"Apple, Banana, Mango"` |
| `toString()`       | Converts array elements into a string           | `fruits.toString() → "Apple,Banana,Mango"` |
| `delete array[i]`  | Deletes an element but **does not** shift indexes | `delete fruits[1]` (Leaves `undefined`) |
| `concat(array2)`   | Merges two or more arrays                       | `fruits.concat(["Pineapple", "Grapes"])` |
| `sort()`           | Sorts an array alphabetically (by default)      | `fruits.sort() → ["Apple", "Banana", "Mango"]` |
| `splice(start, deleteCount, item1, item2, ...)` | Adds/removes elements from an array | `fruits.splice(1, 1, "Kiwi")` (Replaces 1 item at index 1 with `"Kiwi"`) |
| `slice(start, end)`| Returns a portion of an array as a new array    | `fruits.slice(1, 3) → ["Banana", "Mango"]` |



## 🔹 Looping Through an Array

- Using a for loop:

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

- Using forEach():

```js
let num = [1,2,3,4];
num.forEach(element) => {
    console.log(element * element);         // Print Square of each Element
}
```

- Array.from():

The `Array.from()` method creates a **new array** from an **iterable** or **array-like** object. It allows easy conversion of strings, NodeLists, Sets, Maps, or objects with a `length` property into arrays.

```js
let name = "Aayush";
let arr = Array.from(name);             // Create array of 'name' string
console.log(arr);  
```

- Using for...of():

```js
let num = [1,2,3,4,5];
for(let i of num){
    console.log(i);              
}
// Output: Print all Element of num Array.
```

- Using for...in():

```js
let num = [-5,95,45,120,2];
for(let i in num){
    console.log(i)              // Returns the keys {indexes} of Array
    console.log(num[i]);        // Returns the Elements of Array.
}
```

## ⭐ Map, Filter & Reduce in JavaScript
In JavaScript, map(), filter(), and reduce() are higher-order functions used to process and manipulate arrays efficiently.

### 1️⃣ map() – Transforming Elements
The map() method creates a new array by applying a callback function to each element in an existing array. It does not modify the original array.

#### ✅ Example
```js
const numbers = [1, 2, 3, 4, 5];
let num = numbers.map(value, index, array) => {             // Map has three arguments {value, index, array}
    console.log(value, index, array);
}
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]
```

### 2️⃣ filter() – Filtering Elements
The filter() method creates a new array that contains only elements that meet a specified condition (returning true in the callback function).

#### ✅ Example
```js
const ages = [12, 18, 20, 14, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 20, 25, 30]
```

### 3️⃣ reduce() – Reducing to a Single Value
The reduce() method accumulates elements of an array into a single value, such as a sum, product, or concatenated string.

#### ✅ Example
```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```