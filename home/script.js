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
    let container = document.createElement("div")
    container.classList.add("restaurant-card")
    let img = document.createElement("img")
    img.classList.add("restaurant-img")
    let title = document.createElement("p")
    title.classList.add("restaurant-title")
    let eta = document.createElement("p")
    eta.classList.add("restaurant-eta")
    let ratings = document.createElement("p")
    ratings.classList.add("restaurant-ratings")
    let showRestaurantButton = document.createElement("button")
    showRestaurantButton.classList.add("restaurant-button")
    showRestaurantButton.onclick = function () {
        location.href = "../restaurant/restaurant-info.html";
    };

    img.setAttribute("src", cardData.img)
    container.appendChild(img)
    title.innerHTML = cardData.name
    container.appendChild(title)
    eta.innerHTML = cardData.eta
    container.appendChild(eta)
    ratings.innerHTML = cardData.ratings
    container.appendChild(ratings)
    showRestaurantButton.innerHTML = "View Restaurant"
    container.appendChild(showRestaurantButton)
    console.log(container)
    return container;

}

window.onload = loadCards