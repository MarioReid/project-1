$(document).ready(function () {
  // Variables
  var APIkey = "563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3";
  var query = "work";
  var randomImage;

  // Function to keep image when the check mark is clicked
  function keepImage(event) {
    event.preventDefault();
    $(".check-btn").attr("style", "background-color:#6dda6dbd");
  }

  $.ajax({
    url: "https://api.pexels.com/v1/search?query=" + query,
    method: "GET",
    headers: { Authorization: APIkey },
  }).then(function (response) {
    console.log(response);
    // Variables
    var workDiv = $("#work");
    var workImageDiv = $("#work-image");
    var workHeader = $("<h2>");
    var checkBtn = $("<button>");
    var timesBtn = $("<button>");
    // Function to create the image and the header
    function createWorkImage() {
      workImageDiv.empty();
      randomImage = Math.floor(Math.random() * response.photos.length);
      // Add header to the page
      workHeader.text("Work");
      workImageDiv.append(workHeader);
      workDiv.append(workImageDiv);
      // Create image and add it to the page
      imageSource = response.photos[randomImage].src.original;
      var workImage = $("<img>");
      workImage.attr("src", imageSource);
      workImage.addClass("image-choice");
      workImageDiv.append(workImage);
      workDiv.append(workImageDiv);
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
    workDiv.append(checkBtn);
    workDiv.append(timesBtn);

    createWorkImage();

    // Function to get a new image when the times button is clicked
    function getNewImage(event) {
      if ($(".check-btn").attr("style", "background-color:#6dda6dbd")) {
        $(".check-btn").attr("style", "background-color: #464646a3");
      }
      createWorkImage();
    }

    // Event listners
    $(".check-btn").on("click", keepImage);
    $(".times-btn").on("click", getNewImage);
  });
});

// If check  button color = #6dda6dbd, add to vision board
