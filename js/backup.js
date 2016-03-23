/* JQuery for validation
		displays error message if form input is not a number
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


		}
	});
});



// Calculate the gross pay for six employees
// Declare vars for employee, employee hours string, employee hours integer, employee rate string, employee rate integer, and gross
// On submit get info from input cells, continue for six rounds for each employee
// Convert user input to integer
// If employee hours less than or equal to forty
// Output employee gross as hours times rate
// Else
// Output employee gross as forty hours times rate plus hours over 40 times 1.5 times rate

function process(){

		//declare and define variables 
		var hours, rate, gross;
				//var iOne = parseFloat(document.getElementById("itemOne").value);

		//var employeeCounter = 1; // Counter to loop for six employees
		var hours = parseFloat(document.getElementById("hours").value); // User input hours
		var rate = parseFloat(document.getElementById("rate").value); // User input rate
		var gross = 0; // Gross earnings for current employee

		// Loop program for all six employees
		//while (employeeCounter <= 6) {


			//{
				// If no overtime worked
				if (hours <= 40) {
				 var gross = hours * rate;
					
					// show results in form fields
					document.getElementById("hoursOut").value = hours; // output user hours
					document.getElementById("rateOut").value = rate; //User input rate
					document.getElementById("calGross") = gross; //user gross rate
				}

				// Overtime has been worked
				else {
					// Calculate straight time ( 40 hours * rate ) and add overtime ( hours over 40 * 1.5 * rate )
					var gross = (40 * rate) + ((hours - 40) * (rate * 1.5));
					
					// Output gross for employee
					document.getElementById("hoursout").value = hours; // output user hours
					document.getElementById("rateout").value = rate; //User input rate
					//document.getElementById("calGross") = gross; //user gross rate
					
				} // End else

				// Increment employee counter
				//employeeCounter++;
			} // End while
		//}
	//}
//}

// -->