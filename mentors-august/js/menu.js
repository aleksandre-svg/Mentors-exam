let dishes = document.getElementById("dishes")
let cart = JSON.parse(localStorage.getItem("card")) || []
let colors = [
  "#C5AB67", // rgb(197, 171, 103)
  "#E9ED77", // rgb(233, 237, 119)
  "#EDB04C", // rgb(237, 176, 76)
  "#D1E27A", // rgb(209, 226, 122)
  "#848142"  // rgb(132, 129, 66)
];
async function render(){
    try {
        let url = await fetch("./index.json")
        let response = await url.json()
        response.map(element => {
            let div = document.createElement("div")
            div.classList.add("dish")
            div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            let h2 = document.createElement("h2")
            h2.textContent = element.name
            let p = document.createElement("p")
            p.textContent = element.description
            let p1 = document.createElement("p")
            p1.textContent = element.price
            let button = document.createElement("button")
            button.textContent = "Add to cart"
            button.classList.add("add")
            div.appendChild(h2)
            div.appendChild(p)
            div.appendChild(p1)
            div.appendChild(button)
            dishes.append(div)
        })
    let add = document.getElementsByClassName("add")
    Array.from(add).forEach(e => {
        e.addEventListener("click", (e)=>{
            cart.push([e.target.parentElement.querySelector("h2").textContent, e.target.parentElement.querySelector("p").textContent, e.target.parentElement.querySelectorAll("p")[1].textContent])
            localStorage.setItem("cart", JSON.stringify(cart))
        })
    })
    }catch(error){
        console.error(error)
    }
}
render()
let burger = document.getElementById("burger")
let burgermenu = document.getElementById("burgermenu")
let close = document.getElementById("close")
burgermenu.addEventListener("click", (e)=>{
    burger.style.transform = " translate(0px)"
})

close.addEventListener("click", (e)=>{
    burger.style.transform = "translate(-300px)"
})