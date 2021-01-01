$(document).ready(function () {
  // Variables for local storage
  var selectedAnswers =
    JSON.parse(localStorage.getItem("selected-answers")) || [];
  var queryQuestions = {
    questions: [
      "What areas of your life do you want to change?",
      "What drives you?",
      "If you could have one dream vacation, where would you travel?",
      "What have you always wanted to do but never had the courage to do?",
      "What makes you happy?",
    ],
  };

  // Function to select clicked answer
  function selectAnswer(event) {
    var answerText = $(this)[0].outerText;
    var question = queryQuestions.questions[0];
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      selectedAnswers.splice(answerText);
    } else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      selectedAnswers.push(answerText);
      localStorage.setItem(question, selectedAnswers);
      console.log(selectedAnswers);
    }
  }

  // Event listeners
  $(".btn").on("click", selectAnswer);
});
