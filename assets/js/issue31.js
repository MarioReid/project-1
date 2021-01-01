$(document).ready(function () {
  function storeAnswer() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }

    console.log($(this));
    console.log($(this)[0].outerText);
    console.log("You clicked an answer button!");
  }
  $(".btn").on("click", storeAnswer);
});
