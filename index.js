const express = require("express");
const { engine } = require("express-handlebars");
const path = require('path');
const fs = require('fs');

const server = express();
const port = 3001;


// Set hbs as the view engine
server.engine("hbs", engine({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  extname: '.hbs',  // Use .hbs extension
}));
server.set("view engine", "hbs");

// Serve static files in "public" folder
server.use(express.static("public"));

// Route for course list
server.get("/course_list", (req, res) => {
  // Load the data from the 'courses.json' file in the "data" folder
  fs.readFile(path.join(__dirname, 'data', 'courses.json'), 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the JSON file", err);
      return res.status(500).send("Internal Server Error");
    }

    // Parse the data and render the page with the data
    const jsonData = JSON.parse(data); // Parse the JSON string to an object
    res.render("course_list", jsonData); // Render the Handlebars template with the JSON data
  });
});

server.listen(port, function () {
  console.log("Express listening on " + port);

});
