$(document).ready(function () {
  var APIkey = "12d4c39638bec326a8fe210ca42c345e";
  var documentUrl = "https://marioreid.github.io/project-1/finalpage.html";
  var queryUrl =
    "http://api.pdflayer.com/api/convert?access_key=" +
    APIkey +
    "&document_url=" +
    documentUrl;
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(".pdf-btn").on("click",function openPdf(){
      console.log("You clicked the PDF button!");
      window.open(queryUrl);
    });
  });
});
