const express = require("express");
const app = express();

// Set up your middleware and routes here
// For example, you can serve static files (HTML, CSS, JS) like this:
app.use(express.static("public"));

// Define API routes if needed

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
