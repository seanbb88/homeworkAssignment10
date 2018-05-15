var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();


var PORT = process.env.PORT || 8085;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

