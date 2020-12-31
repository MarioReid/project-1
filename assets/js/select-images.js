$(document).ready(function () {
  // Variables
  var APIkey = "563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3";
  var queryAnswers = {
    questionOne: {
      answers: ["Work", "School", "Relationships", "Health"],
    },
    questionTwo: {
      answers: ["Money", "Recognition", "Power", "Passion", "Helping others"],
    },
    questionThree: {
      answers: ["Islands", "Mountains", "Beach", "Country"],
    },
    questionFour: {
      answers: ["Travel", "Sports activities", "Go back to school"],
    },
    questionFive: {
      answers: ["Money", "Family", "Helping others", "Fun"],
    },
  };

  var queryQuestions = {
    questions:["What areas of your life do you want to change?","What drives you?","If you could have one dream vacation, where would you travel?","What have you always wanted to do but never had the courage to do?", "What makes you happy?"]
  };

  var randomImage;

  // Function to keep image
  function keepImage(event) {
    event.preventDefault();
    $(".check-btn").attr("style", "background-color:#6dda6dbd");
  }

  // Ajax call for question one
  // for(var i =0; i < queryAnswers.questionOne.answers.length; i++){
    
  // }
  $.ajax({
    url:
      "https://api.pexels.com/v1/search?query=" + queryAnswers.questionOne.answers[0],
    method: "GET",
    headers: { Authorization: APIkey },
  }).then(function (response) {
    console.log(response);
    // Variables
    var div = $("#" + queryAnswers.questionOne.answers[0].toLowerCase());
    var div = $("#work")
    var imageWrapper = $("#" + queryAnswers.questionOne.answers[0].toLowerCase() + "-image");
    var header = $("<h2>");
    var checkBtn = $("<button>");
    var timesBtn = $("<button>");
    var questionOneDiv = $("#question-one");
    var questionOne = $("<h2>");
    // Function to create the image and the header
    function createImage() {
      imageWrapper.empty();
      randomImage = Math.floor(Math.random() * response.photos.length);
      // Add question header to the page
      questionOne.text(queryQuestions[0]);
      questionOneDiv.append(questionOne);
      // Add work header to the page
      header.text(queryAnswers.questionOne.answers[0]);
      imageWrapper.append(header);
      div.append(imageWrapper);
      // Create image and add it to the page
      imageSource = response.photos[randomImage].src.original;
      var generatedImage = $("<img>");
      generatedImage.attr("src", imageSource);
      generatedImage.addClass("image-choice");
      imageWrapper.append(generatedImage);
      div.append(imageWrapper);
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
