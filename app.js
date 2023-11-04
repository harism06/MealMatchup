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
  let subtotal;
  let uberFees;
  let doorDashFees;
  let totalTime;

  console.log("Received user data:", userData);
  console.log(getSubtotal(userData));
  // console.log(getUberFees(subtotal));
  // console.log(getDoorDashFees(subtotal));
  // console.log(uberTotal(uberFees));
  // console.log(doorDashTotal(doorDashFees));
  console.log(timeToCook(totalTime));

  function getSubtotal(userData) {
    subtotal = userData.reduce((total, item) => total + item.cost, 0);
    return subtotal;
  }

  function getUberFees(subtotal) {
    let deliveryFee = subtotal * (1 / 4);
    let serviceFee = 10;

    uberFees = deliveryFee + serviceFee;

    return uberFees;
  }

  function getDoorDashFees(subtotal) {
    let deliveryFee = subtotal * (1 / 10);
    let serviceFee = 15;

    doorDashFees = deliveryFee + serviceFee;

    return doorDashFees;
  }

  function uberTotal(uberFees) {
    let uberTotal = subtotal + uberFees;
    return uberTotal;
  }

  function doorDashTotal(doorDashFees) {
    let doorDashTotal = subtotal + doorDashFees;
    return doorDashTotal;
  }

  function timeToCook(totalTime) {
    totalTime = userData.reduce((total, item) => total + item.timing, 0);
    return totalTime;
  }

  // Send a response if needed
  res.send("Data received successfully");
});

app.listen(port, () => {
  console.log(`MealMatchup is available on http://localhost:${port}`);
});
