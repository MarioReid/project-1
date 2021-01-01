$(document).ready(function () {
  function storeAnswer() {
    console.log("You clicked an answer button!");
  }
  $(".btn").on("click", storeAnswer);
});
