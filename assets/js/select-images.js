$(document).ready(function () {
  var APIkey = "563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3";
  var query = "horses";

  $.ajax({
    url: "https://api.pexels.com/v1/search?query=" + query,
    method: "GET",
    headers: { Authorization: APIkey },
  }).then(function (response) {
    console.log(response);
    console.log(response.photos[0].src.original);
    // Create image and add it to the page
    imageSource = response.photos[0].src.original;
    var workDiv = $("#work-image");
    var workImage = $("<img>");
    workImage.attr("src", imageSource);
    workImage.addClass("image-choice");
    workDiv.append(workImage);
    // Create buttons and add them to the images
    var checkBtn = $("<button>");
    checkBtn.addClass("btn check-btn");
    var checkIcon = $("<i>");
    checkIcon.addClass("fas fa-check-square fa-lg");
    checkBtn.append(checkIcon);
    workDiv.append(checkBtn);
    // If src is not empty, add buttons
  });
});
