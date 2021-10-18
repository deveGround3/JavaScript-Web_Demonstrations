$(document).ready(function() {
	$("#resultBox").hide();
	$("#top-text").keyup(
		function(){
			var tInput = $("#top-text").val();
			$("#top-caption").html(tInput);
		} ) 
	$("#bottom-text").keyup(
		function(){
			var bInput = $("#bottom-text").val();
			$("#bottom-caption").html(bInput);
		} ) 
	var iInput;
	$("#image-url").keyup(
		function(){
			iInput = $("#image-url").val();
			console.log(iInput);
		} )
	$(".image-button").click(
		function(){
			$("#img1").attr("src", iInput);
		} )
	$(".compile-button").click(
		function(){
			var topText = $("#top-text").val();
			var bottomText = $("#bottom-text").val();
			var imgSource = $("#img1").attr("src");
			if (topText != "" && bottomText != "" && imgSource != "#") {
				$("#resultBox").show();
				$("#img2").attr("src", imgSource);
				$("#resultTop p").html(topText);
				$("#resultBottom p").html(bottomText);
			}
		}
	)
	$(document).keyup (
		function() {
			//alert("key was pressed");
			if (event.which == 37) {
				$("#resultTop p").css("color", "maroon");
				$("#resultBottom p").css("color", "maroon");
			} else if (event.which == 38) {
				$("#resultTop p").css("color", "cadetblue");
				$("#resultBottom p").css("color", "cadetblue");
			} else if (event.which == 39) {
				$("#resultTop p").css("color", "palevioletred");
				$("#resultBottom p").css("color", "palevioletred");
			} else if (event.which == 40) {
				$("#resultTop p").css("color", "black");
				$("#resultBottom p").css("color", "black");
			}
		} )
} )