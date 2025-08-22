let addBtn = document.getElementsByClassName("gray")[0]
let form = document.getElementById("item-add")
let blurDiv = document.getElementById("blur")
let close = document.getElementById("close")
let main = document.getElementsByClassName("main")[0]
let sticky = document.getElementsByClassName("sticky-grid")[0]
let choosedColor = false
let choosedColorValue = "gray"
let colorDivs = document.getElementsByClassName("color-div")
let arr = ["yellow", "blue", "red", "orange"]
let color = "gray"
let items = JSON.parse(localStorage.getItem("item-list")) || []
let comp = JSON.parse(localStorage.getItem("completed-items")) || []
let completedItems = document.getElementsByClassName("completed-item")
let edit = document.getElementById("edit")
const colors = [
    "#fff8b3",
    "#d4f1f9",
    "#fddede",
    "#ffe0b3"
]
for (let x of colorDivs){
    x.addEventListener("click", (e)=>{
        choosedColor = true
        choosedColorValue = e.target.classList[0]
        color = colors[arr.indexOf(choosedColorValue)]
        console.log(color)
    })
}
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (choosedColor){
        let form = document.getElementById("item-add")
        let blurDiv = document.getElementById("blur")

        let title = e.target.title.value
        let summary = e.target.querySelector("#sum").value
        items.push({Title: title, Summary: summary, Color: color})
        localStorage.setItem("item-list", JSON.stringify(items))
        blurDiv.style.display = "none"
        form.style.display = "none"
        sticky.insertAdjacentHTML("beforeend", `<div class='note ${color}' style='background-color:${color}; height: 198px;'><img src="comp.png" style="position: absoulte; cursor: pointer;" class='completed-item'><img src="edit.png" style="position: absoulte; cursor: pointer;" class='edit'><img src="close.png" style='position: relative; left: 65%; cursor: pointer;' class='delete'><h3>${title}</h3><p>${summary}</p></div>`)
        let completedItems = document.getElementsByClassName("completed-item")
        let editedItems = document.getElementsByClassName("edit")
        let edit = document.getElementById("edit")
        for (let g of editedItems){
            g.addEventListener("click", (e)=>{
                blurDiv.style.display = "block"
                edit.style.display = "flex"
            })
        }
        for (let i of completedItems){
            i.addEventListener("click", (e)=>{
                comp.push({Title: e.target.parentElement.querySelector("h3").textContent, Summary: e.target.parentElement.querySelector("p").textContent, Color: e.target.parentElement.classList[1]})
                localStorage.setItem("completed-items", JSON.stringify(comp))
                e.target.parentElement.remove()
                for (let k of items){
                    if (k.Title == e.target.parentElement.querySelector("h3").textContent){
                        items.splice(items.indexOf(k), 1)
                        localStorage.setItem("item-list", JSON.stringify(items))
                        break
                    }
                }
            })
        }
        let delete1 = document.getElementsByClassName("delete")
        for (let y of delete1){
            y.addEventListener("click", (e)=>{
                e.target.parentElement.remove()
                console.log(e.target.parentElement.querySelector("h3").textContent)
                for (let k of items){
                    if (k.Title == e.target.parentElement.querySelector("h3").textContent){
                        items.splice(items.indexOf(k), 1)
                        localStorage.setItem("item-list", JSON.stringify(items))
                        break
                    }
                }
            })
        }
    }
})
addBtn.addEventListener("click", (e)=>{
    choosedColor = false
    let form = document.getElementById("item-add")
    let blurDiv = document.getElementById("blur")
    blurDiv.style.display = "block"
    form.style.display = "block"
})

close.addEventListener("click", (e)=>{
    choosedColor = false
    blurDiv.style.display = "none"
    form.style.display = "none"
})
for (let i of items){
    sticky.insertAdjacentHTML("beforeend", `<div class='note' style='background-color:${i.Color}; height: 198px;'><img src="comp.png" style="position: absoulte; cursor: pointer;" class='completed-item'><img src="edit.png" style="position: absoulte; cursor: pointer;" class='edit'><img src="close.png" style='position: relative; left: 65%; cursor: pointer;' class='delete'><h3>${i.Title}</h3><p>${i.Summary}</p></div>`)
}

let delete1 = document.getElementsByClassName("delete")
for (let y of delete1){
    y.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
        for (let k of items){
            if (k.Title == e.target.parentElement.querySelector("h3").textContent){
                items.splice(items.indexOf(k), 1)
                localStorage.setItem("item-list", JSON.stringify(items))
                break
            }
        }
    })
}

for (let i of completedItems){
    i.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
        comp.push({Title: e.target.parentElement.querySelector("h3").textContent, Summary: e.target.parentElement.querySelector("p").textContent, Color: e.target.parentElement.classList[1]})
        localStorage.setItem("completed-items", JSON.stringify(comp))
        for (let k of items){
            if (k.Title == e.target.parentElement.querySelector("h3").textContent){
                items.splice(items.indexOf(k), 1)
                localStorage.setItem("item-list", JSON.stringify(items))
                break
            }
        }
    })
}
let editedItems = document.getElementsByClassName("edit")
for (let g of editedItems){
    g.addEventListener("click", (e)=>{
        blurDiv.style.display = "block"
        edit.style.display = "flex"
    })
}
let moon = document.getElementById("moon")
let sun = document.getElementById("sun")

moon.addEventListener("click", () => {
    document.body.classList.add("inverted")
})

sun.addEventListener("click", () => {
    document.body.classList.remove("inverted")
})
let editColor = document.getElementsByClassName("edit-color-div")
editColor[0].addEventListener("click", (e)=>{

})
let editClose = document.getElementById("edit-close")
editClose.addEventListener("click", (e)=>{
    blurDiv.style.display = "none"
    edit.style.display = "none"
})