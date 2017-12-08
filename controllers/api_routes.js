var db = require("../models");
// Routes for burger and customer CRUDs

module.exports = function(app) {
  // Read all burgers in table using sequelize + handlebars
  app.get("/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(result) {
      var hbsObject = {
        burgers: result
      };
      console.log("HBS", hbsObject);
      return res.render("index", hbsObject);
    });
  });

// Create a new burger using sequelize
  app.post("/burgers", function(req, res) {
    var newBurger = {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }
    db.Burger.create(newBurger).then(function(result) {
      return res.json(result);
    });
  });

// Delete an existing burger in DB using sequelize
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

// Update a burger's devoured status using sequelize
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