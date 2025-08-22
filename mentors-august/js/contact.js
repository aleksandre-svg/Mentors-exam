let form = document.getElementById("form")
let main = document.getElementById("main")
let succes = document.getElementById("succes")
let mainest = document.getElementById("mainest")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let name = e.target.name.value
    let email = e.target.email.value
    let text = e.target.mess.value

    if (!name){
        e.target.name.style.border = "1px solid red"
    }else if (!email){
        e.target.email.style.border = "1px solid red"
    }else if (!text){
        e.target.mess.style.border = "1px solid red"
    }else {
        mainest.style.display = "none"
        succes.style.display = "flex"
    }
})
let burger = document.getElementById("burger")
let burgermenu = document.getElementById("burgermenu")
let close = document.getElementById("close")
burgermenu.addEventListener("click", (e)=>{
    burger.style.transform = " translate(0px)"
})

close.addEventListener("click", (e)=>{
    burger.style.transform = "translate(-300px)"
})