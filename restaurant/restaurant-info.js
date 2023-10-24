function getRestaurantDataById(restaurantId) {
    fetch("../data/restaurant-data.json")
    .then((response) => (response.json()))
    .then((data) => {
        let restaurant = data.find((item) => item.id == restaurantId)
        let restaurantName = document.getElementById("restaurant-title")
        restaurantName.innerHTML = restaurant.name
    })
    
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search)
    const restaurantId = urlParams.get("id")

    getRestaurantDataById(restaurantId)
    .then((restaurantData) => {
        if (restaurantData) {
            console.log(restaurantData)
        }
        else {
            console.log("Restuarant not found")
        }
    })
}