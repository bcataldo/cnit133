/* JQuery for validation
	displays error message if form input is not a number or empty
	*/

$(document).ready(function () {
	$("#myform").validate({
		// Rules for each input item
		rules: {
			temperature: {
				required: true,
				number: true,
			},
			

		}
	});
});

	//the process function is called if the user clicks the Farenheit to Celsius button 	
function process() {
	
	if ($("#myform").valid()) {
		
	//input the value from form text box using getElementById 	
	var faren = parseInt(document.getElementById("temperature").value);


	//multiply to get conversion to celsius

	var convertToC = ((5 / 9) * (faren - 32)).toFixed(1);

	//Display the conversion in output field in form
	document.getElementById("output").value = convertToC + " Celsius";

}
}
	
//the process1 function is called if the user clicks the Celsius to Farenheit button 	

function process1() {
	
	if ($("#myform").valid()) {

		//input the celsius value from form text box using getElementById 	
	var celsi = parseInt(document.getElementById("temperature").value);
		
	var convertToF = (((9 / 5) * celsi) + 32).toFixed(1);
	//multiply to get conversion round to two decimal

	//Display the conversion in output field
	document.getElementById("output").value = convertToF + " Farenheit";
}
}
//function converts to either farenheit or celsius depending on the button