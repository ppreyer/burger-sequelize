// Routes to display html page
var path = require("path");

module.exports = function(app) {

    app.get("/burgers", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    });

};