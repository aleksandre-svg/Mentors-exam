let searchForm = document.getElementById("searchForm")
let search = document.getElementById("search")
let childElements = document.getElementsByClassName("main-trending-div-child")

let info = [
    {
        name: "Tbilisi",
        description: "A historic city known for its diverse architecture and vibrant culture.",
        price: 1500,
        imageUrl: "../images/tbilisi.webp"
    },
    {
        name: "Batumi",
        description: "A Black Sea resort city known for beaches and modern architecture.",
        price: 1200,
        imageUrl: "../images/batumi.jpg"
    },
    {
        name: "Istanbul",
        description: "A transcontinental city blending European and Asian cultures.",
        price: 1800,
        imageUrl: "../images/istanbul.jpg"
    },
    {
        name: "Yerevan",
        description: "Armenia’s capital, rich in history and Soviet-era architecture.",
        price: 1300,
        imageUrl: "../images/yerevan.webp"
    },
    {
        name: "Bakuriani",
        description: "A Georgian ski resort town, ideal for winter sports lovers.",
        price: 1100,
        imageUrl: "../images/bakuriani.jpg"
    },
    {
        name: "Paris",
        description: "The romantic capital of France, famous for art, fashion, and the Eiffel Tower.",
        price: 2500,
        imageUrl: "../images/paris.avif"
    },
    {
        name: "London",
        description: "The capital of England with iconic landmarks and a rich history.",
        price: 2400,
        imageUrl: "../images/london.jpg"
    },
    {
        name: "Rome",
        description: "Italy’s capital, known for ancient ruins like the Colosseum and Roman Forum.",
        price: 2300,
        imageUrl: "../images/rome.jpg"
    },
    {
        name: "Athens",
        description: "The heart of ancient Greece, filled with ruins and vibrant life.",
        price: 1900,
        imageUrl: "../images/athens.webp"
    },
    {
        name: "Berlin",
        description: "Germany’s capital, known for its history, art, and modern vibe.",
        price: 2200,
        imageUrl: "../images/berlin.jpg"
    },
    {
        name: "Madrid",
        description: "Spain’s capital, famous for art museums, tapas, and football.",
        price: 2100,
        imageUrl: "../images/madrid.jpg"
    },
    {
        name: "Vienna",
        description: "Austria’s elegant capital known for music, palaces, and coffeehouses.",
        price: 2000,
        imageUrl: "../images/vienna.jpg"
    },
    {
        name: "Amsterdam",
        description: "A city of canals, bikes, and rich Dutch culture.",
        price: 2000,
        imageUrl: "../images/amsterdam.jpg"
    },
    {
        name: "Lisbon",
        description: "Portugal’s hilly capital with a coastal charm and old-world feel.",
        price: 1900,
        imageUrl: "../images/lisbon.webp"
    },
    {
        name: "Prague",
        description: "Czech Republic’s fairy-tale city with castles and medieval streets.",
        price: 1800,
        imageUrl: "../images/prague.jpg"
    },
    {
        name: "Dubai",
        description: "A futuristic city in the UAE, known for luxury shopping and skyscrapers.",
        price: 3000,
        imageUrl: "../images/dubai.webp"
    },
    {
        name: "Doha",
        description: "Qatar’s modern capital with desert beauty and culture.",
        price: 2900,
        imageUrl: "../images/doha.jpg"
    },
    {
        name: "Tokyo",
        description: "Japan’s buzzing capital with technology, tradition, and cuisine.",
        price: 3200,
        imageUrl: "../images/tokyo.webp"
    },
    {
        name: "New York",
        description: "The city that never sleeps, filled with landmarks and culture.",
        price: 3100,
        imageUrl: "../images/newyork.avif"
    },
    {
        name: "Bangkok",
        description: "Thailand’s capital, vibrant with temples, street food, and nightlife.",
        price: 1700,
        imageUrl: "../images/bangkok.avif"
    }
]


searchForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let input = e.target.search.value
    for (let i of childElements){
        if(i.querySelector("p").textContent.toLowerCase().startsWith(value)){
            i.style.display = "flex"
        }else {
            i.style.display = "none"
        }
    }
})
for (let i of childElements){
    i.addEventListener("click", (e)=>{
        for (let x of info){
            if (e.target.querySelector("p").textContent == x.name){
                console.log(x)
                localStorage.setItem("currentItem", JSON.stringify(x))
                localStorage.setItem("currentImg", JSON.stringify(x.imageUrl))
                location.replace("booking_page.html")
                break
            }
        }
    })
}