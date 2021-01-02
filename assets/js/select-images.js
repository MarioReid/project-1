$(document).ready(function () {
  // Variables
  var APIkey = "563492ad6f9170000100000112de21acddfb45349d452259a36f012a";
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
      answers: ["Family", "work", "Helping others", "Fun"],
    },
  };
  
  var queryQuestions = {
    questions: [
      "What areas of your life do you want to change?",
      "What drives you?",
      "If you could have one dream vacation, where would you travel?",
      "What have you always wanted to do but never had the courage to do?",
      "What makes you happy?",
    ],
  };

  var randomImage;

  var i;
  var counterOne = 0;
  var questionOne = 0;

  // Variables for local storage for question one
  var keywordsOne = localStorage
    .getItem(queryQuestions.questions[0])
    .toLowerCase();
  console.log(keywordsOne);
  var keywordsOneArr = keywordsOne.split(",");
  keywordsOneArr.pop();
  console.log(keywordsOneArr);

  // Ajax call for question one
  for (i = 0; i < keywordsOneArr.length; i++) {
    var query = keywordsOneArr[questionOne];
    console.log(query);
    questionOne++;
    var queryUrl = "https://api.pexels.com/v1/search?per_page=50&query=" + query;
    $.ajax({
      url: queryUrl,
      method: "GET",
      headers: { Authorization: APIkey },
    }).then(function (response) {
      console.log(response);
      // Variables
      var div = $("#" + keywordsOneArr[counterOne]);
      var imageWrapper = $("#" + keywordsOneArr[counterOne] + "-image");
      var header = $("<h2>");
      var checkBtn = $("<button>");
      var timesBtn = $("<button>");
      // var questionOneDiv = $("#question-one");
      // var questionOne = $("<h2>");
      var checkBtnId = "#" + keywordsOneArr[counterOne] + "-keep-btn";
      var timesBtnId = "#" + keywordsOneArr[counterOne] + "-remove-btn";
      // Function to create the image and the header
      function createImage() {
        imageWrapper.empty();
        randomImage = Math.floor(Math.random() * response.photos.length);
        // Add question header to the page
        // questionOne.text(queryQuestions.questions[0]);
        // questionOneDiv.append(questionOne);
        // Add work header to the page
        header.text(keywordsOneArr[counterOne]);
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
        checkBtn.attr("id", keywordsOneArr[counterOne] + "-keep-btn");
        var checkIcon = $("<i>");
        checkIcon.addClass("fas fa-check-square fa-lg");
        checkBtn.append(checkIcon);
        // Create times button
        timesBtn.addClass("btn times-btn");
        timesBtn.attr("id", keywordsOneArr[counterOne] + "-remove-btn");
        var timesIcon = $("<i>");
        timesIcon.addClass("fas fa-times-circle fa-lg");
        timesBtn.append(timesIcon);
      }
      createButtons();

      // Function to keep image
      function keepImage(event) {
        event.preventDefault();
        $(checkBtnId).attr("style", "background-color:#6dda6dbd !important");
      }

      // Append buttons to the work div
      div.append(checkBtn);
      div.append(timesBtn);

      createImage();

      // Function to get a new image when the times button is clicked
      function getNewImage(event) {
        if ($(checkBtnId).attr("style", "background-color:#6dda6dbd")) {
          $(checkBtnId).attr("style", "background-color: #464646a3");
        }
        createImage();
      }

      // Event listeners
      $(checkBtnId).on("click", keepImage);
      $(timesBtnId).on("click", getNewImage);
      counterOne++;
    });
  }
 
  // Variables for local storage for question two
  var keywordsTwo = localStorage
    .getItem(queryQuestions.questions[1])
    .toLowerCase();
  var keywordsTwoArr = keywordsTwo.split(",");
  keywordsTwoArr.pop();

  var questionTwo = 0;
  var counterTwo = 0;

  // // AJAX call for Question 2
  for (i = 0; i < keywordsTwoArr.length; i++) {

    var query = keywordsTwoArr[questionTwo];
    console.log(query);
    questionTwo++;
    var queryUrl = "https://api.pexels.com/v1/search?query=" + query;
    $.ajax({
      url: queryUrl,
      method: "GET",
      headers: { Authorization: APIkey },
    }).then(function (response) {
      // Variables
      var div = $("#" + keywordsTwoArr[counterTwo]);
      var imageWrapper = $("#" + keywordsTwoArr[counterTwo] + "-image");
      var header = $("<h2>");
      var checkBtn = $("<button>");
      var timesBtn = $("<button>");
      // var questionOneDiv = $("#question-one");
      // var questionOne = $("<h2>");
      var checkBtnId = "#" + keywordsTwoArr[counterTwo] + "-keep-btn";
      var timesBtnId = "#" + keywordsTwoArr[counterTwo] + "-remove-btn";
      // Function to create the image and the header
      function createImage() {
        imageWrapper.empty();
        randomImage = Math.floor(Math.random() * response.photos.length);
        // Add question header to the page
        // questionOne.text(queryQuestions.questions[0]);
        // questionOneDiv.append(questionOne);
        // Add work header to the page
        header.text(keywordsTwoArr[counterTwo]);
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
        checkBtn.attr("id", keywordsTwoArr[counterTwo] + "-keep-btn");
        var checkIcon = $("<i>");
        checkIcon.addClass("fas fa-check-square fa-lg");
        checkBtn.append(checkIcon);
        // Create times button
        timesBtn.addClass("btn times-btn");
        timesBtn.attr("id", keywordsTwoArr[counterTwo] + "-remove-btn");
        var timesIcon = $("<i>");
        timesIcon.addClass("fas fa-times-circle fa-lg");
        timesBtn.append(timesIcon);
      }
      createButtons();

      // Function to keep image
      function keepImage(event) {
        event.preventDefault();
        $(checkBtnId).attr("style", "background-color:#6dda6dbd !important");
      }

      // Append buttons to the work div
      div.append(checkBtn);
      div.append(timesBtn);

      createImage();

      // Function to get a new image when the times button is clicked
      function getNewImage(event) {
        if ($(checkBtnId).attr("style", "background-color:#6dda6dbd")) {
          $(checkBtnId).attr("style", "background-color: #464646a3");
        }
        createImage();
      }

      // Event listeners
      $(checkBtnId).on("click", keepImage);
      $(timesBtnId).on("click", getNewImage);
      counterTwo++;
    });
  }

  // // AJAX call for Question 3
  // $.ajax({
  //   url:
  //     "https://api.pexels.com/v1/search?query=" +
  //     queryAnswers.questionThree.answers[0],
  //   method: "GET",
  //   headers: { Authorization: APIkey },
  // }).then(function (response) {
  //   // Variables
  //   var div = $("#" + queryIds.questionThree.answers[0]);
  //   var imageWrapper = $("#" + queryIds.questionThree.answers[0] + "-image");
  //   var header = $("<h2>");
  //   var checkBtn = $("<button>");
  //   var timesBtn = $("<button>");
  //   var questionThreeDiv = $("#question-three");
  //   var questionThree = $("<h2>");
  //   var checkBtnId = "#" + queryIds.questionThree.answers[0] + "-keep-btn";
  //   var timesBtnId = "#" + queryIds.questionThree.answers[0] + "-remove-btn";
  //   // Function to create the image and the header
  //   function createImage() {
  //     imageWrapper.empty();
  //     randomImage = Math.floor(Math.random() * response.photos.length);
  //     // Add question header to the page
  //     questionThree.text(queryQuestions[2]);
  //     questionThreeDiv.append(questionThree);
  //     // Add answer header to the page
  //     header.text(queryAnswers.questionThree.answers[0]);
  //     imageWrapper.append(header);
  //     div.append(imageWrapper);
  //     // Create image and add it to the page
  //     imageSource = response.photos[randomImage].src.original;
  //     var generatedImage = $("<img>");
  //     generatedImage.attr("src", imageSource);
  //     generatedImage.addClass("image-choice");
  //     imageWrapper.append(generatedImage);
  //     div.append(imageWrapper);
  //   }

  //   function createButtons() {
  //     // Create check button
  //     console.log(checkBtnId);
  //     checkBtn.addClass("btn check-btn");
  //     checkBtn.attr("id", queryIds.questionThree.answers[0] + "-keep-btn");
  //     var checkIcon = $("<i>");
  //     checkIcon.addClass("fas fa-check-square fa-lg");
  //     checkBtn.append(checkIcon);
  //     // Create times button
  //     timesBtn.addClass("btn times-btn");
  //     timesBtn.attr("id", queryIds.questionThree.answers[0] + "-remove-btn");
  //     var timesIcon = $("<i>");
  //     timesIcon.addClass("fas fa-times-circle fa-lg");
  //     timesBtn.append(timesIcon);
  //   }
  //   createButtons();

  //   // Function to keep image
  //   function keepImage(event) {
  //     event.preventDefault();
  //     $(checkBtnId).attr("style", "background-color:#6dda6dbd");
  //   }

  //   // Append buttons to the work div
  //   div.append(checkBtn);
  //   div.append(timesBtn);

  //   createImage();

  //   // Function to get a new image when the times button is clicked
  //   function getNewImage(event) {
  //     if ($(checkBtnId).attr("style", "background-color:#6dda6dbd")) {
  //       $(checkBtnId).attr("style", "background-color: #464646a3");
  //     }
  //     createImage();
  //   }

  //   // Event listeners
  //   $(checkBtnId).on("click", keepImage);
  //   $(timesBtnId).on("click", getNewImage);
  // });

  // // Question 4
  // $.ajax({
  //   url:
  //     "https://api.pexels.com/v1/search?query=" +
  //     queryAnswers.questionFour.answers[0],
  //   method: "GET",
  //   headers: { Authorization: APIkey },
  // }).then(function (response) {
  //   // Variables
  //   var div = $("#" + queryIds.questionFour.answers[0]);
  //   var imageWrapper = $("#" + queryIds.questionFour.answers[0] + "-image");
  //   var header = $("<h2>");
  //   var checkBtn = $("<button>");
  //   var timesBtn = $("<button>");
  //   var questionFourDiv = $("#question-three");
  //   var questionFour = $("<h2>");
  //   var checkBtnId = "#" + queryIds.questionFour.answers[0] + "-keep-btn";
  //   var timesBtnId = "#" + queryIds.questionFour.answers[0] + "-remove-btn";
  //   // Function to create the image and the header
  //   function createImage() {
  //     imageWrapper.empty();
  //     randomImage = Math.floor(Math.random() * response.photos.length);
  //     // Add question header to the page
  //     questionFour.text(queryQuestions[3]);
  //     questionFourDiv.append(questionFour);
  //     // Add answer header to the page
  //     header.text(queryAnswers.questionFour.answers[0]);
  //     imageWrapper.append(header);
  //     div.append(imageWrapper);
  //     // Create image and add it to the page
  //     imageSource = response.photos[randomImage].src.original;
  //     var generatedImage = $("<img>");
  //     generatedImage.attr("src", imageSource);
  //     generatedImage.addClass("image-choice");
  //     imageWrapper.append(generatedImage);
  //     div.append(imageWrapper);
  //   }

  //   function createButtons() {
  //     // Create check button
  //     console.log(checkBtnId);
  //     checkBtn.addClass("btn check-btn");
  //     checkBtn.attr("id", queryIds.questionFour.answers[0] + "-keep-btn");
  //     var checkIcon = $("<i>");
  //     checkIcon.addClass("fas fa-check-square fa-lg");
  //     checkBtn.append(checkIcon);
  //     // Create times button
  //     timesBtn.addClass("btn times-btn");
  //     timesBtn.attr("id", queryIds.questionFour.answers[0] + "-remove-btn");
  //     var timesIcon = $("<i>");
  //     timesIcon.addClass("fas fa-times-circle fa-lg");
  //     timesBtn.append(timesIcon);
  //   }
  //   createButtons();

  //   // Function to keep image
  //   function keepImage(event) {
  //     event.preventDefault();
  //     $(checkBtnId).attr("style", "background-color:#6dda6dbd");
  //   }

  //   // Append buttons to the work div
  //   div.append(checkBtn);
  //   div.append(timesBtn);

  //   createImage();

  //   // Function to get a new image when the times button is clicked
  //   function getNewImage(event) {
  //     if ($(checkBtnId).attr("style", "background-color:#6dda6dbd")) {
  //       $(checkBtnId).attr("style", "background-color: #464646a3");
  //     }
  //     createImage();
  //   }

  //   // Event listeners
  //   $(checkBtnId).on("click", keepImage);
  //   $(timesBtnId).on("click", getNewImage);
  // });
  // // Question 5
  // $.ajax({
  //   url:
  //     "https://api.pexels.com/v1/search?query=" +
  //     queryAnswers.questionFive.answers[0],
  //   method: "GET",
  //   headers: { Authorization: APIkey },
  // }).then(function (response) {
  //   console.log(response);
  //   // Variables
  //   var div = $("#" + queryIds.questionFive.answers[0]);
  //   var imageWrapper = $("#" + queryIds.questionFive.answers[0] + "-image");
  //   var header = $("<h2>");
  //   var checkBtn = $("<button>");
  //   var timesBtn = $("<button>");
  //   var questionFiveDiv = $("#question-five");
  //   var questionFive = $("<h2>");
  //   var checkBtnId = "#" + queryIds.questionFive.answers[0] + "-keep-btn";
  //   var timesBtnId = "#" + queryIds.questionFive.answers[0] + "-remove-btn";
  //   // Function to create the image and the header
  //   function createImage() {
  //     imageWrapper.empty();
  //     randomImage = Math.floor(Math.random() * response.photos.length);
  //     // Add question header to the page
  //     questionFive.text(queryQuestions[4]);
  //     questionFiveDiv.append(questionFive);
  //     // Add answer header to the page
  //     header.text(queryAnswers.questionFive.answers[0]);
  //     imageWrapper.append(header);
  //     div.append(imageWrapper);
  //     // Create image and add it to the page
  //     imageSource = response.photos[randomImage].src.original;
  //     var generatedImage = $("<img>");
  //     generatedImage.attr("src", imageSource);
  //     generatedImage.addClass("image-choice");
  //     imageWrapper.append(generatedImage);
  //     div.append(imageWrapper);
  //   }

  //   function createButtons() {
  //     // Create check button
  //     console.log(checkBtnId);
  //     checkBtn.addClass("btn check-btn");
  //     checkBtn.attr("id", queryIds.questionFive.answers[0] + "-keep-btn");
  //     var checkIcon = $("<i>");
  //     checkIcon.addClass("fas fa-check-square fa-lg");
  //     checkBtn.append(checkIcon);
  //     // Create times button
  //     timesBtn.addClass("btn times-btn");
  //     timesBtn.attr("id", queryIds.questionFive.answers[0] + "-remove-btn");
  //     var timesIcon = $("<i>");
  //     timesIcon.addClass("fas fa-times-circle fa-lg");
  //     timesBtn.append(timesIcon);
  //   }
  //   createButtons();

  //   // Function to keep image
  //   function keepImage(event) {
  //     event.preventDefault();
  //     $(checkBtnId).attr("style", "background-color:#6dda6dbd");
  //   }

  //   // Append buttons to the work div
  //   div.append(checkBtn);
  //   div.append(timesBtn);

  //   createImage();

  //   // Function to get a new image when the times button is clicked
  //   function getNewImage(event) {
  //     if ($(checkBtnId).attr("style", "background-color:#6dda6dbd")) {
  //       $(checkBtnId).attr("style", "background-color: #464646a3");
  //     }
  //     createImage();
  //   }

  //   // Event listeners
  //   $(checkBtnId).on("click", keepImage);
  //   $(timesBtnId).on("click", getNewImage);
  // });
});

// If check  button color = #6dda6dbd, add to vision board
