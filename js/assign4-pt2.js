/* JQuery for validation
		displays error message if form input is not a number or empty
		*/

		$(document).ready(function () {
			$("#myform").validate({
				// Rules for each input item
				rules: {
					hours: {
						required: true,
						number: true
					},
					rate: {
						required: true,
						number: true
					},
					hoursOut: {
						required: true,
						number: true
					},

					rateOut: {
						required: true,
						number: true
					},
					calGross: {
						required: true,
						number: true
					},



				}
			});
		});
// Loop program for all six employees

//var employeeCounter = 1; // Counter to loop for six employees

function process() {
	//declare and define variables 
	var grossSal;
	var hourArray = new Array(); //create array to gather data from forms
	var rateArray = new Array();
	var calGrossArray = new Array();
	var calGrossArrayOver = new Array();

		
	for (var i=0; i<6; i++) //loops through the array 6 times
{
	
	hourArray[i] = document.myform.hours[i].value; // User input hours
	rateArray[i] = document.myform.rate[i].value; // User input rate

	//calculate total overtime
	calGrossArray[i] = parseFloat(hourArray[i] * rateArray[i]).toFixed(2);


	// If no overtime worked

		if (hourArray[i] <= 40) {


			// show results in form fields
			document.getElementById("hoursOut" + i).value = hourArray[i]; // output user hours
			document.getElementById("rateOut" + i).value = rateArray[i]; //User input rate
			document.getElementById("calGross" + i).value = calGrossArray[i];

		}

		// Overtime has been worked
		else {
			// Calculate straight time ( calGrossArry) and add overtime ( hours over 40 * 1.5 * rate )
			calGrossArrayOver[i] = parseFloat((40 * rateArray[i]) + (((hourArray[i] - 40) * (rateArray[i] * 1.5)))).toFixed(2);

			// Output gross for employee
			document.getElementById("hoursOut" + i).value = hourArray[i]; // output user hours
			document.getElementById("rateOut" + i).value = rateArray[i]; //User input rate
			document.getElementById("calGross" + i).value = calGrossArrayOver[i]; //user gross rate

		} // End else
		console.log("I'm looping!");
		// Increment employee counter
		//employeeCounter++;
	//} // End while
}
}

//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});