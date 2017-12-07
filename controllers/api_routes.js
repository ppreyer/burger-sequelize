var db = require("../models");

module.exports = function(app) {
  app.get("/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(result) {
      var hbsObject = {
        burgers: result
      };
      console.log("HBS", hbsObject);
      return res.render("index", hbsObject);
    });
  });

  app.post("/burgers", function(req, res) {
    var newBurger = {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }
    db.Burger.create(newBurger).then(function(result) {
      return res.json(result);
    });
  });

app.delete("/burgers/:id", function(req, res) {
  db.Burger.destroy({
    where: 
      {
        id: req.params.id
      }
  }).then(function(result) {
    console.log("Burger Deleted", result);
    return res.json(result);
  });
});

app.put("/burgers/:id", function(req, res) {
  console.log("ID", req.params.id);
  db.Burger.update({
    devoured: true
  },
  {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.json(result);
  });
});


};