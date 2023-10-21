let allData = []

function loadCards() {
    fetch('../retaurant-data.json')
    .then((response) => response.json())
    .then((json) => json.forEach((data)=>{
        let x = document.getElementById("search-results")
        console.log(data)
        x.appendChild(getCard(data))}));
    
}

function getCard(cardData) {
    let container = document.createElement("div")
    container.classList.add("restaurant-card")
    let img = document.createElement("img")
    img.classList.add("restaurant-img")
    let title = document.createElement("p")
    title.classList.add("restaurant-title")
    let ratings = document.createElement("p")
    ratings.classList.add("restaurant-ratings")
    let showRestaurantButton = document.createElement("button")
    showRestaurantButton.classList.add("restaurant-button")
    showRestaurantButton.onclick = ()=>{
        location.href = "../restaurant/restaurant-info.html"
    }

    img.setAttribute("src", cardData.img)
    container.appendChild(img)
    title.innerHTML = cardData.name
    container.appendChild(title)
    // ratings.innerHTML = cardData.ratings
    // I will add the rating later but i plan on using images (like stars)
    // so jus like copy paste the img boilerplate
    ratings.innerHTML = "[Ratings]"
    container.appendChild(ratings)
    showRestaurantButton.innerHTML = "View Restaurant"
    container.appendChild(showRestaurantButton)
    console.log(container)
    return container;

}

window.onload = loadCards