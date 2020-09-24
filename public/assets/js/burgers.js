// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#newburger").val().trim(), devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new Burger");
        location.reload();
      }
    );

    $(".eatburger").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      var changeDevoured = {
        devoured: 1
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: changeDevoured
      }).then(
        function () {
          console.log("Burger has been eaten");
          location.reload();
        });
    });
  });
});
