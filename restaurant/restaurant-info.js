function getRestaurantDataById(restaurantId) {
    fetch("../data/restaurant-data.json")
    .then((response) => (response.json()))
    .then((data) => {
        let restaurant = data.find((item) => item.id == restaurantId)
        console.log(restaurant)
        populateRestaurantData(restaurant)
    })
    
}

function populateRestaurantData(restaurant) {
    // get the restaurant's title
    let restaurantName = document.getElementById("restaurant-title")
    restaurantName.innerHTML = restaurant.name
    getMenuItems(restaurant)
}

function getMenuItems(restaurant) {
    let allMenu = restaurant.menu
    
    let itemOne = document.getElementById("1")
    let itemTwo = document.getElementById("2")
    let itemThree = document.getElementById("3")
    let itemFour = document.getElementById("4")
    let itemFive = document.getElementById("5")

    // itemOne.innerHTML = allMenu.forEach(())
    // console.log(itemOne)
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search)
    const restaurantId = urlParams.get("id")

    getRestaurantDataById(restaurantId)
}