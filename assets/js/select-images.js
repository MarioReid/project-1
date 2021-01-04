$(document).ready(function () {
  // Variables
  // API keys:
  // 563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3
  // 563492ad6f9170000100000112de21acddfb45349d452259a36f012a
  // 563492ad6f91700001000001976c9517bf874507bcc729cac0319f27

  var APIkey = "563492ad6f91700001000001976c9517bf874507bcc729cac0319f27";

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

  var chosenImages = [];
  localStorage.removeItem("images");

  // Variables for local storage for question one
  var keywordsOne = localStorage
    .getItem(queryQuestions.questions[0])
    .toLowerCase();
  var keywordsOneArr = keywordsOne.split(",");
  keywordsOneArr.pop();
  var counterOne = 0;
  var questionOne = 0;

  // Ajax call for question one
  for (i = 0; i < keywordsOneArr.length; i++) {
    var query = keywordsOneArr[questionOne];
    questionOne++;
    var queryUrl =
      "https://api.pexels.com/v1/search?per_page=50&query=" + query;
    $.ajax({
      url: queryUrl,
      method: "GET",
      headers: { Authorization: APIkey },
    }).then(function (response) {
      // Variables
      var div = $("#" + keywordsOneArr[counterOne]);
      var imageWrapper = $("#" + keywordsOneArr[counterOne] + "-image");
      var header = $("<h2>");
      var checkBtn = $("<button>");
      var timesBtn = $("<button>");
      var checkBtnId = "#" + keywordsOneArr[counterOne] + "-keep-btn";
      var timesBtnId = "#" + keywordsOneArr[counterOne] + "-remove-btn";
      // Function to create the image and the header
      function createImage() {
        imageWrapper.empty();
        randomImage = Math.floor(Math.random() * response.photos.length);
        // Create image and add it to the page
        imageSource = response.photos[randomImage].src.large;
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
        var chosenImagesSrc = $(checkBtnId)[0].nextSibling.nextElementSibling
          .lastChild.currentSrc;
        $(checkBtnId).attr("style", "background-color:#6dda6dbd !important");
        if (
          $(checkBtnId).attr("style", "background-color: #6dda6dbd !important")
        ) {
          chosenImages.push(chosenImagesSrc);
        }
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

  // AJAX call for question two
  for (i = 0; i < keywordsTwoArr.length; i++) {
    var query = keywordsTwoArr[questionTwo];
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
      var checkBtnId = "#" + keywordsTwoArr[counterTwo] + "-keep-btn";
      var timesBtnId = "#" + keywordsTwoArr[counterTwo] + "-remove-btn";
      // Function to create the image and the header
      function createImage() {
        imageWrapper.empty();
        randomImage = Math.floor(Math.random() * response.photos.length);
        // Create image and add it to the page
        imageSource = response.photos[randomImage].src.large;
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
        var chosenImagesSrc = $(checkBtnId)[0].nextSibling.nextElementSibling
          .lastChild.currentSrc;
        $(checkBtnId).attr("style", "background-color:#6dda6dbd !important");
        if (
          $(checkBtnId).attr("style", "background-color: #6dda6dbd !important")
        ) {
          chosenImages.push(chosenImagesSrc);
        }
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

  // Variables for local storage for question three
  var keywordsThree = localStorage
    .getItem(queryQuestions.questions[2])
    .toLowerCase();
  var keywordsThreeArr = keywordsThree.split(",");
  keywordsThreeArr.pop();

  var questionThree = 0;
  var counterThree = 0;

  // AJAX call for question three
  for (i = 0; i < keywordsThreeArr.length; i++) {
    var query = keywordsThreeArr[questionThree];
    questionThree++;
    var queryUrl = "https://api.pexels.com/v1/search?query=" + query;
    $.ajax({
      url: queryUrl,
      method: "GET",
      headers: { Authorization: APIkey },
    }).then(function (response) {
      // Variables
      var div = $("#" + keywordsThreeArr[counterThree]);
      var imageWrapper = $("#" + keywordsThreeArr[counterThree] + "-image");
      var header = $("<h2>");
      var checkBtn = $("<button>");
      var timesBtn = $("<button>");
      var checkBtnId = "#" + keywordsThreeArr[counterThree] + "-keep-btn";
      var timesBtnId = "#" + keywordsThreeArr[counterThree] + "-remove-btn";
      // Function to create the image and the header
      function createImage() {
        imageWrapper.empty();
        randomImage = Math.floor(Math.random() * response.photos.length);
        // Create image and add it to the page
        imageSource = response.photos[randomImage].src.large;
        var generatedImage = $("<img>");
        generatedImage.attr("src", imageSource);
        generatedImage.addClass("image-choice");
        imageWrapper.append(generatedImage);
        div.append(imageWrapper);
      }
      function createButtons() {
        // Create check button
        checkBtn.addClass("btn check-btn");
        checkBtn.attr("id", keywordsThreeArr[counterThree] + "-keep-btn");
        var checkIcon = $("<i>");
        checkIcon.addClass("fas fa-check-square fa-lg");
        checkBtn.append(checkIcon);
        // Create times button
        timesBtn.addClass("btn times-btn");
        timesBtn.attr("id", keywordsThreeArr[counterThree] + "-remove-btn");
        var timesIcon = $("<i>");
        timesIcon.addClass("fas fa-times-circle fa-lg");
        timesBtn.append(timesIcon);
      }
      createButtons();

      // Function to keep image
      function keepImage(event) {
        event.preventDefault();
        var chosenImagesSrc = $(checkBtnId)[0].nextSibling.nextElementSibling
          .lastChild.currentSrc;
        $(checkBtnId).attr("style", "background-color:#6dda6dbd !important");
        if (
          $(checkBtnId).attr("style", "background-color: #6dda6dbd !important")
        ) {
          chosenImages.push(chosenImagesSrc);
        }
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
      counterThree++;
    });
  }

  // Variables for local storage for question Four
  var keywordsFour = localStorage
    .getItem(queryQuestions.questions[3])
    .toLowerCase();
  var keywordsFourArr = keywordsFour.split(",");
  keywordsFourArr.pop();
  var counterFour = 0;
  var questionFour = -1;

  // Ajax call for question Four
  for (i = 0; i < keywordsFourArr.length; i++) {
    questionFour++;
    var query = keywordsFourArr[questionFour];
      console.log(questionFour)
    // questionFour++;
      console.log(questionFour)
    var queryUrl =
      "https://api.pexels.com/v1/search?per_page=50&query=" + query;
    $.ajax({
      url: queryUrl,
      method: "GET",
      headers: { Authorization: APIkey },
    }).then(function (response) {
     console.log(response)
      // Variables
      var div = $("#" + keywordsFourArr[counterFour]);
      var imageWrapper = $("#" + keywordsFourArr[counterFour] + "-image");
      var header = $("<h2>");
      var checkBtn = $("<button>");
      var timesBtn = $("<button>");
      var checkBtnId = "#" + keywordsFourArr[counterFour] + "-keep-btn";
      var timesBtnId = "#" + keywordsFourArr[counterFour] + "-remove-btn";
      // Function to create the image and the header
      function createImage() {
        imageWrapper.empty();
        randomImage = Math.floor(Math.random() * response.photos.length);
        // Create image and add it to the page
        imageSource = response.photos[randomImage].src.large;
        var generatedImage = $("<img>");
        generatedImage.attr("src", imageSource);
        generatedImage.addClass("image-choice");
        imageWrapper.append(generatedImage);
        div.append(imageWrapper);
      }
      function createButtons() {
        // Create check button
        checkBtn.addClass("btn check-btn");
        checkBtn.attr("id", keywordsFourArr[counterFour] + "-keep-btn");
        var checkIcon = $("<i>");
        checkIcon.addClass("fas fa-check-square fa-lg");
        checkBtn.append(checkIcon);
        // Create times button
        timesBtn.addClass("btn times-btn");
        timesBtn.attr("id", keywordsFourArr[counterFour] + "-remove-btn");
        var timesIcon = $("<i>");
        timesIcon.addClass("fas fa-times-circle fa-lg");
        timesBtn.append(timesIcon);
      }
      createButtons();

      // Function to keep image
      function keepImage(event) {
        event.preventDefault();
        var chosenImagesSrc = $(checkBtnId)[0].nextSibling.nextElementSibling
          .lastChild.currentSrc;
        $(checkBtnId).attr("style", "background-color:#6dda6dbd !important");
        if (
          $(checkBtnId).attr("style", "background-color: #6dda6dbd !important")
        ) {
          chosenImages.push(chosenImagesSrc);
        }
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
      counterFour++;
    });
  }

  // Variables for local storage for question five
  var keywordsFive = localStorage
    .getItem(queryQuestions.questions[4])
    .toLowerCase();
  var keywordsFiveArr = keywordsFive.split(",");
  keywordsFiveArr.pop();

  var questionFive = 0;
  var counterFive = 0;

  // AJAX call for question five
  for (i = 0; i < keywordsFiveArr.length; i++) {
    var query = keywordsFiveArr[questionFive];
    questionFive++;
    var queryUrl = "https://api.pexels.com/v1/search?query=" + query;
    $.ajax({
      url: queryUrl,
      method: "GET",
      headers: { Authorization: APIkey },
    }).then(function (response) {
      // Variables
      var div = $("#" + keywordsFiveArr[counterFive]);
      var imageWrapper = $("#" + keywordsFiveArr[counterFive] + "-image");
      var header = $("<h2>");
      var checkBtn = $("<button>");
      var timesBtn = $("<button>");
      var checkBtnId = "#" + keywordsFiveArr[counterFive] + "-keep-btn";
      var timesBtnId = "#" + keywordsFiveArr[counterFive] + "-remove-btn";
      // Function to create the image and the header
      function createImage() {
        imageWrapper.empty();
        randomImage = Math.floor(Math.random() * response.photos.length);
        // Create image and add it to the page
        imageSource = response.photos[randomImage].src.large;
        var generatedImage = $("<img>");
        generatedImage.attr("src", imageSource);
        generatedImage.addClass("image-choice");
        imageWrapper.append(generatedImage);
        div.append(imageWrapper);
      }
      function createButtons() {
        // Create check button
        checkBtn.addClass("btn check-btn");
        checkBtn.attr("id", keywordsFiveArr[counterFive] + "-keep-btn");
        var checkIcon = $("<i>");
        checkIcon.addClass("fas fa-check-square fa-lg");
        checkBtn.append(checkIcon);
        // Create times button
        timesBtn.addClass("btn times-btn");
        timesBtn.attr("id", keywordsFiveArr[counterFive] + "-remove-btn");
        var timesIcon = $("<i>");
        timesIcon.addClass("fas fa-times-circle fa-lg");
        timesBtn.append(timesIcon);
      }
      createButtons();

      // Function to keep image
      function keepImage(event) {
        event.preventDefault();
        var chosenImagesSrc = $(checkBtnId)[0].nextSibling.nextElementSibling
          .lastChild.currentSrc;
        $(checkBtnId).attr("style", "background-color:#6dda6dbd !important");
        if (
          $(checkBtnId).attr("style", "background-color: #6dda6dbd !important")
        ) {
          chosenImages.push(chosenImagesSrc);
        }
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
      counterFive++;
    });
  }
  
  // If check  button color = #6dda6dbd, save to local storage
  function saveImages(event) {

    event.preventDefault();
    localStorage.setItem("images", JSON.stringify(chosenImages));
    if (localStorage.getItem("images")==="[]" ||localStorage.getItem("images")===null){
      alert("You didn't select any images");
    }
    // window.open("./finalpage.html")
    console.log(localStorage.getItem("images"));
  }
  $("#submit-btn").on("click", saveImages);
});
