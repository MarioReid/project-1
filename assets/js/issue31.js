$(document).ready(function () {
  // Variables for local storage
  var selectedAnswers =
    JSON.parse(localStorage.getItem("selected-answers")) || [];

  // Function to select clicked answer
  function selectAnswer(event) {
    var answerText = $(this)[0].outerText;
    var question = $("h1").data("question");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      selectedAnswers.splice(answerText);
    } else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      selectedAnswers.push(answerText);
      localStorage.setItem("question", selectedAnswers);
      console.log(selectedAnswers);
    }
  }

//   selectedAnswers.data("hours", hoursArray[i]);

  // Event listeners
  $(".btn").on("click", selectAnswer);
});
