let allMenu;

function getRestaurantDataById(restaurantId) {
  fetch("../data/restaurant-data.json")
    .then((response) => response.json())
    .then((data) => {
      let restaurant = data.find((item) => item.id == restaurantId);
      populateRestaurantData(restaurant);
    });
}

function populateRestaurantData(restaurant) {
  let restaurantImg = document.getElementById("restaurant-img");
  let restaurantName = document.getElementById("restaurant-title");

  restaurantImg.setAttribute("src", restaurant.img);
  restaurantName.innerHTML = restaurant.name;

  loadMenuItems(restaurant);
}

function loadMenuItems(restaurant) {
  allMenu = restaurant.menu;

  allMenu.forEach((data) => {
    let allMenu = document.getElementById("menu-items");
    let itemContainer = document.createElement("div");
    let checkbox = document.createElement("input");
    let itemName = document.createElement("span");

    itemContainer.classList.add("item-container");
    itemName.classList.add("item-name");

    checkbox.setAttribute("id", data.id);
    checkbox.setAttribute("type", "checkbox");

    allMenu.appendChild(itemContainer);
    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(itemName);
    // console.log(data);
    itemName.innerHTML = data.name;
  });
  let confirmOrderButton = document.querySelector("button");
  confirmOrderButton.addEventListener("click", confirmOrder);
}

function confirmOrder() {
  let checkboxes = document.querySelectorAll("input");
  let selectedMenuItems = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      let menuItemId = checkbox.id;
      selectedMenuItems.push(menuItemId);
    }
  });
  // console.log(selectedMenuItems);
  getSelectedItemsData(selectedMenuItems);
}

function getSelectedItemsData(selectedItemIds) {
  // console.log(selectedItemIds);
  if (allMenu) {
    let menu = allMenu;

    let selectedItemsData = selectedItemIds.map((itemId) => {
      return menu.find((item) => item.id == itemId);
    });

    let totalCost = selectedItemsData.reduce(
      (total, item) => total + item.cost,
      0
    );
    let estCost = document.getElementById("est-cost");
    estCost.innerHTML = "$" + totalCost.toFixed(2);

    let totalTime = selectedItemsData.reduce(
      (total, item) => total + item.timing,
      0
    );
    let estTime = document.getElementById("est-time");
    estTime.innerHTML = totalTime + " minutes";
  }
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get("restaurantId");

  getRestaurantDataById(restaurantId);
};
