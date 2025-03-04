// Calculate Factorial of a Number
// Note: Run The code through Html.
alert("Factorial Calculator !");
let n = prompt("Enter a Number: ");
let fact = 1;
if(n < 1){
    alert("Invalid Number !");
} else{
    for(let i = 1; i<=n; i++){
        fact*=i;
    }
    alert("Factorial is: " + fact);
}