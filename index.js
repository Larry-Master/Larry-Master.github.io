const express = require("express");
const { engine } = require("express-handlebars");

const server = express();
const port = 3001;

server.use(express.static('public'));

server.get("/", function (req, res) {
    res.send("Hello Prof");
});

server.listen(port, function () {
    console.log("Express listening on " + port);
});
