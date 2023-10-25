function getRestaurantDataById(restaurantId) {
    fetch("../data/restaurant-data.json")
    .then((response) => (response.json()))
    .then((data) => {
        let restaurant = data.find((item) => item.id == restaurantId)
        populateRestaurantData(restaurant)
    })
    
}

function populateRestaurantData(restaurant) {
    let restaurantImg = document.getElementById("restaurant-img")
    restaurantImg.setAttribute("src", restaurant.img)
    // get the restaurant's title
    let restaurantName = document.getElementById("restaurant-title")
    restaurantName.innerHTML = restaurant.name
    loadMenuItems(restaurant)
}

function loadMenuItems(restaurant) {
    let allMenu = restaurant.menu
    console.log(allMenu)
    allMenu.forEach((data) => {
        console.log(data)
        //declating the variables
        let allMenu = document.getElementById("menu-items")
        let itemContainer = document.createElement("div")
        itemContainer.classList.add("item-container")
        let checkBox = document.createElement("input")
        checkBox.setAttribute("id", data.id)
        checkBox.setAttribute("type", "checkbox")
        let itemName = document.createElement("span")
        itemName.classList.add("item-name")

        allMenu.appendChild(itemContainer)
        itemContainer.appendChild(checkBox)
        itemContainer.appendChild(itemName)
        console.log(allMenu)

        itemName.innerHTML = data.name
    })

}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search)
    const restaurantId = urlParams.get("restaurantId")

    getRestaurantDataById(restaurantId)
}