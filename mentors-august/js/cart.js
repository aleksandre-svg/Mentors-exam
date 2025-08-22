let cart = document.getElementById("cart")
let cartElements = JSON.parse(localStorage.getItem("cart")) || []
let totalPrice = 0
let total = document.getElementById("total")
cartElements.map(element => {
    cart.innerHTML += `<div class="cart-element">
                    <h2>${element[0]}</h2><br>
                    <p>${element[1]}</p>
                    <p>${element[2]}</p>
                    <button class="delete">delete</button>
            </div>`
    totalPrice += Number(element[2])
    total.textContent = `Total price: ${totalPrice}`
})

let Delete = document.getElementsByClassName("delete")
Array.from(Delete).map(element => {
    element.addEventListener("click", (e)=>{
        cartElements.map(el => {
            if (e.target.parentElement.querySelector("h2").textContent == el[0]){
                totalPrice -= Number(e.target.parentElement.querySelectorAll("p")[1].textContent)
                total.textContent = `Total price: ${totalPrice}`
                e.target.parentElement.remove()
                cartElements.splice(cartElements.indexOf(el), 1)
                localStorage.setItem("cart", JSON.stringify(cartElements))
            }
        })
    })
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