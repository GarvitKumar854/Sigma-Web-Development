// Faulty Calculator

let random = Math.random()
let a = prompt("Enter First Number: ");
let c = prompt("Enter Operation: ");
let b = prompt("Enter Second Number: ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}



if(random > 0.1){
    // Perform correct calculation
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
} else{
    // Perform wrong calculation
    c = obj[c];
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}