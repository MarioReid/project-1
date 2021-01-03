$(document).ready(function () {
  // Variables
  var APIkey = "eaf25249dc224e30241c400939108e64";
  var documentUrl = "https://marioreid.github.io/project-1/finalpage.html";
  var queryUrl =
    "https://api.screenshotlayer.com/api/capture" +
    "?access_key=" +
    APIkey +
    "&url=" +
    documentUrl +
    "&viewport=1440x900" +
    "&fullpage=1" +
    "&format=JPG";
  var visionBoard = JSON.parse(localStorage.getItem("images")) || [];

  // Append images from local storage
  for (var i = 0; i < visionBoard.length; i++) {
    console.log(visionBoard[i]);
    var visionBoardDiv = $("#vision-board");
    var images = $("<img>");
    images.attr("src", visionBoard[i]);
    visionBoardDiv.append(images);
  }

  // AJAX call to download vision board as a PDF
  $.ajax({
    url: queryUrl,
    method: "POST",
  }).then(function (response) {
    $(".pdf-btn").on("click", function openPdf() {
      window.open(queryUrl);
    });
  });
});
