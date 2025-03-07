let button = document.getElementById("btn")

button.addEventListener("mouseenter", ()=>{
    document.querySelector(".box").innerHTML= "<b>You were Clicked</b>";
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't Right Click")
})

button.addEventListener("keydown", (e)=>{
    console.log(e, e.key)
})