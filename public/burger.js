$(document).ready(function() {

  $(".submit").on("click", addBurger);
  console.log("button clicked");
});

var burgers = [];

function addBurger(event) {
  event.preventDefault();
  var newBurger = {
      burger_name: $(".new-burger").val().trim(),
      devoured: false
    };
  console.log("A new burger", newBurger);
    $.post("/burgers", newBurger, getBurgers)
    $(".new-burger").val("");
};

function getBurgers() {
  $.get("/burgers", function(err, data) {
    burgers = data;
  });
}

// function displayBurgers() {
//   $(".burger-container").empty();
//   var burgersToAdd = [];
//   for(var i = 0; i < burgers.length; i++) {
//     burgersToAdd.push(createNewRow(burgers[i]));
//   }
//   $(".burger-container").append(burgersToAdd);
// }

// function createNewRow(burger) {
//   var html = "<div>";
//   html += burger.burger_name
// }