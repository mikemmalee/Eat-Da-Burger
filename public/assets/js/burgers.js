$(function() {
    $(".change-status").on("click", function(event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("newstatus");
  
        var newDevouredState = {
            devoured: newStatus
        };
  
        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
            console.log("changed status to", newStatus);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
  

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event
        event.preventDefault();
  
        var newBurger = {
            burger_name: $("#burger").val(),
            devoured: $("[burger_name=devoured]:checked").val()
        };
  
        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("Added new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

  
});