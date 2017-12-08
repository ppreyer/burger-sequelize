$(document).ready(function() {
  $(document).on("click", ".devourBurger", addCustomer)

});

function addCustomer(event) {
  event.preventDefault();
  var newCustomer = {
    name: $(".customer").val().trim()
  };
  console.log("A new customer added", newCustomer);
  $.post("/customers", newCustomer, getCustomers);
};

function getCustomers() {
  $.get("/customers", function(data) {
    location.reload();
  })
};




// function getBurgers() {
//   $.get("/burgers", function(err, data) {
//     // burgers = data;
//     location.reload();
//   });
// };