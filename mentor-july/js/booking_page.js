
let currentItem = JSON.parse(localStorage.getItem("currentItem")) || null
let form = document.getElementById("format")

let selection = document.getElementById("selection")
let desc = document.getElementById("description")
let price = document.getElementById("price")
let design = document.getElementById("design")

let accs = JSON.parse(localStorage.getItem("accs")) || []

selection.textContent = currentItem.name

desc.textContent = currentItem.description

price.textContent = currentItem.price+"$"

design.style.backgroundImage = `url('${currentItem.imageUrl}')`

function constructor(name, email, travelers, date){
    this.name = name
    this.email = email
    this.travelers = travelers
    this.date = date
}


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let acc = new constructor(e.target.name.value, e.target.email.value, e.target.number.value, e.target.date.value)
    if (!acc.name){
        e.target.name.style = "border: 2px solid red;"
    }else if (!acc.email){
        e.target.email.style = "border: 2px solid red;"
    }else if (!acc.travelers){
        e.target.number.style = "border: 2px solid red;"
    }else if (!acc.date){
        e.target.date.style = "border: 2px solid red;"
    }else {
        accs.push({name: acc.name, email: acc.email, travelers: acc.travelers,number:acc.number, date:acc.date})

        localStorage.setItem("accs", JSON.stringify(accs))

        location.replace("confirmation_page.html")
    }
})