const express = require("express");
const app = express();
const port = 3000;
const data = require("./data/restaurant-data.json");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home/home.html");
});

app.get("/restaurants", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`MealMatchup is available on http://localhost:${port}`);
});
