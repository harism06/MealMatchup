let allData = [
{
    id: 0,
    name: "dominos",
    description: "fresh pizzas!",
    location: "123 main street",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg"
    
},
{
    id: 1,
    name: "pizza hut",
    description: "pizzzas",
    location: "123abc main street",
    img: "zuppups"
    
},
{
    id: 2,
    name: "McDonalds",
    eta: "15-20 minutes",
    description: "Fresh BigMacs!",
    location: "123 McStreet",
    ratings: "4.5",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg"
}
]

function loadCards() {
    allData.forEach((data)=>{
        let x = document.getElementsByClassName("search-results")[0]
        // console.log(x)
        console.log(data)
        x.appendChild(getCard(data))})
    // console.log("abc")
}

function getCard(cardData) {
    let container = document.getElementsByClassName("restuarant-card")[0]
    let img = document.getElementsByClassName("restuarant-img")[0]
    let title = document.getElementsByClassName("restuarant-title")[0]
    let eta = document.getElementsByClassName("restuarant-eta")[0]
    let ratings = document.getElementsByClassName("restuarant-ratings")[0]

    img.setAttribute("src", cardData.img)
    title.innerHTML = cardData.name
    eta.innerHTML = cardData.eta
    ratings.innerHTML = cardData.ratings
    console.log(container)
    return container;

}

window.onload = loadCards