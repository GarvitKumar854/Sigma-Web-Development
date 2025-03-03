let score = 75;

// if statement
if (score > 90) {
    console.log("Excellent");
}

// if...else statement
if (score >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// else if statement
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// switch statement
let grade = "C";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

// Ternary operator
let result = (score >= 60) ? "Pass" : "Fail";
console.log(result); // Output: Pass
