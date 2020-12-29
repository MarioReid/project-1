$(document).ready(function () {

  var APIkey = "563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3";

  $.ajax({
    url: "https://api.pexels.com/v1/search?query=dogs",
    method: "GET",
    headers: { Authorization: APIkey },
  }).then(function (response) {
    console.log(response);
  });

});
