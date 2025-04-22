const express = require("express");
const server = express();
const port = 3001;

server.get("/", function (req, res) {
    res.send("Hello Prof");
});

server.listen(port, function () {
    console.log("Express listening on " + port);
});
