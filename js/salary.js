// Loop program for all six employees

var employeeCounter = 1; // Counter to loop for six employees

function process() {
	//declare and define variables 
	var hours, rate, grossSal;
	var hours = parseFloat(document.getElementById("hours").value); // User input hours
	var rate = parseFloat(document.getElementById("rate").value); // User input rate

	//calculate total without overtime
	var grossSal = hours * rate;


	// If no overtime worked
	while (employeeCounter <= 6) {

		if (hours <= 40) {


			// show results in form fields
			document.getElementById("hoursOut").value = hours; // output user hours
			document.getElementById("rateOut").value = rate; //User input rate
			document.getElementById("calGross").value = grossSal;

		}

		// Overtime has been worked
		else {
			// Calculate straight time ( 40 hours * rate ) and add overtime ( hours over 40 * 1.5 * rate )
			var grossSal = (40 * rate) + ((hours - 40) * (rate * 1.5));

			// Output gross for employee
			document.getElementById("hoursOut").value = hours; // output user hours
			document.getElementById("rateOut").value = rate; //User input rate
			document.getElementById("calGross").value = grossSal; //user gross rate

		} // End else
		console.log("I'm looping!");
		// Increment employee counter
		employeeCounter++;
	} // End while
}