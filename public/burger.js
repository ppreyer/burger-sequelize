// Event listeners and helper functions for burger data
$(document).ready(function() {
    // Run addBurger function when the submit button is clicked
    $(document).on("click", ".submit", addBurger);
});
// Run devourBurger function when devourBurger button is clicked
$(document).on("click", ".devourBurger", devourBurger);
console.log("burger updated");

// Store input data into an object and send object in post request to server
// Return data from server by calling getburgers function
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

// Get burger data from server and reload page
function getBurgers() {
    $.get("/burgers", function(err, data) {
        // burgers = data;
        location.reload();
    });
};

// Send data to server in a delete request and then reload the page
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

// Send a put request to update a specific burger and then return data
function devourBurger() {
    var id = this.id;
    console.log("ID NUMBER", id);
    $.ajax({
        url: "/burgers/" + id,
        type: "PUT"
    }).then(getBurgers);
};