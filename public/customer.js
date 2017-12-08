// Event listeners and helper functions for customer data
// When document loads and devour button is clicked - run the addCustomer function
$(document).ready(function() {
    $(document).on("click", ".devourBurger", addCustomer)
});

// Store the value that a user inputs into customer input box and send post request with data
function addCustomer(event) {
    event.preventDefault();
    var newCustomer = {
        name: $(".customer").val().trim()
    };
    console.log("A new customer added", newCustomer);
    $.post("/customers", newCustomer, getCustomers);
};

// Retrieve new customer data from server and reload page
function getCustomers() {
    $.get("/customers", function(data) {
        location.reload();
    })
};