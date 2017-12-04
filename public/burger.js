$(document).ready(function() {

  $(".submit").on("click", addBurger);

var burgers = [];

function addBurger(event) {
  event.preventDefault();
  var newBurger = {
      burger_name: $(".new-burger").val().trim(),
      devoured: false
    };
  console.log("A new burger", newBurger);
  
  $.post("/api/burgers", newBurger, getBurgers)
    $(".new-burger").val("");
}

function getBurgers() {
  $.get("/api/burgers", function(err, data) {
    burgers = data;
    console.log("Burger Data", burgers);
  })
}


});