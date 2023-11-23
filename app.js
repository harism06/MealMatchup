const express = require("express");
const app = express();
const port = 3000;
const data = require("./data/restaurant-data.json");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/home/home.html");
});

app.get("/restaurants/home", (req, res) => {
  const homePageData = data.map((restaurant) => {
    return {
      id: restaurant.id,
      name: restaurant.name,
      img: restaurant.img,
    };
  });
  res.send(homePageData);
});

app.get("/restaurants/restaurant-info", (req, res) => {
  const restaurantPageData = data.map((restaurant) => {
    return {
      id: restaurant.id,
      name: restaurant.name,
      img: restaurant.img,
      menu: restaurant.menu,
    };
  });
  res.send(restaurantPageData);
});

app.post("/restaurants/userData", (req, res) => {
  // Log the incoming JSON data from the client
  const userData = req.body;
  let subtotal = getSubtotal(userData);
  let uberFees = getUberFees(subtotal);
  let doorDashFees = getDoorDashFees(subtotal);
  let uberTotalCost = uberTotal(uberFees, subtotal);
  let doorDashTotalCost = doorDashTotal(doorDashFees, subtotal);
  let totalTime = timeToCook(userData);

  // Extract relevant information for logging
  const itemsInfo = userData
    .map((item) => `${item.name} - $${item.cost.toFixed(2)}`)
    .join(", ");
  const items = userData.map((item) => `${item.name}`).join(", ");
  const totalCost = userData
    .reduce((total, item) => total + item.cost, 0)
    .toFixed(2);
  const cookTime = userData.reduce((total, item) => total + item.timing, 0);

  console.log(`\nReceived order for items: ${itemsInfo}`);
  console.log(`Total Cost: $${totalCost}`);
  console.log(`Total Time to Cook: ${cookTime} minutes\n`);

  let remainingTime = cookTime;

  // Function to update the countdown
  function updateCountdown() {
    console.log(`${items} will be ready in ${remainingTime} minutes`);
    remainingTime--;

    if (remainingTime >= 0) {
      // Update the countdown every minute (60000 milliseconds)
      setTimeout(updateCountdown, 60000);
    } else {
      console.log(`${items} is ready!`);
    }
  }

  // Start the countdown
  updateCountdown();

  function getSubtotal(userData) {
    return userData.reduce((total, item) => total + item.cost, 0);
  }

  function getUberFees(subtotal) {
    let deliveryFee = subtotal * (1 / 4);
    let serviceFee = 10;
    return deliveryFee + serviceFee;
  }

  function getDoorDashFees(subtotal) {
    let deliveryFee = subtotal * (1 / 10);
    let serviceFee = 15;
    return deliveryFee + serviceFee;
  }

  function uberTotal(uberFees, subtotal) {
    return subtotal + uberFees;
  }

  function doorDashTotal(doorDashFees, subtotal) {
    return subtotal + doorDashFees;
  }

  function timeToCook(userData) {
    return userData.reduce((total, item) => total + item.timing, 0);
  }

  res.json({
    subtotal,
    uberFees,
    doorDashFees,
    uberTotalCost,
    doorDashTotalCost,
    totalTime,
  });
});

app.listen(process.env.port || port, () => {
  console.log(`MealMatchup is available on http://localhost:${port}`);
});
