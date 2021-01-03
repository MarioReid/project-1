$(document).ready(function () {
  var quoteDiv = $("#quote");
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://qvoca-bestquotes-v1.p.rapidapi.com/quote?genre=inspirational",
    method: "GET",
    headers: {
      "x-rapidapi-key": "24e948b04dmshd01e0a3e648ff18p1648ddjsn98ffea1eea74",
      "x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.message);
    var quote = $("<h5>");
    quote.addClass("rightHandText");
    quote.text('"' + response.message + '"');
    quoteDiv.append(quote);
    var author = $("<h5>");
    author.text(" - " + response.author);
    quote.append(author);
  });
});
