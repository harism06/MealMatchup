let allData = [
{
    id: 0,
    name: "dominos",
    description: "fresh pizzas!",
    location: "123 main street",
    img: "null",
    
},
{
    id: 1,
    name: "pizza hut",
    description: "pizzzas",
    location: "123abc main street",
    
},
{
    id: 2,
    name: "mcdonalds",
    description: "fresh bigmacs!",
    location: "123 mcstreet",
    
}
]

function loadCards() {
    allData.forEach((data)=>{
        let x = document.getElementsByClassName("search-results")[0]
        console.log(x)
        console.log(data)
        x.appendChild(getCard(data))})
    console.log("abc")
}

function getCard(cardData) {
    let container = document.createElement("div")
    let title = document.createElement("p")
    title.innerHTML = cardData.name
    container.appendChild(title)
    return container;
}

window.onload = loadCards