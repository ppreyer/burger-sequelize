var express = require("express");
var methodOveride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/api_routes.js")(app);
require("./controllers/html_routes.js")(app);

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on " + PORT);
  });
});