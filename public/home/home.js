function loadCards() {
  fetch("http://localhost:3000/restaurants/home")
    .then((response) => response.json())
    .then((json) =>
      json.forEach((data) => {
        let allCards = document.getElementById("restaurant-cards");
        allCards.appendChild(getCard(data));
        // console.log(data.ratings);
      })
    );
}

function getCard(cardData) {
  let cardRows = document.createElement("div");
  let container = document.createElement("div");
  let img = document.createElement("img");
  let cardBody = document.createElement("div");
  let title = document.createElement("h5");
  let showRestaurantButton = document.createElement("a");

  cardRows.classList.add("col");
  container.classList.add("card");

  container.style.width = "18rem";
  img.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  title.classList.add("card-title");
  title.style.color = "#b22222";

  // showRestaurantButton.type = "button";
  showRestaurantButton.classList.add("btn", "btn-outline-danger");
  showRestaurantButton.onclick = () => {
    location.href = `../restaurant/restaurant-info.html?restaurantId=${cardData.id}`;
  };

  img.setAttribute("src", cardData.img);
  showRestaurantButton.setAttribute("id", cardData.id);

  cardRows.appendChild(container);
  container.appendChild(img);
  container.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(showRestaurantButton);

  title.innerHTML = cardData.name;
  showRestaurantButton.innerHTML = "View Restaurant";
  return cardRows;
}

window.onload = loadCards;
