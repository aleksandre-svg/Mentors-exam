let burger = document.getElementById("burger")
let burgermenu = document.getElementById("burgermenu")
let close = document.getElementById("close")
burgermenu.addEventListener("click", (e)=>{
    burger.style.transform = " translate(0px)"
})

close.addEventListener("click", (e)=>{
    burger.style.transform = "translate(-300px)"
})