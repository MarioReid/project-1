$(document).ready(function () {
  // Function to select clicked answer
  function selectAnswer() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }
  }
  
  // Function to save answer to local storage
  function storeAnswer() {
    console.log($(this));
    console.log($(this)[0].outerText);
    console.log("you clicked an answer Button!");
  }

  // Event listeners
  $(".btn").on("click", selectAnswer);
  $("#nextBtn").on("click", storeAnswer);
});
