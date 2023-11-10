let allMenu;

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get("restaurantId");
  console.log(restaurantId);

  getRestaurantDataById(restaurantId);
};

function getRestaurantDataById(restaurantId) {
  fetch(`http://localhost:3000/restaurants/restaurant-info?id=${restaurantId}`)
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

  allMenu.forEach((item) => {
    let allMenu = document.getElementById("menu-items");
    let itemContainer = document.createElement("div");
    let checkbox = document.createElement("input");
    let itemName = document.createElement("span");

    itemContainer.classList.add("item-container");
    itemName.classList.add("item-name");

    checkbox.setAttribute("id", item.id);
    checkbox.setAttribute("type", "checkbox");

    allMenu.appendChild(itemContainer);
    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(itemName);
    // console.log(data);
    itemName.innerHTML = item.name;
  });

  let confirmOrderButton = document.querySelector("button");
  confirmOrderButton.onclick = () => {
    confirmOrder();
  };
}

function confirmOrder() {
  let checkboxes = document.querySelectorAll("input");
  let selectedMenuItems = [];
  let lastInput = checkboxes[checkboxes.length - 1];
  let userInput = lastInput.value;

  if (!userInput || userInput <= 0) {
    alert("Please enter the mileage for delivery.");
    return; // Stop further execution
  }

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      let menuItemId = checkbox.id;
      selectedMenuItems.push(menuItemId);
    }
  });

  if (selectedMenuItems.length === 0) {
    alert("Please select at least one item.");
    return; // Stop further execution
  }

  if (allMenu) {
    let menu = allMenu;

    let selectedItemsData = selectedMenuItems.map((itemId) => {
      return menu.find((item) => item.id == itemId);
    });

    fetch("http://localhost:3000/restaurants/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedItemsData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update HTML elements with the calculated data
        updateHtmlElements(data, userInput);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function updateHtmlElements(data, userInput) {
  // Update the HTML elements with the received data
  // let subtotalElements = document.querySelectorAll(".subtotal");
  // let estFeesElements = document.querySelectorAll(".est-fees");
  // let estCostElements = document.querySelectorAll(".est-cost");
  // let prepTimeElements = document.querySelectorAll(".prep-time");
  // let estTimeElements = document.querySelectorAll(".est-time");

  // subtotalElements.forEach((element) => {
  //   element.innerHTML = "$" + data.subtotal.toFixed(2);
  // });

  // estFeesElements.forEach((element) => {
  //   element.innerHTML = "$" + data.uberFees.toFixed(2);
  // });

  // estCostElements.forEach((element) => {
  //   element.innerHTML = "$" + data.uberTotalCost.toFixed(2);
  // });

  // prepTimeElements.forEach((element) => {
  //   element.innerHTML = data.totalTime.toFixed(0) + " minutes";
  // });

  // estTimeElements.forEach((element) => {
  //   element.innerHTML =
  //     (data.totalTime + userInput * (5 / 4)).toFixed(0) + " minutes";
  // });

  document.getElementById("uber-subtotal").innerHTML =
    "$" + data.subtotal.toFixed(2);
  document.getElementById("uber-est-fees").innerHTML =
    "$" + data.uberFees.toFixed(2);
  document.getElementById("uber-est-cost").innerHTML =
    "$" + data.uberTotalCost.toFixed(2);
  document.getElementById("uber-prep-time").innerHTML =
    data.totalTime.toFixed(0) + " minutes";
  document.getElementById("uber-est-time").innerHTML =
    (data.totalTime + userInput * (5 / 4)).toFixed(0) + " minutes";

  // Update the HTML elements with the received data for Door Dash
  document.getElementById("door-dash-subtotal").innerHTML =
    "$" + data.subtotal.toFixed(2);
  document.getElementById("door-dash-est-fees").innerHTML =
    "$" + data.doorDashFees.toFixed(2);
  document.getElementById("door-dash-est-cost").innerHTML =
    "$" + data.doorDashTotalCost.toFixed(2);
  document.getElementById("door-dash-prep-time").innerHTML =
    data.totalTime.toFixed(0) + " minutes";
  document.getElementById("door-dash-est-time").innerHTML =
    (data.totalTime + userInput * (5 / 4)).toFixed(0) + " minutes";
}
