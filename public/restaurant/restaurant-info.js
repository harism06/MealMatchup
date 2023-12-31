let allMenu;

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get("restaurantId");
  // console.log(restaurantId);

  getRestaurantDataById(restaurantId);
};

function getRestaurantDataById(restaurantId) {
  fetch(`http://localhost:3000/restaurants/restaurant-info`)
    .then((response) => response.json())
    .then((data) => {
      let restaurant = data.find((item) => item.id == restaurantId);
      populateRestaurantData(restaurant);
      // console.log(restaurant);
    });
}

function populateRestaurantData(restaurant) {
  let imgBar = document.getElementById("navbar-img");
  let titleBar = document.getElementById("navbar-title");
  let restaurantImg = document.createElement("img");
  let restaurantName = document.createElement("h1");

  restaurantImg.setAttribute("id", "restaurant-img");
  restaurantName.setAttribute("id", "restaurant-title");
  restaurantImg.setAttribute("src", restaurant.img);
  restaurantName.innerHTML = restaurant.name;

  restaurantImg.classList.add("d-block", "mx-auto");
  restaurantImg.style.padding = "10px";
  titleBar.style.maxWidth = "400px";
  titleBar.style.margin = "0px auto";
  titleBar.style.borderRadius = "10px";
  imgBar.style.maxWidth = "400px";
  imgBar.style.margin = "10px auto";
  imgBar.style.borderRadius = "10px";

  imgBar.appendChild(restaurantImg);
  titleBar.appendChild(restaurantName);

  loadMenuItems(restaurant);
}

function loadMenuItems(restaurant) {
  allMenu = restaurant.menu;

  allMenu.forEach((item) => {
    let allMenu = document.getElementById("menu-items");
    let itemsList = document.createElement("li");
    let itemContainer = document.createElement("div");
    let checkbox = document.createElement("input");
    let itemName = document.createElement("label");

    itemContainer.classList.add("form-check");
    itemName.classList.add("form-check-label");
    itemsList.classList.add("list-group-item");

    checkbox.setAttribute("id", item.id);
    checkbox.classList.add("form-check-input");
    checkbox.setAttribute("type", "checkbox");
    itemName.setAttribute("for", "flexCheckDefault");

    allMenu.appendChild(itemsList);
    itemsList.appendChild(itemContainer);
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

  if (!userInput) {
    alert("Please enter the mileage for delivery.");
    return; // Stop further execution
  } else if (userInput <= 0 || userInput > 35) {
    alert("Please enter a mileage value between 1 and 35.");
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
  document.getElementById("uber-subtotal").innerHTML =
    "$" + data.subtotal.toFixed(2);
  document.getElementById("uber-est-fees").innerHTML =
    "$" + data.uberFees.toFixed(2);
  document.getElementById("uber-est-cost").innerHTML =
    "$" + data.uberTotalCost.toFixed(2);
  document.getElementById("uber-prep-time").innerHTML =
    data.totalTime.toFixed(0) + " minutes";
  document.getElementById("uber-est-time").innerHTML =
    (data.totalTime + userInput * (7 / 4)).toFixed(0) + " minutes";

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
