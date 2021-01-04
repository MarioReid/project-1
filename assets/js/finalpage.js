$(document).ready(function () {
	// Variables
	var htmlContents;
	var APIkey = "12d4c39638bec326a8fe210ca42c345e";
	// var documentUrl = "https://marioreid.github.io/project-1/finalpage.html";
	var queryUrl =
		"https://cors-anywhere.herokuapp.com/http://api.pdflayer.com/api/convert" +
		"?access_key=" +
		APIkey +
		"&document_html=" +
		htmlContents +
		"&delay=2000" +
		"&force=1";
	//https://api.screenshotlayer.com/api/capture?access_key=eaf25249dc224e30241c400939108e64&url=https://marioreid.github.io/project-1/finalpage.html&viewport=1440x900&fullpage=1&delay=2&force=1
	var visionBoard = JSON.parse(localStorage.getItem("images")) || [];

	// Append images from local storage
	for (var i = 0; i < visionBoard.length; i++) {
		console.log(visionBoard[i]);
		var visionBoardDiv = $("#vision-board");
		var images = $("<img>");
		images.attr("src", visionBoard[i]);
		visionBoardDiv.append(images);
	}

	$(".pdf-btn").on("click", openPdf);
	// window.open(queryUrl);

	// AJAX call to download vision board as a PDF
	function openPdf() {
		htmlContents = document.querySelector("html").innerHTML;
		$.ajax({
			url: queryUrl,
			method: "POST",
		}).then(function (response) {
			console.log(response);
		});
	}
});
