var db = require("../models");

module.exports = function(app) {
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/burgers", function(req, res) {
    var newBurger = req.body;
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    });
  });

app.delete("/api/burgers/:id", function(req, res) {
  db.Burger.destroy({
    where: 
      {
        id: req.params.id
      }

  });
});


};