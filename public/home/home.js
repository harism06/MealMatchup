function loadCards() {
  fetch("../data/restaurant-data.json")
    .then((response) => response.json())
    .then((json) =>
      json.forEach((data) => {
        let allCards = document.getElementById("search-results");
        allCards.appendChild(getCard(data));
        // console.log(data.ratings);
      })
    );
}

function getCard(cardData) {
  let container = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("p");
  let ratings = document.createElement("p");
  let showRestaurantButton = document.createElement("button");

  container.classList.add("restaurant-card");
  img.classList.add("restaurant-img");
  title.classList.add("restaurant-title");
  ratings.classList.add("restaurant-ratings");

  showRestaurantButton.classList.add("restaurant-button");
  showRestaurantButton.onclick = () => {
    location.href = `../restaurant/restaurant-info.html?restaurantId=${cardData.id}`;
  };

  img.setAttribute("src", cardData.img);
  showRestaurantButton.setAttribute("id", cardData.id);

  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(ratings);
  container.appendChild(showRestaurantButton);

  title.innerHTML = cardData.name;
  ratings.innerHTML = "\n";
  showRestaurantButton.innerHTML = "View Restaurant";

  // ratings.innerHTML = cardData.ratings
  // I will add the rating later but i plan on using images (like stars)
  // so jus like copy paste the img boilerplate
  return container;
}

window.onload = loadCards;
