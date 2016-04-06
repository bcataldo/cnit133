// Declare and initialize global variables
var a, numberString, count;

//run init function to define array
init();

// The start function is called when the submit button is clicked.
// It always returns false to ensure that the form is never submitted to the server, which would cause the page
// to refresh.
//It grabs the input number and checks to see that it's valid

function start() {
	var input = parseInt(document.getElementById("input").value, 10);

	if (input < 10 || input > 100 || isNaN(input)) {
		alert("Not a valid number, please type in a number between 10 and 100!");
		setFocus();
		return false; //returns false so that it doesn't resubmit to browser
	}
	// Determines whether the number input is already in the array
	var found = false;
	for (var i = 0; i <= 10; i++) {
		if (a[i] == input) {
			// The number is already in the array
			found = true;
			break;
		}
	}

	// If the number was not found, push it onto the array, and append the number to the output string
	if (!found) {
		a.push(input);
		numberString += input + " ";
	}

	// Display message in text area

	count++;
	document.myForm.output.value = "You have entered " + count + " out of 10 tries " + "\nYour Numbers: " + numberString;
	setFocus();
	
	//if someone has submitted 10 times disables the input box
	if (count == 10) {
		alert("You have maxed out your 10 numbers. If you want to try again, hit the Start Over button.");
		document.getElementById('input').disabled = true;
	}
	
	// Always returns false, so that the form is never submitted to the server
	return false;
}

// This function is called when the page initially loads, and when the Reset button is clicked.
// It always return true, to allow the Reset button to clear all the form fields.
function init() {

// Initialize the global variables
//reset the input box so that's it's not disabled
		document.getElementById('input').disabled = false;
a = [];
	numberString = "";
	count = 0;
	return true;
}

function setFocus() {
	// Set the focus to the input element, and select its contents
	document.getElementById("input").select();
	document.getElementById("input").focus();
}

//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});