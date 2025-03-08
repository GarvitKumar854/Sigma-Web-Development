console.log("Garvit is a Developer");
console.log("Garvit is a Hacker");

setTimeout(() => {
   console.log("I am inside setTimeout") 
}, 0);

console.log("The End !");


const callback = (arg) => {
   console.log(arg);
}

const loadScript = (src, callback) => {
   let sc = document.createElement("script");
   sc.src = src;
   sc.onload = callback("Harry");
}

loadScript("")