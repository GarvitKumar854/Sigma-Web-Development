console.log("Hello World !")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red";


// document.getElementById("red").style.backgroundColor = "lightgreen";

// document.querySelector(".box").style.backgroundColor = "green";
// Note: querySelectorAll returns a NodeList So we have to use for loop

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})


