const express = require("express");
const { engine } = require("express-handlebars");
const path = require('path');
const server = express();
const port = 3001;


// Set Handlebars as the view engine
server.engine("hbs", engine({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  extname: '.hbs',  // Use '.hbs' extension
}));
server.set("view engine", "hbs");

// Serve static files (e.g., images, CSS, JS)
server.use(express.static("public"));

// Route to render the page with dynamic content
server.get("/course_list", (req, res) => {
  // Data to pass to the Handlebars template
  const data = {
    event_name: "Course Selection",
    student_name: "Student XYZ",
    courses: [
      "Web Technology",
      "Game Engines",
      "Game Programming",
      "Networking",
      "Informatics 3",
      "Math 2"
    ],
    uni_name: "HTW-Berlin"
  };

  // Render the page with the provided data
   res.render("course_list", data);
});

// Start server
server.listen(port, function () {
  console.log("Express listening on " + port);
});
