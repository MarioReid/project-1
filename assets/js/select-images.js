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
    imageSource = response.photos[0].src.original;
    // Select image
    var workDiv = $("#work-image");
    var workImage = $("<img>");
    workImage.attr("src", imageSource);
    workImage.addClass("image-choice");
    workDiv.append(workImage);
    // If src is not empty, add buttons
  });
});
