$(document).ready(function () {
  // Variables
  var APIkey = "563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3";
  var query = {
    questionOne: {
      question: "What areas of your life do you want to change?",
      answers: ["Work", "School", "Relationships", "Health"],
    },
    questionTwo: {
      queston: "What drives you?",
      answers: ["Money", "Recognition", "Power", "Passion", "Helping others"],
    },
    questionThree: {
      question: "If you could have one dream vacation, where would you travel?",
      answers: ["Islands", "Mountains", "Beach", "Country"],
    },
    questionFour: {
      question:
        "What have you always wanted to do but never had the courage to do?",
      answers: ["Travel", "Sports activities", "Go back to school"],
    },
    questionFive: {
      questoin: "What makes you happy?",
      answers: ["Money", "Family", "Helping others", "Fun"],
    },
  };
  var answerOneDivs = {
    work: $("#work"),
    school: $("#school"),
    relationships: $("#relationsips"),
    health: $("#health"),
  };

  var randomImage;

  // Function to keep image
  function keepImage(event) {
    event.preventDefault();
    $(".check-btn").attr("style", "background-color:#6dda6dbd");
  }

  $.ajax({
    url:
      "https://api.pexels.com/v1/search?query=" + query.questionOne.answers[0],
    method: "GET",
    headers: { Authorization: APIkey },
  }).then(function (response) {
    console.log(response);
    // Variables
    var div = answerOneDivs.work;
    var workImageDiv = $("#work-image");
    var workHeader = $("<h2>");
    var checkBtn = $("<button>");
    var timesBtn = $("<button>");
    var questionOneDiv = $("#question-one");
    var questionOne = $("<h2>");
    // Function to create the image and the header
    function createImage() {
      workImageDiv.empty();
      randomImage = Math.floor(Math.random() * response.photos.length);
      // Add question header to the page
      questionOne.text(query.questionOne.question);
      questionOneDiv.append(questionOne);
      // Add work header to the page
      workHeader.text(query.questionOne.answers[0]);
      workImageDiv.append(workHeader);
      div.append(workImageDiv);
      // Create image and add it to the page
      imageSource = response.photos[randomImage].src.original;
      var workImage = $("<img>");
      workImage.attr("src", imageSource);
      workImage.addClass("image-choice");
      workImageDiv.append(workImage);
      div.append(workImageDiv);
    }

    function createButtons() {
      // Create check button
      checkBtn.addClass("btn check-btn");
      var checkIcon = $("<i>");
      checkIcon.addClass("fas fa-check-square fa-lg");
      checkBtn.append(checkIcon);
      // Create times button
      timesBtn.addClass("btn times-btn");
      var timesIcon = $("<i>");
      timesIcon.addClass("fas fa-times-circle fa-lg");
      timesBtn.append(timesIcon);
    }
    createButtons();

    // Append buttons to the work div
    div.append(checkBtn);
    div.append(timesBtn);

    createImage();

    // Function to get a new image when the times button is clicked
    function getNewImage(event) {
      if ($(".check-btn").attr("style", "background-color:#6dda6dbd")) {
        $(".check-btn").attr("style", "background-color: #464646a3");
      }
      createImage();
    }

    // Event listeners
    $(".check-btn").on("click", keepImage);
    $(".times-btn").on("click", getNewImage);
  });
});

// If check  button color = #6dda6dbd, add to vision board
