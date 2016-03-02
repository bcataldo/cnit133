/* JQuery for validation
	displays error message if form input is not a number or empty
	*/

$(document).ready(function () {
	$("#myform").validate({
		// Rules for each input item
		rules: {
			palindrome: {
				required: true,
				number: true,
				minlength: 5,
				maxlength: 5,
			},



		}
	});
});

//function shows palindrome or not, checks using charAt

function check() {



	if ($("#myform").valid()) {

		//declare variables

		var palindrome, palin, summary;

		// define variables and get input number from getElementById

		var palin = (document.getElementById("palindrome").value);

		if (palin.charAt(0) == palin.charAt(4) && palin.charAt(1) == palin.charAt(3)) {


			alert("You have typed in a palindrome"); //alert that they typed in a palindrome
		} else {
			alert("You have not typed in a palindrome"); //alert that they have not typed in a palindrome
		}

		


		}
	}

// This script is for the jquery button that shows the instructions

 
$(function() {

$( "#dialog" ).dialog({
autoOpen: false,
show: {
effect: "blind",
duration: 1000
},

hide: {
effect: "explode",
duration: 1000
}
});

$( "#opener" ).click(function() {
$( "#dialog" ).dialog( "open" );
});
});


