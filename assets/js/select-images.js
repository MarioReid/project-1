$(document).ready(function () {
  // Variables
  var APIkey = "563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3";
  var query = "work";

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
    function newImage(event) {
      var workDiv = $("#work-image");
      workDiv.empty();
      var randomImage = Math.floor(Math.random() * response.photos.length);
      // Add header to the page
      var workHeader = $("<h2>");
      workHeader.text("Work");
      workDiv.append(workHeader);
      // Create image and add it to the page
      imageSource = response.photos[randomImage].src.original;
      var workImage = $("<img>");
      workImage.attr("src", imageSource);
      workImage.addClass("image-choice");
      workDiv.append(workImage);
      // Create check button
      var checkBtn = $("<button>");
      checkBtn.addClass("btn check-btn");
      var checkIcon = $("<i>");
      checkIcon.addClass("fas fa-check-square fa-lg");
      checkBtn.append(checkIcon);
      // Create times button
      var timesBtn = $("<button>");
      timesBtn.addClass("btn times-btn");
      var timesIcon = $("<i>");
      timesIcon.addClass("fas fa-times-circle fa-lg");
      timesBtn.append(timesIcon);
      // Append buttons to the work div
      workDiv.append(checkBtn);
      workDiv.append(timesBtn);
      console.log("You ran the newImage function!")
    }
    newImage();
    // If the check button is clicked, the image stays. If the times button is clicked, a new image is generated
    $(".check-btn").on("click", keepImage);
    $(".times-btn").on("click", newImage);
  });
});

// If check  button color = #6dda6dbd, add to vision board
