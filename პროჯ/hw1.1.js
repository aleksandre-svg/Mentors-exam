let comp = JSON.parse(localStorage.getItem("completed-items")) 
let sticky = document.getElementsByClassName("sticky-grid")[0]
let items = JSON.parse(localStorage.getItem("item-list")) 

for (let i of comp){
    sticky.insertAdjacentHTML("beforeend", `<div class='note' style='background-color: ${i.Color}; height: 198px;'><img src="return.png" style="position: absoulte; cursor: pointer;" class='return'><img src="close.png" style='position: relative; left: 80%; cursor: pointer;' class='delete'><h3>${i.Title}</h3><p>${i.Summary}</p></div>`)
}

let return1 = document.getElementsByClassName("return")
for (let x of return1){
    x.addEventListener("click", (e)=>{
        items.push({Title: e.target.parentElement.querySelector("h3").textContent, Summary: e.target.parentElement.querySelector("p").textContent, Color: e.target.parentElement.classList[1]})
        localStorage.setItem("item-list", JSON.stringify(items))
        e.target.parentElement.remove()
        for (let k of comp){
            if (k.Title == e.target.parentElement.querySelector("h3").textContent){
                comp.splice(comp.indexOf(k), 1)
                localStorage.setItem("completed-items", JSON.stringify(comp))
                break
            }
        }
    })
}