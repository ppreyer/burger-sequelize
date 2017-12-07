$(document).ready(function() {

  $(document).on("click", ".submit", addBurger);
  console.log("button clicked");

});

// $(document).on("click", ".devourBurger", deleteBurger);
//   console.log("burger deleted");

$(document).on("click", ".devourBurger", devourBurger);
  console.log("burger updated");

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
    location.reload();
  });
};

function deleteBurger() {
  $(".devourBurger").click(function() {
    var id = this.id;
    $.ajax({
      url: "/burgers/" + id,
      type: "DELETE"
    }).then(function() {
    location.reload();
  });
  });
}

function devourBurger() {
    var id = this.id;
    console.log("ID NUMBER", id);
    $.ajax({
      url: "/burgers/" + id,
      type: "PUT"
    }).then(getBurgers);
};


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