$(document).ready(function () {
  // Variables
  var APIkey = "12d4c39638bec326a8fe210ca42c345e";
  var documentUrl = "https://marioreid.github.io/project-1/finalpage.html";
  var queryUrl =
    "http://api.pdflayer.com/api/convert?access_key=" +
    APIkey +
    "&document_url=" +
    documentUrl;
  var visionBoard = JSON.parse(localStorage.getItem("images")) || [];

  // AJAX call to download vision board as a PDF
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    $(".pdf-btn").on("click", function openPdf() {
      window.open(queryUrl);
    });
  });

  // Append images from local storage to the col-10
  for (var i = 0; i < visionBoard.length; i++) {
    console.log(visionBoard[i]);
    var visionBoardDiv = $("#vision-board");
    var images = $("<img>");
    images.attr("src", visionBoard[i]);
    visionBoardDiv.append(images);
  }
});
